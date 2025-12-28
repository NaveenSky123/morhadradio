// Time-synced radio player hook
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Playlist,
  Track,
  getCurrentPlaylist,
  getElapsedTime,
  getPlaylistDuration,
  getRemainingTime,
  playlists,
} from '@/lib/playlists';

interface RadioPlayerState {
  isPlaying: boolean;
  currentPlaylist: Playlist | null;
  currentTrackTitle: string;
  elapsedTime: number;
  remainingTime: number;
  totalDuration: number;
  hasContent: boolean;
  isReady: boolean;
}

// Store actual durations after loading
const trackDurations: Map<string, number> = new Map();
let durationsLoaded = false;

// Load all track durations upfront
const loadAllDurations = (): Promise<void> => {
  return new Promise((resolve) => {
    const allTracks: Track[] = [];
    playlists.forEach(p => allTracks.push(...p.tracks));
    
    if (allTracks.length === 0) {
      durationsLoaded = true;
      resolve();
      return;
    }

    let loaded = 0;
    const total = allTracks.length;

    allTracks.forEach((track) => {
      const audio = new Audio();
      audio.preload = 'metadata';
      
      const handleLoaded = () => {
        if (audio.duration && isFinite(audio.duration)) {
          trackDurations.set(track.src, audio.duration);
          track.duration = audio.duration;
        }
        loaded++;
        if (loaded >= total) {
          durationsLoaded = true;
          resolve();
        }
      };

      audio.onloadedmetadata = handleLoaded;
      audio.onerror = handleLoaded;
      audio.src = track.src;
    });

    setTimeout(() => {
      if (!durationsLoaded) {
        durationsLoaded = true;
        resolve();
      }
    }, 5000);
  });
};

// Get track duration (from cache or default)
const getTrackDuration = (track: Track): number => {
  return trackDurations.get(track.src) || track.duration;
};

// Get current track and position based on SYSTEM TIME
const getTimeBasedTrackInfo = (playlist: Playlist): { 
  track: Track; 
  seekPosition: number; 
  trackIndex: number;
  elapsedInPlaylist: number;
} | null => {
  const now = new Date();
  const startTime = new Date(now);
  startTime.setHours(playlist.startHour, playlist.startMinute, 0, 0);
  
  const elapsedSeconds = (now.getTime() - startTime.getTime()) / 1000;
  
  if (elapsedSeconds < 0) return null;
  
  let accumulatedTime = 0;
  
  for (let i = 0; i < playlist.tracks.length; i++) {
    const track = playlist.tracks[i];
    const trackDuration = getTrackDuration(track);
    
    if (accumulatedTime + trackDuration > elapsedSeconds) {
      const seekPosition = elapsedSeconds - accumulatedTime;
      return {
        track,
        seekPosition,
        trackIndex: i,
        elapsedInPlaylist: elapsedSeconds,
      };
    }
    accumulatedTime += trackDuration;
  }
  
  return null; // Playlist has ended
};

export const useRadioPlayer = () => {
  const [state, setState] = useState<RadioPlayerState>({
    isPlaying: false,
    currentPlaylist: null,
    currentTrackTitle: '',
    elapsedTime: 0,
    remainingTime: 0,
    totalDuration: 0,
    hasContent: false,
    isReady: false,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const syncIntervalRef = useRef<number | null>(null);
  const currentTrackIndexRef = useRef<number>(-1);
  const currentSrcRef = useRef<string>('');
  const isPlayingRef = useRef(false);
  const playRequestIdRef = useRef(0); // Cancellation token for async operations

  // Initialize audio and load durations
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.preload = 'auto';

    loadAllDurations().then(() => {
      setState(prev => ({ ...prev, isReady: true }));
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
    };
  }, []);

  // Sync playback to system time - the core time-sync logic
  const syncPlayback = useCallback(() => {
    if (!isPlayingRef.current || !audioRef.current) return;

    const playlist = getCurrentPlaylist();
    if (!playlist || playlist.tracks.length === 0) {
      // No active playlist, stop
      audioRef.current.pause();
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const trackInfo = getTimeBasedTrackInfo(playlist);
    
    if (!trackInfo) {
      // Playlist ended
      audioRef.current.pause();
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const { track, seekPosition, trackIndex } = trackInfo;
    const trackDuration = getTrackDuration(track);
    
    // Clamp seek position to valid range
    const clampedSeek = Math.min(Math.max(0, seekPosition), trackDuration - 0.1);

    // Check if we need to switch tracks
    if (track.src !== currentSrcRef.current) {
      // Different track - load and seek
      currentTrackIndexRef.current = trackIndex;
      currentSrcRef.current = track.src;
      
      const currentRequestId = ++playRequestIdRef.current;
      
      audioRef.current.src = track.src;
      
      const handleMetadata = () => {
        if (playRequestIdRef.current !== currentRequestId) return; // Stale request
        if (!audioRef.current) return;
        
        audioRef.current.currentTime = clampedSeek;
        audioRef.current.play().catch(console.error);
        audioRef.current.removeEventListener('loadedmetadata', handleMetadata);
      };
      
      audioRef.current.addEventListener('loadedmetadata', handleMetadata);
      audioRef.current.load();
    } else {
      // Same track - check if we need to resync (drift > 1 second)
      const drift = Math.abs(audioRef.current.currentTime - clampedSeek);
      if (drift > 1) {
        audioRef.current.currentTime = clampedSeek;
      }
    }
  }, []);

  // Update display every second
  const updateTimeDisplay = useCallback(() => {
    const playlist = getCurrentPlaylist();
    
    if (!playlist) {
      setState(prev => ({
        ...prev,
        currentPlaylist: null,
        hasContent: false,
        currentTrackTitle: '',
        elapsedTime: 0,
        remainingTime: 0,
        totalDuration: 0,
      }));
      return;
    }

    const totalDuration = getPlaylistDuration(playlist);
    const elapsed = getElapsedTime(playlist);
    const remaining = getRemainingTime(playlist);
    const hasContent = playlist.tracks.length > 0;
    
    const trackInfo = getTimeBasedTrackInfo(playlist);

    setState(prev => ({
      ...prev,
      currentPlaylist: playlist,
      hasContent,
      currentTrackTitle: trackInfo?.track.title || '',
      elapsedTime: elapsed,
      remainingTime: remaining,
      totalDuration,
    }));

    // Auto-stop if playlist ended while playing
    if (remaining <= 0 && isPlayingRef.current) {
      if (audioRef.current) audioRef.current.pause();
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  // Start display update interval
  useEffect(() => {
    updateTimeDisplay();
    intervalRef.current = window.setInterval(updateTimeDisplay, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updateTimeDisplay]);

  // Main play function - syncs to system time
  const play = useCallback(() => {
    const playlist = getCurrentPlaylist();
    if (!playlist || playlist.tracks.length === 0 || !audioRef.current) {
      return;
    }

    const trackInfo = getTimeBasedTrackInfo(playlist);
    
    if (!trackInfo) {
      setState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const { track, seekPosition, trackIndex } = trackInfo;
    const trackDuration = getTrackDuration(track);
    const clampedSeek = Math.min(Math.max(0, seekPosition), trackDuration - 0.1);
    
    // Increment request ID to cancel any pending operations
    const currentRequestId = ++playRequestIdRef.current;
    
    isPlayingRef.current = true;
    currentTrackIndexRef.current = trackIndex;
    
    // Check if same track is already loaded
    if (track.src === currentSrcRef.current && audioRef.current.readyState >= 1) {
      // Already have metadata, just seek and play
      audioRef.current.currentTime = clampedSeek;
      audioRef.current.play().catch((err) => {
        console.error('Play failed:', err);
        isPlayingRef.current = false;
        setState(prev => ({ ...prev, isPlaying: false }));
      });
    } else {
      // Need to load new track
      currentSrcRef.current = track.src;
      audioRef.current.src = track.src;
      
      const handleMetadata = () => {
        if (playRequestIdRef.current !== currentRequestId) return; // Stale
        if (!audioRef.current) return;
        
        audioRef.current.currentTime = clampedSeek;
        audioRef.current.play().catch((err) => {
          console.error('Play failed:', err);
          isPlayingRef.current = false;
          setState(prev => ({ ...prev, isPlaying: false }));
        });
        audioRef.current.removeEventListener('loadedmetadata', handleMetadata);
      };
      
      audioRef.current.addEventListener('loadedmetadata', handleMetadata);
      audioRef.current.load();
    }

    // Handle track end - resync based on time
    audioRef.current.onended = () => {
      if (isPlayingRef.current) {
        syncPlayback();
      }
    };
    
    audioRef.current.onerror = () => {
      console.error('Audio error');
      if (isPlayingRef.current) {
        syncPlayback();
      }
    };

    setState(prev => ({ ...prev, isPlaying: true }));
    
    // Start continuous sync interval (every 2 seconds)
    if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
    syncIntervalRef.current = window.setInterval(syncPlayback, 2000);
  }, [syncPlayback]);

  // Pause
  const pause = useCallback(() => {
    // Increment request ID to cancel pending play operations
    playRequestIdRef.current++;
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (syncIntervalRef.current) {
      clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = null;
    }
    isPlayingRef.current = false;
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  // Toggle
  const togglePlayPause = useCallback(() => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  return {
    ...state,
    play,
    pause,
    togglePlayPause,
  };
};

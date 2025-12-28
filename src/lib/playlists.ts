// Playlist configuration for Morthad Radio
// Each playlist has a start time (24h format) and audio tracks

export interface Track {
  id: string;
  title: string;
  src: string;
  duration: number; // Duration in seconds
}

export interface Playlist {
  id: string;
  name: string;
  startHour: number;
  startMinute: number;
  tracks: Track[];
}

// Playlist definitions with start times
// Playlist 1: 9:00 AM
// Playlist 2: 2:00 PM
// Playlist 3: 6:40 PM (Today's broadcast)
// Playlist 4: 10:50 PM

export const playlists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Morning Waves',
    startHour: 9,
    startMinute: 0,
    tracks: [],
  },
  {
    id: 'playlist-2',
    name: 'Afternoon Vibes',
    startHour: 14, // 2:00 PM
    startMinute: 0,
    tracks: [],
  },
  {
    id: 'playlist-3',
    name: 'Evening Sessions',
    startHour: 19, // 7:05 PM
    startMinute: 5,
    tracks: [
      {
        id: '1',
        title: 'Aarya Nanu',
        src: '/audio/aarya-nanu-01.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Anjani Tanayya',
        src: '/audio/anjani-tanayya-13.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Gajavadana Mix',
        src: '/audio/gajavadana-mix-17.mp3',
        duration: 300, // Will be updated dynamically
      },
    ],
  },
  {
    id: 'playlist-4',
    name: 'Night Echoes',
    startHour: 22, // 10:50 PM
    startMinute: 50,
    tracks: [],
  },
];

// Calculate total duration of a playlist in seconds
export const getPlaylistDuration = (playlist: Playlist): number => {
  return playlist.tracks.reduce((total, track) => total + track.duration, 0);
};

// Get playlist start time as Date object for today
export const getPlaylistStartTime = (playlist: Playlist): Date => {
  const now = new Date();
  const startTime = new Date(now);
  startTime.setHours(playlist.startHour, playlist.startMinute, 0, 0);
  return startTime;
};

// Get the currently active playlist based on system time
export const getCurrentPlaylist = (): Playlist | null => {
  const now = new Date();
  
  // Sort playlists by start time
  const sortedPlaylists = [...playlists].sort((a, b) => {
    const aMinutes = a.startHour * 60 + a.startMinute;
    const bMinutes = b.startHour * 60 + b.startMinute;
    return aMinutes - bMinutes;
  });

  // Find the active playlist
  for (let i = sortedPlaylists.length - 1; i >= 0; i--) {
    const playlist = sortedPlaylists[i];
    const startTime = getPlaylistStartTime(playlist);
    const duration = getPlaylistDuration(playlist);
    const endTime = new Date(startTime.getTime() + duration * 1000);

    if (now >= startTime && now < endTime) {
      return playlist;
    }
  }

  return null;
};

// Calculate elapsed time since playlist started (in seconds)
export const getElapsedTime = (playlist: Playlist): number => {
  const now = new Date();
  const startTime = getPlaylistStartTime(playlist);
  const elapsedMs = now.getTime() - startTime.getTime();
  return Math.max(0, Math.floor(elapsedMs / 1000));
};

// Find which track should be playing and at what position
export const getCurrentTrackInfo = (
  playlist: Playlist
): { track: Track; position: number; trackIndex: number } | null => {
  const elapsed = getElapsedTime(playlist);
  let accumulated = 0;

  for (let i = 0; i < playlist.tracks.length; i++) {
    const track = playlist.tracks[i];
    if (accumulated + track.duration > elapsed) {
      return {
        track,
        position: elapsed - accumulated,
        trackIndex: i,
      };
    }
    accumulated += track.duration;
  }

  return null; // Playlist has ended
};

// Get remaining time in the playlist
export const getRemainingTime = (playlist: Playlist): number => {
  const duration = getPlaylistDuration(playlist);
  const elapsed = getElapsedTime(playlist);
  return Math.max(0, duration - elapsed);
};

// Get the next upcoming playlist (with tracks) that hasn't started yet
export const getNextUpcomingPlaylist = (): { playlist: Playlist; secondsUntilStart: number } | null => {
  const now = new Date();
  
  // Filter playlists that have tracks and sort by start time
  const playlistsWithTracks = playlists
    .filter(p => p.tracks.length > 0)
    .map(playlist => {
      const startTime = getPlaylistStartTime(playlist);
      const secondsUntilStart = Math.floor((startTime.getTime() - now.getTime()) / 1000);
      return { playlist, startTime, secondsUntilStart };
    })
    .filter(p => p.secondsUntilStart > 0) // Only future playlists
    .sort((a, b) => a.secondsUntilStart - b.secondsUntilStart);

  if (playlistsWithTracks.length === 0) {
    return null;
  }

  const next = playlistsWithTracks[0];
  return { playlist: next.playlist, secondsUntilStart: next.secondsUntilStart };
};

// Format time as MM:SS or HH:MM:SS
export const formatTime = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

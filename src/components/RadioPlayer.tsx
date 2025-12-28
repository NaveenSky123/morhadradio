import { useState, useEffect } from 'react';
import { useRadioPlayer } from '@/hooks/useRadioPlayer';
import { formatTime, playlists, getPlaylistStartTime, getPlaylistDuration, getNextUpcomingPlaylist } from '@/lib/playlists';
import { Play, Pause, Radio, Clock } from 'lucide-react';

const RadioPlayer = () => {
  const {
    isPlaying,
    currentPlaylist,
    currentTrackTitle,
    hasContent,
    elapsedTime,
    remainingTime,
    isReady,
    togglePlayPause,
  } = useRadioPlayer();

  const [nextBroadcast, setNextBroadcast] = useState<{ name: string; countdown: number } | null>(null);

  // Update countdown timer every second
  useEffect(() => {
    const updateCountdown = () => {
      const next = getNextUpcomingPlaylist();
      if (next) {
        setNextBroadcast({
          name: next.playlist.name,
          countdown: next.secondsUntilStart,
        });
      } else {
        setNextBroadcast(null);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const showNoContent = !currentPlaylist || !hasContent;
  const playlistEnded = currentPlaylist && hasContent && remainingTime <= 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in">
        {/* Logo and title */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Radio className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wide text-foreground">
              Morthad Radio
            </h1>
          </div>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Playlist info */}
        <div className="flex flex-col items-center gap-2 min-h-[100px]">
          {currentPlaylist && hasContent ? (
            <>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Now Playing
              </p>
              <h2 className="text-2xl md:text-3xl font-display text-foreground">
                {currentPlaylist.name}
              </h2>
              {currentTrackTitle && (
                <p className="text-primary/80 text-lg mt-1">
                  ♪ {currentTrackTitle}
                </p>
              )}
            </>
          ) : nextBroadcast ? (
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Next Broadcast
              </p>
              <h2 className="text-xl md:text-2xl font-display text-foreground">
                {nextBroadcast.name}
              </h2>
              <div className="flex items-center gap-2 mt-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-lg font-mono text-primary">
                  {formatTime(nextBroadcast.countdown)}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-lg text-muted-foreground">
              No upcoming broadcasts
            </p>
          )}
        </div>

        {/* Play button */}
        <div className="relative">
          {/* Rotating outer rings */}
          <div className="absolute inset-[-20px] rounded-full border border-primary/10 animate-spin-clockwise" />
          <div className="absolute inset-[-35px] rounded-full border border-dashed border-primary/15 animate-spin-counter" />
          <div className="absolute inset-[-50px] rounded-full border border-dotted border-primary/10 animate-spin-clockwise-slow" />
          
          {/* Outer glow ring */}
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isPlaying ? 'animate-pulse-glow scale-110' : 'opacity-0 scale-100'
            }`}
          />
          
          {/* Button */}
          <button
            onClick={togglePlayPause}
            disabled={showNoContent || !!playlistEnded || !isReady}
            className={`
              relative w-32 h-32 md:w-40 md:h-40 rounded-full 
              bg-gradient-to-br from-secondary to-card
              border-2 border-primary/30
              flex items-center justify-center
              transition-all duration-300 ease-out
              ${showNoContent || playlistEnded || !isReady
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 hover:border-primary/60 active:scale-95 cursor-pointer'
              }
              ${isPlaying ? 'glow-primary-intense' : ''}
            `}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {/* Inner ring decoration */}
            <div className="absolute inset-3 rounded-full border border-primary/20" />
            <div className="absolute inset-6 rounded-full border border-primary/10" />
            
            {/* Icon */}
            {isPlaying ? (
              <Pause className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary" />
            ) : (
              <Play className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary ml-2" />
            )}
          </button>
        </div>

        {/* Time display */}
        {currentPlaylist && hasContent && !playlistEnded && (
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Elapsed: {formatTime(elapsedTime)}</span>
              <span className="text-primary/50">•</span>
              <span>Remaining: {formatTime(remainingTime)}</span>
            </div>
          </div>
        )}

        {playlistEnded && (
          <p className="text-muted-foreground mt-4">
            This broadcast has ended
          </p>
        )}

        {/* Program Schedule */}
        <div className="mt-6 w-full max-w-lg">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-3 h-3 text-primary" />
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Schedule</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {playlists.map((playlist) => {
              const startTime = getPlaylistStartTime(playlist);
              const duration = getPlaylistDuration(playlist);
              const endTime = new Date(startTime.getTime() + duration * 1000);
              const now = new Date();
              const isActive = now >= startTime && now < endTime;
              const isPast = now >= endTime;
              const hasTracks = playlist.tracks.length > 0;
              
              const formatScheduleTime = (date: Date) => {
                return date.toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit',
                  hour12: true 
                });
              };

              return (
                <div 
                  key={playlist.id}
                  className={`
                    flex items-center gap-2 px-2 py-1.5 rounded-md text-xs
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/20 border border-primary/40' 
                      : 'bg-secondary/30 border border-border/30'
                    }
                    ${isPast ? 'opacity-40' : ''}
                  `}
                >
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-primary animate-pulse' : hasTracks ? 'bg-primary/40' : 'bg-muted-foreground/30'}`} />
                  <span className={`truncate ${isActive ? 'text-primary' : 'text-foreground/80'}`}>
                    {playlist.name}
                  </span>
                  <span className="text-muted-foreground ml-auto flex-shrink-0">
                    {hasTracks ? formatScheduleTime(startTime) : '—'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status indicator - moved up */}
        <div className="flex items-center gap-2 mt-4">
          <div 
            className={`w-2 h-2 rounded-full transition-colors ${
              isPlaying 
                ? 'bg-primary animate-pulse' 
                : currentPlaylist && hasContent
                  ? 'bg-primary/50' 
                  : 'bg-muted-foreground/30'
            }`}
          />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {!isReady ? 'Loading' : isPlaying ? 'Live' : currentPlaylist && hasContent ? 'Ready' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Developer credits */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[10px] text-muted-foreground/60 tracking-wider animate-pulse-subtle">
          designed and developed by{' '}
          <span className="text-primary/70">Algot Naveen</span>
          <span className="text-muted-foreground/40">, </span>
          <span className="text-foreground/50">Morthad</span>
        </p>
      </div>

      {/* Audio visualizer bars */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-150 ${
              isPlaying ? 'bg-primary' : 'bg-primary/30'
            }`}
            style={{
              height: isPlaying ? `${8 + Math.sin(Date.now() / 200 + i) * 12 + 12}px` : '6px',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioPlayer;

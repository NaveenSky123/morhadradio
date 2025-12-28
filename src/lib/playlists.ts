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
// Playlist 3: 6:00 PM (Today's broadcast)
// Playlist 4: 9:00 PM

export const playlists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Morning Waves',
    startHour: 11,
    startMinute: 05,
    tracks: [      
      {
        id: '1',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chakram songs - Oke Oka Mata',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: '/audio/Taal Se Taal Mila _ A.R Rahman _ Alka Yagnik _ Udit Narayan _ Taal (1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Edo Priyaragam-Aarya',
        src: '/audio/Edo Priyaragam Video Song __ Aarya Video Songs __ Allu Arjun_ Anuradha Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Hrudhayam - Parugu',
        src: '/audio/Hrudhayam Full Video Song _ Parugu Video Songs _ Allu Arjun_ Sheela _ Bhaskar _ Mani Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '5',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: '/audio/Iddarammayilatho Video Songs _ Violin Song (Girl Just) Video Song _ Allu Arjun_ Amala Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Megham Karigenu-Naaga',
        src: '/audio/Naaga Movie Video Songs __ Megham Karigenu Video Song __ Jr.NTR _ Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: '/audio/Nammaka Tappani song with Telugu lyrics _ Bommarillu Songs _ Siddharth_ Genelia _ Maa Paata Mee Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: '/audio/Nuvvu Nenu Movie __ Nee Kosame Video Song __ Uday Kiran_ Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },],
  },
  {
    id: 'playlist-2',
    name: 'Afternoon Vibes',
    startHour: 14, // 2:00 PM
    startMinute: 0,
    tracks: [      
      {
        id: '1',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: '/audio/Chennai Chandrama Ravi Teja_ Asin Super Hit Movie Song _ Telugu Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chakram songs - Oke Oka Mata',
        src: '/audio/Chakram songs - Oke Oka Mata - Prabhas Asin Charmi(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: '/audio/Taal Se Taal Mila _ A.R Rahman _ Alka Yagnik _ Udit Narayan _ Taal (1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Edo Priyaragam-Aarya',
        src: '/audio/Edo Priyaragam Video Song __ Aarya Video Songs __ Allu Arjun_ Anuradha Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Hrudhayam - Parugu',
        src: '/audio/Hrudhayam Full Video Song _ Parugu Video Songs _ Allu Arjun_ Sheela _ Bhaskar _ Mani Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '5',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: '/audio/Iddarammayilatho Video Songs _ Violin Song (Girl Just) Video Song _ Allu Arjun_ Amala Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Megham Karigenu-Naaga',
        src: '/audio/Naaga Movie Video Songs __ Megham Karigenu Video Song __ Jr.NTR _ Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: '/audio/Nammaka Tappani song with Telugu lyrics _ Bommarillu Songs _ Siddharth_ Genelia _ Maa Paata Mee Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: '/audio/Nuvvu Nenu Movie __ Nee Kosame Video Song __ Uday Kiran_ Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },],
  },
  {
    id: 'playlist-3',
    name: 'Evening Sessions',
    startHour: 18, // 7:05 PM
    startMinute: 0,
    tracks: [
      {
        id: '1',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: '/audio/Chennai Chandrama Ravi Teja_ Asin Super Hit Movie Song _ Telugu Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chakram songs - Oke Oka Mata',
        src: '/audio/Chakram songs - Oke Oka Mata - Prabhas Asin Charmi(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: '/audio/Taal Se Taal Mila _ A.R Rahman _ Alka Yagnik _ Udit Narayan _ Taal (1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Edo Priyaragam-Aarya',
        src: '/audio/Edo Priyaragam Video Song __ Aarya Video Songs __ Allu Arjun_ Anuradha Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Hrudhayam - Parugu',
        src: '/audio/Hrudhayam Full Video Song _ Parugu Video Songs _ Allu Arjun_ Sheela _ Bhaskar _ Mani Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '5',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: '/audio/Iddarammayilatho Video Songs _ Violin Song (Girl Just) Video Song _ Allu Arjun_ Amala Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Megham Karigenu-Naaga',
        src: '/audio/Naaga Movie Video Songs __ Megham Karigenu Video Song __ Jr.NTR _ Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: '/audio/Nammaka Tappani song with Telugu lyrics _ Bommarillu Songs _ Siddharth_ Genelia _ Maa Paata Mee Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: '/audio/Nuvvu Nenu Movie __ Nee Kosame Video Song __ Uday Kiran_ Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      
    ],
  },
  {
    id: 'playlist-4',
    name: 'Night Echoes',
    startHour: 21, // 9 PM
    startMinute: 0,
    tracks: [      
      {
        id: '1',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: '/audio/Chennai Chandrama Ravi Teja_ Asin Super Hit Movie Song _ Telugu Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chakram songs - Oke Oka Mata',
        src: '/audio/Chakram songs - Oke Oka Mata - Prabhas Asin Charmi(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: '/audio/Taal Se Taal Mila _ A.R Rahman _ Alka Yagnik _ Udit Narayan _ Taal (1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Edo Priyaragam-Aarya',
        src: '/audio/Edo Priyaragam Video Song __ Aarya Video Songs __ Allu Arjun_ Anuradha Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Hrudhayam - Parugu',
        src: '/audio/Hrudhayam Full Video Song _ Parugu Video Songs _ Allu Arjun_ Sheela _ Bhaskar _ Mani Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '5',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: '/audio/Iddarammayilatho Video Songs _ Violin Song (Girl Just) Video Song _ Allu Arjun_ Amala Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Megham Karigenu-Naaga',
        src: '/audio/Naaga Movie Video Songs __ Megham Karigenu Video Song __ Jr.NTR _ Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: '/audio/Nammaka Tappani song with Telugu lyrics _ Bommarillu Songs _ Siddharth_ Genelia _ Maa Paata Mee Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: '/audio/Nuvvu Nenu Movie __ Nee Kosame Video Song __ Uday Kiran_ Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },],
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

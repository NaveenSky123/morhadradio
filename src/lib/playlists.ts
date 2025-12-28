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
    startHour: 12,
    startMinute: 58,
    tracks: [     
      {
        id: '1',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Chakram songs - Oke Oka Mata',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a7',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '5',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Edo Priyaragam-Aarya',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '10',
        title: 'Hrudhayam - Parugu',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '11',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '12',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '13',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '14',
        title: 'Megham Karigenu-Naaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
       {
        id: '15',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '16',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nammaka%20Tappani%20song%20with%20Telugu%20lyrics%20_%20Bommarillu%20Songs%20_%20Siddharth_%20Genelia%20_%20Maa%20Paata%20Mee%20Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '17',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '18',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nuvvu%20Nenu%20Movie%20__%20Nee%20Kosame%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
    ],
  },
  {
    id: 'playlist-2',
    name: 'Afternoon Vibes',
    startHour: 14, // 2:00 PM
    startMinute: 0,
    tracks: [      
      {
        id: '1',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Chakram songs - Oke Oka Mata',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a7',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '5',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Edo Priyaragam-Aarya',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '10',
        title: 'Hrudhayam - Parugu',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '11',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '12',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '13',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '14',
        title: 'Megham Karigenu-Naaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
       {
        id: '15',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '16',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nammaka%20Tappani%20song%20with%20Telugu%20lyrics%20_%20Bommarillu%20Songs%20_%20Siddharth_%20Genelia%20_%20Maa%20Paata%20Mee%20Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '17',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '18',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nuvvu%20Nenu%20Movie%20__%20Nee%20Kosame%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
    ],
  },
  {
    id: 'playlist-3',
    name: 'Evening Sessions',
    startHour: 18, // 7:00 PM
    startMinute: 0,
    tracks: [
      {
        id: '1',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Chakram songs - Oke Oka Mata',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a7',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '5',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Edo Priyaragam-Aarya',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '10',
        title: 'Hrudhayam - Parugu',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '11',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '12',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '13',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '14',
        title: 'Megham Karigenu-Naaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
       {
        id: '15',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '16',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nammaka%20Tappani%20song%20with%20Telugu%20lyrics%20_%20Bommarillu%20Songs%20_%20Siddharth_%20Genelia%20_%20Maa%20Paata%20Mee%20Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '17',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '18',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nuvvu%20Nenu%20Movie%20__%20Nee%20Kosame%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a',
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
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '2',
        title: 'Chennai Chandrama Ravi Teja - Amma Nanna O Tamil Ammai',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '3',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '4',
        title: 'Chakram songs - Oke Oka Mata',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a7',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '5',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '6',
        title: 'Taal Se Taal Mila _ A.R Rahman ',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '7',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '8',
        title: 'Edo Priyaragam-Aarya',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '9',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '10',
        title: 'Hrudhayam - Parugu',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '11',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
     {
        id: '12',
        title: 'Violin Song (Girl Just)-Iddarammayilatho',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '13',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '14',
        title: 'Megham Karigenu-Naaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
       {
        id: '15',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '16',
        title: 'Nammaka Tappani-Bommarillu Songs',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nammaka%20Tappani%20song%20with%20Telugu%20lyrics%20_%20Bommarillu%20Songs%20_%20Siddharth_%20Genelia%20_%20Maa%20Paata%20Mee%20Nota(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '17',
        title: 'Santhosh Iron & Laundry Shop',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/santhosh%20adv.mp3',
        duration: 300, // Will be updated dynamically
      },
      {
        id: '18',
        title: 'Nee Kosame-Nuvvu Nenu-',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Nuvvu%20Nenu%20Movie%20__%20Nee%20Kosame%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a',
        duration: 300, // Will be updated dynamically
      },
    ],
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

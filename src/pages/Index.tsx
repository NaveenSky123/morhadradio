import RadioPlayer from '@/components/RadioPlayer';
import InstallPrompt from '@/components/InstallPrompt';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Morthad Radio - Time-Synced Radio Experience</title>
        <meta name="description" content="Tune in to Morthad Radio for scheduled playlists that sync across all devices. Experience radio the way it was meant to be heard." />
        <meta name="theme-color" content="#1a1512" />
        <link rel="canonical" href="https://morthad.radio" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <RadioPlayer />
        <InstallPrompt />
      </main>
    </>
  );
};

export default Index;

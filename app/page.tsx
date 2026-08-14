import PageBackground from '@/components/PageBackground';
import Nav, { FloatingCall } from '@/components/Nav';
import HomeHero from '@/components/HomeHero';
import HomeView from '@/components/HomeView';

export default function HomePage() {
  return (
    <>
      <PageBackground />
      <Nav variant="home" />
      <main className="flex flex-col relative z-20">
        <HomeHero />
        <HomeView />
      </main>
      <FloatingCall ariaLabel="Call After Eternity at +1 213 254 9766" />
    </>
  );
}
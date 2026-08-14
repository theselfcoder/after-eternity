import Particles from './Particles';

export default function PageBackground({ mode = 'dd2' }: { mode?: 'dd2' | 'radial' }) {
  if (mode === 'radial') {
    return (
      <div
        id="page-bg-radial"
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(138,0,0,0.16), #050505 55%)' }}
      />
    );
  }

  return (
    <>
      {/* Global Background Image Layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/DD2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Darkening overlay */}
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none" />
      <Particles />
    </>
  );
}
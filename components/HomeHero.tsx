import { EqualizerIcon, FilmIcon, ScissorsIcon, SparklesIcon, ChevronDownIcon } from './icons';

const PILLS = [
  {
    label: 'Color Grading',
    icon: SparklesIcon
  },
  {
    label: 'Editing',
    icon: ScissorsIcon
  },
  {
    label: 'Sound Design',
    icon: EqualizerIcon
  },
  {
    label: 'Full Post-Production',
    icon: FilmIcon
  }
];

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 md:pt-32 pb-24 perspective-container"
    >
      <div
        id="hero-vignette"
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.8) 100%)'
        }}
      ></div>

      <div id="hero-content" className="relative z-20 text-center px-4">
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          AFTER
          <br />
          ETERNITY
        </h1>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
          {PILLS.map((pill) => (
            <span
              key={pill.label}
              className="service-pill flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-crimson to-blood-red px-3 md:px-3.5 py-1.5 text-[10px] md:text-xs font-semibold tracking-wide text-white ring-1 ring-white/20 shadow-[0_0_16px_rgba(138,0,0,0.4)] transition-transform duration-300 hover:scale-105"
            >
              <pill.icon className="w-3.5 h-3.5" />
              {pill.label}
            </span>
          ))}
        </div>

        <p className="mt-6 md:mt-8 text-gray-400 font-sans max-w-2xl mx-auto text-sm md:text-lg tracking-wide text-center shadow-black drop-shadow-md">
          We help filmmakers bring their stories to life through cinematic color grading and post-production.
          Specializing in feature films, documentaries, and narrative storytelling, we craft images that enhance
          emotion, preserve visual consistency, and honor the director&apos;s creative vision all inside Davinci
          Resolve.
        </p>
      </div>

      <div
        id="hero-scroll"
        className="absolute bottom-6 md:bottom-10 z-30 flex flex-col items-center gap-2 text-white/50 animate-bounce"
      >
        <span className="text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap shadow-black drop-shadow-md">
          Discover Our Pipeline
        </span>
        <ChevronDownIcon className="w-5 h-5" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
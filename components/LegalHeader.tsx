import Link from 'next/link';
import { BackArrowIcon, LogoIcon } from './icons';
import ThemeToggle from './ThemeToggle';

export default function LegalHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-eternity-black/70 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <LogoIcon className="w-7 h-7 text-crimson" />
          <span className="font-serif font-bold tracking-widest text-sm sm:text-base">AFTER ETERNITY</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs tracking-[0.2em] text-gray-400 hover:text-crimson uppercase transition-colors"
          >
            <BackArrowIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
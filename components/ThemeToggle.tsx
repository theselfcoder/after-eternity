'use client';

import { SunIcon, MoonIcon } from './icons';

export default function ThemeToggle() {
  return (
    <button
      id="theme-toggle"
      aria-label="Toggle light mode"
      title="Toggle light mode"
      className="pointer-events-auto text-white hover:text-crimson transition-colors"
      onClick={() => {
        const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem('ae-theme', next);
        } catch (e) {
          /* storage unavailable */
        }
      }}
    >
      <SunIcon className="theme-icon theme-icon-sun w-6 h-6" />
      <MoonIcon className="theme-icon theme-icon-moon hidden w-6 h-6" />
    </button>
  );
}
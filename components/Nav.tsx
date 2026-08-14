'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoIcon, MenuIcon, PhoneIcon } from './icons';
import ThemeToggle from './ThemeToggle';

interface MenuLink {
  href: string;
  label: string;
}

const PHONE_LINK = 'tel:+12132549766';
const PHONE_TEXT = '213 254 9766';

const HOME_MENU: MenuLink[] = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
];

const PAGE_MENU: MenuLink[] = [{ href: '/', label: 'Home' }, ...HOME_MENU];

export function FloatingCall({ ariaLabel }: { ariaLabel: string }) {
  return (
    <a
      href={PHONE_LINK}
      aria-label={ariaLabel}
      className="sm:hidden fixed bottom-5 right-5 z-30 flex items-center justify-center rounded-full bg-crimson text-white shadow-xl shadow-crimson/40 hover:bg-bright-red transition-all duration-300"
    >
      <span className="relative flex items-center justify-center w-14 h-14">
        <span className="absolute inline-flex h-12 w-12 rounded-full bg-crimson opacity-60 animate-ping"></span>
        <PhoneIcon className="relative w-6 h-6" />
      </span>
    </a>
  );
}

export default function Nav({ variant, active }: { variant: 'home' | 'page'; active?: string }) {
  const [open, setOpen] = useState(false);
  const isHome = variant === 'home';
  const links = isHome ? HOME_MENU : PAGE_MENU;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const linkClass = (href: string) =>
    isHome
      ? 'menu-link font-serif text-4xl md:text-6xl text-white hover:text-crimson transition-all duration-300 my-4 tracking-widest uppercase'
      : 'menu-link font-serif text-3xl md:text-5xl transition-all duration-300 my-3 tracking-widest uppercase ' +
        (active === href ? 'text-crimson' : 'text-white hover:text-crimson');

  return (
    <>
      <nav id="site-nav" className={"fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center" + (isHome ? ' is-home' : '') + (scrolled ? ' is-scrolled' : '')}>
        {isHome ? (
          <div
            className="pointer-events-auto flex items-center gap-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setOpen(false);
            }}
          >
            <LogoIcon className="w-7 h-7 sm:w-8 sm:h-8 text-crimson" />
            <span className="hidden sm:inline font-serif font-bold text-lg sm:text-2xl text-white tracking-widest">
              AFTER ETERNITY
            </span>
          </div>
        ) : (
          <Link href="/" className="pointer-events-auto flex items-center gap-2">
            <LogoIcon className="w-7 h-7 sm:w-8 sm:h-8 text-crimson" />
            <span className="hidden sm:inline font-serif font-bold text-lg sm:text-2xl text-white tracking-widest">
              AFTER ETERNITY
            </span>
          </Link>
        )}

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={PHONE_LINK}
            aria-label="Call After Eternity at 213 254 9766"
            className="pointer-events-auto flex items-center gap-2 whitespace-nowrap bg-crimson text-white text-xs sm:text-sm font-bold tracking-wide px-4 sm:px-5 py-2 rounded-full hover:bg-white hover:text-crimson transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{PHONE_TEXT}</span>
          </a>
          <ThemeToggle />
          <button
            id="menu-toggle"
            aria-label="Open menu"
            className="pointer-events-auto text-white hover:text-red-500 transition-colors"
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <div
        id="overlay-menu"
        data-lenis-prevent
        className={
          'fixed inset-0 bg-eternity-black/95 z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out ' +
          (open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')
        }
      >
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={linkClass(link.href) + (open ? ' animate-fadeIn' : '')}
            style={{ animationDelay: index * 100 + 'ms' }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
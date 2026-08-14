import Link from 'next/link';
import { InstagramIcon, PhoneIcon } from './icons';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
];

interface SiteFooterProps {
  active?: string;
  legalActive?: string;
  copyright?: string;
  showPhone?: boolean;
}

export default function SiteFooter({
  active,
  legalActive,
  copyright = '\u00A9 2024 After Eternity. All Rights Reserved.',
  showPhone = true
}: SiteFooterProps) {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center gap-4 text-center">
        {showPhone && (
          <a
            href="tel:+12137156971"
            className="text-white hover:text-crimson transition-colors duration-300 flex items-center gap-2 text-base font-bold tracking-widest"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>213-715-6971</span>
          </a>
        )}
        <a
          href="https://instagram.com/iviujtaba"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-crimson transition-colors duration-300 flex items-center gap-2 text-xs tracking-widest uppercase font-bold"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>@iviujtaba</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-widest text-gray-500">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                (active === link.href ? 'text-gray-300 ' : '') + 'hover:text-crimson transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-600">
          <Link
            href="/privacy"
            className={
              (legalActive === 'privacy' ? 'text-gray-300 ' : '') + 'hover:text-crimson transition-colors'
            }
          >
            Privacy Policy
          </Link>
          <span className="text-gray-800">|</span>
          <Link
            href="/terms"
            className={
              (legalActive === 'terms' ? 'text-gray-300 ' : '') + 'hover:text-crimson transition-colors'
            }
          >
            Terms
          </Link>
        </div>
        <span className="text-gray-700 text-xs uppercase tracking-widest">{copyright}</span>
      </div>
    </footer>
  );
}
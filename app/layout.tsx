import type { Metadata, Viewport } from 'next';
import LenisProvider from '@/components/LenisProvider';
import './globals.css';

const FAVICON_SVG =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4YTAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMTJWNGExIDEgMCAwIDEgMS0xaDYuMjk3YTEgMSAwIDAgMSAuNjUgMS43NjdsLTEwIDEwYTEgMSAwIDAgMS0xLjc2Ny0uNjVsMi42MDEtNS43MjgiLz48cGF0aCBkPSJNMTIgMTIgMy4zODggMy4zODhhMSAxIDAgMCAwLTEuNDE0IDBMLjU4NiA0Ljc5M2ExIDEgMCAwIDAgMCAxLjQxNGw5LjE0MyA5LjE0MyIvPjwvc3ZnPg==';

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W4JLDHQM');`;

const THEME_INIT = `(function () {
  try { document.documentElement.dataset.theme = localStorage.getItem('ae-theme') || 'dark'; }
  catch (e) { document.documentElement.dataset.theme = 'dark'; }
})();`;

export const metadata: Metadata = {
  title: 'After Eternity | Film Production Studio',
  description:
    'After Eternity is a film production studio focused on precise visual storytelling, documentary filmmaking, and commercial production.',
  icons: {
    icon: FAVICON_SVG,
    shortcut: FAVICON_SVG
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Manrope:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4JLDHQM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
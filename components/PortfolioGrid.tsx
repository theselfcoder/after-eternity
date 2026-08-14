'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/site-data';
import { PlayCardIcon, YouTubeIcon } from './icons';

export default function PortfolioGrid() {
  const [playedIds, setPlayedIds] = useState<Record<string, boolean>>({});

  const play = (id: string) => {
    setPlayedIds((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  return (
    <>
      <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((p, index) =>
          playedIds[p.id] ? (
            <div key={p.id} className={'relative group ' + (index % 2 !== 0 ? 'md:mt-24' : '')}>
              <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-900 border border-white/10 shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={
                    'https://www.youtube.com/embed/' +
                    p.id +
                    '?autoplay=1&rel=0&modestbranding=1&origin=' +
                    encodeURIComponent(window.location.origin)
                  }
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ) : (
            <div key={p.id} className={'relative group ' + (index % 2 !== 0 ? 'md:mt-24' : '')}>
              <div
                className="portfolio-card relative overflow-hidden rounded-lg aspect-video bg-gray-900 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-crimson/50 cursor-pointer"
                onClick={() => play(p.id)}
              >
                <img
                  src={'https://img.youtube.com/vi/' + p.id + '/maxresdefault.jpg'}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="transform transition-all duration-500 scale-75 opacity-80 md:opacity-0 md:scale-50 group-hover:scale-100 group-hover:opacity-100">
                    <div className="w-16 h-16 rounded-full bg-crimson/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <PlayCardIcon className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-crimson text-xs font-bold tracking-widest uppercase mb-1 block">{p.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-20 flex justify-center">
        <a
          href="https://www.youtube.com/watch?v=C1lZGTM8EXI&list=PLV2xhkOvkLOYT62Y_SsJEqu_W1uWA-Gnu"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/60 hover:bg-crimson"
        >
          <YouTubeIcon className="w-5 h-5 text-crimson transition-colors group-hover:text-white" />
          Visit Our YouTube Channel
        </a>
      </div>
    </>
  );
}
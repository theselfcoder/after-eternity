'use client';

import { useState } from 'react';
import { PlayIcon } from './icons';

export default function ReelFrame() {
  const [played, setPlayed] = useState(false);

  return (
    <div
      id="reel-frame"
      className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/80 group cursor-pointer"
      onClick={() => {
        if (!played) setPlayed(true);
      }}
    >
      {played ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ItdSvu_nZKU?autoplay=1&rel=0&modestbranding=1"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src="https://img.youtube.com/vi/ItdSvu_nZKU/maxresdefault.jpg"
            alt="The Language of Color"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700 group-hover:scale-[1.02] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-crimson/95 flex items-center justify-center backdrop-blur-md shadow-2xl transform group-hover:scale-110 transition-transform duration-500 shadow-crimson/30">
              <PlayIcon className="w-6 h-6 md:w-10 md:h-10 text-white ml-2" />
            </div>
            <span className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-all duration-300">
              PLAY FULL REEL
            </span>
          </div>
          <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-white/40">[ 24FPS // 4K UHD ]</div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest text-white/40">
            AFTER ETERNITY STUDIO
          </div>
        </div>
      )}
    </div>
  );
}
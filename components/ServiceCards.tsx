'use client';

import { useRouter } from 'next/navigation';
import { MusicIcon, ScissorsIcon, SparklesIcon, VideoIcon } from './icons';

const SERVICES = [
  {
    service: 'Full Post-Production',
    icon: VideoIcon,
    description:
      'A complete end-to-end post-production pipeline. We handle everything from assembly to final color and sound delivery.'
  },
  {
    service: 'Editing',
    icon: ScissorsIcon,
    description:
      'Pacing is everything. We construct the heartbeat of your story, ensuring every cut serves an emotional purpose.'
  },
  {
    service: 'Color Grading',
    icon: SparklesIcon,
    description:
      'We treat every frame like a canvas. From corrective balancing to stylized creative looks that define your film\u2019s atmosphere.'
  },
  {
    service: 'Sound Design',
    icon: MusicIcon,
    description:
      'Visuals are only half the experience. We layer immersive soundscapes to pull the audience into your world.'
  }
];

export default function ServiceCards() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SERVICES.map((s) => (
        <div
          key={s.service}
          data-service={s.service}
          className="service-card group relative p-8 bg-black border border-white/5 hover:border-crimson/50 transition-all duration-500 rounded-xl overflow-hidden hover:-translate-y-2 flex flex-col items-center cursor-pointer"
          onClick={() => router.push('/contact?service=' + encodeURIComponent(s.service))}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 flex-1">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-crimson/80 transition-colors duration-300">
              <s.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-100">{s.service}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
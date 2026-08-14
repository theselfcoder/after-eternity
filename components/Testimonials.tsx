import { QuoteIcon } from './icons';

const TESTIMONIALS = [
  {
    name: 'Tiffany Tenille',
    role: 'Actor / Director',
    image: '/images/tiffany.jpg',
    quote:
      '"It has been an absolute joy collaborating with After Eternity since we first began working together in 2021. What I value most about stepping into the sandbox with them is the deep sense of creative trust and openness they bring to every project. They create a space where ideas can be explored freely, where experimentation feels encouraged, and where the work is always elevated with care and intention. I feel genuinely safe in their hands as a director to take risks and refine my voice. Their professionalism is unmatched, and they are true creative wizards whose artistry and intuition consistently elevate the final cut. I cannot recommend After Eternity highly enough for your next project."'
  },
  {
    name: 'Romel Nusdorfer',
    role: 'Director',
    image: '/images/romel.jpg',
    quote:
      '"After Eternity is an exceptional creative partner. They edited my short film in 2021 and most recently completed the edit and color grading for my feature documentary. They are highly creative, think outside the box, and consistently find smart solutions to complex editing challenges. Their storytelling instincts, pacing, and visual polish helped shape the film into a cohesive and compelling final piece."'
  },
  {
    name: 'Brian Carleton',
    role: 'Artist',
    image: '/images/brian.jpg',
    quote:
      '"Do you have a story to tell?\n\nWhat seems insurmountable is in good hands with After Eternity.\n\nFrom the first conversation to the final delivery, they approached our project with professionalism, creativity, and genuine care for the story we wanted to tell. Mujtaba\'s attention to detail, thoughtful communication, and commitment to quality made the entire process smooth and collaborative. The final result exceeded my expectations, and I wouldn\'t hesitate to work with him again."'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent px-6 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Client Perspectives</h2>
          <p className="text-crimson tracking-widest uppercase text-xs font-bold">Proven Results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
            >
              <QuoteIcon className="absolute top-6 right-6 text-crimson/20 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-crimson/50 transition-colors duration-300 bg-gray-900">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-lg">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-[1.8] italic relative z-10 text-sm md:text-base whitespace-pre-line">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
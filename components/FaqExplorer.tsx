'use client';

import { useMemo, useState } from 'react';
import { CATEGORY_META, FAQ_DATA } from '@/lib/site-data';
import { IconSvg, SearchIcon } from './icons';

const CATEGORY_KEYS = Object.keys(CATEGORY_META);

export default function FaqExplorer() {
  const [activeCategory, setActiveCategory] = useState('Coloring');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('skin-tone');

  const q = search.toLowerCase();
  const list = useMemo(
    () =>
      FAQ_DATA.filter((it) =>
        q
          ? it.question.toLowerCase().includes(q) || it.answer.toLowerCase().includes(q)
          : it.category === activeCategory
      ),
    [q, activeCategory]
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    const query = value.toLowerCase();
    const first =
      query.length > 0
        ? FAQ_DATA.find(
            (it) =>
              it.question.toLowerCase().includes(query) || it.answer.toLowerCase().includes(query)
          )
        : FAQ_DATA.find((it) => it.category === activeCategory);
    setExpandedId(first ? first.id : null);
  };

  const chooseCategory = (key: string) => {
    setActiveCategory(key);
    setSearch('');
    const first = FAQ_DATA.find((it) => it.category === key);
    setExpandedId(first ? first.id : null);
  };

  const contextLabel = CATEGORY_META[activeCategory].label + ' Workflows';

  return (
    <>
      <div className="mb-12 border-b border-white/5 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-crimson text-xs font-bold tracking-[0.4em] uppercase mb-2">Technical Resource</h3>
            <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight tracking-tight">
              POST-PRODUCTION KNOWLEDGE
            </h1>
            <p className="text-gray-400 max-w-xl text-sm md:text-base mt-2 leading-relaxed">
              Explore professional insights about our surgical editing, cinematic grading, Foley audio sculpting, and
              high-fidelity broadcast deliverables.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              id="faq-search"
              type="text"
              placeholder="Search workflows, tools..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-9 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-crimson focus:bg-white/10 transition-all text-xs"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 px-1 hidden lg:block">
            Post Categories
          </div>
          <div
            id="faq-categories"
            className="flex lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x"
          >
            {CATEGORY_KEYS.map((key) => {
              const meta = CATEGORY_META[key];
              const active = activeCategory === key && !q;
              return (
                <button
                  key={key}
                  data-cat={key}
                  onClick={() => chooseCategory(key)}
                  className={
                    'w-full text-left p-3.5 rounded-xl transition-all duration-300 border flex items-center gap-3 snap-start min-w-[240px] sm:min-w-0 ' +
                    (active
                      ? 'bg-white/5 border-crimson/50 text-white shadow-md shadow-crimson/5'
                      : 'bg-white/0 border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/[0.02]')
                  }
                >
                  <div
                    className={
                      'p-2 rounded-lg ' + (active ? 'bg-crimson text-white' : 'bg-white/5 text-gray-500')
                    }
                  >
                    <IconSvg name={meta.icon} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-left truncate">
                    <div className="text-xs font-bold uppercase tracking-wide truncate">{meta.label}</div>
                    <div className="text-[10px] text-gray-500 truncate hidden lg:block mt-0.5">
                      {meta.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div
            id="faq-search-note"
            className={
              'text-[10px] text-crimson font-medium px-2 py-1 bg-crimson/5 rounded-md text-center ' +
              (q ? '' : 'hidden')
            }
          >
            Currently showing global search results
          </div>
        </div>

        <div className="lg:col-span-8">
          <div id="faq-context" className={'mb-4 flex items-center gap-2 px-1 ' + (q ? 'hidden' : '')}>
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"></span>
            <span id="faq-context-label" className="text-xs text-gray-400 tracking-wider uppercase font-semibold">
              {contextLabel}
            </span>
          </div>

          <div id="faq-list" className="space-y-3">
            {list.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
                <IconSvg name="help" className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="text-sm text-white font-medium mb-1">No matches found</h4>
                <p className="text-gray-500 text-xs">Try adjusting your terms or check other categories.</p>
              </div>
            ) : (
              list.map((faq) => {
                const isOpen = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={
                      'border rounded-xl overflow-hidden transition-all duration-300 ' +
                      (isOpen
                        ? 'bg-white/5 border-crimson/30 shadow-md'
                        : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]')
                    }
                  >
                    <button
                      data-faq={faq.id}
                      onClick={() => setExpandedId(isOpen ? null : faq.id)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            'p-1.5 rounded-lg ' +
                            (isOpen ? 'text-crimson bg-crimson/10' : 'text-gray-500 bg-white/5')
                          }
                        >
                          <IconSvg name={faq.icon} className="w-4 h-4" />
                        </div>
                        <div>
                          {q && (
                            <span className="text-[9px] uppercase tracking-wider text-crimson font-semibold block mb-0.5">
                              {faq.category}
                            </span>
                          )}
                          <h4 className="font-serif text-sm md:text-base text-white font-medium hover:text-crimson transition-colors">
                            {faq.question}
                          </h4>
                        </div>
                      </div>
                      <div
                        className={
                          'w-5 h-5 flex items-center justify-center rounded-full border border-white/10 transition-transform duration-300 ' +
                          (isOpen ? 'rotate-180 border-crimson/40 text-crimson' : 'text-gray-500')
                        }
                      >
                        <IconSvg name="chevron" className="w-3 h-3" />
                      </div>
                    </button>
                    <div
                      className={
                        'overflow-hidden transition-all duration-300 ease-in-out ' +
                        (isOpen ? 'max-h-[600px] border-t border-white/5' : 'max-h-0')
                      }
                    >
                      <div className="p-5 space-y-4 text-xs md:text-sm">
                        <p className="text-gray-300 leading-relaxed font-light">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
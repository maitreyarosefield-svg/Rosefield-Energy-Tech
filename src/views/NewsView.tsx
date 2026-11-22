import React, { useState, useMemo, useEffect } from 'react';
import { NewsCategory, NewsItem } from '../types';
import { NEWS_DATA } from '../data/mockData';
import { Search, ArrowRight, X, Newspaper, MapPin } from 'lucide-react';

interface NewsViewProps {
  onOpenEnquiry: (area?: string) => void;
  initialNewsId?: string | null;
}

const NEWS_CATEGORIES: NewsCategory[] = [
  'All',
  'Regulatory & EPR',
  'Base Oils & Refining',
  'Circular Economy',
  'EV & Biofuels',
  'Industry Deals'
];

export const NewsView: React.FC<NewsViewProps> = ({
  onOpenEnquiry,
  initialNewsId = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (initialNewsId) {
      const found = NEWS_DATA.find((n) => n.id === initialNewsId);
      if (found) setActiveNews(found);
    }
  }, [initialNewsId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveNews(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const term = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.summary.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const leadStory = filteredNews.find((n) => n.featured) || filteredNews[0];
  const secondaryStories = filteredNews.filter((n) => n.id !== leadStory?.id);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 text-[#1D1D1B]">
      {/* Editorial Masthead Banner */}
      <section className="bg-[#1D1D1B] text-[#E8E6E1] py-16 sm:py-20 border-b border-[#2C2C2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-5">
          <div className="text-xs font-sans uppercase tracking-[0.22em] text-[#E8E6E1]/70">
            Rosefield Industry Wire · Policy & Market Dispatches
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white max-w-3xl leading-[1.1] tracking-tight text-balance">
            Industry News & Regulatory Bulletins
          </h1>
          <p className="text-[#E8E6E1]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            Timely coverage of EPR enforcement directives, base oil refining capacity shifts, EV thermal fluid standards, and RecykLube ecosystem milestones.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#1D1D1B]/10 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-[#1D1D1B]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search news, policy, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F9F8F6] border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] placeholder-[#1D1D1B]/40 focus:outline-hidden focus:border-[#B84A28]"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {NEWS_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#1D1D1B] text-[#F9F8F6]'
                      : 'bg-[#F9F8F6] text-[#1D1D1B]/70 hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 ? (
          <div className="p-12 rounded-2xl bg-white border border-[#1D1D1B]/10 text-center space-y-3">
            <Newspaper className="w-8 h-8 mx-auto text-[#1D1D1B]/25" />
            <p className="font-serif text-xl text-[#1D1D1B]">No news dispatches match your filter</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#1D1D1B] text-[#F9F8F6] text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Lead Story (Tier 1 Salience) */}
            {leadStory && (
              <article
                onClick={() => setActiveNews(leadStory)}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-white border border-[#1D1D1B]/12 overflow-hidden hover:border-[#1D1D1B]/30 transition-colors cursor-pointer group items-stretch"
              >
                <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[360px] bg-[#E8E6E1] overflow-hidden">
                  <img
                    src={leadStory.image}
                    alt={leadStory.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#1D1D1B]/60">
                      <span className="font-semibold text-[#B84A28]">{leadStory.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{leadStory.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{leadStory.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{leadStory.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug text-balance">
                      {leadStory.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#1D1D1B]/70 leading-relaxed font-sans">
                      {leadStory.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1D1D1B]/10 flex items-center justify-between">
                    <span className="text-xs text-[#1D1D1B]/55 font-sans">
                      {leadStory.source}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors">
                      <span>Read Full Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* Secondary Dispatches Grid (Tier 2 Salience) */}
            {secondaryStories.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {secondaryStories.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => setActiveNews(item)}
                    className="rounded-2xl bg-white border border-[#1D1D1B]/10 overflow-hidden hover:border-[#1D1D1B]/25 transition-colors flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="aspect-[16/9] bg-[#E8E6E1] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/60 font-sans">
                          <span className="font-semibold text-[#B84A28]">{item.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.date}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{item.readTime}</span>
                        </div>

                        <h3 className="font-serif text-xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-sm text-[#1D1D1B]/70 leading-relaxed line-clamp-3 font-sans">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-[#1D1D1B]/10 flex items-center justify-between text-xs">
                      <span className="text-[#1D1D1B]/55 inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#B84A28]" />
                        {item.location}
                      </span>
                      <span className="font-semibold text-[#1D1D1B] group-hover:text-[#B84A28] inline-flex items-center gap-1">
                        <span>Read Dispatch</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Press & Regulatory Desk CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#1D1D1B]/12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-sans font-semibold text-[#B84A28] uppercase tracking-[0.18em]">
              Press & Policy Inquiries
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D1D1B]">
              Need Regulatory Clarification or Market Commentary?
            </h2>
            <p className="text-sm text-[#1D1D1B]/70 leading-relaxed font-sans">
              Connect with Rosefield Energy Tech’s policy and research desk for bespoke briefings on CPCB EPR compliance, base oil market movements, and RecykLube announcements.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Regulatory & Market News Desk')}
            className="px-6 py-3 rounded-lg bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-semibold uppercase tracking-[0.14em] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Contact Advisory Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Full News Reader Modal */}
      {activeNews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveNews(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[88vh] bg-[#F9F8F6] rounded-2xl border border-[#1D1D1B]/15 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#1D1D1B]/10 bg-white flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/65">
                <span className="font-semibold text-[#B84A28]">{activeNews.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNews.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNews.location}</span>
              </div>
              <button
                onClick={() => setActiveNews(null)}
                aria-label="Close dispatch"
                className="p-2 rounded-lg text-[#1D1D1B]/60 hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#E8E6E1]">
                <img
                  src={activeNews.image}
                  alt={activeNews.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 max-w-2xl">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D1D1B] leading-tight">
                  {activeNews.title}
                </h2>
                <div className="text-xs text-[#1D1D1B]/55 font-sans">
                  {activeNews.source} · {activeNews.readTime}
                </div>
              </div>

              <div className="space-y-4 max-w-2xl text-[15px] text-[#1D1D1B]/85 leading-relaxed font-sans">
                {activeNews.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#1D1D1B]/10 max-w-2xl space-y-3">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#B84A28]">
                  Key Dispatch Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-[#1D1D1B]/80">
                  {activeNews.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#B84A28] font-bold mt-0.5">▪</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#1D1D1B]/10 bg-white flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#1D1D1B]/60">
                Discuss how this development impacts your 2026-2027 operations
              </span>
              <button
                onClick={() => {
                  const topic = activeNews.title;
                  setActiveNews(null);
                  onOpenEnquiry(`News Inquiry: ${topic}`);
                }}
                className="px-5 py-2 rounded-lg bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Speak with an Advisor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

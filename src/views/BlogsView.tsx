import React, { useState, useMemo, useEffect } from 'react';
import { BlogCategory, BlogPost } from '../types';
import { BLOGS_DATA } from '../data/mockData';
import { Search, ArrowRight, X, BookOpen } from 'lucide-react';

interface BlogsViewProps {
  onOpenEnquiry: (area?: string) => void;
  initialBlogId?: string | null;
}

const BLOG_CATEGORIES: BlogCategory[] = [
  'All',
  'Formulation & Chemistry',
  'Circularity & EPR',
  'Market Strategy',
  'Energy Transition'
];

export const BlogsView: React.FC<BlogsViewProps> = ({
  onOpenEnquiry,
  initialBlogId = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (initialBlogId) {
      const found = BLOGS_DATA.find((b) => b.id === initialBlogId);
      if (found) setActivePost(found);
    }
  }, [initialBlogId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePost(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOGS_DATA.filter((post) => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const term = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.name.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const otherPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 text-[#1D1D1B]">
      {/* Editorial Monograph Header */}
      <section className="bg-[#1D1D1B] text-[#E8E6E1] py-16 sm:py-20 border-b border-[#2C2C2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-5">
          <div className="text-xs font-sans uppercase tracking-[0.22em] text-[#E8E6E1]/70">
            Rosefield Editorial Journal · Technical & Strategic Essays
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white max-w-3xl leading-[1.1] tracking-tight text-balance">
            Perspectives on Fluids, Circularity & Energy Transition
          </h1>
          <p className="text-[#E8E6E1]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            Long-form essays and practical field notes from Rosefield’s formulation chemists, re-refining engineers, and commercial strategy advisors.
          </p>
        </div>
      </section>

      {/* Filters & Essays */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#1D1D1B]/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-[#1D1D1B]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search essays, authors, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F9F8F6] border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] placeholder-[#1D1D1B]/40 focus:outline-hidden focus:border-[#B84A28]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {BLOG_CATEGORIES.map((cat) => (
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

        {filteredPosts.length === 0 ? (
          <div className="p-12 rounded-2xl bg-white border border-[#1D1D1B]/10 text-center space-y-3">
            <BookOpen className="w-8 h-8 mx-auto text-[#1D1D1B]/25" />
            <p className="font-serif text-xl text-[#1D1D1B]">No blog essays match your current filter</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#1D1D1B] text-[#F9F8F6] text-xs font-semibold cursor-pointer"
            >
              Show All Essays
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Essay */}
            {featuredPost && (
              <article
                onClick={() => setActivePost(featuredPost)}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-white border border-[#1D1D1B]/12 overflow-hidden hover:border-[#1D1D1B]/30 transition-colors cursor-pointer group items-stretch"
              >
                <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/60 font-sans">
                      <span className="font-semibold text-[#B84A28]">{featuredPost.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{featuredPost.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug text-balance">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#1D1D1B]/70 leading-relaxed font-sans">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1D1D1B]/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#1D1D1B]">{featuredPost.author.name}</div>
                      <div className="text-xs text-[#1D1D1B]/55">{featuredPost.author.role}</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1B] group-hover:text-[#B84A28]">
                      <span>Read Essay</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[360px] bg-[#E8E6E1] overflow-hidden order-1 lg:order-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </article>
            )}

            {/* Editorial Essay Cards */}
            {otherPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setActivePost(post)}
                    className="rounded-2xl bg-white border border-[#1D1D1B]/10 overflow-hidden hover:border-[#1D1D1B]/25 transition-colors flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="aspect-[4/3] bg-[#E8E6E1] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/60 font-sans">
                          <span className="font-semibold text-[#B84A28]">{post.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{post.readTime}</span>
                        </div>

                        <h3 className="font-serif text-xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-[#1D1D1B]/70 line-clamp-3 leading-relaxed font-sans">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-[#1D1D1B]/10 flex items-center justify-between text-xs">
                      <span className="text-[#1D1D1B]/60">{post.author.name}</span>
                      <span className="font-semibold text-[#1D1D1B] group-hover:text-[#B84A28] inline-flex items-center gap-1">
                        <span>Read</span>
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

      {/* Long-Form Essay Reader Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActivePost(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[88vh] bg-[#F9F8F6] rounded-2xl border border-[#1D1D1B]/15 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#1D1D1B]/10 bg-white flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/65">
                <span className="font-semibold text-[#B84A28]">{activePost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activePost.date}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activePost.readTime}</span>
              </div>
              <button
                onClick={() => setActivePost(null)}
                aria-label="Close essay"
                className="p-2 rounded-lg text-[#1D1D1B]/60 hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1D1D1B] leading-tight text-balance">
                  {activePost.title}
                </h2>
                <div className="text-xs text-[#1D1D1B]/65 font-sans">
                  By <strong className="text-[#1D1D1B]">{activePost.author.name}</strong> · {activePost.author.role}
                </div>
              </div>

              <div className="aspect-[16/9] max-w-2xl mx-auto rounded-xl overflow-hidden bg-[#E8E6E1]">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-2xl mx-auto space-y-5 text-[15.5px] text-[#1D1D1B]/85 leading-[1.78] font-sans">
                {activePost.body.map((paragraph, idx) => (
                  <React.Fragment key={idx}>
                    <p
                      className={
                        idx === 0
                          ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#B84A28]'
                          : ''
                      }
                    >
                      {paragraph}
                    </p>
                    {idx === 1 && (
                      <blockquote className="my-8 py-6 border-y border-[#1D1D1B]/15 text-center px-4">
                        <p className="font-serif italic text-xl sm:text-2xl text-[#1D1D1B] leading-snug">
                          “{activePost.pullQuote}”
                        </p>
                      </blockquote>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="max-w-2xl mx-auto pt-6 border-t border-[#1D1D1B]/10 space-y-3">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#B84A28]">
                  Executive Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-[#1D1D1B]/80">
                  {activePost.takeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#B84A28] font-bold mt-0.5">▪</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#1D1D1B]/10 bg-white flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#1D1D1B]/60">
                Interested in a technical briefing with {activePost.author.name}?
              </span>
              <button
                onClick={() => {
                  const title = activePost.title;
                  setActivePost(null);
                  onOpenEnquiry(`Blog Inquiry: ${title}`);
                }}
                className="px-5 py-2 rounded-lg bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Consult Rosefield Advisors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

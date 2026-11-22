import React, { useState, useMemo, useEffect } from 'react';
import { GalleryCategory, GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/mockData';
import { X, ChevronLeft, ChevronRight, ArrowRight, Image as ImageIcon } from 'lucide-react';

interface GalleryViewProps {
  onOpenEnquiry: (area?: string) => void;
  initialItemId?: string | null;
}

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Summits & Forums',
  'Refining & Lab',
  'RecykLube Operations',
  'Technical & EV'
];

export const GalleryView: React.FC<GalleryViewProps> = ({
  onOpenEnquiry,
  initialItemId = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return GALLERY_DATA.filter(
      (item) => selectedCategory === 'All' || item.category === selectedCategory
    );
  }, [selectedCategory]);

  useEffect(() => {
    if (initialItemId) {
      const idx = GALLERY_DATA.findIndex((g) => g.id === initialItemId);
      if (idx !== -1) {
        setSelectedCategory('All');
        setActiveIndex(idx);
      }
    }
  }, [initialItemId]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, filteredItems.length]);

  const activeItem: GalleryItem | null =
    activeIndex !== null && filteredItems[activeIndex] ? filteredItems[activeIndex] : null;

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 text-[#1D1D1B]">
      {/* Curatorial Exhibition Header */}
      <section className="bg-[#1D1D1B] text-[#E8E6E1] py-16 sm:py-20 border-b border-[#2C2C2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-5">
          <div className="text-xs font-sans uppercase tracking-[0.22em] text-[#E8E6E1]/70">
            Rosefield Visual Archive · Summits, Refineries & Field Operations
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white max-w-3xl leading-[1.1] tracking-tight text-balance">
            Industry Gallery & Documentary Showcase
          </h1>
          <p className="text-[#E8E6E1]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            Selected photography from executive leadership summits, partner hydro-treating re-refineries, base oil testing benches, and RecykLube closed-loop collection hubs.
          </p>
        </div>
      </section>

      {/* Category Filter Bar + Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1D1D1B]/12 pb-5">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveIndex(null);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#1D1D1B] text-[#F9F8F6]'
                    : 'bg-white border border-[#1D1D1B]/12 text-[#1D1D1B]/75 hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono tabular-nums text-[#1D1D1B]/55">
            {filteredItems.length} {filteredItems.length === 1 ? 'plate' : 'plates'} archived
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="p-12 rounded-2xl bg-white border border-[#1D1D1B]/10 text-center space-y-3">
            <ImageIcon className="w-8 h-8 mx-auto text-[#1D1D1B]/25" />
            <p className="font-serif text-xl text-[#1D1D1B]">No visual plates in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredItems.map((item, idx) => {
              const isWide = item.aspect === 'wide';
              return (
                <figure
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`${
                    isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                  } rounded-2xl bg-white border border-[#1D1D1B]/10 overflow-hidden cursor-pointer group hover:border-[#1D1D1B]/30 transition-colors flex flex-col justify-between`}
                >
                  <div className="relative aspect-[16/10] bg-[#E8E6E1] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                      <span className="text-xs font-sans font-medium text-white">
                        Open Lightbox →
                      </span>
                    </div>
                  </div>

                  <figcaption className="p-6 space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/55 font-sans">
                      <span className="font-mono font-semibold text-[#B84A28]">{item.figNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-serif italic text-[#1D1D1B]/65">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </section>

      {/* Media & Summit Collaboration Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#1D1D1B]/12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-sans font-semibold text-[#B84A28] uppercase tracking-[0.18em]">
              Exhibitions & Media Requests
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D1D1B]">
              Request High-Resolution Press Kits or Summit Media Passes
            </h2>
            <p className="text-sm text-[#1D1D1B]/70 leading-relaxed font-sans">
              Industry publications, corporate partners, and conference sponsors can request full photographic archives and accredited media coverage from Rosefield events.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Gallery & Press Media Request')}
            className="px-6 py-3 rounded-lg bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-semibold uppercase tracking-[0.14em] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Request Media Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#1D1D1B] text-[#F9F8F6] rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#E8E6E1]/75">
                <span className="font-mono text-[#F88058]">{activeItem.figNumber}</span>
                <span aria-hidden="true">·</span>
                <span>{activeItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeItem.location}</span>
              </div>
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="Close lightbox"
                className="p-2 rounded-lg text-[#E8E6E1]/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-black flex items-center justify-center max-h-[62vh]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[62vh] w-full object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % filteredItems.length)
                    }
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-6 space-y-2 border-t border-white/10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                  {activeItem.title}
                </h3>
                <span className="text-xs font-mono tabular-nums text-[#E8E6E1]/60 shrink-0">
                  {activeIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <p className="text-sm text-[#E8E6E1]/75 leading-relaxed max-w-3xl">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { PageRoute, ServiceVerticalId } from '../types';
import { SERVICE_VERTICALS } from '../data/mockData';
import {
  ShieldCheck,
  Droplets,
  GraduationCap,
  ClipboardCheck,
  RefreshCw,
  RotateCw,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesScrollSpyProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
  initialServiceId?: ServiceVerticalId;
}

export const ServicesScrollSpy: React.FC<ServicesScrollSpyProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator,
  initialServiceId
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    if (!initialServiceId) return 0;
    const found = SERVICE_VERTICALS.findIndex((v) => v.id === initialServiceId);
    return found >= 0 ? found : 0;
  });

  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll to requested service when navigated with a specific initialServiceId
  useEffect(() => {
    if (!initialServiceId) return;
    const targetIdx = SERVICE_VERTICALS.findIndex((v) => v.id === initialServiceId);
    if (targetIdx >= 0) {
      setActiveIndex(targetIdx);
      const targetEl = cardRefs.current[targetIdx];
      if (targetEl) {
        const timer = window.setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 120);
        return () => window.clearTimeout(timer);
      }
    }
  }, [initialServiceId]);

  // Reliable bidirectional Scroll-Spy (both down and up) via IntersectionObserver + viewport-center scroll tracking
  useEffect(() => {
    let rafId: number | null = null;

    const updateActiveFromCenter = () => {
      const viewportCenter = window.innerHeight * 0.48;
      let closestIdx = 0;
      let closestDist = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex((prev) => (prev === closestIdx ? prev : closestIdx));
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateActiveFromCenter();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Defer to deterministic center calculation whenever any card crosses the center band
        if (entries.some((e) => e.isIntersecting)) {
          updateActiveFromCenter();
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75]
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const getLineIcon = (id: ServiceVerticalId) => {
    const iconProps = { className: 'w-5 h-5 text-[#F26522]', strokeWidth: 1.5 };
    switch (id) {
      case 'epr-fulfillment':
        return <ShieldCheck {...iconProps} />;
      case 'used-oil-rrbo':
        return <Droplets {...iconProps} />;
      case 'training-certification':
        return <GraduationCap {...iconProps} />;
      case 'technical-audits':
        return <ClipboardCheck {...iconProps} />;
      case 'circular-economy':
        return <RefreshCw {...iconProps} />;
      case 'r3t':
        return <RotateCw {...iconProps} />;
      case 'ce-events':
        return <Calendar {...iconProps} />;
    }
  };

  const totalCount = SERVICE_VERTICALS.length;
  const activeService = SERVICE_VERTICALS[activeIndex] || SERVICE_VERTICALS[0];
  const progressPercent = ((activeIndex + 1) / totalCount) * 100;
  const paddedTotal = String(totalCount).padStart(2, '0');

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-14 relative">
      {/* ============================================================ */}
      {/* LEFT COLUMN: STICKY SCROLL-SPY SIDEBAR (40% WIDTH)           */}
      {/* ============================================================ */}
      <aside className="w-full lg:w-[40%] lg:sticky lg:top-[120px] lg:self-start z-10">
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#1D1D1B]/12 shadow-sm space-y-7">
          {/* Dynamic Counter & Proportional Horizontal Progress Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#1D1D1B]/70">
              <span>
                SERVICE {activeService.number} OF {paddedTotal}
              </span>
              <span className="text-[#F26522]">{Math.round(progressPercent)}%</span>
            </div>

            <div className="w-full h-1 bg-[#1D1D1B]/10 rounded-full">
              <div
                className="h-full bg-[#F26522] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Smoothly Animated Active Service Details */}
          <div key={activeService.id} className="animate-service-fade-slide space-y-5">
            <div className="space-y-2">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#1D1D1B]/30 block leading-none">
                {activeService.number}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1D1D1B] leading-tight">
                {activeService.title}
              </h3>
            </div>

            {/* Vertical List of 3-4 Key Highlights in Brand Orange (#F26522) */}
            <ul className="space-y-3 pt-2 border-t border-[#1D1D1B]/10">
              {activeService.highlights.slice(0, 4).map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm font-sans font-semibold text-[#F26522]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] mt-2 shrink-0" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Contextual Action Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnquiry(activeService.title)}
                className="px-5 py-2.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-sans font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Submit RFP / Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
              </button>

              {(activeService.id === 'epr-fulfillment' ||
                activeService.id === 'used-oil-rrbo' ||
                activeService.id === 'circular-economy' ||
                activeService.id === 'r3t') && (
                <button
                  onClick={onOpenCalculator}
                  className="px-4 py-2.5 rounded-full bg-[#F2EFE9] hover:bg-[#EAE5DC] text-[#1D1D1B] text-xs font-sans font-semibold transition-colors border border-[#1D1D1B]/15 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>EPR Estimator</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* RIGHT COLUMN: SCROLLABLE SERVICE CARDS (60% WIDTH)           */}
      {/* ============================================================ */}
      <div className="w-full lg:w-[60%] flex flex-col gap-16 lg:gap-24">
        {SERVICE_VERTICALS.map((vert, idx) => {
          const isActive = idx === activeIndex;
          return (
            <article
              key={vert.id}
              id={`service-card-${vert.id}`}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className={`lg:min-h-[75vh] p-7 sm:p-10 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between gap-6 ${
                isActive
                  ? 'border-[#F26522]/45 shadow-md'
                  : 'border-[#1D1D1B]/10 shadow-sm'
              }`}
            >
              <div className="space-y-5">
                {/* Subtle Line Icon + Step Number */}
                <div className="flex items-center justify-between border-b border-[#1D1D1B]/10 pb-4">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F9F8F6] border border-[#1D1D1B]/10 flex items-center justify-center shrink-0">
                      {getLineIcon(vert.id)}
                    </div>
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#F26522]">
                      {vert.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1D1D1B]/45">
                    Service {vert.number}
                  </span>
                </div>

                {/* Exact Existing Uppercase Service Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1D1D1B] leading-snug">
                  {vert.title}
                </h3>

                {/* Existing Description Text */}
                <p className="text-sm sm:text-base text-[#1D1D1B]/75 leading-relaxed font-sans">
                  {vert.description}
                </p>

                {/* Inline Dot-Separated Key Highlights */}
                <p className="text-xs sm:text-sm font-sans font-semibold text-[#1D1D1B]/85 leading-relaxed pt-1">
                  {vert.highlights.slice(0, 4).map((point, pointIdx) => (
                    <React.Fragment key={pointIdx}>
                      {pointIdx > 0 && (
                        <span className="mx-2 text-[#F26522] font-bold">•</span>
                      )}
                      <span>{point}</span>
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* Wide Rounded-Corner Image Container Below Text */}
              <div className="space-y-4">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#E8E6E1] border border-[#1D1D1B]/10">
                  <img
                    src={vert.image}
                    alt={vert.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Clean Bottom Navigation Action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => {
                      if (vert.id === 'ce-events') {
                        onRouteChange('events');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (vert.id === 'r3t') {
                        onRouteChange('recyklube');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        onOpenEnquiry(vert.title);
                      }
                    }}
                    className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1D1D1B] hover:text-[#F26522] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{vert.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(vert.title)}
                    className="text-xs font-sans font-medium text-[#1D1D1B]/60 hover:text-[#1D1D1B] underline underline-offset-4 cursor-pointer"
                  >
                    Enquire About {vert.title} →
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

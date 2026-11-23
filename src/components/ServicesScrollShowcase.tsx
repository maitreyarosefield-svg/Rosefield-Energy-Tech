import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ScrollRevealBlockProps {
  children: React.ReactNode;
}

const ScrollRevealBlock: React.FC<ScrollRevealBlockProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4']
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
};

interface ServicesScrollShowcaseProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
  initialVertical?: ServiceVerticalId;
  scrollTriggerNonce?: number;
  variant?: 'full' | 'framed';
}

export const ServicesScrollShowcase: React.FC<ServicesScrollShowcaseProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator,
  initialVertical = 'epr-fulfillment',
  scrollTriggerNonce = 0,
  variant = 'full'
}) => {
  const initialIdx = Math.max(
    0,
    SERVICE_VERTICALS.findIndex((v) => v.id === initialVertical)
  );
  const [activeIndex, setActiveIndex] = useState<number>(initialIdx);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const targetIdx = SERVICE_VERTICALS.findIndex((v) => v.id === initialVertical);
    if (targetIdx !== -1) {
      setActiveIndex(targetIdx);
      if (scrollTriggerNonce > 0) {
        const el = sectionRefs.current[targetIdx];
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      }
    }
  }, [initialVertical, scrollTriggerNonce]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) {
              setActiveIndex(idx);
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getServiceIcon = (id: ServiceVerticalId) => {
    switch (id) {
      case 'epr-fulfillment':
        return <ShieldCheck className="w-7 h-7 text-[#F88058]" />;
      case 'used-oil-rrbo':
        return <Droplets className="w-7 h-7 text-[#F8B848]" />;
      case 'training-certification':
        return <GraduationCap className="w-7 h-7 text-[#F88058]" />;
      case 'technical-audits':
        return <ClipboardCheck className="w-7 h-7 text-[#F8B848]" />;
      case 'circular-economy':
        return <RefreshCw className="w-7 h-7 text-[#F88058]" />;
      case 'r3t':
        return <RotateCw className="w-7 h-7 text-[#F8B848]" />;
      case 'ce-events':
        return <Calendar className="w-7 h-7 text-[#F88058]" />;
    }
  };

  const scrollToStep = (idx: number) => {
    setActiveIndex(idx);
    const el = sectionRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeService = SERVICE_VERTICALS[activeIndex] || SERVICE_VERTICALS[0];
  const progressWidth = `${((activeIndex + 1) / SERVICE_VERTICALS.length) * 100}%`;

  const isFramed = variant === 'framed';

  return (
    <div
      className={`lg:grid lg:grid-cols-2 ${
        isFramed
          ? 'border border-[#1D1D1B]/15 rounded-3xl shadow-xl bg-[#1D1D1B]'
          : 'border-y border-white/10 bg-[#1D1D1B]'
      }`}
    >
      {/* Left Sticky Panel */}
      <div
        className={`hidden lg:flex lg:sticky lg:top-[130px] lg:h-[calc(100vh-130px)] flex-col justify-between p-8 xl:p-12 bg-[#1D1D1B] text-[#E8E6E1] border-r border-white/10 overflow-y-auto ${
          isFramed ? 'lg:rounded-l-3xl' : ''
        }`}
      >
        <div className="space-y-6">
          {/* Progress Bar + Counter */}
          <div>
            <div className="w-full h-0.5 bg-white/15 mb-3 rounded-full overflow-hidden">
              <div
                className="h-0.5 bg-[#F88058] transition-all duration-500 rounded-full"
                style={{ width: progressWidth }}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-[#E8E6E1]/60 uppercase font-mono text-xs tracking-widest">
                SERVICE {activeIndex + 1} OF {SERVICE_VERTICALS.length}
              </p>

              {/* Interactive step jump markers */}
              <div className="flex items-center gap-1.5">
                {SERVICE_VERTICALS.map((vert, idx) => (
                  <button
                    key={vert.id}
                    onClick={() => scrollToStep(idx)}
                    title={`${vert.number} · ${vert.title}`}
                    className={`px-2 py-0.5 rounded font-mono text-[10px] transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'bg-[#B84A28] text-white font-bold'
                        : 'bg-white/5 text-[#E8E6E1]/50 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {vert.number}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Step Header */}
          <div className="space-y-3 pt-2">
            <p className="text-[#F8B848] font-mono text-xs tracking-[0.2em] uppercase font-bold">
              {activeService.number}
            </p>
            <h2 className="font-serif text-3xl xl:text-5xl leading-[1.12] text-white font-medium tracking-tight">
              {activeService.title}
            </h2>
            <p className="text-sm text-[#E8E6E1]/70 font-serif italic max-w-md">
              {activeService.tagline}
            </p>
          </div>

          {/* Key Capabilities Readout (matches santoshpetro parameter readout) */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8E6E1]/40 block mb-2">
              Scope & Deliverables
            </span>
            {activeService.capabilities.map((cap) => (
              <p
                key={cap}
                className="text-[#F8D8A0] font-mono text-xs leading-relaxed flex items-start gap-2"
              >
                <span className="text-[#F88058] shrink-0">›</span>
                <span>{cap}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Sticky Panel Action Buttons */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpenEnquiry(activeService.title)}
            className="px-5 py-2.5 rounded-full bg-[#B84A28] hover:bg-[#A33F20] text-white text-xs font-sans font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Submit RFP / Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {(activeService.id === 'epr-fulfillment' ||
            activeService.id === 'used-oil-rrbo' ||
            activeService.id === 'circular-economy' ||
            activeService.id === 'r3t') && (
            <button
              onClick={onOpenCalculator}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F8D8A0] text-xs font-sans font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border border-white/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F8B848]" />
              <span>EPR Calculator</span>
            </button>
          )}

          {activeService.id === 'r3t' && (
            <button
              onClick={() => {
                onRouteChange('recyklube');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-sans font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border border-white/10"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#F8B848]" />
              <span>R3T Portal</span>
            </button>
          )}

          {activeService.id === 'ce-events' && (
            <button
              onClick={() => {
                onRouteChange('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-sans font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border border-white/10"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F88058]" />
              <span>View CE Events</span>
            </button>
          )}
        </div>
      </div>

      {/* Right Scrolling Column */}
      <div className={isFramed ? 'lg:rounded-r-3xl overflow-hidden' : ''}>
        {SERVICE_VERTICALS.map((vert, idx) => (
          <div
            key={vert.id}
            id={`service-step-${vert.id}`}
            ref={(el) => {
              sectionRefs.current[idx] = el;
            }}
            className={`scroll-mt-32 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-16 lg:py-24 ${
              isFramed ? 'min-h-[75vh]' : 'min-h-[85vh]'
            } ${idx % 2 === 0 ? 'bg-[#1D1D1B]' : 'bg-[#262624]'} ${
              isFramed && idx === 0 ? 'rounded-t-3xl lg:rounded-tl-none lg:rounded-tr-3xl' : ''
            } ${
              isFramed && idx === SERVICE_VERTICALS.length - 1
                ? 'rounded-b-3xl lg:rounded-bl-none lg:rounded-br-3xl'
                : ''
            }`}
          >
            <ScrollRevealBlock>
              <div className="space-y-6">
                {/* Mobile Counter + Number */}
                <div className="flex items-center justify-between">
                  <p className="text-[#F8B848] font-mono text-xs tracking-[0.2em] font-bold">
                    {vert.number}
                  </p>
                  <span className="lg:hidden font-mono text-[11px] text-[#E8E6E1]/50 uppercase tracking-widest">
                    SERVICE {idx + 1} OF {SERVICE_VERTICALS.length}
                  </span>
                </div>

                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getServiceIcon(vert.id)}
                </div>

                {/* Heading & Copy */}
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-white font-medium tracking-tight">
                    {vert.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#E8E6E1]/80 leading-relaxed font-sans max-w-2xl">
                    {vert.description}
                  </p>
                </div>

                {/* Technical / Deliverable Parameters Line */}
                <p className="text-[#F8D8A0] font-mono text-xs leading-relaxed">
                  {vert.capabilities.slice(0, 4).join(' · ')}
                </p>

                {/* Measurable Outcomes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {vert.keyOutcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8E6E1]/85 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F88058] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                  {vert.caseSnippet && (
                    <div className="p-3.5 rounded-xl bg-[#B84A28]/15 border border-[#B84A28]/30 text-xs text-[#F8D8A0] italic font-serif flex items-start">
                      <span>"{vert.caseSnippet}"</span>
                    </div>
                  )}
                </div>

                {/* Editorial 16:9 Visual Card */}
                {vert.image && (
                  <div className="w-full aspect-video relative rounded-2xl overflow-hidden mt-4 ring-1 ring-white/10">
                    <img
                      src={vert.image}
                      alt={vert.imageAlt || vert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-[11px] font-mono text-[#E8E6E1]/90">
                      <span className="truncate">{vert.targetAudience.slice(0, 2).join(' • ')}</span>
                      <span className="text-[#F8B848] shrink-0">[{vert.number}]</span>
                    </div>
                  </div>
                )}

                {/* Mobile & Inline Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiry(vert.title)}
                    className="px-5 py-2.5 rounded-full bg-[#F9F8F6] hover:bg-white text-[#1D1D1B] text-xs font-sans font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{vert.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {vert.id === 'r3t' && (
                    <button
                      onClick={() => {
                        onRouteChange('recyklube');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-sans font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border border-white/15"
                    >
                      <span>Open RecykLube R3T</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F8B848]" />
                    </button>
                  )}

                  {vert.id === 'ce-events' && (
                    <button
                      onClick={() => {
                        onRouteChange('events');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-sans font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 border border-white/15"
                    >
                      <span>Explore All CE Events</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F88058]" />
                    </button>
                  )}
                </div>
              </div>
            </ScrollRevealBlock>
          </div>
        ))}
      </div>
    </div>
  );
};

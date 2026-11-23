import React from 'react';
import { PageRoute, ServiceVerticalId } from '../types';
import { 
  RECYKLUBE_STEPS, 
  WHY_ROSEFIELD, 
  OUR_APPROACH_STEPS, 
  NEWS_DATA,
  BLOGS_DATA,
  GALLERY_DATA,
  EVENTS_DATA, 
  TRUST_STATS 
} from '../data/mockData';
import { ServicesScrollSpy } from '../components/ServicesScrollSpy';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  RotateCw, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Droplets, 
  Award, 
  Users, 
  Compass, 
  BarChart3, 
  Download,
  Building2,
  TreePine
} from 'lucide-react';

interface HomeViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenService?: (serviceId: ServiceVerticalId) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenNews: (newsId?: string) => void;
  onOpenBlog: (blogId?: string) => void;
  onOpenGallery: (galleryId?: string) => void;
  onOpenEvent: (eventId: string) => void;
  onOpenCalculator: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenNews,
  onOpenBlog,
  onOpenGallery,
  onOpenEvent,
  onOpenCalculator
}) => {

  const getWhyIcon = (id: string) => {
    switch (id) {
      case 'industry-expertise': return <Award className="w-5 h-5 text-[#F88058]" />;
      case 'connected-ecosystem': return <Users className="w-5 h-5 text-[#F8B848]" />;
      case 'knowledge-driven': return <BarChart3 className="w-5 h-5 text-[#F88058]" />;
      case 'business-focused': return <Compass className="w-5 h-5 text-[#F8B848]" />;
      case 'sustainability-oriented': return <RotateCw className="w-5 h-5 text-[#F88058]" />;
      case 'long-term-partnerships': return <Building2 className="w-5 h-5 text-[#F8B848]" />;
      default: return <Sparkles className="w-5 h-5 text-[#F88058]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 text-[#1D1D1B]">
      
      {/* ============================================================ */}
      {/* SECTION 1: HERO SECTION                                      */}
      {/* ============================================================ */}
      <section className="relative pt-8 sm:pt-16 pb-16 overflow-hidden">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1D1D1B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D1D1B]/15 bg-white/60 text-[#1D1D1B] text-[10px] font-sans font-semibold uppercase tracking-[0.25em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B84A28]"></span>
                <span>Specialised B2B Consulting & Knowledge Platform</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1D1D1B] font-medium leading-[1.12] tracking-tight">
                Powering the Future of <span className="italic font-normal text-[#B84A28]">Lubricants</span> & Circular Economy
              </h1>

              <p className="text-base sm:text-lg text-[#1D1D1B]/70 leading-relaxed max-w-2xl font-sans">
                Rosefield Energy Tech brings together industry knowledge, technical expertise, market intelligence, strategic consulting, and business connectivity to help organisations navigate market transitions and build sustainable growth.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => {
                    onRouteChange('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2.5 cursor-pointer group shadow-sm"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#E8E6E1] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenEnquiry()}
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-[#F2EFE9] text-[#1D1D1B] font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-colors border border-[#1D1D1B]/20 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Connect With Us</span>
                </button>

                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-3.5 rounded-full bg-[#F2EFE9] hover:bg-[#EBE7DF] text-[#1D1D1B] font-sans font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors border border-[#1D1D1B]/15 flex items-center justify-center gap-2 cursor-pointer"
                  title="Calculate mandatory EPR used oil targets"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B84A28]" />
                  <span>EPR Estimator</span>
                </button>
              </div>

              {/* Core Positioning Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#1D1D1B]/70 font-sans">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B84A28]" />
                  Strategic Advisory & M&A
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B84A28]" />
                  RecykLube Circular EPR
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B84A28]" />
                  Flagship Industry Summits
                </span>
              </div>

            </div>

            {/* Right Hero Visual Card (5 cols) - Editorial Architectural Composition */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#1D1D1B] text-[#E8E6E1] border border-[#2C2C2A] shadow-xl overflow-hidden">
                
                <div className="relative z-10 space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-[#333330] pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B84A28]"></div>
                      <span className="text-[10px] font-sans font-bold text-[#E8E6E1] uppercase tracking-[0.25em]">
                        ROSEFIELD CORE PLATFORM
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#E8E6E1]/50 tracking-widest">EST. B2B</span>
                  </div>

                  {/* 4 Pillars Interactive Badge Matrix */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#262624] border border-[#3A3A36]">
                      <span className="text-[9px] font-mono text-[#E8E6E1]/50 uppercase tracking-widest block mb-1">01 • CONVENING</span>
                      <div className="font-serif text-base font-medium text-white">Events & Summits</div>
                      <p className="text-[11px] text-[#E8E6E1]/60 mt-1 leading-tight font-sans">Connecting 500+ global industry leaders</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#262624] border border-[#3A3A36]">
                      <span className="text-[9px] font-mono text-[#E8E6E1]/50 uppercase tracking-widest block mb-1">02 • STRATEGY</span>
                      <div className="font-serif text-base font-medium text-white">Consultancy</div>
                      <p className="text-[11px] text-[#E8E6E1]/60 mt-1 leading-tight font-sans">Market entry, value eng & M&A due diligence</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#262624] border border-[#3A3A36]">
                      <span className="text-[9px] font-mono text-[#E8E6E1]/50 uppercase tracking-widest block mb-1">03 • CIRCULARITY</span>
                      <div className="font-serif text-base font-medium text-white">RecykLube EPR</div>
                      <p className="text-[11px] text-[#E8E6E1]/60 mt-1 leading-tight font-sans">Used oil tracking & re-refined compliance</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#262624] border border-[#3A3A36]">
                      <span className="text-[9px] font-mono text-[#E8E6E1]/50 uppercase tracking-widest block mb-1">04 • INTELLIGENCE</span>
                      <div className="font-serif text-base font-medium text-white">Publications</div>
                      <p className="text-[11px] text-[#E8E6E1]/60 mt-1 leading-tight font-sans">Proprietary base oil & fuels research</p>
                    </div>
                  </div>

                  {/* Trust Quote / Positioning */}
                  <div className="p-4 rounded-2xl bg-[#222220] border border-[#333330] text-xs text-[#E8E6E1]/80 space-y-1.5">
                    <span className="text-[#E8E6E1]/50 font-sans font-bold uppercase tracking-[0.2em] text-[9px] block">
                      Core Value Proposition
                    </span>
                    <p className="font-serif italic text-white/90 text-sm">
                      "Connecting knowledge, enterprise leaders, technical excellence, and sustainable solutions across the lubricants and fuels value chain."
                    </p>
                  </div>

                  {/* Live Ecosystem Action Button */}
                  <button
                    onClick={() => {
                      onRouteChange('recyklube');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 px-4 rounded-full bg-[#F9F8F6] hover:bg-white text-[#1D1D1B] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>Discover RecykLube Circular Ecosystem</span>
                    <ArrowRight className="w-4 h-4 text-[#1D1D1B]" />
                  </button>

                </div>
              </div>
            </div>

          </div>

          {/* Quick Trust Statistics Strip */}
          <div className="mt-16 pt-10 border-t border-[#1D1D1B]/15 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl font-medium text-[#1D1D1B]">
                  {stat.value}
                </div>
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#B84A28]">
                  {stat.label}
                </div>
                <p className="text-xs text-[#1D1D1B]/60 font-sans">{stat.subtext}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: WHO WE ARE (PRD Section 8)                        */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#1D1D1B]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em]">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium leading-tight tracking-tight">
                A specialised knowledge & business solutions organisation
              </h2>
              <button
                onClick={() => {
                  onRouteChange('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-2 text-xs font-sans font-semibold text-[#B84A28] hover:underline underline-offset-4 inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>Discover Rosefield's Heritage & Vision</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-8 space-y-4 text-[#1D1D1B]/80 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                <strong className="text-[#1D1D1B]">Rosefield Energy Tech Pvt. Ltd.</strong> is a dedicated corporate consulting, knowledge, and business-enablement platform serving the lubricants, fuels, energy, and circular economy sectors.
              </p>
              <p className="text-[#1D1D1B]/70">
                We operate at the nexus of technical formulation, market intelligence, strategic business development, and environmental sustainability. Our core purpose is helping businesses make better-informed decisions, identify commercial opportunities, improve operational value, and build sustainable growth strategies.
              </p>
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#F9F8F6] border border-[#1D1D1B]/10">
                  <span className="font-sans font-bold text-[#1D1D1B] block">Technical Credibility</span>
                  <span className="text-[#1D1D1B]/60 mt-0.5 block">Deep formulation & engineering advisory</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F9F8F6] border border-[#1D1D1B]/10">
                  <span className="font-sans font-bold text-[#1D1D1B] block">Industry Connectivity</span>
                  <span className="text-[#1D1D1B]/60 mt-0.5 block">Access to decision-makers & global networks</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F9F8F6] border border-[#1D1D1B]/10">
                  <span className="font-sans font-bold text-[#1D1D1B] block">Pragmatic Strategy</span>
                  <span className="text-[#1D1D1B]/60 mt-0.5 block">Actionable roadmaps rooted in market data</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: OUR SERVICES — 7 CORE PRACTICES                   */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1D1D1B]/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EFE9] text-[#1D1D1B] text-[10px] font-sans font-bold uppercase tracking-[0.25em] mb-2 border border-[#1D1D1B]/10">
              <span>Our Services • 7 Core Practices</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium tracking-tight">
              Comprehensive B2B Solutions & Expertise
            </h2>
            <p className="text-[#1D1D1B]/60 text-sm mt-1 max-w-xl font-sans">
              Engineered specifically for lubricant producers, refiners, recyclers, and corporate decision-makers across the circular energy spectrum.
            </p>
          </div>

          <button
            onClick={() => {
              onRouteChange('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1D1D1B] hover:text-[#B84A28] underline underline-offset-4 transition-colors inline-flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>View All Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Sticky Scroll-Spy Split-Screen Layout */}
        <ServicesScrollSpy
          onRouteChange={onRouteChange}
          onOpenEnquiry={onOpenEnquiry}
          onOpenCalculator={onOpenCalculator}
        />

      </section>

      {/* ============================================================ */}
      {/* SECTION 5: RECYKLUBE SPOTLIGHT (PRD Section 11)              */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1D1D1B] text-[#E8E6E1] border border-[#2C2C2A] shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 space-y-10">
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262624] text-[#E8E6E1] text-[10px] font-sans font-bold uppercase tracking-[0.25em] mb-3 border border-[#3A3A36]">
                  <RotateCw className="w-3.5 h-3.5 text-[#B84A28] animate-spin" style={{ animationDuration: '10s' }} />
                  <span>Flagship Circular Economy Initiative</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
                  RecykLube: Building a More Circular Used Oil Ecosystem
                </h2>
                <p className="text-[#E8E6E1]/70 text-sm sm:text-base mt-2 max-w-2xl font-sans">
                  A structured, transparent industry platform for used oil collection, digital tracking, licensed re-refining, and audit-ready EPR compliance.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-3 rounded-full bg-white hover:bg-[#F9F8F6] text-[#1D1D1B] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#B84A28]" />
                  <span>Estimate EPR Targets</span>
                </button>
                <button
                  onClick={() => {
                    onRouteChange('recyklube');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-[#B84A28] hover:bg-[#A33F20] text-white font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Explore RecykLube Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 5-Stage Circular Flow Interactive Diagram */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] text-[#E8E6E1]/50 font-sans uppercase tracking-[0.2em]">
                <span>CIRCULAR VALUE CHAIN STAGES</span>
                <span className="hidden sm:inline">END-TO-END DIGITAL TRACEABILITY</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {RECYKLUBE_STEPS.map((step, idx) => (
                  <div 
                    key={step.step}
                    className="p-4 rounded-2xl bg-[#262624] border border-[#3A3A36] flex flex-col justify-between space-y-3 relative group hover:border-[#E8E6E1]/30 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-7 h-7 rounded-full bg-[#1D1D1B] border border-white/20 text-[#E8E6E1] font-mono font-bold text-xs flex items-center justify-center">
                          {step.step}
                        </span>
                        {idx < 4 && (
                          <ArrowRight className="w-3.5 h-3.5 text-[#E8E6E1]/30 hidden md:block" />
                        )}
                      </div>
                      <h4 className="font-serif text-base font-medium text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#E8E6E1]/60 mt-1 leading-snug font-sans">
                        {step.role}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#3A3A36] text-[11px] text-[#E8E6E1]/80 font-sans font-medium">
                      {step.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Key Benefit highlights */}
            <div className="p-4 rounded-2xl bg-[#222220] border border-[#333330] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#E8E6E1]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#8BA888] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">100% Audit Readiness</span>
                  <span>Verifiable QR manifests eliminating regulatory escrow penalties.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <TreePine className="w-4 h-4 text-[#B84A28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Scope 3 Carbon Abatement</span>
                  <span>~65% emissions reduction vs virgin base oil production.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Droplets className="w-4 h-4 text-[#A67C52] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Group II/II+ RRBO Parity</span>
                  <span>Re-refining specs audited against API & national fluid standards.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: WHY ROSEFIELD? (PRD Section 13)                    */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em]">
            Why Rosefield Energy Tech
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium tracking-tight">
            The Knowledge & Ecosystem Advantage
          </h2>
          <p className="text-[#1D1D1B]/60 text-sm font-sans">
            We bridge deep technical hydrocarbon knowledge with pragmatic commercial strategy and verified sustainability execution.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ROSEFIELD.map((card) => (
            <div
              key={card.id}
              className="p-7 rounded-2xl bg-white border border-[#1D1D1B]/10 shadow-xs hover:shadow-md transition-all duration-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div 
                  className="w-10 h-10 rounded-2xl bg-[#F9F8F6] border border-[#1D1D1B]/15 flex items-center justify-center text-[#1D1D1B]"
                >
                  {getWhyIcon(card.id)}
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1D1D1B]">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1D1D1B]/70 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1D1D1B]/10 flex items-center justify-between text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.2em]">
                <span>Verified Capability</span>
                <span className="font-mono text-[#1D1D1B]/30">◆</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* SECTION 7: OUR APPROACH (PRD Section 12)                     */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1D1D1B]/10 pb-6">
          <div>
            <span className="text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em]">
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium tracking-tight">
              Our 5-Step Strategic Approach
            </h2>
            <p className="text-[#1D1D1B]/60 text-sm mt-1 max-w-xl font-sans">
              A structured, consultative execution framework converting industry complexity into measurable commercial value.
            </p>
          </div>
        </div>

        {/* 5-Step Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {OUR_APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white border border-[#1D1D1B]/10 space-y-3 flex flex-col justify-between relative group hover:shadow-md transition-all"
            >
              <div className="space-y-2">
                <span className="font-mono text-2xl font-bold text-[#1D1D1B]/30 group-hover:text-[#B84A28] transition-colors">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#1D1D1B]">
                  {step.name}
                </h3>
                <div className="text-xs font-sans font-semibold text-[#B84A28]">
                  {step.shortDescription}
                </div>
                <p className="text-xs text-[#1D1D1B]/70 leading-relaxed pt-1 font-sans">
                  {step.details}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1D1D1B]/10 text-[9px] font-mono text-[#1D1D1B]/40 uppercase tracking-widest">
                PHASE {step.number} EXECUTION
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* SECTION 8: UPCOMING EVENTS (PRD Section 15)                  */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1D1D1B]/10 pb-6">
          <div>
            <span className="text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em]">
              Conferences & Platforms
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium tracking-tight">
              Industry Knowledge Summits
            </h2>
            <p className="text-[#1D1D1B]/60 text-sm mt-1 max-w-xl font-sans">
              Executive platforms connecting blenders, refiners, policymakers, and OEMs for strategic dialogue and partnership origination.
            </p>
          </div>

          <button
            onClick={() => {
              onRouteChange('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1D1D1B] hover:text-[#B84A28] underline underline-offset-4 transition-colors inline-flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>View All Summits</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENTS_DATA.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="p-7 rounded-2xl bg-white border border-[#1D1D1B]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1D1D1B] text-[#F9F8F6] text-[10px] font-sans font-bold uppercase tracking-[0.15em]">
                    {event.type}
                  </span>
                  <span className="text-xs font-mono font-medium text-[#1D1D1B]/50">
                    {event.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1D1D1B]">
                  {event.title}
                </h3>

                <p className="text-xs text-[#B84A28] font-sans font-medium">
                  Theme: {event.theme}
                </p>

                <p className="text-xs text-[#1D1D1B]/70 line-clamp-2 leading-relaxed font-sans">
                  {event.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#1D1D1B]/60 font-sans">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B84A28]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A67C52]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1D1D1B]/10 flex items-center justify-between">
                <span className="text-xs text-[#1D1D1B]/50 font-sans">
                  {event.delegatesCount}
                </span>

                <button
                  onClick={() => onOpenEvent(event.id)}
                  className="px-4 py-2 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-sans font-bold uppercase tracking-[0.15em] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Agenda & Registration</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8E6E1]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* SECTION 9: NEWS, BLOGS & GALLERY SHOWCASE                    */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* News & Blogs Editorial Split */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1D1D1B]/10 pb-6">
            <div>
              <span className="text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em]">
                Dispatches & Editorial Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium tracking-tight">
                Latest Industry News & Expert Blogs
              </h2>
              <p className="text-[#1D1D1B]/60 text-sm mt-1 max-w-xl font-sans">
                Regulatory bulletins, base oil supply updates, and deep-dive technical perspectives from Rosefield’s advisory desk.
              </p>
            </div>

            <div className="flex items-center gap-5 shrink-0">
              <button
                onClick={() => onOpenNews()}
                className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1D1D1B] hover:text-[#B84A28] underline underline-offset-4 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>All News</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenBlog()}
                className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1D1D1B] hover:text-[#B84A28] underline underline-offset-4 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Latest News Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#1D1D1B]/60">
                Industry News Wire
              </div>
              <div className="space-y-4">
                {NEWS_DATA.slice(0, 2).map((item) => (
                  <article
                    key={item.id}
                    onClick={() => onOpenNews(item.id)}
                    className="p-6 rounded-2xl bg-white border border-[#1D1D1B]/10 hover:border-[#1D1D1B]/25 transition-colors space-y-3 cursor-pointer group"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/55 font-sans">
                      <span className="font-semibold text-[#B84A28]">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1D1D1B]/70 line-clamp-2 leading-relaxed font-sans">
                      {item.summary}
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#1D1D1B] group-hover:text-[#B84A28] inline-flex items-center gap-1.5">
                      <span>Read Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Latest Blogs Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#1D1D1B]/60">
                Advisory Blog Essays
              </div>
              <div className="space-y-4">
                {BLOGS_DATA.slice(0, 2).map((post) => (
                  <article
                    key={post.id}
                    onClick={() => onOpenBlog(post.id)}
                    className="p-6 rounded-2xl bg-white border border-[#1D1D1B]/10 hover:border-[#1D1D1B]/25 transition-colors space-y-3 cursor-pointer group"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D1D1B]/55 font-sans">
                      <span className="font-semibold text-[#B84A28]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#1D1D1B]/70 line-clamp-2 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-[#1D1D1B]/55">{post.author.name}</span>
                      <span className="font-semibold text-[#1D1D1B] group-hover:text-[#B84A28] inline-flex items-center gap-1.5">
                        <span>Read Essay</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Gallery Strip */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1D1D1B]/10 pb-6">
            <div>
              <span className="text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em]">
                Visual Archive
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium tracking-tight">
                Rosefield Gallery
              </h2>
              <p className="text-[#1D1D1B]/60 text-sm mt-1 max-w-xl font-sans">
                Photography from leadership summits, modern hydro-treating re-refineries, and RecykLube operational hubs.
              </p>
            </div>

            <button
              onClick={() => onOpenGallery()}
              className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1D1D1B] hover:text-[#B84A28] underline underline-offset-4 transition-colors inline-flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_DATA.slice(0, 3).map((item) => (
              <figure
                key={item.id}
                onClick={() => onOpenGallery(item.id)}
                className="rounded-2xl bg-white border border-[#1D1D1B]/10 overflow-hidden hover:border-[#1D1D1B]/25 transition-colors cursor-pointer group"
              >
                <div className="aspect-[4/3] bg-[#E8E6E1] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="p-5 space-y-1.5">
                  <div className="text-xs text-[#1D1D1B]/55 font-sans">
                    <span className="font-mono text-[#B84A28] font-semibold">{item.figNumber}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

      </section>

      {/* ============================================================ */}
      {/* SECTION 10: BUSINESS ENQUIRY CTA (PRD Section 19 & 21)        */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#1D1D1B]/15 shadow-sm text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2EFE9] text-[#1D1D1B] text-[10px] font-sans font-bold uppercase tracking-[0.25em] border border-[#1D1D1B]/10">
            <Building2 className="w-3.5 h-3.5 text-[#B84A28]" />
            <span>Strategic Collaboration</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium leading-tight tracking-tight">
            Let's Connect & Build Sustainable Growth
          </h2>

          <p className="text-[#1D1D1B]/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Whether you are looking for strategic advisory, formulation value engineering, market intelligence, RecykLube EPR compliance, or industry summit partnerships, our senior consultants are ready to engage.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Submit Enterprise B2B Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#E8E6E1]" />
            </button>

            <button
              onClick={() => {
                onRouteChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-[#F2EFE9] text-[#1D1D1B] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors border border-[#1D1D1B]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Locations & Contacts</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-[#1D1D1B]/50 flex items-center justify-center gap-6 font-sans">
            <span>Direct Email: contact@rosefieldenergy.com</span>
            <span>•</span>
            <span>Mumbai & New Delhi Corporate Offices</span>
          </div>

        </div>
      </section>

    </div>
  );
};

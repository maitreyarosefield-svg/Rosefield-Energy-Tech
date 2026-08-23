import React from 'react';
import { PageRoute } from '../types';
import { 
  TreePine, 
  RotateCw, 
  ShieldCheck, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Factory, 
  BarChart3,
  Layers
} from 'lucide-react';

interface SustainabilityViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
}

export const SustainabilityView: React.FC<SustainabilityViewProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#059669]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#A7F3D0] text-xs font-bold uppercase tracking-wider">
            <TreePine className="w-3.5 h-3.5 text-[#059669]" />
            <span>Committed to Sustainability</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Sustainability Embedded in Commercial Strategy
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            At Rosefield Energy Tech, sustainability is not an isolated initiative or PR exercise. It is built directly into our operational consulting, formulation advice, and circular resource recovery models.
          </p>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE2D5] shadow-xs space-y-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <div className="text-center space-y-2 mb-6">
              <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
                Integrated Framework
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#242424]">
                Closing the Loop on Industrial Hydrocarbons
              </h2>
            </div>

            <p>
              The energy and lubricants sector faces unprecedented pressure to reduce carbon intensity, eliminate hazardous waste leakages, and adhere to escalating statutory Extended Producer Responsibility (EPR) mandates.
            </p>
            <p>
              Rosefield helps corporate organizations translate environmental mandates into tangible commercial value. By structuring audited collection chains, facilitating re-refined base oil off-take, and verifying Scope 3 carbon offsets, we prove that responsible resource management and healthy profit margins reinforce one another.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Sustainability Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            Strategic Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            Key Environmental Focus Areas
          </h2>
          <p className="text-stone-600 text-sm">
            Actionable methodologies driving measurable carbon abatement and circular resource velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FBF3E6] border border-[#F8D8A0] text-[#E85D36] flex items-center justify-center">
              <RotateCw className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#242424]">
              Circular Economy & Used Oil Management
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Eliminating non-compliant dumping and burning of spent lubricants by directing feedstock to certified hydro-treating re-refineries, preserving precious molecular value.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-[#EAE2D5]">
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> GPS-manifested reverse logistics from workshops</li>
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Certified Re-Refined Base Oil (RRBO) off-take</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#242424]">
              EPR Compliance & Audit Integrity
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Guiding brand owners, importers, and OEMs through state and central pollution board portals with authentic digital chain-of-custody verification.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-[#EAE2D5]">
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Zero audit-risk compliance fulfillment</li>
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Re-refiner capability and mass-balance vetting</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] text-[#7C3AED] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#242424]">
              Scope 3 Decarbonisation
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Utilizing re-refined base oils reduces product carbon footprint by up to 65% compared to virgin crude refining, assisting corporations in meeting ESG targets.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-[#EAE2D5]">
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Life Cycle Assessment (LCA) data modeling</li>
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Quantifiable GHG abatement certificates</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E1] border border-[#F8D8A0] text-[#9E4A1F] flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#242424]">
              Resource Efficiency & Extended Drain Formulations
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Advising blenders on high-performance synthetic and bio-based ester chemistry to prolong drain intervals and reduce aggregate fluid waste generation.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-[#EAE2D5]">
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Formulation optimization for lower friction & wear</li>
              <li className="flex items-center gap-2"><span className="text-[#059669]">✓</span> Dielectric fluid innovation for electric mobility</li>
            </ul>
          </div>

        </div>
      </section>

      {/* RecykLube Feature Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#242424] text-white border border-[#3A3A3A] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-[#F8D8A0] uppercase tracking-wider">
              Flagship Implementation
            </span>
            <h3 className="font-serif text-3xl font-bold text-white">
              RecykLube: The Operating Engine of Rosefield's Circular Vision
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Explore how RecykLube delivers measurable circular outcomes for automotive dealerships, industrial plants, and lubricant brands across 12+ states.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={onOpenCalculator}
              className="px-5 py-3 rounded-xl bg-[#F8B848] hover:bg-[#DF9626] text-[#242424] font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>EPR Calculator</span>
            </button>
            <button
              onClick={() => {
                onRouteChange('recyklube');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#F88058] hover:bg-[#E86338] text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Explore RecykLube Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#242424] font-bold">
          Partner with Rosefield for Sustainability & EPR Advisory
        </h3>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          Contact our ESG practice to audit your hazardous waste flows, structure EPR compliance, or source re-refined base stocks.
        </p>
        <button
          onClick={() => onOpenEnquiry('Sustainability & EPR Advisory')}
          className="px-7 py-3 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Connect on Sustainability Strategy</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F88058]" />
        </button>
      </section>

    </div>
  );
};

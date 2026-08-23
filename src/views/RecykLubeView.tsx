import React from 'react';
import { PageRoute } from '../types';
import { RECYKLUBE_STEPS } from '../data/mockData';
import { 
  RotateCw, 
  ShieldCheck, 
  TreePine, 
  Droplets, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Truck, 
  FileCheck2, 
  BarChart3,
  Factory
} from 'lucide-react';

interface RecykLubeViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
}

export const RecykLubeView: React.FC<RecykLubeViewProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <RotateCw className="w-3.5 h-3.5 text-[#F88058] animate-spin" style={{ animationDuration: '12s' }} />
            <span>Rosefield Circular Economy Flagship</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            RecykLube: Building a More Circular Used Oil Ecosystem
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            An industry platform engineered to formalise used oil collection, deliver digital chain-of-custody tracking, and enable 100% audit-ready Extended Producer Responsibility (EPR) compliance.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCalculator}
              className="px-6 py-3.5 rounded-xl bg-[#F8B848] hover:bg-[#DF9626] text-[#242424] font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch EPR Target Estimator</span>
            </button>

            <button
              onClick={() => onOpenEnquiry('RecykLube Onboarding')}
              className="px-6 py-3.5 rounded-xl bg-[#F88058] hover:bg-[#E86338] text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Onboard Organization</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* RecykLube Mission & Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
              The Circular Imperative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold leading-tight">
              Transforming Hazardous Waste into High-Value Group II Base Stocks
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              In India and regional markets, over 1.4 million metric tons of used lubricating oil are generated annually. Historically, large portions leaked into informal burning or low-tier brick-kiln fuel channels, causing severe environmental contamination.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>RecykLube</strong> was established by Rosefield Energy Tech to bridge this systemic gap. We organize authorized collection networks, enforce digital QR-manifest traceability from workshop to refinery gate, and connect certified hydro-treating re-refiners with lubricant blenders for closed-loop procurement.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5]">
                <span className="font-bold text-[#242424] block">65% Lower Carbon</span>
                <span className="text-stone-500 mt-0.5 block">vs virgin crude refining emissions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5]">
                <span className="font-bold text-[#242424] block">100% Audit Ready</span>
                <span className="text-stone-500 mt-0.5 block">CPCB Form 10 digital verification</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#242424] text-white border border-[#3A3A3A] space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">
              RecykLube Core Operational Pillars
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#333] text-[#F88058] shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Authorized Aggregation & Reverse Logistics</span>
                  <span className="text-stone-400">GPS-tracked fleet networks collecting from dealership workshops, industrial plants, and fleet depots.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#333] text-[#F8B848] shrink-0 mt-0.5">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Digital Chain-of-Custody (CoC)</span>
                  <span className="text-stone-400">Barcode/QR manifest tagging connecting every liter to generator ID, batch assay, and re-refinery gate logs.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#333] text-[#059669] shrink-0 mt-0.5">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Audited Re-refining Infrastructure</span>
                  <span className="text-stone-400">Rigorous technical audits of re-refiners ensuring solvent extraction and hydro-treating capability to meet API Group II specs.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#333] text-[#F8D8A0] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">EPR Credit Issuance & Compliance Settlement</span>
                  <span className="text-stone-400">Statutory certificate generation and portal reconciliation eliminating audit liabilities for brand owners.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5-Step Circular Flow Detailed Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            Circular Mechanics
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            The RecykLube 5-Stage Closed Loop
          </h2>
          <p className="text-stone-600 text-sm">
            A continuous, verifiable journey from spent lubricant generator to re-engineered finished fluid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {RECYKLUBE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-[#EAE2D5] shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-2xl font-bold text-[#E85D36]">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#242424]">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 space-y-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Features:</span>
                  {step.keyFeatures.map((kf, i) => (
                    <div key={i} className="text-[11px] text-stone-700 flex items-center gap-1.5">
                      <span className="text-[#059669]">✓</span>
                      <span>{kf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0EBE3] text-[11px] font-semibold text-[#E85D36]">
                {step.metrics}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Re-Refined Base Oil (RRBO) Quality & Carbon Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
              Technical Comparison
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
              Virgin Base Oil vs RecykLube Hydro-Treated RRBO
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Modern re-refining produces base oils chemically identical to virgin Group II base stocks.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#D8D0C4] text-[#242424] font-serif">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">Virgin Group II Base Oil</th>
                  <th className="py-3 px-4 text-[#E85D36]">RecykLube Hydro-Treated RRBO</th>
                  <th className="py-3 px-4">Environmental Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2D5] text-stone-700">
                <tr>
                  <td className="py-3 px-4 font-semibold">Saturates Content (%)</td>
                  <td className="py-3 px-4">&gt; 90%</td>
                  <td className="py-3 px-4 font-semibold text-[#059669]">&gt; 92% (Fully Hydro-finished)</td>
                  <td className="py-3 px-4 text-xs text-stone-500">Zero aromatic residue</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Sulfur Content (ppm)</td>
                  <td className="py-3 px-4">&lt; 300 ppm</td>
                  <td className="py-3 px-4 font-semibold text-[#059669]">&lt; 150 ppm</td>
                  <td className="py-3 px-4 text-xs text-stone-500">Low emissions profile</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Viscosity Index (VI)</td>
                  <td className="py-3 px-4">95 – 110</td>
                  <td className="py-3 px-4 font-semibold text-[#059669]">100 – 115</td>
                  <td className="py-3 px-4 text-xs text-stone-500">Matches high-tier multigrade fluids</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Embodied Carbon Footprint</td>
                  <td className="py-3 px-4">~2.8 – 3.2 kg CO₂e / kg</td>
                  <td className="py-3 px-4 font-semibold text-[#059669]">~0.9 – 1.1 kg CO₂e / kg</td>
                  <td className="py-3 px-4 text-xs text-[#059669] font-bold">~65% CO₂e Reduction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stakeholder Onboarding / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#242424] text-white border border-[#3A3A3A] shadow-xl text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Join the RecykLube Circular Network
          </h3>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you are a lubricant brand owner seeking EPR compliance credits, a waste generator looking for safe collection, or a licensed re-refiner seeking feedstock and off-take agreements, RecykLube connects you.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F8B848] hover:bg-[#DF9626] text-[#242424] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Calculate Your Statutory EPR Obligation</span>
            </button>

            <button
              onClick={() => onOpenEnquiry('RecykLube Stakeholder Onboarding')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F88058] hover:bg-[#E86338] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Onboard with RecykLube</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

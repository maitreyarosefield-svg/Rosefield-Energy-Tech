import React, { useState } from 'react';
import { PageRoute, IndustryId } from '../types';
import { INDUSTRY_SECTORS } from '../data/mockData';
import { EcosystemExplorer } from '../components/EcosystemExplorer';
import { 
  Droplets, 
  Flame, 
  RotateCw, 
  Package, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Building2
} from 'lucide-react';

interface IndustriesViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  onRouteChange,
  onOpenEnquiry
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId>('lubricants');

  const getIndustryIcon = (id: IndustryId) => {
    switch (id) {
      case 'lubricants': return <Droplets className="w-5 h-5 text-[#F88058]" />;
      case 'fuels-energy': return <Flame className="w-5 h-5 text-[#F8B848]" />;
      case 'circular-economy': return <RotateCw className="w-5 h-5 text-[#E85D36]" />;
      case 'used-oil': return <Package className="w-5 h-5 text-[#F88058]" />;
      case 'epr-sustainability': return <ShieldCheck className="w-5 h-5 text-[#F8B848]" />;
      case 'industrial-automotive': return <Truck className="w-5 h-5 text-[#E85D36]" />;
    }
  };

  const activeSector = INDUSTRY_SECTORS.find(s => s.id === selectedIndustry) || INDUSTRY_SECTORS[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>Industry Ecosystem</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Connecting the Full Lubricants & Energy Ecosystem
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Rather than treating sectors in isolation, Rosefield operates across the entire interconnected value chain — from upstream base oil refining and formulation to waste aggregation and closed-loop recycling.
          </p>
        </div>
      </section>

      {/* Interactive Ecosystem Explorer Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <EcosystemExplorer onOpenEnquiry={onOpenEnquiry} />
      </section>

      {/* 6 Sectors Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            Sectoral Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            Dedicated Solutions by Industry Segment
          </h2>
          <p className="text-stone-600 text-sm">
            Select an industry segment to examine challenges, key stakeholders, and Rosefield advisory interventions.
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {INDUSTRY_SECTORS.map((sec) => {
            const isSelected = sec.id === selectedIndustry;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedIndustry(sec.id)}
                className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-[#242424] text-white border-[#333] shadow-md scale-[1.02]'
                    : 'bg-white text-[#242424] border-[#EAE2D5] hover:border-stone-400'
                }`}
              >
                <div className={`p-1.5 rounded-lg w-fit ${isSelected ? 'bg-[#333]' : 'bg-[#FAF8F5]'}`}>
                  {getIndustryIcon(sec.id)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs leading-tight">
                    {sec.title}
                  </h4>
                  <span className={`text-[10px] block line-clamp-1 mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                    {sec.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D5] shadow-xl space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F0EBE3]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
                  INDUSTRY PROFILE
                </span>
                {activeSector.metrics && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E1] text-[#9E4A1F] font-mono text-xs font-bold">
                    {activeSector.metrics.value} • {activeSector.metrics.label}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#242424]">
                {activeSector.title}
              </h3>
              <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
                {activeSector.description}
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry(`Industry Consulting: ${activeSector.title}`)}
              className="px-6 py-3 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Engage on {activeSector.title}</span>
              <ArrowRight className="w-4 h-4 text-[#F88058]" />
            </button>
          </div>

          {/* 3 Columns: Stakeholders, Challenges, Rosefield Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stakeholders */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-3">
              <h4 className="text-xs font-bold text-[#242424] uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#F88058]" />
                <span>Key Stakeholders</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {activeSector.keyStakeholders.map((stk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#E85D36] font-bold">▪</span>
                    <span>{stk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#F8D8A0] space-y-3">
              <h4 className="text-xs font-bold text-[#9E4A1F] uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#E85D36]" />
                <span>Industry Challenges</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {activeSector.industryChallenges.map((ch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#E85D36] font-bold">⚠</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rosefield Solutions */}
            <div className="p-5 rounded-2xl bg-[#FBF3E6] border border-[#F8D8A0] space-y-3">
              <h4 className="text-xs font-bold text-[#9E4A1F] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>Rosefield Interventions</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-800">
                {activeSector.rosefieldSolutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#242424] font-bold">
          Looking to Connect Across Industry Verticals?
        </h3>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          We facilitate cross-sectoral supply agreements, technology partnerships, and circular recycling ecosystems.
        </p>
        <button
          onClick={() => onOpenEnquiry('Cross-Industry Partnership')}
          className="px-7 py-3 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Initiate Industry Dialogue</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F88058]" />
        </button>
      </section>

    </div>
  );
};

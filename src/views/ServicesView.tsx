import React, { useState } from 'react';
import { PageRoute, ServiceVerticalId } from '../types';
import { SERVICE_VERTICALS } from '../data/mockData';
import { 
  Users, 
  Compass, 
  RefreshCw, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  FileText
} from 'lucide-react';

interface ServicesViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator
}) => {
  const [selectedVertical, setSelectedVertical] = useState<ServiceVerticalId>('events-platforms');

  const getVerticalIcon = (id: ServiceVerticalId) => {
    switch (id) {
      case 'events-platforms': return <Users className="w-5 h-5 text-[#F88058]" />;
      case 'strategic-consultancy': return <Compass className="w-5 h-5 text-[#F8B848]" />;
      case 'circular-epr': return <RefreshCw className="w-5 h-5 text-[#E85D36]" />;
      case 'market-intelligence': return <BarChart3 className="w-5 h-5 text-[#F8B848]" />;
    }
  };

  const activeVerticalData = SERVICE_VERTICALS.find(v => v.id === selectedVertical) || SERVICE_VERTICALS[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>What We Do • 4 Core Business Verticals</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Specialised Consulting, Knowledge & Circular Solutions
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our multi-disciplinary practices provide end-to-end commercial strategy, technical due diligence, market intelligence, high-level summits, and verified EPR compliance frameworks.
          </p>
        </div>
      </section>

      {/* Vertical Selector Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICE_VERTICALS.map((vert) => {
            const isSelected = vert.id === selectedVertical;
            return (
              <button
                key={vert.id}
                onClick={() => setSelectedVertical(vert.id)}
                className={`p-5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-[#242424] text-white border-[#333] shadow-lg scale-[1.02]'
                    : 'bg-white text-[#242424] border-[#EAE2D5] hover:border-stone-400 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#333]' : 'bg-[#FBF3E6]'}`}>
                    {getVerticalIcon(vert.id)}
                  </div>
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#F88058]' : 'text-stone-400'}`}>
                    [{vert.number}]
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">
                    {vert.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {vert.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Deep-Dive on Active Vertical */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE2D5] shadow-xl space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#F0EBE3]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#E85D36] uppercase tracking-wider">
                VERTICAL {activeVerticalData.number} BRIEFING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-bold">
                {activeVerticalData.title}
              </h2>
              <p className="text-base text-stone-600 leading-relaxed pt-1">
                {activeVerticalData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              {activeVerticalData.id === 'circular-epr' && (
                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-3 rounded-xl bg-[#FBF3E6] hover:bg-[#F5E5C9] text-[#9E4A1F] font-semibold text-xs transition-colors border border-[#F8D8A0] flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#F8B848]" />
                  <span>EPR Calculator</span>
                </button>
              )}
              <button
                onClick={() => onOpenEnquiry(activeVerticalData.title)}
                className="px-6 py-3 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Submit RFP / Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#F88058]" />
              </button>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#242424] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E85D36]" />
              <span>Full Scope of Capabilities & Deliverables</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeVerticalData.capabilities.map((cap, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] flex items-start gap-3 text-sm text-stone-800"
                >
                  <div className="w-6 h-6 rounded-full bg-white border border-[#D8D0C4] text-[#E85D36] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="font-medium leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Outcomes & Target Audience Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Outcomes */}
            <div className="p-6 rounded-2xl bg-[#FBF3E6] border border-[#F8D8A0] space-y-3">
              <h4 className="text-xs font-bold text-[#9E4A1F] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>Measurable Strategic Outcomes</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-800">
                {activeVerticalData.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold shrink-0">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-3">
              <h4 className="text-xs font-bold text-[#242424] uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#F88058]" />
                <span>Primary Target Enterprise Stakeholders</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeVerticalData.targetAudience.map((aud, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#D8D0C4] text-xs font-medium text-[#242424]"
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Case Highlight */}
          {activeVerticalData.caseSnippet && (
            <div className="p-6 rounded-2xl bg-[#242424] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#F8D8A0] font-bold uppercase tracking-wider block">
                  Demonstrated Track Record
                </span>
                <p className="text-sm text-stone-300 italic">
                  "{activeVerticalData.caseSnippet}"
                </p>
              </div>

              <button
                onClick={() => onOpenEnquiry(activeVerticalData.title)}
                className="px-5 py-2.5 rounded-lg bg-[#F88058] hover:bg-[#E86338] text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer"
              >
                Discuss Scope
              </button>
            </div>
          )}

        </div>
      </section>

      {/* All 4 Verticals Summary Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            Ecosystem Integration
          </span>
          <h3 className="font-serif text-3xl text-[#242424] font-bold">
            How Our Verticals Synergize
          </h3>
          <p className="text-stone-600 text-sm">
            Insights from our market intelligence feed into our consultancy scopes; our events convene stakeholders who participate in our RecykLube circular frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {SERVICE_VERTICALS.map((v) => (
            <div key={v.id} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-2">
              <div className="font-mono text-xs font-bold text-[#E85D36]">{v.number}</div>
              <h4 className="font-serif font-bold text-[#242424] text-base">{v.title}</h4>
              <p className="text-xs text-stone-600 line-clamp-2">{v.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#242424] font-bold">
          Require Tailored Technical or Commercial Support?
        </h3>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          Contact our consulting practice for confidentiality agreements, engagement terms, and project roadmaps.
        </p>
        <button
          onClick={() => onOpenEnquiry()}
          className="px-7 py-3 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Submit Request for Proposal (RFP)</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F88058]" />
        </button>
      </section>

    </div>
  );
};

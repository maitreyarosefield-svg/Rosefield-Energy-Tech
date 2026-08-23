import React from 'react';
import { PageRoute } from '../types';
import { OUR_APPROACH_STEPS, LEADERSHIP_TEAM, TRUST_STATS, WHY_ROSEFIELD } from '../data/mockData';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  RotateCw, 
  Users, 
  Sparkles,
  TreePine
} from 'lucide-react';

interface AboutViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onRouteChange,
  onOpenEnquiry
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>About Rosefield Energy Tech</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Pioneering Knowledge, Strategy & Circular Solutions
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Rosefield Energy Tech Pvt. Ltd. is a specialised consulting, knowledge, and business solutions organisation connecting stakeholders across the lubricants, fuels, energy, and circular economy ecosystem.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D5] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E1] border border-[#F8D8A0] text-[#E85D36] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider block">
              Corporate Vision
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
              To become the leading knowledge and business-enablement platform
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              We envision an interconnected, technically advanced, and resource-circular energy ecosystem across India and the Asia-Pacific where businesses leverage empirical data, strategic partnerships, and sustainable resource loops for lasting commercial resilience.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D5] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E1] border border-[#F8D8A0] text-[#F8B848] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider block">
              Corporate Mission
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
              Connecting knowledge, people, businesses and opportunities
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Through specialised consulting, premier industry knowledge platforms, market intelligence, and dedicated circular economy solutions like RecykLube, we empower decision-makers to solve technical complexities, execute growth roadmaps, and fulfill environmental responsibilities.
            </p>
          </div>

        </div>
      </section>

      {/* Detailed Positioning & Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5]">
          <div className="max-w-3xl mx-auto space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#242424]">
                Bridging Domain Depth with Commercial Execution
              </h2>
            </div>

            <p>
              The global hydrocarbons and lubrication landscape is undergoing profound structural shifts: tightening emissions norms, the advent of electric mobility, volatile base oil pricing regimes, and stringent Extended Producer Responsibility (EPR) mandates.
            </p>
            <p>
              Rosefield Energy Tech was founded to provide <strong>clarity, strategic direction, and actionable business solutions</strong> for enterprises navigating this transition. Unlike generic management consultancies or transaction-focused brokers, Rosefield’s team brings decades of direct operational, technical, and regulatory experience in petroleum refining, formulation chemistry, waste logistics, and industry convening.
            </p>
            <p>
              Today, Rosefield serves as a trusted ecosystem partner for Fortune 500 energy majors, national oil marketing corporations, independent lubricant manufacturers, automotive OEMs, licensed re-refiners, and statutory regulatory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* The 5-Step Methodology Deep-Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            Execution Framework
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            Our 5-Step Strategic Approach
          </h2>
          <p className="text-stone-600 text-sm">
            Every engagement follows a rigorous, data-grounded progression from initial diagnostic to measurable field enablement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {OUR_APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white border border-[#EAE2D5] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-2xl font-bold text-[#E85D36]">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#242424]">
                  {step.name}
                </h3>
                <div className="text-xs font-semibold text-[#9E4A1F]">
                  {step.shortDescription}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {step.details}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EBE3] text-[10px] font-mono text-stone-400">
                PHASE {step.number}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Advisory Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            Domain Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            Senior Industry Leadership & Advisory Board
          </h2>
          <p className="text-stone-600 text-sm">
            Steered by recognized authorities in hydrocarbon formulation, hazardous waste policy, commodity modeling, and corporate strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#EAE2D5] shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-[#242424] text-[#F8D8A0] font-serif font-bold text-lg flex items-center justify-center border border-[#444]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#242424]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#E85D36] mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {member.experience}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EBE3] text-[11px] text-stone-500 font-medium">
                <span className="text-stone-400 block mb-0.5">Specialisation:</span>
                <span className="text-[#242424]">{member.specialization}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#242424] text-white border border-[#3A3A3A] space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <TreePine className="w-3.5 h-3.5 text-[#059669]" />
            <span>Integrated ESG Commitment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            Sustainability as a Core Commercial Driver
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            At Rosefield, sustainability is not an afterthought or marketing exercise — it is embedded in every technical advisory engagement and market analysis. Through our RecykLube circular initiative, we actively enable the transition from hazardous spent oil disposal to high-yield re-refined base oils, helping clients fulfill statutory EPR mandates while cutting Scope 3 carbon intensity by up to 70%.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onRouteChange('sustainability');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#F88058] hover:bg-[#E86338] text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Sustainability Framework</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenEnquiry('Sustainability & EPR')}
              className="px-6 py-3 rounded-xl bg-[#333] hover:bg-[#444] text-white text-xs font-semibold transition-colors border border-[#484848] cursor-pointer"
            >
              <span>Engage on EPR Advisory</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#242424] font-bold">
          Ready to Collaborate with Rosefield Energy Tech?
        </h3>
        <p className="text-stone-600 text-sm max-w-xl mx-auto">
          Contact our leadership team for initial consultations, advisory scopes, or conference partnerships.
        </p>
        <button
          onClick={() => onOpenEnquiry()}
          className="px-7 py-3 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Connect With Our Team</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F88058]" />
        </button>
      </section>

    </div>
  );
};

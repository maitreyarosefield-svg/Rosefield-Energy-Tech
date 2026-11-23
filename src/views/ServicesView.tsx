import React from 'react';
import { PageRoute, ServiceVerticalId } from '../types';
import { ServicesScrollSpy } from '../components/ServicesScrollSpy';
import { ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
  initialVertical?: ServiceVerticalId;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator,
  initialVertical = 'epr-fulfillment'
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F26522]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>Services • 7 Core Practices</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Specialised Consulting, Compliance & Circular Solutions
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our integrated practices span EPR fulfillment, used oil collection & RRBO enablement, professional certification, technical audits, circular economy strategy, R3T traceability, and CE Events.
          </p>
        </div>
      </section>

      {/* Sticky Scroll-Spy Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ServicesScrollSpy
          onRouteChange={onRouteChange}
          onOpenEnquiry={onOpenEnquiry}
          onOpenCalculator={onOpenCalculator}
          initialServiceId={initialVertical}
        />
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
          <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
        </button>
      </section>

    </div>
  );
};

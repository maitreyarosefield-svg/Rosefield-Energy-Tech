import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { ReportModal } from './components/ReportModal';
import { EventModal } from './components/EventModal';
import { EprCalculatorModal } from './components/EprCalculatorModal';
import { SearchModal } from './components/SearchModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { IndustriesView } from './views/IndustriesView';
import { RecykLubeView } from './views/RecykLubeView';
import { InsightsView } from './views/InsightsView';
import { EventsView } from './views/EventsView';
import { SustainabilityView } from './views/SustainabilityView';
import { ContactView } from './views/ContactView';

import { Sparkles, Calculator, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [enquiryArea, setEnquiryArea] = useState<string | undefined>(undefined);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeReportId, setActiveReportId] = useState<string | null>(null);
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Global Keyboard Shortcuts (Ctrl+K / Cmd+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position for floating action
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (area?: string) => {
    setEnquiryArea(area);
    setIsEnquiryOpen(true);
  };

  const handleOpenReport = (reportId: string) => {
    setActiveReportId(reportId);
  };

  const handleOpenEvent = (eventId: string) => {
    setActiveEventId(eventId);
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#242424] flex flex-col font-sans selection:bg-[#F8D8A0] selection:text-[#242424]">
      
      {/* Top Corporate Executive Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomeView
            onRouteChange={handleRouteChange}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenReport={handleOpenReport}
            onOpenEvent={handleOpenEvent}
            onOpenCalculator={handleOpenCalculator}
          />
        )}

        {currentRoute === 'about' && (
          <AboutView
            onRouteChange={handleRouteChange}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesView
            onRouteChange={handleRouteChange}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
          />
        )}

        {currentRoute === 'industries' && (
          <IndustriesView
            onRouteChange={handleRouteChange}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'recyklube' && (
          <RecykLubeView
            onRouteChange={handleRouteChange}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
          />
        )}

        {currentRoute === 'insights' && (
          <InsightsView
            onRouteChange={handleRouteChange}
            onOpenReport={handleOpenReport}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'events' && (
          <EventsView
            onRouteChange={handleRouteChange}
            onOpenEvent={handleOpenEvent}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'sustainability' && (
          <SustainabilityView
            onRouteChange={handleRouteChange}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactView initialInterest={enquiryArea} />
        )}
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Floating Quick Action Tools for B2B Users */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white text-[#242424] border border-[#D8D0C4] shadow-md flex items-center justify-center hover:bg-[#FAF8F5] transition-all cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={handleOpenCalculator}
          className="px-4 py-2.5 rounded-full bg-[#242424] hover:bg-black text-white text-xs font-semibold shadow-xl border border-[#444] flex items-center gap-2 transition-all cursor-pointer group"
          title="Calculate EPR obligation and carbon abatement"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F8B848] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">EPR Target Estimator</span>
          <span className="sm:hidden">EPR Tool</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* GLOBAL MODALS                                                */}
      {/* ============================================================ */}
      
      {/* 1. Global B2B Lead Form Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialArea={enquiryArea}
      />

      {/* 2. Gated Report Abstract & Lead Modal */}
      <ReportModal
        reportId={activeReportId}
        onClose={() => setActiveReportId(null)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 3. Event Details & Registration Modal */}
      <EventModal
        eventId={activeEventId}
        onClose={() => setActiveEventId(null)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 4. Interactive EPR & Carbon Abatement Estimator Modal */}
      <EprCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 5. Global Command-Palette Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onRouteChange={handleRouteChange}
        onOpenReport={handleOpenReport}
        onOpenEvent={handleOpenEvent}
        onOpenEnquiry={handleOpenEnquiry}
      />

    </div>
  );
}

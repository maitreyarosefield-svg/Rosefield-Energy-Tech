import React from 'react';
import { PageRoute } from '../types';
import { EVENTS_DATA } from '../data/mockData';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Ticket
} from 'lucide-react';

interface EventsViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEvent: (eventId: string) => void;
  onOpenEnquiry: (area?: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  onRouteChange,
  onOpenEvent,
  onOpenEnquiry
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>Conferences & Knowledge Platforms</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Premier Industry Summits & Executive Dialogues
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Rosefield’s conferences are high-level B2B knowledge and networking platforms uniting blenders, refiners, policymakers, OEMs, and technology providers for strategic consensus.
          </p>
        </div>
      </section>

      {/* Events Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            2026 Calendar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            Upcoming Leadership Summits & Roundtables
          </h2>
          <p className="text-stone-600 text-sm">
            Curated to provide peer-level dialogue, technology showcases, and commercial matchmaking.
          </p>
        </div>

        <div className="space-y-6">
          {EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D5] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#E85D36] text-white text-xs font-bold uppercase tracking-wider">
                    {event.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FAF0E1] text-[#9E4A1F] text-xs font-bold">
                    {event.status}
                  </span>
                  {event.delegatesCount && (
                    <span className="text-xs text-stone-500 font-mono">
                      {event.delegatesCount}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E85D36] font-semibold">
                  Theme: {event.theme}
                </p>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {event.description}
                </p>

                {/* Key Agenda Focus */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                    Key Themes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {event.keyThemes.slice(0, 4).map((t, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-[#059669]">✓</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date & Location */}
                <div className="pt-3 border-t border-[#F0EBE3] flex flex-wrap items-center gap-6 text-xs font-semibold text-stone-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#F88058]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F8B848]" />
                    <span>{event.location}</span>
                  </div>
                  {event.daysDuration && (
                    <div className="text-stone-500">
                      Duration: {event.daysDuration}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Action Box (4 cols) */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-4 text-center lg:text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#9E4A1F] uppercase tracking-wider block">
                    Delegate & Sponsorship Registration
                  </span>
                  <div className="font-serif text-lg font-bold text-[#242424]">
                    Reserve Executive Seats
                  </div>
                  <p className="text-xs text-stone-500">
                    Access keynote sessions, VIP networking lunches, and B2B bilateral meetings.
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onOpenEvent(event.id)}
                    className="w-full py-3 px-4 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>View Agenda & Speakers</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F88058]" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`Sponsorship: ${event.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-stone-100 text-[#242424] text-xs font-semibold transition-colors border border-[#D8D0C4] cursor-pointer"
                  >
                    <span>Inquire for Corporate Sponsorship</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Hosting Custom Roundtables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#242424] text-white border border-[#3A3A3A] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-[#F8D8A0] uppercase tracking-wider">
              Exclusive Boardroom Formats
            </span>
            <h3 className="font-serif text-3xl font-bold text-white">
              Host a Closed-Door CXO Technical Roundtable with Rosefield
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              We curate and moderate invitation-only strategic forums for technology innovators and refiners looking to engage a targeted group of 25–40 decision-makers.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('Custom CXO Roundtable Hosting')}
            className="px-7 py-3.5 rounded-xl bg-[#F88058] hover:bg-[#E86338] text-white text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <span>Inquire About Custom Roundtables</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};

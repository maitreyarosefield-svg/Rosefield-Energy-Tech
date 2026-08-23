import React, { useState, useEffect, useMemo } from 'react';
import { PageRoute } from '../types';
import { SERVICE_VERTICALS, INDUSTRY_SECTORS, INSIGHTS_DATA, EVENTS_DATA } from '../data/mockData';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Calendar, 
  Compass, 
  Droplet, 
  RotateCw,
  Sparkles
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
  onSelectReport: (reportId: string) => void;
  onSelectEvent: (eventId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectReport,
  onSelectEvent
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = useMemo(() => {
    if (!searchTerm.trim()) {
      return {
        services: SERVICE_VERTICALS.slice(0, 2),
        industries: INDUSTRY_SECTORS.slice(0, 2),
        insights: INSIGHTS_DATA.slice(0, 3),
        events: EVENTS_DATA.slice(0, 2)
      };
    }

    const term = searchTerm.toLowerCase();

    return {
      services: SERVICE_VERTICALS.filter(v => 
        v.title.toLowerCase().includes(term) || 
        v.description.toLowerCase().includes(term) ||
        v.capabilities.some(c => c.toLowerCase().includes(term))
      ),
      industries: INDUSTRY_SECTORS.filter(i => 
        i.title.toLowerCase().includes(term) || 
        i.description.toLowerCase().includes(term)
      ),
      insights: INSIGHTS_DATA.filter(r => 
        r.title.toLowerCase().includes(term) || 
        r.summary.toLowerCase().includes(term) ||
        r.category.toLowerCase().includes(term)
      ),
      events: EVENTS_DATA.filter(e => 
        e.title.toLowerCase().includes(term) || 
        e.theme.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term)
      )
    };
  }, [searchTerm]);

  const totalResults = 
    results.services.length + 
    results.industries.length + 
    results.insights.length + 
    results.events.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-[#1D1D1B]/15 overflow-hidden flex flex-col max-h-[80vh] text-[#1D1D1B]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#1D1D1B]/10 flex items-center gap-3 bg-[#F9F8F6]">
          <Search className="w-5 h-5 text-[#B84A28] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search market reports, advisory capabilities, events, EPR rules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-[#1D1D1B] placeholder-[#1D1D1B]/40 focus:outline-hidden font-sans font-medium"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')} 
              className="text-xs text-[#1D1D1B]/50 hover:text-[#1D1D1B] px-2 py-0.5 rounded-full hover:bg-stone-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#1D1D1B]/50 hover:text-[#1D1D1B] hover:bg-[#1D1D1B]/5 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 divide-y divide-[#1D1D1B]/10 font-sans">
          
          {totalResults === 0 ? (
            <div className="py-12 text-center text-[#1D1D1B]/60">
              <Search className="w-8 h-8 mx-auto text-[#1D1D1B]/20 mb-2" />
              <p className="text-sm font-medium">No results found for "{searchTerm}"</p>
              <p className="text-xs text-[#1D1D1B]/40 mt-1">Try searching for "Base oils", "EPR", "RecykLube", "Summit", or "Consulting"</p>
            </div>
          ) : (
            <>
              {/* Reports & Insights */}
              {results.insights.length > 0 && (
                <div className="pt-2 first:pt-0">
                  <div className="text-[10px] font-bold text-[#1D1D1B]/50 uppercase tracking-[0.2em] mb-2.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#B84A28]" />
                    <span>Market Intelligence & Reports</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.insights.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onClose();
                          onSelectReport(item.id);
                        }}
                        className="w-full text-left p-3 rounded-2xl hover:bg-[#F9F8F6] transition-colors flex items-start justify-between group cursor-pointer border border-transparent hover:border-[#1D1D1B]/10"
                      >
                        <div>
                          <div className="font-serif font-medium text-sm text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors">
                            {item.title}
                          </div>
                          <span className="text-xs text-[#1D1D1B]/60 line-clamp-1 mt-0.5">
                            {item.summary}
                          </span>
                        </div>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#1D1D1B] text-[#F9F8F6] font-mono shrink-0 ml-2">
                          {item.format}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Verticals */}
              {results.services.length > 0 && (
                <div className="pt-4">
                  <div className="text-[10px] font-bold text-[#1D1D1B]/50 uppercase tracking-[0.2em] mb-2.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#A67C52]" />
                    <span>Advisory & Business Verticals</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.services.map((vert) => (
                      <button
                        key={vert.id}
                        onClick={() => {
                          onClose();
                          onNavigate('services');
                        }}
                        className="w-full text-left p-3 rounded-2xl hover:bg-[#F9F8F6] transition-colors flex items-center justify-between group cursor-pointer border border-transparent hover:border-[#1D1D1B]/10"
                      >
                        <div>
                          <div className="font-serif font-medium text-sm text-[#1D1D1B] group-hover:text-[#B84A28]">
                            {vert.title}
                          </div>
                          <span className="text-xs text-[#1D1D1B]/60">{vert.tagline}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1D1D1B]/40 group-hover:text-[#B84A28] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {results.events.length > 0 && (
                <div className="pt-4">
                  <div className="text-[10px] font-bold text-[#1D1D1B]/50 uppercase tracking-[0.2em] mb-2.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B84A28]" />
                    <span>Industry Conferences & Platforms</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.events.map((evt) => (
                      <button
                        key={evt.id}
                        onClick={() => {
                          onClose();
                          onSelectEvent(evt.id);
                        }}
                        className="w-full text-left p-3 rounded-2xl hover:bg-[#F9F8F6] transition-colors flex items-center justify-between group cursor-pointer border border-transparent hover:border-[#1D1D1B]/10"
                      >
                        <div>
                          <div className="font-serif font-medium text-sm text-[#1D1D1B] group-hover:text-[#B84A28]">
                            {evt.title}
                          </div>
                          <span className="text-xs text-[#1D1D1B]/60">{evt.date} • {evt.location}</span>
                        </div>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F9F8F6] border border-[#1D1D1B]/10 text-[#1D1D1B]/70 shrink-0 ml-2 font-mono">
                          {evt.status}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* RecykLube & Industries */}
              {results.industries.length > 0 && (
                <div className="pt-4">
                  <div className="text-[10px] font-bold text-[#1D1D1B]/50 uppercase tracking-[0.2em] mb-2.5 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-[#B84A28]" />
                    <span>Connected Industry Sectors</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {results.industries.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => {
                          onClose();
                          onNavigate('industries');
                        }}
                        className="text-left p-3 rounded-2xl bg-[#F9F8F6] hover:bg-[#F0EBE3] transition-colors text-xs font-semibold text-[#1D1D1B] group flex items-center justify-between border border-[#1D1D1B]/5"
                      >
                        <span className="group-hover:text-[#B84A28]">{sec.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#1D1D1B]/40 group-hover:text-[#B84A28]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </>
          )}

        </div>

        {/* Footer shortcuts */}
        <div className="p-3.5 bg-[#F9F8F6] border-t border-[#1D1D1B]/10 text-xs font-sans text-[#1D1D1B]/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <button onClick={() => { onClose(); onNavigate('recyklube'); }} className="text-[#B84A28] font-medium hover:underline">
              RecykLube Circular Hub
            </button>
            <span>•</span>
            <button onClick={() => { onClose(); onNavigate('about'); }} className="text-[#1D1D1B] hover:underline">
              About Rosefield
            </button>
          </div>
          <span className="font-mono text-[#1D1D1B]/40 text-[11px]">ESC to close</span>
        </div>

      </div>
    </div>
  );
};

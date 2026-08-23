import React, { useState } from 'react';
import { EventItem } from '../types';
import { 
  X, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (area?: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  isOpen,
  onClose,
  onOpenEnquiry
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'register'>('details');
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    interestType: 'Delegate Pass'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !event) return null;

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setActiveTab('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-[#1D1D1B]/15 overflow-hidden max-h-[92vh] flex flex-col text-[#1D1D1B]">
        
        {/* Header */}
        <div className="bg-[#1D1D1B] text-[#E8E6E1] p-6 sm:p-8 flex items-start justify-between border-b border-[#2C2C2A]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-sans">
              <span className="px-2.5 py-0.5 rounded-full bg-[#262624] text-[#E8E6E1] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#3A3A36]">
                {event.type}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1D1D1B] text-[#E8E6E1] text-[10px] font-mono border border-[#3A3A36]">
                {event.status}
              </span>
              {event.delegatesCount && (
                <span className="text-xs text-[#E8E6E1]/50 font-mono">
                  {event.delegatesCount}
                </span>
              )}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-snug tracking-tight">
              {event.title}
            </h3>
            <p className="text-xs text-[#B84A28] font-sans font-medium mt-1">
              Theme: {event.theme}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E8E6E1] transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Date / Location Bar */}
        <div className="bg-[#F9F8F6] px-6 py-3 border-b border-[#1D1D1B]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-sans font-medium text-[#1D1D1B]/70">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#B84A28]" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#A67C52]" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-[#1D1D1B]/50">
            <Users className="w-4 h-4 text-[#1D1D1B]/40" />
            <span>Curated by Rosefield Energy Tech</span>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 pt-3 flex gap-6 border-b border-[#1D1D1B]/10 bg-white font-sans">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'details'
                ? 'border-[#1D1D1B] text-[#1D1D1B]'
                : 'border-transparent text-[#1D1D1B]/40 hover:text-[#1D1D1B]'
            }`}
          >
            Event Brief & Speakers
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`pb-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer border-b-2 ${
              activeTab === 'register'
                ? 'border-[#1D1D1B] text-[#1D1D1B]'
                : 'border-transparent text-[#1D1D1B]/40 hover:text-[#1D1D1B]'
            }`}
          >
            Register Delegate / Sponsor
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-[#F9F8F6] font-sans">
          {activeTab === 'details' && (
            <>
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-[#1D1D1B]/60 uppercase tracking-[0.2em]">
                  About This Industry Platform
                </h4>
                <p className="text-sm text-[#1D1D1B]/70 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Key Themes */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-[#1D1D1B]/60 uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B84A28]" />
                  <span>Strategic Agenda Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {event.keyThemes.map((theme, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white border border-[#1D1D1B]/10 text-xs text-[#1D1D1B] flex items-start gap-2.5">
                      <span className="text-[#B84A28] font-bold">✓</span>
                      <span>{theme}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers Roster */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-[#1D1D1B]/60 uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#A67C52]" />
                  <span>Confirmed Keynote Speakers & Panellists</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.speakers.map((spk, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white border border-[#1D1D1B]/10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1D1D1B] text-[#F9F8F6] font-serif font-medium text-sm flex items-center justify-center shrink-0 border border-[#1D1D1B]/20">
                        {spk.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-xs text-[#1D1D1B] font-serif">{spk.name}</div>
                        <div className="text-[11px] text-[#1D1D1B]/60">{spk.designation}</div>
                        <div className="text-[10px] text-[#B84A28] font-medium">{spk.organization}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners */}
              {event.partners && event.partners.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#1D1D1B]/10">
                  <h4 className="text-[10px] font-bold text-[#1D1D1B]/50 uppercase tracking-[0.2em]">
                    Featured Ecosystem Partners & Media
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.partners.map((partner, idx) => (
                      <span key={idx} className="px-3.5 py-1 rounded-full bg-white border border-[#1D1D1B]/10 text-xs font-medium text-[#1D1D1B]/70">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Banner */}
              <div className="p-6 rounded-3xl bg-[#1D1D1B] text-[#E8E6E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#2C2C2A]">
                <div>
                  <div className="font-serif text-lg font-medium text-white tracking-tight">Ready to participate?</div>
                  <div className="text-xs text-[#E8E6E1]/70">Reserve executive passes or inquire about exhibition booths.</div>
                </div>
                <button
                  onClick={() => setActiveTab('register')}
                  className="px-6 py-2.5 rounded-full bg-[#F9F8F6] hover:bg-white text-[#1D1D1B] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1D1D1B]" />
                </button>
              </div>
            </>
          )}

          {activeTab === 'register' && (
            <div>
              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#1D1D1B]/15 text-[#B84A28] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1D1D1B] font-medium tracking-tight">
                    Registration Request Received
                  </h4>
                  <p className="text-sm text-[#1D1D1B]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#1D1D1B]">{regForm.name}</span>. Our summits secretariat has received your registration request for <span className="font-semibold text-[#B84A28]">{event.title}</span>.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-[#1D1D1B]/10 max-w-xs mx-auto text-xs text-[#1D1D1B]/70">
                    <span>Our event coordinator will contact you with invoice details and delegate portal access.</span>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-2 px-6 py-2.5 rounded-full bg-[#1D1D1B] text-[#F9F8F6] text-xs font-sans font-bold uppercase tracking-[0.15em] hover:bg-black transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                        Delegate Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Singhania"
                        value={regForm.name}
                        onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anand@oilchem.com"
                        value={regForm.email}
                        onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. OilChem International"
                        value={regForm.company}
                        onChange={(e) => setRegForm({ ...regForm, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                        Designation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Managing Director"
                        value={regForm.designation}
                        onChange={(e) => setRegForm({ ...regForm, designation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 11223"
                        value={regForm.phone}
                        onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                        Participation Type *
                      </label>
                      <select
                        value={regForm.interestType}
                        onChange={(e) => setRegForm({ ...regForm, interestType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                      >
                        <option value="Delegate Pass">Executive Delegate Pass</option>
                        <option value="Sponsorship Tier">Corporate Sponsorship (Gold/Platinum)</option>
                        <option value="Exhibition Booth">Exhibition Booth & Technology Showcase</option>
                        <option value="Speaker Enquiry">Speaker / Panellist Nomination</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1D1D1B]/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="text-xs text-[#1D1D1B]/60 hover:text-[#1D1D1B] cursor-pointer"
                    >
                      ← Back to Brief
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] font-sans font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Submit Registration</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E8E6E1]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

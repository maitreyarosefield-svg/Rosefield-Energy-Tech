import React, { useState } from 'react';
import { B2BEnquiryForm } from '../types';
import { FAQ_LIST } from '../data/mockData';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  Clock, 
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ContactView: React.FC<{ initialInterest?: string }> = ({ initialInterest = 'Strategic & Technical Consultancy' }) => {
  const [formData, setFormData] = useState<B2BEnquiryForm>({
    name: '',
    designation: '',
    company: '',
    industry: 'Lubricants & Specialty Fluids',
    email: '',
    phone: '',
    country: 'India',
    areaOfInterest: initialInterest || 'Strategic & Technical Consultancy',
    message: '',
    newsletterOptIn: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = 'RET-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 850);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>Corporate Engagement & B2B Inquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Let's Connect
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Whether you are looking for strategic advice, technical expertise, market intelligence, industry connections, sustainability support, or business opportunities, connect with Rosefield Energy Tech.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: B2B Lead Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D5] shadow-xl space-y-6">
            
            <div className="space-y-1 pb-4 border-b border-[#F0EBE3]">
              <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
                Direct Engagement Portal
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Submit Business Requirement
              </h2>
              <p className="text-xs text-stone-500">
                Please complete the business details below. Your request will be routed directly to the relevant sector lead.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#242424]">
                  Enquiry Successfully Transmitted
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#242424]">{formData.name}</span>. Your requirement for <span className="font-semibold text-[#E85D36]">{formData.areaOfInterest}</span> has been logged.
                </p>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] max-w-xs mx-auto text-xs text-stone-600">
                  <span className="text-stone-400 block mb-1">Tracking Reference ID:</span>
                  <span className="font-mono text-sm font-bold text-[#242424]">{referenceId}</span>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#242424] text-white text-xs font-semibold hover:bg-black"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Designation / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Head of Procurement / CXO"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Lubricants Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Industry Sector *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    >
                      <option value="Lubricants & Specialty Fluids">Lubricants & Specialty Fluids</option>
                      <option value="Base Oil Production & Trade">Base Oil Production & Trade</option>
                      <option value="Fuels, Refineries & Energy">Fuels, Refineries & Energy</option>
                      <option value="Automotive & Industrial OEM">Automotive & Industrial OEM</option>
                      <option value="Used Oil Collection & Re-refining">Used Oil Collection & Re-refining</option>
                      <option value="EPR Obligated Entity">EPR Obligated Entity / Importer</option>
                      <option value="Investment / Private Equity">Investment / Private Equity</option>
                      <option value="Government & Regulatory">Government & Regulatory</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="India / UAE / Singapore..."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                    />
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058] font-semibold"
                  >
                    <option value="Strategic & Technical Consultancy">Strategic & Technical Consultancy (Market Entry, Value Engineering, M&A)</option>
                    <option value="Circular Economy & EPR">Circular Economy & EPR Advisory (Target Audits, CPCB Compliance)</option>
                    <option value="RecykLube">RecykLube Circular Used Oil Ecosystem</option>
                    <option value="Events & Conferences">Events & Conferences (Registration, Sponsorship, Speaker)</option>
                    <option value="Market Intelligence & Reports">Market Intelligence & Publications (Custom Research, Reports)</option>
                    <option value="Partnerships & Business Development">Partnerships & Strategic Business Development</option>
                    <option value="Other">Other Requirement</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5">
                    Brief Overview of Scope / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your objectives, current challenges, or specific timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-sm text-[#242424] focus:bg-white focus:outline-hidden focus:border-[#F88058]"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="contact-optin"
                    checked={formData.newsletterOptIn}
                    onChange={(e) => setFormData({ ...formData, newsletterOptIn: e.target.checked })}
                    className="rounded border-[#D8D0C4] text-[#F88058] focus:ring-[#F88058]"
                  />
                  <label htmlFor="contact-optin" className="text-xs text-stone-600">
                    Subscribe to Rosefield Energy Tech’s quarterly executive dispatches.
                  </label>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-[#059669]" />
                    <span>Non-disclosure & confidentiality assured</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-xl bg-[#242424] hover:bg-black text-white font-semibold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Business Enquiry</span>
                        <Send className="w-3.5 h-3.5 text-[#F88058]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Office Locations & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Corporate Offices Card */}
            <div className="p-8 rounded-3xl bg-[#242424] text-white border border-[#3D3D3D] shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#F8D8A0] uppercase tracking-wider block">
                  Locations & Presence
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Corporate Offices
                </h3>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-stone-300">
                {/* Mumbai */}
                <div className="p-4 rounded-xl bg-[#2C2C2C] border border-[#404040] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold font-serif text-base">
                    <MapPin className="w-4 h-4 text-[#F88058]" />
                    <span>Mumbai Corporate Office</span>
                  </div>
                  <p className="text-stone-400 leading-relaxed">
                    Rosefield Energy Tech Pvt. Ltd.<br />
                    BKC Financial District / Andheri East Commercial Hub,<br />
                    Mumbai, Maharashtra — 400051, India
                  </p>
                </div>

                {/* New Delhi */}
                <div className="p-4 rounded-xl bg-[#2C2C2C] border border-[#404040] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold font-serif text-base">
                    <MapPin className="w-4 h-4 text-[#F8B848]" />
                    <span>New Delhi Liaison & Policy Office</span>
                  </div>
                  <p className="text-stone-400 leading-relaxed">
                    Rosefield Energy Tech Secretariat<br />
                    Barakhamba Road / Connaught Place Sector,<br />
                    New Delhi — 110001, India
                  </p>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-[#383838] space-y-2.5 text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F88058]" />
                  <a href="mailto:contact@rosefieldenergy.com" className="text-stone-200 hover:text-white font-medium">
                    contact@rosefieldenergy.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#F8B848]" />
                  <span className="text-stone-200 font-medium">
                    +91 22 4890 1200 / +91 98200 12345
                  </span>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <Clock className="w-4 h-4 text-stone-500" />
                  <span>Business Hours: Mon – Fri, 09:30 – 18:30 IST</span>
                </div>
              </div>

            </div>

            {/* Credibility Note */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-2 text-xs text-stone-600">
              <span className="font-bold text-[#242424] block uppercase tracking-wider text-[11px]">
                Advisory Protocol
              </span>
              <p>
                For M&A due diligence, competitive benchmarking, and proprietary formulation rationalisation, Rosefield executes standard bilateral Non-Disclosure Agreements (NDAs) prior to formal technical scoping.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242424] font-semibold">
            Frequently Asked Engagement Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-[#EAE2D5] shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-base sm:text-lg text-[#242424] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#E85D36] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#F0EBE3] pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

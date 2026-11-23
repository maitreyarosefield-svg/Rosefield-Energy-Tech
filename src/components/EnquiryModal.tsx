import React, { useState, useEffect } from 'react';
import { B2BEnquiryForm } from '../types';
import { SERVICE_VERTICALS } from '../data/mockData';
import { X, Send, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArea?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialArea = 'EPR Fulfillment'
}) => {
  const [formData, setFormData] = useState<B2BEnquiryForm>({
    name: '',
    designation: '',
    company: '',
    industry: 'Lubricants & Specialty Fluids',
    email: '',
    phone: '',
    country: 'India',
    areaOfInterest: initialArea || 'EPR Fulfillment',
    message: '',
    newsletterOptIn: true
  });

  useEffect(() => {
    if (isOpen && initialArea) {
      setFormData(prev => ({ ...prev, areaOfInterest: initialArea }));
    }
  }, [isOpen, initialArea]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise lead routing
    setTimeout(() => {
      const generatedRef = 'RET-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-[#1D1D1B]/15 overflow-hidden max-h-[92vh] flex flex-col text-[#1D1D1B]">
        
        {/* Header */}
        <div className="bg-[#1D1D1B] text-[#E8E6E1] p-6 flex items-start justify-between relative overflow-hidden border-b border-[#2C2C2A]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#E8E6E1] mb-1">
              <Building2 className="w-4 h-4 text-[#B84A28]" />
              <span>B2B Corporate & Consulting Enquiry</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-white tracking-tight">
              Connect With Rosefield Energy Tech
            </h3>
            <p className="text-xs text-[#E8E6E1]/70 mt-1 max-w-lg font-sans">
              Engage with our domain consultants for strategic advisory, RecykLube circular frameworks, events sponsorship, or market intelligence studies.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E8E6E1] transition-colors cursor-pointer relative z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#F9F8F6]">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4 font-sans">
              <div className="w-16 h-16 rounded-full bg-white border border-[#1D1D1B]/15 text-[#B84A28] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8 text-[#B84A28]" />
              </div>
              <h4 className="font-serif text-2xl text-[#1D1D1B] font-medium tracking-tight">
                Enquiry Registered Successfully
              </h4>
              <p className="text-sm text-[#1D1D1B]/70 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#1D1D1B]">{formData.name}</span>. Your enquiry regarding <span className="font-semibold text-[#B84A28]">{formData.areaOfInterest}</span> has been routed to our senior sector lead.
              </p>
              
              <div className="p-4 rounded-2xl bg-white border border-[#1D1D1B]/10 max-w-xs mx-auto text-xs text-[#1D1D1B]/70">
                <span className="text-[#1D1D1B]/50 block mb-1 text-[10px] uppercase tracking-wider font-bold">Lead Reference Number:</span>
                <span className="font-mono text-sm font-bold text-[#1D1D1B]">{referenceId}</span>
              </div>

              <p className="text-xs text-[#1D1D1B]/60">
                Our team typically reviews enterprise requirements and responds within 1 business day.
              </p>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-sans font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Designation / Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Head of Procurement / CXO"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Organisation / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Lubricants Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
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
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="India / UAE / Singapore..."
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>
              </div>

              {/* Area of Interest Selection */}
              <div>
                <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                  Primary Area of Interest *
                </label>
                <select
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B] font-medium"
                >
                  {SERVICE_VERTICALS.map((vert) => (
                    <option key={vert.id} value={vert.title}>
                      {vert.title}
                    </option>
                  ))}
                  <option value="RecykLube">RecykLube Circular Used Oil Ecosystem</option>
                  <option value="Partnerships & Business Development">Strategic Partnerships & Business Development</option>
                  <option value="Other">Other Strategic Requirement</option>
                </select>
              </div>

              {/* Message / Scope */}
              <div>
                <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1.5">
                  Brief Overview of Requirements / Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your objectives, timelines, or specific technical/commercial queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm text-[#1D1D1B] focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                />
              </div>

              {/* Consent */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="optin"
                  checked={formData.newsletterOptIn}
                  onChange={(e) => setFormData({ ...formData, newsletterOptIn: e.target.checked })}
                  className="rounded border-[#1D1D1B]/20 text-[#1D1D1B] focus:ring-[#1D1D1B]"
                />
                <label htmlFor="optin" className="text-xs text-[#1D1D1B]/70">
                  Receive quarterly Rosefield Energy Tech market intelligence summaries and regulatory updates.
                </label>
              </div>

              {/* Submit Action */}
              <div className="pt-4 border-t border-[#1D1D1B]/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#1D1D1B]/50">
                  <ShieldCheck className="w-4 h-4 text-[#B84A28]" />
                  <span>Strict NDA & confidentiality standards maintained</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Submit Business Enquiry</span>
                      <Send className="w-3.5 h-3.5 text-[#E8E6E1]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

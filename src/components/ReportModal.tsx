import React, { useState } from 'react';
import { InsightItem } from '../types';
import { 
  X, 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  Building2, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ReportModalProps {
  report: InsightItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({
  report,
  isOpen,
  onClose
}) => {
  const [downloadStep, setDownloadStep] = useState<'preview' | 'form' | 'success'>('preview');
  const [leadForm, setLeadForm] = useState({
    name: '',
    workEmail: '',
    company: '',
    designation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !report) return null;

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDownloadStep('success');
    }, 800);
  };

  const handleClose = () => {
    setDownloadStep('preview');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-[#1D1D1B]/15 overflow-hidden max-h-[92vh] flex flex-col text-[#1D1D1B]">
        
        {/* Top Header */}
        <div className="bg-[#1D1D1B] text-[#E8E6E1] p-6 sm:p-8 flex items-start justify-between border-b border-[#2C2C2A]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-sans">
              <span className="px-2.5 py-0.5 rounded-full bg-[#262624] text-[#E8E6E1] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#3A3A36]">
                {report.format}
              </span>
              <span className="text-xs text-[#E8E6E1]/50 font-mono">
                {report.pagesCount ? `${report.pagesCount} Pages` : report.readTime}
              </span>
              <span className="text-[#E8E6E1]/30">•</span>
              <span className="text-xs text-[#E8E6E1]/70">{report.category}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-snug tracking-tight">
              {report.title}
            </h3>
            <p className="text-xs text-[#E8E6E1]/70 mt-1 flex items-center gap-2 font-sans">
              <span>Authored by: {report.author.name} ({report.author.role})</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#B84A28]" /> {report.date}</span>
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-[#F9F8F6] font-sans">
          {downloadStep === 'preview' && (
            <>
              {/* Executive Summary */}
              <div className="p-5 rounded-2xl bg-white border border-[#1D1D1B]/10 space-y-2">
                <h4 className="text-[10px] font-bold text-[#1D1D1B]/60 uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#B84A28]" />
                  <span>Executive Abstract</span>
                </h4>
                <p className="text-sm text-[#1D1D1B]/70 leading-relaxed">
                  {report.summary}
                </p>
              </div>

              {/* Key Takeaways */}
              {report.keyTakeaways && report.keyTakeaways.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-[#1D1D1B]/60 uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
                    <span>Strategic Takeaways & Data Points</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {report.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white border border-[#1D1D1B]/10 flex items-start gap-3 text-sm text-[#1D1D1B]/80">
                        <div className="w-5 h-5 rounded-full bg-[#F2EFE9] border border-[#1D1D1B]/10 text-[#B84A28] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Table of Contents */}
              {report.tableOfContents && (
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-[#1D1D1B]/60 uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#B84A28]" />
                    <span>Table of Contents & Structure</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1D1D1B]/70">
                    {report.tableOfContents.map((section, idx) => (
                      <li key={idx} className="p-2.5 rounded-xl bg-white border border-[#1D1D1B]/10 flex items-center gap-2">
                        <span className="font-mono text-[#B84A28] font-semibold">{`0${idx + 1}.`}</span>
                        <span className="truncate">{section}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA to Download or Full Inquiry */}
              <div className="p-6 rounded-3xl bg-[#1D1D1B] text-[#E8E6E1] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2C2C2A]">
                <div>
                  <h5 className="font-serif text-lg font-medium text-white tracking-tight">
                    Access Complete Market Report
                  </h5>
                  <p className="text-xs text-[#E8E6E1]/70">
                    Available in high-resolution PDF with appendix data tables & forecasting charts.
                  </p>
                </div>
                <button
                  onClick={() => setDownloadStep('form')}
                  className="px-6 py-2.5 rounded-full bg-[#F9F8F6] hover:bg-white text-[#1D1D1B] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Full PDF</span>
                </button>
              </div>
            </>
          )}

          {downloadStep === 'form' && (
            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div className="border-b border-[#1D1D1B]/10 pb-3">
                <h4 className="font-serif text-xl font-medium text-[#1D1D1B] tracking-tight">
                  Complete Business Details to Receive Report
                </h4>
                <p className="text-xs text-[#1D1D1B]/60 mt-0.5">
                  As part of Rosefield’s B2B distribution protocol, please confirm your corporate identity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Nair"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
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
                    placeholder="name@organization.com"
                    value={leadForm.workEmail}
                    onChange={(e) => setLeadForm({ ...leadForm, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                    Company / Organisation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gulf Lubricants Ltd"
                    value={leadForm.company}
                    onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                    Designation / Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VP Commercial Strategy"
                    value={leadForm.designation}
                    onChange={(e) => setLeadForm({ ...leadForm, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1D1D1B]/15 text-sm focus:bg-white focus:outline-hidden focus:border-[#1D1D1B]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#1D1D1B]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDownloadStep('preview')}
                  className="text-xs text-[#1D1D1B]/60 hover:text-[#1D1D1B] cursor-pointer"
                >
                  ← Back to Abstract
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  {isSubmitting ? 'Generating Access...' : 'Submit & Receive Report'}
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8E6E1]" />
                </button>
              </div>
            </form>
          )}

          {downloadStep === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-white border border-[#1D1D1B]/15 text-[#B84A28] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-[#1D1D1B] font-medium tracking-tight">
                Report Dispatched to Your Inbox
              </h4>
              <p className="text-sm text-[#1D1D1B]/70 max-w-md mx-auto leading-relaxed">
                The full PDF of <span className="font-semibold text-[#1D1D1B]">{report.title}</span> has been transmitted to <span className="font-semibold text-[#B84A28]">{leadForm.workEmail}</span>.
              </p>
              
              <div className="p-4 rounded-2xl bg-white border border-[#1D1D1B]/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="font-bold text-[#1D1D1B] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B84A28]" />
                  <span>Next Step for Strategic Due Diligence</span>
                </div>
                <p className="text-[#1D1D1B]/70">
                  Would you like to schedule a 30-minute debrief with our lead analyst for customized data breakdown?
                </p>
              </div>

              <button
                onClick={handleClose}
                className="mt-2 px-6 py-2.5 rounded-full bg-[#1D1D1B] text-[#F9F8F6] font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-black transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

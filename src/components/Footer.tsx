import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  ShieldCheck, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenEnquiry: (area?: string) => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRouteChange,
  onOpenEnquiry,
  onOpenCalculator
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleNavigate = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1D1B] text-[#E8E6E1] border-t border-[#2C2C2A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Newsletter & Executive Briefing Bar */}
        <div className="bg-[#242422] border border-[#3A3A36] rounded-2xl p-6 sm:p-8 mb-16 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1B] text-[#E8E6E1] text-[10px] font-sans uppercase tracking-[0.25em] font-medium mb-2 border border-[#3A3A36]">
              <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
              <span>Rosefield Intelligence Dispatch</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight">
              Stay ahead of lubricant markets & EPR policy shifts
            </h3>
            <p className="text-[#E8E6E1]/70 text-sm mt-1">
              Receive quarterly executive summaries, base oil price trend alerts, and regulatory analyses directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            {isSubscribed ? (
              <div className="flex items-center gap-2 px-4 py-3 bg-[#243324] border border-[#3E5C3E] text-[#C4E8C4] rounded-xl text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you. You have been subscribed to our executive dispatch.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  className="w-full px-4 py-3 rounded-xl bg-[#171716] border border-[#3E3E3A] text-white text-sm focus:outline-hidden focus:border-[#E8E6E1]/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#F9F8F6] hover:bg-white text-[#1D1D1B] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2C2C2A]">
          
          {/* Column 1: Rosefield Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" size="lg" />
            <p className="text-sm text-[#E8E6E1]/70 leading-relaxed max-w-sm pt-2">
              Rosefield Energy Tech Pvt. Ltd. is a specialised consulting, knowledge, and business solutions organisation connecting enterprise leaders, technology providers, and regulators across the lubricants, fuels, energy, and circular economy ecosystem.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#E8E6E1]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B84A28] shrink-0 mt-0.5" />
                <span>Corporate Office: Mumbai & New Delhi, India • Regional Representation in APAC</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A67C52] shrink-0" />
                <a href="mailto:contact@rosefieldenergy.com" className="hover:text-white underline underline-offset-4 transition-colors">
                  contact@rosefieldenergy.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B84A28] shrink-0" />
                <span>+91 22 4890 1200 / +91 98200 12345</span>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-[10px] text-[#E8E6E1] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                LI
              </a>
              <button 
                onClick={() => onOpenEnquiry('Partnerships')} 
                className="text-xs px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white text-[#E8E6E1] transition-colors inline-flex items-center gap-1.5 cursor-pointer uppercase text-[10px] tracking-[0.15em]"
              >
                <span>Strategic Partnerships</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans font-bold text-[#E8E6E1]/60 uppercase tracking-[0.25em]">Company</h4>
            <ul className="space-y-2 text-sm text-[#E8E6E1]/80">
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Our Approach (5-Step)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Why Rosefield?
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('sustainability')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Sustainability Commitment
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-sans font-bold text-[#E8E6E1]/60 uppercase tracking-[0.25em]">Business Solutions</h4>
            <ul className="space-y-2 text-sm text-[#E8E6E1]/80">
              <li>
                <button onClick={() => handleNavigate('events')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left flex items-center justify-between w-full group">
                  <span>Events & Knowledge Platforms</span>
                  <span className="text-[10px] text-[#E8E6E1]/40 font-mono">[01]</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left flex items-center justify-between w-full group">
                  <span>Strategic & Technical Consultancy</span>
                  <span className="text-[10px] text-[#E8E6E1]/40 font-mono">[02]</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left flex items-center justify-between w-full group">
                  <span>Circular Economy & EPR Advisory</span>
                  <span className="text-[10px] text-[#E8E6E1]/40 font-mono">[03]</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('news')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left flex items-center justify-between w-full group">
                  <span>Industry News & Briefings</span>
                  <span className="text-[10px] text-[#E8E6E1]/40 font-mono">[04]</span>
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => handleNavigate('recyklube')} 
                  className="px-3 py-1 rounded-full bg-[#262624] border border-white/20 text-[#E8E6E1] hover:text-white hover:border-white transition-colors text-xs font-sans uppercase tracking-[0.1em] inline-flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B84A28]"></span>
                  <span>RecykLube Circular Ecosystem</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Engagement (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-sans font-bold text-[#E8E6E1]/60 uppercase tracking-[0.25em]">Editorial & Archive</h4>
            <ul className="space-y-2 text-sm text-[#E8E6E1]/80">
              <li>
                <button onClick={() => handleNavigate('events')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Leadership Summits & Conclaves
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('blogs')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Technical & Strategy Blogs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('gallery')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Summits & Field Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('news')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Regulatory & Industry News
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-[#E8E6E1]/90">
                  <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
                  <span>Interactive EPR Estimator Tool</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiry('Consultancy')} className="hover:text-white hover:underline underline-offset-4 transition-colors text-left">
                  Request Custom Feasibility Study
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full py-2.5 px-3 rounded-lg bg-[#2A2A28] hover:bg-[#343430] border border-[#3E3E3A] text-white text-xs font-sans uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Business Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8E6E1]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E8E6E1]/50">
          <div className="flex items-center gap-2 font-sans text-[11px]">
            <span>© {new Date().getFullYear()} Rosefield Energy Tech Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#E8E6E1]/60 font-sans text-[11px]">
            <span className="text-[#E8E6E1]/40 uppercase tracking-widest text-[10px]">B2B Knowledge Platform</span>
            <span>•</span>
            <button onClick={() => handleNavigate('contact')} className="hover:text-white underline-offset-4 hover:underline transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNavigate('contact')} className="hover:text-white underline-offset-4 hover:underline transition-colors">
              Terms of Engagement
            </button>
            <span>•</span>
            <button onClick={() => handleNavigate('contact')} className="hover:text-white underline-offset-4 hover:underline transition-colors">
              Regulatory Disclaimers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

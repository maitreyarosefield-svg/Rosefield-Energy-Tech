import React, { useState, useEffect } from 'react';
import { PageRoute, ServiceVerticalId } from '../types';
import { Logo } from './Logo';
import { SERVICE_VERTICALS } from '../data/mockData';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Sparkles,
  Compass,
  Users,
  RefreshCw,
  BarChart3
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenSearch: () => void;
  onOpenEnquiry: (prefilledArea?: string) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenSearch,
  onOpenEnquiry,
  onOpenCalculator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getVerticalIcon = (id: ServiceVerticalId) => {
    switch (id) {
      case 'events-platforms': return <Users className="w-4 h-4 text-[#F88058]" />;
      case 'strategic-consultancy': return <Compass className="w-4 h-4 text-[#F8B848]" />;
      case 'circular-epr': return <RefreshCw className="w-4 h-4 text-[#E85D36]" />;
      case 'market-intelligence': return <BarChart3 className="w-4 h-4 text-[#F8B848]" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Corporate Strip */}
      <div className="bg-[#1D1D1B] text-[#E8E6E1] text-[11px] py-2 px-4 sm:px-8 border-b border-[#2C2C2A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-2 text-[#E8E6E1] text-[10px] uppercase tracking-[0.25em] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B84A28] animate-pulse"></span>
              Knowledge • Strategy • Connectivity • Sustainability
            </span>
            <span className="text-[#E8E6E1]/60 text-[11px] hidden md:inline">
              B2B Advisory for Lubricants, Fuels & Circular Economy
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto text-[11px]">
            <a 
              href="mailto:contact@rosefieldenergy.com" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors uppercase text-[10px] tracking-[0.15em]"
            >
              <Mail className="w-3.5 h-3.5 text-[#B84A28]" />
              <span className="hidden md:inline">contact@rosefieldenergy.com</span>
              <span className="md:hidden">Contact</span>
            </a>
            <span className="text-[#4A4A46]">|</span>
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 text-[#E8E6E1] hover:text-white font-medium transition-colors cursor-pointer text-[10px] uppercase tracking-[0.15em]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
              <span>EPR Estimator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full bg-[#F9F8F6]/95 backdrop-blur-md border-b transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm border-[#1D1D1B]/15' : 'border-[#1D1D1B]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-22 sm:h-24 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden group cursor-pointer py-1"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13.5px] font-sans font-medium text-[#1D1D1B]/80">
            
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer ${
                currentRoute === 'home' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer ${
                currentRoute === 'about' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              About Us
            </button>

            {/* What We Do Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 rounded-sm inline-flex items-center gap-1 transition-colors cursor-pointer ${
                  currentRoute === 'services' 
                    ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                    : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#1D1D1B]' : 'text-[#1D1D1B]/40'}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-96 bg-[#F9F8F6] rounded-xl shadow-xl border border-[#1D1D1B]/15 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-2 border-b border-[#1D1D1B]/10 mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold text-[#1D1D1B]/60 uppercase tracking-[0.25em]">Four Business Verticals</span>
                    <button 
                      onClick={() => handleNavClick('services')} 
                      className="text-xs text-[#1D1D1B] font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-1">
                    {SERVICE_VERTICALS.map((vert) => (
                      <button
                        key={vert.id}
                        onClick={() => handleNavClick('services')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#E8E6E1]/70 transition-colors flex items-start gap-3 group"
                      >
                        <div className="p-1.5 rounded-md bg-[#E8E6E1] border border-[#1D1D1B]/10 shrink-0 mt-0.5">
                          {getVerticalIcon(vert.id)}
                        </div>
                        <div>
                          <div className="font-serif font-semibold text-sm text-[#1D1D1B] group-hover:text-[#B84A28] transition-colors flex items-center gap-2">
                            <span>{vert.title}</span>
                            <span className="text-[10px] font-mono text-[#1D1D1B]/40">[{vert.number}]</span>
                          </div>
                          <p className="text-xs text-[#1D1D1B]/60 line-clamp-1 mt-0.5">{vert.tagline}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RecykLube Spotlight Link */}
            <button
              onClick={() => handleNavClick('recyklube')}
              title="RecykLube Circular Oil Ecosystem"
              aria-label="RecykLube"
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center group ${
                currentRoute === 'recyklube'
                  ? 'bg-white border border-[#B84A28]/50 shadow-xs ring-1 ring-[#B84A28]/20'
                  : 'bg-white/70 border border-[#1D1D1B]/12 hover:bg-white hover:border-[#1D1D1B]/25 shadow-2xs'
              }`}
            >
              <img
                src="/recyklube-logo.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = 'https://i.ibb.co/35YSrhmB/R3-T-Flyer-2.png';
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
                alt="RecykLube"
                referrerPolicy="no-referrer"
                className="h-6 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </button>

            <button
              onClick={() => handleNavClick('events')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                currentRoute === 'events' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              Events
            </button>

            <button
              onClick={() => handleNavClick('blogs')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                currentRoute === 'blogs' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              Blogs
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                currentRoute === 'gallery' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavClick('news')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                currentRoute === 'news' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              News
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-sm transition-colors cursor-pointer ${
                currentRoute === 'contact' 
                  ? 'text-[#1D1D1B] font-semibold bg-[#E8E6E1]/60' 
                  : 'hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/40'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg text-[#1D1D1B]/70 hover:text-[#1D1D1B] hover:bg-[#E8E6E1]/60 transition-colors cursor-pointer border border-[#1D1D1B]/15 flex items-center gap-2"
              title="Search news, blogs, gallery & services (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#1D1D1B]/80" />
              <span className="hidden xl:inline text-[10px] text-[#1D1D1B]/60 font-mono bg-white px-1.5 py-0.5 rounded border border-[#1D1D1B]/10">
                ⌘K
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#1D1D1B] hover:bg-[#E8E6E1] transition-colors border border-[#1D1D1B]/15"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F8F6] border-b border-[#1D1D1B]/15 shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#1D1D1B]/10">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'home' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'about' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'services' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('recyklube')}
              aria-label="RecykLube"
              className={`p-3 rounded-lg flex items-center justify-start transition-colors ${
                currentRoute === 'recyklube'
                  ? 'bg-white border border-[#B84A28]/50 shadow-xs'
                  : 'bg-white/80 border border-[#1D1D1B]/15'
              }`}
            >
              <img
                src="/recyklube-logo.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = 'https://i.ibb.co/35YSrhmB/R3-T-Flyer-2.png';
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
                alt="RecykLube"
                referrerPolicy="no-referrer"
                className="h-6 w-auto object-contain"
              />
            </button>
            <button
              onClick={() => handleNavClick('events')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'events' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              Events & Summits
            </button>
            <button
              onClick={() => handleNavClick('blogs')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'blogs' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              Blogs
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'gallery' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('news')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'news' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              News
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`p-3 rounded-lg text-left font-medium text-sm ${currentRoute === 'contact' ? 'bg-[#E8E6E1] text-[#1D1D1B] font-bold' : 'text-[#1D1D1B]/80'}`}
            >
              Contact
            </button>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#E8E6E1] border border-[#1D1D1B]/15 text-[#1D1D1B] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#A67C52]" />
              <span>Launch RecykLube EPR Estimator</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#1D1D1B] text-[#F9F8F6] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Submit B2B Business Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#E8E6E1]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

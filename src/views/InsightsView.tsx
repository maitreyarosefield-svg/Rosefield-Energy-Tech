import React, { useState, useMemo } from 'react';
import { PageRoute, InsightCategory, InsightFormat } from '../types';
import { INSIGHTS_DATA } from '../data/mockData';
import { 
  Search, 
  Filter, 
  FileText, 
  Download, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2,
  Mail,
  ShieldCheck
} from 'lucide-react';

interface InsightsViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenReport: (reportId: string) => void;
  onOpenEnquiry: (area?: string) => void;
}

const CATEGORIES: InsightCategory[] = [
  'All',
  'Lubricants',
  'Base Oils',
  'Fuels & Energy',
  'Circular Economy',
  'Used Oil & EPR',
  'Market Intelligence',
  'Regulatory Updates'
];

const FORMATS: ('All' | InsightFormat)[] = [
  'All',
  'Report',
  'Intelligence Brief',
  'Article',
  'Case Study',
  'Regulatory Flash'
];

export const InsightsView: React.FC<InsightsViewProps> = ({
  onRouteChange,
  onOpenReport,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory>('All');
  const [selectedFormat, setSelectedFormat] = useState<'All' | InsightFormat>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredInsights = useMemo(() => {
    return INSIGHTS_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesFmt = selectedFormat === 'All' || item.format === selectedFormat;
      const matchesSearch = 
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesFmt && matchesSearch;
    });
  }, [selectedCategory, selectedFormat, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => setNewsletterEmail(''), 3500);
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Top Banner */}
      <section className="bg-[#242424] text-white py-16 sm:py-20 border-b border-[#3A3A3A] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F88058]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#383838] text-[#F8D8A0] text-xs font-bold uppercase tracking-wider">
            <span>Knowledge & Market Intelligence Hub</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
            Industry Publications, Research & Regulatory Bulletins
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Proprietary market intelligence, base oil price trend analyses, EPR statutory forecasts, and technical formulation whitepapers for enterprise decision-makers.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Search input & category pills */}
        <div className="p-6 rounded-2xl bg-white border border-[#EAE2D5] shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by topic, keyword, regulation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C4] text-xs sm:text-sm text-[#242424] focus:outline-hidden focus:border-[#F88058]"
              />
            </div>

            {/* Format Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Format:
              </span>
              {FORMATS.map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                    selectedFormat === fmt
                      ? 'bg-[#242424] text-white'
                      : 'bg-[#FAF8F5] text-stone-600 hover:bg-[#F2ECE2]'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          {/* Category Pills */}
          <div className="pt-2 border-t border-[#F0EBE3] flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#E85D36] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-stone-600 hover:bg-[#F2ECE2] border border-[#EAE2D5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
          <span>Showing {filteredInsights.length} intelligence briefings & publications</span>
          {(selectedCategory !== 'All' || selectedFormat !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedFormat('All');
                setSearchQuery('');
              }}
              className="text-[#E85D36] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white border border-[#EAE2D5] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E1] text-[#9E4A1F] text-[11px] font-bold uppercase tracking-wider">
                    {item.format}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    {item.pagesCount ? `${item.pagesCount} Pages` : item.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#242424] group-hover:text-[#E85D36] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-2 text-[11px] text-stone-400 flex items-center justify-between">
                  <span>Author: {item.author.name}</span>
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500">
                  {item.category}
                </span>

                <button
                  onClick={() => onOpenReport(item.id)}
                  className="px-4 py-2 rounded-lg bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F88058]" />
                  <span>{item.downloadable ? 'View Abstract & PDF' : 'Read Full Note'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Custom Commissioned Research Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#EAE2D5] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-[#E85D36] uppercase tracking-wider">
              Bespoke Advisory Practice
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#242424]">
              Commission Custom Market Feasibility or Price Studies
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Need dedicated intelligence on a specific regional lubricant market, Group III plant capacity economics, or M&A target valuation? Our research bureau accepts confidential commissioned assignments.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('Commissioned Market Intelligence')}
            className="px-7 py-3.5 rounded-xl bg-[#242424] hover:bg-black text-white text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <span>Request Custom Study Scope</span>
            <ArrowRight className="w-4 h-4 text-[#F88058]" />
          </button>
        </div>
      </section>

    </div>
  );
};

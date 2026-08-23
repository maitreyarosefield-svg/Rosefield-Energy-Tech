import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  RotateCw, 
  ShieldCheck, 
  TreePine, 
  Droplet, 
  ArrowRight, 
  HelpCircle,
  FileCheck2,
  Download
} from 'lucide-react';

interface EprCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (area?: string) => void;
}

export const EprCalculatorModal: React.FC<EprCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry
}) => {
  const [annualVolumeMT, setAnnualVolumeMT] = useState<number>(3500);
  const [sectorType, setSectorType] = useState<'automotive' | 'industrial' | 'importer'>('automotive');
  const [targetYear, setTargetYear] = useState<'2026' | '2027' | '2028'>('2026');

  if (!isOpen) return null;

  // Calculation parameters based on CPCB / Indian Used Oil EPR policy matrix
  const targetPercentages = {
    '2026': { automotive: 0.30, industrial: 0.25, importer: 0.35 },
    '2027': { automotive: 0.40, industrial: 0.35, importer: 0.45 },
    '2028': { automotive: 0.50, industrial: 0.45, importer: 0.55 },
  };

  const currentRate = targetPercentages[targetYear][sectorType];
  const requiredRecoveryMT = Math.round(annualVolumeMT * currentRate);
  
  // 1 MT used oil re-refined into RRBO saves approx 1.82 MT CO2e vs virgin crude refining
  const co2AbatementMT = Math.round(requiredRecoveryMT * 1.82);
  
  // Approx 4.2 barrels of crude saved per MT of RRBO recovered
  const crudeBarrelsConserved = Math.round(requiredRecoveryMT * 4.2);

  // Liters equivalent
  const requiredLiters = Math.round(requiredRecoveryMT * 1150);

  const handleConsultClick = () => {
    onClose();
    onOpenEnquiry(`RecykLube EPR Compliance (Volume: ${annualVolumeMT} MT, Target Year: ${targetYear})`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-[#1D1D1B]/15 overflow-hidden max-h-[92vh] flex flex-col text-[#1D1D1B]">
        
        {/* Header */}
        <div className="bg-[#1D1D1B] text-[#E8E6E1] p-6 flex items-start justify-between border-b border-[#2C2C2A]">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-sans">
              <span className="px-2.5 py-0.5 rounded-full bg-[#262624] text-[#E8E6E1] text-[10px] font-bold uppercase tracking-[0.25em] border border-[#3A3A36]">
                RecykLube Advisory Tool
              </span>
              <span className="text-xs text-[#E8E6E1]/70 font-mono">CPCB Norms Model</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-white tracking-tight">
              EPR Target & Carbon Abatement Estimator
            </h3>
            <p className="text-xs text-[#E8E6E1]/70 mt-1 font-sans">
              Estimate your statutory used oil recovery obligation and Scope 3 emissions reduction potential.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E8E6E1] transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calculator Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-[#F9F8F6] font-sans">
          
          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-[#1D1D1B]/10">
            
            {/* Input Volume */}
            <div>
              <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                Annual Base Volume (MT)
              </label>
              <input
                type="number"
                min="100"
                max="500000"
                step="100"
                value={annualVolumeMT}
                onChange={(e) => setAnnualVolumeMT(Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-[#F9F8F6] border border-[#1D1D1B]/15 text-sm font-semibold text-[#1D1D1B] focus:outline-hidden focus:border-[#1D1D1B]"
              />
              <span className="text-[10px] text-[#1D1D1B]/50 mt-1 block">Metric Tons sold/imported/used</span>
            </div>

            {/* Entity Type */}
            <div>
              <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                Obligated Sector
              </label>
              <select
                value={sectorType}
                onChange={(e) => setSectorType(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-[#F9F8F6] border border-[#1D1D1B]/15 text-xs font-semibold text-[#1D1D1B] focus:outline-hidden focus:border-[#1D1D1B]"
              >
                <option value="automotive">Automotive Finished Lubes</option>
                <option value="industrial">Industrial Specialty Oils</option>
                <option value="importer">Base Oil / Fluid Importer</option>
              </select>
              <span className="text-[10px] text-[#1D1D1B]/50 mt-1 block">Regulatory category</span>
            </div>

            {/* Target Year */}
            <div>
              <label className="block text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.2em] mb-1">
                Compliance Year
              </label>
              <div className="grid grid-cols-3 gap-1">
                {(['2026', '2027', '2028'] as const).map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setTargetYear(year)}
                    className={`py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      targetYear === year
                        ? 'bg-[#1D1D1B] text-[#F9F8F6] shadow-xs'
                        : 'bg-[#F9F8F6] border border-[#1D1D1B]/15 text-[#1D1D1B]/70 hover:bg-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-[#1D1D1B]/50 mt-1 block">Statutory mandate: {Math.round(currentRate * 100)}%</span>
            </div>

          </div>

          {/* Results Display */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-[#1D1D1B]/70 uppercase tracking-[0.25em] flex items-center justify-between">
              <span>Estimated Obligation & Circular Yield</span>
              <span className="text-[#B84A28] font-mono text-xs">Statutory Rate: {Math.round(currentRate * 100)}%</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Stat 1: EPR Volume */}
              <div className="p-4 rounded-2xl bg-[#F2EFE9] border border-[#1D1D1B]/10 relative overflow-hidden">
                <span className="text-[11px] font-semibold text-[#B84A28] block uppercase tracking-wider font-bold">Mandatory EPR Target</span>
                <div className="font-serif text-2xl font-medium text-[#1D1D1B] mt-1 tracking-tight">
                  {requiredRecoveryMT.toLocaleString()} <span className="text-sm font-sans font-normal text-[#1D1D1B]/60">MT</span>
                </div>
                <span className="text-[11px] text-[#1D1D1B]/60 mt-0.5 block">
                  ≈ {requiredLiters.toLocaleString()} Litres
                </span>
              </div>

              {/* Stat 2: Carbon Abatement */}
              <div className="p-4 rounded-2xl bg-white border border-[#1D1D1B]/10 relative overflow-hidden">
                <span className="text-[11px] font-bold text-[#1D1D1B] block flex items-center gap-1 uppercase tracking-wider">
                  <TreePine className="w-3.5 h-3.5 text-[#B84A28]" /> Scope 3 Abatement
                </span>
                <div className="font-serif text-2xl font-medium text-[#1D1D1B] mt-1 tracking-tight">
                  {co2AbatementMT.toLocaleString()} <span className="text-sm font-sans font-normal text-[#1D1D1B]/60">tCO₂e</span>
                </div>
                <span className="text-[11px] text-[#1D1D1B]/60 mt-0.5 block">
                  Avoided emissions vs virgin crude
                </span>
              </div>

              {/* Stat 3: Crude Conserved */}
              <div className="p-4 rounded-2xl bg-white border border-[#1D1D1B]/10 relative overflow-hidden">
                <span className="text-[11px] font-bold text-[#1D1D1B] block flex items-center gap-1 uppercase tracking-wider">
                  <Droplet className="w-3.5 h-3.5 text-[#B84A28]" /> Crude Conserved
                </span>
                <div className="font-serif text-2xl font-medium text-[#1D1D1B] mt-1 tracking-tight">
                  {crudeBarrelsConserved.toLocaleString()} <span className="text-sm font-sans font-normal text-[#1D1D1B]/60">bbl</span>
                </div>
                <span className="text-[11px] text-[#1D1D1B]/50 mt-0.5 block">
                  Natural resource preservation
                </span>
              </div>

            </div>
          </div>

          {/* Audit Verification Notice */}
          <div className="p-4 rounded-2xl bg-white border border-[#1D1D1B]/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B84A28] shrink-0 mt-0.5" />
            <div className="text-xs text-[#1D1D1B]/70 space-y-1">
              <div className="font-bold text-[#1D1D1B]">RecykLube Compliance Guarantee</div>
              <p>
                Rosefield structures 100% digitally verified, audit-ready EPR credits backed by GPS-manifested collections and licensed re-refining facilities, eliminating compliance risk on the Central Pollution Control Board portal.
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#1D1D1B]/50">
              Need custom fleet or nationwide collection network structuring?
            </span>

            <button
              onClick={handleConsultClick}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] text-xs font-sans font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Consult RecykLube Advisory Team</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8E6E1]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

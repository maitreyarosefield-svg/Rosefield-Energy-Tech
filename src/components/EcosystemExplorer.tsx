import React, { useState } from 'react';
import { 
  Droplets, 
  Flame, 
  RotateCw, 
  Package, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  Cpu
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  title: string;
  category: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  whatTheyProvide: string;
  whatTheyNeedFromRosefield: string[];
  connectedTo: string[];
}

const NODES: EcosystemNode[] = [
  {
    id: 'blenders',
    title: 'Lubricant Blenders & Brands',
    category: 'Formulators & Marketers',
    icon: Droplets,
    color: '#E85D36',
    bgColor: '#FFF5F0',
    borderColor: '#F8D8A0',
    description: 'Producers of automotive engine oils, industrial gear lubricants, hydraulic fluids, and EV driveline chemistries.',
    whatTheyProvide: 'High-performance finished lubricants, market demand signals, nationwide retail & OEM distribution channels.',
    whatTheyNeedFromRosefield: [
      'Strategic portfolio rationalisation & formulation cost-down benchmarking',
      'Guaranteed, audit-ready EPR collection & re-refining fulfillment',
      'Market intelligence on Group II/III base oil supply-demand balances',
      'B2B introductions to global additive suppliers & OEM testing programs'
    ],
    connectedTo: ['base-oil', 're-refiners', 'oems', 'regulators']
  },
  {
    id: 'base-oil',
    title: 'Base Oil Producers & Refiners',
    category: 'Upstream Refining',
    icon: Flame,
    color: '#DF9626',
    bgColor: '#FEF9F0',
    borderColor: '#F8B848',
    description: 'Global and regional refiners producing Group I, Group II, Group III, PAO, and bio-based ester base stocks.',
    whatTheyProvide: 'Feedstock base oils, technical quality certificates, bulk port import terminals.',
    whatTheyNeedFromRosefield: [
      'Commercial off-take partnerships with independent regional blenders',
      'Price trend forecasting and regional demand growth indices',
      'Sponsorship and thought-leadership platforms at Rosefield summits'
    ],
    connectedTo: ['blenders', 'oems']
  },
  {
    id: 're-refiners',
    title: 'Re-refiners & Recyclers',
    category: 'Circular Processing',
    icon: RotateCw,
    color: '#059669',
    bgColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    description: 'Advanced processing plants upgrading collected used oil via solvent extraction and hydro-finishing into Re-Refined Base Oil (RRBO).',
    whatTheyProvide: 'Low-carbon Group II/II+ base stocks, verified EPR recycling credits, hazardous waste mitigation.',
    whatTheyNeedFromRosefield: [
      'RecykLube structured used oil feedstock aggregation & quality testing',
      'Off-take agreements with major lubricant brands at commercial parity',
      'Technical advisory for hydro-finishing capacity upgrades & CPCB audits'
    ],
    connectedTo: ['generators', 'blenders', 'regulators']
  },
  {
    id: 'generators',
    title: 'Used Oil Generators & Fleets',
    category: 'Source Waste Points',
    icon: Package,
    color: '#9E4A1F',
    bgColor: '#FBF3E6',
    borderColor: '#F8D8A0',
    description: 'Automotive authorized service stations, industrial manufacturing plants, commercial fleet depots, and power stations.',
    whatTheyProvide: 'Spent lubricating oil batches, hazardous waste documentation, reverse supply streams.',
    whatTheyNeedFromRosefield: [
      'Standardized safe containment and digital pickup manifests',
      '100% compliant transfer certificates avoiding hazardous waste liability',
      'Integration into OEM closed-loop sustainability scorecards'
    ],
    connectedTo: ['re-refiners', 'oems']
  },
  {
    id: 'oems',
    title: 'Automotive & Industrial OEMs',
    category: 'Equipment Manufacturers',
    icon: Truck,
    color: '#2563EB',
    bgColor: '#EFF6FF',
    borderColor: '#BFDBFE',
    description: 'Vehicle manufacturers, heavy machinery producers, and industrial machinery builders setting factory-fill specifications.',
    whatTheyProvide: 'OEM engineering fluid approvals, warranty requirements, dealership service networks.',
    whatTheyNeedFromRosefield: [
      'Closed-loop service network used oil collection programs',
      'Co-engineering advisory for specialized EV and extended-drain fluids',
      'Scope 3 supply chain decarbonisation data for sustainability reports'
    ],
    connectedTo: ['blenders', 'generators', 'regulators']
  },
  {
    id: 'regulators',
    title: 'Regulators & Policy Bodies',
    category: 'Statutory Oversight',
    icon: ShieldCheck,
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    borderColor: '#DDD6FE',
    description: 'Central Pollution Control Boards, Ministries of Environment, and industry standardization councils.',
    whatTheyProvide: 'EPR guidelines, hazardous waste rules, environmental compliance mandates.',
    whatTheyNeedFromRosefield: [
      'Empirical industry data on used oil generation and re-refining capacity',
      'Industry-policy consultation platforms and stakeholder feedback',
      'Traceability protocols ensuring genuine compliance on national portals'
    ],
    connectedTo: ['blenders', 're-refiners', 'oems']
  }
];

export const EcosystemExplorer: React.FC<{ onOpenEnquiry: (area?: string) => void }> = ({ onOpenEnquiry }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('blenders');
  const selectedNode = NODES.find(n => n.id === selectedNodeId) || NODES[0];

  return (
    <div className="bg-white rounded-3xl border border-[#1D1D1B]/10 shadow-sm overflow-hidden text-[#1D1D1B]">
      
      {/* Top Banner */}
      <div className="bg-[#1D1D1B] text-[#E8E6E1] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#2C2C2A]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262624] text-[#E8E6E1] text-[10px] font-sans font-bold uppercase tracking-[0.25em] mb-2 border border-[#3A3A36]">
            <span>Relationship Architecture</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight">
            Connecting the Industry Ecosystem
          </h3>
          <p className="text-[#E8E6E1]/70 text-sm mt-1 max-w-2xl font-sans">
            Select an ecosystem stakeholder to see how Rosefield acts as the connective catalyst between upstream refining, formulation, recycling, and statutory governance.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-[#242422] px-3.5 py-2 rounded-full border border-[#3A3A36] shrink-0 font-sans">
          <span className="w-2 h-2 rounded-full bg-[#B84A28]"></span>
          <span className="text-[#E8E6E1] font-medium text-[11px] uppercase tracking-wider">6 Stakeholder Nodes Active</span>
        </div>
      </div>

      {/* Grid of Stakeholder Nodes */}
      <div className="p-6 bg-[#F9F8F6] border-b border-[#1D1D1B]/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {NODES.map((node) => {
            const Icon = node.icon;
            const isSelected = node.id === selectedNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`p-3 rounded-2xl text-left transition-all cursor-pointer flex flex-col items-start gap-2 border ${
                  isSelected
                    ? 'bg-white shadow-sm border-[#1D1D1B] scale-[1.02] ring-1 ring-[#1D1D1B]'
                    : 'bg-white/80 hover:bg-white border-[#1D1D1B]/10 text-[#1D1D1B] hover:border-[#1D1D1B]/30'
                }`}
              >
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border bg-[#F9F8F6] border-[#1D1D1B]/10 text-[#1D1D1B]"
                >
                  <Icon className="w-4 h-4 text-[#B84A28]" />
                </div>
                <div>
                  <div className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#1D1D1B]/50">
                    {node.category}
                  </div>
                  <div className="font-serif font-medium text-xs text-[#1D1D1B] leading-snug line-clamp-1 mt-0.5">
                    {node.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Node Deep-Dive */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Stakeholder Profile (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-[#F9F8F6] border-[#1D1D1B]/15 text-[#1D1D1B]"
            >
              <selectedNode.icon className="w-6 h-6 text-[#B84A28]" />
            </div>
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1D1D1B]/50">
                {selectedNode.category}
              </span>
              <h4 className="font-serif text-2xl font-medium text-[#1D1D1B] tracking-tight">
                {selectedNode.title}
              </h4>
            </div>
          </div>

          <p className="text-sm text-[#1D1D1B]/70 leading-relaxed font-sans">
            {selectedNode.description}
          </p>

          <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#1D1D1B]/10 space-y-1.5 font-sans">
            <span className="text-[10px] font-sans font-bold text-[#1D1D1B] uppercase tracking-[0.2em] block">
              What They Supply to Ecosystem
            </span>
            <p className="text-xs text-[#1D1D1B]/70 leading-normal">
              {selectedNode.whatTheyProvide}
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry(`Ecosystem Partnership: ${selectedNode.title}`)}
            className="w-full py-3 px-4 rounded-full bg-[#1D1D1B] hover:bg-black text-[#F9F8F6] font-sans text-xs uppercase tracking-[0.15em] font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Engage Rosefield for {selectedNode.title}</span>
            <ArrowRight className="w-4 h-4 text-[#E8E6E1]" />
          </button>
        </div>

        {/* Right Column: How Rosefield Delivers Value (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-[#F2EFE9] border border-[#1D1D1B]/10">
            <div className="flex items-center gap-2 text-[10px] font-sans font-bold text-[#B84A28] uppercase tracking-[0.25em] mb-2">
              <Building2 className="w-4 h-4 text-[#B84A28]" />
              <span>How Rosefield Enables & Connects This Stakeholder</span>
            </div>
            
            <div className="space-y-2.5">
              {selectedNode.whatTheyNeedFromRosefield.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1B] bg-white p-3 rounded-xl border border-[#1D1D1B]/10 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#B84A28] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Stakeholders pill tags */}
          <div className="pt-2">
            <span className="text-[10px] font-sans font-bold text-[#1D1D1B]/50 uppercase tracking-[0.2em] block mb-2">
              Direct Bilateral Linkages Orchestrated by Rosefield:
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedNode.connectedTo.map((targetId) => {
                const targetNode = NODES.find(n => n.id === targetId);
                if (!targetNode) return null;
                return (
                  <button
                    key={targetId}
                    onClick={() => setSelectedNodeId(targetId)}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#1D1D1B]/15 hover:border-[#1D1D1B] text-xs font-sans font-medium text-[#1D1D1B] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84A28]"></span>
                    <span>{targetNode.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#1D1D1B]/40" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

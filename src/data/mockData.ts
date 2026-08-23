import { ServiceVertical, IndustrySector, InsightItem, EventItem, RecykLubeStep, TrustStat } from '../types';

export const TRUST_STATS: TrustStat[] = [
  {
    value: '500+',
    label: 'Enterprise Stakeholders',
    subtext: 'Blenders, refiners, OEMs & recyclers engaged'
  },
  {
    value: '18+',
    label: 'Industry Summits & Conclaves',
    subtext: 'Convening decision-makers across APAC & Middle East'
  },
  {
    value: '45+',
    label: 'Market & Technical Reports',
    subtext: 'Authoritative data on base oils, fuels & EPR'
  },
  {
    value: '14M+ L',
    label: 'Used Oil Traceability Pipeline',
    subtext: 'Structured via RecykLube circular initiatives'
  }
];

export const SERVICE_VERTICALS: ServiceVertical[] = [
  {
    id: 'events-platforms',
    number: '01',
    title: 'Events & Knowledge Platforms',
    tagline: 'High-level summits, technical roundtables, and strategic industry networking.',
    description: 'We conceive, curate, and host premier B2B industry conferences, executive roundtables, technology showcases, and policy dialogues. Our platforms bring together C-level leaders, technical authorities, policymakers, and global suppliers to debate market disruptions and catalyze commercial partnerships.',
    iconName: 'Users',
    capabilities: [
      'Flagship Industrial Conferences & Summits',
      'Exclusive CXO Strategic Roundtables',
      'Technical Seminars & Technology Masterclasses',
      'Ecosystem Networking & B2B Matchmaking',
      'Technology Showcases & Exhibition Management',
      'Thought-Leadership & Policy Working Groups'
    ],
    keyOutcomes: [
      'Direct access to target enterprise decision-makers',
      'First-hand exposure to upcoming regulatory and technical mandates',
      'Bilateral business development and joint-venture origination'
    ],
    targetAudience: [
      'CEOs & Managing Directors',
      'Technical & R&D Heads',
      'Global Base Oil & Additive Suppliers',
      'OEM Commercial Teams'
    ],
    caseSnippet: 'Convened over 450 global delegates at the India Lubricants & Base Oils Conclave, facilitating 80+ cross-border technology and supply discussions.',
    ctaText: 'Explore Events'
  },
  {
    id: 'strategic-consultancy',
    number: '02',
    title: 'Strategic & Technical Consultancy',
    tagline: 'End-to-end commercial strategy, value engineering, and technical advisory.',
    description: 'We deliver bespoke management consulting and technical advisory tailored strictly to the lubricants, fuels, specialty chemicals, and energy sectors. From market entry and portfolio optimization to M&A due diligence and value engineering, we provide actionable intelligence backed by deep operational knowledge.',
    iconName: 'Compass',
    capabilities: [
      'Market Entry & Geographic Expansion Strategy',
      'Product Portfolio Rationalisation & Formulation Advisory',
      'Value Engineering & Supply Chain Optimization',
      'Commercial Strategy & Go-To-Market Execution',
      'Competitor Benchmarking & Pricing Intelligence',
      'M&A Advisory, Technical Due Diligence & Partner Scouting',
      'Plant Assessment & Quality Standardisation Advisory'
    ],
    keyOutcomes: [
      'Accelerated market penetration with mitigated regulatory friction',
      'Cost reduction through formulation rationalisation and local sourcing',
      'Rigorous commercial and technical validation for M&A transactions'
    ],
    targetAudience: [
      'Lubricant Brand Owners & Blenders',
      'Private Equity & Infrastructure Investors',
      'Specialty Chemical Manufacturers',
      'Energy Conglomerates'
    ],
    caseSnippet: 'Advised a Tier-1 European lubricant manufacturer on entering the Indian industrial OEM sector, establishing distribution and OEM approvals within 14 months.',
    ctaText: 'Explore Consulting'
  },
  {
    id: 'circular-epr',
    number: '03',
    title: 'Circular Economy & EPR Advisory',
    tagline: 'Navigating Extended Producer Responsibility, used oil tracking, and resource recovery.',
    description: 'With increasing regulatory scrutiny around hazardous waste and circular mandates, Rosefield advises producers, recyclers, and corporate generators on structuring compliant, audit-ready EPR frameworks, reverse logistics, and closed-loop recycling systems.',
    iconName: 'RefreshCw',
    capabilities: [
      'EPR Policy Compliance & Target Obligation Audits',
      'Used Oil Reverse Logistics & Collection Network Design',
      'Traceability & Digital Manifest Chain-of-Custody',
      'Re-refiner Vetting & Technical Capability Audits',
      'Closed-Loop Recycling & Resource Recovery Roadmaps',
      'Sustainability & Scope 3 Decarbonisation Frameworks',
      'Regulatory Representation & Stakeholder Coordination'
    ],
    keyOutcomes: [
      '100% compliance with statutory EPR targets without operational disruption',
      'Transparent, digitally verified used oil recovery chains',
      'Substantial reduction in corporate Scope 3 carbon footprint via re-refined base oils (RRBO)'
    ],
    targetAudience: [
      'EPR Obligated Lubricant Producers & Importers',
      'Automotive & Industrial OEMs with Generator Responsibilities',
      'Authorized Used Oil Recyclers & Re-refiners',
      'State & Central Regulatory Bodies'
    ],
    caseSnippet: 'Structured an integrated collection and recycling framework for an automotive OEM network across 12 states, achieving full EPR credit compliance.',
    ctaText: 'Explore Circular Economy'
  },
  {
    id: 'market-intelligence',
    number: '04',
    title: 'Publications & Market Intelligence',
    tagline: 'Deep data, price trends, regulatory forecasts, and proprietary research.',
    description: 'We publish authoritative market research reports, whitepapers, pricing trackers, and industry briefings. Our intelligence helps corporate leadership anticipate supply-demand shifts, monitor Group I/II/III base oil dynamics, and understand changing regulatory standards.',
    iconName: 'BarChart3',
    capabilities: [
      'Syndicated Industry Research & Outlook Reports',
      'Base Oil Supply-Demand & Price Trend Monitoring',
      'Used Oil & Re-refining Market Assessments',
      'Regulatory & Environmental Compliance Forecasts',
      'Custom Commissioned Market Feasibility Studies',
      'Quarterly Executive Briefings & Intelligence Bulletins',
      'M&A Transaction Trackers & Valuation Multiples'
    ],
    keyOutcomes: [
      'Data-backed investment and capacity planning decisions',
      'Early warning on raw material cost escalations and supply shortages',
      'Clear visibility on emerging green lubricant formulations and alternatives'
    ],
    targetAudience: [
      'Chief Strategy Officers & Procurement Heads',
      'Base Oil Traders & Distributors',
      'Institutional Investors & Equity Analysts',
      'Corporate Affairs & Policy Directors'
    ],
    caseSnippet: 'Published the definitive "India Used Oil Ecosystem & Re-refining Outlook 2025-2030", cited by leading energy boards and industry associations.',
    ctaText: 'Explore Insights'
  }
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'lubricants',
    title: 'Lubricants & Formulations',
    subtitle: 'Automotive, Industrial, Marine & Specialty Fluids',
    description: 'Spanning base oil sourcing, additive blending, formulation upgrades to meet BS-VI/Euro-6 and EV requirements, and multi-tier distribution networks.',
    iconName: 'Droplets',
    keyStakeholders: [
      'Finished Lubricant Manufacturers',
      'Base Oil Refiners & Importers',
      'Performance Additive Companies',
      'Independent Blending Plants'
    ],
    industryChallenges: [
      'Shifting to low-viscosity, high-efficiency synthetic formulations',
      'Volatile crude and base oil pricing cycles affecting gross margins',
      'Compliance with mandatory EPR used oil recovery targets'
    ],
    rosefieldSolutions: [
      'Formulation rationalisation and supplier benchmarking',
      'Comprehensive market entry and OEM approval strategy',
      'End-to-end EPR compliance network integration'
    ],
    metrics: { value: '4.2% CAGR', label: 'Expected Asia-Pacific demand growth for high-tier synthetics' }
  },
  {
    id: 'fuels-energy',
    title: 'Fuels & Energy Transition',
    subtitle: 'Conventional Hydrocarbons, Biofuels & Green Alternatives',
    description: 'Assisting energy conglomerates and downstream distributors in navigating decarbonisation mandates, biofuel blending targets, and industrial energy efficiency.',
    iconName: 'Flame',
    keyStakeholders: [
      'Oil Marketing Companies (OMCs)',
      'Biofuel & Biodiesel Producers',
      'Industrial Thermal Energy Users',
      'Clean Tech & Energy Transition Funds'
    ],
    industryChallenges: [
      'Integration of ethanol and biodiesel blending mandates',
      'Decarbonising heavy industrial energy and fleet operations',
      'Capital allocation between legacy assets and transition fuels'
    ],
    rosefieldSolutions: [
      'Feasibility studies for alternative fuels and blending infrastructure',
      'Regulatory forecasting and carbon compliance strategies',
      'Strategic partnerships between fuel distributors and green tech firms'
    ],
    metrics: { value: '20% Target', label: 'National ethanol blending mandate transition milestone' }
  },
  {
    id: 'circular-economy',
    title: 'Circular Economy',
    subtitle: 'Closed-Loop Systems, Waste-to-Value & Resource Efficiency',
    description: 'Transforming linear "take-make-dispose" models into resilient, regenerative resource cycles that preserve raw material value and lower carbon intensity.',
    iconName: 'RotateCw',
    keyStakeholders: [
      'Circular Solution Developers',
      'Industrial Waste Generators',
      'Sustainability & ESG Officers',
      'Green Chemistry Innovators'
    ],
    industryChallenges: [
      'Lack of traceability across informal secondary waste streams',
      'Techno-economic viability of advanced recycling processes',
      'Measurement and audit standards for Scope 3 emissions reductions'
    ],
    rosefieldSolutions: [
      'Circular value chain architecture and stakeholder alignment',
      'Life-cycle assessment (LCA) and carbon abatement modeling',
      'Commercial viability audits for recycling technologies'
    ],
    metrics: { value: '70% Lower', label: 'Carbon footprint of re-refined base oils vs virgin crude refining' }
  },
  {
    id: 'used-oil',
    title: 'Used Oil Management & Re-refining',
    subtitle: 'Collection Networks, Solvent Extraction & Hydro-treating',
    description: 'Structuring formalised used oil aggregation, hazardous waste compliance, and facilitating the transition of re-refiners to Group II/II+ quality production.',
    iconName: 'Package',
    keyStakeholders: [
      'Commercial Used Oil Collectors & Aggregators',
      'Licensed Re-refiners & Distillers',
      'Pollution Control Boards & Regulators',
      'Industrial Maintenance Fleets'
    ],
    industryChallenges: [
      'Severe leakages into informal, non-compliant burning channels',
      'Quality inconsistency in feedstock used oil batches',
      'High capex required for advanced hydro-finishing upgrades'
    ],
    rosefieldSolutions: [
      'RecykLube digital traceability and aggregation protocols',
      'Technical due diligence for re-refining plant modernization',
      'Formal off-take agreements connecting re-refiners with major blenders'
    ],
    metrics: { value: '1.4M Metric Tons', label: 'Estimated annual used oil generation in India alone' }
  },
  {
    id: 'epr-sustainability',
    title: 'EPR & Sustainability Frameworks',
    subtitle: 'Statutory Compliance, Carbon Accounting & ESG Audits',
    description: 'Empowering enterprises to meet government-mandated Extended Producer Responsibility targets with verifiable documentation and ethical vendor ecosystems.',
    iconName: 'ShieldCheck',
    keyStakeholders: [
      'EPR Obligated Lubricant & Fuel Importers',
      'Corporate Sustainability Committees',
      'Third-party ESG Verification Agencies',
      'Industry Environmental Associations'
    ],
    industryChallenges: [
      'Stringent year-on-year escalation of statutory EPR recovery percentages',
      'Risk of penalties and license revocations for non-genuine EPR certificates',
      'Complex reporting requirements on government central portals'
    ],
    rosefieldSolutions: [
      'End-to-end EPR strategy, portal management, and audit preparation',
      'Verified physical-to-digital chain-of-custody documentation',
      'Integrated corporate sustainability reporting'
    ],
    metrics: { value: '100% Audit-Ready', label: 'Compliance assurance across verified RecykLube networks' }
  },
  {
    id: 'industrial-automotive',
    title: 'Industrial & Automotive OEMs',
    subtitle: 'Commercial Vehicles, Manufacturing Plants & Fleet Operators',
    description: 'Connecting equipment manufacturers with reliable fluid formulations, maintenance waste management, and sustainable supply-chain partners.',
    iconName: 'Truck',
    keyStakeholders: [
      'Automotive Original Equipment Manufacturers',
      'Heavy Equipment & Machinery Manufacturers',
      'Large Commercial Fleet Operators',
      'Industrial Manufacturing Plants'
    ],
    industryChallenges: [
      'Tightening factory-fill fluid specifications for extended drain intervals',
      'Managing hazardous waste from nationwide service center networks',
      'Customer pressure for demonstrable green manufacturing credentials'
    ],
    rosefieldSolutions: [
      'Genuine fluid brand development and co-engineering advisory',
      'Service network used oil collection and EPR aggregation schemes',
      'Benchmarking lubricant performance and total cost of ownership (TCO)'
    ],
    metrics: { value: '3,000+ Centers', label: 'Potential service points linked through structured collection programs' }
  }
];

export const RECYKLUBE_STEPS: RecykLubeStep[] = [
  {
    step: '01',
    title: 'Used Oil Generator',
    role: 'Automotive workshops, industrial plants, fleet depots, and power facilities generate hazardous spent lubricant.',
    description: 'RecykLube provides standardized on-site storage guidelines, digital logging protocols, and segregation practices to avoid contamination with water or solvents.',
    metrics: 'Standardized containment & digital manifest generation',
    keyFeatures: ['Safe storage protocols', 'Contamination screening', 'Digital dispatch logging']
  },
  {
    step: '02',
    title: 'Authorized Collection',
    role: 'Certified, GPS-tracked collection vehicles execute scheduled pickups with verified batch testing.',
    description: 'Our network of verified aggregators ensures safe transport complying strictly with hazardous waste handling regulations and environmental norms.',
    metrics: '100% GPS-tracked reverse logistics',
    keyFeatures: ['Licensed transporter vetting', 'Weighbridge digital capture', 'Electronic hazardous waste pass (Form 10)']
  },
  {
    step: '03',
    title: 'Digital Traceability',
    role: 'Real-time tracking of every barrel from generation point to processing gate.',
    description: 'Every consignment is recorded on a secure ledger, linking generator ID, volume, batch test parameters, and delivery timestamp for unequivocal audit compliance.',
    metrics: 'Immutable chain of custody records',
    keyFeatures: ['Barcode / QR asset tagging', 'Automated portal data sync', 'Zero informal diversion guarantees']
  },
  {
    step: '04',
    title: 'Processing & Re-refining',
    role: 'State-of-the-art re-refining facilities utilizing thin-film evaporation, solvent extraction, and hydro-finishing.',
    description: 'The used oil is refined back into premium Group II / II+ Re-Refined Base Oil (RRBO), removing all heavy metals, oxidation products, and degraded additives.',
    metrics: 'Yields up to 75-80% high-quality base oil fraction',
    keyFeatures: ['Advanced solvent extraction', 'Hydro-treatment to API standards', 'Comprehensive lab testing for viscosity & sulfur']
  },
  {
    step: '05',
    title: 'Circular Resource Recovery',
    role: 'RRBO is reintroduced into high-performance lubricant formulations, closing the loop.',
    description: 'Producers utilize verified recycled base oils to fulfill statutory EPR obligations, conserve virgin crude resources, and offer low-carbon products to industry.',
    metrics: 'Over 65% reduction in embodied carbon vs virgin oil',
    keyFeatures: ['Statutory EPR credit settlement', 'Scope 3 carbon reduction certificates', 'Continuous circular supply loop']
  }
];

export const WHY_ROSEFIELD = [
  {
    id: 'industry-expertise',
    title: 'Specialised Industry Expertise',
    description: 'Deep, uncompromising domain focus exclusively on lubricants, fuels, energy, and circular economy. We speak the exact technical and commercial language of your business.',
    iconName: 'Award',
    accentColor: '#F88058'
  },
  {
    id: 'connected-ecosystem',
    title: 'Unrivalled Connected Ecosystem',
    description: 'Direct, active relationships spanning global base oil producers, lubricant brand leaders, OEM procurement heads, re-refiners, and regulatory authorities.',
    iconName: 'Network',
    accentColor: '#F8B848'
  },
  {
    id: 'knowledge-driven',
    title: 'Data & Knowledge-Driven',
    description: 'Every advisory engagement and market analysis is grounded in proprietary empirical research, continuous field data, and real-time regulatory tracking.',
    iconName: 'Database',
    accentColor: '#F88058'
  },
  {
    id: 'business-focused',
    title: 'Commercially Pragmatic',
    description: 'We deliver concrete, quantifiable outcomes — from revenue growth and cost-down value engineering to risk-free regulatory compliance and strategic M&A execution.',
    iconName: 'TrendingUp',
    accentColor: '#F8B848'
  },
  {
    id: 'sustainability-oriented',
    title: 'Sustainability with Commercial Logic',
    description: 'We help clients embed circular economy principles and EPR compliance as genuine competitive advantages, not merely tick-box regulatory burdens.',
    iconName: 'Leaf',
    accentColor: '#F88058'
  },
  {
    id: 'long-term-partnerships',
    title: 'Enduring Strategic Partnerships',
    description: 'We measure our success by long-term client relationships that create cumulative institutional value across market cycles.',
    iconName: 'Handshake',
    accentColor: '#F8B848'
  }
];

export const OUR_APPROACH_STEPS = [
  {
    number: '01',
    name: 'UNDERSTAND',
    shortDescription: 'Deep technical & commercial scoping',
    details: 'We begin with an exhaustive assessment of your operating model, feedstock economics, technical formulations, competitive landscape, and regulatory mandates.'
  },
  {
    number: '02',
    name: 'ANALYSE',
    shortDescription: 'Empirical data & intelligence modeling',
    details: 'Leveraging proprietary industry databases, price trend models, and regulatory foresight, we evaluate challenges and identify high-value opportunities.'
  },
  {
    number: '03',
    name: 'CONNECT',
    shortDescription: 'Ecosystem stakeholder mobilization',
    details: 'We connect you directly with qualified technology providers, licensed recyclers, OEM decision-makers, or international supply partners.'
  },
  {
    number: '04',
    name: 'STRATEGISE',
    shortDescription: 'Actionable, risk-mitigated roadmaps',
    details: 'We craft pragmatic commercial strategies, formulation transition plans, or EPR compliance structures calibrated to specific market realities.'
  },
  {
    number: '05',
    name: 'ENABLE',
    shortDescription: 'Implementation & measurable value delivery',
    details: 'We stay alongside your leadership team to drive execution, monitor regulatory audits, verify circular flows, and ensure sustainable business outcomes.'
  }
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: 'report-used-oil-outlook-2026',
    title: 'Indian Used Oil Ecosystem & Re-refining Outlook 2026-2030',
    slug: 'indian-used-oil-ecosystem-re-refining-outlook-2026',
    category: 'Used Oil & EPR',
    format: 'Report',
    date: 'February 2026',
    readTime: '24 min read',
    summary: 'A definitive 68-page assessment on national used oil generation volumes, collection mechanics, state-level EPR enforcement, and the economics of Group II hydro-treating re-refineries.',
    author: {
      name: 'Rosefield Intelligence Bureau',
      role: 'Energy & Circular Advisory Group'
    },
    tableOfContents: [
      'Executive Summary & Market Sizing',
      'Current Used Oil Flow & Informal Leakage Assessment',
      'CPCB & MoEFCC Regulatory Frameworks & EPR Multipliers',
      'Techno-Commercial Evaluation of Solvent Extraction vs Hydro-finishing',
      'Re-Refined Base Oil (RRBO) Pricing Parity with Virgin Group II',
      'Strategic Recommendations for Finished Lubricant Blenders'
    ],
    keyTakeaways: [
      'India generates an estimated 1.45M MT of used oil annually, with formal re-refining capacity expected to grow at 16.4% CAGR.',
      'Mandatory EPR targets will require blenders to source at least 40% of their base stock requirements from re-refined sources by 2028.',
      'Group II+ RRBO produced via modern hydro-treating matches virgin SN 150/500 in oxidation stability and cold-cranking performance.'
    ],
    downloadable: true,
    pagesCount: 68,
    featured: true
  },
  {
    id: 'report-base-oil-dynamics-2026',
    title: 'Global Base Oils Supply-Demand & Price Trend Forecast (Q1-Q4 2026)',
    slug: 'global-base-oils-supply-demand-price-forecast-2026',
    category: 'Base Oils',
    format: 'Report',
    date: 'January 2026',
    readTime: '18 min read',
    summary: 'Comprehensive analysis of Group I rationalisation in Europe/APAC, expansion of Middle East Group III mega-plants, and regional freight spread impacts on blending margins.',
    author: {
      name: 'Dr. Alok Verma',
      role: 'Head of Technical Research'
    },
    tableOfContents: [
      'Macro Crude Drivers & Refinery Utilization Rates',
      'Group I, Group II, Group III Global Capacity Balances',
      'Asian Import-Export Dynamics & Port Inflow Trends',
      'Synthetic PAO & Ester Supply Constraints in EV Coolants',
      'Margin Sensitivities for Independent Lubricant Blenders'
    ],
    keyTakeaways: [
      'Group III supply tightness is easing with new capacity on-stream in the GCC, softening premium spreads.',
      'Group I brightstock remains in structural deficit, accelerating the shift to heavy Group II formulations in industrial gear oils.',
      'Logistics container freights are stabilizing, providing blenders predictability in quarterly contract pricing.'
    ],
    downloadable: true,
    pagesCount: 52,
    featured: true
  },
  {
    id: 'brief-epr-compliance-guide',
    title: 'Navigating the 2026 EPR Mandate: A Practical Guide for Lubricant Importers',
    slug: 'navigating-2026-epr-mandate-practical-guide',
    category: 'Regulatory Updates',
    format: 'Regulatory Flash',
    date: 'February 2026',
    readTime: '8 min read',
    summary: 'A step-by-step advisory note dissecting central portal registration, certificate procurement rules, and audit liability protocols for importers and brand owners.',
    author: {
      name: 'Adv. Sameer Joshi',
      role: 'Senior Regulatory Advisor'
    },
    tableOfContents: [
      'Overview of Revised EPR Obligation Matrices',
      'Verification Protocols for Recycler EPR Certificates',
      'Deadlines, Penalties & Escrow Calculations',
      'Mitigating Fraudulent Certificate Risks'
    ],
    keyTakeaways: [
      'Failure to upload verified QR-coded manifests now triggers immediate show-cause notices from Central authorities.',
      'Brand owners can leverage RecykLube pre-audited networks to fulfill compliance with complete digital provenance.'
    ],
    downloadable: true,
    pagesCount: 14,
    featured: false
  },
  {
    id: 'article-ev-fluids-transition',
    title: 'Thermal Fluids and Dielectric Lubricants: The EV Drivetrain Frontier',
    slug: 'thermal-fluids-dielectric-lubricants-ev-drivetrain-frontier',
    category: 'Lubricants',
    format: 'Article',
    date: 'January 2026',
    readTime: '11 min read',
    summary: 'How electric vehicle architectures are transforming lubrication from traditional engine protection to advanced immersion cooling, copper compatibility, and electrical insulation.',
    author: {
      name: 'Technical Advisory Board',
      role: 'Rosefield Energy Tech'
    },
    keyTakeaways: [
      'Direct immersion battery cooling requires ultra-low viscosity fluids with dielectric breakdown voltages exceeding 40 kV.',
      'Formulations must demonstrate complete passivation against copper etching in high-temperature stator environments.'
    ],
    downloadable: false,
    featured: false
  },
  {
    id: 'case-closed-loop-oem',
    title: 'Case Study: Structuring a Nationwide Closed-Loop Oil Recovery Network for a Tier-1 OEM',
    slug: 'case-study-closed-loop-oil-recovery-tier-1-oem',
    category: 'Circular Economy',
    format: 'Case Study',
    date: 'December 2025',
    readTime: '14 min read',
    summary: 'How Rosefield architected an end-to-end collection, testing, and re-refining mechanism across 850 dealership touchpoints, recovering 4.8M liters of used oil annually.',
    author: {
      name: 'Strategic Advisory Practice',
      role: 'Rosefield Energy Tech'
    },
    keyTakeaways: [
      'Achieved 94% collection compliance across authorized service workshops within 9 months.',
      'Generated over 3,200 metric tons of CO2 equivalent emissions offsets verified through third-party LCA.'
    ],
    downloadable: true,
    pagesCount: 22,
    featured: false
  },
  {
    id: 'market-biofuels-blending',
    title: 'Market Intelligence: Biofuels & Compressed Bio-Gas (CBG) Integration in Industrial Energy',
    slug: 'biofuels-compressed-bio-gas-integration-industrial-energy',
    category: 'Fuels & Energy',
    format: 'Intelligence Brief',
    date: 'November 2025',
    readTime: '10 min read',
    summary: 'Evaluating feedstock availability, off-take guarantees, and tariff structures for industrial boilers transitioning from furnace oil to CBG and biodiesel.',
    author: {
      name: 'Energy Practice Group',
      role: 'Rosefield Energy Tech'
    },
    keyTakeaways: [
      'Industrial clusters in Western and Southern India are seeing rapid payback on CBG retrofits under regional clean fuel policies.',
      'Supply contract structuring with long-term indexation against fuel oil benchmarks remains key to bankability.'
    ],
    downloadable: true,
    pagesCount: 19,
    featured: false
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'event-india-lubricants-summit-2026',
    title: 'India Lubricants & Base Oils Leadership Summit 2026',
    theme: 'Decarbonisation, Formulation Innovation & Supply-Chain Resiliency',
    date: 'October 15–16, 2026',
    location: 'The St. Regis, Mumbai, India',
    type: 'Summit',
    status: 'Registration Open',
    description: 'The premier executive conference uniting senior leadership from state oil marketing companies, global base oil producers, additive innovators, and independent blenders to address emerging market dynamics, BS-VI phase II challenges, and sustainable fluid chemistry.',
    keyThemes: [
      'Global Base Oil Capacity Shifts & Asian Pricing Benchmarks',
      'EV Drivetrain Fluids & Immersion Cooling Technologies',
      'Managing Raw Material Volatility & Additive Formulation Economics',
      'Statutory EPR Implementation & Re-refining Integration'
    ],
    speakers: [
      { name: 'Rajesh Mukherjee', designation: 'Executive Director (Lubes)', organization: 'Leading National Oil Company' },
      { name: 'Dr. Elena Rostova', designation: 'Global R&D Director, Base Fluids', organization: 'Specialty Chemical AG' },
      { name: 'K. S. Narayanan', designation: 'President & CEO', organization: 'Apex Lubricant Formulators' },
      { name: 'Sanjay Deshmukh', designation: 'Member Secretary', organization: 'Central Pollution Control Taskforce' }
    ],
    partners: ['Afton Chemical Partner', 'PetroChem Global', 'Lubrizol Innovate', 'Argus Media'],
    delegatesCount: '450+ C-Level Delegates',
    daysDuration: '2 Full Days',
    featured: true
  },
  {
    id: 'event-circular-energy-conclave',
    title: 'Circular Economy & Used Oil Conclave 2026',
    theme: 'Building a Zero-Waste Used Oil Ecosystem: Technology, Traceability & EPR',
    date: 'November 26–27, 2026',
    location: 'India Habitat Centre, New Delhi',
    type: 'Conference',
    status: 'Upcoming',
    description: 'Dedicated entirely to the circular transformation of hazardous oily wastes. Bringing together re-refiners, waste generators, technology suppliers, and regulatory policymakers to establish traceable, high-yield closed-loop recycling infrastructure across India and South Asia.',
    keyThemes: [
      'Advanced Hydro-treating & Solvent Extraction Re-refining Tech',
      'Digital Traceability, Form 10 Compliance & CPCB Portal Integration',
      'RRBO Commercial Parity & Industrial Acceptance Standards',
      'Incentivizing Structured Collection Networks in Tier 2/3 Cities'
    ],
    speakers: [
      { name: 'Vikram Singhania', designation: 'Managing Director', organization: 'RecycleCore Technologies' },
      { name: 'Dr. Anita Roy', designation: 'Head of ESG & Circularity', organization: 'AutoCorp India' },
      { name: 'Maitrey Rosefield', designation: 'Lead Strategic Advisor', organization: 'Rosefield Energy Tech' }
    ],
    partners: ['Ministry of Environment Partner', 'CleanTech Capital', 'Greentech Re-refining'],
    delegatesCount: '350+ Stakeholders',
    daysDuration: '2 Days',
    featured: true
  },
  {
    id: 'event-ev-fluids-roundtable',
    title: 'CXO Technical Roundtable: Next-Gen Dielectric & Immersion Fluids',
    theme: 'Engineering High-Efficiency Thermal Management for Battery & Stator Systems',
    date: 'December 10, 2026',
    location: 'The Leela Palace, Bengaluru',
    type: 'Roundtable',
    status: 'Upcoming',
    description: 'An exclusive, closed-door strategic salon limited to 40 Chief Technology Officers and OEM Chief Engineers evaluating dielectric fluid standards, material compatibility, and fluid longevity in 800V fast-charging platforms.',
    keyThemes: [
      'Dielectric Breakdown & High-Voltage Arc Prevention',
      'Material Compatibility with Copper, Elastomers & Thermal Pastes',
      'Life-Cycle Carbon vs Glycol-Water Alternatives'
    ],
    speakers: [
      { name: 'Dr. Pradeep Nair', designation: 'Chief Technology Officer', organization: 'ElectroDrive Mobility' },
      { name: 'Prof. Hans Weber', designation: 'Chair of Tribology', organization: 'Institute of Advanced Materials' }
    ],
    partners: ['EV Mobility Alliance', 'Tribology Society'],
    delegatesCount: '40 Executive Leaders',
    daysDuration: '1 Day Intensive',
    featured: false
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Maitrey Rosefield',
    role: 'Managing Director & Strategic Lead',
    experience: '20+ years driving strategy, market entry, and high-level enterprise connections across energy, lubricants, and circular economy sectors.',
    specialization: 'Strategic Consulting, Business Ecosystems, B2B Networking, M&A'
  },
  {
    name: 'Dr. Alok Verma',
    role: 'Head of Technical Research & Formulations',
    experience: 'Former R&D Lead at multinational oil majors with patents in synthetic base stock formulations and hydro-treating chemistry.',
    specialization: 'Formulation Optimization, Technical Due Diligence, Re-refining'
  },
  {
    name: 'Adv. Sameer Joshi',
    role: 'Senior Advisor — Regulatory & EPR Policy',
    experience: 'Specialist in hazardous waste management rules, CPCB statutory compliance, and corporate environmental jurisprudence.',
    specialization: 'EPR Strategy, Policy Advocacy, Audit Compliance'
  },
  {
    name: 'Meera Chawla',
    role: 'Head of Market Intelligence & Publications',
    experience: '15+ years analyzing hydrocarbon commodities, pricing indices, and downstream market forecasting across APAC & EMEA.',
    specialization: 'Commodity Modeling, Industry Publications, Market Sizing'
  }
];

export const FAQ_LIST = [
  {
    question: 'How does Rosefield Energy Tech engage with clients on strategic consulting projects?',
    answer: 'We operate on bespoke consulting scopes ranging from fast-track feasibility studies (4–6 weeks) to comprehensive multi-phase market entry, formulation rationalisation, or M&A advisory engagements. Every project is led by senior industry veterans with deep operational and technical backgrounds.'
  },
  {
    question: 'What is RecykLube and how can lubricant blenders or OEMs participate?',
    answer: 'RecykLube is Rosefield’s flagship circular economy initiative. It provides an end-to-end framework connecting used oil generators (dealerships, manufacturing plants) with licensed, audited re-refiners. Blenders and OEMs can leverage the platform to guarantee 100% genuine, digital audit-ready EPR fulfillment while reducing Scope 3 emissions.'
  },
  {
    question: 'How can our company access Rosefield’s market intelligence reports?',
    answer: 'Our syndicated research reports and intelligence briefs are available for corporate purchase or direct enterprise enquiry. We also undertake custom commissioned studies tailored to specific client geographies, product segments, or transaction due diligence requirements.'
  },
  {
    question: 'Can we partner with or sponsor Rosefield’s industry conferences and summits?',
    answer: 'Yes. Rosefield’s knowledge platforms offer structured corporate sponsorship, speaker opportunities, exhibition booths, and custom boardroom roundtables for technology providers, base oil producers, and service leaders looking to connect with C-level decision-makers.'
  },
  {
    question: 'Does Rosefield assist with EPR registration and central portal compliance audits?',
    answer: 'Yes. We provide complete advisory and hands-on operational support for statutory EPR registration on the CPCB portal, obligation forecasting, collection network structuring, and physical-to-digital audit verification.'
  }
];

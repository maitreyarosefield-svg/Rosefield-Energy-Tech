import { ServiceVertical, IndustrySector, NewsItem, BlogPost, GalleryItem, EventItem, RecykLubeStep, TrustStat } from '../types';
import summitPhoto from '../assets/images/gallery_lubricants_summit_1795365286288.jpg';
import plantPhoto from '../assets/images/gallery_rerefining_plant_1795365286705.jpg';
import labPhoto from '../assets/images/gallery_oil_lab_testing_1795365287315.jpg';
import logisticsPhoto from '../assets/images/gallery_recyklube_logistics_1795365288314.jpg';
import evFluidPhoto from '../assets/images/blog_ev_thermal_fluid_1795365288600.jpg';
import eprFulfillmentPhoto from '../assets/images/service_epr_fulfillment_1795461139622.jpg';
import trainingCertPhoto from '../assets/images/service_training_cert_1795461139614.jpg';

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
    id: 'epr-fulfillment',
    number: '01',
    title: 'EPR Fulfillment',
    tagline: 'End-to-end Extended Producer Responsibility planning, credit procurement, and statutory filing.',
    description: 'Comprehensive EPR compliance management for lubricant producers, importers, and brand owners under CPCB Used Oil regulations. We structure target quantification, verified recycler partnerships, digital credit reconciliation, and audit-ready regulatory submissions.',
    iconName: 'ShieldCheck',
    image: eprFulfillmentPhoto,
    highlights: [
      'Target Quantification',
      'Verified Recycler Partnerships',
      'Digital Credit Reconciliation',
      'Audit-Ready Submissions'
    ],
    capabilities: [
      'CPCB Portal Registration & Annual Return Filings',
      'Producer-Specific EPR Target Quantification & Forecasting',
      'Verified EPR Certificate Sourcing & Credit Reconciliation',
      'Multi-State Recycler Network Aggregation & Contracting',
      'Digital Chain-of-Custody & Mass-Balance Documentation',
      'Regulatory Compliance Audits & Penalty Mitigation'
    ],
    keyOutcomes: [
      '100% timely compliance with statutory EPR used oil mandates',
      'Transparent, trace-verified EPR certificate procurement',
      'Zero regulatory friction across state and central pollution boards'
    ],
    targetAudience: [
      'Lubricant Producers & Marketers',
      'Base Oil & Finished Lube Importers',
      'Automotive & Industrial OEMs',
      'Corporate Sustainability & Legal Leads'
    ],
    caseSnippet: 'Delivered full-cycle EPR fulfillment and verified credit reconciliation across 14 Indian states for a leading synthetic lubricant marketer.',
    ctaText: 'Explore EPR Fulfillment'
  },
  {
    id: 'used-oil-rrbo',
    number: '02',
    title: 'Used Oil Collection & RRBO Enablement',
    tagline: 'Structuring organized reverse logistics and high-grade Re-Refined Base Oil (RRBO) supply chains.',
    description: 'We bridge the gap between fragmented used oil generation hubs and authorized re-refining facilities. Our enablement framework establishes compliant collection networks, quality-assured feedstock aggregation, and commercial RRBO offtake agreements for lubricant blenders.',
    iconName: 'Droplets',
    image: plantPhoto,
    highlights: [
      'Compliant Collection Networks',
      'Quality-Assured Feedstock',
      'Authorized Re-Refining Linkages',
      'Commercial RRBO Offtake'
    ],
    capabilities: [
      'Authorized Collection Partner Onboarding & Route Design',
      'Bulk Generator Aggregation (Workshops, Fleets, Industrial Plants)',
      'Used Oil Feedstock Quality Screening & Moisture Control',
      'RRBO Offtake Structuring Between Re-Refiners & Blenders',
      'Formulation Integration & Group II-Equivalent Blending Support',
      'Closed-Loop Reverse Logistics & Container Tracking'
    ],
    keyOutcomes: [
      'Consistent, contaminant-controlled used oil feedstock streams',
      'Bankable RRBO supply-demand linkage for circular lubricant blending',
      'Formalisation of informal collection channels into compliant networks'
    ],
    targetAudience: [
      'Authorized Used Oil Re-Refiners',
      'Lubricant Blenders Adopting RRBO',
      'Fleet Operators & Service Aggregators',
      'Authorized Waste Oil Collectors'
    ],
    caseSnippet: 'Enabled a closed-loop collection and RRBO offtake corridor aggregating over 4.2 million litres annually for industrial re-refining.',
    ctaText: 'Explore Collection & RRBO'
  },
  {
    id: 'training-certification',
    number: '03',
    title: 'Training & Professional Certification',
    tagline: 'Specialised technical masterclasses, EPR compliance workshops, and industry credentials.',
    description: 'Targeted capacity-building programs engineered for lubricant technologists, plant managers, environmental officers, and commercial teams. Our structured courses and certification tracks build hands-on mastery in formulation, tribology, used oil testing, and circular governance.',
    iconName: 'GraduationCap',
    image: trainingCertPhoto,
    highlights: [
      'Formulation & Tribology Mastery',
      'Used Oil Testing Protocols',
      'Circular Governance Tracks',
      'Professional Certification'
    ],
    capabilities: [
      'EPR Compliance & CPCB Portal Execution Workshops',
      'Lubricant Formulation, Additive Chemistry & Tribology Modules',
      'Re-Refining Process Engineering & Quality Control Training',
      'Bulk Generator Hazardous Waste Handling Certification',
      'In-House Corporate Technical Upskilling Programs',
      'Executive Masterclasses on EV Fluids & Bio-Lubricants'
    ],
    keyOutcomes: [
      'Certified operational readiness for compliance and plant teams',
      'Reduced formulation errors and improved lab testing proficiency',
      'Standardized SOP adoption across distributed dealer and workshop networks'
    ],
    targetAudience: [
      'Blending Plant Engineers & QC Chemists',
      'EHS & Regulatory Compliance Officers',
      'Re-Refining Technical Operators',
      'B2B Technical Sales & OEM Support Teams'
    ],
    caseSnippet: 'Trained and certified over 320 plant chemists, compliance officers, and service network leads across regional technical bootcamps.',
    ctaText: 'Explore Training Programs'
  },
  {
    id: 'technical-audits',
    number: '04',
    title: 'Technical Audits & Compliant',
    tagline: 'Independent plant assessments, lab QA/QC verification, and environmental compliance audits.',
    description: 'Rigorous third-party technical and statutory audits for blending plants, used oil re-refineries, and storage depots. We evaluate process efficiency, feedstock mass balance, laboratory accreditation readiness, and environmental safeguards to ensure bankable operational compliance.',
    iconName: 'ClipboardCheck',
    image: labPhoto,
    highlights: [
      'Process Efficiency Reviews',
      'Feedstock Mass Balance',
      'Lab Accreditation Readiness',
      'Environmental Safeguards'
    ],
    capabilities: [
      'Re-Refining Plant Technical Capacity & Mass-Balance Audits',
      'Lubricant Blending Plant SOP & Quality Assurance Reviews',
      'Hazardous Waste Storage, Manifest & Safety Audits',
      'Pre-Onboarding Vendor & Recycler Qualification Inspections',
      'Laboratory Instrumentation & ASTM Testing Readiness Checks',
      'Gap Analysis & Corrective Action Roadmap Implementation'
    ],
    keyOutcomes: [
      'Verified, audit-grade assurance before onboarding recycling partners',
      'Identified yield improvements and process energy savings in refineries',
      'Full readiness for statutory inspections and OEM vendor approvals'
    ],
    targetAudience: [
      'Producers Vetting Recycling Partners',
      'Used Oil Re-Refining & Blending Facilities',
      'Private Equity & M&A Technical Diligence Teams',
      'Industrial ESG & Risk Committees'
    ],
    caseSnippet: 'Completed independent mass-balance and environmental compliance audits across 28 authorised re-refining facilities nationwide.',
    ctaText: 'Explore Technical Audits'
  },
  {
    id: 'circular-economy',
    number: '05',
    title: 'Circular Economy',
    tagline: 'Strategic decarbonisation, Scope 3 reduction, and circular transition roadmaps for energy.',
    description: 'We help lubricant, chemical, and industrial enterprises transition from linear resource consumption to regenerative circular models. Our advisory integrates lifecycle assessment, RRBO incorporation strategies, packaging circularity, and corporate ESG alignment.',
    iconName: 'RefreshCw',
    image: evFluidPhoto,
    highlights: [
      'Lifecycle Assessment',
      'RRBO Incorporation Strategy',
      'Packaging Circularity',
      'Corporate ESG Alignment'
    ],
    capabilities: [
      'Corporate Circular Economy Strategy & Transition Roadmaps',
      'Scope 3 Carbon Abatement & Lifecycle Assessment (LCA) Modelling',
      'Circular Packaging & Drum/IBC Reconditioning Frameworks',
      'Closed-Loop Industrial Fluid Management Programs',
      'Policy Advocacy & Regulatory Working Group Representation',
      'ESG Reporting Metrics & Circularity Benchmarking'
    ],
    keyOutcomes: [
      'Measurable Scope 3 GHG reductions aligned with net-zero pledges',
      'Commercialised circular product lines with verified sustainability claims',
      'Long-term raw material resilience via secondary base oil adoption'
    ],
    targetAudience: [
      'Chief Sustainability Officers (CSOs)',
      'Global Energy & Lubricant Brand Owners',
      'Heavy Manufacturing & Mining Enterprises',
      'Institutional Policy & Industry Associations'
    ],
    caseSnippet: 'Structured a multi-year circularity roadmap for a regional lubricant leader, targeting 25% RRBO content across industrial SKUs by 2028.',
    ctaText: 'Explore Circular Economy'
  },
  {
    id: 'r3t',
    number: '06',
    title: 'R3T',
    tagline: 'Recover, Re-refine, Reuse & Trace — our flagship digital and operational circular ecosystem.',
    description: 'R3T powers transparent circularity across the used oil value chain through structured recovery, advanced re-refining linkages, compliant reuse, and end-to-end digital traceability. Designed to connect generators, collectors, re-refiners, and obligated producers on a single accountable framework.',
    iconName: 'RotateCw',
    image: logisticsPhoto,
    highlights: [
      'Structured Recovery',
      'Advanced Re-Refining Linkages',
      'Compliant RRBO Reuse',
      'End-to-End Digital Traceability'
    ],
    capabilities: [
      'End-to-End Digital Used Oil Manifest & Batch Traceability',
      'Recover: Geo-Tagged Pickup Scheduling from Bulk Generators',
      'Re-refine: Quality-Tracked Feedstock Routing to Vetted Refineries',
      'Reuse: Certified RRBO Re-Integration into Commercial Lubricants',
      'Trace: Immutable Audit Trail for CPCB & ESG Verification',
      'Real-Time Credit Allocation & Stakeholder Analytics Dashboard'
    ],
    keyOutcomes: [
      'Elimination of informal leakage and unverified paper trails',
      'Single-pane visibility from point of drain to re-refined base oil',
      'Seamless synchronization between physical oil recovery and EPR credits'
    ],
    targetAudience: [
      'EPR Obligated Producers & Brand Owners',
      'Authorized Collection & Re-Refining Partners',
      'Automotive Dealership & Fleet Chains',
      'Enterprise ESG Auditors'
    ],
    caseSnippet: 'Tracked 14M+ litres across connected R3T recovery corridors, delivering verified traceability from service bays to re-refined output.',
    ctaText: 'Explore R3T Platform'
  },
  {
    id: 'ce-events',
    number: '07',
    title: 'CE Events',
    tagline: 'Premier Circular Economy summits, policy roundtables, and cross-industry leadership forums.',
    description: 'We conceive and execute dedicated Circular Economy (CE) conferences, regulator-industry dialogues, and technology showcases for the lubricants, fuels, and resource recovery sectors. Our events unite policymakers, OEMs, recyclers, and technology innovators to drive market action.',
    iconName: 'Calendar',
    image: summitPhoto,
    highlights: [
      'Circular Economy Conferences',
      'Regulator-Industry Dialogues',
      'Technology Showcases',
      'OEM & Recycler Convening'
    ],
    capabilities: [
      'Flagship Circular Economy & Used Oil Conclaves',
      'Regulator-Industry Policy Roundtables & Working Sessions',
      'Re-Refining Technology & Equipment Exhibitions',
      'Structured B2B Matchmaking for Feedstock & EPR Partnerships',
      'Executive Awards Recognising Circular Excellence',
      'Co-Branded Knowledge Symposia & Panel Curation'
    ],
    keyOutcomes: [
      'Direct engagement with regulators, OEMs, and C-suite decision-makers',
      'High-intent commercial partnerships for technology and EPR alliances',
      'Authoritative thought-leadership positioning across APAC & Middle East'
    ],
    targetAudience: [
      'CEOs, Managing Directors & Policy Leaders',
      'Re-Refining Technology & Licensing Providers',
      'Lubricant Blenders, Collectors & Recyclers',
      'Industry Associations & Institutional Sponsors'
    ],
    caseSnippet: 'Convened 450+ delegates and 35+ expert speakers at our flagship circular lubricants forum, catalysing multi-party EPR and technology MoUs.',
    ctaText: 'Explore CE Events'
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

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-epr-2026-enforcement',
    title: 'Central Pollution Control Board Tightens Digital QR-Manifest Compliance for Used Oil Importers',
    category: 'Regulatory & EPR',
    date: 'November 14, 2026',
    location: 'New Delhi, India',
    readTime: '4 min read',
    source: 'Rosefield Regulatory Desk',
    summary: 'Updated statutory directives mandate real-time batch-level QR verification between authorized collection hubs and hydro-treating re-refiners ahead of FY 2026-27 EPR reconciliation.',
    body: [
      'Regulatory authorities have formally notified stricter digital provenance rules governing Extended Producer Responsibility (EPR) certificate generation across the Indian finished lubricants and base oil import ecosystem.',
      'Under the revised compliance protocol, every consignment of collected used lubricating oil destined for re-refining must record custody transfers via timestamped digital manifests before EPR credits can be minted on the central portal.',
      'Rosefield Energy Tech’s RecykLube compliance desk notes that early-adopting blenders and OEM workshop networks already utilizing verified closed-loop pipelines face zero disruption, while spot-market traders must audit recycler chain-of-custody documentation prior to annual filings.'
    ],
    keyPoints: [
      'Mandatory QR-coded batch traceability from authorized workshop collection through refinery gate intake.',
      'Quarterly reconciliation checkpoints instituted for lubricant brand owners and base oil importers.',
      'Verified hydro-treated Group II+ re-refined base oil (RRBO) volumes qualify for priority EPR credit issuance.'
    ],
    image: logisticsPhoto,
    featured: true
  },
  {
    id: 'news-gcc-group-iii-capacity',
    title: 'Middle East Group III Mega-Refinery Expansion Reshapes APAC Base Oil Freight Spreads',
    category: 'Base Oils & Refining',
    date: 'November 06, 2026',
    location: 'Mumbai & Fujairah',
    readTime: '5 min read',
    source: 'Rosefield Market Wire',
    summary: 'Fresh hydro-cracked Group III capacity coming online in the Gulf Cooperation Council is easing regional viscosity index 120+ tightness and shifting South Asian import parities.',
    body: [
      'New high-viscosity-index Group III base stock trains entering commercial export service in the Middle East are recalibrating import economics for South and Southeast Asian lubricant blenders.',
      'Spot FOB spreads between Group II N150 and Group III 4 cSt grades have narrowed by roughly $65 per metric ton over the past two quarters, prompting independent blenders to revisit synthetic and semi-synthetic passenger car motor oil formulations.',
      'Procurement teams evaluating 2027 annual term contracts are increasingly pairing GCC Group III cargoes with domestically re-refined Group II+ volumes to balance performance specs with EPR obligations.'
    ],
    keyPoints: [
      'Narrowing Group II to Group III price differentials encourage wider adoption of 0W-20 and 5W-30 formulations.',
      'Container and parcel-tanker freight stability restores quarterly predictability for Indian port-based blenders.',
      'Group I brightstock continues in structural deficit, driving heavy Group II substitution in industrial gear oils.'
    ],
    image: plantPhoto
  },
  {
    id: 'news-recyklube-oem-milestone',
    title: 'RecykLube Crosses 14 Million Liters in Audited Closed-Loop Used Oil Traceability',
    category: 'Circular Economy',
    date: 'October 28, 2026',
    location: 'Pune & Chennai Corridors',
    readTime: '3 min read',
    source: 'RecykLube Press Office',
    summary: 'Rosefield’s flagship circular initiative expands authorized dealership pickup coverage across 18 industrial clusters, linking Tier-1 workshops directly with licensed hydro-treaters.',
    body: [
      'RecykLube, the circular used oil ecosystem architected by Rosefield Energy Tech, has surpassed 14 million liters of digitally verified spent lubricant recovery across Western and Southern India.',
      'The milestone reflects rapid onboarding of franchised automotive service bays and fleet depots seeking zero-leakage hazardous waste compliance alongside transparent Scope 3 carbon abatement reporting.',
      'Recovered feedstocks are routed exclusively to modern vacuum-distillation and hydro-finishing re-refineries, returning Group II+ base oil back into closed-loop industrial and automotive blending.'
    ],
    keyPoints: [
      '18 major automotive and industrial corridors connected under unified digital weighbridge and lab QA logs.',
      'Over 9,400 metric tons of CO2-equivalent emissions avoided compared to virgin crude refining and informal burning.',
      'Turnkey audit dossiers prepared automatically for OEM ESG and CPCB EPR submissions.'
    ],
    image: labPhoto
  },
  {
    id: 'news-ev-immersion-cooling-standard',
    title: 'OEM Consortium Advances Dielectric Thermal Fluid Specifications for Next-Gen EV Axles',
    category: 'EV & Biofuels',
    date: 'October 19, 2026',
    location: 'Bengaluru, India',
    readTime: '4 min read',
    source: 'Rosefield Technical Desk',
    summary: 'Two-wheeler and commercial EV manufacturers align on ultra-low-viscosity dielectric fluid benchmarks emphasizing copper passivation and thermal conductivity.',
    body: [
      'Leading electric powertrain developers and specialty additive suppliers have published updated testing benchmarks for direct-cooled e-axle and battery immersion fluids tailored to tropical ambient operating conditions.',
      'Unlike legacy automatic transmission fluids, next-generation EV thermal fluids must sustain dielectric breakdown voltages above 40 kV while preventing copper winding corrosion under high-frequency inverter loads.',
      'Rosefield’s formulation advisory unit is currently assisting regional blenders with base fluid selection across ultra-light Group III, PAO, and bio-ester blends.'
    ],
    keyPoints: [
      'Direct stator-oil cooling demands kinematic viscosities below 3.5 cSt at 100°C without sacrificing flash point.',
      'Synthetic ester co-base stocks show superior thermal transfer and elastomer compatibility.',
      'Dedicated commercial EV e-fluid testing rigs commissioned across Western India R&D hubs.'
    ],
    image: evFluidPhoto
  },
  {
    id: 'news-mumbai-summit-2026-recap',
    title: 'India Lubricants & Base Oils Leadership Summit Draws 500+ Industry Executives in Mumbai',
    category: 'Industry Deals',
    date: 'October 17, 2026',
    location: 'The St. Regis, Mumbai',
    readTime: '4 min read',
    source: 'Rosefield Convening Desk',
    summary: 'Senior leaders from national oil companies, global additive majors, and re-refining pioneers concluded two days of strategic deal-making and policy dialogue.',
    body: [
      'Hosted by Rosefield Energy Tech in Mumbai, the 2026 India Lubricants & Base Oils Leadership Summit convened more than 500 executives across refining, blending, additive chemistry, and circular waste recovery.',
      'Keynote sessions focused on aligning commercial base oil procurement with India’s mandatory EPR trajectory, scaling domestic hydro-treating re-refinery investments, and preparing formulation labs for BS-VI Phase II and hybrid-electric powertrains.',
      'Multiple bilateral off-take memorandums connecting re-refined base oil producers with national lubricant marketers were initiated during the executive roundtable sessions.'
    ],
    keyPoints: [
      'Over 40 keynote speakers and technical panelists across 8 plenary and breakout forums.',
      'Dedicated RecykLube Deal Room facilitated direct RRBO off-take introductions.',
      '2027 edition dates and APAC partner tracks announced for Q4 next year.'
    ],
    image: summitPhoto
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'blog-dielectric-ev-fluids',
    title: 'Beyond Engine Protection: Why Dielectric Thermal Fluids Are Redefining Lubricant Formulation',
    category: 'Formulation & Chemistry',
    date: 'November 18, 2026',
    readTime: '7 min read',
    excerpt: 'As electric drivetrains integrate e-motors, reduction gears, and power electronics into unified housings, the lubricant must evolve from a mechanical barrier into an active thermal and electrical medium.',
    pullQuote: 'In an oil-cooled e-axle, the fluid no longer just separates sliding steel surfaces—it cools high-voltage copper windings while maintaining complete electrical insulation.',
    body: [
      'For over a century, automotive lubricant chemistry revolved around managing combustion byproducts: soot dispersion, acid neutralization, and piston-ring wear protection under extreme cylinder temperatures.',
      'Electrification completely inverts that chemical mandate. Inside modern integrated electric drive units, a single low-viscosity fluid frequently cools the copper stator windings, lubricates high-speed reduction gears spinning past 18,000 RPM, and dissipates heat from inverter busbars.',
      'Formulators face a sharp multi-variable trade-off. Lowering viscosity improves pumping efficiency and convective heat transfer, yet gears still demand reliable film strength and anti-scuffing extreme-pressure performance without triggering corrosive copper sulfidation.',
      'At Rosefield Energy Tech, our technical advisory engagements show that successful blenders are pairing ultra-low-viscosity Group III+ or PAO base stocks with tailored ester co-solvents and ashless copper passivators—building differentiated specialty fluid portfolios well ahead of mass fleet electrification.'
    ],
    takeaways: [
      'Dielectric breakdown stability (>40 kV) and low electrical conductivity remain non-negotiable across moisture-aged fluids.',
      'Ashless additive packages are essential to protect yellow metals and polymer wire enamels inside e-motors.',
      'Early specification partnerships with domestic two-wheeler and commercial EV OEMs offer the highest margin capture.'
    ],
    author: {
      name: 'Dr. Alok Verma',
      role: 'Head of Technical Research, Rosefield Energy Tech'
    },
    image: evFluidPhoto,
    featured: true
  },
  {
    id: 'blog-re-refining-economics',
    title: 'Hydro-Treating vs. Legacy Acid-Clay: The Economics of Modern Re-Refined Base Oil (RRBO)',
    category: 'Circularity & EPR',
    date: 'November 02, 2026',
    readTime: '8 min read',
    excerpt: 'Why modern thin-film vacuum distillation and catalytic hydro-finishing plants are turning circular used oil from a compliance cost into a Group II+ parity profit center.',
    pullQuote: 'Circularity only scales when re-refined base oil competes on molecular quality and refinery economics—not regulatory sympathy alone.',
    body: [
      'For decades, used oil recycling carried a stigma among tier-one lubricant blenders. Legacy acid-clay and simple distillation facilities produced dark, unstable base stocks prone to rapid oxidation and inconsistent viscosity.',
      'Modern re-refining engineering has fundamentally changed that equation. Multi-stage wiped-film evaporation combined with high-pressure catalytic hydro-treating strips out degraded polymers, heavy metals, chlorine, and polycyclic aromatics, yielding water-clear Group II and Group II+ base oils.',
      'In laboratory bench comparisons conducted across our partner network, hydro-treated RRBO SN 150 consistently matches virgin Group II benchmarks in saturates content (>95%), sulfur levels (<10 ppm), and RPVOT oxidation life.',
      'Combined with India’s statutory EPR framework, blenders who establish long-term off-take agreements with hydro-treating re-refiners simultaneously secure lower-carbon base stocks, stabilize domestic supply, and satisfy regulatory quotas in one integrated loop.'
    ],
    takeaways: [
      'Hydro-treated RRBO achieves >95% saturates and parity oxidation stability with virgin Group II base stocks.',
      'Feedstock aggregation consistency—solved through networks like RecykLube—is the single largest driver of plant yield.',
      'Co-investing in or contracting hydro-treated RRBO hedges blenders against imported crude and freight volatility.'
    ],
    author: {
      name: 'Maitrey Rosefield',
      role: 'Lead Strategic Advisor, Rosefield Energy Tech'
    },
    image: plantPhoto
  },
  {
    id: 'blog-blending-margins-2027',
    title: 'Formulation Value Engineering: Protecting Blender Margins Amid Group I Brightstock Tightness',
    category: 'Market Strategy',
    date: 'October 21, 2026',
    readTime: '6 min read',
    excerpt: 'Practical portfolio optimization strategies for independent lubricant blenders navigating structural Group I closures and shifting port-level base stock spreads.',
    pullQuote: 'A 3% formulation optimization across high-volume industrial grades often outperforms a full year of aggressive price discounting in the aftermarket.',
    body: [
      'Continued rationalization of legacy Group I solvent-refining capacity across Europe and Northeast Asia has left heavy brightstock in persistent global deficit, pushing up formulation costs for industrial gear, marine, and heavy-duty grease manufacturers.',
      'Rather than passing volatile surcharges onto industrial customers, leading blenders are running structured value-engineering audits across their SKU catalogs.',
      'By re-balancing heavy Group II 500N/600N blends with high-molecular-weight viscosity modifiers and targeted naphthenic or PIB co-components, blenders can reduce brightstock dependency by 30% to 50% without compromising FZG gear load stage performance.',
      'Simultaneously, consolidating overlapping regional SKUs frees working capital tied up in tankage and additive inventory—allowing mid-sized blenders to defend gross margins while elevating OEM approval coverage.'
    ],
    takeaways: [
      'Audit top 20 industrial SKUs for Group I brightstock replacement using heavy Group II + polymer architectures.',
      'Align quarterly base oil procurement with forward freight and regional port inventory trackers.',
      'Rationalize slow-moving pack sizes and duplicate viscosity grades to unlock tankage capacity.'
    ],
    author: {
      name: 'Rosefield Strategy Practice',
      role: 'Commercial & M&A Advisory Group'
    },
    image: labPhoto
  },
  {
    id: 'blog-cbg-industrial-fuels',
    title: 'From Furnace Oil to Compressed Bio-Gas: Navigating Industrial Thermal Decarbonisation',
    category: 'Energy Transition',
    date: 'October 09, 2026',
    readTime: '6 min read',
    excerpt: 'How manufacturing clusters in Western and Southern India are structuring bankable biofuel and CBG supply agreements to cut Scope 1 boiler emissions.',
    pullQuote: 'Industrial fuel switching succeeds when feedstock security and index-linked pricing parity are engineered before the first burner retrofit.',
    body: [
      'While passenger mobility captures most clean-energy headlines, industrial process heat accounts for a massive share of commercial hydrocarbon demand across textiles, food processing, pharmaceuticals, and metal fabrication.',
      'Tightening urban air-quality mandates restricting furnace oil and petcoke have accelerated corporate interest in Compressed Bio-Gas (CBG) and industrial biodiesel blends.',
      'Yet transitioning plant boilers requires more than equipment retrofits: procurement directors must verify year-round agricultural residue feedstock resilience, calorific value consistency, and long-term price indexation against LDO and natural gas benchmarks.',
      'Rosefield’s Energy Practice advises industrial buyers and bio-energy developers on structuring take-or-pay off-take contracts that balance carbon reduction targets with predictable plant operating economics.'
    ],
    takeaways: [
      'Dual-fuel burner flexibility protects plant uptime during seasonal agricultural feedstock transitions.',
      'Long-term CBG off-take contracts benefit from transparent indexation caps against benchmark industrial fuels.',
      'Verified biofuel adoption delivers immediate Scope 1 emissions reductions for global export-oriented manufacturers.'
    ],
    author: {
      name: 'Energy Practice Group',
      role: 'Rosefield Energy Tech'
    },
    image: logisticsPhoto
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-mumbai-summit-plenary',
    figNumber: 'Fig. 01',
    title: 'India Lubricants & Base Oils Leadership Summit — Keynote Panel',
    category: 'Summits & Forums',
    date: 'October 2026',
    location: 'The St. Regis, Mumbai',
    caption: 'Fig. 01 · Executive plenary dialogue on base oil supply chains and circular mandates',
    description: 'Over 500 delegates from oil marketing companies, global base oil producers, additive specialists, and re-refiners convened in Mumbai for Rosefield’s annual flagship leadership summit.',
    image: summitPhoto,
    aspect: 'wide'
  },
  {
    id: 'gal-hydrotreating-columns',
    figNumber: 'Fig. 02',
    title: 'Modern Vacuum Distillation & Hydro-Finishing Re-Refinery',
    category: 'Refining & Lab',
    date: 'September 2026',
    location: 'Western Industrial Corridor, Gujarat',
    caption: 'Fig. 02 · High-yield Group II+ re-refining columns operating at golden hour',
    description: 'Partner re-refining infrastructure utilizing wiped-film distillation and catalytic hydro-treating to convert verified used oil into virgin-parity Group II+ base stocks.',
    image: plantPhoto,
    aspect: 'standard'
  },
  {
    id: 'gal-formulation-viscometry',
    figNumber: 'Fig. 03',
    title: 'Base Stock Quality & Kinematic Viscosity Benchmarking Lab',
    category: 'Refining & Lab',
    date: 'August 2026',
    location: 'Navi Mumbai Technical Center',
    caption: 'Fig. 03 · Comparative oxidation and viscometric profiling of Group II and RRBO samples',
    description: 'Independent laboratory validation verifying color stability, Noack volatility, saturates content, and RPVOT oxidation resistance across virgin and re-refined base oil batches.',
    image: labPhoto,
    aspect: 'standard'
  },
  {
    id: 'gal-recyklube-collection-bay',
    figNumber: 'Fig. 04',
    title: 'RecykLube Authorized Service Hub & Sealed IBC Aggregation',
    category: 'RecykLube Operations',
    date: 'October 2026',
    location: 'Pune Automotive Cluster',
    caption: 'Fig. 04 · QR-manifested used oil storage and zero-spill collection bay',
    description: 'Standardized sealed stainless IBC totes and barcoded drum aggregation at a Tier-1 dealership service bay integrated into the RecykLube EPR traceability network.',
    image: logisticsPhoto,
    aspect: 'standard'
  },
  {
    id: 'gal-ev-dielectric-fluid',
    figNumber: 'Fig. 05',
    title: 'Direct-Cooled EV Stator & Dielectric Fluid Flow Study',
    category: 'Technical & EV',
    date: 'November 2026',
    location: 'Bengaluru Drivetrain Lab',
    caption: 'Fig. 05 · Thermal dissipation and copper compatibility testing for e-axle fluids',
    description: 'Studio and bench documentation examining ultra-low-viscosity dielectric thermal fluids engineered for high-voltage electric vehicle motor windings.',
    image: evFluidPhoto,
    aspect: 'wide'
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

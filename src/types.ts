export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'industries'
  | 'recyklube'
  | 'insights'
  | 'events'
  | 'sustainability'
  | 'contact';

export type ServiceVerticalId = 
  | 'events-platforms'
  | 'strategic-consultancy'
  | 'circular-epr'
  | 'market-intelligence';

export interface ServiceVertical {
  id: ServiceVerticalId;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  keyOutcomes: string[];
  targetAudience: string[];
  caseSnippet?: string;
  ctaText: string;
}

export type IndustryId = 
  | 'lubricants'
  | 'fuels-energy'
  | 'circular-economy'
  | 'used-oil'
  | 'epr-sustainability'
  | 'industrial-automotive';

export interface IndustrySector {
  id: IndustryId;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyStakeholders: string[];
  industryChallenges: string[];
  rosefieldSolutions: string[];
  metrics?: { label: string; value: string };
}

export type InsightCategory = 
  | 'All'
  | 'Lubricants'
  | 'Base Oils'
  | 'Fuels & Energy'
  | 'Circular Economy'
  | 'Used Oil & EPR'
  | 'Market Intelligence'
  | 'Regulatory Updates';

export type InsightFormat = 'Report' | 'Intelligence Brief' | 'Article' | 'Case Study' | 'Regulatory Flash';

export interface InsightItem {
  id: string;
  title: string;
  slug: string;
  category: InsightCategory;
  format: InsightFormat;
  date: string;
  readTime: string;
  summary: string;
  author: {
    name: string;
    role: string;
  };
  tableOfContents?: string[];
  keyTakeaways?: string[];
  downloadable?: boolean;
  pagesCount?: number;
  featured?: boolean;
  fullContent?: string;
}

export interface EventItem {
  id: string;
  title: string;
  theme: string;
  date: string;
  location: string;
  type: 'Summit' | 'Conference' | 'Roundtable' | 'Masterclass';
  status: 'Upcoming' | 'Past' | 'Registration Open';
  description: string;
  keyThemes: string[];
  speakers: {
    name: string;
    designation: string;
    organization: string;
  }[];
  partners: string[];
  delegatesCount?: string;
  daysDuration?: string;
  featured?: boolean;
}

export interface RecykLubeStep {
  step: string;
  title: string;
  role: string;
  description: string;
  metrics: string;
  keyFeatures: string[];
}

export interface TrustStat {
  label: string;
  value: string;
  subtext: string;
}

export interface B2BEnquiryForm {
  name: string;
  designation: string;
  company: string;
  industry: string;
  email: string;
  phone: string;
  country: string;
  areaOfInterest: string;
  message: string;
  newsletterOptIn: boolean;
}

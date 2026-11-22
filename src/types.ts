export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'recyklube'
  | 'news'
  | 'blogs'
  | 'gallery'
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

export type NewsCategory =
  | 'All'
  | 'Regulatory & EPR'
  | 'Base Oils & Refining'
  | 'Circular Economy'
  | 'EV & Biofuels'
  | 'Industry Deals';

export interface NewsItem {
  id: string;
  title: string;
  category: Exclude<NewsCategory, 'All'>;
  date: string;
  location: string;
  readTime: string;
  source: string;
  summary: string;
  body: string[];
  keyPoints: string[];
  image: string;
  featured?: boolean;
}

export type BlogCategory =
  | 'All'
  | 'Formulation & Chemistry'
  | 'Circularity & EPR'
  | 'Market Strategy'
  | 'Energy Transition';

export interface BlogPost {
  id: string;
  title: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  excerpt: string;
  pullQuote: string;
  body: string[];
  takeaways: string[];
  author: {
    name: string;
    role: string;
  };
  image: string;
  featured?: boolean;
}

export type GalleryCategory =
  | 'All'
  | 'Summits & Forums'
  | 'Refining & Lab'
  | 'RecykLube Operations'
  | 'Technical & EV';

export interface GalleryItem {
  id: string;
  figNumber: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  date: string;
  location: string;
  caption: string;
  description: string;
  image: string;
  aspect?: 'wide' | 'standard';
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

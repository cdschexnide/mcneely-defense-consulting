// Service related types
export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  rate: string;
  icon: string;
  features?: string[];
}

// Core competency types
export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Differentiator types
export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Company information types
export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  legalStructure: string;
  naicsCodes: string[];
  registeredIn: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceInterest: string;
  projectDescription: string;
  budgetTimeline: string;
}

// Pricing information types
export interface PricingDetail {
  category: string;
  items: PricingItem[];
}

export interface PricingItem {
  label: string;
  value: string;
  note?: string;
}

// Resource/Download types
export interface Resource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
}

// Navigation types
export interface NavLink {
  label: string;
  path: string;
}

// Team member types
export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photoUrl?: string;
  email: string;
}

// Trust indicator types
export interface TrustIndicator {
  label: string;
  icon: string;
}

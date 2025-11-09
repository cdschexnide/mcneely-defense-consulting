import { CompanyInfo, TeamMember, Resource, NavLink } from "../types";

export const companyInfo: CompanyInfo = {
  name: "McNeely Defense Consulting LLC",
  tagline: "UAV Integration • GNSS Protection • Field Operations",
  email: "dakota@mcneelydefense.com",
  phone: "(832) 338-4625",
  location: "Southeast Texas, USA",
  website: "mcneelydefense.com",
  legalStructure: "Limited Liability Company (LLC)",
  naicsCodes: [
    "541330 (Engineering Services)",
    "541715 (R&D in Physical, Engineering, and Life Sciences)",
    "541690 (Other Scientific & Technical Consulting Services)",
  ],
  registeredIn: "State of Texas",
};

export const teamMember: TeamMember = {
  name: "Dakota LARUE McNeely",
  title: "Founder",
  bio: `Dakota LARUE McNeely brings extensive hands-on experience in UAV integration, GNSS protection systems, and field operations support for defense technology programs. With a proven track record supporting Tier-1 prime contractors and field deployments across North America and allied partner nations, Dakota specializes in vendor-agnostic solutions that deliver test-proven performance under challenging conditions.

His expertise spans full-stack UAV platform design, anti-jamming system integration, spectrum testing, and mission-critical field validation. Dakota's deep understanding of DoD program structures, export controls, and defense integration workflows enables him to provide rapid, effective solutions for complex technical challenges.

Whether conducting live flight testing under GPS-denied conditions, troubleshooting signal interference issues, or advising program managers on TRL advancement strategies, Dakota combines technical precision with practical field experience to support critical defense technology initiatives.`,
  email: "dakota@mcneelydefense.com",
};

export const resources: Resource[] = [
  {
    id: "capability-statement",
    title: "McNeely Defense Consulting Capability Statement",
    description:
      "Detailed overview of core competencies, differentiators, past performance, and company information.",
    fileUrl: "/src/docs/McNeely Defense Consulting Capability Statement.pdf",
    fileSize: "519 KB",
    fileType: "PDF",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Resources", path: "/resources" },
];

export const footerLinks = {
  services: [
    { label: "UAV Integration", path: "/services#uav-integration" },
    { label: "GNSS Protection", path: "/services#gnss-protection" },
    { label: "Field Testing", path: "/services#field-testing" },
    { label: "Training", path: "/services#training" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Resources", path: "/resources" },
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};

export const pastPerformance = [
  "Led multiple UAV integration and GNSS protection projects for defense technology companies",
  "Supported field deployments across North America and allied partner nations",
  "Experience coordinating with Tier-1 primes, engineering teams, and field operators",
];

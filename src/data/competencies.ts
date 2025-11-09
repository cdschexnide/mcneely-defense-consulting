import { Competency, Differentiator, TrustIndicator } from '../types';

export const coreCompetencies: Competency[] = [
  {
    id: 'uav-systems',
    title: 'UAV Systems Integration',
    description: 'Full-stack platform design, wiring, and configuration for multirotor, fixed-wing, and hybrid UAVs',
    icon: 'Settings'
  },
  {
    id: 'gnss-resilience',
    title: 'GNSS Resilience Engineering',
    description: 'Anti-jamming system design, protected navigation integration, and spectrum testing',
    icon: 'Shield'
  },
  {
    id: 'field-validation',
    title: 'Field Test & Validation',
    description: 'End-to-end mission testing, log analysis, and flight-data reporting',
    icon: 'CheckCircle'
  },
  {
    id: 'training',
    title: 'Operator Training',
    description: 'Tailored instruction for pilots, engineers, and program managers',
    icon: 'Users'
  },
  {
    id: 'advisory',
    title: 'Technical Advisory',
    description: 'Architecture reviews, proposal support, and TRL advancement guidance',
    icon: 'Lightbulb'
  }
];

export const differentiators: Differentiator[] = [
  {
    id: 'field-expertise',
    title: 'Hands-on Field Expertise',
    description: 'Real-world experience integrating and flying UAVs across multiple environments',
    icon: 'Zap'
  },
  {
    id: 'vendor-agnostic',
    title: 'Vendor-Agnostic Solutions',
    description: 'Open support for Pixhawk, Cube, ArduPilot, PX4, and all major GNSS receivers',
    icon: 'Grid3x3'
  },
  {
    id: 'defense-fluency',
    title: 'Defense-Sector Fluency',
    description: 'Deep understanding of DoD program structures, export controls, and integration workflows',
    icon: 'Award'
  },
  {
    id: 'rapid-deployment',
    title: 'Rapid Deployment',
    description: 'On-site or remote support within days, not weeks',
    icon: 'Rocket'
  },
  {
    id: 'test-proven',
    title: 'Test-Proven Performance',
    description: 'Systems validated under live-jammed and GPS-denied conditions',
    icon: 'BadgeCheck'
  }
];

export const trustIndicators: TrustIndicator[] = [
  {
    label: 'CONUS/OCONUS Support',
    icon: 'Globe'
  },
  {
    label: 'Tier-1 Prime Experience',
    icon: 'Star'
  },
  {
    label: 'Rapid Deployment',
    icon: 'Clock'
  }
];

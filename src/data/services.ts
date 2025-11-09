import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'uav-integration',
    title: 'UAV System Integration',
    description: 'System design, hardware setup, wiring, tuning, and validation.',
    detailedDescription: `McNeely Defense Consulting provides complete UAV system integration — from hardware wiring and power management to flight-controller setup and telemetry calibration. We specialize in Pixhawk-based platforms, ArduPilot configuration, and multi-sensor payload integration (GNSS, optical flow, telemetry, radar, and companion computers).`,
    rate: '$175/hr or $1,200/day',
    icon: 'Drone',
    features: [
      'Wiring, UART/Bus mapping, and signal routing verification',
      'Flight controller parameter tuning and configuration export',
      'Power and EMI mitigation for payload interfaces',
      'Bench and flight validation of system performance',
      'Documentation packages and integration reports'
    ]
  },
  {
    id: 'gnss-protection',
    title: 'GNSS Protection & Navigation Consulting',
    description: 'Anti-jamming integration, spectrum testing, and multi-sensor fusion support.',
    detailedDescription: `We provide specialized consulting in GPS/GNSS anti-jamming, interference testing, and protected navigation architectures. Drawing from real-world field experience, we advise on resilient designs that integrate cleanly with modern autopilots and navigation systems.`,
    rate: '$200/hr or $1,400/day',
    icon: 'Satellite',
    features: [
      'Antenna placement and cable routing optimization',
      'Receiver and antenna integration for L1/L2/L5/G1 bands',
      'RF isolation and EMI testing',
      'Jammer characterization and spectrum recording analysis',
      'Field verification and performance reporting'
    ]
  },
  {
    id: 'field-testing',
    title: 'Field Testing & Validation',
    description: 'Flight testing, data collection, and post-mission analysis.',
    detailedDescription: `Our field engineers deliver end-to-end support for prototype, pre-production, and operational testing of unmanned systems. Services include flight verification, mission setup, and customer demonstrations in controlled or tactical environments.`,
    rate: '$1,500/day (+ travel)',
    icon: 'Target',
    features: [
      'Dynamic flight testing and performance validation',
      'Range setup and telemetry optimization',
      'On-site configuration adjustments and tuning',
      'Post-flight data review and analysis',
      'Operator instruction and safety briefings'
    ]
  },
  {
    id: 'training',
    title: 'Operator Training & Mission Support',
    description: 'UAV pilot instruction, GCS setup, and mission readiness.',
    detailedDescription: `We provide structured training for engineering and operator teams on UAV configuration, GNSS troubleshooting, and resilient navigation practices. Each session includes live demonstration, documentation, and knowledge transfer to customer personnel.`,
    rate: '$175/hr or $1,200/day',
    icon: 'GraduationCap',
    features: [
      'ArduPilot / Pixhawk setup and tuning',
      'GNSS troubleshooting and signal health monitoring',
      'Flight data logging and analysis techniques',
      'Hardware integration best practices',
      'Ground Control Station (GCS) configuration'
    ]
  },
  {
    id: 'technical-advisory',
    title: 'Technical Advisory & Program Support',
    description: 'System architecture review, documentation, proposal or TRL guidance.',
    detailedDescription: `We assist engineering and program management teams with system design reviews, TRL advancement, and proposal development.`,
    rate: '$150/hr',
    icon: 'FileText',
    features: [
      'Architecture and requirements analysis',
      'Risk mitigation planning and system readiness evaluation',
      'TRL mapping and technology insertion strategy',
      'Proposal input and documentation review for defense submissions',
      'Remote advisory and program guidance'
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting / Forensic Diagnostics',
    description: 'Root-cause analysis for signal interference, flight anomalies, or GNSS failures.',
    detailedDescription: `Expert analysis and resolution of complex technical issues affecting UAV performance and navigation systems.`,
    rate: '$175/hr',
    icon: 'Search',
    features: [
      'Flight log analysis and anomaly detection',
      'GNSS signal interference diagnosis',
      'Hardware failure root-cause investigation',
      'System performance degradation analysis',
      'Detailed diagnostic reporting and recommendations'
    ]
  }
];

export const pricingDetails = {
  travel: [
    { label: 'Travel Day Rate', value: '$650/day', note: 'full travel day, no field work' },
    { label: 'Mileage / Local Travel', value: 'IRS rate (currently $0.67/mi)' },
    { label: 'Flights / Lodging / Per Diem', value: 'Reimbursed at cost', note: 'DoD/GSA rates' },
    { label: 'Equipment Rentals', value: 'Billed separately', note: 'e.g., spectrum analyzer, test drone' }
  ],
  retainer: [
    { label: 'Monthly Retainer', value: '$3,000–$5,000/mo', note: 'advisory, remote support, docs' },
    { label: 'Fixed-Scope Contract', value: 'Quoted after intake review' },
    { label: 'DoD / Prime Subconsulting', value: 'Typically $140–$210/hr', note: 'by vehicle' }
  ],
  payment: [
    { label: 'Deposit', value: '50% required to reserve on-site consulting' },
    { label: 'Payment Terms', value: 'Net 15 for approved clients', note: 'otherwise payment due upon receipt' },
    { label: 'Late Payments', value: '+2% weekly', note: '>15 days' },
    { label: 'Travel Costs', value: 'Invoiced prior to mission' }
  ]
};

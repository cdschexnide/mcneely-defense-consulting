import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'uav-integration',
    title: 'UAV System Integration',
    description: 'System design, hardware setup, wiring, tuning, and validation.',
    detailedDescription: `McNeely Defense Consulting provides complete UAV system integration — from hardware wiring and power management to flight-controller setup and telemetry calibration. We specialize in Pixhawk-based platforms, ArduPilot configuration, and multi-sensor payload integration (GNSS, optical flow, telemetry, radar, and companion computers).`,
    rate: '',
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
    rate: '',
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
    rate: '',
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
    rate: '',
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
    rate: '',
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
    rate: '',
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

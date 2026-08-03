export const featuredProjects = [
  {
    title: 'Robotics Platform',
    industry: 'Robotics',
    description:
      'Embedded control and sensing platform for a mobile robotics prototype with real-time feedback and telemetry.',
    image: '/images/project-robotics.png',
    tags: ['STM32', 'ROS', 'Sensors'],
  },
  {
    title: 'Smart IoT Monitoring',
    industry: 'IoT',
    description:
      'Connected monitoring solution with sensor acquisition, MQTT communication and dashboard visibility.',
    image: '/images/project-iot.png',
    tags: ['ESP32', 'MQTT', 'Dashboard'],
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    title: 'PLC and HMI',
    industry: 'Automation',
    description:
      "Automated control solution with PLC-based I/O, panel wiring and real-time status monitoring.",
    image: '/images/project-plc-hmi.png',
    tags: ['PLC', 'HMI', 'Automation'],
  },
  {
    title: 'Industrial Automation Controller',
    industry: 'Industrial Automation',
    description:
      'Control electronics and interface design for machine automation and industrial monitoring.',
    image: '/images/project-automation.png',
    tags: ['PLC', 'SCADA', 'Control'],
  },
  {
    title: 'Academic / Final-Year Project Builds',
    industry: 'Education',
    description:
      'Custom electronics and firmware support for student and research-driven technical projects.',
    image: '/images/project-medical.png',
    tags: ['PIC', 'AVR', 'Arduino'],
  },
];

export const projectsFaqs = [
  {
    question: 'What are typical development timelines?',
    answer:
      'Simple prototypes move quickly, while larger automation or industrial systems require a more detailed development cycle and milestone planning.',
  },
  {
    question: 'Who owns the intellectual property?',
    answer: 'You own the project deliverables, and NDA support is available before technical discussions begin.',
  },
  {
    question: 'How many prototyping iterations are included?',
    answer:
      'The scope is planned based on the design complexity, so each project can include the board spins and validation steps needed to reach a reliable result.',
  },
  {
    question: 'How do you handle testing and validation?',
    answer:
      'We validate communication, reliability and functional performance during development and support deployment readiness.',
  },
  {
    question: 'What post-deployment support do you offer?',
    answer: 'We provide continued support for commissioning, troubleshooting and technical assistance after delivery.',
  },
];

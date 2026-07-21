import { Cpu, Wifi, Boxes, Code2, Factory, Car, Plane, HeartPulse, Zap, Bot, ShieldCheck, BadgeCheck, FlaskConical } from 'lucide-react';

export const homeStats = [
  { value: 6, suffix: '+', label: 'Projects delivered' },
  { value: 5, suffix: '+', label: 'Industries served' },
  { value: 24, suffix: ' hrs', label: 'Typical response' },
  { value: 100, suffix: '%', label: 'Support included' },
];

export const homeServices = [
  { icon: Factory, title: 'Industrial Automation', description: 'PLC, SCADA, HMI and control-panel systems for reliable machine and plant automation.' },
  { icon: Cpu, title: 'Embedded Systems', description: 'STM32, ESP32, PIC and AVR firmware for real-time products, prototyping and production builds.' },
  { icon: Wifi, title: 'IoT Solutions', description: 'Connected monitoring, wireless communication, MQTT/Modbus integration and web dashboards.' },
  { icon: Boxes, title: 'Automation & Robotics', description: 'Robotics platforms, motor-control electronics, RFID systems and EV/BMS-oriented hardware.' },
  { icon: Cpu, title: 'PCB Design', description: 'Custom schematics, PCB layout, bring-up and prototype development for production-ready hardware.' },
  { icon: Code2, title: 'Web Dashboards', description: 'Embedded-friendly dashboards and monitoring interfaces for field devices and industrial systems.' },
];

export const industries = [
  { icon: Factory, title: 'Education', description: 'Capstone electronics, final-year projects and research support for academic teams.' },
  { icon: Car, title: 'Industrial Automation', description: 'PLC and machine control solutions for factories and process plants.' },
  { icon: Plane, title: 'EV', description: 'Battery management, control electronics and embedded systems for electric mobility.' },
  { icon: HeartPulse, title: 'Smart Agriculture', description: 'Sensor-based monitoring and automation for field and greenhouse systems.' },
  { icon: Zap, title: 'IoT', description: 'Connected products with telemetry, wireless communication and cloud dashboards.' },
  { icon: Bot, title: 'Robotics', description: 'Motion control, embedded logic and test platforms for autonomous systems.' },
];

export const timeline = [
  { phase: 'Phase 01', title: 'Discovery', description: 'Requirements, constraints, and project goals are clarified before design begins.' },
  { phase: 'Phase 02', title: 'Design', description: 'Architecture, schematic capture, PCB layout and system reviews are prepared.' },
  { phase: 'Phase 03', title: 'Prototyping', description: 'Boards are assembled, tested and integrated with firmware and electronics.' },
  { phase: 'Phase 04', title: 'Testing', description: 'Functional, communication and reliability checks are completed before release.' },
  { phase: 'Phase 05', title: 'Deployment', description: 'Production support, commissioning and ongoing assistance are provided after delivery.' },
];

export const technologies = ['STM32', 'ESP32', 'PIC', 'AVR', 'Arduino', 'C/C++', 'FreeRTOS', 'UART', 'SPI', 'I2C', 'CAN', 'Modbus RTU/TCP', 'MQTT', 'Ethernet', 'PCB Design', 'HTML', 'CSS', 'JavaScript', 'PLC', 'E-PLAIN'];

export const trustedLogos = ['Nordic Diagnostics', 'Helix Robotics', 'Meridian Energy', 'Aeris Avionics', 'Kaizen Manufacturing', 'Volta Mobility'];

export const testimonials = [
  { quote: 'A dependable partner for turning ideas into working embedded hardware, firmware and automation systems.', name: 'Student and startup teams', role: 'Project partners', company: 'Academic & early-stage builds' },
  { quote: 'Fast-moving support for board bring-up, industrial communication, and control-system development.', name: 'Industrial clients', role: 'Engineering teams', company: 'Automation and control projects' },
  { quote: 'Practical engineering support from prototype through deployment, with clear communication and reliable delivery.', name: 'Research and product teams', role: 'Founders & leads', company: 'IoT and embedded initiatives' },
];

export const homeFaqs = [
  { question: 'What does a typical engagement look like?', answer: 'Most projects start with a discovery discussion to define the requirements, followed by design, prototyping, testing and deployment with clear milestones.' },
  { question: 'How long does a project take?', answer: 'Timeline depends on project complexity. Simple prototypes can move quickly, while larger automation or industrial systems may need a more detailed development cycle.' },
  { question: 'Do you work with academic and research partners?', answer: 'Yes. We regularly support students, universities and research teams with prototypes, embedded systems and technical development support.' },
  { question: 'Can you sign an NDA (Non-Disclosure Agreement) ?', answer: 'Yes. NDA (Non-Disclosure Agreement) support is available on request before detailed technical discussions begin.' },
];

export const quality = [
  { icon: ShieldCheck, title: 'Embedded Firmware', description: 'Firmware development for STM32, ESP32, PIC, AVR and Arduino-based platforms.' },
  { icon: FlaskConical, title: 'RTOS & Protocols', description: 'FreeRTOS, UART, SPI, I2C, CAN, Modbus and MQTT integration for robust communication.' },
  { icon: BadgeCheck, title: 'Industrial Automation', description: 'PLC programming, HMI development, panel design and commissioning support.' },
];

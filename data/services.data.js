import {
  Factory,
  Cpu,
  Wifi,
  Boxes,
  CircuitBoard,
  Code2,
  Binary,
  FlaskConical,
  Radio,
  Gauge,
  Waves,
  BatteryCharging,
  Activity,
  Server,
} from 'lucide-react';

export const services = [
  { icon: Factory, title: 'Industrial Automation', description: 'PLC programming, SCADA integration, HMI development, control panels and site commissioning.' },
  { icon: Cpu, title: 'Embedded Systems Design', description: 'STM32, ESP32, PIC and AVR firmware for real-time products and production builds.' },
  { icon: Wifi, title: 'IoT Solutions', description: 'Wireless communication, MQTT/Modbus integration, sensor interfacing and web dashboards.' },
  { icon: Boxes, title: 'Automation & Robotics', description: 'Robotics platforms, motor control electronics, RFID systems and EV/BMS-oriented hardware.' },
  { icon: CircuitBoard, title: 'PCB Design & Layout', description: 'Custom schematics, board bring-up and prototype development for production-ready hardware.' },
  { icon: Code2, title: 'Web Dashboards', description: 'Monitoring interfaces and embedded-friendly dashboards for field devices and automation systems.' },
  { icon: Binary, title: 'Embedded Firmware', description: 'RTOS-based development, protocol stacks and product firmware support.' },
  { icon: FlaskConical, title: 'Prototype Development', description: 'Rapid prototyping, testing, validation and deployment support for new concepts.' },
];

export const expertise = [
  { icon: Server, title: 'RTOS & Firmware', description: 'FreeRTOS, protocol handling and robust firmware architecture.' },
  { icon: Radio, title: 'Wireless Communication', description: 'ESP32, MQTT, Modbus, Ethernet and industrial communication stacks.' },
  { icon: Activity, title: 'Sensor Integration', description: 'Interfacing for industrial sensors, environmental monitoring and control systems.' },
  { icon: BatteryCharging, title: 'Power & EV Systems', description: 'BMS-related electronics and embedded control for electric mobility projects.' },
  { icon: Waves, title: 'Industrial Protocols', description: 'UART, SPI, I2C, CAN and PLC-oriented integration methods.' },
  { icon: Gauge, title: 'Web & Monitoring', description: 'Live dashboards and system visibility for connected products and automation.' },
];

export const engagementModels = [
  { phase: 'Model 01', title: 'Project-Based Delivery', description: 'Defined deliverables, milestone planning and clear technical scope.' },
  { phase: 'Model 02', title: 'Academic & Startup Support', description: 'Prototype support, proof-of-concept help and technical development assistance.' },
  { phase: 'Model 03', title: 'Technical Consulting', description: 'Design reviews, architecture guidance and implementation support.' },
  { phase: 'Model 04', title: 'Industrial Commissioning', description: 'On-site support, panel handling and automation deployment assistance.' },
];

export const servicesProcess = [
  { phase: 'Step 01', title: 'Discovery', description: 'Clarify goals, constraints, hardware needs and success criteria.' },
  { phase: 'Step 02', title: 'Design & Proposal', description: 'Plan architecture, components, timeline and implementation approach.' },
  { phase: 'Step 03', title: 'Development', description: 'Build firmware, hardware and control logic with regular reviews.' },
  { phase: 'Step 04', title: 'Testing & Validation', description: 'Verify communication, reliability and functional performance.' },
  { phase: 'Step 05', title: 'Deployment & Support', description: 'Commission, hand over and provide post-delivery support.' },
];

export const servicesStats = [
  { value: 24, suffix: ' hrs', label: 'Typical response time' },
  { value: 6, suffix: '+', label: 'Delivered projects' },
  { value: 1, suffix: '+', label: 'Industries supported' },
  { value: 100, suffix: '%', label: 'Support included' },
];

export const techPartners = ['STM32', 'ESP32', 'PIC', 'AVR', 'Arduino', 'PLC', 'SCADA', 'E-PLAIN'];

export const servicesFaqs = [
  { question: 'How do you price projects?', answer: 'Work is scoped based on the project complexity and deliverables, with transparent planning and milestone-based delivery.' },
  { question: 'How is intellectual property handled?', answer: 'Project deliverables are shared with you, and NDA support is available before detailed technical discussions.' },
  { question: 'Do you sign NDAs (Non-Disclosure Agreement) ?', answer: 'Yes. We can work with your NDA (Non-Disclosure Agreement) template or create a mutual agreement before technical discussions begin.' },
  { question: 'What technical capabilities do you cover?', answer: 'Embedded firmware, PCB design, IoT systems, industrial automation, robotics, web dashboards and prototype development.' },
];

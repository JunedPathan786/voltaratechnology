import { Cpu, ShieldCheck, Lightbulb, Workflow, Wifi, Bot, CircuitBoard } from 'lucide-react';

export const values = [
  { icon: Lightbulb, title: 'Ideas into prototypes', description: 'We turn early concepts into working electronics, firmware, and connected systems with clear engineering milestones.' },
  { icon: Workflow, title: 'Practical delivery', description: 'Every project is shaped around real-world constraints, manufacturability, testing, and long-term support.' },
  { icon: ShieldCheck, title: 'Hands-on support', description: 'From board bring-up to deployment, we stay close to the build so technical risks stay manageable.' },
];

export const capabilities = [
  { icon: Cpu, title: 'Embedded systems', description: 'Firmware, real-time control, and product-level hardware integration.' },
  { icon: Wifi, title: 'IoT products', description: 'Connected monitoring, wireless communication, and cloud-ready interfaces.' },
  { icon: Bot, title: 'Automation & robotics', description: 'Control electronics, sensing platforms, and intelligent machine behavior.' },
  { icon: CircuitBoard, title: 'Custom electronics', description: 'PCB design, prototyping, validation, and production support.' },
];

export const aboutProcess = [
  { phase: '01', title: 'Discover', description: 'We clarify the goal, constraints, users, and technical risks before a single wire is laid out.' },
  { phase: '02', title: 'Design', description: 'Architecture, schematics, PCB planning, and firmware strategy are defined with practical tradeoffs.' },
  { phase: '03', title: 'Prototype', description: 'We build, test, and refine the hardware and software until the system behaves like the intended product.' },
  { phase: '04', title: 'Deploy & support', description: 'After launch, we help with commissioning, debugging, iteration, and long-term technical continuity.' },
];

export const aboutStats = [
  { value: 6, suffix: '+', label: 'Projects delivered' },
  { value: 1, suffix: '+', label: 'Industries supported' },
  { value: 24, suffix: ' hrs', label: 'Typical response' },
  { value: 100, suffix: '%', label: 'Technical support included' },
];

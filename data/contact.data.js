import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const contactDetails = [
  { icon: Mail, label: "Email", value: "voltaratechnology@gmail.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 9146942904" },
  { icon: MapPin, label: "Office", value: "Pune, Maharashtra" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 9:00 AM – 7:00 PM" },
];

export const locations = [
  {
    city: "Pune, India",
    timezone: "IST",
    note: "Primary office & project coordination",
  },
  {
    city: "Remote Collaboration",
    timezone: "Flexible",
    note: "Firmware, hardware and automation support worldwide",
  },
];

export const contactFaqs = [
  {
    question: "How fast will you respond?",
    answer:
      "We typically respond within 24 hours and can arrange a technical discussion soon after your inquiry.",
  },
  {
    question: "What is your engagement process?",
    answer:
      "We start with a discovery discussion, then move into design, prototype development, testing and deployment support.",
  },
  {
    question: "Can you sign an NDA (Non-Disclosure Agreement)  first?",
    answer:
      "Yes. NDA (Non-Disclosure Agreement) support is available on request before detailed technical conversations begin.",
  },
  {
    question: "Do you work with students and startups?",
    answer:
      "Yes — we support academic projects, startup prototypes and industrial development work.",
  },
];

// // Coordinates for the Maharashtra , Pune office — used for the embedded map on /contact
// export const officeMap = {
//   address: 'Maharashtra , Pune, Maharashtra 411014',
//   embedSrc:
//     'https://maps.google.com/maps?q=Maharashtra %2C%20Pune%2C%20Maharashtra%20411014&t=&z=14&ie=UTF8&iwloc=&output=embed',
// };

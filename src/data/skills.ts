export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Web Interfaces",
    description: "Responsive pages and UI improvements for websites and web apps.",
    skills: ["Nuxt.js", "React + Next.js", "JavaScript + TypeScript", "Tailwind CSS + Bootstrap"],
  },
  {
    id: "ecommerce",
    index: "02",
    title: "Shopify & E-commerce",
    description: "Storefront themes, custom product pages, and responsive shopping experiences.",
    skills: ["Shopify", "Liquid", "JavaScript", "Figma"],
  },
  {
    id: "backend",
    index: "03",
    title: "Back-End & APIs",
    description: "Application features, data storage, and third-party service integration.",
    skills: ["PHP + Laravel", "MySQL + PostgreSQL", "Supabase", "Firebase Authentication", "Postman"],
  },
  {
    id: "automation",
    index: "04",
    title: "Automation & Chatbots",
    description: "Connected workflows and AI-powered conversations for everyday tasks.",
    skills: ["n8n", "OpenAI API", "Meta API", "Telegram Bot API", "Google Sheets API"],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Shopify Developer",
    org: "Freelance",
    period: "January 2026 – April 2026",
    summary:
      "Built and customized Shopify storefront themes for client projects, focusing on responsive layouts, performance, and the shopping experience. Worked directly with clients to tailor their storefronts to business needs.",
    tags: ["Shopify", "Tailwind CSS", "Figma", "Liquid", "JavaScript"],
  },
  {
    role: "Web Developer & AI Automation Specialist",
    org: "Tigernethost OPC",
    period: "June 2025 – December 2025",
    summary:
      "Continued part-time after my internship, building and maintaining website features. Used n8n to automate workflows and supported development of an AI-powered chatbot for the company’s Facebook page.",
    tags: ["n8n", "Telegram Chatbot", "Facebook RAG Chatbot", "Supabase", "MySQL", "Web Development", "Postman", "API Integration"],
  },
  {
    role: "Intern & Trainee",
    org: "Tigernethost OPC",
    period: "February 2025 – May 2025",
    summary:
      "Contributed to web projects using Nuxt.js, Laravel, Tailwind CSS, and Bootstrap. Worked on user interfaces, responsive layouts, and API integrations while developing practical web development skills.",
    tags: ["Nuxt.js", "Laravel", "Tailwind CSS", "Bootstrap", "API Integration", "Web Development", "Postman", "Git"],
  },
];

export type Service = {
  title: string;
  description: string;
  deliverable: string;
};

export const services: Service[] = [
  {
    title: "Responsive Web Development",
    description:
      "Build and refine website pages with responsive layouts, clear navigation, and practical application features.",
    deliverable: "RESPONSIVE PAGES",
  },
  {
    title: "Shopify Theme Customization",
    description:
      "Customize Liquid themes, product pages, and storefront sections to suit your brand and shopping experience.",
    deliverable: "CUSTOM STOREFRONTS",
  },
  {
    title: "API Integration",
    description:
      "Connect web applications to authentication, data storage, and third-party APIs using tools such as Laravel, Firebase, and Supabase.",
    deliverable: "CONNECTED SERVICES",
  },
  {
    title: "Workflow & Chatbot Automation",
    description:
      "Build n8n workflows that connect your tools and support AI-powered conversations on Facebook or Telegram.",
    deliverable: "N8N WORKFLOWS",
  },
];

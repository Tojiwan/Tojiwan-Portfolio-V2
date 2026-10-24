export type SkillGroup = {
  id         : string;
  title      : string;
  description: string;
  skills     : string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id         : "frontend",
    title      : "Frontend & UI",
    description: "Responsive pages and user interfaces for websites and web apps.",
    skills     : ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    id         : "frameworks",
    title      : "Frameworks & Animation",
    description: "Component-based apps with smooth, purposeful motion.",
    skills     : ["React", "Next.js", "Nuxt.js", "Motion (Framer Motion)"],
  },
  {
    id         : "backend",
    title      : "Backend & Data",
    description: "Application features, data storage, and service integration.",
    skills     : ["PHP", "Laravel", "MySQL", "Supabase"],
  },
  {
    id         : "shopify-automation",
    title      : "Shopify & Automation",
    description: "Storefront customization and connected automated workflows.",
    skills     : ["Shopify Liquid", "n8n", "Zapier"],
  },
  {
    id         : "tools",
    title      : "Development & Design Tools",
    description: "Daily workflow, testing, local development, and design handoff.",
    skills     : ["Git", "Postman", "Laravel Herd", "Docker", "Figma", "Canva", "ChatGPT", "OpenCode"],
  },
];

export type Experience = {
  role   : string;
  org    : string;
  period : string;
  summary: string;
  tags   : string[];
};

export const experience: Experience[] = [
  {
    role   : "Shopify Developer",
    org    : "Freelance",
    period : "January 2026 – April 2026",
    summary: 
      "Built and customized Shopify storefront themes for client projects, focusing on responsive layouts, performance, and the shopping experience. Worked directly with clients to tailor their storefronts to business needs.",
    tags: ["Shopify", "Tailwind CSS", "Figma", "Liquid", "JavaScript"],
  },
  {
    role   : "Web Developer & AI Automation Specialist",
    org    : "Tigernethost OPC",
    period : "June 2025 – December 2025",
    summary: 
      "Continued part-time after my internship, building and maintaining website features. Used n8n to automate workflows and supported development of an AI-powered chatbot for the company’s Facebook page.",
    tags: ["n8n", "Telegram Chatbot", "Facebook RAG Chatbot", "Supabase", "MySQL", "Web Development", "Postman", "API Integration"],
  },
  {
    role   : "Intern & Trainee",
    org    : "Tigernethost OPC",
    period : "February 2025 – May 2025",
    summary: 
      "Contributed to web projects using Nuxt.js, Laravel, Tailwind CSS, and Bootstrap. Worked on user interfaces, responsive layouts, and API integrations while developing practical web development skills.",
    tags: ["Nuxt.js", "Laravel", "Tailwind CSS", "Bootstrap", "API Integration", "Web Development", "Postman", "Git"],
  },
];

export type Service = {
  title      : string;
  description: string;
  deliverable: string;
};

export const services: Service[] = [
  {
    title      : "Responsive Web Development",
    description: 
      "Build and refine pages with responsive layouts, clear navigation, and practical features.",
    deliverable: "Responsive pages",
  },
  {
    title      : "Shopify Theme Customization",
    description: 
      "Adapt themes, product pages, and storefront sections to your brand.",
    deliverable: "Custom storefronts",
  },
  {
    title      : "API Integration",
    description: 
      "Connect your website to sign-in services, data storage, and third-party APIs.",
    deliverable: "Connected services",
  },
  {
    title      : "Workflow & Chatbot Automation",
    description: 
      "Build n8n workflows that connect your tools and support AI-powered conversations on Facebook or Telegram.",
    deliverable: "n8n workflows",
  },
];

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
    title: "Front-End Mastery",
    description: "Interfaces that stay fast and readable at any viewport.",
    skills: ["React + Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    id: "frameworks",
    index: "02",
    title: "Frameworks & APIs",
    description: "Typed contracts from database to UI.",
    skills: ["Node + Express", "REST + tRPC", "Prisma", "GraphQL basics"],
  },
  {
    id: "backend",
    index: "03",
    title: "Back-End & Architecture",
    description: "Small services with clear boundaries.",
    skills: ["Go + Python", "Postgres", "Redis", "Docker"],
  },
  {
    id: "devops",
    index: "04",
    title: "DevOps & Cloud Tooling",
    description: "Preview deploys and boring, reliable releases.",
    skills: ["Git + GitHub", "Vercel", "CI basics", "Observability"],
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
    role: "Intern & Trainee",
    org: "Tigernethost OPC",
    period: "February 2025 - May 2025",
    summary:
      'I have developed foundational skills in web development as an intern, working with programming languages such as Nuxt.js, Laravel, and CSS frameworks including Tailwind CSS and Bootstrap. I also have hands-on experience integrating APIs into web applications. These skills have strengthened my ability to build and maintain functional, user-friendly web systems.',
    tags: ["Nuxt.js", "Laravel", "Tailwind CSS", "Bootstrap", "API Integration", "Web Development", "Postman", "Git"],
  },
  {
    role: " Web Developer & AI Automation Specialist",
    org: "Tigernethost OPC",
    period: "June 2025 - December 2025  ",
    summary:
      'After completing my internship, I transitioned into a part-time role focused on Web development, where I built and maintained website features to improve user experience and ensure smooth performance. Alongside this, I used n8n to automate workflows and support the development of an AI-powered chatbot for the company’s Facebook page, helping deliver fast and responsive interactions for users.',
    tags: ["N8N", "Telegram Chatbot", "Facebook RAG Chatbot", "Supabase", "MySQL", "Web Development", "Postman", "API Integration"],
  },
  {
    role: "Shopify Developer",
    org: "Freelance",
    period: "January 2026 - April 2026",
    summary:
     'Worked on client-based projects building and customizing Shopify storefront themes, focusing on responsive design, performance, and smooth user experience. Pursued this role to strengthen my front-end development skills in a realworld setting, collaborate directly with clients, and deliver tailored e-commerce solutions based on business needs.',
    tags: ["Shopify", "Tailwind", "Figma", "Liquid", "JavaScript"],
  }
];

export type Service = {
  title: string;
  description: string;
  deliverable: string;
};

export const services: Service[] = [
  {
    title: "End-to-End Web Applications",
    description:
      "Marketing sites and dashboards from sketch to deploy, with clean routing and forms.",
    deliverable: "DELIVERY: 2–4 WEEKS",
  },
  {
    title: "High-Throughput APIs & Cloud Architecture",
    description:
      "Typed APIs with auth, caching, and preview environments wired to Vercel.",
    deliverable: "DELIVERY: SCOPED",
  },
  {
    title: "Interactive & Creative Frontend",
    description:
      "Motion, canvas, and shader accents that respect reduced-motion and performance.",
    deliverable: "DELIVERY: 1–2 WEEKS",
  },
  {
    title: "Technical Consulting & Audits",
    description:
      "Code walkthroughs and performance passes with a prioritized fix list.",
    deliverable: "DELIVERY: AUDIT DOC",
  },
];

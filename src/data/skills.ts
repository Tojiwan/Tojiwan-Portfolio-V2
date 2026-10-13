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
    role: "Lead Full-Stack Architect",
    org: "Novae Labs",
    period: "2022 — Present",
    summary:
      "Placeholder: own web platform architecture and mentor a small frontend group. Replace with real scope.",
    tags: ["Next.js", "Design systems", "Mentoring"],
  },
  {
    role: "Senior Software Engineer",
    org: "Syntra Cloud",
    period: "2019 — 2022",
    summary:
      "Placeholder: built ingestion dashboards and data views. Replace with verifiable work.",
    tags: ["React", "Node.js", "Postgres"],
  },
  {
    role: "Full-Stack Developer",
    org: "PixelForge Interactive",
    period: "2018 — 2019",
    summary:
      "Placeholder: client marketing sites and interactive UI. Replace with real projects.",
    tags: ["TypeScript", "Tailwind", "Motion"],
  },
  {
    role: "Software Engineering Intern",
    org: "Horizon Tech",
    period: "2017 — 2018",
    summary:
      "Placeholder: modularized services and wrote tests/docs. Replace with real internship scope.",
    tags: ["Python", "Docker", "Tests"],
  },
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

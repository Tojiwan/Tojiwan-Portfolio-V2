export type Project = {
  slug: string;
  file: string;
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  specs: Array<{ label: string; value: string }>;
  demoLabel: string;
};

export const projects: Project[] = [
  {
    slug: "nexusflow",
    file: "nexusflow_worker.go",
    title: "NexusFlow",
    category: "DISTRIBUTED SYSTEMS",
    status: "CONCEPT",
    description:
      "Background job engine with real-time dashboard. Queues, retries, and worker scaling in one deployable binary.",
    stack: ["Go", "React", "Redis", "Docker"],
    specs: [
      { label: "TYPE", value: "PERSONAL PROJECT" },
      { label: "FOCUS", value: "QUEUES + DASHBOARD" },
    ],
    demoLabel: "View System Architecture",
  },
  {
    slug: "aura-intelligence",
    file: "aura_search.py",
    title: "Aura Intelligence",
    category: "AI + SEARCH",
    status: "CONCEPT",
    description:
      "Semantic search studio with vector indexing pipeline. Upload docs, query by meaning, inspect matches.",
    stack: ["Python", "Next.js", "pgvector", "Tailwind"],
    specs: [
      { label: "TYPE", value: "PERSONAL PROJECT" },
      { label: "FOCUS", value: "RAG PLAYGROUND" },
    ],
    demoLabel: "View Vector Pipeline",
  },
  {
    slug: "pulsepay-global",
    file: "pulsepay_settlement.rs",
    title: "PulsePay Global",
    category: "FINTECH UI",
    status: "UI CONCEPT",
    description:
      "Multi-currency settlement dashboard. Ledger view, reconciliation states, and audit-friendly history.",
    stack: ["TypeScript", "Next.js", "Prisma", "Postgres"],
    specs: [
      { label: "TYPE", value: "FRONTEND CONCEPT" },
      { label: "FOCUS", value: "LEDGER UX" },
    ],
    demoLabel: "View Security Spec",
  },
  {
    slug: "hypecanvas",
    file: "hypercanvas_shader.glsl",
    title: "HypeCanvas",
    category: "CREATIVE DEV",
    status: "EXPERIMENT",
    description:
      "Interactive WebGL shader course landing. Live uniform playground with copy-paste GLSL snippets.",
    stack: ["Three.js", "GLSL", "React", "Motion"],
    specs: [
      { label: "TYPE", value: "EXPERIMENT" },
      { label: "FOCUS", value: "SHADERS + MOTION" },
    ],
    demoLabel: "View Shader Demo",
  },
];

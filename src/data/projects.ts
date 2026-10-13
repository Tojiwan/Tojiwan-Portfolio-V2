export type Project = {
  slug: string;
  file: string;
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  specs: Array<{ label: string; value: string }>;
};

export const projects: Project[] = [
  {
    slug: "shop-co-slug",
    file: "shop_co.liquid",
    title: "Shop.Co",
    category: "E-commerce Website",
    status: "Personal Project",
    description:
      "A modern fashion e-commerce website with bold typography and minimalist layouts. Shows product collections, bestsellers, dress styles, and testimonials in a clean, responsive desktop and mobile experience.",
    stack: ["Liquid", "Tailwind CSS", "JavaScript", "Swiper.js"],
    specs: [
      { label: "TYPE", value: "PERSONAL PROJECT" },
      { label: "FOCUS", value: "CUSTOM PRODUCT PAGE, CUSTOM UI, CUSTOM PRODUCT SLIDER" },
    ]
  },
  {
    slug: "n8n-slug",
    file: "n8n_chatbot.js",
    title: "Facebook RAG Chatbot",
    category: "AI + RAG AGENT",
    status: "Company Project",
    description:
      "An AI-powered chatbot and automation workflow for a company Facebook page that answers user questions and delivers fast helpful interactions using AI company information and automated replies consistently.",
    stack: ["JavaScript", "N8N Workflow", "Meta API", "Custom API", "Supabase", "Postgres", "OPENAI API"],
    specs: [
      { label: "TYPE", value: "PERSONAL PROJECT" },
      { label: "FOCUS", value: "AI INTEGRATION, RAG IMPLEMENTATION" },
    ]
  },
  {
    slug: "budget-tracker-slug",
    file: "n8n_chatbot.js",
    title: "Budget tracker using telegram bot and n8n",
    category: "AI + RAG AGENT",
    status: "Personal Project",
    description:
      "A personal budget tracker powered by Telegram and n8n, enabling users to log expenses, monitor spending, manage finances, and track their budgets through automated chat interactions and workflows.",
    stack: ["JavaScript", "N8N Workflow", "Telegram Bot", "Custom API", "Supabase", "Postgres", "OPENAI API", "Google Sheets API"],
    specs: [
      { label: "TYPE", value: "PERSONAL PROJECT" },
      { label: "FOCUS", value: "TELEGRAM INTEGRATION, N8N WORKFLOW" },
    ]
  },
  {
    slug: "one-pampanga-chatbot-slug",
    file: "n8n_chatbot.js",
    title: "One Pampanga RAG Chatbot",
    category: "WEB DEVELOPMENT + AI + RAG AGENT",
    status: "Company Project",
    description:
      "A business chatbot automation system built with Laravel, MySQL, n8n, and Tailwind CSS. When enabled, Laravel jobs use the n8n API to automatically create customized chatbot workflows based on business information, products, services, and other relevant data stored in MySQL. This streamlines chatbot setup and enables AI-powered customer interactions tailored to each business. The project has been discontinued for now and is expected to be further improved and developed by the company in the future.",
    stack: ["Laravel", "MySQL", "N8N Workflow", "Custom API", "OPENAI API", "Vanilla CSS"],
    specs: [
      { label: "TYPE", value: "Company Project" },
      { label: "FOCUS", value: "BUILDING A RAG CHATBOT FOR A LOCAL BUSINESS" },
    ]
  },
  {
    slug: "ramen-makimura-slug",
    file: "web_development.vue",
    title: "Ramen Makimura Website",
    category: "WEB DEVELOPMENT + UI",
    status: "Company Project",
    description:
      "My first major company project during my OJT, contributing to the Ramen Makimura restaurant website by refining the user interface, updating colors and typography, assisting with Firebase authentication, and improving page responsiveness across different screen sizes. This experience helped me strengthen my front-end development skills, gain a better understanding of authentication integration, and gain practical experience contributing to a real-world web project.",
    stack: ["Nuxt.js", "Tailwind CSS", "Firebase Authentication", "typeScript", "JavaScript"],
    specs: [
      { label: "TYPE", value: "Company Project" },
      { label: "FOCUS", value: "USER INTERFACE, RESPONSIVE DESIGN, FIREBASE AUTHENTICATION" },
    ]
  },
];

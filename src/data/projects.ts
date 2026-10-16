export type Project = {
  slug: string;
  file: string;
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  focus: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "shop-co-slug",
    file: "e_commerce_web.liquid",
    title: "Shop.Co",
    category: "E-commerce",
    status: "Personal Project",
    description:
      "A responsive fashion storefront with custom product pages, product sliders, and collection browsing. The layout brings together bestsellers, dress styles, and customer testimonials across desktop and mobile.",
    stack: ["Liquid", "Tailwind CSS", "JavaScript", "Swiper.js"],
    focus: "Custom product pages, UI, and product sliders",
  },
  {
    slug: "n8n-slug",
    file: "n8n_chatbot.js",
    title: "Facebook RAG Chatbot",
    category: "AI Chatbot",
    status: "Company Project",
    description:
      "An n8n workflow that answers questions on a company Facebook page using company information and AI-generated replies. It connects the Meta API, OpenAI, and Supabase to support automated conversations.",
    stack: ["JavaScript", "n8n", "Meta API", "Custom API", "Supabase", "PostgreSQL", "OpenAI API"],
    focus: "AI integration and RAG workflows",
  },
  {
    slug: "budget-tracker-slug",
    file: "n8n_chatbot.js",
    title: "Telegram Budget Tracker",
    category: "Workflow Automation",
    status: "Personal Project",
    description:
      "A personal budget tracker that logs expenses and monitors spending through Telegram conversations. n8n connects the bot with data storage and Google Sheets to automate the tracking workflow.",
    stack: ["JavaScript", "n8n", "Telegram Bot", "Custom API", "Supabase", "PostgreSQL", "OpenAI API", "Google Sheets API"],
    focus: "Telegram integration and n8n workflows",
  },
  {
    slug: "one-pampanga-chatbot-slug",
    file: "n8n_chatbot.js",
    title: "One Pampanga RAG Chatbot",
    category: "AI Chatbot",
    status: "Company Project",
    description:
      "Laravel jobs use MySQL business data and the n8n API to create customized chatbot workflows for local businesses. The company project is currently on hold.",
    stack: ["Laravel", "MySQL", "n8n", "Custom API", "OpenAI API", "Vanilla CSS"],
    focus: "Business-specific RAG chatbots",
  },
  {
    slug: "ramen-makimura-slug",
    file: "web_development.vue",
    title: "Ramen Makimura Website",
    category: "Web Development",
    status: "Company Project",
    description:
      "Contributed to this restaurant website during my internship. My work included UI refinements, color and typography updates, responsive layout improvements, and assistance with Firebase authentication.",
    stack: ["Nuxt.js", "Tailwind CSS", "Firebase Authentication", "TypeScript", "JavaScript"],
    focus: "UI updates, responsive layouts, and Firebase authentication",
  },
  {
    slug: "vehiserive-slug",
    file: "web_development.php",
    title: "Vehiserive",
    category: "Web Development",
    status: "Capstone Project",
    description:
      "A capstone web project built with PHP, MySQL, HTML, CSS, and JavaScript.",
    stack: ["PHP", "MySQL", "Vanilla CSS", "HTML", "JavaScript"],
    focus: "PHP web development",
  },
];

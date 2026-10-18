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
  demoUrl?: string;
  demoPassword?: string;
  designUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "shop-co-slug",
    file: "e_commerce_web.liquid",
    title: "Shop.Co",
    category: "E-commerce",
    status: "Personal Project",
    description:
      "A responsive Shopify storefront built from the “E-commerce Website Template (Freebie)” Figma design. I implemented the storefront using Liquid, Tailwind CSS, and JavaScript, with custom product pages, product sliders, and collection browsing.",
    stack: ["Liquid", "Tailwind CSS", "JavaScript", "Swiper.js"],
    focus: "Figma-to-Shopify implementation and responsive development",
    demoUrl: "https://shopco-9844.myshopify.com",
    demoPassword: "steusk",
    designUrl: "https://www.figma.com/design/IQvBFmtENrp2u4TvKWWb9e/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402",
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
    stack: ["PHP", "MySQL", "Vanilla CSS", "HTML", "JavaScript", "Hostinger"],
    focus: "PHP web development",
  },
];

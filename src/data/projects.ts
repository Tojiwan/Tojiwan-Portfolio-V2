export type ProjectScreenshot = {
  src   ?: string;
  title  : string;
  alt    : string;
  width  : number;
  height : number;
};

export type Project = {
  slug         : string;
  file         : string;
  title        : string;
  category     : string;
  status       : string;
  description  : string;
  stack        : string[];
  focus        : string;
  deliverables : string[];
  demoUrl     ?: string;
  demoPassword?: string;
  designUrl   ?: string;
  screenshots ?: ProjectScreenshot[];
};

  // Placeholder slots are explicit until the owner supplies real project captures.
export const placeholderScreenshots: ProjectScreenshot[] = [
  { title: "Overview placeholder", alt: "", width: 1200, height: 900 },
  { title: "Detail placeholder", alt: "", width: 1200, height: 900 },
  { title: "Mobile placeholder", alt: "", width: 900, height: 1200 },
];

export const projects: Project[] = [
  {
    slug        : "shop-co-slug",
    file        : "e_commerce_web.liquid",
    title       : "Shop.Co",
    focus       : "Figma-to-Shopify implementation and responsive development",
    deliverables: [
      "Figma-to-Shopify storefront implementation",
      "Custom product pages, sliders, and collection browsing",
      "Responsive layouts with Tailwind CSS",
    ],
    category   : "E-commerce",
    status     : "Personal Project",
    description: 
      "A responsive Shopify storefront built from the “E-commerce Website Template (Freebie)” Figma design. I implemented the storefront using Liquid, Tailwind CSS, and JavaScript, with custom product pages, product sliders, and collection browsing.",
    stack       : ["Liquid", "Tailwind CSS", "JavaScript", "Swiper.js"],
    demoUrl     : "https://shopco-9844.myshopify.com",
    demoPassword: "steusk",
    designUrl   : "https://www.figma.com/design/IQvBFmtENrp2u4TvKWWb9e/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402",
  },
  {
    slug        : "n8n-slug",
    file        : "facebook_rag.n8n",
    title       : "Facebook RAG Chatbot",
    focus       : "AI integration and RAG workflows",
    deliverables: [
      "Facebook page integration through the Meta API",
      "Company-information-based AI replies",
      "n8n workflow connecting OpenAI and Supabase",
    ],
    category   : "AI Chatbot",
    status     : "Company Project",
    description: 
      "An n8n workflow that answers questions on a company Facebook page using company information and AI-generated replies. It connects the Meta API, OpenAI, and Supabase to support automated conversations.",
    stack: ["JavaScript", "n8n", "Meta API", "Custom API", "Supabase", "PostgreSQL", "OpenAI API"],
  },
  {
    slug        : "budget-tracker-slug",
    file        : "budget_tracker.n8n",
    title       : "Telegram Budget Tracker",
    focus       : "Telegram integration and n8n workflows",
    deliverables: [
      "Expense logging through Telegram conversations",
      "Spending tracking with connected data storage",
      "Automated Google Sheets integration through n8n",
    ],
    category   : "Workflow Automation",
    status     : "Personal Project",
    description: 
      "A personal budget tracker that logs expenses and monitors spending through Telegram conversations. n8n connects the bot with data storage and Google Sheets to automate the tracking workflow.",
    stack: ["JavaScript", "n8n", "Telegram Bot", "Custom API", "Supabase", "PostgreSQL", "OpenAI API", "Google Sheets API"],
  },
  {
    slug        : "one-pampanga-chatbot-slug",
    file        : "pampanga_rag.php",
    title       : "One Pampanga RAG Chatbot",
    focus       : "Business-specific RAG chatbots",
    deliverables: [
      "Laravel jobs using MySQL business data",
      "n8n API integration for chatbot workflows",
      "Business-specific workflow customization",
    ],
    category   : "AI Chatbot",
    status     : "Company Project",
    description: 
      "Laravel jobs use MySQL business data and the n8n API to create customized chatbot workflows for local businesses. The company project is currently on hold.",
    stack: ["Laravel", "MySQL", "n8n", "Custom API", "OpenAI API", "Vanilla CSS"],
  },
  {
    slug        : "ramen-makimura-slug",
    file        : "restaurant_site.vue",
    title       : "Ramen Makimura Website",
    focus       : "UI updates, responsive layouts, and Firebase authentication",
    deliverables: [
      "Restaurant website UI refinements",
      "Color, typography, and responsive layout updates",
      "Assistance with Firebase authentication",
    ],
    category   : "Web Development",
    status     : "Company Project",
    description: 
      "Contributed to this restaurant website during my internship. My work included UI refinements, color and typography updates, responsive layout improvements, and assistance with Firebase authentication.",
    stack: ["Nuxt.js", "Tailwind CSS", "Firebase Authentication", "TypeScript", "JavaScript"],
  },
  {
    slug        : "vehiserive-slug",
    file        : "motor_pool_system.php",
    title       : "Vehiserive",
    focus       : "Vehicle requests, approvals, and scheduling",
    deliverables: [
      "Digital vehicle requests and travel orders",
      "Multi-level approvals and scheduling",
      "Trip tickets and role-based dashboards",
    ],
    category   : "Web Development",
    status     : "Capstone Project",
    description: 
      "A capstone Motor Pool Management System for DHVSU that digitizes vehicle requests and travel orders through multi-level approvals, scheduling, trip tickets, and role-based dashboards.",
    stack: ["PHP", "MySQL", "Vanilla CSS", "HTML", "JavaScript", "Hostinger"],
  },
  {
    slug        : "dental-clinic-management",
    file        : "dental_clinic.php",
    title       : "Dental Clinic Management System",
    focus       : "Multi-branch patient records, dental charting, and appointment management",
    deliverables: [
      "Patient profiles, diagnostic records, interactive dental charts, and treatment procedures",
      "Appointment scheduling, approval, rejection, and completion with patient accounts",
      "Digital consent forms, waivers, signatures, and branch administration with roles and permissions",
    ],
    category   : "Web Development",
    status     : "Web Application",
    description:
      "A web-based dental clinic management system for managing patients, appointments, and dental records across clinic branches. It brings interactive dental charting, digital forms, patient accounts, and dashboards with branch and timeframe filters into one application, aiming to replace paper records and manual appointment tracking.",
    stack: ["Laravel 12", "PHP", "Livewire", "Laravel Backpack", "MySQL"],
  },
];

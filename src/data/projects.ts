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
    screenshots: [
      { src: "/Shop.Co/hero-banner.png", title: "Storefront & hero", alt: "Shop.Co storefront with navigation, fashion hero, and brand strip", width: 1858, height: 932 },
      { src: "/Shop.Co/new-arrivals.png", title: "New arrivals", alt: "Shop.Co new arrivals product cards with ratings and prices", width: 1854, height: 930 },
      { src: "/Shop.Co/top-selling.png", title: "Top selling", alt: "Shop.Co top-selling products with view-product buttons", width: 1858, height: 930 },
      { src: "/Shop.Co/category-testimonials.png", title: "Styles & testimonials", alt: "Shop.Co dress-style categories and customer testimonial section", width: 1788, height: 841 },
      { src: "/Shop.Co/footer.png", title: "Newsletter & footer", alt: "Shop.Co newsletter signup and footer navigation", width: 1855, height: 930 },
    ],
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
    screenshots: [
      { src: "/Facebook-RAG-Agent/facebook-RAG-Chatbot.png", title: "Messenger AI workflow", alt: "n8n Facebook Messenger workflow with webhook routing, an AI agent, chat memory, and connected tools", width: 1874, height: 931 },
    ],
    focus       : "AI integration and RAG workflows",
    deliverables: [
      "Facebook page integration through the Meta API",
      "Company-information-based AI replies",
      "n8n workflow connecting OpenAI and Supabase",
    ],
    category   : "AI Chatbot",
    status     : "Company Project",
    description: 
      "Contributed to building an n8n workflow for a company Facebook page, helping connect the Meta API, OpenAI, and Supabase to support AI-generated replies based on company information.",
    stack: ["JavaScript", "n8n", "Meta API", "Custom API", "Supabase", "PostgreSQL", "OpenAI API"],
  },
  {
    slug        : "budget-tracker-slug",
    file        : "budget_tracker.n8n",
    title       : "Telegram Budget Tracker",
    screenshots: [
      { src: "/Telegram-Budget-Tracker/telegram-budget-tracker.png", title: "Budget tracking workflow", alt: "n8n Telegram workflow routing budget, spending, balance, and expense updates through Google Sheets and bot replies", width: 1875, height: 939 },
    ],
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
    screenshots: [
      { src: "/One-Pampanga-RAG-Chatbot/one-pampanga-bot.png", title: "One Pampanga chatbot workflow", alt: "n8n One Pampanga chatbot workflow connecting a webhook and AI agent to OpenAI, Postgres memory, Supabase vector storage, and messaging tools", width: 1875, height: 929 },
    ],
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
    screenshots: [
      { src: "/Ramen-Makimura/home-page.png", title: "Menu overview", alt: "Ramen Makimura menu with food categories and product cards", width: 1836, height: 863 },
      { src: "/Ramen-Makimura/branch-selection.png", title: "Branch & delivery", alt: "Branch and delivery dialog with pickup location, date, and time selection", width: 1843, height: 868 },
      { src: "/Ramen-Makimura/cart.png", title: "Cart preview", alt: "Shopping cart dropdown showing selected menu items", width: 1840, height: 867 },
      { src: "/Ramen-Makimura/cart-page.png", title: "Cart page", alt: "Cart page with item quantities, subtotal, and order button", width: 1839, height: 866 },
      { src: "/Ramen-Makimura/order-confirmation-page.png", title: "Order summary", alt: "Order summary table showing products, quantities, and prices", width: 1843, height: 873 },
      { src: "/Ramen-Makimura/payment-confirmation-page.png", title: "Checkout details", alt: "Checkout form beside the order total and item summary", width: 1840, height: 869 },
      { src: "/Ramen-Makimura/login-page.png", title: "Account login", alt: "Ramen Makimura sign-in form with email and password fields", width: 1855, height: 865 },
      { src: "/Ramen-Makimura/register-page.png", title: "Registration", alt: "Create-account form with email and password confirmation", width: 1855, height: 865 },
      { src: "/Ramen-Makimura/forgot-password.png", title: "Password recovery", alt: "Password recovery form for requesting a reset link", width: 1857, height: 832 },
    ],
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
    slug        : "vehiserve-slug",
    file        : "motor_pool_system.php",
    title       : "Vehiserve",
    screenshots: [
      { src: "/Vehiserve/home-page.png", title: "Motor pool overview", alt: "Vehiserve management overview with request actions and vehicle selection", width: 1864, height: 932 },
      { src: "/Vehiserve/calendar-page.png", title: "Vehicle calendar", alt: "Monthly vehicle calendar showing available dates", width: 1873, height: 929 },
      { src: "/Vehiserve/landing-page.png", title: "Landing page", alt: "Vehiserve Motor Pool Management System landing page with login entry", width: 1872, height: 931 },
      { src: "/Vehiserve/login-page.png", title: "Login", alt: "Vehiserve login form beside the system introduction", width: 1875, height: 928 },
    ],
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
    screenshots: [
      { src: "/Dental-Clinic/dashboard.png", title: "Patient dashboard", alt: "Dental clinic patient dashboard with profile details and appointment history", width: 1877, height: 935 },
      { src: "/Dental-Clinic/appointment-page.png", title: "Appointment calendar", alt: "Dental clinic monthly calendar with appointment statuses", width: 1877, height: 935 },
      { src: "/Dental-Clinic/appointment.png", title: "Create appointment", alt: "Create-appointment dialog with branch selection over the calendar", width: 1874, height: 926 },
      { src: "/Dental-Clinic/patient-diagnostic.png", title: "Diagnostic record", alt: "Patient diagnostic record form with dental and medical history fields", width: 1873, height: 932 },
      { src: "/Dental-Clinic/informed-consent.png", title: "Informed consent", alt: "Digital informed consent form for dental treatment", width: 1874, height: 932 },
      { src: "/Dental-Clinic/auth-waiver-form.png", title: "Authorization waiver", alt: "Dental procedure authorization waiver form", width: 1872, height: 933 },
      { src: "/Dental-Clinic/login-page.png", title: "Patient login", alt: "Dental clinic patient account login form", width: 1871, height: 938 },
    ],
    focus       : "Multi-branch patient records, dental charting, and appointment management",
    deliverables: [
      "Patient profiles, diagnostic records, interactive dental charts, and treatment procedures",
      "Appointment scheduling, approval, rejection, and completion with patient accounts",
      "Digital consent forms, waivers, signatures, and branch administration with roles and permissions",
    ],
    category   : "Web Development",
    status     : "Web Application",
    description:
      "Contributed to building a web-based dental clinic management system for patients, appointments, and dental records across multiple branches. Helped develop features including interactive dental charting, digital forms, patient accounts, and dashboards to support day-to-day clinic operations.",
    stack: ["Laravel 12", "PHP", "Livewire", "Laravel Backpack", "MySQL"],
  },
];

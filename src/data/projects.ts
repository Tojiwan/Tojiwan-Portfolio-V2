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
    slug        : "luminore-slug",
    file        : "e_commerce_web.liquid",
    title       : "Luminoré",
    screenshots: [
      { src: "/Luminore/Large Screen/hero-banner.png", title: "Desktop · Storefront & hero", alt: "Luminoré desktop storefront hero", width: 3062, height: 1758 },
      { src: "/Luminore/Large Screen/stacked-collections.png", title: "Desktop · Collections", alt: "Luminoré desktop stacked collections", width: 2800, height: 1608 },
      { src: "/Luminore/Large Screen/pdp-slider.png", title: "Desktop · Product slider", alt: "Luminoré desktop product slider", width: 2800, height: 1608 },
      { src: "/Luminore/Large Screen/editorial-1.png", title: "Desktop · Editorial 1", alt: "Luminoré desktop editorial showcase 1", width: 2800, height: 1608 },
      { src: "/Luminore/Large Screen/editorial-2.png", title: "Desktop · Editorial 2", alt: "Luminoré desktop editorial showcase 2", width: 3062, height: 1758 },
      { src: "/Luminore/Large Screen/editorial-3.png", title: "Desktop · Editorial 3", alt: "Luminoré desktop editorial showcase 3", width: 2800, height: 1608 },
      { src: "/Luminore/Large Screen/footer.png", title: "Desktop · Footer", alt: "Luminoré desktop footer", width: 3062, height: 1758 },
      { src: "/Luminore/Tablet Screen/header.png", title: "Tablet · Storefront", alt: "Luminoré tablet storefront header", width: 1172, height: 1798 },
      { src: "/Luminore/Tablet Screen/stacked-collections.png", title: "Tablet · Collections", alt: "Luminoré tablet stacked collections", width: 1172, height: 1798 },
      { src: "/Luminore/Tablet Screen/pdpslider-editorial.png", title: "Tablet · Products & editorial", alt: "Luminoré tablet product slider and editorial", width: 1172, height: 1798 },
      { src: "/Luminore/Tablet Screen/editorial.png", title: "Tablet · Editorial", alt: "Luminoré tablet editorial showcase", width: 1172, height: 1798 },
      { src: "/Luminore/Tablet Screen/footer.png", title: "Tablet · Footer", alt: "Luminoré tablet footer", width: 1172, height: 1798 },
      { src: "/Luminore/Mobile Screen/header.png", title: "Mobile · Storefront", alt: "Luminoré mobile storefront header", width: 880, height: 1792 },
      { src: "/Luminore/Mobile Screen/stacked-collections.png", title: "Mobile · Collections", alt: "Luminoré mobile stacked collections", width: 880, height: 1792 },
      { src: "/Luminore/Mobile Screen/pdp-sliders.png", title: "Mobile · Product sliders", alt: "Luminoré mobile product sliders", width: 880, height: 1792 },
      { src: "/Luminore/Mobile Screen/editorial-1.png", title: "Mobile · Editorial 1", alt: "Luminoré mobile editorial showcase 1", width: 880, height: 1792 },
      { src: "/Luminore/Mobile Screen/editorial-2.png", title: "Mobile · Editorial 2", alt: "Luminoré mobile editorial showcase 2", width: 880, height: 1792 },
      { src: "/Luminore/Mobile Screen/editorial-3.png", title: "Mobile · Editorial 3", alt: "Luminoré mobile editorial showcase 3", width: 880, height: 1792 },
      { src: "/Luminore/Mobile Screen/footer.png", title: "Mobile · Footer", alt: "Luminoré mobile footer", width: 880, height: 1792 },
    ],
    focus       : "Figma-to-Shopify implementation and responsive development",
    deliverables: [
      "Customized Shopify Dawn theme with a premium jewelry aesthetic",
      "Interactive product carousels using Swiper.js",
      "Curated collection layouts and editorial product showcases",
      "Brand storytelling and product spotlight sections"
    ],
    category   : "E-commerce",
    status     : "Personal Project",
    description: 
      "A custom Shopify storefront designed for Luminoré, a contemporary jewelry brand celebrating individuality and self-expression. Built on the Dawn theme using Liquid, Tailwind CSS, JavaScript, and Swiper.js, featuring elegant editorial layouts, interactive product sliders, curated jewelry collections, and immersive product showcases for a refined shopping experience.",
    stack       : ["Dawn Theme", "Liquid", "Tailwind CSS", "JavaScript", "Swiper.js"],
    demoUrl     : "https://luminore-jewelry.myshopify.com",
    demoPassword: "luminore"
  },
  {
    slug        : "shop-co-slug",
    file        : "e_commerce_web.liquid",
    title       : "Shop.Co",
    screenshots: [
      { src: "/Shop.Co/Desktop-1920x1080/header.png", title: "Desktop", alt: "Shop.Co storefront with navigation, fashion hero, and brand strip", width: 1858, height: 932 },
      { src: "/Shop.Co/Desktop-1920x1080/product-slider.png", title: "Desktop", alt: "Shop.Co new arrivals product cards with ratings and prices", width: 1858, height: 932 },
      { src: "/Shop.Co/Desktop-1920x1080/collections.png", title: "Desktop", alt: "Shop.Co top-selling collections with view-collection buttons", width: 1858, height: 932 },
      { src: "/Shop.Co/Desktop-1920x1080/review&newsletter.png", title: "Desktop", alt: "Shop.Co reviews and newsletter signup", width: 1858, height: 932 },
      { src: "/Shop.Co/Desktop-1920x1080/footer.png", title: "Desktop", alt: "Shop.Co footer with navigation and social links", width: 1858, height: 932 },
      
      { src: "/Shop.Co/tablet-screen-930x1291/header.png", title: "Tablet", alt: "Shop.Co header with navigation and brand strip", width: 930, height: 1291 },
      { src: "/Shop.Co/tablet-screen-930x1291/product-slider.png", title: "Tablet", alt: "Shop.Co new arrivals product cards with ratings and prices", width: 930, height: 1291 },
      { src: "/Shop.Co/tablet-screen-930x1291/collections.png", title: "Tablet", alt: "Shop.Co top-selling collections with view-collection buttons", width: 930, height: 1291 },
      { src: "/Shop.Co/tablet-screen-930x1291/footer&review.png", title: "Tablet", alt: "Shop.Co footer with navigation and social links", width: 930, height: 1291 },   
      
      { src: "/Shop.Co/mobile-screen-438x891/header.png", title: "Mobile", alt: "Shop.Co storefront with navigation, fashion hero, and brand strip", width: 438, height: 891 },
      { src: "/Shop.Co/mobile-screen-438x891/product-slider.png", title: "Mobile", alt: "Shop.Co new arrivals product cards with ratings and prices", width: 438, height: 891 },
      { src: "/Shop.Co/mobile-screen-438x891/collections.png", title: "Mobile", alt: "Shop.Co top-selling collections with view-collection buttons",width: 438, height: 891 },
      { src: "/Shop.Co/mobile-screen-438x891/reviews.png", title: "Mobile", alt: "Shop.Co reviews and newsletter signup", width: 438, height: 891 },
      { src: "/Shop.Co/mobile-screen-438x891/footer.png", title: "Mobile", alt: "Shop.Co footer with navigation and social links", width: 438, height: 891 },
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
    stack       : [ "Dawn Theme", "Liquid", "Tailwind CSS", "JavaScript", "Swiper.js"],
    demoUrl     : "https://shopco-9844.myshopify.com",
    demoPassword: "shopco",
    designUrl   : "https://www.figma.com/design/IQvBFmtENrp2u4TvKWWb9e/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402",
  },
  {
    slug       : "calle-cafe-qr-menu",
    file       : "calle_cafe_qr.tsx",
    title      : "Calle Café QR Menu", 
    screenshots: [
      { src: "/Calle Cafe/Macbook-Air.png", title: "Desktop · Matcha Drinks", alt: "Calle Café Desktop Matcha Drinks", width: 2772, height: 1592 },
      { src: "/Calle Cafe/Macbook-Air-Snacks.webp", title: "Desktop · Snacks", alt: "Calle Café Desktop Snacks", width: 2772, height: 1592 },
      { src: "/Calle Cafe/Macbook-Air-Weekend-Cocktail.webp", title: "Desktop · Weekend Cocktails", alt: "Calle Café Desktop Weekend Cocktails", width: 2772, height: 1592 },
      { src: "/Calle Cafe/iPad-PRO-11-Drinks.webp", title: "Tablet · Drinks", alt: "Calle Café tablet Drinks", width: 1280, height: 1774 },
      { src: "/Calle Cafe/iPad-PRO-11-Weekend-Cocktail.webp", title: "Tablet · Weekend Cocktails", alt: "Calle Café tablet Weekend Cocktails", width: 1280, height: 1774 },
      { src: "/Calle Cafe/iPhone-14-PRO-Snacks.webp", title: "Mobile · Snacks", alt: "Calle Café mobile Snacks", width: 802, height: 1634 },
      { src: "/Calle Cafe/iPhone-14-PRO-Weekend-Cocktail.webp", title: "Mobile · Weekend Cocktails", alt: "Calle Café mobile Weekend Cocktails", width: 802, height: 1634 },
      { src: "/Calle Cafe/calle-menu-qr.png", title: "QR Code", alt: "Calle Café QR Code", width: 1024, height: 1024 }
    ],
    focus       : "Mobile-first QR-based digital café menu",
    deliverables: [
      "QR-accessible digital menu optimized for mobile devices",
      "Interactive product sliders with categorized menu items",
      "Responsive interface with smooth animations and intuitive navigation",
    ],
    category   : "Web Development",
    status     : "Personal Project",
    description: 
      "Designed and developed a mobile-first digital menu for Calle Café, allowing customers to browse drinks, snacks, and weekend cocktails through a QR code. Features interactive product sliders, organized menu categories, and a responsive interface for a seamless browsing experience.",
    stack: [ "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Swiper.js", "Cloudflare Pages"],
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
      "Contributed to building a web-based dental clinic management system for patients, appointments, and dental records across multiple branches before the project was discontinued. Helped develop features including interactive dental charting, digital forms, patient accounts, and dashboards to support day-to-day clinic operations.",
    stack: ["Laravel 12", "PHP", "Livewire", "Laravel Backpack", "MySQL"],
  },
];

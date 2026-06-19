import heroWatch from "../assets/images/hero-watch.png";
import productS1 from "../assets/images/product-s1.png";
import productK1 from "../assets/images/product-k1.png";
import productH1 from "../assets/images/product-h1.png";
import productB1 from "../assets/images/product-b1.png";
import aboutBuilding from "../assets/images/about-building.png";
import solutionSport from "../assets/images/solution-sport.png";
import solutionFamily from "../assets/images/solution-family.png";
import solutionHealth from "../assets/images/solution-health.png";
import solutionBusiness from "../assets/images/solution-business.png";
import newsProduct from "../assets/images/news-product.png";
import newsInterface from "../assets/images/news-interface.png";
import newsHealth from "../assets/images/news-health.png";
import newsMeeting from "../assets/images/news-meeting.png";
import team1 from "../assets/images/member-xiejianfeng.jpg";
import team2 from "../assets/images/member-liweibiao.jpg";
import team3 from "../assets/images/member-ganshengqiang.jpg";
import team4 from "../assets/images/member-xuzeqing.jpg";
import team5 from "../assets/images/member-lishixing.jpg";
import team6 from "../assets/images/member-liuriran.jpg";
import team7 from "../assets/images/member-weizhengchang.jpg";
import team8 from "../assets/images/member-weifutao.jpg";

export const company = {
  name: "Yaolin Technology",
  englishName: "YAOLIN TECHNOLOGY",
  foundedYear: "2018",
  companyStage: "Wearable technology company with product R&D, channel expansion, and scenario-led market validation.",
  phone: "400-880-0618",
  email: "business@yaolintech.com",
  address: "Guilin Aerospace University, Qixing District, Guilin",
  companyIntro:
    "Founded in 2018, Yaolin Technology focuses on smartwatch and wearable technology development for fitness, child safety, senior care, and business efficiency scenarios. The company combines product design, low-power hardware integration, connected app experiences, and practical service support to build wearable solutions that are easier to present, trial, and deliver.",
  companyProfile: [
    "Built around smartwatch product development, wearable design, and scenario-based application planning.",
    "Serves fitness users, families, senior-care households, campus showcases, and regional channel partners.",
    "Connects R&D, product definition, market communication, and service follow-through through a cross-functional team.",
  ],
  companyHighlights: [
    { label: "Founded", value: "2018" },
    { label: "Base", value: "Guilin" },
    { label: "Focus", value: "Smart wearables" },
    { label: "Coverage", value: "4 key scenarios" },
  ],
  milestones: [
    {
      title: "Product and scenario expansion",
      text: "The lineup has gradually expanded across sports, child safety, senior wellness, and business productivity to support clearer market segmentation.",
    },
    {
      title: "Regional channel cooperation",
      text: "Channel collaboration in South China supports offline demos, user trials, and partner-oriented wearable presentations.",
    },
    {
      title: "Cross-functional delivery model",
      text: "Product, engineering, operations, and market roles work together to move from product concept to showcase-ready delivery.",
    },
    {
      title: "Seed-stage development momentum",
      text: "Recent startup progress includes funding support, product sampling, and experience-driven promotion planning.",
    },
  ],
  heroWatch,
  aboutBuilding,
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Trust", href: "#trust" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

export const productFeatures = [
  "Heart Rate Monitoring",
  "5ATM Water Resistance",
  "100+ Sport Modes",
  "Bluetooth Calling",
];

export const products = [
  {
    name: "Yaolin Sport Watch S1",
    category: "Smart Fitness",
    price: "From RMB 899",
    image: productS1,
    description: "Built for active users with multi-sport tracking, heart rate and SpO2 monitoring, and practical performance insights.",
    features: ["Heart Rate Monitoring", "100+ Sport Modes", "5ATM Water Resistance"],
  },
  {
    name: "Yaolin Kids Watch K1",
    category: "Child Safety",
    price: "From RMB 599",
    image: productK1,
    description: "Combines accurate positioning, two-way calling, and geofencing to support safer daily travel for children.",
    features: ["Precise Positioning", "Two-Way Calling", "Safety Geofence"],
  },
  {
    name: "Yaolin Health Watch H1",
    category: "Senior Care",
    price: "From RMB 799",
    image: productH1,
    description: "Designed for family care with heart rate tracking, blood pressure trend reference, and one-tap emergency help.",
    features: ["Heart Rate Monitoring", "Blood Pressure Trends", "One-Tap SOS"],
  },
  {
    name: "Yaolin Business Watch B1",
    category: "Business Lifestyle",
    price: "From RMB 1299",
    image: productB1,
    description: "Delivers message sync, schedule reminders, and Bluetooth calling for efficient work and travel routines.",
    features: ["Bluetooth Calling", "Message Alerts", "Schedule Management"],
  },
];

export const productSpecs = [
  {
    model: "S1 Pro",
    type: "Fitness Flagship Model",
    screen: "1.43-inch AMOLED display",
    battery: "12-day typical battery life",
    waterproof: "5ATM water resistance",
    sensors: "Heart rate / SpO2 / accelerometer / gyroscope",
    connection: "Bluetooth calling / app data sync",
    audience: "Fitness users, students, and health-conscious consumers",
  },
  {
    model: "K1 Max",
    type: "Kids Safety Tracking Model",
    screen: "1.4-inch HD color display",
    battery: "5-day typical battery life",
    waterproof: "IP68 daily water resistance",
    sensors: "GPS / BeiDou / Wi-Fi / base-station positioning",
    connection: "Family calling / safe zones / SOS alerts",
    audience: "Families with children and campus safety scenarios",
  },
  {
    model: "H1 Care",
    type: "Senior Wellness Companion",
    screen: "1.52-inch large-text display",
    battery: "10-day typical battery life",
    waterproof: "IP67 daily water resistance",
    sensors: "Heart rate / SpO2 / sleep / sedentary reminders",
    connection: "One-tap SOS / family reminders / health trends",
    audience: "Senior users and family care households",
  },
  {
    model: "B1 Elite",
    type: "Business Office Edition",
    screen: "1.39-inch AMOLED display",
    battery: "9-day typical battery life",
    waterproof: "5ATM water resistance",
    sensors: "Heart rate / stress / schedule / activity recognition",
    connection: "Bluetooth calling / message sync / calendar reminders",
    audience: "Office professionals, commuters, and business travelers",
  },
];

export const showcaseSteps = [
  {
    title: "Live workout data capture",
    text: "Track running, cycling, strength training, and more with clear performance metrics that support steady progress.",
    stat: "100+",
    label: "sport modes",
  },
  {
    title: "All-day wellness awareness",
    text: "Multi-sensor monitoring helps users follow heart rate, SpO2, and sleep patterns throughout the day.",
    stat: "24h",
    label: "continuous monitoring",
  },
  {
    title: "Child location safety alerts",
    text: "Positioning, voice calling, and geofence protection work together to keep families informed with less friction.",
    stat: "3s",
    label: "location refresh",
  },
  {
    title: "Efficient message sync for work",
    text: "Calls, notifications, and schedule reminders stay on the wrist so users can move through work and travel smoothly.",
    stat: "12d",
    label: "typical battery life",
  },
];

export const stats = [
  { value: "128K+", label: "devices shipped" },
  { value: "36+", label: "channel partners" },
  { value: "18", label: "R&D achievements" },
  { value: "4", label: "core use cases" },
];

export const advantages = [
  {
    title: "In-house development",
    text: "Our team keeps improving sensors, low-power hardware, and connected experiences through product-led engineering.",
  },
  {
    title: "Health algorithms",
    text: "Wellness insights are designed to be easy to understand, practical in daily use, and visually clear for users.",
  },
  {
    title: "Quality assurance",
    text: "Products are evaluated across structure, water resistance, endurance, and reliability before entering showcase delivery.",
  },
  {
    title: "Multi-scenario service",
    text: "We build wearable solutions for sport, children, senior care, and business use instead of a one-size-fits-all device.",
  },
];

export const trustItems = [
  {
    title: "ISO9001 quality workflow",
    text: "A structured process covers product definition, prototype testing, supply assessment, and shipment inspection for stable delivery.",
  },
  {
    title: "CE / RoHS compliance planning",
    text: "Certification preparation supports safety, EMC, and environmental requirements for international wearable product channels.",
  },
  {
    title: "Guilin campus innovation incubation",
    text: "Local university resources support prototype design, user research, and scenario-based presentations for the startup concept.",
  },
  {
    title: "South China hardware channel network",
    text: "Regional cooperation strengthens offline demonstrations, customer response, and service coverage across nearby markets.",
  },
];

export const partnerTags = [
  "Guilin Aerospace University",
  "South China channel partners",
  "Smart hardware supply chain",
  "Campus experience program",
  "Health algorithm lab",
  "After-sales service network",
];

export const appFeatures = [
  {
    title: "Health dashboard",
    text: "Daily health views combine heart rate, SpO2, sleep, stress, and workout trends into a readable visual summary.",
    metric: "24h",
    label: "continuous data",
  },
  {
    title: "Family care center",
    text: "Supports child positioning, safe zones, senior SOS alerts, and family reminders in one connected experience.",
    metric: "3s",
    label: "location refresh",
  },
  {
    title: "Training plans",
    text: "Weekly reports generated from running, cycling, and strength activities help users improve their training rhythm.",
    metric: "100+",
    label: "sport modes",
  },
  {
    title: "Device service hub",
    text: "Device pairing, firmware updates, warranty checks, and service records make the full product lifecycle easier to manage.",
    metric: "1 yr",
    label: "warranty support",
  },
];

export const faqs = [
  {
    question: "Who are Yaolin smart watches designed for?",
    answer: "The lineup covers fitness users, children, seniors, and business professionals. Different scenarios can be matched with S1 Pro, K1 Max, H1 Care, or B1 Elite.",
  },
  {
    question: "Can health data from the watch be used for medical diagnosis?",
    answer: "No. The device is intended for daily wellness reference and family care support. It should not be used as a basis for diagnosis or treatment.",
  },
  {
    question: "Do you support campus demos or channel partnerships?",
    answer: "Yes. The team supports campus showcases, regional channel cooperation, product trials, and presentation-oriented project collaboration.",
  },
  {
    question: "How are after-sales support and warranty handled?",
    answer: "Core hardware is covered by a one-year warranty, with support for online consultation, registration, accessories replacement, and regional service coordination.",
  },
];

export const securityItems = [
  {
    title: "Local protection for health data",
    text: "App-side account, device, and trend data are managed with layered access so sensitive information stays limited to approved service scenarios.",
  },
  {
    title: "Transparent device permissions",
    text: "Location, Bluetooth, notifications, and family sharing are activated by the user and can be disabled or unbound at any time.",
  },
  {
    title: "Trend reference only",
    text: "Heart rate, SpO2, sleep, and stress data support daily awareness and should not be treated as clinical or emergency evidence.",
  },
];

export const solutions = [
  {
    title: "Fitness and wellness solution",
    text: "For users focused on exercise and personal health management, with tracking, goal support, and trend analysis built in.",
    image: solutionSport,
  },
  {
    title: "Child safety solution",
    text: "Combines positioning, family communication, and safe-zone alerts to support everyday travel for children.",
    image: solutionFamily,
  },
  {
    title: "Senior care solution",
    text: "Centers on health trends, one-tap help, and dependable battery life to create a more reassuring family care experience.",
    image: solutionHealth,
  },
  {
    title: "Business productivity solution",
    text: "Brings calls, schedules, and reminders onto the wrist to help professionals stay organized throughout the day.",
    image: solutionBusiness,
  },
];

export const team = [
  { name: "Xie Jianfeng", role: "Founder / General Manager / CEO", intro: "Leads company strategy, business management, and long-term development planning.", avatar: team1 },
  { name: "Li Weibiao", role: "Operations Director / Deputy General Manager", intro: "Builds the operating system, cross-team coordination, and organizational management flow.", avatar: team2 },
  { name: "Gan Shengqiang", role: "Technical Director", intro: "Owns the technology roadmap, R&D delivery, and execution of product engineering decisions.", avatar: team3 },
  { name: "Xu Zeqing", role: "Product Director", intro: "Drives product planning, user experience thinking, and iteration priorities across the lineup.", avatar: team4 },
  { name: "Li Shixing", role: "Marketing Director", intro: "Leads brand communication, market strategy, and channel growth for the startup presentation.", avatar: team5 },
  { name: "Liu Ruiran", role: "Business Director / Sales Director", intro: "Handles business expansion, sales management, and partner-facing communication.", avatar: team6 },
  { name: "Wei Zhengchang", role: "Finance Lead", intro: "Manages budgeting, financial control, and operating data support for the team.", avatar: team7 },
  { name: "Wei Futao", role: "Administration and HR Lead", intro: "Supports administration, HR coordination, and the team’s day-to-day operating rhythm.", avatar: team8 },
];

export const news = [
  {
    date: "2026-05-28",
    category: "Product Launch",
    title: "Yaolin Technology introduces the new S1 Pro fitness smartwatch",
    text: "The new model upgrades heart rate, SpO2, sleep trend tracking, and multi-sport recording for the first showcase batch.",
    detail: "The S1 Pro targets campus sports, daily fitness, and general wellness management. It combines multi-sensor monitoring, 100+ sport modes, all-day trend tracking, and long battery life for a more complete demo-ready flagship story.",
    image: newsProduct,
  },
  {
    date: "2026-04-16",
    category: "Channel Partnership",
    title: "Yaolin Technology expands cooperation with smart hardware distributors in South China",
    text: "The partnership focuses on smartwatch presentation, offline demos, after-sales support, and regional promotion.",
    detail: "This cooperation covers Guangxi, Guangdong, and nearby cities through offline experience scenarios, sample display, trial wearing, service registration, and feedback collection to strengthen real-user validation.",
    image: newsInterface,
  },
  {
    date: "2026-03-22",
    category: "Sales Update",
    title: "Yaolin K1 kids watch series reaches 32,000 cumulative units delivered",
    text: "The K1 line continues to attract family and campus attention with location alerts, calling, safe zones, and battery life.",
    detail: "The K1 series focuses on child travel safety and family communication needs, combining multiple positioning methods, safe-zone alerts, family voice contact, and low-battery reminders in a practical showcase narrative.",
    image: newsHealth,
  },
  {
    date: "2026-01-18",
    category: "Company Update",
    title: "Yaolin Technology secures seed-stage project funding worth several million RMB",
    text: "The new funding will support wearable R&D, supply-chain sampling, channel building, and service system improvement.",
    detail: "The funding plan supports sensor module validation, app dashboard refinement, industrial design sampling, and regional channel setup, helping the team present a more credible startup growth path.",
    image: newsMeeting,
  },
];

export const services = [
  { title: "7-day returns", text: "Eligible online and campus-experience orders can be returned or exchanged within seven days." },
  { title: "1-year warranty", text: "Core hardware issues are covered by a one-year warranty support policy." },
  { title: "Fast response", text: "Customer service support is available 7x12 for pairing, sync, and service registration questions." },
  { title: "Regional service support", text: "Channel partners and campus demo points coordinate sample maintenance, accessories replacement, and repair intake." },
];

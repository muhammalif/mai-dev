export const profile = {
  name: "Muhammad Alif Islam",
  shortName: "Alif",
  role: "Fullstack Engineer",
  scope: "Web2, Web3 & Mobile",
  location: "Remote · Indonesia",
  email: "hello@alifislam.dev",
  tagline:
    "Building scalable applications with React, Node.js, PostgreSQL, Solidity, and AI-assisted development workflows.",
  available: "Available for select engagements — 2026",
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  role: string;
  description: string;
  tech: string[];
  year: string;
  category: string;
};

export const projects: Project[] = [
  {
    slug: "bareit",
    index: "01",
    name: "BareIt",
    role: "Fullstack & Web3 Developer",
    description:
      "Onchain social gaming platform on Base featuring challenge verification, NFT rewards, wallet authentication, PostgreSQL architecture, and smart contract integrations.",
    tech: ["Next.js", "Solidity", "Base", "PostgreSQL", "Wagmi"],
    year: "2025",
    category: "Web3 · Social Gaming",
  },
  {
    slug: "alphayield",
    index: "02",
    name: "AlphaYield",
    role: "Fullstack & Web3 Developer",
    description:
      "AI-powered DeFi yield aggregation platform built for VietBUIDL Hackathon with automated yield farming, vault management, and analytics dashboards.",
    tech: ["Next.js", "Solidity", "Node.js", "AI", "Charts"],
    year: "2025",
    category: "Web3 · DeFi",
  },
  {
    slug: "droppio-network",
    index: "03",
    name: "Droppio Network",
    role: "Fullstack & Web3 Developer",
    description:
      "Creator economy platform supporting content creators through tipping systems and Soulbound Token rewards.",
    tech: ["React", "Solidity", "Node.js", "PostgreSQL"],
    year: "2024",
    category: "Web3 · Creator Economy",
  },
  {
    slug: "fxdragunov-indonesia",
    index: "04",
    name: "FXDragunov Indonesia",
    role: "Fullstack Developer",
    description:
      "Forex education platform featuring landing page, admin dashboard, content management, analytics, and secure backend services.",
    tech: ["Next.js", "Laravel", "MySQL", "TailwindCSS"],
    year: "2024",
    category: "Web2 · Education",
  },
  {
    slug: "guess-the-number",
    index: "05",
    name: "Guess The Number Game",
    role: "Fullstack Developer",
    description:
      "Full-stack gaming platform featuring authentication, leaderboards, gameplay tracking, and PostgreSQL-powered score management.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    year: "2023",
    category: "Web2 · Gaming",
  },
  {
    slug: "finly-app",
    index: "06",
    name: "Finly App",
    role: "Mobile Developer",
    description:
      "Personal finance mobile application with expense tracking, analytics, PIN protection, CSV export, and receipt scanning.",
    tech: ["React Native", "Expo", "SQLite", "OCR"],
    year: "2023",
    category: "Mobile · Finance",
  },
];

export const experiences = [
  {
    company: "Independent / Freelance",
    title: "Fullstack Developer (Web2, Web3 & Mobile)",
    period: "Sep 2022 — Present",
    location: "Remote · Indonesia",
    bullets: [
      "Developed Web2, Web3, and mobile applications end-to-end.",
      "Built frontend systems using React.js, Next.js, and React Native.",
      "Developed backend services using Node.js, Express.js, Laravel, and Flask.",
      "Designed PostgreSQL, MySQL, and MongoDB databases.",
      "Built Solidity smart contracts for onchain products.",
      "Delivered end-to-end products from UI/UX to deployment.",
    ],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Fullstack Development",
    items: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Laravel", "Flask", "REST", "tRPC"],
  },
  {
    title: "Web3 Development",
    items: ["Solidity", "Hardhat", "Foundry", "Wagmi", "Viem", "Ethers.js", "Base", "EVM"],
  },
  {
    title: "Database Engineering",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Drizzle", "Redis"],
  },
  {
    title: "Mobile Development",
    items: ["React Native", "Expo", "SQLite", "Push Notifications", "OTA Updates"],
  },
  {
    title: "AI-Assisted Development",
    items: ["LLM Workflows", "OpenAI API", "Vector Search", "Cursor", "Claude Code", "Prompt Engineering"],
  },
  {
    title: "Design & Tools",
    items: ["Figma", "TailwindCSS", "Framer Motion", "Git", "Docker", "Vercel", "Cloudflare"],
  },
];
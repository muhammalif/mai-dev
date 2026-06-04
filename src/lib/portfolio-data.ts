export const profile = {
  name: "Muhammad Alif Islam",
  shortName: "Alif",
  role: "Fullstack Engineer",
  scope: "Web2, Web3 & Mobile",
  location: "Kuningan · Indonesia · Ready for onsite/remote work",
  email: "malif.1006@gmail.com",
  tagline:
    "Building scalable applications with React, Node.js, PostgreSQL, Solidity, and AI-assisted development workflows.",
  available: "Available for work & collaboration",
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
  image?: string;
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
    image: "/images/projects/bareit.png",
  },
  {
    slug: "alphayield",
    index: "02",
    name: "AlphaYield",
    role: "Fullstack & Web3 Developer",
    description:
      "AI-powered DeFi yield aggregation platform built for VietBUIDL Hackathon with automated yield farming, vault management, and analytics dashboards.",
    tech: ["React.js", "Solidity", "Node.js", "AI", "Charts"],
    year: "2025",
    category: "Web3 · DeFi",
    image: "/images/projects/alphayield.png",
  },
  {
    slug: "droppio-network",
    index: "03",
    name: "Droppio Network",
    role: "Fullstack & Web3 Developer",
    description:
      "Creator economy platform supporting content creators through tipping systems and Soulbound Token rewards.",
    tech: ["React", "Solidity", "Node.js", "PostgreSQL"],
    year: "2025",
    category: "Web3 · Creator Economy",
    image: "images/projects/droppio.jpg",
  },
  {
    slug: "fxdragunov-indonesia",
    index: "04",
    name: "FXDragunov Indonesia",
    role: "Fullstack Developer",
    description:
      "Forex education platform featuring landing page, admin dashboard, content management, analytics, and secure backend services.",
    tech: ["MERN Stack", "TailwindCSS"],
    year: "2024",
    category: "Web2 · Education",
    image: "/images/projects/fxdragunov.jpg",
  },
  {
    slug: "guess-the-number",
    index: "05",
    name: "Guess The Number Game",
    role: "Fullstack Developer",
    description:
      "Full-stack gaming platform featuring authentication, leaderboards, gameplay tracking, and PostgreSQL-powered score management.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    year: "2024",
    category: "Web2 · Gaming",
    image: "/images/projects/guessthenumber.jpeg",
  },
  {
    slug: "finly-app",
    index: "06",
    name: "Finly App",
    role: "Mobile Developer",
    description:
      "Personal finance mobile application with expense tracking, analytics, PIN protection, CSV export, and receipt scanning.",
    tech: ["React Native", "SQLite", "OCR"],
    year: "2024",
    category: "Mobile · Finance",
    image: "/images/projects/finly.png",
  },
];

export const experiences = [
  {
    company: "Independent / Freelance",
    title: "Fullstack Engineer (Web2, Web3 & Mobile)",
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
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Laravel",
      "Flask",
      "REST",
    ],
  },
  {
    title: "Web3 Development",
    items: ["Solidity", "Hardhat", "Foundry", "Wagmi", "Viem", "Ethers.js", "EVM"],
  },
  {
    title: "Database Engineering",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "Mobile Development",
    items: ["React Native", "Expo", "OTA Updates"],
  },
  {
    title: "AI-Assisted Development",
    items: [
      "LLM Workflows",
      "OpenAI API",
      "Cursor",
      "Claude Code",
      "MCP Server Integration",
      "Prompt Engineering",
      "Context Engineering",
    ],
  },
  {
    title: "Design & Tools",
    items: ["Figma", "TailwindCSS", "Framer Motion", "Git", "Docker", "Vercel", "Cloudflare"],
  },
];

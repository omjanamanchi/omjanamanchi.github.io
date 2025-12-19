export interface LeadershipItem {
  title: string
  organization: string
  period: string
  location: string
  description: string[]
  skills: string[]
  links?: { label: string; url: string }[]
  employmentType?: string
  additionalInfo?: string
  logo?: string
  previousRoles?: string[]
}

export const leadership: LeadershipItem[] = [
  {
    title: "College of Science Dean's Council Member",
    organization: "Purdue Science",
    period: "Aug 2025 - Present",
    location: "On-site",
    description: [
      "Represent the College of Science at campus-wide recruitment events, admissions programs, and prospective student panels, serving as student voice for 10,000+ STEM undergraduates",
      "Collaborate directly with Dean and college leadership in bi-weekly strategic council meetings to advocate for student concerns, evaluate academic policies, and shape institutional priorities",
      "Lead initiatives to improve College visibility, student experience, and interdisciplinary collaboration across 7 academic departments"
    ],
    skills: [],
    logo: "/purdue-science-logo.png"
  },
  {
    title: "Quantitative Analyst",
    organization: "Boiler Quant",
    period: "Sep 2024 - Present",
    location: "West Lafayette, Indiana, United States · On-site",
    previousRoles: ["Director of Industry Relations, Nov 2024 - Nov 2025"],
    description: [
      "Building production-grade financial models and algorithmic trading systems using C++, Python, CUDA, and quantitative research methodologies",
      "FinMath Library (Fall 2024): Developed C++ financial mathematics library with Python bindings for options pricing, risk analytics, and portfolio optimization",
      "Crypto Arbitrage Engine (Spring 2025): Engineered triangular arbitrage detection system for centralized exchanges (Binance) using real-time market data APIs and statistical arbitrage strategies",
      "GPU-Accelerated ML (Fall 2025): Optimized linear regression models for price prediction using CUDA parallel computing, achieving 15× performance improvement through GPU acceleration and benchmarking",
      "Boiler Quant Executive Board - Scaled industry partnerships and career resources",
      "Built alumni network of 254+ quantitative analysts across top-tier firms (Peak6, Old Mission, Purdue CS) and hosted career panels, technical mock interviews, and resume reviews",
      "Compiled database of 160 quantitative trading firms and organized Chicago & NYC office tours, trading competitions, and industry conferences",
      "Partnered with 40+ collegiate quant finance clubs for cross-institutional collaboration and knowledge sharing",
      "Secured corporate sponsorships through strategic package design, expanding club resources and student opportunities"
    ],
    skills: ["Algorithmic Trading", "Python (Programming Language)", "Quantitative Finance", "Options Pricing", "CUDA", "TypeScript", "Financial Mathematics", "C++", "GPU Programming", "Corporate Partnerships", "Alumni Relations"],
    links: [
      { label: "GitHub - Boiler-Quant/finmath", url: "https://github.com/Boiler-Quant/finmath" },
      { label: "GitHub - arnav-42/crypto", url: "https://github.com/arnav-42/crypto" },
      { label: "Boiler Quant Website", url: "https://boilerquant.com" }
    ],
    logo: "/boiler-quant-logo.png"
  },
  {
    title: "President",
    organization: "Computer Science Club @ Purdue Indy",
    period: "Sep 2024 - Present",
    location: "Indianapolis, Indiana, United States · On-site",
    employmentType: "Full-time",
    description: [
      "Leading technical community of 120+ members, organizing hands-on workshops, hackathons, and industry partnerships to bridge academia and professional software engineering",
      "Hack Indy 2026 Founder & Director: Launched university's flagship hackathon with 200+ participants, securing sponsorships from 15+ industry leaders including Jane Street, Eli Lilly, and Susquehanna International Group (SIG)",
      "Industry Partnerships: Collaborated with corporate and academic partners to host engineering panels and technical workshops on AI/ML, software architecture, and data engineering, connecting students with hands-on exposure to emerging technologies",
      "Community Growth: Directed operations and member engagement across technical events (AI workshops, coding competitions, system design sessions) and social initiatives, strengthening campus CS ecosystem"
    ],
    previousRoles: ["Vice President, Jan 2025 - May 2025", "Technical Lead, Sep 2024 - May 2025"],
    skills: ["Hackathon Organization", "Public Speaking", "JavaScript", "Strategic Partnerships", "Event Management", "TypeScript", "Community Building", "Software Development", "Leadership", "Technical Workshops", "AI/ML"],
    links: [
      { label: "Purdue Article", url: "#" },
      { label: "Computer Science Club @ Purdue | Instagram | Linktree", url: "https://linktr.ee/csclubpui" }
    ],
    logo: "/cs-club-logo.png"
  }
]


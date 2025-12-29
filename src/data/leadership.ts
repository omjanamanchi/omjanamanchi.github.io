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
    title: "President",
    organization: "Computer Science Club @ Purdue Indy",
    period: "Sep 2024 - Present",
    location: "Indianapolis, IN",
    employmentType: "Full-time",
    description: [
      "Leading events for 300+ active student members and managing $10K in annual funding, planning and executing 8+ events per semester including fully sponsored hackathons, hands-on technical workshops, and professional networking panels to foster collaboration between students and Indianapolis tech professionals",
      "Representing Computer Science Club in university-wide leadership councils and cross-organizational meetings, negotiating sponsorships and partnerships with tech companies to secure funding, mentorship opportunities, and software resources for club initiatives",
      "Advocating for student interests by collaborating with Purdue University's Department of Computer Science to improve access to technical resources, funding, and career events while organizing engineering panels and technical workshops on AI/ML, software architecture, and data engineering",
      "Hack Indy 2026 Founder & Director: Launched university's flagship hackathon with 200+ participants, securing sponsorships from 15+ industry leaders including Jane Street, Eli Lilly, and Susquehanna International Group (SIG)"
    ],
    previousRoles: ["Vice President, Jan 2025 - May 2025", "Technical Lead, Sep 2024 - May 2025"],
    skills: ["Hackathon Organization", "Public Speaking", "JavaScript", "Strategic Partnerships", "Event Management", "TypeScript", "Community Building", "Software Development", "Leadership", "Technical Workshops", "AI/ML", "Software Engineering", "Partnership Development", "Corporate Sponsorships", "System Design", "Data Engineering"],
    links: [
      { label: "Website", url: "https://linktr.ee/csclubpui" },
      { label: "Instagram", url: "https://www.instagram.com/csclub_purdueindy/" },
      { label: "Article", url: "https://www.purdue.edu/campuses/indianapolis/trailblazer-fund-fuels-student-organization-innovation-in-indianapolis/" }
    ],
    logo: "/csclub_logo.jpg"
  },
  {
    title: "Quantitative Analyst",
    organization: "Boiler Quant",
    period: "Sep 2024 - Present",
    location: "West Lafayette, IN",
    description: [
      "Building production-grade financial models and algorithmic trading systems using C++, Python, CUDA, and quantitative research methodologies",
      "FinMath Library (Fall 2024): Developed C++ financial mathematics library with Python bindings for options pricing, risk analytics, and portfolio optimization",
      "Crypto Arbitrage Engine (Spring 2025): Engineered triangular arbitrage detection system for centralized exchanges (Binance) using real-time market data APIs and statistical arbitrage strategies",
      "GPU-Accelerated ML (Fall 2025): Optimized linear regression models for price prediction using CUDA parallel computing, achieving 15× performance improvement through GPU acceleration and benchmarking"
    ],
    skills: ["Algorithmic Trading", "Python (Programming Language)", "Quantitative Finance", "Options Pricing", "CUDA", "TypeScript", "Financial Mathematics", "C++", "GPU Programming", "GPU Computing", "Statistical Arbitrage", "Machine Learning", "API Integration", "Portfolio Optimization", "Risk Analytics", "Real-time Market Data", "Quantitative Research", "Trading Systems", "Python Bindings", "Production-grade Systems"],
    links: [
      { label: "FinMath", url: "https://github.com/Boiler-Quant/finmath" },
      { label: "Crypto Arbitrage", url: "https://github.com/arnav-42/crypto" },
      { label: "GPU Acceleration", url: "https://github.com/Boiler-Quant/linear_regression_cuda_fa25" }
    ],
    logo: "/boilerquant_logo.jpg"
  },
  {
    title: "Director of Industry Relations",
    organization: "Boiler Quant",
    period: "Nov 2024 - Nov 2025",
    location: "West Lafayette, IN",
    description: [
      "Boiler Quant Executive Board - Scaled industry partnerships and career resources",
      "Built alumni network of 254+ quantitative analysts across top-tier firms (Peak6, Old Mission, Purdue CS) and hosted career panels, technical mock interviews, and resume reviews",
      "Compiled database of 160 quantitative trading firms and organized Chicago & NYC office tours, trading competitions, and industry conferences",
      "Partnered with 40+ collegiate quant finance clubs for cross-institutional collaboration and knowledge sharing",
      "Secured corporate sponsorships through strategic package design, expanding club resources and student opportunities"
    ],
    skills: ["Corporate Partnerships", "TypeScript", "Alumni Relations", "Cross-institutional Collaboration", "Strategic Package Design", "Career Development", "Industry Conferences", "Trading Competitions", "Office Tours", "Resume Reviews", "Technical Mock Interviews", "Career Panels"],
    links: [
      { label: "Website", url: "https://www.boilerquant.com/" },
      { label: "Instagram", url: "https://www.instagram.com/boilerquant/" }
    ],
    logo: "/boilerquant_logo.jpg"
  },
  {
    title: "Computer Science Ambassador",
    organization: "Purdue Computer Science",
    period: "Oct 2024 - Aug 2025",
    location: "Indianapolis, IN",
    logo: "/purduecs_logo.jpg",
    description: [
      "Bridged communication gap between 1,000+ CS students and Department Head through facilitation of open discussion forums, advocating for student concerns and driving departmental policy improvements",
      "Coordinated campus-wide Food Truck Event attracting 400+ students, fostering community engagement and strengthening departmental culture across undergraduate and graduate populations",
      "Managed Purdue CS Department Reception Desk, providing administrative support to 250+ students, 20+ faculty/staff members, 10+ student organizations, and university donors while maintaining professional front-desk operations"
    ],
    skills: ["Event Management", "Student Advocacy", "Administrative Support", "Community Building", "Public Relations", "Cross-functional Collaboration", "Front-desk Operations", "Student Representation", "Policy Advocacy"]
  },
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
    skills: ["Student Leadership", "Public Speaking", "Strategic Planning", "Higher Education", "Stakeholder Management", "Advocacy", "Recruitment Events", "Admissions Programs", "Interdisciplinary Collaboration"],
    logo: "/purduescience_logo.jpg"
  }
]


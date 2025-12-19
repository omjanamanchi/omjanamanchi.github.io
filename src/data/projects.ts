export type ProjectCategory = "All" | "Quant Finance" | "AI/ML" | "Web Dev"

export interface Project {
  title: string
  description: string
  technologies: string[]
  category: ProjectCategory[]
  github?: string
  live?: string
  image?: string
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    title: "FinMath Library",
    description: "Python Financial Math Library written in C++ for options pricing, risk analytics, portfolio optimization",
    technologies: ["C++", "Python", "Financial Mathematics", "pybind11", "CMake"],
    category: ["Quant Finance"],
    github: "https://github.com/Boiler-Quant/finmath"
  },
  {
    title: "Crypto Arbitrage Trading System",
    description: "Triangular arbitrage detection for Binance using real-time market data and statistical strategies",
    technologies: ["Python", "ccxt", "REST APIs", "TypeScript", "Bellman-Ford Algorithm"],
    category: ["Quant Finance"],
    github: "https://github.com/arnav-42/crypto"
  },
  {
    title: "GPU-Accelerated ML Models",
    description: "CUDA-optimized linear regression for price prediction (15× performance improvement)",
    technologies: ["CUDA", "C++", "Python", "Machine Learning"],
    category: ["AI/ML", "Quant Finance"],
    github: "https://github.com/Boiler-Quant/linear_regression_cuda_fa25"
  },
  {
    title: "NHPP Warranty Prediction Model",
    description: "Failure prediction analyzing 200,000+ claims (90% accuracy). Full-stack web app for forecasting.",
    technologies: ["Python", "R", "JavaScript", "Flask", "Data Visualization"],
    category: ["AI/ML"],
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=yodqmG8YCig" },
      { label: "Poster", url: "/datamine-poster.pdf" }
    ]
  },
  {
    title: "CS Club Website",
    description: "Official website with event calendar, member portal, resource hub",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    category: ["Web Dev"],
    live: "https://csclubpui.com"
  },
  {
    title: "Boiler Quant Website",
    description: "Organization website showcasing initiatives, projects, industry partnerships",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    category: ["Web Dev"],
    live: "https://boilerquant.com"
  }
]


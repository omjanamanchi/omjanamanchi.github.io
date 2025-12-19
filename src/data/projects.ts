export type ProjectCategory = "All" | "Quant Finance" | "AI/ML" | "Web Dev" | "Game Dev" | "Mobile Dev"

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
    title: "Boiler Quant Website",
    description: "Organization website showcasing initiatives, projects, industry partnerships",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    category: ["Web Dev"],
    live: "https://boilerquant.com"
  },
  {
    title: "Calculator App",
    description: "Calculator App made in Android Studio in Java using String Tokenizer",
    technologies: ["Java", "Android Studio", "String Tokenizer"],
    category: ["Mobile Dev"],
    github: "https://github.com/omjanamanchi/Calculator-App"
  },
  {
    title: "ListView Music Player",
    description: "ListView Project of a Music Player in Android Studio Java",
    technologies: ["Java", "Android Studio", "ListView"],
    category: ["Mobile Dev"],
    github: "https://github.com/omjanamanchi/ListView-Project"
  },
  {
    title: "OpenWeather App",
    description: "Open Weather Project made with weather API in Android Studio App",
    technologies: ["Java", "Android Studio", "REST API", "Weather API"],
    category: ["Mobile Dev"],
    github: "https://github.com/omjanamanchi/OpenWeather-Project"
  },
  {
    title: "Distance Tracking App",
    description: "GeoCoder integrated Distance Tracker App in Android Studio",
    technologies: ["Java", "Android Studio", "GeoCoder", "Location Services"],
    category: ["Mobile Dev"],
    github: "https://github.com/omjanamanchi/Distance-Tracking-App"
  },
  {
    title: "Cookie Clicker Game",
    description: "Cookie Clicker Game remade with Animations in Android Studio",
    technologies: ["Java", "Android Studio", "Animations", "Game Development"],
    category: ["Mobile Dev", "Game Dev"],
    github: "https://github.com/omjanamanchi/Cookie-Clicker-App"
  },
  {
    title: "Text Messaging App",
    description: "Basic Text Messaging App with AI Bot Response",
    technologies: ["Java", "Android Studio", "AI", "Chatbot"],
    category: ["Mobile Dev", "AI/ML"],
    github: "https://github.com/omjanamanchi/Text-Messaging-App"
  },
  {
    title: "Dodge Game",
    description: "Dodge Game with Movement, Intents, Animations in Android Studio",
    technologies: ["Java", "Android Studio", "Animations", "Intents", "Game Development"],
    category: ["Mobile Dev", "Game Dev"],
    github: "https://github.com/omjanamanchi/Dodge-Game"
  },
  {
    title: "Catch Game",
    description: "Catch Game made in Unity",
    technologies: ["Unity", "C#", "Game Development"],
    category: ["Game Dev"],
    github: "https://github.com/omjanamanchi/Catch-Game"
  },
  {
    title: "Endless Runner Game",
    description: "Virtual Reality & Game Design Post Test - Endless Runner Game made in Unity C#",
    technologies: ["Unity", "C#", "Game Development", "VR"],
    category: ["Game Dev"],
    github: "https://github.com/omjanamanchi/Endless-Runner-Game"
  },
  {
    title: "Base Converter Project",
    description: "Base Converter Project - decimalToBinary() and hexadecimalToBinary() Base Converter in C++",
    technologies: ["C++", "Algorithms", "Number Systems"],
    category: ["All"],
    github: "https://github.com/omjanamanchi/Base-Converter-Project"
  },
  {
    title: "Raylib Ship Movement Game",
    description: "Game built with Raylib where a Ship moves autonomously to a target point in the game world",
    technologies: ["C++", "Raylib", "Game Development", "Autonomous Movement"],
    category: ["Game Dev"],
    github: "https://github.com/omjanamanchi/Raylib-Project-Part-1"
  },
  {
    title: "Raylib Genetic Algorithm Evolution",
    description: "Game built with Raylib to simulate Evolution of Genetic Algorithms with 2 Types of Autonomous Agents. Developed Game World Window with Raylib Graphics & UI Elements. Designed Timer, Evolution Metrics, Leaderboard, collectable Food. Programmed 2 Types of Autonomous Movement Agents that evolve each round representing Genetic Algorithms of Survival",
    technologies: ["C++", "Raylib", "Genetic Algorithms", "Game Development", "Evolution Simulation", "AI"],
    category: ["Game Dev", "AI/ML"],
    github: "https://github.com/omjanamanchi/Raylib-Project-Part-2"
  },
  {
    title: "OpenCV Signature Project",
    description: "Image Manipulation through image thresholding, file reading, GUI elements, Streamlit implementation. Thresholded image with OpenCV to grayscale, remove background, and add transparency with RGB pixel values. Implemented Streamlit in terminal to save thresholded images and added GUI elements to download files and take pictures",
    technologies: ["Python", "OpenCV", "Streamlit", "Image Processing", "Computer Vision"],
    category: ["AI/ML"],
    github: "https://github.com/omjanamanchi/OpenCV-Signature-Project"
  },
  {
    title: "OpenCV Hand Raise Detection",
    description: "Using Python OpenCV and Hand + Pose Skeletal Model, detects handlandmarks, raised hand, 3 finger solute",
    technologies: ["Python", "OpenCV", "Computer Vision", "Pose Detection", "Hand Tracking", "MediaPipe"],
    category: ["AI/ML"],
    github: "https://github.com/omjanamanchi/OpenCV-Hand-Raise-Project"
  }
]


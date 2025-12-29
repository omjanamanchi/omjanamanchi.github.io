export interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  skills: string[]
  links?: { label: string; url: string }[]
  employmentType?: string
  additionalInfo?: string
  logo?: string
}

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Whisp",
    period: "Dec 2025 - Present",
    location: "Remote",
    description: [
      "Developing voice-powered AI code generation platform enabling real-time conversion of natural language to production-ready applications, implementing live preview systems and multi-framework support (React, Vue, Node.js) to serve 1,000+ users building web apps, dashboards, and SaaS products through voice interaction",
      "Engineering token-based processing infrastructure managing AI model orchestration, code generation pipelines, and resource allocation across three pricing tiers (Starter, Personal, Max), optimizing token consumption and implementing usage tracking for scalable monetization",
      "Building real-time iteration and context management systems enabling users to refine applications through conversational feedback, implementing intelligent code diff algorithms and version control integration for seamless voice-driven development workflows"
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "AI/ML Integration",
      "Natural Language Processing (NLP)",
      "Voice Interface Development",
      "Real-time Code Generation",
      "Full-Stack Development",
      "React",
      "Node.js",
      "WebSocket",
      "Live Preview Systems",
      "API Development",
      "Token-based Architecture",
      "Subscription Management",
      "Payment Processing",
      "User Authentication",
      "Database Integration",
      "Cloud Infrastructure",
      "Multi-framework Support",
      "Code Diff Algorithms",
      "Version Control",
      "SaaS Development",
      "Platform Engineering",
      "Usage Analytics",
      "Production Deployment",
      "RESTful APIs",
      "State Management",
      "Code Export Systems",
      "Context Management",
      "Iterative Development",
      "Git",
      "Microservices",
      "Scalable Systems"
    ],
    employmentType: "Internship",
    logo: "/heywhisp_logo.jpg",
    links: [
      { label: "heywhisp.com", url: "https://www.heywhisp.com" }
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "RockABlock",
    period: "Dec 2025 - Present",
    location: "Remote",
    description: [
      "Architected enterprise WebAR demonstration platform using TypeScript, A-Frame, and MindAR.js with event-driven state machine architecture, implementing marker-less Natural Feature Tracking (NFT) and real-time video compositing—deployed to production as primary technical showcase for Fortune 500 partner acquisitions and generating measurable client engagement metrics",
      "Engineered cross-platform compatibility framework resolving iOS Safari and Android Chrome permission handling edge cases through platform-specific workarforms, achieving 95%+ successful AR session initialization across 4+ browser environments and eliminating critical user drop-off points in partner demonstration flow",
      "Optimized rendering performance and asset delivery through parallel preloading with exponential backoff retry logic, mobile-specific animation reduction (6 vs 8 orbital elements), and hardware-accelerated CSS transforms, reducing initial load time by 40% and maintaining consistent 60 FPS AR experiences on mobile devices",
      "Implemented comprehensive analytics infrastructure with Firebase integration tracking 10+ user interaction events, device telemetry, and GDPR-compliant consent management, providing data-driven insights for product roadmap decisions and quantifying partner engagement for sales team",
      "Developed production-grade video recording system compositing live camera feed with AR canvas overlay using MediaRecorder API, implementing automatic codec fallback (WebM VP9/VP8) and achieving frame-perfect synchronization for social media-ready AR content capture"
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "WebAR Development",
      "A-Frame",
      "MindAR.js",
      "Three.js",
      "Natural Feature Tracking (NFT)",
      "Event-Driven Architecture",
      "State Machine Design",
      "Firebase Analytics",
      "Firebase Hosting",
      "Full-Stack Development",
      "Cross-Platform Development",
      "iOS Safari Compatibility",
      "Video Compositing",
      "MediaRecorder API",
      "WebRTC",
      "WebGL",
      "Vite",
      "Progressive Web Apps (PWA)",
      "Permission Handling",
      "GDPR Compliance",
      "Asset Optimization",
      "Performance Optimization",
      "Mobile Development",
      "Canvas API",
      "Client-Side Routing",
      "Analytics Integration",
      "Production Deployment",
      "3D Rendering",
      "Animation Systems",
      "UI/UX Implementation",
      "Error Handling",
      "Browser Compatibility",
      "CDN Distribution",
      "Git",
      "Version Control"
    ],
    employmentType: "Internship",
    logo: "/rockablock_logo.jpg",
    links: [
      { label: "rock-ar.web.app", url: "https://rock-ar.web.app/" }
    ]
  },
  {
    title: "CS 19300 Tools - Teaching Assistant",
    company: "Purdue Computer Science",
    period: "Aug 2025 - Dec 2025",
    location: "Indianapolis, IN",
    logo: "/purduecs_logo.jpg",
    description: [
      "Instructed 200+ students in industry-standard development tools including Git version control, GitHub workflows, and LaTeX document preparation, supporting technical skill development through office hours, homework grading, and Ed Discussion forum monitoring",
      "Designed and developed course homework assignments while managing the entire class GitHub organization, streamlining assignment distribution, submission workflows, and version control best practices for efficient course operations"
    ],
    skills: ["Git", "GitHub", "LaTeX", "Overleaf", "Version Control", "Technical Instruction", "Curriculum Development", "Student Mentoring", "Ed Discussion", "Forum Monitoring", "GitHub Workflows"],
    employmentType: "Full-time"
  },
  {
    title: "CS 18000 Computer Science Bridge Program - Teaching Assistant",
    company: "Purdue Computer Science",
    period: "Aug 2025 - Aug 2025",
    location: "West Lafayette, IN",
    logo: "/purduecs_logo.jpg",
    description: [
      "Mentored 70+ incoming Computer Science freshmen in foundational Java programming and object-oriented design principles (OOP), delivering guided labs, practice problems, and personalized support to strengthen problem-solving capabilities",
      "Collaborated with 4 Teaching Assistants and 3 faculty coordinators to deliver technical workshops, team-building activities, and curriculum design for accelerated onboarding program"
    ],
    skills: ["Java", "Object-Oriented Programming (OOP)", "Teaching", "Mentorship", "Curriculum Design", "Workshop Facilitation", "Peer Teaching", "Office Hours"],
    employmentType: "Part-time",
    additionalInfo: "2 Week Computer Science Bridge Program for Incoming Freshman Students"
  },
  {
    title: "Undergraduate Data Science Researcher",
    company: "The Data Mine - Purdue University - Delta Faucet Company",
    period: "Aug 2024 - May 2025",
    location: "Indianapolis, IN",
    logo: "/purduedatamine_logo.jpg",
    description: [
      "Predictive Modeling: Engineered Non-Homogeneous Poisson Process (NHPP) failure prediction model analyzing 200,000+ historical warranty claims, improving forecast accuracy by 90% across 6-year product lifecycles and enabling data-driven inventory optimization for Fortune 500 manufacturing operations",
      "Full-Stack Development: Built interactive web application with Python backend and JavaScript frontend, empowering non-technical Delta teams to visualize SKU-level failure forecasts, reducing overstock expenses and optimizing replacement part planning",
      "Cost Optimization: Reduced warranty-related inventory costs by estimating average per-case warranty expenses through statistical analysis of large-scale claims data, directly impacting supply chain efficiency"
    ],
    skills: ["JavaScript", "Data Science", "Predictive Modeling", "R (Programming Language)", "Python (Programming Language)", "Flask", "Non-Homogeneous Poisson Process (NHPP)", "Full-Stack Development", "Data Visualization", "Statistical Analysis", "Supply Chain Analytics", "Warranty Analytics", "Inventory Optimization"],
    links: [
      { label: "Video Presentation", url: "https://www.youtube.com/watch?v=yodqmG8YCig" },
      { label: "Research Poster", url: "/datamine-poster.pdf" }
    ]
  }
]


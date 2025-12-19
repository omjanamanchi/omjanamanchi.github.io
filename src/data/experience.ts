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
    description: [],
    skills: [],
    employmentType: "Internship",
    logo: "/heywhisp_logo.jpg"
  },
  {
    title: "Software Engineer Intern",
    company: "ROCKaBLOCK",
    period: "Dec 2025 - Present",
    location: "Remote",
    description: [],
    skills: [],
    employmentType: "Internship",
    logo: "/rockablock_logo.jpg"
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


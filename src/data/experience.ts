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
    logo: "/whisp-logo.png"
  },
  {
    title: "Software Engineer Intern",
    company: "ROCKaBLOCK",
    period: "Dec 2025 - Present",
    location: "Remote",
    description: [],
    skills: [],
    employmentType: "Internship",
    logo: "/rockablock-logo.png"
  },
  {
    title: "CS 19300 Tools - Teaching Assistant",
    company: "Purdue Computer Science",
    period: "Aug 2025 - Dec 2025",
    location: "Indianapolis, Indiana, United States",
    description: [
      "Instructed 200+ students in industry-standard development tools including Git version control, GitHub workflows, and LaTeX document preparation, supporting technical skill development through office hours, homework grading, and Ed Discussion forum monitoring",
      "Designed and developed course homework assignments while managing the entire class GitHub organization, streamlining assignment distribution, submission workflows, and version control best practices for efficient course operations"
    ],
    skills: ["Git", "GitHub", "LaTeX", "Overleaf", "Version Control", "Technical Instruction", "Curriculum Development", "Student Mentoring"],
    employmentType: "Full-time"
  },
  {
    title: "CS 18000 Computer Science Bridge Program - Teaching Assistant",
    company: "Purdue Computer Science",
    period: "Aug 2025 - Aug 2025",
    location: "West Lafayette, Indiana, United States",
    description: [
      "Mentored 70+ incoming Computer Science freshmen in foundational Java programming and object-oriented design principles (OOP), delivering guided labs, practice problems, and personalized support to strengthen problem-solving capabilities",
      "Collaborated with 4 Teaching Assistants and 3 faculty coordinators to deliver technical workshops, team-building activities, and curriculum design for accelerated onboarding program"
    ],
    skills: ["Java", "Object Oriented Programming", "Teaching", "Mentorship", "Curriculum Design", "Workshop Presentation"],
    employmentType: "Part-time",
    additionalInfo: "2 Week Computer Science Bridge Program for Incoming Freshman Students"
  },
  {
    title: "Computer Science Ambassador",
    company: "Purdue Computer Science",
    period: "Oct 2024 - Aug 2025",
    location: "Indianapolis, Indiana, United States",
    description: [
      "Bridged communication gap between 1,000+ CS students and Department Head through facilitation of open discussion forums, advocating for student concerns and driving departmental policy improvements",
      "Coordinated campus-wide Food Truck Event attracting 400+ students, fostering community engagement and strengthening departmental culture across undergraduate and graduate populations",
      "Managed Purdue CS Department Reception Desk, providing administrative support to 250+ students, 20+ faculty/staff members, 10+ student organizations, and university donors while maintaining professional front-desk operations"
    ],
    skills: ["Event Management", "Student Advocacy", "Administrative Support", "Community Building", "Public Relations"]
  },
  {
    title: "Undergraduate Data Science Researcher",
    company: "The Data Mine - Purdue University",
    period: "Aug 2024 - May 2025",
    location: "Indianapolis, Indiana, United States",
    description: [
      "Predictive Modeling: Engineered Non-Homogeneous Poisson Process (NHPP) failure prediction model analyzing 200,000+ historical warranty claims, improving forecast accuracy by 90% across 6-year product lifecycles and enabling data-driven inventory optimization for Fortune 500 manufacturing operations",
      "Full-Stack Development: Built interactive web application with Python backend and JavaScript frontend, empowering non-technical Delta teams to visualize SKU-level failure forecasts, reducing overstock expenses and optimizing replacement part planning",
      "Cost Optimization: Reduced warranty-related inventory costs by estimating average per-case warranty expenses through statistical analysis of large-scale claims data, directly impacting supply chain efficiency"
    ],
    skills: ["JavaScript", "Data Science", "Predictive Modeling", "R (Programming Language)", "Python (Programming Language)", "Flask", "Non-Homogeneous Poisson Process (NHPP)", "Full-Stack Development", "Data Visualization"],
    links: [
      { label: "Video Presentation", url: "https://www.youtube.com/watch?v=yodqmG8YCig" },
      { label: "Research Poster", url: "/datamine-poster.pdf" }
    ]
  }
]


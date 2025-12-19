export interface Course {
  code: string
  name: string
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location?: string
  gpa?: string
  minors?: string[]
  courses?: Course[]
  highlights?: string[]
  tech?: string[]
  description?: string
  activities?: string[]
  academyCourses?: Course[]
  academyDescription?: string
  grade?: string
  logo?: string
}

export const education: EducationItem[] = [
  {
    institution: "Purdue University",
    degree: "Bachelor of Science - B.S. Computer Science, Minors: Mathematics & Finance",
    period: "Aug 2024 - May 2028",
    location: "West Lafayette, IN",
    gpa: "4.0/4.0",
    minors: ["Mathematics", "Finance"],
    courses: [
      { code: "CS 18000", name: "Object-Oriented Programming & Problem Solving" },
      { code: "CS 18200", name: "Foundations of Computer Science (Discrete Mathematics)" },
      { code: "CS 24000", name: "Programming in C" },
      { code: "CS 21100", name: "Competitive Programming I" },
      { code: "CS 25000", name: "Computer Architecture" },
      { code: "CS 25100", name: "Data Structures & Algorithms" },
      { code: "MA 34100", name: "Foundations of Real Analysis" },
      { code: "MGMT 31000", name: "Financial Management" },
      { code: "STAT 35000", name: "Introduction to Statistics" },
      { code: "STAT 41600", name: "Probability" },
    ],
    logo: "/purdue-logo.png"
  },
  {
    institution: "South Brunswick High School",
    degree: "High School Diploma | Computer Science Academy",
    period: "Sep 2020 - Jun 2024",
    activities: [
      "Member @ South Brunswick School District (S.B.H.S) Budget Advocacy Committee",
      "Founder & President @ Chess Club",
      "President @ World Language Club (WLC)",
      "President @ Working in Senior Homes (W.I.S.H)",
      "Executive Member of Competitive Events @ Future Business Leaders of America (FBLA)",
      "Founder @ South Brunswick School District Chess Program",
      "Program Manager @ South Brunswick Public Library Chess Initiative"
    ],
    academyCourses: [
      { code: "CS 21st Century", name: "Computer Science in the 21st Century" },
      { code: "AP CS A", name: "AP Computer Science A" },
      { code: "Mobile Dev", name: "Mobile Application Development (Dual Enrollment)" },
      { code: "VR/Game", name: "Virtual Reality & Game Design" },
      { code: "Data Structures", name: "Data Structures" },
      { code: "Capstone", name: "Computer Science Capstone" }
    ],
    academyDescription: "I was a member of the inaugural Computer Science Academy class — a selective advanced CS program with coursework in data structures, algorithms, game development, virtual reality, and software capstone projects, complemented by my extensive student leadership and community impact.",
    logo: "/sbhs-logo.png"
  },
  {
    institution: "Ramapo College of New Jersey",
    degree: "Dual Enrollment, Computer Science",
    period: "Sep 2022 - Jun 2023",
    description: "I built mobile applications using Java and Kotlin, integrating RESTful APIs and Android tooling with emphasis on application architecture, user-centric design, and cross-platform functionality.",
    courses: [
      { code: "CMPS 28500", name: "Mobile Application Development" }
    ],
    logo: "/ramapo-logo.png"
  },
  {
    institution: "Middlesex College",
    degree: "Dual Enrollment, Accounting and Mathematics",
    period: "Sep 2022 - Aug 2024",
    description: "I received formal training in financial and managerial accounting alongside advanced calculus and linear algebra, supporting my data-driven decision-making and quantitative analysis for finance and technology applications.",
    courses: [
      { code: "ACC 10100", name: "College Accounting I: Financial Accounting" },
      { code: "ACC 10200", name: "College Accounting II: Managerial Accounting" },
      { code: "MAT 23300", name: "Calculus III & Analytic Geometry" },
      { code: "MAT 21000", name: "Linear Algebra" }
    ],
    logo: "/middlesex-logo.png"
  }
]


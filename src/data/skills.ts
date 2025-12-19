export interface SkillCategory {
  name: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    name: "Programming & Scripting",
    skills: ["Python", "C", "C++", "Java", "C#", "R", "Dart", "SQL", "TypeScript", "JavaScript", "HTML", "CSS", "XML", "LaTeX", "x86-64 Assembly", "CUDA", "Bash"]
  },
  {
    name: "Machine Learning, AI & Data Science",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Transformers", "LLMs", "NLP", "Computer Vision", "Pandas", "NumPy", "Matplotlib", "Streamlit", "Tableau"]
  },
  {
    name: "Web & Application Development",
    skills: ["React.js", "Node.js", "Express", "TailwindCSS", "jQuery", "PHP", "HTML5/CSS3", "WebSocket", "Flask", "RESTful APIs"]
  },
  {
    name: "Mobile & Cross-Platform Development",
    skills: ["React Native", "Flutter", "Dart", "Kotlin", "Swift"]
  },
  {
    name: "Databases & Cloud Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "SQL", "Firebase", "Docker", "Vercel"]
  },
  {
    name: "DevOps, CI/CD & Version Control",
    skills: ["Git", "GitHub", "Docker", "Vercel Deployment", "Linux System Admin"]
  },
  {
    name: "Software Engineering & Tools",
    skills: ["VS Code", "PyCharm", "IntelliJ IDEA", "CLion", "Android Studio", "Unity", "Ubuntu VMs", "WSL", "Application Design", "Unit Testing", "Debugging"]
  },
  {
    name: "Operating Systems",
    skills: ["Linux", "macOS", "Windows", "WSL"]
  }
]


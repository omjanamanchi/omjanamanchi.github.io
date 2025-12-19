export interface ResearchItem {
  title: string
  organization: string
  lab?: string
  period: string
  location: string
  type: string
  description: string
  achievements: string[]
  impact?: string
  links?: { label: string; url: string }[]
  logo?: string
}

export const research: ResearchItem[] = [
  {
    title: "Computer Science Research Associate",
    organization: "University of California, Berkeley",
    lab: "Berkeley Artificial Intelligence Research (BAIR) Lab - MITRA Data Team",
    period: "Aug 2023 - Jun 2024",
    location: "New Jersey, United States · Remote",
    type: "Research",
    description: "Conducted applied machine learning and natural language processing research under Prof. Kurt Keutzer and Dr. Sebastian Nehrdich, developing AI systems for cultural heritage preservation and multilingual text digitization",
    achievements: [
      "NLP Translation & OCR Correction: Engineered natural language processing algorithms achieving 90% accuracy for OCR correction across 10,000+ Sanskrit and Tibetan manuscripts, significantly improving text readability and enabling digital preservation of centuries-old Buddhist texts",
      "AI Metadata Classification: Developed machine learning classifier with 80% precision for automated metadata tagging and multilingual dataset categorization, reducing manual labeling effort by 60% and enhancing searchability of historical archives",
      "Data Quality & Deduplication: Implemented deduplication algorithms reducing data inconsistencies by 25% across digitized archives, ensuring data integrity and consistency for large-scale multilingual corpora",
      "Research Dissemination: Co-authored research papers for NLP journals and presented Tibetan text models at international virtual conference in Dharamshala attended by His Holiness the Dalai Lama, showcasing AI applications in cultural preservation"
    ],
    impact: "Core contributor to dharmamitra.org platform, now serving as global hub for digitized Buddhist manuscripts with extensive documentation and international media recognition",
    links: [
      { label: "Dharmitra", url: "https://dharmamitra.org/" },
      { label: "Documentation Guide", url: "https://dharmamitra.github.io/dharmamitra-guides/" },
      { label: "Video Thesis", url: "https://www.youtube.com/watch?v=SMD6RGr-w9Q" },
      { label: "News Article", url: "https://www.merit-times.com/news/52590" }
    ],
    logo: "/uc-berkeley-logo.png"
  }
]


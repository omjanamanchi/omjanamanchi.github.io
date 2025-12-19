import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences, ExperienceItem } from '../data/experience'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'

interface ExperienceCardProps {
  exp: ExperienceItem
  index: number
}

const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-gradient-hover"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="company-logo">
          {exp.logo ? (
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div className="w-full h-full bg-bg-elevated"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-xl font-bold text-text-primary">
              {exp.title}
            </h3>
            <div className="flex items-center gap-2 text-text-secondary">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{exp.period}</span>
            </div>
          </div>
          <div className="flex items-start justify-between">
            <p className="text-lg font-semibold text-accent-cyan">
              {exp.company}
            </p>
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{exp.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border-default my-4"></div>

      {exp.additionalInfo && (
        <p className="text-base text-text-secondary mb-4 leading-relaxed">
          {exp.additionalInfo}
        </p>
      )}

      {exp.description && exp.description.length > 0 && (
        <ul className="space-y-2 mb-4">
          {exp.description.map((desc, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-text-secondary"
            >
              <span className="text-accent-cyan mt-1">▹</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      )}

      {exp.skills && exp.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-text-primary mb-2">
            Skills:
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="badge"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {exp.links && exp.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
          {exp.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
              <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      )}
    </motion.div>
  )
}

const Experience = () => {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-bg-surface">
      <div className="container-max">
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

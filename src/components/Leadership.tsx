import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { leadership, LeadershipItem } from '../data/leadership'
import { ExternalLink } from 'lucide-react'

interface LeadershipCardProps {
  item: LeadershipItem
  index: number
}

const LeadershipCard = ({ item, index }: LeadershipCardProps) => {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4 mb-4">
        {item.logo && (
          <img
            src={item.logo}
            alt={`${item.organization} logo`}
            className="w-16 h-16 object-contain flex-shrink-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {item.title}
          </h3>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
            {item.organization}
          </p>
          {item.employmentType && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {item.employmentType}
            </p>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.period}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {item.location}
          </p>
        </div>
      </div>

      {item.additionalInfo && (
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {item.additionalInfo}
        </p>
      )}

      {item.description && item.description.length > 0 && (
        <ul className="space-y-2 mb-4">
          {item.description.map((desc, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-primary-600 dark:text-primary-400 mt-1">▹</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      )}

      {item.previousRoles && item.previousRoles.length > 0 && (
        <div className="mb-4">
          {item.previousRoles.map((role, idx) => (
            <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
              {role}
            </p>
          ))}
        </div>
      )}

      {item.skills && item.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Skills:
          </p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, idx) => (
              <span
                key={skill}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                {skill}{idx < item.skills.length - 1 && ' · '}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.links && item.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {item.links.map((link) => (
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

const Leadership = () => {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="leadership" ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Leadership
        </motion.h2>

        <div className="space-y-8">
          {leadership.map((item, index) => (
            <LeadershipCard key={`${item.organization}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership


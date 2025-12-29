import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { leadership, LeadershipItem } from '../data/leadership'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'

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
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          {item.logo ? (
            <img
              src={item.logo}
              alt={`${item.organization} logo`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 dark:bg-slate-600"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-xl font-bold text-text-primary">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-text-primary">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{item.period}</span>
            </div>
          </div>
          <div className="flex items-start justify-between">
            <p className="text-lg font-semibold text-text-primary">
              {item.organization}
            </p>
            <div className="flex items-center gap-2 text-text-primary">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{item.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-slate-700 my-4"></div>

      {item.additionalInfo && (
        <p className="text-base text-text-primary mb-4 leading-relaxed">
          {item.additionalInfo}
        </p>
      )}

      {item.description && item.description.length > 0 && (
        <ul className="space-y-2 mb-4">
          {item.description.map((desc, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-text-primary"
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
            <p key={idx} className="text-sm text-text-primary">
              {role}
            </p>
          ))}
        </div>
      )}

      {item.skills && item.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-accent-cyan mb-3">
            Skills:
          </p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
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

      {item.links && item.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
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
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary"
        >
          Leadership
        </motion.h2>

        <div className="space-y-8">
          {leadership.map((item, index) => (
            <LeadershipCard 
              key={`${item.organization}-${item.period}`} 
              item={item} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership


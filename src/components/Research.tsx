import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { research } from '../data/research'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Research = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="research" ref={ref} className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Research
        </motion.h2>

        <div className="space-y-12">
          {research.map((item, index) => (
            <motion.div
              key={`${item.organization}-${item.period}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-primary-600 dark:border-primary-400 hover:shadow-xl transition-shadow"
            >
              {/* Header with Logo and Organization */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4 flex-1">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {item.lab || item.organization}
                    </p>
                    {item.lab && (
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                        {item.organization}
                      </p>
                    )}
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 mt-1">
                      {item.type}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-4 mb-6">
                {item.achievements.map((achievement, idx) => {
                  const colonIndex = achievement.indexOf(':')
                  const header = colonIndex !== -1 ? achievement.substring(0, colonIndex) : ''
                  const content = colonIndex !== -1 ? achievement.substring(colonIndex + 1).trim() : achievement
                  
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base md:text-lg text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">
                        {header && <span className="font-bold">{header}:</span>} {content}
                      </span>
                    </li>
                  )
                })}
              </ul>

              {/* Impact */}
              {item.impact && (
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  <span className="font-bold">Research Impact: </span>
                  {item.impact}
                </p>
              )}

              {/* Links */}
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research


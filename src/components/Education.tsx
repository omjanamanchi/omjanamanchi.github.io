import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/education'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={ref} className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          My Education Journey
        </motion.h2>

        <div className="space-y-8 mt-12">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 md:p-8 ${
                index === 0 ? 'border-2 border-primary-500 dark:border-primary-400' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-1">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {!item.logo && <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.institution}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {item.degree}
                    </p>
                    {item.description && (
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                        {item.description}
                      </p>
                    )}
                    {item.gpa && (
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                        <Award className="w-5 h-5" />
                        <span>GPA: {item.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <div className="flex items-center gap-2 justify-end text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-2 justify-end text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {item.academyCourses && item.academyCourses.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Computer Science Academy
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.academyCourses.map((course) => (
                      <div
                        key={course.code}
                        className="bg-gray-50 dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700"
                      >
                        <span className="text-gray-700 dark:text-gray-300">{course.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.academyDescription && (
                <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.academyDescription}
                </p>
              )}

              {item.activities && item.activities.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Activities & Societies:
                  </h4>
                  <ul className="space-y-2">
                    {item.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">▹</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.courses && item.courses.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {item.institution === "Purdue University" ? "Selected Coursework" : "Dual Enrollment Coursework:"}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.courses.map((course) => (
                      <div
                        key={course.code}
                        className="bg-gray-50 dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700"
                      >
                        <span className="font-semibold text-primary-600 dark:text-primary-400">
                          {course.code}:
                        </span>{' '}
                        <span className="text-gray-700 dark:text-gray-300">{course.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.tech && item.tech.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education


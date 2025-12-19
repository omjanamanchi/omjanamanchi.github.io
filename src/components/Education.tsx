import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/education'
import { MapPin, Calendar, Award } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={ref} className="section-padding bg-bg-primary">
      <div className="container-max">
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            My Education Journey
          </motion.h2>
        </div>

        <div className="space-y-8 mt-12">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`card-gradient-hover ${
                index === 0 ? 'border-2 border-accent-cyan' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="company-logo">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
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
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-text-primary">
                        {item.institution}
                      </h3>
                    </div>
                    <p className="text-lg text-accent-cyan font-medium mb-2">
                      {item.degree}
                    </p>
                    {item.description && (
                      <p className="text-base text-text-secondary mb-2">
                        {item.description}
                      </p>
                    )}
                    {item.gpa && (
                      <div className="flex items-center gap-2 text-accent-green font-semibold">
                        <Award className="w-5 h-5" />
                        <span>GPA: {item.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <div className="flex items-center gap-2 justify-end text-text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-2 justify-end text-text-secondary">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {item.academyCourses && item.academyCourses.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Computer Science Academy
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.academyCourses.map((course) => (
                      <div
                        key={course.code}
                        className="bg-bg-elevated p-3 rounded-lg border border-border-default"
                      >
                        <span className="text-text-secondary">{course.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.academyDescription && (
                <p className="mt-6 text-text-secondary leading-relaxed">
                  {item.academyDescription}
                </p>
              )}

              {item.activities && item.activities.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Activities & Societies:
                  </h4>
                  <ul className="space-y-2">
                    {item.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-text-secondary"
                      >
                        <span className="text-accent-cyan mt-1">▹</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.courses && item.courses.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    {item.institution === "Purdue University" ? "Selected Coursework" : "Dual Enrollment Coursework:"}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.courses.map((course) => (
                      <div
                        key={course.code}
                        className="bg-bg-elevated p-3 rounded-lg border border-border-default"
                      >
                        <span className="font-semibold text-accent-cyan">
                          {course.code}:
                        </span>{' '}
                        <span className="text-text-secondary">{course.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-text-secondary"
                      >
                        <span className="text-accent-cyan mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.tech && item.tech.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="badge"
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


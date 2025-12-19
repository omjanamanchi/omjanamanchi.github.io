import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/skills'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Split skills into left and right columns
  const leftColumnSkills = skills.slice(0, Math.ceil(skills.length / 2))
  const rightColumnSkills = skills.slice(Math.ceil(skills.length / 2))
  const maxPairs = Math.max(leftColumnSkills.length, rightColumnSkills.length)

  return (
    <section id="skills" ref={ref} className="section-padding bg-slate-800 dark:bg-slate-900">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-10">
          {Array.from({ length: maxPairs }).map((_, pairIndex) => {
            const leftCategory = leftColumnSkills[pairIndex]
            const rightCategory = rightColumnSkills[pairIndex]

            return (
              <div key={pairIndex} className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Left Category */}
                {leftCategory && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: pairIndex * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-5 border-b border-gray-600 pb-2">
                      {leftCategory.name}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {leftCategory.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: pairIndex * 0.1 + skillIndex * 0.05 }}
                          className="px-4 py-2.5 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Right Category */}
                {rightCategory && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: pairIndex * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-5 border-b border-gray-600 pb-2">
                      {rightCategory.name}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {rightCategory.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: pairIndex * 0.1 + skillIndex * 0.05 }}
                          className="px-4 py-2.5 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills


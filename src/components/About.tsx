import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { label: 'GPA', value: '4.0/4.0' },
    { label: 'Leadership Positions', value: '5+' },
    { label: 'Projects', value: '10+' },
    { label: 'Languages', value: '15+' },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a sophomore Computer Science major at <span className="font-semibold text-primary-600 dark:text-primary-400">Purdue University</span> with a perfect <span className="font-semibold">4.0/4.0 GPA</span>, pursuing minors in Mathematics & Finance. My passion lies at the intersection of quantitative finance, algorithmic trading, and machine learning.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As <span className="font-semibold">President of the Computer Science Club</span> at Purdue Indianapolis, I lead a community of 120+ members and organized Hack Indy 2026 with 200+ participants. I also serve as a <span className="font-semibold">Quantitative Analyst at Boiler Quant</span>, where I've built financial libraries and trading systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My research experience includes work at the <span className="font-semibold">UC Berkeley BAIR Lab</span>, where I developed NLP algorithms for cultural heritage preservation. I'm passionate about building production-grade systems that solve real-world problems.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


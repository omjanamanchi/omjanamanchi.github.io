import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { label: 'Years SWE Experience', value: '5+' },
    { label: 'Hackathon Winner', value: '3X' },
    { label: 'Projects', value: '15+' },
    { label: 'Leadership Positions', value: '5+' },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-bg-surface">
      <div className="container-max">
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Who I Am
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm a sophomore Computer Science major at <span className="font-semibold text-accent-cyan">Purdue University</span> concentrating in Machine Intelligence, pursuing minors in Mathematics & Finance. My passion lies at the intersection of quantitative finance, algorithmic trading, and machine learning.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              As <span className="font-semibold text-accent-purple">President of the Computer Science Club</span> at Purdue Indianapolis, I lead a community of 120+ members and organized Hack Indy 2026 with 200+ participants. I also serve as a <span className="font-semibold text-accent-cyan">Quantitative Analyst at Boiler Quant</span>, where I've built financial libraries and trading systems.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My research experience includes work at the <span className="font-semibold text-accent-purple">UC Berkeley BAIR Lab</span>, where I developed NLP algorithms for cultural heritage preservation. I'm passionate about building production-grade systems that solve real-world problems.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-gradient-hover"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">
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

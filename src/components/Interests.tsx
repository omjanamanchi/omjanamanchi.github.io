import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, TrendingUp, Users, BookOpen } from 'lucide-react'

const Interests = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const interests = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Competitive Programming',
      description:
        'Participating in CS 21000 Competitive Programming I, solving problems on Codeforces, and continuously improving algorithmic problem-solving skills.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Quantitative Finance & Trading',
      description:
        'Passionate about markets, algorithmic trading strategies, and building quantitative models. Active member of Boiler Quant working on trading systems.',
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Chess',
      description:
        'Founder of high school Chess Club and school district chess program. Competed in New Jersey State Chess Federation tournaments.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Service',
      description:
        'Former President of WISH (Working in Senior Homes) club, organizing community service initiatives and building connections with local seniors.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Teaching & Mentorship',
      description:
        'Enjoy sharing knowledge as a Teaching Assistant, helping students learn programming fundamentals and developer tools.',
    },
  ]

  return (
    <section id="interests" ref={ref} className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Beyond the Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          When I'm not coding, I enjoy exploring these interests and hobbies that keep me balanced and inspired.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests


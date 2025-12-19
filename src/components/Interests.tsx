import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Users, Crown, CreditCard } from 'lucide-react'

const Interests = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const interests = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Chess',
      description:
        'Founder of high school Chess Club and school district chess program. Competed in New Jersey State Chess Federation tournaments.',
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Competitive Programming',
      description:
        'Participating in CS 21000 Competitive Programming I, solving problems on Codeforces, and continuously improving algorithmic problem-solving skills.',
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Poker',
      description:
        'Enjoy playing poker and analyzing game theory, probability, and strategic decision-making in competitive card games.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Service',
      description:
        'Former President of WISH (Working in Senior Homes) club, organizing community service initiatives and building connections with local seniors.',
    },
  ]

  return (
    <section id="interests" ref={ref} className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
        >
          Beyond the Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-text-primary mb-12 max-w-2xl mx-auto"
        >
          When I'm not coding, I enjoy exploring these interests{' '}
          <br />
          and hobbies that keep me balanced and inspired.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {interest.title}
              </h3>
              <p className="text-text-primary leading-relaxed">
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


import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      // Get navbar height from CSS variable, fallback to 80px
      const navbarHeight = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-height')) || 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-screen filter blur-xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-screen filter blur-xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(88, 166, 255, 0.25) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.4, 0, 0.6, 1],
          }}
        />
      </div>

      <div className="container-max relative z-10 section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 xl:gap-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-[1.5] text-center lg:text-left w-full max-w-2xl lg:max-w-none"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl text-text-secondary mb-9 font-medium tracking-wide"
            >
              Hey! I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-display-2xl font-black mb-12 gradient-text tracking-wide"
            >
              Om Janamanchi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-6 font-medium md:whitespace-nowrap tracking-wide"
            >
              Software Engineering Intern @ Whisp & RockABlock
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-6 font-medium md:whitespace-nowrap tracking-wide"
            >
              CS @ Purdue | Python, ML, Quant Finance
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-16 font-medium md:whitespace-nowrap tracking-wide"
            >
              President @ CS Club, Quant Analyst @ Boiler Quant
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com/in/omjanamanchi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface rounded-lg border border-border-default hover:border-accent-cyan transition-all duration-300 hover:-translate-y-1 text-text-secondary hover:text-accent-cyan font-medium"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/omjanamanchi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface rounded-lg border border-border-default hover:border-accent-purple transition-all duration-300 hover:-translate-y-1 text-text-secondary hover:text-accent-purple font-medium"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="mailto:omjanamanchi@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface rounded-lg border border-border-default hover:border-accent-cyan transition-all duration-300 hover:-translate-y-1 text-text-secondary hover:text-accent-cyan font-medium"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="/Om_Janamanchi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface rounded-lg border border-border-default hover:border-accent-green transition-all duration-300 hover:-translate-y-1 text-text-secondary hover:text-accent-green font-medium"
                aria-label="Resume"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-25 blur-2xl"></div>
              <img
                src="/omjanamanchi-headshot.jpg"
                alt="Om Janamanchi"
                className="relative w-full h-full rounded-full object-cover object-center border-4 border-accent-cyan/40 hover:border-accent-cyan transition-all duration-300 hover:shadow-glow-cyan"
                style={{ 
                  borderRadius: '50%',
                  aspectRatio: '1 / 1',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ChevronDown className="w-8 h-8 text-accent-cyan hover:text-accent-purple transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

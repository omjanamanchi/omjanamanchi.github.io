import { useState, useEffect } from 'react'
import { Menu, X, GraduationCap, Briefcase, Lightbulb, CheckSquare2, FlaskConical, Users, Rocket, Link } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar = (_props: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navLinks = [
    { name: 'Education', href: '#education', icon: GraduationCap, color: 'purple' },
    { name: 'Experience', href: '#experience', icon: Briefcase, color: 'cyan' },
    { name: 'Research', href: '#research', icon: FlaskConical, color: 'cyan' },
    { name: 'Leadership', href: '#leadership', icon: Users, color: 'purple' },
    { name: 'Projects', href: '#projects', icon: Lightbulb, color: 'purple' },
    { name: 'Skills', href: '#skills', icon: CheckSquare2, color: 'green' },
    { name: 'Hobbies', href: '#interests', icon: Rocket, color: 'cyan' },
    { name: 'Connect', href: '#contact', icon: Link, color: 'cyan' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // navLinks is a constant array, safe to omit from dependencies

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
    setIsMobileMenuOpen(false)
  }

  const getIconColor = (color: string, isActive: boolean) => {
    if (isActive) {
      const colors: { [key: string]: string } = {
        cyan: 'text-accent-cyan',
        purple: 'text-accent-purple',
        green: 'text-accent-green',
      }
      return colors[color] || 'text-accent-cyan'
    }
    return 'text-text-secondary'
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container-max w-full">
        <div className="flex items-center justify-between w-full" style={{ height: 'var(--navbar-height, 5rem)' }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src="/logo_apple_premium_centered.svg"
              alt="OJ Logo"
              className="w-14 h-14"
              style={{ 
                filter: 'drop-shadow(0 2px 8px rgba(88, 166, 255, 0.2))',
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-subtle text-text-primary'
                      : 'text-text-secondary hover:text-accent-cyan hover:bg-bg-surface'
                  }`}
                >
                  <div className={isActive ? getIconColor(link.color, true) : 'text-text-secondary group-hover:text-accent-cyan'}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        link.color === 'cyan' ? 'bg-accent-cyan' :
                        link.color === 'purple' ? 'bg-accent-purple' :
                        'bg-accent-green'
                      }`}
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-bg-surface border border-border-default text-text-secondary hover:text-accent-cyan transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-t border-border-default"
          >
            <div className="container-max px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-subtle text-accent-cyan'
                        : 'text-text-secondary hover:bg-bg-elevated hover:text-accent-cyan'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

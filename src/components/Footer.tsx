import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const quickLinks = [
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-black text-text-primary py-16 relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Name */}
          <div className="flex items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'serif', transform: 'rotate(-2deg)' }}>
              Om<br />Janamanchi
            </h3>
          </div>

          {/* Center - Thank You Message */}
          <div className="flex items-center">
            <p className="text-text-primary text-base leading-relaxed">
              Thanks for taking the time to check out my website! I hope you enjoyed getting to know me a little better. I'm always excited to meet new people, so don't hesitate to reach out if you have any questions or just want to connect.
            </p>
          </div>

          {/* Right - Social Icons Grid */}
          <div className="flex items-center justify-end">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/omjanamanchi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://github.com/omjanamanchi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:omjanamanchi@gmail.com"
                className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a
                href="/Om_Janamanchi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Resume"
              >
                <FileText className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            {/* Left - Copyright */}
            <div className="text-sm text-text-primary whitespace-nowrap flex-shrink-0">
              © {currentYear} Om Janamanchi. All rights reserved.
            </div>

            {/* Center - Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-text-primary flex-1 px-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right - Open Source License */}
            <div className="text-sm text-text-primary whitespace-nowrap flex-shrink-0">
              A{' '}
              <a
                href="https://github.com/omjanamanchi/omjanamanchi.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                free and open-source
              </a>{' '}
              creation, licensed MIT
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


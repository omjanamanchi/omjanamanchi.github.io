import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Research from './components/Research'
import Leadership from './components/Leadership'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode] = useState(true) // Always dark mode for Quant Finance Dark theme

  useEffect(() => {
    // Always set dark mode class
    document.documentElement.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    // Keep function for Navbar compatibility, but theme stays dark
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Leadership />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


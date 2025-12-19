import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects, ProjectCategory } from '../data/projects'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')

  const categories: ProjectCategory[] = ['All', 'Quant Finance', 'AI/ML', 'Web Dev', 'Game Dev', 'Mobile Dev']

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter))

  return (
    <section id="projects" ref={ref} className="section-padding bg-bg-primary">
      <div className="container-max">
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label"
          >
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-primary text-text-primary shadow-cyan-md'
                  : 'bg-bg-surface text-text-secondary hover:text-accent-cyan hover:border hover:border-accent-cyan/30 border border-border-default'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-gradient-hover flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4 pt-5 border-t border-border-default">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-bg-elevated hover:bg-bg-surface text-accent-cyan hover:text-accent-purple rounded-lg text-base font-medium transition-all duration-300 border border-border-default hover:border-accent-cyan"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-primary text-text-primary rounded-lg text-base font-medium transition-all duration-300 hover:shadow-glow-cyan"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live
                  </a>
                )}
                {project.links && project.links.length > 0 && (
                  <>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-primary text-text-primary rounded-lg text-base font-medium transition-all duration-300 hover:shadow-glow-cyan"
                      >
                        <ExternalLink className="w-5 h-5" />
                        {link.label}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-text-secondary mt-8"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  )
}

export default Projects

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Github, MapPin, Send, Download, Phone } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'YOUR_SERVICE_ID' || 
          templateId === 'YOUR_TEMPLATE_ID' || 
          publicKey === 'YOUR_PUBLIC_KEY') {
        // Fallback to mailto if EmailJS is not configured
        const subject = encodeURIComponent(`Contact from ${data.name}`)
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)
        const mailtoLink = `mailto:omjanamanchi@gmail.com?subject=${subject}&body=${body}`
        window.location.href = mailtoLink
        
        // Show success message after a short delay
        setTimeout(() => {
          setSubmitStatus('success')
          reset()
          setIsSubmitting(false)
        }, 500)
        return
      }

      // Send email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'omjanamanchi@gmail.com',
        },
        publicKey
      )
      
      // Show success message
      setSubmitStatus('success')
      reset()
      setIsSubmitting(false)
    } catch (error) {
      console.error('Email sending failed:', error)
      // Fallback to mailto on error
      try {
        const subject = encodeURIComponent(`Contact from ${data.name}`)
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)
        const mailtoLink = `mailto:omjanamanchi@gmail.com?subject=${subject}&body=${body}`
        window.location.href = mailtoLink
        
        setTimeout(() => {
          setSubmitStatus('success')
          reset()
          setIsSubmitting(false)
        }, 500)
      } catch (fallbackError) {
        setSubmitStatus('error')
        setIsSubmitting(false)
      }
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Let's Connect
          </h2>
          <p className="text-lg text-text-primary max-w-4xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or<br />
            chat about quant finance, ML, and software engineering. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4 pt-[22px]">
                <a
                  href="mailto:omjanamanchi@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Mail className="w-6 h-6 text-text-primary group-hover:text-red-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary">Email</p>
                    <p className="text-text-primary font-medium">
                      omjanamanchi@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+17329472233"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Phone className="w-6 h-6 text-text-primary group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary">Phone</p>
                    <p className="text-text-primary font-medium">
                      732-947-2233
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/omjanamanchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-6 h-6 text-text-primary group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary">LinkedIn</p>
                    <p className="text-text-primary font-medium">linkedin.com/in/omjanamanchi</p>
                  </div>
                </a>

                <a
                  href="https://github.com/omjanamanchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Github className="w-6 h-6 text-text-primary group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary">GitHub</p>
                    <p className="text-text-primary font-medium">github.com/omjanamanchi</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <MapPin className="w-6 h-6 text-text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary">Location</p>
                    <p className="text-text-primary font-medium">
                      New York Metropolitan Area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/Om_Janamanchi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl mt-auto"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col flex-1">
              <div className="pt-0">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full h-[88px] px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full h-[88px] px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full h-[296px] px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


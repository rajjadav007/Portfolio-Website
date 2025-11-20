import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { HiMail, HiUser, HiChatAlt } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'rajjadav0906@gmail.com',
      link: 'mailto:rajjadav0906@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/raj-jadav90/',
      color: 'text-blue-400'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com/rajjadav007',
      color: 'text-gray-300'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <HiUser className="text-gray-400" />
                    </div>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <HiMail className="text-gray-400" />
                    </div>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                      <HiChatAlt className="text-gray-400" />
                    </div>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-primary/50 transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className={`text-4xl ${social.color} group-hover:scale-110 transition-transform`}>
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{social.label}</h4>
                    <p className="text-gray-400 text-sm">{social.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Available for freelance work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Ready to collaborate</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

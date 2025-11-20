import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      link: 'https://github.com/rajjadav007',
      color: 'hover:text-gray-300'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/raj-jadav90/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      link: 'mailto:rajjadav0906@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-darker border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Raj Jadav</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Full-Stack & AI Developer passionate about building innovative solutions and learning new technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <a 
                  href="mailto:rajjadav0906@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  rajjadav0906@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Location</p>
                <p className="text-gray-300">India</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Availability</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center sm:text-left"
            >
              © {currentYear} Raj Jadav — All Rights Reserved. Built with{' '}
              <FaHeart className="inline text-red-500 animate-pulse" /> and React
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-primary/50 transition-all"
              aria-label="Scroll to top"
            >
              <HiArrowUp className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

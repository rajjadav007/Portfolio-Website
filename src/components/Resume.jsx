import { motion } from 'framer-motion'
import { HiDownload, HiDocumentText } from 'react-icons/hi'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/src/assets/resume.pdf'
    link.download = 'Raj_Jadav_Resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        {/* Resume Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* PDF Embed */}
          <div className="relative bg-darker rounded-t-2xl overflow-hidden" style={{ height: '70vh', minHeight: '600px' }}>
            <iframe
              src="/src/assets/resume.pdf"
              className="w-full h-full"
              title="Raj Jadav Resume"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex flex-col items-center justify-center text-center p-8 space-y-6">
                    <div class="text-8xl gradient-text">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-32 h-32">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white">Resume Preview</h3>
                    <p class="text-gray-400 max-w-md">Resume preview will appear here. Click the download button below to get the PDF file.</p>
                  </div>
                `
              }}
            />
          </div>

          {/* Download Section */}
          <div className="p-8 bg-dark/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <HiDocumentText className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Raj_Jadav_Resume.pdf</h3>
                <p className="text-gray-400 text-sm">Full-Stack & AI Developer</p>
              </div>
            </div>

            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-primary/50 transition-all"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold gradient-text mb-2">BCA</div>
            <div className="text-gray-400 text-sm">Education</div>
          </div>
          <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold gradient-text mb-2">4+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold gradient-text mb-2">2+</div>
            <div className="text-gray-400 text-sm">Hackathons</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

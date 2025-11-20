import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiCube, HiDatabase, HiLightningBolt } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: <HiCode className="text-4xl" />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: <HiCube className="text-4xl" />,
      title: "AI + Automation",
      description: "Integrating AI and machine learning into practical solutions"
    },
    {
      icon: <HiDatabase className="text-4xl" />,
      title: "Database Design",
      description: "Creating efficient and scalable database architectures"
    },
    {
      icon: <HiLightningBolt className="text-4xl" />,
      title: "Hackathon Problem Solving",
      description: "Rapid prototyping and innovative solutions under pressure"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl transform scale-95"></div>
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative glass rounded-2xl p-2 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-dark to-darker rounded-xl flex items-center justify-center">
                  <img 
                    src="/src/assets/raj-photo.png" 
                    alt="Raj Jadav" 
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="text-6xl gradient-text font-bold">RJ</div>'
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Raj Jadav</span>, a BCA student specializing in 
                <span className="text-primary font-semibold"> full-stack development</span> and 
                <span className="text-secondary font-semibold"> AI-based systems</span>. I work with Java, PHP, JavaScript, Python, and MySQL to build functional real-world applications.
              </p>
              <p>
                I enjoy converting ideas into prototypes during hackathons and developing production-quality software. 
                My approach combines technical expertise with creative problem-solving to deliver impactful solutions.
              </p>
              <p>
                Currently seeking <span className="text-primary font-semibold">internship opportunities</span> in 
                full-stack and AI development where I can contribute to innovative projects and continue growing as a developer.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              <div className="text-center glass rounded-xl p-4">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-gray-400 mt-1">Languages</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-gray-400 mt-1">Hackathons</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

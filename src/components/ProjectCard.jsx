import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex items-center justify-center text-6xl font-bold gradient-text">
                ${project.title.substring(0, 2).toUpperCase()}
              </div>
            `
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        {project.features && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-300">Key Features:</p>
            <ul className="text-sm text-gray-400 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <HiExternalLink className="text-xl" />
            View Demo
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-all"
          >
            <HiCode className="text-xl" />
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

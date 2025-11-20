import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Hospital Management System",
      description: "A comprehensive full-stack hospital management solution built with Java/PHP and MySQL. Streamlines hospital operations with role-based access control and complete patient lifecycle management.",
      features: [
        "CRUD operations for patients, doctors, and staff",
        "Role-based login and authentication system",
        "Appointment scheduling and management",
        "Billing and payment processing",
        "Patient records and medical history tracking"
      ],
      techStack: ["Java", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "/src/assets/project1.png",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "AI-Based Attendance System",
      description: "Award-winning hackathon project featuring facial recognition technology with QR code fallback. Automates attendance tracking using computer vision and machine learning.",
      features: [
        "Real-time face recognition using OpenCV",
        "QR code scanning as backup method",
        "Automated attendance logging",
        "Admin dashboard for attendance reports",
        "Integration with existing database systems"
      ],
      techStack: ["Python", "OpenCV", "PHP", "MySQL", "Machine Learning"],
      image: "/src/assets/project2.png",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Trading Analyzer",
      description: "Hackathon-developed stock market analysis tool providing real-time technical indicators. Helps traders make informed decisions with automated signal generation.",
      features: [
        "Moving Average (MA) calculations",
        "Relative Strength Index (RSI) indicators",
        "Real-time stock data visualization",
        "Automated trading signals",
        "Historical data analysis"
      ],
      techStack: ["JavaScript", "Python", "Chart.js", "REST APIs", "Data Analysis"],
      image: "/src/assets/project3.png",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Social Media App Prototype",
      description: "Modern social networking platform prototype with complete user authentication, content creation, and interactive feed. Built with scalability and user experience in mind.",
      features: [
        "Secure user authentication system",
        "Post creation with media upload",
        "Dynamic news feed with real-time updates",
        "User profiles and follower system",
        "Like, comment, and share functionality"
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express", "HTML", "CSS"],
      image: "/src/assets/project4.png",
      demoLink: "#",
      codeLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning full-stack development, AI integration, and rapid prototyping
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg mb-6">
              Interested in collaborating or want to see more of my work?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

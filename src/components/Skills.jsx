import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiC, 
  SiPython, 
  SiJavascript, 
  SiPhp, 
  SiMysql,
  SiGit,
  SiGithub
} from 'react-icons/si'
import { 
  HiLightBulb, 
  HiUserGroup, 
  HiStar, 
  HiChatAlt, 
  HiClock,
  HiCode,
  HiDatabase,
  HiServer
} from 'react-icons/hi'
import { FaJava, FaCode } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programmingLanguages = [
    { name: 'C', icon: <SiC />, color: 'text-blue-400' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-400' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-300' },
    { name: 'PHP', icon: <SiPhp />, color: 'text-purple-400' },
    { name: 'SQL', icon: <SiMysql />, color: 'text-blue-500' }
  ]

  const tools = [
    { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-300' },
    { name: 'VS Code', icon: <VscCode />, color: 'text-blue-400' },
    { name: 'XAMPP', icon: <HiServer />, color: 'text-orange-400' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
    { name: 'API Testing', icon: <FaCode />, color: 'text-green-400' }
  ]

  const softSkills = [
    { name: 'Problem Solving', icon: <HiLightBulb />, color: 'text-yellow-400' },
    { name: 'Teamwork', icon: <HiUserGroup />, color: 'text-blue-400' },
    { name: 'Leadership', icon: <HiStar />, color: 'text-purple-400' },
    { name: 'Communication', icon: <HiChatAlt />, color: 'text-green-400' },
    { name: 'Time Management', icon: <HiClock />, color: 'text-red-400' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const SkillBadge = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
    >
      <div className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
        {skill.icon}
      </div>
      <span className="text-white font-medium text-center">{skill.name}</span>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Programming Languages</span>
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {programmingLanguages.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </motion.div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Tools & Technologies</span>
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {tools.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Soft Skills</span>
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
            >
              {softSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Constantly learning and adapting to new technologies. 
              I believe in writing clean, maintainable code and building solutions that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

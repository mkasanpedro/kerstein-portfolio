import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import shirtDesign from '../assets/shirt-design.png'
import './Projects.css'

function Projects() {
  const mainProject = {
    title: 'Computer Engineering Department Student Council Uniform Design',
    description: 'A comprehensive design for the CPE-DSC shirt/uniform. Designed with modern aesthetics combining the college brand, tech elements, and department identity. This project showcases my ability to blend technical concepts with creative visual design.',
    image: shirtDesign,
    tools: ['Canva', 'Photopea'],
    highlights: [
      'Custom color scheme integration',
      'Technical pattern design',
      'Professional branding application',
      'Multi-view presentation'
    ]
  }

  const softwareTools = [
    {
      name: 'GitHub',
      icon: '💻',
      description: 'Version control & collaboration',
      url: 'https://github.com'
    },
    {
      name: 'Canva',
      icon: '🎨',
      description: 'Graphic design & templates',
      url: 'https://canva.com'
    },
    {
      name: 'Photopea',
      icon: '🖼️',
      description: 'Advanced image editing',
      url: 'https://photopea.com'
    },
    {
      name: 'CapCut',
      icon: '🎬',
      description: 'Video editing & effects',
      url: 'https://www.capcut.com'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>PROJECTS</h1>
        <p className="subtitle">Creative Work & Design Solutions</p>
      </div>

      {/* Featured Project */}
      <motion.section
        className="featured-project"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="featured-grid">
          <div className="featured-image">
            <img
              src={mainProject.image}
              alt={mainProject.title}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400"%3E%3Crect fill="%23333" width="300" height="400"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14"%3EProject Image%3C/text%3E%3C/svg%3E'
              }}
            />
          </div>
          <div className="featured-content">
            <h2>{mainProject.title}</h2>
            <p className="project-description">{mainProject.description}</p>

            <div className="tools-section">
              <h3>Tools I Used</h3>
              <div className="tools-list">
                {mainProject.tools.map((tool, index) => (
                  <span key={index} className="tool-badge">{tool}</span>
                ))}
              </div>
            </div>

            <div className="highlights-section">
              <h3>Highlights</h3>
              <ul className="highlights-list">
                {mainProject.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Software Tools Section */}
      <motion.section
        className="software-tools-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Tools I Use As P.R.O.</h2>
        <p className="section-subtitle">Essential software for creative content creation & design</p>

        <div className="tools-grid">
          {softwareTools.map((tool, index) => (
            <motion.a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="tool-card-content">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <div className="tool-link">
                  <ExternalLink size={16} />
                  <span>Visit</span>
                </div>
              </div>
              <div className="tool-glow"></div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Project Philosophy */}
      <motion.section
        className="philosophy-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="philosophy-card">
          <h2>My Design Philosophy</h2>
          <p>
            Every project I undertake is an opportunity to blend technical excellence with creative expression. Whether it's designing a uniform for the student council or creating video content, I approach each task with the same dedication to quality and innovation. I believe that good design is not just beautiful—it's functional, meaningful, and tells a story.
          </p>
          <div className="philosophy-tags">
            <span>Creative Problem Solving</span>
            <span>User-Focused Design</span>
            <span>Technical Excellence</span>
            <span>Brand Consistency</span>
          </div>
        </div>
      </motion.section>

      {/* Future Projects Preview */}
      <motion.section
        className="future-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>More Coming Soon</h2>
        <p className="coming-soon-text">
          As a P.R.O. with a passion for creative design and coding, I'm constantly working on new projects. Stay tuned for more amazing content designs, technical solutions, and creative collaborations!
        </p>
        <div className="coming-soon-accent">✦ Check back soon ✦</div>
      </motion.section>
    </div>
  )
}

export default Projects
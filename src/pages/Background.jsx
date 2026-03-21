import React from 'react'
import { motion } from 'framer-motion'
import './Background.css'

function Background() {
  const timelineEvents = [
    {
      year: '7th Grade',
      title: 'Discovery of Talent',
      description: 'Discovered my passion for drawing and art during Junior High School.',
      side: 'left'
    },
    {
      year: 'Senior High',
      title: 'Art Club Leadership',
      description: 'Served as Secretary of the Art Club and earned multiple recognition awards.',
      side: 'right'
    },
    {
      year: '2024',
      title: 'Transition to Tech',
      description: 'Started Computer Engineering studies, bringing creativity into technical work.',
      side: 'left'
    },
    {
      year: '2024-Present',
      title: 'Public Relations Officer',
      description: 'Leading creative content and design initiatives for the Computer Engineering Department Student Council.',
      side: 'right'
    }
  ]

  const familyFacts = [
    {
      title: 'Entire Family Left-Handed',
      description: 'A rare and special trait that runs through our bloodline'
    },
    {
      title: 'Natural Artists',
      description: 'Some of my cousins on both sides are naturally talented artists'
    },
    {
      title: 'Creative Heritage',
      description: 'Creativity is embedded in our family DNA'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="background-page">
      <div className="bg-grid"></div>

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>MY BACKGROUND</h1>
        <p className="subtitle">A Journey of Logic & Creativity</p>
      </motion.div>

      <motion.section
        className="story-section"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>WHO I AM</h2>
        <p className="story-text">
          I'm a second-year Computer Engineering student who thrives on blending logic with creativity. From a young age, I discovered my talent for drawing—something that ran through my entire family. My parents were amazed that I picked up this skill naturally, and it turns out we're a family of left-handed individuals!
        </p>
        <p className="story-text">
          While I once dreamed of becoming an architect, I realized I could bring my creativity to different paths, especially in tech. Computer Engineering might have been an unexpected choice, but I've found my true calling: blending technical expertise with artistic vision. I apply my creativity everywhere—from frontend design to UI/UX work to content creation.
        </p>
        <p className="story-text highlight">
          "I may have run away from my passion, but it does not mean that it left me."
        </p>
      </motion.section>

      <motion.section
        className="timeline-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>MY TIMELINE</h2>
        <div className="timeline">
          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${event.side}`}
              initial={{ opacity: 0, x: event.side === 'left' ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
            >
              <div className="timeline-icon">{idx + 1}</div>
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="family-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>FAMILY LEGACY</h2>
        <div className="family-grid">
          {familyFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              className="family-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="fun-fact-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="fun-fact-card">
          <p>
            <span className="fact-accent">FUN FACT:</span> I discovered my drawing talent in 7th grade! My entire family is left-handed. Some of my cousins on both sides are naturally talented artists. While I initially pursued architecture, I realized my true passion lies in blending technical innovation with creative design. Computer Engineering was a last-minute enrollment choice, but it turned out to be the perfect path for me!
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default Background
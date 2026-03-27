import React from 'react'
import { motion } from 'framer-motion'
import './Background.css'

function Background() {
  // Mapped exactly from your provided text
  const timelineEvents = [
    {
      year: 'Age 4-5',
      title: 'The Twist of Fate',
      description: 'Started as a "saling pusa" but officially entered Grade 1 at just five years old due to a misunderstanding that created an official report card.',
      side: 'left'
    },
    {
      year: 'Elementary',
      title: 'Proving Capability',
      description: 'Granted admission to second grade after the Principal discovered advanced reading skills. Graduated from elementary school with honors.',
      side: 'right'
    },
    {
      year: 'Junior High School',
      title: 'Academic Excellence',
      description: 'Graduated with High Honors.',
      side: 'left'
    },
    {
      year: 'Senior High School',
      title: 'Continued Success',
      description: 'Graduated with Honors and received multiple special awards while discovering a deep passion for the arts.',
      side: 'right'
    },
    {
      year: 'College',
      title: 'Computer Engineering & P.R.O.',
      description: 'Pivoted from Architecture to Computer Engineering. Currently serving as the Public Relations Officer for the college department.',
      side: 'left'
    }
  ]

  return (
    <div className="background-page" id="background">
      <div className="bg-grid"></div>

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1>MY BACKGROUND</h1>
        <p className="subtitle">A Journey of Logic & Creativity</p>
      </motion.div>

      <motion.section
        className="story-section"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>THE BEGINNING</h2>
        <p className="story-text">
          Kerstein’s academic journey began with a twist of fate. At age four, she started daycare at the same school where her mother taught. Initially, her mother intended for her to be a "saling pusa" (an informal observer), but a misunderstanding by the teacher led to the creation of an official report card. Remarkably, the card was issued for Grade 1 rather than Kindergarten. As a result, Kerstein unexpectedly found herself navigating the first grade at just five years old.
        </p>
        
        <h2 style={{ marginTop: '40px' }}>ACADEMIC EXCELLENCE</h2>
        <p className="story-text">
          When her mother attempted to transfer her to a private school for second grade, the administration initially hesitated due to her age. However, after the Principal discovered Kerstein’s advanced reading skills, she was granted admission. She proved her capability by graduating from elementary school with honors.
        </p>
        
        <h2 style={{ marginTop: '40px' }}>THE SHIFT IN PASSION</h2>
        <p className="story-text">
          During high school, Kerstein discovered a deep passion for the arts, which initially drew her toward a degree in Architecture. However, she ultimately made the pragmatic decision to pivot. Concerned by the lengthy study period, the pressure of board exams, and the historically low compensation for architects in the Philippines, she realized the return on investment didn't align with the immense effort required.
        </p>

        <h2 style={{ marginTop: '40px' }}>A NEW PATH</h2>
        <p className="story-text">
          Choosing a more sustainable path, she enrolled in Computer Engineering. While her studies are technical, Kerstein hasn't abandoned her creative roots; she currently serves as the Public Relations Officer for her college department, where she continues to blend her leadership skills with her artistic eye.
        </p>
      </motion.section>

      <motion.section
        className="timeline-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ marginTop: '60px' }}
      >
        <h2>MY TIMELINE</h2>
        <div className="timeline">
          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${event.side}`}
              initial={{ opacity: 0, x: event.side === 'left' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
    </div>
  )
}

export default Background
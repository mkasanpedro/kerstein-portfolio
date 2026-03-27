import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// --- EXISTING IMPORTS ---
import shirtDesign from '../assets/shirt-design.png'
import leadCon from '../assets/lead-con.jpeg'
import groupCounselling from '../assets/group-counselling.jpeg'
import kkb from '../assets/kkb.jpg'

// --- NEW IMPORTS: Publication Materials ---
import gablast from '../assets/gablast.png'
import prelim from '../assets/prelim.png'
import spoken from '../assets/spoken.png'
import roster from '../assets/roster.png'
import cpeblast from '../assets/cpeblast.png'

// --- NEW IMPORTS: Artworks ---
import mikasa from '../assets/mikasa.jpeg'
import serpent from '../assets/serpent.jpeg'

import './Projects.css'

function Projects() {
  // Master state for the fullscreen modal (handles all galleries)
  const [selectedImage, setSelectedImage] = useState(null);

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

  const pubMats = [
    { title: 'General Assembly DP Blast', image: gablast },
    { title: 'Prelim Examination', image: prelim },
    { title: 'Spoken Poetry', image: spoken },
    { title: 'CEA Roster Hunt', image: roster },
    { title: 'CpE DP Blast', image: cpeblast }
  ]

  const artworks = [
    { title: 'Attack on Titan - Mikasa', image: mikasa },
    { title: 'Serpent', image: serpent }
  ]

  const attendedEvents = [
    { title: 'Leadership Converge 2025', image: leadCon },
    { title: 'Leadership: Making a Positive Difference Together', image: groupCounselling },
    { title: 'Kabataang KaKaiBa: Nagmamahal sa Diyos at Bayan', image: kkb }
  ]

  const softwareTools = [
    { name: 'GitHub', icon: '💻', description: 'Version control & collaboration', url: 'https://github.com' },
    { name: 'Canva', icon: '🎨', description: 'Graphic design & templates', url: 'https://canva.com' },
    { name: 'Photopea', icon: '🖼️', description: 'Advanced image editing', url: 'https://photopea.com' },
    { name: 'CapCut', icon: '🎬', description: 'Video editing & effects', url: 'https://www.capcut.com' }
  ]

  return (
    <div className="projects-page" id="projects">
      <div className="page-header">
        <h1>PROJECTS & EVENTS</h1>
        <p className="subtitle">Creative Work, Design Solutions & Engagements</p>
      </div>

      {/* Featured Project: Shirt Design */}
      <motion.section
        className="featured-project"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="featured-grid">
          <div className="featured-image">
            <img src={mainProject.image} alt={mainProject.title} onClick={() => setSelectedImage(mainProject.image)} style={{ cursor: 'pointer' }} />
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

      {/* NEW: Publication Materials Gallery */}
      <section className="events-section" style={{ marginTop: '80px' }}>
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          Publication Materials
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '15px' }}>
          Click any design to view it full screen.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
          {pubMats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(item.image)}
              style={{
                background: 'var(--surface)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255, 102, 51, 0.2)', display: 'flex', flexDirection: 'column', textAlign: 'center', cursor: 'pointer'
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '10px', marginBottom: '20px', background: '#111' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW: Artworks Gallery */}
      <section className="events-section" style={{ marginTop: '80px' }}>
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          Artworks
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '15px' }}>
          Click any artwork to view it full screen.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
          {artworks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(item.image)}
              style={{
                background: 'var(--surface)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255, 102, 51, 0.2)', display: 'flex', flexDirection: 'column', textAlign: 'center', cursor: 'pointer'
              }}
            >
              <div style={{ width: '100%', height: '250px', overflow: 'hidden', borderRadius: '10px', marginBottom: '20px', background: '#111' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Attended Sessions/Events Gallery */}
      <section className="events-section" style={{ marginTop: '80px' }}>
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          Attended Sessions & Events
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
          {attendedEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(event.image)}
              style={{
                background: 'var(--surface)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255, 102, 51, 0.2)', display: 'flex', flexDirection: 'column', textAlign: 'center', cursor: 'pointer'
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '10px', marginBottom: '20px', background: '#111' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{event.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Software Tools Section */}
      <section className="software-tools-section" style={{ marginTop: '80px' }}>
        <motion.h2
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          Tools I Use As P.R.O.
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {softwareTools.map((tool, index) => (
            <motion.a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              style={{
                textDecoration: 'none', background: 'var(--surface)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255, 102, 51, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{tool.icon}</div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>{tool.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{tool.description}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                <ExternalLink size={16} />
                <span>Visit</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* MASTER FULLSCREEN MODAL (LIGHTBOX) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 99999, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'zoom-out', padding: '20px'
            }}
          >
            <motion.img
              key="modal-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen View"
              style={{
                maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 0 50px rgba(255, 102, 51, 0.5)', border: '2px solid rgba(255, 102, 51, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()} 
            />
            <div style={{
              position: 'absolute', top: '30px', right: '40px', color: 'white', fontSize: '2.5rem', cursor: 'pointer', fontWeight: 'lighter', opacity: 0.7
            }} onClick={() => setSelectedImage(null)}>
              &times;
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Projects
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Achievements.css'

// EXACT file names matching your VS Code sidebar
import gradPic from '../assets/grad-pic.jpg'
import bannerMaking from '../assets/banner-making.jpg'
import englishContest from '../assets/english-contest.jpeg'
import inhinyera from '../assets/inhinyera.jpeg'
import mentorship from '../assets/mentorship.jpeg'
import aoc2025 from '../assets/aoc25.jpg' // <-- FIXED: Matched to "aoc25.jpg"

function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    { title: 'Advent of Cyber 2025', image: aoc2025 },
    { title: 'Inhinyera Event', image: inhinyera },
    { title: 'Mentorship Program', image: mentorship },
    { title: 'Banner Making Contest', image: bannerMaking },
    { title: 'English Contest', image: englishContest }
  ]

  const highSchoolAwards = [
    { title: 'Graduated with High Honors', year: 'Senior High School' },
    { title: 'Art Club Secretary', year: 'Senior High School' },
    { title: 'Consistent Honor Student', year: 'Junior High & Elementary' }
  ]

  return (
    <div className="achievements-page" id="achievements">
      <div className="bg-grid"></div>

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1>ACHIEVEMENTS</h1>
        <p className="subtitle">Milestones & Recognitions</p>
      </motion.div>

      {/* College Certificates Gallery */}
      <motion.section
        className="awards-college"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>COLLEGE CERTIFICATES & AWARDS</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '20px' }}>
          Click any certificate to view it full screen.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px', 
          marginTop: '10px' 
        }}>
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedCert(cert.image)}
              style={{
                background: 'var(--surface)',
                padding: '15px',
                borderRadius: '15px',
                border: '1px solid rgba(255, 102, 51, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderRadius: '10px', marginBottom: '15px', background: '#111' }}>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Early Academic History + Grad Pic */}
      <motion.section
        className="awards-history"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ marginTop: '60px' }}
      >
        <h2>EARLY ACADEMIC HISTORY</h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '30px', 
          marginTop: '20px',
          alignItems: 'center'
        }}>
          <div className="history-list" style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {highSchoolAwards.map((item, idx) => (
              <div 
                key={idx} 
                className="history-item"
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '20px', 
                  background: 'linear-gradient(90deg, rgba(255,102,51,0.05), transparent)', 
                  borderLeft: '4px solid var(--accent)',
                  borderRadius: '0 10px 10px 0'
                }}
              >
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <span style={{ color: 'var(--text-secondary)' }}>{item.year}</span>
              </div>
            ))}
          </div>

          <motion.div 
            style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={gradPic} 
              alt="Graduation" 
              style={{ 
                width: '100%', 
                maxWidth: '400px', 
                borderRadius: '15px', 
                border: '2px solid var(--accent)',
                boxShadow: '0 10px 30px rgba(255, 102, 51, 0.15)'
              }} 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'zoom-out',
              padding: '20px'
            }}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedCert}
              alt="Fullscreen Certificate"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '10px',
                boxShadow: '0 0 30px rgba(255, 102, 51, 0.4)'
              }}
              onClick={(e) => e.stopPropagation()} 
            />
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '40px',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }} onClick={() => setSelectedCert(null)}>
              &times;
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Achievements
import React from 'react'
import { motion } from 'framer-motion'
import maamJen from '../assets/maamjen.jpg'
import './References.css'

function References() {
  return (
    <div className="references-page">
      <div className="bg-grid"></div>

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1>REFERENCES</h1>
        <p className="subtitle">Professional Contacts & Recommendations</p>
      </motion.div>

      <motion.div
        className="reference-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="ref-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src={maamJen} 
            alt="Dr. Jennifer Enriquez" 
            style={{ 
              width: '110px', 
              height: '110px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              objectPosition: 'top', 
              border: '3px solid var(--accent)', 
              display: 'block',
              boxShadow: '0 8px 25px rgba(255, 102, 51, 0.3)'
            }} 
          />
        </div>
        <h2>Dr. Jennifer B. Enriquez</h2>
        <p className="ref-role">Program Chair</p>
        <div className="ref-details">
          <p>Computer Engineering Department</p>
          <p>Technological Institute of the Philippines - Manila</p>
          <p>Academic Advisor & Supervisor</p>
          <p>Dr. Enriquez has supervised my academic progress and creative work in the department. She can attest to my technical skills, creative abilities, and leadership as P.R.O.</p>
          <p><a href="mailto:jennifer.enriquez@tip.edu.ph">jennifer.enriquez@tip.edu.ph</a></p>
        </div>
      </motion.div>

      <motion.section
        className="how-to-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>How to Request a Reference</h2>
        <div className="how-to-grid">
          <div className="how-to-item">
            <h3>1<br/>Contact the Reference</h3>
            <p>Reach out to Dr. Jennifer B. Enriquez directly through email with your inquiry.</p>
          </div>
          <div className="how-to-item">
            <h3>2<br/>Provide Context</h3>
            <p>Give information about the position or opportunity you are applying for.</p>
          </div>
          <div className="how-to-item">
            <h3>3<br/>Allow Time</h3>
            <p>Give adequate time (typically 1-2 weeks) for the reference to prepare their letter.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="touch-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="touch-card">
          <h2>Get In Touch</h2>
          <p className="touch-intro">Have questions? Want to collaborate? Feel free to reach out.</p>
          
          <div className="touch-methods">
            <div className="method-item">
              <div className="method-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:mkasanpedro@tip.edu.ph">mkasanpedro@tip.edu.ph</a></p>
            </div>

            <div className="method-item">
              <div className="method-icon">f</div>
              <h3>Facebook</h3>
              <p><a href="https://www.facebook.com/kei.ash" target="_blank" rel="noopener noreferrer">kei.ash</a></p>
            </div>

            <div className="method-item">
              <div className="method-icon">in</div>
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/kerstein-ashby-san-pedro-b4b8a2360/" target="_blank" rel="noopener noreferrer">Kerstein Ashby San Pedro</a></p>
            </div>

            <div className="method-item">
              <div className="method-icon">📍</div>
              <h3>Location</h3>
              <p>Quiapo, Manila, Philippines</p>
            </div>
          </div>

          <p className="touch-closing">I am always open to exciting opportunities, collaborations, and discussions about design and technology.</p>
        </div>
      </motion.section>
    </div>
  )
}

export default References
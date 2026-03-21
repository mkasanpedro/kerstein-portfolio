import React from 'react'
import { motion } from 'framer-motion'
import LacedBorder from '../components/LacedBorder.jsx'
import profilePic from '../assets/profile-pic.jpeg'
import './Home.css'

function Home({ mousePos }) {
  return (
    <div className="home">
      <div className="bg-grid"></div>
      <div className="floating-particles">
        <motion.div className="particle" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="particle" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
        <motion.div className="particle" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} />
      </div>

      <LacedBorder mousePos={mousePos} />

      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-section">
          <div className="hero-text-section">
            <motion.span
              className="greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              KERSTEIN<br />ASHBY
            </motion.h1>

            <motion.div
              className="role-highlight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="role-badge">Computer Engineer</span>
              <span className="dot"></span>
              <span className="role-badge">Creative Designer</span>
            </motion.div>

            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Blending logic with creativity through design, code, and innovation
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <button className="cta-primary">Explore My Work</button>
              <button className="cta-secondary">Get In Touch</button>
            </motion.div>

            <motion.div
              className="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="stat-item">
                <span className="stat-number">2nd Year</span>
                <span className="stat-label">Computer Engineering @ TIP</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">P.R.O.</span>
                <span className="stat-label">CpE Department 2025-Present</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">9+</span>
                <span className="stat-label">Awards & Recognition</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img src={profilePic} alt="Kerstein Ashby" className="profile-image" />
              <div className="glow-effect"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <KeyboardEffects />
    </div>
  )
}

function KeyboardEffects() {
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase()
      const keyDisplay = document.createElement('div')
      keyDisplay.className = 'key-display'
      keyDisplay.textContent = key
      keyDisplay.style.left = Math.random() * window.innerWidth + 'px'
      keyDisplay.style.top = Math.random() * window.innerHeight + 'px'
      document.body.appendChild(keyDisplay)

      setTimeout(() => keyDisplay.remove(), 1000)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return null
}

export default Home
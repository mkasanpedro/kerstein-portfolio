import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/profile-pic.jpeg'
import './InteractiveIDCard.css'

function InteractiveIDCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateYVal = ((x - rect.width / 2) / rect.width) * 10
    const rotateXVal = ((y - rect.height / 2) / rect.height) * -10

    setRotateX(rotateXVal)
    setRotateY(rotateYVal)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div className="id-card-container">
      <motion.div
        className="id-card-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <motion.div
          className="id-card"
          animate={{
            rotateX,
            rotateY,
            rotateZ: isFlipped ? 180 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: 1000 }}
        >
          {/* FRONT */}
          <div className={`id-card-face id-card-front ${isFlipped ? 'hidden' : ''}`}>
            <div className="lace-pattern-right">
              <svg viewBox="0 0 100 500" preserveAspectRatio="none">
                <defs>
                  <pattern id="lacePattern" patternUnits="userSpaceOnUse" width="20" height="40">
                    <path d="M10,0 Q0,10 10,20 Q20,10 10,20" fill="none" stroke="#cc0000" strokeWidth="1" opacity="0.6"/>
                    <circle cx="10" cy="5" r="2" fill="#cc0000" opacity="0.4"/>
                    <circle cx="10" cy="15" r="2" fill="#cc0000" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100" height="500" fill="url(#lacePattern)" />
              </svg>
            </div>

            <div className="card-shine"></div>

            <div className="id-card-content">
              <div className="id-header">
                <div className="id-title">KERSTEIN ASHBY C. SAN PEDRO</div>
                <div className="id-subtitle">Computer Engineering Student</div>
              </div>

              <div className="id-photo-container">
                <img 
                  src={profilePic}
                  alt="Profile" 
                  className="id-photo"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150"%3E%3Crect fill="%23333" width="150" height="150"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14"%3EProfile Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              <div className="id-info">
                <div className="info-label">DEPARTMENT</div>
                <div className="info-value">Computer Engineering</div>
              </div>

              <div className="id-info">
                <div className="info-label">YEAR</div>
                <div className="info-value">2nd Year</div>
              </div>

              <div className="id-footer">
                <span className="sparkle">✦</span>
                <span>2024-2026</span>
                <span className="sparkle">✦</span>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className={`id-card-face id-card-back ${!isFlipped ? 'hidden' : ''}`}>
            <div className="lace-pattern-left">
              <svg viewBox="0 0 100 500" preserveAspectRatio="none">
                <defs>
                  <pattern id="lacePatternBack" patternUnits="userSpaceOnUse" width="20" height="40">
                    <path d="M10,0 Q0,10 10,20 Q20,10 10,20" fill="none" stroke="#cc0000" strokeWidth="1" opacity="0.6"/>
                    <circle cx="10" cy="5" r="2" fill="#cc0000" opacity="0.4"/>
                    <circle cx="10" cy="15" r="2" fill="#cc0000" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100" height="500" fill="url(#lacePatternBack)" />
              </svg>
            </div>

            <div className="card-shine-back"></div>

            <div className="id-card-content-back">
              <div className="back-header">SKILLS & INFO</div>

              <div className="skills-section">
                <h3 className="skills-title">TECHNICAL SKILLS</h3>
                <div className="skills-grid">
                  <div className="skill-tag">React</div>
                  <div className="skill-tag">Node.js</div>
                  <div className="skill-tag">Python</div>
                  <div className="skill-tag">C++</div>
                  <div className="skill-tag">HTML/CSS</div>
                  <div className="skill-tag">MySQL</div>
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">CREATIVE SKILLS</h3>
                <div className="skills-grid">
                  <div className="skill-tag">Figma</div>
                  <div className="skill-tag">Canva</div>
                  <div className="skill-tag">Photopea</div>
                  <div className="skill-tag">CapCut</div>
                </div>
              </div>

              <div className="bio-section">
                <p className="bio-text">Blending logic with creativity • Frontend Design • UI/UX • Content Creation</p>
              </div>

              <div className="role-badge">P.R.O. • Content Creator</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="click-hint">Click or scroll to flip the card →</div>
    </div>
  )
}

export default InteractiveIDCard
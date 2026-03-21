import React from 'react'
import { motion } from 'framer-motion'
import './Achievements.css'

function Achievements() {
  const achievements = {
    shs: [
      {
        title: 'Graduated With Honor',
        description: 'Maintained academic excellence throughout SHS'
      },
      {
        title: 'Conduct Award',
        description: 'Recognition for outstanding behavior and discipline'
      },
      {
        title: 'Perfect Attendance & Punctuality',
        description: 'Never missed a day throughout the school year'
      },
      {
        title: 'Faithful Art Club Member',
        description: 'Served as Club Secretary with dedication'
      },
      {
        title: 'Parish Service Award',
        description: 'Contribution to community and parish activities'
      }
    ],
    college: [
      {
        title: 'P.R.O. Mentorship',
        description: 'Accepted into mentorship program for leadership role'
      },
      {
        title: 'Champion - English Content Show Your Prowess',
        description: 'Won first place in content creation competition'
      },
      {
        title: '2nd Runner-Up - Inhinyera Shirt Design',
        description: 'Second place finish in departmental design competition'
      },
      {
        title: '1st Runner-Up - Banner Making',
        description: 'First runner-up in departmental banner design contest'
      }
    ]
  }

  const stats = [
    { number: '5', label: 'SHS Awards' },
    { number: '4', label: 'College Awards' },
    { number: '2', label: 'Leadership Positions' },
    { number: '100%', label: 'Dedication' }
  ]

  const roleInfo = {
    title: 'Current Role: Public Relations Officer',
    year: '2025-Present',
    description: 'Leading creative content and design initiatives for the Computer Engineering Department Student Council. Handling graphic design, video editing, and all creative communications for the department.'
  }

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
    <div className="achievements-page">
      <div className="bg-grid"></div>

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>ACHIEVEMENTS</h1>
        <p className="subtitle">Recognition & Accomplishments</p>
      </motion.div>

      <div className="achievements-container">
        {/* SHS Achievements */}
        <motion.div
          className="achievement-period"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="period-header">
            <h2>SENIOR HIGH SCHOOL 2024</h2>
            <div className="header-line"></div>
          </div>

          <motion.div className="achievement-grid" variants={containerVariants}>
            {achievements.shs.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="achievement-icon">★</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* College Achievements */}
        <motion.div
          className="achievement-period"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="period-header">
            <h2>COLLEGE 2024</h2>
            <div className="header-line"></div>
          </div>

          <motion.div className="achievement-grid" variants={containerVariants}>
            {achievements.college.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="achievement-icon">✦</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Role Section */}
      <motion.section
        className="role-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="role-card">
          <h2>{roleInfo.title}</h2>

          <div className="role-content">
            <div>
              <div className="role-year">{roleInfo.year}</div>
              <p className="role-description">{roleInfo.description}</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Achievements
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <ThemeToggle />
          <Link to="/" className="nav-logo">
            <span className="logo-text">PORTFOLIO</span>
            <span className="logo-accent">.</span>
          </Link>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/background"
              className={`nav-link ${isActive('/background') ? 'active' : ''}`}
            >
              BACKGROUND
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/achievements"
              className={`nav-link ${isActive('/achievements') ? 'active' : ''}`}
            >
              ACHIEVEMENTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/references"
              className={`nav-link ${isActive('/references') ? 'active' : ''}`}
            >
              REFERENCES
            </Link>
          </li>
        </ul>

        <div className="social-links">
          <a
            href="https://www.facebook.com/kei.ash"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            f
          </a>
          <a
            href="https://www.linkedin.com/in/kerstein-ashby-san-pedro-b4b8a2360/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            in
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
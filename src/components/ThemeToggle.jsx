import React, { useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import './ThemeToggle.css'

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? (
        <Sun size={24} className="sun-icon" />
      ) : (
        <Moon size={24} className="moon-icon" />
      )}
    </button>
  )
}

export default ThemeToggle
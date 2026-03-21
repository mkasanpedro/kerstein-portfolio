import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import Background from './pages/Background.jsx'
import Achievements from './pages/Achievements.jsx'
import Projects from './pages/Projects.jsx'
import References from './pages/References.jsx'
import './App.css'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Router>
      <div 
        className="app" 
        style={{ 
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`
        }}
      >
        <div className="cursor-gradient"></div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home mousePos={mousePos} />} />
          <Route path="/background" element={<Background />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
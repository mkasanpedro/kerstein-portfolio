import React, { useEffect, useRef } from 'react'
import './LacedBorder.css'

function LacedBorder({ mousePos }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const laceWidth = rect.width
    const laceHeight = 120

    canvas.width = laceWidth
    canvas.height = laceHeight

    const animate = () => {
      ctx.clearRect(0, 0, laceWidth, laceHeight)

      const time = Date.now() * 0.0003
      const mouseX = mousePos.x

      for (let i = 0; i < laceWidth; i += 20) {
        const waveHeight = 40 + Math.sin(i * 0.01 + time) * 20
        const mouseInfluence = Math.max(0, 1 - Math.abs(i - mouseX) / 200)

        const gradient = ctx.createLinearGradient(0, 0, 0, laceHeight)
        gradient.addColorStop(0, `rgba(200, 0, 0, ${0.3 + mouseInfluence * 0.5})`)
        gradient.addColorStop(0.5, `rgba(100, 0, 0, ${0.5 + mouseInfluence * 0.3})`)
        gradient.addColorStop(1, `rgba(50, 50, 50, ${0.2 + mouseInfluence * 0.2})`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.bezierCurveTo(
          i - 10,
          waveHeight * 0.5,
          i + 10,
          waveHeight,
          i,
          laceHeight
        )
        ctx.lineTo(i + 15, laceHeight)
        ctx.bezierCurveTo(
          i + 25,
          waveHeight,
          i + 5,
          waveHeight * 0.5,
          i + 15,
          0
        )
        ctx.fill()

        ctx.fillStyle = `rgba(255, 0, 0, ${0.4 + mouseInfluence * 0.3})`
        ctx.beginPath()
        ctx.arc(i + 7.5, 30 + Math.sin(time * 2 + i) * 10, 3 + mouseInfluence * 2, 0, Math.PI * 2)
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [mousePos])

  return <canvas ref={canvasRef} className="laced-border" />
}

export default LacedBorder
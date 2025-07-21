import React, { useState, useEffect } from 'react'
import SoloAppBar from '../components/SoloAppBar'
import SoloServiceGrid from '../components/SoloServiceGrid'

const slides = [
  { color: '#FFB6C1', label: 'Welcome to SOLO' },
  { color: '#87CEFA', label: 'Pay Bills Instantly' },
  { color: '#90EE90', label: 'Exclusive Rewards' },
  { color: '#FFD700', label: 'Invite Friends & Earn' },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <SoloAppBar />
      {/* Custom Color Slider */}
      <div style={{ width: '100%', maxWidth: 400, margin: '0 auto', marginTop: 8, position: 'relative', padding: '0 16px' }}>
        <div style={{
          width: '100%',
          borderRadius: '16px',
          height: '140px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          background: slides[currentSlide].color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          color: '#222',
          transition: 'background 0.3s'
        }}>
          {slides[currentSlide].label}
        </div>
        {/* Indicator Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          {slides.map((_, idx) => (
            <span key={idx} style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: idx === currentSlide ? '#0052cc' : '#e0e0e0',
              margin: '0 4px',
              display: 'inline-block',
              transition: 'background 0.3s'
            }} />
          ))}
        </div>
      </div>
      <SoloServiceGrid />
    </>
  )
}

export default Home 
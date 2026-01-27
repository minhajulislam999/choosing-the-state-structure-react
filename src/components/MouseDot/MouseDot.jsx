import React, { useState } from 'react'

function MouseDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDot = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  return (
    <div
      onClick={handleDot}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div style={{
        width: 20,
        height: 20,
        background: 'red',
        borderRadius: '50%',
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        right: -10
      }} />
    </div>
  )
}

export default MouseDot

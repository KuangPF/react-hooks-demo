import React, { useState, useEffect } from 'react'

function useEffectDemo() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return <p>the innerWidth is {width}px</p>
}

export default useEffectDemo

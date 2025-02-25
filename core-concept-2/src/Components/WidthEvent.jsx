import React, { useEffect, useState } from 'react'

const WidthEvent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div>
      <p>Width: {width}</p>
    </div>
  )
}

export default WidthEvent

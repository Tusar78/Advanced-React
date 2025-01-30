import React, { useEffect, useState } from 'react'

const Resize = () => {
  const [width, setWidth]= useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(width.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // }
  }, [width])
  
  return (
    <div>
      width: {width}
    </div>
  )
}

export default Resize

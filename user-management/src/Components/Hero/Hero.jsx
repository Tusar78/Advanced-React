import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero w-full flex justify-center bg-blue-100 py-24'>
      <div className='container'>
        <div className='w-2xl m-auto flex align-middle justify-between'>
          <div className='max-w-1/2'>
            <span className='text-xs font-medium uppercase'>I am</span>
            <h2 className='text-4xl mb-3'>Monsieur Yannick Barbier</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam molestias corrupti blanditiis </p>
            
            <button className='bg-fuchsia-500 text-white cursor-pointer px-4 py-1.5 rounded mt-4 uppercase font-semibold text-base'>Change Me</button>
          </div>
          <div>
            <img className='w-48 rounded' src="https://images.pexels.com/photos/30847375/pexels-photo-30847375/free-photo-of-stylish-man-walking-along-brick-wall-at-sunset.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

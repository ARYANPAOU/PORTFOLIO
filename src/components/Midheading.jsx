import React from 'react'

function Midheading({ text, text2, spacing }) {
  return (
    <div className='mb-14 sm:mb-16 lg:mb-20 text-center px-4'>
      <span className='text-gray-300 anton text-4xl sm:text-5xl lg:text-7xl inline-block glow'>{text}</span>
      <span className={`block text-xs sm:text-sm text-gray-400 mt-2 ${spacing || ''}`}>{text2}</span>
    </div>
  )
}

export default Midheading

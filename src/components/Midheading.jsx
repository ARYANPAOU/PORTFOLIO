import React from 'react'

function Midheading({ text, text2, spacing}) {
  return (
    <div className='mx-150 mb-44 -translate-y-60 text-center'>
      <span className='h2 text-gray-300  anton text-7xl flex-inline align-middle justify-center glow'>{text}</span>
    <span className={`block text-sm text-gray-400 px-10 whitespace-nowrap ${spacing}`}>{text2}</span>
    </div>
  )
}

export default Midheading
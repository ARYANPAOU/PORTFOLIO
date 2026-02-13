import React from 'react';
import logo from '/flowerr.png';

function Flowerheading({ text, translateY = '' }) {
  return (
    <div className={`flex items-center gap-2 mb-6 px-4 sm:px-8 lg:px-12 ${translateY}`}>
      <img
        src={logo}
        alt="Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 object-cover animate-spin"
        style={{ animationDuration: '2s' }}
      />
      <span className="text-gray-400 text-sm sm:text-lg lg:text-xl font-light">
        {text}
      </span>
    </div>
  );
}

export default Flowerheading;

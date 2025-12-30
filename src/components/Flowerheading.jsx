import React from 'react';
import logo from '/flowerr.png';

function Flowerheading({ text, translateY }) {
  return (
    <div className={`flex items-center gap-0 mb-2 ${translateY}`}>
      <img
        src={logo}
        alt="Logo"
        className="w-15 h-15 object-cover animate-spin"
        style={{ animationDuration: '2s' }}
      />
      <span className="text-gray-400 text-xl font-light translate-x-0.5 ">
        {text}
      </span>
    </div>
  );
}

export default Flowerheading;

import React, { useState } from 'react';

function Achievements({ image, caption }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -15;
const rotateY = ((x / rect.width) - 0.5) * 30;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center mt-10">
  

      <div className="perspective-[1000px]">
        <div
          className="w-70 h-60 rounded-xl overflow-hidden transition-all duration-300 
                      bg-gray-300 hover:shadow-[0_0_25px_#0ff] flex flex-col items-center justify-start shadow-lg"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s ease-out',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image}
            alt="Achievement"
            className="w-[95%] h-50 object-cover mt-2 rounded-md"
          />
          <div className="text-center mt-1 text-gray-900 text-sm comic"> 
            {caption}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

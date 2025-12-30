  import React from 'react'


 
  function Text() {
     const handleSunClick = () => {
    alert("Light attracts bugs! Real devs use Dark mode :)");
  };

    return (
      <div className="flex items-center justify-start min-h-screen px-4 ">
        <div className="text-left -translate-y-[220px] translate-x-[60px]">
          <h1 className="text-8xl leading-none text-left ">
            <div className="relative inline-block">
              <span style={{ color: 'rgba(0, 213, 241, 1)' }} className='anton'>ARYAN</span>
              <span
    style={{ color: 'rgba(213, 213, 213, 1)' }}
    className="absolute top-[5.6rem] left-[5.5rem] anton ">
                PAOU
              </span>
            
            </div>
          </h1>
            <p className="text-m roboto max-w-130  text-left text-gray-300 translate-x-0 translate-y-[90px]">   I’m a Creative Full Stack Web Developer from Faridabad, Haryana, with a passion for building clean, functional, and user-friendly applications. I like turning complex ideas into designs that are easy to use and nice to look at, while exploring modern technologies to bring ideas to life in impactful ways. My goal is to craft digital experiences that truly connect with people and strive to deliver experiences. I leverage my technical skills and creativity to create code projects that people will love, striving to provide aesthetic and functional solutions.
          Beyond Code, I love to workout in gym, follow WWE and play RPGs/Esports.</p>
        </div>
        {/* pfp */}
 <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center md:justify-end">
  <div className="relative flex flex-col items-center group transform transition-all duration-500 translate-x-[250px] -translate-y-[140px] mb-16">
    
   
    <div
      className="w-70 h-70 rounded-2xl overflow-hidden transition-all duration-500
                 grayscale hover:grayscale-0 hover:scale-105
                 hover:shadow-[0_0_15px_3px_rgba(0,213,241,1)]"
    >
      <img
        src="/pfp/me.jpg"
        alt="Aryan Paou"
        className="w-full h-full object-cover transition-all duration-500"
      />
    </div>

    {/* Hover Text */}
    <p
      className="mt-8 text-sm text-cyan-400 opacity-0 translate-y-2
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 select-none bits"
    >
      console.log("Hello there viewer!")  <br /> _____aryanpaou12981@gmail.com____
    </p>
  </div>
</div>
 {/* Sun button */}
      <button
        onClick={handleSunClick}
        className="fixed top-10 right-10 w-12 h-12 rounded-full bg-black-200 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Toggle Light Mode"
      >
        {/* Simple Sun SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>



      </div>
    )
  }

  export default Text

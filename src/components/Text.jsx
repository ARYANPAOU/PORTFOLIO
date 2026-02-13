import React from 'react'

function Text() {
  const handleSunClick = () => {
    alert('Light attracts bugs! Real devs use Dark mode :)');
  };

  return (
    <section className="min-h-[85vh] px-4 sm:px-8 lg:px-16 pt-20 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        <div className="text-left flex-1">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-none anton">
            <span style={{ color: 'rgba(0, 213, 241, 1)' }} className="anton">ARYAN</span>
            <br />
            <span style={{ color: 'rgba(213, 213, 213, 1)' }} className="pl-8 sm:pl-12 lg:pl-16 inline-block anton">
              PAOU
            </span>
          </h1>

          <p className="mt-8 text-sm sm:text-base roboto max-w-3xl text-gray-300 leading-relaxed">
            I’m a Creative Full Stack Web Developer from Faridabad, Haryana, with a passion for building clean,
            functional, and user-friendly applications. I like turning complex ideas into designs that are easy to
            use and nice to look at, while exploring modern technologies to bring ideas to life in impactful ways.
            My goal is to craft digital experiences that truly connect with people and strive to deliver experiences.
            I leverage my technical skills and creativity to create code projects that people will love, striving to
            provide aesthetic and functional solutions. Beyond Code, I love to workout in gym, follow WWE and play
            RPGs/Esports.
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative flex flex-col items-center group">
            <div
              className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden transition-all duration-500
                         grayscale hover:grayscale-0 hover:scale-105
                         hover:shadow-[0_0_15px_3px_rgba(0,213,241,1)]"
            >
              <img src="/pfp/me.jpg" alt="Aryan Paou" className="w-full h-full object-cover transition-all duration-500" />
            </div>

            <p
              className="mt-6 text-xs sm:text-sm text-cyan-400 opacity-0 translate-y-2
                         group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-500 select-none bits text-center"
            >
              console.log("Hello there viewer!") <br /> _____aryanpaou12981@gmail.com____
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleSunClick}
        className="fixed top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 border border-yellow-400/40 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        title="Toggle Light Mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </section>
  )
}

export default Text

import React from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = React.useState(null);
  const [imagePosition, setImagePosition] = React.useState(0);

  const handleMouseEnter = (index, e) => {
    setHoveredProject(index);
    const rect = e.currentTarget.getBoundingClientRect();
    setImagePosition(rect.top + rect.height / 2);
  };

  const projects = [
    {
      number: '01',
      title: 'Self-Designed Portfolio',
      technologies: ['HTML', 'CSS', 'JS', 'REACT', 'TAILWIND', 'LUCIDE', '3JS REACT FIBRE'],
      image: '/Projectimg/port.png',
      link: 'https://portfolioaryan-eta.vercel.app'
    },
    {
      number: '02',
      title: 'SPOTI-SENSE',
      technologies: ['A Unique, self-thought idea of a vibe coded game using React, 3js, Tailwind'],
      image: '/Projectimg/spoti.png',
      link: 'https://spoti-sense.netlify.app'
    },
    {
      number: '03',
      title: 'DOVE-OF-LOVE',
      technologies: ['FUN VIBE CODED COUPLE COMPLAINT FORM USING REACT'],
      image: '/Projectimg/king.png',
      link: 'https://doveoflove.netlify.app'
    },
    {
      number: '04',
      title: 'KingTerest',
      technologies: ['A fullstack + Auth Pinterest clone using. TO BE UPDATED ALONG WITH LINK'],
      image: '/Projectimg/king.png',
      link: 'https://kingterest.vercel.app'
    },
    {
      number: '05',
      title: 'CyberPunk [3js showcase]',
      technologies: ['3JS-NON-FIBRE', 'POLY-HAVEN . TO BE UPDATED ALONG WITH LINK'],
      image: '/Projectimg/cyber.png',
      link: 'https://your-cyberpunk-demo.com'
    },
    {
      number: '06',
      title: 'SCROLL TRIGGER MODEL',
      technologies: ['TO BE UPDATED ALONG WITH LINK'],
      image: '/Projectimg/tba.png',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 lg:px-12 py-8">
      <style>{`
        .project-title {
          background: linear-gradient(to right, #06b6d4 0%, #06b6d4 50%, gray 60%);
          background-size: 200% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background-position 0.5s ease;
        }

        .project-item:hover .project-title {
          background-position: 0 0;
        }

        .project-image-container {
          position: fixed;
          right: clamp(1rem, 4vw, 3rem);
          z-index: 50;
          transition: top 0.3s ease;
          pointer-events: none;
        }

        .project-image {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: auto;
          cursor: pointer;
        }

        .project-image.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      {/* Floating image preview (large screens only) */}
      <div
        className="project-image-container hidden lg:block"
        style={{
          top: `${imagePosition}px`,
          transform: 'translateY(-50%)'
        }}
      >
        {hoveredProject !== null && (
          <div className={`project-image ${hoveredProject !== null ? 'visible' : ''}`}>
            <img
              src={projects[hoveredProject].image}
              alt={projects[hoveredProject].title}
              className="w-80 h-56 xl:w-96 xl:h-64 object-cover rounded-lg border border-cyan-400/30 shadow-2xl"
            />
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item border-b border-gray-700 py-10 md:py-12 cursor-pointer group"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="text-gray-500 text-xs sm:text-sm mb-4">_{project.number}</div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <h2 className="project-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight hover:underline">
                    {project.title}
                  </h2>
                </a>

                <div className="flex flex-wrap gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm md:text-base">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Always-visible inline preview for small/medium screens */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="lg:hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full max-w-md h-44 sm:h-52 object-cover rounded-lg border border-cyan-400/30 shadow-lg"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

// Projects.jsx - A beginner-friendly component to showcase your portfolio projects
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
  title: 'IoT Based Smart Helmet',
   hardware: [
    'ESP8266 / ESP32 Microcontroller',
    'MPU6050 Accelerometer Sensor',
    'NEO-6M GPS Module',
    'GSM Module (SIM800L or equivalent)',
    'Rechargeable Lithium Battery'
  ],
  image: '/Projectimg/helmet1.jpeg',
  Documentation: 'https://pdflink.to/82bab5a3/'
},

{
  number: '02',
  title: 'Self-Designed Portfolio',
  technologies: ['HTML', 'CSS', 'JS', 'REACT', 'TAILWIND', 'LUCIDE', '3JS REACT FIBRE'],
  image: '/Projectimg/port.png',
  link: 'https://portfolioaryan-eta.vercel.app'
},

{
  number: '03',
  title: 'SPOTI-SENSE',
  technologies: ['A Unique, self-thought idea of a vibe coded game using React, 3js, Tailwind'],
  image: '/Projectimg/spoti.png',
  link: 'https://spoti-sense.netlify.app'
},

{
  number: '04',
  title: 'DOVE-OF-LOVE',
  technologies: ['FUN VIBE CODED COUPLE COMPLAINT FORM USING REACT'],
  image: '/Projectimg/king.png',
  link: 'https://doveoflove.netlify.app'
},

{
  number: '05',
  title: 'KingTerest',
  technologies: ['A fullstack + Auth Pinterest clone using. TO BE UPDATED ALONG WITH LINK'],
  image: '/Projectimg/king.png',
  link: 'https://kingterest.vercel.app'
},

{
  number: '06',
  title: 'CyberPunk [3js showcase]',
  technologies: ['3JS-NON-FIBRE','POLY-HAVEN . TO BE UPDATED ALONG WITH LINK'],
  image: '/Projectimg/cyber.png',
  link: 'https://your-cyberpunk-demo.com'
},

{
  number: '07',
  title: 'SCROLL TRIGGER MODEL',
  technologies: ['TO BE UPDATED ALONG WITH LINK'],
  image: '/Projectimg/tba.png',
  link: '#'
}
  return (
    <div className="min-h-screen text-white p-4 sm:p-6 md:p-16 translate-x-0 translate-y-0 md:-translate-y-55 md:-translate-x-40">
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
          right: 150px;
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

        .project-image:hover {
          transform: scale(1.05);
        }
      `}</style>
      
      {/* Floating image preview */}
      <div 
        className="project-image-container hidden md:block"
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
              className="w-80 h-56 lg:w-96 lg:h-64 object-cover rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
      
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-item border-b border-gray-700 py-12 cursor-pointer group"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="text-gray-500 text-xs sm:text-sm mb-4">
              _{project.number}
            </div>
            
            {/* Clickable Title */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <h2 className="project-title text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight hover:underline">
                {project.title}
              </h2>
            </a>

            <div className="flex flex-wrap gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm md:text-base">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import ParticlesBg from './components/ParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flowerheading from './components/Flowerheading';
import Aboutedu from './components/Aboutedu';
import Techtools from './components/Techtools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Text from './components/Text';
import Midheading from './components/Midheading';
import Tools from './components/Tools';
import Achievements from './components/Achievements';
import Bitheading from './components/Bitheading';
import Contactheading from './components/Contactheading';
import Footer from './components/Footer';
import Backtotop from './components/Backtotop';

const App = () => {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
  <ParticlesBg />
  <div style={{ position: "relative" }}>
        <div id="home"><Text />
</div>
        <Navbar />
        <div id="education"><Hero /></div> 
       
        <Flowerheading text="EDUCATION PROFILE" translateY="-translate-y-120" />
        <div id='technologies'><Aboutedu /></div>
        <Midheading text="TECH STACK" text2="*you may interact with the hex-spheres*" />
        <div className="flex flex-wrap justify-center gap-0.5 -translate-y-105 px-4">
          <Techtools image="/techstackimages/javascript.png" light={0xF7DF1E} title="JavaScript" />
          <Techtools image="/techstackimages/css.png" light={0x2965F1} title="CSS" />
          <Techtools image="/techstackimages/html.png" light={0xE34F26} title="HTML" />
          <Techtools image="/techstackimages/reactjs.png" light={0x61DAFB} title="React" />
          <Techtools image="/techstackimages/tailwind.png" light={0x38BDF8} title="Tailwind CSS" />
          <Techtools image="/techstackimages/mongodb.png" light={0x47A248} title="MongoDB" />
          <Techtools image="/techstackimages/nodejs.png" light={0x339933} title="Node.js" />
          <Techtools image="/techstackimages/3js.svg" light={0x000000} title="Three.js" />
          <Techtools image="/techstackimages/npm.png" light={0xCB3837} title="npm" />
          <Techtools image="/techstackimages/bootstrap.png" light={0x7952B3} title="Bootstrap" />
          <Techtools image="/techstackimages/framer.png" light={0x0055FF} title="Framer" />
          <Techtools image="/techstackimages/particles.png" light={0xCE0288} title="Particles.js" />
          <Techtools image="/techstackimages/figma.png" light={0xF24E1E} title="Figma" />
        </div>
        <Midheading text="TOOLS" text2="*automating tasks & enhancing productivity*" spacing="block text-sm text-gray-400 -translate-x-1.5 mt-3 whitespace-nowrap" />
         <div id='projects'><Tools /></div>
       <Flowerheading text="PROJECTS + UPCOMING" translateY="-translate-y-50" /> 
        <Projects />
       <div id="achievements"><Bitheading /></div> 
        <div  className="flex flex-wrap justify-center gap-5">
          <Achievements image="/certificates/MICROSOFT.jpeg" caption="SCIF MICROSOFT" />
          <Achievements image="/certificates/CYBERCERT.jpeg" caption="EC-COUNCIL CYBERSECURITY" />
          <Achievements image="/certificates/NPTEL1.jpeg" caption="NPTEL SILVER MEDAL" />
          <Achievements image="/certificates/NPTEL5.jpeg" caption="NPTEL SILVER MEDAL" />
          <Achievements image="/certificates/nptel2.jpeg" caption="NPTEL COURSE" />
          <Achievements image="/certificates/NPTEL3.jpeg" caption="NPTEL COURSE" />
          <Achievements image="/certificates/NPTEL4.jpeg" caption="NPTEL COURSE" />
          <Achievements image="/certificates/NPTEL6.jpeg" caption="NPTEL COURSE" />
          <Achievements image="/certificates/CODE-DEBUG.jpeg" caption="CODE-DEBUG CO-ORDINATOR" />
          <Achievements image="/certificates/ANCHORING.jpeg" caption="EMCEE FOR SYNERGISM" />
        </div>
        <div id='contact'> <Contactheading /></div>
       
        <Contact />
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
};

export default App;

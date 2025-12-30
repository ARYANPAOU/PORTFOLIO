import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load only the features you need (slim version for better performance)
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
      options={{
        background: {
          color: {
            value: "transparent", 
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: "#869696ff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 2, max: 4 },
          },
          links: {
            enable: false,
            color: "#00ffff",
            distance: 150,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
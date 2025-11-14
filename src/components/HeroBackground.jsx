import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HeroBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // no-op, reserved for future use if needed
  }, []);

  return (
    <Particles
      id="hero-background"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#94a3b8", "#cbd5f5"],
          },
          opacity: {
            value: 0.35,
            random: false,
          },
          size: {
            value: 1.5,
            random: { enable: true, minimumValue: 0.5 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: true,
            distance: 130,
            color: "#cbd5e1",
            opacity: 0.25,
            width: 1,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
        },
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }}
    />
  );
};

export default HeroBackground;

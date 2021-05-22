import Particles from "react-particles-js";

import styles from "../../styles/Particles.module.scss";

const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 152,
            density: { enable: true, value_area: 666.7611244926368 },
          },
          color: { value: "#fc000075" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        retina_detect: true,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      }}
      canvasClassName={styles.container}
    />
  );
};

export default ParticlesBackground;

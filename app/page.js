"use client";
import About from "../components/About";
import AboutIEEE from "../components/AboutIEEE";
import Collaborations from "../components/Collaborations";
import Footer from "../components/Footer";
import IntroductionCard from "../components/IntroductionCard";
import styles from "./page.module.css";
import { delay, motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { y: "110%" },
  visible: { y: 0 },
};

const introductionList = [
  {
    url: "/innovation.png",
    text: "Providing the perfect platform for all to collaborate and innovate.",
  },
  {
    url: "/seminar.png",
    text: "Attend seminars and workshops on the most trending and interesting topics led by leading scientists and industry personnel",
  },
  {
    url: "/research.png",
    text: "Collaborate with the best minds to take your projects to the next level.",
  },
  {
    url: "/networking.png",
    text: "Expand your network by connecting with the best minds in the field.",
  },
];

export default function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <>
      <Particles
        className={styles.particles}
        id="tsparticles"
        options={{
          height: "100vh",
          pauseOnBlur: true,
          background: {
            color: {
              value: "rgb(68, 153, 255)",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: { enable: false, zIndex: -10 },
          height: "100vh",
          width: "100vw",
        }}
      ></Particles>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.hero}
        >
          <div className={styles.headCon}>
            <motion.div
              variants={childVariants}
              transition={{ duration: 0.3 }}
              className={styles.ieee}
            >
              IEEE
            </motion.div>
          </div>
          <div className={styles.headCon}>
            <motion.div variants={childVariants} className={styles.sb}>
              Student Branch
            </motion.div>
          </div>
          <div className={styles.headCon}>
            <motion.div variants={childVariants} className={styles.nitdgp}>
              NIT Durgapur
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className={styles.introductionCardContainer}>
        <motion.div className={styles.introductionPositionContainer}>
          {introductionList.map((ele, index) => {
            return (
              <motion.div
                className={styles.introductionCard}
                initial={{ y: "25%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.03 * index }}
                viewport={{ once: true }}
                key={index}
              >
                <IntroductionCard
                  text={ele.text}
                  imageUrl={ele.url}
                ></IntroductionCard>
              </motion.div>
            );
          })}
        </motion.div>
        <div className={styles.emptyIntro}>
          {introductionList.map((ele, index) => {
            return (
              <motion.div className={styles.introductionCard} key={index}>
                <IntroductionCard
                  text={ele.text}
                  imageUrl={ele.url}
                ></IntroductionCard>
              </motion.div>
            );
          })}
        </div>
      </div>
      <About></About>
      <AboutIEEE></AboutIEEE>
      <Collaborations></Collaborations>
    </>
  );
}

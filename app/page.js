"use client";
import About from "./components/About";
import AboutIEEE from "./components/AboutIEEE";
import IntroductionCard from "./components/IntroductionCard";
import styles from "./page.module.css";
import { motion } from "framer-motion";

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
  return (
    <>
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
        <div className={styles.introductionPositionContainer}>
          {introductionList.map((ele) => {
            return (
              <IntroductionCard
                text={ele.text}
                imageUrl={ele.url}
              ></IntroductionCard>
            );
          })}
        </div>
        <div className={styles.emptyIntro}>
          {introductionList.map((ele) => {
            return <IntroductionCard></IntroductionCard>;
          })}
        </div>
      </div>
      <About></About>
      <AboutIEEE></AboutIEEE>
    </>
  );
}

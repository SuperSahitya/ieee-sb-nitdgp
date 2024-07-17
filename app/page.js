"use client";
import About from "../components/About";
import AboutIEEE from "../components/AboutIEEE";
import Collaborations from "../components/Collaborations";
import Footer from "../components/Footer";
import IntroductionCard from "../components/IntroductionCard";
import styles from "./page.module.css";
import { delay, motion } from "framer-motion";

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

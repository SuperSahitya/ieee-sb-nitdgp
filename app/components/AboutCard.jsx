import React from "react";
import styles from "./aboutCard.module.css";
import { delay, motion } from "framer-motion";

const AboutCard = ({ heading, paragraph, index }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ y: "25%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.04 * index }}
      viewport={{ once: true }}
    >
      <div className={styles.aboutHead}>{heading}</div>
      <div className={styles.aboutContent}>{paragraph}</div>
    </motion.div>
  );
};

export default AboutCard;

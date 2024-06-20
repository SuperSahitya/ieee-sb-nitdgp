import React from "react";
import styles from "./aboutCard.module.css";
import { delay, motion } from "framer-motion";

const AboutCard = ({ heading, paragraph, index }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.05 * index }}
      viewport={{ once: true }}
    >
      <div className={styles.aboutHead}>{heading}</div>
      <div className={styles.aboutContent}>{paragraph}</div>
    </motion.div>
  );
};

export default AboutCard;

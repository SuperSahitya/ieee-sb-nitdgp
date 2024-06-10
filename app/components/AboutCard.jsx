import React from "react";
import styles from "./aboutCard.module.css";

const AboutCard = ({ heading, paragraph }) => {
  return (
    <div className={styles.card}>
      <div className={styles.aboutHead}>{heading}</div>
      <div className={styles.aboutContent}>{paragraph}</div>
    </div>
  );
};

export default AboutCard;

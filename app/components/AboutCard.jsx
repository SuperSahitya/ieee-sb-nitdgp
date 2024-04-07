import React from "react";
import styles from "./aboutCard.module.css";

const AboutCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.aboutHead}>IEEE membership</div>
      <div className={styles.aboutContent}>
        To join this community of over 425,000 technology and engineering
        professionals united by a common desire to continuously learn, interact,
        collaborate, and innovate visit ieee/membership and obtain your
        membership at the earliest.
      </div>
    </div>
  );
};

export default AboutCard;

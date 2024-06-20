import React from "react";
import styles from "./introductionCard.module.css";

const IntroductionCard = ({ imageUrl, text }) => {
  return (
    <div className={styles.introduction}>
      <div
      alt
        className={styles.image}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default IntroductionCard;

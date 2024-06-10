import React from "react";
import styles from "./event.module.css";

const Event = ({ heading, paragraph, image, date }) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.image}
      ></div>
      <div className={styles.dataContainer}>
        <div className={styles.heading}>
          <h2 className={styles.dataHeading}>{heading}</h2>
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    </div>
  );
};

export default Event;

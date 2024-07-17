import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutHeading}>About Us</h1>
        <div className={styles.about}>
          <div className={styles.aboutStatement}>
            The IEEE Student Branch , NIT Durgapur is a society of enthusiasts
            aimed at promoting research-related activities in the campus. We are
            a direct handshake to IEEE, an international body that allows
            countless young researchers the opportunity to present & publish
            their innovations every year. Comprising of bright researchers,
            developers, speakers, and other contributors we are a society that
            welcomes in the era of better research prospects, on the campus.
          </div>
          <video
            className={styles.video}
            src="/ieeetrailer.mp4"
            controls
            autoPlay={true}
          ></video>
        </div>
        <div className={styles.aboutDataContainer}>
          <div className={styles.aboutData}>
            <div className={styles.aboutNumber}>50+</div>
            <div className={styles.aboutName}>Branch Members</div>
          </div>
          <div className={styles.aboutData}>
            <div className={styles.aboutNumber}>30+</div>
            <div className={styles.aboutName}>Events & Workshops</div>
          </div>
          <div className={styles.aboutData}>
            <div className={styles.aboutNumber}>500+</div>
            <div className={styles.aboutName}>Participants</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

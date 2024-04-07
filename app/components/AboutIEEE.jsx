import React from "react";
import styles from "./aboutieee.module.css";
import AboutCard from "./AboutCard";

const AboutIEEE = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>About IEEE</h1>
        <div className={styles.aboutStatement}>
          IEEE is the world's largest professional association dedicated to
          advancing technological innovation and excellence for the benefit of
          humanity.When you join IEEE, you join a community of over 425,000
          technology and engineering professionals united by a common desire to
          continuously learn, interact, collaborate, and innovate. IEEE
          Membership provides you with the resources and opportunities you need
          to keep on top of changes in technology; get involved in standards
          development; network with other professionals in your local area or
          within a specific technical interest; mentor the next generation of
          engineers and technologists, and so much more. For more info about
          IEEE visit ieee.org .
        </div>
        <div className={styles.aboutCards}>
          <AboutCard></AboutCard>
          <AboutCard></AboutCard>
        </div>
      </div>
    </>
  );
};

export default AboutIEEE;

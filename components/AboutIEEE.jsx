import React from "react";
import styles from "./aboutieee.module.css";
import AboutCard from "./AboutCard";

const AboutIEEE = () => {
  const aboutInformation = [
    {
      heading: "IEEE Membership",
      paragraph:
        {},
    },
    {
      heading: "IEEE Societies",
      paragraph:
        "IEEE Society members stay technically current, network with colleagues locally and abroad, and collaborate on research and projects with leading experts -- all while taking advantage of specialized opportunities.",
    },
  ];

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
          IEEE visit{" "}
          <a
            href="https://www.ieee.org/"
            style={{ color: "rgb(68, 153, 255)" }}
          >
            ieee.org
          </a>{" "}
          .
        </div>
        <div className={styles.aboutCards}>
          {aboutInformation.map((e, i) => {
            return (
              <AboutCard
                key={i}
                heading={e.heading}
                paragraph={e.paragraph}
                index={i}
              ></AboutCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutIEEE;

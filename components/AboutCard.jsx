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
      whileHover={{ x: 10, y: -10, transition: { duration: 0.1 } }}
    >
      <div className={styles.aboutHead}>{heading}</div>
      {typeof paragraph == "string" ? (
        <div className={styles.aboutContent}>{paragraph}</div>
      ) : (
        <div className={styles.aboutContent}>
          <div>
            To join this community of over 425,000 technology and engineering
            professionals united by a common desire to continuously learn,
            interact, collaborate, and innovate visit{" "}
            <span>
              <a
                href="https://www.ieee.org/membership/index.html"
                style={{ color: "rgb(68, 153, 255)" }}
              >
                ieee/membership
              </a>
            </span>{" "}
            and obtain your membership at the earliest.
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AboutCard;

import React from "react";
import styles from "./member.module.css";
import { FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Member = ({ name, post, image, linkedin, instagram }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.post}>{post}</div>
        {linkedin && instagram && (
          <div className={styles.icons}>
            <a href={linkedin}>
              <FaLinkedinIn className={styles.icon} />
            </a>
            <a href={instagram}>
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;

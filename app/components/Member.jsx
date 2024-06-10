import React from "react";
import styles from "./member.module.css";

const Member = ({ name, post, image }) => {
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
      <div className={styles.name}>{name}</div>
      <div className={styles.post}>{post}</div>
    </div>
  );
};

export default Member;

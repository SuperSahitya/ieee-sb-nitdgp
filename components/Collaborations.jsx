import React from "react";
import styles from "./collaborations.module.css";

const Collaborations = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Collaborations</h1>
      <div className={styles.imageContainer}>
        <div
          style={{
            background: "url('/collab/unity.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/ieee_kol_logo.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/ieee-cs-logo.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/ieeesbju.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/intel.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/global.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/cisco.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>

        <div
          style={{
            background: "url('/collab/gdg_kolkata.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.image}
        ></div>
        <div
          style={{
            background: "url('/collab/download-3.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "300px",
          }}
          className={styles.image}
        ></div>
      </div>
    </div>
  );
};

export default Collaborations;

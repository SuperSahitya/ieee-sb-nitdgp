import React from "react";
import styles from "./memberSkeleton.module.css";

const MemberSkeleton = () => {
  return (
    // <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      /* <div className={styles.skeletonDetails}>
        <div className={styles.skeletonName}></div>
        <div className={styles.skeletonPost}></div>
        <div className={styles.skeletonIcons}>
          <div className={styles.skeletonIcon}></div>
          <div className={styles.skeletonIcon}></div>
        </div>
      </div>
    </div> */
  );
};

export default MemberSkeleton;
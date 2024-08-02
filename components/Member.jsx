import React, { useState } from "react";
import styles from "./member.module.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import MemberSkeleton from "./MemberSkeleton";

const Member = ({ name, post, image, linkedin, instagram }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {!imageLoaded && <MemberSkeleton />}
        <Image
          src={image}
          alt={`${name}'s photo`}
          fill="true"
          style={{ objectFit: "cover" }}
          className={styles.image}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.post}>{post}</div>
        {linkedin && instagram && (
          <div className={styles.icons}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className={styles.icon} />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;

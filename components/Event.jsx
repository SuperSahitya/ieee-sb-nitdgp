"use client";
import React from "react";
import styles from "./event.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const Event = ({ heading, paragraph, image, date, index }) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ y: "20%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.01 }}
      viewport={{ once: true }}
      whileHover={{ x: 10, y: -10, transition: { duration: 0 } }}
    >
      <div
        style={{
          // background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.imageContainer}
      >
        <Image
          src={image}
          alt={`${heading}`}
          fill={true}
          style={{ objectFit: "cover" }}
          className={styles.image}
        />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.heading}>
          <h2 className={styles.dataHeading}>{heading}</h2>
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    </motion.div>
  );
};

export default Event;

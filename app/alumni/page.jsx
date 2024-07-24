"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Member from "../../components/Member";
import { Alumni } from "@/data/alumni";

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Alumni</h1>
      <h1 className={styles.memberHeading}>2024 Batch</h1>
      {
        <div className={styles.members}>
          {Alumni.map((alumni, index) => (
            <Member
              key={index}
              image={alumni.image}
              name={alumni.name}
              post={alumni.post}
              linkedin={alumni.linkedin}
              instagram={alumni.instagram}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default Page;

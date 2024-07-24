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
          {Alumni.map((member, index) => (
            <Member
              key={index}
              image={member.image}
              name={member.name}
              post={member.post}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default Page;

"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Member from "../../components/Member";
import { faculty } from "@/data/faculty";
import { finalYear } from "@/data/finalYear";
import { secondYear } from "@/data/secondYear";
import { thirdYear } from "@/data/thirdYear";

const Page = () => {
  const [memberYear, setMemberYear] = useState("final");

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Team</h1>
      <h1 className={styles.memberHeading}>Faculty</h1>
      <div className={styles.faculty}>
        {faculty.map((member, index) => (
          <Member
            key={index}
            image={member.image}
            name={member.name}
            post={member.post}
          />
        ))}
      </div>
      <div>
        <button
          className={`${styles.memberHeading} ${
            memberYear == "final" ? styles.active : ""
          }`}
          onClick={() => setMemberYear("final")}
        >
          Final Year
        </button>
        <button
          className={`${styles.memberHeading} ${
            memberYear == "third" ? styles.active : ""
          }`}
          onClick={() => setMemberYear("third")}
        >
          3rd Year
        </button>
        <button
          className={`${styles.memberHeading} ${
            memberYear == "second" ? styles.active : ""
          }`}
          onClick={() => setMemberYear("second")}
        >
          2nd Year
        </button>
      </div>
      {memberYear == "final" && (
        <div className={styles.members}>
          {finalYear.map((member, index) => (
            <Member
              key={index}
              image={member.image}
              name={member.name}
              post={member.post}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          ))}
        </div>
      )}
      {memberYear == "third" && (
        <div className={styles.members}>
          {thirdYear.map((member, index) => (
            <Member
              key={index}
              image={member.image}
              name={member.name}
              post={member.post}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          ))}
        </div>
      )}
      {memberYear == "second" && (
        <div className={styles.members}>
          {secondYear.map((member, index) => (
            <Member
              key={index}
              image={member.image}
              name={member.name}
              post={member.post}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;

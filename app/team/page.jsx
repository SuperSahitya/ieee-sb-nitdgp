import React from "react";
import styles from "./page.module.css";
import Member from "../components/Member";

const Page = () => {
  const faculty = [
    {
      image: "/Members/ACsir.jpg",
      name: "Aniruddha Chandra",
      post: "Counselor",
    },
    {
      image: "/Members/NKRsir.jpg",
      name: "Nirmal Kumar Roy",
      post: "Faculty Advisor",
    },
    {
      image: "/Members/CKsir.jpg",
      name: "Chiranjib Koley",
      post: "Faculty Advisor",
    },
  ];

  const finalYear = [
    {
      image: "/Members/IEEE-BSV.jpeg",
      name: "Balivada Sri Vamsi",
      post: "Chair",
    },
    {
      image: "/Members/Arghya.jpeg",
      name: "Arghya Kamal Das",
      post: "Vice Chair",
    },
    {
      image: "/Members/Anshuman.jpg",
      name: "Anshuman Jha",
      post: "General Secretary",
    },
    {
      image: "/Members/Gourav.jpg",
      name: "Gourav Das",
      post: "Treasurer",
    },
    {
      image: "/Members/Yoges.jpeg",
      name: "Yogesh Kumar",
      post: "Convenor",
    },
    {
      image: "/Members/Arindam.webp",
      name: "Arindam Chatterjee",
      post: "Chair, CS Society",
    },
    {
      image: "/Members/mohit.jpg",
      name: "Mohit Kumar",
      post: "WebMaster, Vice Chair, CS Society",
    },
    {
      image: "/Members/Raja.jpg",
      name: "Raja Paul",
      post: "Secretary, CS Society",
    },
    {
      image: "/Members/Debashis.jpeg",
      name: "Debashis Panigrahi",
      post: "Sponsorship & PR Head",
    },
    {
      image: "/Members/Sukamal.jpeg",
      name: "Sukamal Samanta",
      post: "Design Head",
    },
    {
      image: "/Members/Shoiab.jpg",
      name: "S Shoiab Basit",
      post: "Design Head",
    },
    {
      image: "/Members/Sambhu.jpg",
      name: "Kotana Sambhu",
      post: "Video Team Head",
    },
    {
      image: "/Members/Sourodeep.jpeg",
      name: "Souradip Mukherjee",
      post: "Event Head",
    },
    {
      image: "/Members/Kirtika.jpg",
      name: "Kirtika Gautam",
      post: "Logistics Head",
    },
    {
      image: "/Members/SnehaGhosh.jpg",
      name: "Sneha Ghosh",
      post: "ATH Head",
    },
  ];

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
      <h1 className={styles.memberHeading}>Final Year</h1>
      <div className={styles.members}>
        {finalYear.map((member, index) => (
          <Member
            key={index}
            image={member.image}
            name={member.name}
            post={member.post}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

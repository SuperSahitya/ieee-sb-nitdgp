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
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Arindam.webp",
      name: "Arindam Chatterjee",
      post: "Chair, CS Society",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Arghya.jpeg",
      name: "Arghya Kamal Das",
      post: "Vice Chair",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/mohit.jpg",
      name: "Mohit Kumar",
      post: "Vice Chair, CS Society, WebMaster",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/anshuman.png",
      name: "Anshuman Jha",
      post: "General Secretary",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Raja.jpg",
      name: "Raja Paul",
      post: "Secretary, CS Society",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Gourav.jpg",
      name: "Gourav Das",
      post: "Treasurer",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Yoges.jpeg",
      name: "Yogesh Kumar",
      post: "Convenor",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Debashis.jpeg",
      name: "Debashis Panigrahi",
      post: "Sponsorship & PR Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Sukamal.jpeg",
      name: "Sukamal Samanta",
      post: "Design Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Shoiab.jpg",
      name: "S Shoiab Basit",
      post: "Design Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Sambhu.jpg",
      name: "Kotana Sambhu",
      post: "Video Team Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Sourodeep.jpeg",
      name: "Souradip Mukherjee",
      post: "Event Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/Kirtika.jpg",
      name: "Kirtika Gautam",
      post: "Logistics Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
    {
      image: "/Members/SnehaGhosh.jpg",
      name: "Sneha Ghosh",
      post: "ATH Head",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
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
            linkedin={member.linkedin}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

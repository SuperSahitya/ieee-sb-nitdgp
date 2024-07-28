"use effect";
import React from "react";
import styles from "./page.module.css";
import Event from "../../components/Event";
import { motion } from "framer-motion";

const page = () => {
  const events = [
    {
      heading: "TechX",
      date: "01/03/2020",
      image: "/Events/techX.jpg",
      paragraph:
        "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb – 1st March 2020, where it assimilated all students and Young Professionals from various IEEE Sections and students branches.",
    },
    {
      heading: "SDV 2.0",
      date: "03/05/2020",
      image: "/Events/sdv.jpg",
      paragraph:
        "In this era of advancement and competing efficiency where society expects autonomous vehicles to be held to a higher standard than human drivers,we in collaboration with the Society of Automotive Engineers organized a two-day workshop to introduce students to the world of autonomous driving.",
    },
    {
      heading: "IntelliSys",
      date: "03/06/2020",
      image: "/Events/intellisys.jpg",
      paragraph:
        "IntelliSys: Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response.",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <div className={styles.headingAnimationContainer}>
            <h1 className={styles.heading}>Our Events</h1>
          </div>
        </div>
        <div className={styles.eventsContainer}>
          {events.map((event, index) => (
            <Event
              index={index}
              key={index}
              heading={event.heading}
              date={event.date}
              image={event.image}
              paragraph={event.paragraph}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

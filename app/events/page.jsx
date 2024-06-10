import React from "react";
import styles from "./page.module.css";
import Event from "../components/Event";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Events</h1>
        <div className={styles.eventsContainer}>
          <Event
            heading={"TechX"}
            paragraph={
              "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb – 1st March 2020, where it assimilated all students and Young Professionals from various IEEE Sections and students branches."
            }
            image={"techX.jpg"}
            date={"11/11/2000"}
          ></Event>
          <Event
            heading={"SDV 2.0"}
            paragraph={
              "In this era of advancement and competing efficiency where society expects autonomous vehicles to be held to a higher standard than human drivers,we in collaboration with the Society of Automotive Engineers organized a two-day workshop to introduce students to the world of autonomous driving."
            }
            image={"sdv.jpg"}
            date={"11/11/2000"}
          ></Event>
          <Event
            heading={"IntelliSys"}
            paragraph={
              "IntelliSys: Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response."
            }
            image={"intellisys.jpg"}
            date={"11/11/2000"}
          ></Event>
          {/* <Event
            heading={"IntelliSys"}
            paragraph={
              "IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response."
            }
            image={"intellisys.jpg"}
            date={"11/11/2000"}
          ></Event> */}
        </div>
      </div>
    </>
  );
};

export default page;

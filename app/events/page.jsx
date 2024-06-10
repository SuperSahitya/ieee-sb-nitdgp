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
            heading={"IntelliSys"}
            paragraph={
              "IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response."
            }
            image={"intellisys.jpg"}
            date={"11/11/2000"}
          ></Event>
          <Event
            heading={"IntelliSys"}
            paragraph={
              "IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response."
            }
            image={"intellisys.jpg"}
            date={"11/11/2000"}
          ></Event>
          <Event
            heading={"IntelliSys"}
            paragraph={
              "IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response."
            }
            image={"intellisys.jpg"}
            date={"11/11/2000"}
          ></Event>
          <Event
            heading={"IntelliSys"}
            paragraph={
              "IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response."
            }
            image={"intellisys.jpg"}
            date={"11/11/2000"}
          ></Event>
        </div>
      </div>
    </>
  );
};

export default page;

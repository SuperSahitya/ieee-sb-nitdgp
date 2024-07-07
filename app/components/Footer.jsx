import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaL, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <div className={styles.image}></div>
        <div className={styles.data}>
          The IEEE Student Branch, NIT Durgapur is a society of enthusiasts
          aimed at promoting research-related activities in the campus
          .Comprising of bright researchers, developers, speakers, and other
          contributors we are a society that welcomes in the era of better
          research prospects, on the campus.
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linksHeading}>About Us</div>
        <div className={styles.linksList}>
          <Link className={styles.link} href={"/"}>
            About Us
          </Link>
          <Link className={styles.link} href={"/"}>
            About IEEE
          </Link>
          <Link className={styles.link} href={"/"}>
            Our Activities
          </Link>
          <Link className={styles.link} href={"/"}>
            Our Teams
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <Link
            className={styles.socialLink}
            href={"https://facebook.com/ieee"}
          >
            <FaFacebookSquare />
          </Link>
          <Link
            className={styles.socialLink}
            href={"https://facebook.com/ieee"}
          >
            <FaSquareInstagram />
          </Link>
          <Link
            className={styles.socialLink}
            href={"https://facebook.com/ieee"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5780853572996!2d87.29095021481118!3d23.547672784689695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1570224535721!5m2!1sen!2sin"
          height="200"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;

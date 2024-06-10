"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageToSend = {
      name: name,
      email: email,
      message: message,
    };
    console.log(messageToSend);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            value={name}
            className={styles.name}
            onChange={handleNameChange}
            placeholder="Name"
            type="text"
          ></input>
          <input
            value={email}
            className={styles.email}
            onChange={handleEmailChange}
            placeholder="Email"
            type="email"
          ></input>
          <textarea
            value={message}
            className={styles.message}
            onChange={handleMessageChange}
            placeholder="Message"
          ></textarea>
          <button type="submit" className={styles.submit}>
            Send
          </button>
        </form>
        <div className={styles.contactInformation}>
          <div className={styles.linkContainer}>
            <FaLocationDot className={styles.icon}></FaLocationDot>
            <div className={styles.address}>
              NIT Durgapur, Mahatma Gandhi Avenue, Durgapur, West Bengal, India
            </div>
          </div>
          <div className={styles.linkContainer}>
            <IoIosMail className={styles.icon} />{" "}
            <div>ieeesb.nitdgp@gmail.com</div>
          </div>
          <div className={styles.linkContainer}>
            <FaPhoneSquareAlt className={styles.icon} />{" "}
            <div>+91 999 999 9999</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

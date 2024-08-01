"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Page = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setError(false);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setError(false);
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setError(false);
    setMessage(e.target.value);
  };

  const handleError = (ref) => {
    ref.current.focus();
    ref.current.value = "";
    setError(true);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (buttonText != "Sent") {
      let foundError = false;

      if (message.length === 0) {
        foundError = handleError(messageRef) || foundError;
      }
      if (name.length === 0) {
        foundError = handleError(nameRef) || foundError;
      }
      if (email.length === 0) {
        foundError = handleError(emailRef) || foundError;
      }

      if (!foundError) {
        try {
          setButtonText("Sending ...");
          const messageToSend = {
            name: name,
            email: email,
            message: message,
          };
          console.log(messageToSend);
          const response = await fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(messageToSend),
          });
          if (response.ok) {
            setButtonText("Sent");
          } else {
            throw new Error("Some Error Occurred. Please Try Again Later.");
          }
        } catch (error) {
          setButtonText("Try Again");
          console.error(error.message);
        }
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            value={name}
            className={
              !error
                ? `${styles.name} ${styles.input}`
                : `${styles.name} ${styles.input} ${styles.red}`
            }
            onChange={handleNameChange}
            placeholder="Name"
            type="text"
          />
          <input
            ref={emailRef}
            value={email}
            className={
              !error
                ? `${styles.email} ${styles.input}`
                : `${styles.email} ${styles.input} ${styles.red}`
            }
            onChange={handleEmailChange}
            placeholder="Email"
            type="email"
          />
          <textarea
            ref={messageRef}
            value={message}
            className={
              !error
                ? `${styles.message} ${styles.input}`
                : `${styles.message} ${styles.input} ${styles.red}`
            }
            onChange={handleMessageChange}
            placeholder="Message"
          />
          <button
            type="submit"
            className={`${styles.submit} ${
              buttonText === "Try Again"
                ? styles.tryAgain
                : buttonText === "Sent"
                ? styles.sent
                : styles.send
            }`}
            disabled={buttonText === "Sent" || buttonText === "Sending ..."}
          >
            {buttonText}
          </button>
        </form>
        <div className={styles.contactInformation}>
          <div className={styles.linkContainer}>
            <HiLocationMarker className={styles.icon}></HiLocationMarker>
            <div className={styles.data}>
              NIT Durgapur, Mahatma Gandhi Avenue, Durgapur, West Bengal, India
            </div>
          </div>
          <a href="mailto:ieeesb.nitdgp@gmail.com" className={styles.linkContainer}>
            <IoIosMail className={styles.icon} />{" "}
            <div className={styles.data}>ieeesb.nitdgp@gmail.com</div>
          </a>
          <div className={styles.linkContainer}>
            <FaPhoneSquareAlt className={styles.icon} />{" "}
            <div className={styles.data}>+91 999 999 9999</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

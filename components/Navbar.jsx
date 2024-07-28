"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  // const [y, setY] = useState(0);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => setY(window.scrollY));
  //     return () =>
  //       window.removeEventListener("scroll", () => setY(window.scrollY));
  //   }
  // }, []);

  const pathname = usePathname();
  const linkArray = [
    {
      pathname: "/",
      linkName: "Home",
    },
    {
      pathname: "/events",
      linkName: "Events",
    },
    {
      pathname: "/team",
      linkName: "Team",
    },
    {
      pathname: "/alumni",
      linkName: "Alumni",
    },
    {
      pathname: "/contact",
      linkName: "Contact Us",
    },
  ];

  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setHidden(currentScrollY > lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}
      <div
        className={styles.navbarContainer}
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <div
          className={styles.navbar}
          // style={
          //   y > 100
          //     ? { backgroundColor: "var(--primary-color)" }
          //     : { backgroundColor: "transparent" }
          // }
        >
          <Link className={styles.logo} href={"/"}><div className={styles.logoImage}></div></Link>
          <div className={styles.navLinks}>
            {linkArray.map((link, idx) => {
              return (
                <Link
                  key={idx}
                  className={
                    pathname == link.pathname
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : `${styles.navLink}`
                  }
                  href={link.pathname}
                >
                  {link.linkName}
                </Link>
              );
            })}
          </div>
          <div className={styles.iconContainer} onClick={handleClick}>
            {!isOpen ? (
              <TiThMenu className={styles.menuIcon} />
            ) : (
              <IoClose className={styles.menuIcon} />
            )}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.panel}
              initial={{
                y: "-55vh",
              }}
              animate={{
                y: "0px",
              }}
              exit={{
                y: "-55vh",
              }}
              onClick={() => setOpen(false)}
            >
              {linkArray.map((link, idx) => {
                return (
                  <Link
                    key={idx}
                    className={
                      pathname == link.pathname
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : `${styles.navLink}`
                    }
                    href={link.pathname}
                  >
                    {link.linkName}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;

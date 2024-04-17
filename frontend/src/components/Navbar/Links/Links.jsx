"use client";
import styles from "./links.module.css";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

const links = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "API",
    path: "/api",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
];

function Links() {
  
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className={styles.menuIcon} onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${click ? styles.navMenuActive : styles.navMenu}`}>
        {links.map((link) => (
          <li className={styles.navItem} key={link.title}>
            <Link
              href={link.path}
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              {link.title}
            </Link>
          </li>
        ))}
        {loading ? (
          <>
            {user ? (
              <>
                <li className={styles.navItem}>
                  <Link
                    href="/dashboard"
                    className={styles.navLinks}
                    onClick={closeMobileMenu}
                  >
                  DASHBOARD
                  </Link>
                </li>
                <li className={`${styles.navItem} ${styles.dropdown}`}>
                  <p className={styles.username}><MdOutlineAccountCircle className={styles.account} />{username}</p>
                  <div className={styles.dropdownContent}>
                    <p className={styles.email}>{email}</p>
                    <button href="/" className={styles.navBtn} onClick={closeMobileMenu}>
                      LOGOUT
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className={styles.navItem}>
                  <Link
                    href="/signup"
                    className={styles.navBtn}
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    href="/login"
                    className={styles.navBtn}
                    onClick={closeMobileMenu}
                  >
                    LOG IN
                  </Link>
                </li>
              </>
            )}
          </>
        ) : (
          <li className={styles.navItem}>
            <div className={styles.userLoading}>....</div>
          </li>
        )}
      </ul>
    </>
  );
}

export default Links;

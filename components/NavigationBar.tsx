import Link from "next/link";
import styles from "../styles/NavigationBar.module.css";
import system from "../styles/System.module.css";
import React, { useState, useEffect } from "react";

export default function NavigationBar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.content}>
        <Link
          href="/"
          className={`${styles.navLink} ${styles.pageButtons} ${system.medium} ${system.regular}`}
        >
          Shaun Latip
        </Link>
        <div className={styles.links}>
          {/* <div className={`${styles.hiddenPageButton} ${styles.pageButtons}`}>
                        <Link href="/" className={`${styles.navLink} ${system.medium} ${system.regular}`}>Work</Link>
                    </div> */}
          {/* <div className={`${styles.hiddenPageButton} ${styles.pageButtons}`}>
                        <Link href="/#writing" className={`${styles.navItem} ${styles.navLink}`}>Writing</Link>
                    </div> */}
          <div className={styles.pageButtons}>
            <Link
              href="/about"
              className={`${styles.navLink} ${system.medium} ${system.regular}`}
            >
              About
            </Link>
          </div>
          <div className={styles.pageButtons}>
            <Link
              href="resume/ShaunLatipResume.pdf"
              className={`${styles.navLink} ${system.medium} ${system.regular}`}
            >
              Resume
            </Link>
          </div>
          {/* <button className={styles.contactButton}>
                        <span className={`${system.medium} ${system.regular}`} style={{color: 'var(--white)'}}>Contact</span>
                    </button> */}
        </div>
      </div>
    </nav>
  );
}

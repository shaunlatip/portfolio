import Link from "next/link";
import styles from "../styles/NavigationBar.module.css";
import system from 'styles/system.module.css';
import React, { useState, useEffect } from "react";

export default function NavigationBar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.centeredContent}>
        <Link href="/" className={`${styles.name}`}>
          <p className={`${system.regular} ${system.semibold}  ${styles.navLink}`}>Shaun Latip</p>
        </Link>

        <div className={styles.links}>
          <div className={`${styles.hiddenPageButton} ${styles.pageButtons}`}>
            <Link href="/" className={`${styles.navItem} ${styles.navLink}`}>
              Work
            </Link>
          </div>

          <div className={styles.pageButtons}>
            <Link
              href="/about"
              className={`${styles.navItem} ${styles.navLink}`}
            >
              About
            </Link>
          </div>

          <div className={styles.pageButtons}>
            <Link
              href="resume/ShaunLatipResume.pdf"
              className={`${styles.navItem} ${styles.navLink}`}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

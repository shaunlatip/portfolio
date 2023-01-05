import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';
import React, { useState, useEffect } from 'react';

export default function NavigationBar() {

    return(
        <nav className={styles.navbar} id="navbar" >

            <Link href="/" className={`${styles.name} ${styles.navLink}`}>Shaun Latip</Link>

            <div className={styles.links}>
                <div className={`${styles.hiddenPageButton} ${styles.pageButtons}`}>
                    <Link href="/" className={`${styles.navItem} ${styles.navLink}`}>Work</Link>
                </div>

                <div className={`${styles.hiddenPageButton} ${styles.pageButtons}`}>
                    <Link href="/" className={`${styles.navItem} ${styles.navLink}`}>Writing</Link>
                </div>

                <div className={styles.pageButtons}>
                    <Link href="/about" className={`${styles.navItem} ${styles.navLink}`}>About</Link>
                </div>

                <div className={styles.pageButtons}>
                    <Link href="/" className={`${styles.navItem} ${styles.navLink}`}>Resume</Link>
                </div>
            </div>


        </nav>
    )
}
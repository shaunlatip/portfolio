import styles from '../styles/StartButton.module.css';
import React, { useState, useEffect } from 'react';
import chevron from '../public/components/mdi_chevron-up.svg'
import Link from 'next/link'

export default function StartButton() {
    return (
        <Link href="#">
            <button className={styles.button}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.path} d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"/>
                </svg>
            </button>
        </Link>
    )

}
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import homeStyle from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

interface FooterProps {
    variant: string;
}

export default function Footer(
    props:FooterProps) {

        if (props.variant == "project") {
            return(<div className={styles.footer}>
                {/* <div className={homeStyle.section}> */}
                    <div className={styles.footerContentProject}>
                        <div className={styles.left}>
                            <Link className={styles.greyLink} href="mailto:shaunlatip@gmail.com?subject=Hi Shaun!">
                                <h2>Let's chat!</h2>
                            </Link>

                            <Link className={styles.primaryLink} href="">
                                <h2>View my resume</h2>
                            </Link>
                            <br/>
                            <p>
                                <Link target="_blank" href="mailto:shaunlatip@gmail.com" className={styles.greyLink}>shaunlatip@gmail.com</Link><br/>
                                Made in React & Next.js with Care © 2022 Shaun Latip
                            </p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.links}>
                                <Link className={styles.greyLink} target="_blank" href="mailto:shaunlatip@gmail.com">Email</Link>
                                <Link className={styles.greyLink} target="_blank" href="https://www.linkedin.com/in/shaun-latip/">LinkedIn</Link>
                                <Link className={styles.greyLink} target="_blank" href="https://github.com/shaunlatip">GitHub</Link>
                            </div>

                        </div>




                        {/* <p className={`${styles.codedBy} ${styles.navLink}`}>
                            
                        </p> */}
                    </div>


                {/* </div> */}
            </div>);
        } else {
            return(
                <div className={styles.footer}>
                <div className={homeStyle.section}>
                    <div className={styles.footerContent}>
                        <div className={styles.left}>
                            <Link className={styles.greyLink} href="mailto:shaunlatip@gmail.com?subject=Hi Shaun!">
                                <h2>Let's chat!</h2>
                            </Link>

                            <Link className={styles.primaryLink} href="">
                                <h2>View my resume</h2>
                            </Link>
                            <br/>
                            <p>
                                <Link target="_blank" href="mailto:shaunlatip@gmail.com" className={styles.greyLink}>shaunlatip@gmail.com</Link><br/>
                                Made in React & Next.js with Care © 2022 Shaun Latip
                            </p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.links}>
                                <Link className={styles.greyLink} target="_blank" href="mailto:shaunlatip@gmail.com">Email</Link>
                                <Link className={styles.greyLink} target="_blank" href="https://www.linkedin.com/in/shaun-latip/">LinkedIn</Link>
                                <Link className={styles.greyLink} target="_blank" href="https://github.com/shaunlatip">GitHub</Link>
                            </div>

                        </div>




                        {/* <p className={`${styles.codedBy} ${styles.navLink}`}>
                            
                        </p> */}
                    </div>


                </div>
            </div>
            );
        }

    
        return(
            <div className={styles.footer}>
                <div className={homeStyle.section}>
                    <div className={styles.footerContent}>
                        <div className={styles.left}>
                            <Link className={styles.greyLink} href="mailto:shaunlatip@gmail.com?subject=Hi Shaun!">
                                <h2>Let's chat!</h2>
                            </Link>

                            <Link className={styles.primaryLink} href="">
                                <h2>View my resume</h2>
                            </Link>
                            <br/>
                            <p>
                                <Link target="_blank" href="mailto:shaunlatip@gmail.com" className={styles.greyLink}>shaunlatip@gmail.com</Link><br/>
                                Made in React & Next.js, with Care © 2022 Shaun Latip
                            </p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.links}>
                                <Link className={styles.greyLink} target="_blank" href="mailto:shaunlatip@gmail.com">Email</Link>
                                <Link className={styles.greyLink} target="_blank" href="https://www.linkedin.com/in/shaun-latip/">LinkedIn</Link>
                                <Link className={styles.greyLink} target="_blank" href="https://github.com/shaunlatip">GitHub</Link>
                            </div>

                        </div>




                        {/* <p className={`${styles.codedBy} ${styles.navLink}`}>
                            
                        </p> */}
                    </div>


                </div>
            </div>

    )
}
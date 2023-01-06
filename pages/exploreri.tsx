import NavigationBar from '../components/NavigationBar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components//Footer'
import projectStyles from '../styles/Project.module.css'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/ExploreRI.module.css'

import bannerImage from '../public/exploreri/banner.jpg'
import original1 from '../public/exploreri/original1.jpg'
import original2 from '../public/exploreri/original2.jpg'


import visualDesignStyleGuideImage from 'public/visualdesignstyleguide.jpg'

export default function ExploreRI() {
    return (
        <div className="page">
            <Head>
                <title>Explore Rhode Island | Shaun Latip</title>
            </Head>
            <div className={projectStyles.sidebar}>
                <Link href="#overview"><span>Overview</span></Link>
                <Link href="#research"><span>Research</span></Link>
                <Link href="" target="_blank"><span>Wireframing</span></Link>
                <Link href="" target="_blank"><span>Design</span></Link>
                <Link href="" target="_blank"><span>Development</span></Link>
                <Link href="" target="_blank"><span>Takeaways</span></Link>
            </div>

            <div className={projectStyles.pageContent}>
                <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
                    <div className={projectStyles.headline}>
                        <h2>Explore Rhode Island</h2>
                        <h3>Redesigning public park information with responsiveness in mind</h3>
                    </div>
                    <div className={projectStyles.bannerImageContainer}>
                        <Image
                        src={bannerImage}
                        alt="iMac, Tablet, and Phone display of interface"
                        className={projectStyles.bannerImage}
                        fill={true}/>
                    </div>

                    
                </div>
                
                <div className={projectStyles.sectionContainer} id="#overview">
                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Overview</div>
                        <b>Description</b>
                        <p>Redesign and development of <Link href="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList" target="_blank" className={homeStyles.primaryLink}>the Explore Rhode Island park page</Link>, often the first result when searching for public park or trail information in Rhode Island. Completed as part of an assignment to improve a poorly designed website for UI/UX course.</p>
                        <div className={projectStyles.projectInfo}>
                            <div>
                                <b>Role</b>
                                <p>UI/UX Designer, Researcher, Front-end Developer</p>
                            </div>
                            <div>
                                <b>Platforms</b>
                                <p>Mobile, Tablet, Desktop</p>
                            </div>
                            <div>
                                <b>Timeline</b>
                                <p>Oct 4, 2022 - Oct 18, 2022 (Two weeks)</p>
                            </div>
                            <div>
                                <b>Tools Used</b>
                                <p>Figma, Balsamiq Wireframes, HTML, CSS</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={projectStyles.sectionContainerGray} id="research">
                    <div className={projectStyles.section}>
                    <div className={projectStyles.sectionTitle}>Research</div>
                        <h3>I first put myself in the shoes of different users who might use the page.</h3>
                        <p>

                        </p>
                        <p>
                            Before proceeding, it was important to become familiar with the different users who might use the webpage, and the different tasks each user group might want to complete. To achieve this, I came up with a list of 13 scenarios comprising tasks that a user might expect to complete. These included:
                            </p> 
                            
                            <div className={projectStyles.ol}>

                                <div className={projectStyles.olItem}>
                                    <span>01</span>
                                    <p>
                                        Checking if the park has wheelchair-friendly trails and ADA accessible parking
                                    </p>
                                </div>


                                <div className={projectStyles.olItem}>
                                    <span>02</span>
                                    <p>
                                        Examining the distance and difficulty of the park’s trail
                                    </p>
                                </div>

                                <div className={projectStyles.olItem}>
                                    <span>03</span>
                                    <p>
                                        Learning how to access the park across several modes of transport
                                    </p>
                                </div>

                                <div className={projectStyles.olItem}>
                                    <span>04</span>
                                    <p>
                                        Reading and responding to submissions and questions from other users
                                    </p>
                                </div>

                                <div className={projectStyles.olItem}>
                                    <span>05</span>
                                    <p>
                                        Planning trail routes for trips ahead of time
                                    </p>
                                </div>
                            </div>
{/* 
                            <div className={projectStyles.dualImage}>
                                <Image alt="Original website" className={projectStyles.imageHalf}src={original1}/>
                                <Image alt="Original website" className={projectStyles.imageHalf} src={original2}/>
                            </div> */}

                        
                    </div>
                </div>

                <div className={projectStyles.sectionContainer}>
                    <div className={projectStyles.section}>
                        <h3>Walkthrough Research Methods</h3>
                        <p>
                            I then ran through each scenario while asking myself the following questions:
                        </p>

                            <div className={projectStyles.ol}>

                                <div className={projectStyles.olItem}>
                                    <span>01</span>
                                    <p>
                                        Will the correct action be sufficiently evident to the user?
                                    </p>
                                </div>


                                <div className={projectStyles.olItem}>
                                    <span>02</span>
                                    <p>
                                        Will the user notice that the correct action is available?
                                    </p>
                                </div>

                                <div className={projectStyles.olItem}>
                                    <span>03</span>
                                    <p>
                                        Will the user associate and interpret the response from the action correctly?
                                    </p>
                                </div>

                            </div>

                            <p>
                                In addition to these questions, I also made use of Jakob Nielsen's 10 Heuristics Principles to fuel my insights, while running each task separate in mobile, tablet, and desktop devices. As a result, these walkthroughts helped me to get a feel on what issues were likely hindering the experience of the website's users.
                            </p>
                    </div>
                </div>

                <div className={projectStyles.sectionContainerDark}>
                    <div className={projectStyles.section}>
                        <h3>Problem Statement</h3>
                        <h4>The original website had significant issues surrounding<br/> <span className="primary600">organization, responsiveness, and accessibility.</span> </h4>
                        <p>
                           I summarized the key issues from my walkthrough into 6 pain points:
                        </p>
                        <div className={projectStyles.ol}>

                            <div className={projectStyles.olItem}>
                                <span>01</span>
                                <p>
                                    Scattered hierarchy with elements grouping under specific tasks separated across the page.
                                </p>
                            </div>


                            <div className={projectStyles.olItem}>
                                <span>02</span>
                                <p>
                                Inconsistent affordances from interactive UI elements, with minimal feedback.
                                </p>
                            </div>

                            <div className={projectStyles.olItem}>
                                <span>03</span>
                                <p>
                                Undersized text, links, and images causing legibility issues.
                                </p>
                            </div>

                            <div className={projectStyles.olItem}>
                                <span>04</span>
                                <p>
                                Lack of responsiveness across differing devices, with website breaking in mobile. 
                                </p>
                            </div>

                            <div className={projectStyles.olItem}>
                                <span>05</span>
                                <p>
                                Significant visual clutter from overuse of differing colors, fonts, and lacking negative space.
                                </p>
                            </div>

                            <div className={projectStyles.olItem}>
                                <span>05</span>
                                <p>
                                Inconsistent use of language and unaccompanied icons creating confusion for park information.
                                </p>
                            </div>
                            </div>
                    </div>
                </div>


                <div className={projectStyles.sectionContainer} id="wireframing">

                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Wireframing</div>
                    </div>
                </div>

                <div className={projectStyles.sectionContainerGray} id="design">
                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Design</div>

                    </div>
                </div>

                <div className={projectStyles.sectionContainer} id="development">
                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Development</div>

                    </div>
                </div>

                <div className={projectStyles.sectionContainer} id="takeaways">
                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Takeaways</div>

                        <h3> </h3>
                    </div>
                </div>


                <div className={projectStyles.sectionContainer}>
                    <div className={projectStyles.section}>
                        <h3> </h3>
                    </div>
                </div>

                


            </div>

            <Footer variant={"project"}/>
        </div>
    )

}
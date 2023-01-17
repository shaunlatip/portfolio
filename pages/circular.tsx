import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components//Footer'
import projectStyles from '../styles/Project.module.css'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/Circular.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"
import StartButton from '../components/StartButton'
import React, { useRef } from "react"
import bannerImage from '../public/circular/banner.jpg'

export default function Circular() {

    const overviewRef = useRef<HTMLDivElement>(null)

    function handleSidebarClick(e: React.MouseEvent<HTMLElement>) {
        const element = e.currentTarget as HTMLInputElement
        const value = element.value
        
        switch (value) {
            case "Overview":
                if (!overviewRef.current) {return} 
                overviewRef.current.scrollIntoView({behavior: "smooth"})
                break;

        }
    }

    return (
        <div className="page">

            <Head>
                <title>Circular | Shaun Latip</title>
            </Head>
            

            {/* <div className={projectStyles.sidebar}>
                <button onClick={handleSidebarClick} value="Overview">Overview</button>
            </div> */}

            <div className={projectStyles.pageContent}>
                
                <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
                    <div className={projectStyles.headline}>
                        <h2>Circular</h2>
                        <h3>Designing accessible tech subscriptions</h3>
                    </div>
                    <div className={projectStyles.bannerWhiteBottom}/>
                    <div className={styles.bannerImageContainer}>
                        <Image
                        src={bannerImage}
                        alt=""
                        className={projectStyles.bannerImage}
                        fill={true}/>
                    </div>
                    

                    
                </div>

                <div className={projectStyles.sectionContainer} ref={overviewRef}>
                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Overview</div>
                        <p>
                            I was challenged to
                        </p>
                        <div className={projectStyles.projectInfo}>
                            <div>
                                <b>Role</b>
                                <p>UI/UX Designer<br/>User Researcher</p>
                            </div>
                            <div>
                                <b>Platform</b>
                                <p>Desktop</p>
                            </div>
                            <div>
                                <b>Timeline</b>
                                <p>Nov 8, 2022 - Nov 29, 2022 (Three Weeks)</p>
                            </div>
                            <div>
                                <b>Teammates</b>
                                <p>Juliana Han<br/>Eric Guo<br/>Kevin Nguyen</p>
                            </div>
                            {/* <div>
                                <b>Tools Used</b>
                                <p>Figma, Balsamiq Wireframes, HTML, CSS</p>
                            </div> */}
                        </div>
                    </div>

                </div>

                <div className={projectStyles.sections}>


                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            
                            <div className={projectStyles.contentEnd}>
                                <Link href="/">
                                    <button className={projectStyles.backToHome}>
                                        Back to home
                                    </button>
                                </Link>
                                <StartButton/>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer variant={"project"}/>
            </div>

        </div>
    )
}
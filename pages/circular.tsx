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

    const variants = {
        out: {
          opacity: 0,
          y: 0,
          transition: {
            duration: 1.2
          }
        },
        in: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            delay: 0
          }
        }
    };

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
                            For a class project, we were challenged to design an interactive interface for <Link href="https://www.ycombinator.com/companies/circular" target="_blank" className={homeStyles.primaryLink}>Circular</Link>, an emerging startup for subscription consumer electronics, which was part of Y Combinator's Winter 2022 batch. We iteratively designed an interface matching Circular's concept by looking only at their Y Combinator description.
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
                                <p>Oct 25, 2022 to <br/>Nov 9, 2022 <br/>(Two Weeks)</p>
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
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Challenge</div>
                            {/* <h3>
                                The challenge
                            </h3> */}
                            <h4 style={{fontWeight: 600}}>
                                We began by outlining the problem we faced.
                            </h4>

                            <p>
                                First, we examined the current experience of how consumer technology was distributed. 
                                Looking over the range of existing platforms that allow consumers to access electronic, we saw that these platforms largely <span style={{fontWeight: 600}}>required customers to commit to fully purchasing or financing</span> the full cost of new electronics before being able to use them.
                            </p>
                            <p>
                                In response, Circular was attempting to change how consumer technology was accessed and experienced across Asia through <span style={{fontWeight: 600}}>low-cost, convenient subscriptions</span> that act as a novel way for consumers to access the best consumer electronics. 
                            </p>
                            {/* <p>
                                With Circular, customers can pay a monthly rate to keep a product for as long as they want, before choosing to either buy it, or to return it. Returned products will then be refurbished and passed on to the next owner to extend its useful life.
                            </p> */}
                            <p>
                                Our solution focused on answering the following question:
                            </p>
                            <span className={projectStyles.italicFocus}>
                                How might we empower users to better access and experience consumer electronics?
                            </span>
                            {/* <p>
                                To break this down, we decided on three main principles that would ground our design.
                            </p> */}

                            <div className={projectStyles.olLarge} style={{display: 'none'}}>
                                <div className={projectStyles.olItemLarge}>
                                    {/* <span style={{fontSize: '1.5rem'}}>1</span> */}
                                    <div>
                                        <h3 style={{fontWeight: 600}}>
                                            Flexible
                                        </h3>
                                        <p>
                                            As the core of Circular's value proposition, our solution had to make sure that users felt in control during every step of the process, with flexibility to start, manage, or stop subscriptions at any time.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    {/* <span style={{fontSize: '1.5rem'}}>1</span> */}
                                    <div>
                                        <h3 style={{fontWeight: 600}}>
                                            Trustworthy
                                        </h3>
                                        <p>
                                            As Circular is an emerging startup, we wanted our design to create a sense of confidence and assuredness through every step of the process.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    {/* <span style={{fontSize: '1.5rem'}}>1</span> */}
                                    <div>
                                        <h3 style={{fontWeight: 600}}>
                                            Intuitive
                                        </h3>
                                        <p>
                                            Since Circular is proposing a novel way for users to access electronics, it was important for the process to feel intuitive.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Prototyping</div>
                            <p>
                                As a group, we started by individually sketching possible solutions for our problem, with the aim of quickly exploring a broad range of designs.
                           
                                Afterwards, we reconvened and discussed our sketches, with each of us explaining the choices we made in our sketches, which helped us to converge our ideas towards a single, unified wireframe.
                            </p>
                        </div>
                        <div className={styles.sketchFrame}>
                            <div className={styles.sketches}>
                                <iframe className={styles.sketchDisplay} src="/circular/sketches.pdf"/>
                            </div>
                        </div>
                    </div>
                

                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Research</div>
                        <h4 style={{fontWeight: 600}}>Next, I analyzed the market for related platforms.</h4>
                        <p>
                            With so many different options possible, I chose to analyze a selection of websites that competed or functioned similarly to Circular. I wanted to see what was working, and what wasn't, to see what I could learn for Circular.
                        </p>
                        </div>
                    </div>
                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                        <h3 style={{paddingTop: '1rem'}}>Design principles</h3>
                            <div className={projectStyles.olLarge} style={{paddingTop: '0', gap: '1.5rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b style={{fontWeight: 600}}>Flexible access</b>
                                        <p>
                                            Allow consumers to try products before outright buying them, giving more choice and freedom into the hands of consumers. Users should be able to pay monthly, keep products for as long as they want, and either purchase or return their products whenever they'd like.
                                        </p>
                                        {/* <p style={{fontWeight: 500, color: '#F0916C'}}>
                                            How might we allow users to flexibly try, rent, and buy electronics?
                                        </p> */}
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <b style={{fontWeight: 600}}>Circular ownership</b>
                                        <p>
                                            Introduce an intuitive process for users to reuse products used by others before them with confidence. Users should feel comfortable with the reuse of electronics, and still feel a sense of ownership for the products they receive from Circular.
                                        </p>
                                        {/* <p style={{fontWeight: 500, color: '#F0916C'}}>
                                            How might we promote this idea of circular ownership for consumers?
                                        </p> */}
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <div>
                                        <b style={{fontWeight: 600}}>Quality and choice</b>
                                        <p>
                                            Ensure users are able to easily browse from quality products across diverse categories all on one platform, including the latest and most desirable electronics. Flexible access and subscriptions should not mean compromising on quality and choice.
                                        </p>
                                        {/* <p style={{fontWeight: 500, color: '#F0916C'}}>
                                            How might we allow users to choose from a broad range of quality products?
                                        </p> */}
                                    </div>
                                </div>
                                
                            </div>
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
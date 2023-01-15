import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components//Footer'
import projectStyles from '../styles/Project.module.css'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/ExploreRI.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"
import StartButton from '../components/StartButton'
import React, { useRef } from "react"

import bannerImage from '../public/exploreri/banner.png'
import problemSpread from '../public/exploreri/problemSpread.jpg'
import airbnb from '../public/exploreri/airbnb.png'
import allTrails from '../public/exploreri/allTrails.png'


import original1 from '../public/exploreri/original1.jpg'
import original2 from '../public/exploreri/original2.jpg'


import visualDesignStyleGuideImage from 'public/visualdesignstyleguide.jpg'

export default function ExploreRI() {

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
    const researchRef = useRef<HTMLDivElement>(null)
    const prototypingRef = useRef<HTMLDivElement>(null)
    const finalDesignsRef = useRef<HTMLDivElement>(null)
    const processRef = useRef<HTMLDivElement>(null)
    const takeawaysRef = useRef<HTMLDivElement>(null)

    function handleSidebarClick(e: React.MouseEvent<HTMLElement>) {
        const element = e.currentTarget as HTMLInputElement
        const value = element.value

        
        switch (value) {
            case "Overview":
                if (!overviewRef.current) {return} 
                overviewRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Research":
                if (!researchRef.current) {return}
                researchRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Prototyping":
                if (!prototypingRef.current) {return}
                prototypingRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Final Designs":
                if (!finalDesignsRef.current) {return}
                finalDesignsRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Process":
                if (!processRef.current) {return}
                processRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Takeaways":
                if (!takeawaysRef.current) {return}
                takeawaysRef.current.scrollIntoView({behavior: "smooth"})
                break;
        }
    }
      
    return (
        <div className="page">
            <Head>
                <title>Explore Rhode Island | Shaun Latip</title>
            </Head>

            <div className={projectStyles.sidebar}>
                <button onClick={handleSidebarClick} value="Overview">Overview</button>
                <button onClick={handleSidebarClick} value="Research">Research</button>
                <button onClick={handleSidebarClick} value="Prototyping">Prototyping</button>
                <button onClick={handleSidebarClick} value="Final Designs">Final Designs</button>
                <button onClick={handleSidebarClick} value="Process">Process</button>
                <button onClick={handleSidebarClick} value="Takeaways">Takeaways</button>
            </div>

            <div className={projectStyles.pageContent}>
                <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
                    <div className={projectStyles.headline}>
                        <h2>Explore Rhode Island</h2>
                        <h3>Redesigning public park information with responsiveness in mind</h3>
                    </div>
                    <div className={projectStyles.bannerWhiteBottom}/>
                    <div className={projectStyles.bannerImageContainer}>
                        <Image
                        src={bannerImage}
                        alt="iMac, Tablet, and Phone display of interface"
                        className={projectStyles.bannerImage}
                        fill={true}/>
                    </div>
                    

                    
                </div>
                
                <div className={projectStyles.sections}>

                    <div className={projectStyles.sectionContainer} ref={overviewRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Overview</div>
                            {/* <b>Description</b> */}
                            <p>
                                As a UI/UX class assignment, I chose to redesign and develop the <Link href="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList" target="_blank" className={homeStyles.primaryLink}>Explore Rhode Island park page</Link>, which I often came across when looking up local parks and trails. The site would often come up as the first result when searching locally, and contained information such as ADA accessibility information that is hard to find elsewhere, which was a significant motivation for my redesign. My task involved creating a redesigned website, <Link href="https://vegananteater125.github.io/responsive-redesign/" target="_blank" className={homeStyles.primaryLink}>linked here</Link>, based on the aims of the original website, that would be able to better meet the expected needs of users visiting across mobile, tablet, and desktop platforms.</p>
                            <div className={projectStyles.projectInfo}>
                                <div>
                                    <b>Role</b>
                                    <p>UI/UX Designer<br/>Researcher<br/>Front-end Engineer</p>
                                </div>
                                <div>
                                    <b>Platforms</b>
                                    <p>Mobile, Tablet, <br/>and Desktop</p>
                                </div>
                                <div>
                                    <b>Timeline</b>
                                    <p>Oct 4, 2022 - Oct 18, 2022 (Two weeks)</p>
                                </div>
                                <div>
                                    <b>Tools Used</b>
                                    <p>Figma, Balsamiq Wireframes, HTML, <br/>and CSS</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.frame}>
                            <div className={styles.comparison}>
                                {/* <h4>Compare my redesign with the original below.</h4> */}
                                <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                    <TabList>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Desktop
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Tablet
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Mobile
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}}>
                                            Original
                                        </Tab>
                                    </TabList>
                                    <TabPanels style={{transition: 'all 0.3s ease'}}>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe style={{borderRadius:'0 0 12px 12px'}}className={styles.previewFrame} src="https://vegananteater125.github.io/responsive-redesign/"/>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <div className={styles.previewFrameContainer}>
                                                    <iframe style={{borderRadius:'0 0 12px 12px'}}className={styles.previewFrameTablet} src="https://vegananteater125.github.io/responsive-redesign/"/>
                                                </div>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <div className={styles.previewFrameContainer}>
                                                    <iframe style={{borderRadius:'0 0 12px 12px'}}className={styles.previewFrameMobile} src="https://vegananteater125.github.io/responsive-redesign/"/>
                                                </div>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                                <Fade
                                                variants={variants}
                                                animate="in"
                                                initial="out"
                                                exit="out">
                                                    <iframe className={styles.previewFrame} src="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList"/>
                                                </Fade>
                                        </TabPanel>
                            
                                    </TabPanels>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <h3>This project challenged me to identify specific areas of improvement while staying true to the original site's theme and design system.</h3>
                            <p>This redesign was also my first time researching, redesigning and then developing an existing website, combining these tasks into one consolidated project.</p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} ref={researchRef}>
                        <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Research</div>
                            <h3>To start, I put myself in the shoes of the the user.</h3>
                            <p style={{marginBottom: '0.5rem'}}>
                                Due to the limited time frame of two weeks, and the nature of the class assignment, I decided to start my research process by conducting a series of <Link href="https://www.nngroup.com/articles/cognitive-walkthroughs/" target="_blank" className={homeStyles.primaryLink}>cognitive walkthroughs</Link>.
                            </p>
                            <p>
                                To start, I came up with a list of 13 broad scenarios containing a series of tasks that a user might expect to complete. These included the following scenarios.
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
                            <h4 style={{fontWeight: 600}}>
                                I then ran through each scenario while asking myself the following questions:
                            </h4>
                                <div className={projectStyles.olLarge} style={{gap: '1rem'}}>
                                    <div className={projectStyles.olItemLarge}>
                                        <span style={{fontSize: '1.5rem'}}>1</span>
                                        <h4>
                                            Will the correct action be sufficiently evident to the user?
                                        </h4>
                                    </div>
                                    <div className={projectStyles.olItemLarge}>
                                        <span style={{fontSize: '1.5rem'}}>2</span>
                                        <h4>
                                            Will the user notice that the correct action is available?
                                        </h4>
                                    </div>
                                    <div className={projectStyles.olItemLarge}>
                                        <span style={{fontSize: '1.5rem'}}>3</span>
                                        <h4>
                                            Will the user associate and interpret the response from the action correctly?
                                        </h4>
                                    </div>
                                </div>
                                <p>
                                    While walking through, I also refrenced Jakob Nielsen's <Link href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" className={homeStyles.primaryLink}>10 Heuristic Principles</Link> to fuel my insights. Each task was repeated thrice across mobile, tablet, and desktop devices. As a result, these walkthroughs provided me insight into what issues were likely hindering the experience of the website's users.
                                </p>
                                <h4 style={{fontWeight: 600, marginBottom: '1rem', marginTop: '2.5rem'}}>
                                I also used WebAIM's <Link style={{fontWeight: 600}} href="https://wave.webaim.org/" target="_blank" className={homeStyles.primaryLink}>WAVE tool</Link> to assess site accessibility.
                                </h4>
                                <p>I chose to use this to assess the site for use with screen readers, keyboard navigation, and regarding contrast levels. This tool proved invaluable in helping me to understand how users with impairments might experience the site. </p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <h3>With these insights, I explored the key problems I would focus on.</h3>
                            <h4>On a broader scale, the website had significant issues surrounding <br/> <span className="primary600">organization</span>, <span className="primary600">platform responsiveness</span>, and <span className="primary600">accessibility</span>.
                            </h4>
                            <h4 style={{marginTop: '0.5rem'}}>
                                My walkthroughs led me to 5 main pain points in the original design, seen below.
                            </h4>
                            {/* <p>
                               I summarized the key issues from my walkthrough into 6 pain points:
                            </p> */}
                            {/* <div className={projectStyles.ol}>
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
                            </div> */}
                        </div>
                        <Image style={{marginTop: '4.5rem'}}alt="Spread of 6 key pain points" src={problemSpread} width={1176} height={1114} quality={100}/>
                        {/* <iframe src="./exploreri/problemSpread.pdf" className={styles.problemSpreadPdf}></iframe> */}
                        <div className={projectStyles.section} style={{marginTop: '6rem'}}>
                            <h3>The WAVE tool highlighted other possible issues to my attention, including: </h3>
                            <div className={projectStyles.olLarge} style={{marginTop: '0rem', paddingTop: '0.5rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <h4>
                                        Skipped heading levels and smaller p tags styled to match larger headings.
                                    </h4>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <h4>
                                        No page regions and no use of ARIA outside of linked Google maps widget.
                                    </h4>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <h4>
                                        Low contrast and size warnings on a significant amount of text on buttons and paragraphs.
                                    </h4>
                                </div>
                            </div>
                            <h4 style={{marginTop: '1.5rem'}}>A complete list of my findings from my research process can be viewed <Link href="/exploreri/extrafindings.pdf" target="_blank" className={homeStyles.primaryLink}>here</Link>.</h4>
                        </div>
                    </div>
                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <h3>To inform myself, I also analyzed adjacent platforms for inspiration.</h3>
                            <p>I viewed at a variety of platforms online that sought to accomplish similar functions as the page I was redesigning. I wanted to see what design patterns have worked before for similar functions, informing myself as best as I could before I started wireframing.</p>
                        </div>
                        <div className={projectStyles.spreadRow} style={{gap: '6rem', marginTop: '4rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b>AirBnB</b>
                                <p>AirBnB's experience is a lot less cluttered while still sharing a significant amount of information about a location, with a sparingly-used accent color and considerable white space. </p>
                                <p>
                                    Photos take considerable space in the center, allowing the user to immediately see what a location looks like.
                                </p>
                            </div>
                            <Image style={{border: '1px solid #E4E4E4'}} alt="AirBnB home page" src={airbnb} width={600} height={336}/>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '6rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b>
                                    AllTrails
                                </b>
                                <p>
                                    AllTrails features photos and trail at the start of the page, while a trail map is similarly included at a much smaller, preview size.
                                </p>
                                <p>
                                    Content is split in a 2:1 column ratio with text-heavy sections on the left, making more efficient use of horizontal space and aiding the page's sense of order through alignment.
                                </p>
                            </div>
                            <Image style={{border: '1px solid #E4E4E4'}} alt="AllTrails home page" src={allTrails} width={600} height={336}/>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} ref={prototypingRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle}>Prototyping</div>
                            <h3>I then created three wireframes, with one for each platform.</h3>
                            <p>
                                During this stage, I focused on mapping out the layout of how the website would be structured using Balsamiq Wireframes. I prioritized making an overall structure that would translate easily across desktop, tablet, and mobile, with a strong sense of organization and hierarchy.
                                Each wireframe is annotated to show why particular design decisions were made. 
                            </p>
                            </div>
                            <div className={styles.frameAlt}>
                                <div className={styles.lofis}>
                                    <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                                <TabList>
                                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                                    _hover={{ color: '#F0916C'}}
                                                    _active={{ color: '#F0916C' }}
                                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                                        Desktop
                                                    </Tab>
                                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                                    _hover={{ color: '#F0916C'}}
                                                    _active={{ color: '#F0916C' }}
                                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}}>
                                                        Tablet
                                                    </Tab>
                                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                                    _hover={{ color: '#F0916C'}}
                                                    _active={{ color: '#F0916C' }}
                                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}}>
                                                        Mobile
                                                    </Tab>
                                                </TabList>
                                                <TabPanels style={{transition: 'all 0.3s ease'}}>
                                                <TabPanel style={{padding: 0}}>
                                                    <Fade
                                                    variants={variants}
                                                    animate="in"
                                                    initial="out"
                                                    exit="out">
                                                        <iframe className={styles.lofiFrame} src="/exploreri/lofiDesktop.jpg"/>
                                                    </Fade>
                                                </TabPanel>
                                                <TabPanel style={{padding: 0}}>
                                                    <Fade
                                                    variants={variants}
                                                    animate="in"
                                                    initial="out"
                                                    exit="out">
                                                        <iframe className={styles.lofiFrame} src="/exploreri/lofiTablet.jpg"/>
                                                    </Fade>
                                                </TabPanel>
                                                <TabPanel style={{padding: 0}}>
                                                    <Fade
                                                    variants={variants}
                                                    animate="in"
                                                    initial="out"
                                                    exit="out">
                                                        <iframe className={styles.lofiFrame} src="/exploreri/lofiMobile.jpg"/>
                                                    </Fade>
                                                </TabPanel>
                                
                                                </TabPanels>
                                    </Tabs>
                                </div>
                            </div>
                        <div>

                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer} ref={finalDesignsRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle}>Final Designs</div>
                            <h3>High-Fidelity Design</h3>
                            <p>
                                Working off my wireframes, I then developed three high-fidelity prototypes in Figma, with one for each platform.
                            </p>
                            <div className={styles.hifiComparison} style={{marginTop: '2rem'}}>
                                {/* <h4>Compare my redesign with the original below.</h4> */}
                                <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                    <TabList>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Desktop Hi-Fi
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Tablet Hi-Fi
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Mobile Hi-Fi
                                        </Tab>
                                    </TabList>

                                    <TabPanels style={{transition: 'all 0.3s ease'}}>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe className={styles.hifiFrame} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5RmQxdjM28kNy1HCv6DXUB%2FResponsive-Redesign%3Fnode-id%3D10%253A437%26t%3DMPFt0dAo7QpAwdxw-1"></iframe>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                        <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe className={styles.hifiFrame} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5RmQxdjM28kNy1HCv6DXUB%2FResponsive-Redesign%3Fnode-id%3D104%253A221%26t%3DMPFt0dAo7QpAwdxw-1"></iframe>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                                variants={variants}
                                                animate="in"
                                                initial="out"
                                                exit="out">
                                                <iframe className={styles.hifiFrame} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5RmQxdjM28kNy1HCv6DXUB%2FResponsive-Redesign%3Fnode-id%3D10%253A453%26t%3DMPFt0dAo7QpAwdxw-1"></iframe>                                            </Fade>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </div>
                            <h4 style={{alignSelf: 'center', textAlign: 'center', marginTop: '4rem'}}>
                               My redesign process can be broken down into the three aspects of <br/> <span style={{fontWeight: 600, color: '#F0916C'}}>visual design</span>, <span style={{fontWeight: 600, color: '#F0916C'}}>structure</span>, and <span style={{fontWeight: 600, color: '#F0916C'}}>consistent language</span>.
                            </h4>
                        </div>
                        
                        </div>

                        

                    <div className={projectStyles.sectionContainer} style={{paddingBottom: '0rem', paddingTop: '2rem'}} ref={processRef}>
                        <div className={projectStyles.section}>
                            <b style={{marginBottom: 0}}><span style={{fontWeight: 600, color: '#F0916C'}}>Aspect #1</span></b>
                            
                            <h3>
                            Reshaping the visual design system
                            </h3>

                            <p>
                                Visually, the original website often felt extremely <span style={{fontWeight: '600'}}>crowded and noisy</span> while in use, lending the website to feel <span style={{fontWeight: '600'}}>uninviting for users</span>. 
                                
                            </p>
                            <p style={{paddingTop: '0.5rem'}}>
                                To solve this, I reworked the website's visual design system to help make the feel of the website more inviting and clean for users. Working off of the original blue and green color palette, I made a few changes to help make the site better for users, while maintaining elements from the previous design that fit with the website's theme.
                            </p>

                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem'}}>
                                    <Image src='/exploreri/styleGuide.jpg' quality={100} width={732} height={412} alt="Visual Style Guide"/>
                                    <p style={{fontSize: '1rem', color:'#737373'}}>The visual design style guide that defined my visual redesign.</p>
                                </div>


                        </div>
                    </div>
                        
                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <h4 style={{alignSelf: 'center'}}>This new design style was developed with the following goals in mind:</h4>
                        </div>
                        <div className={projectStyles.spreadRow} style={{gap: '4rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <div className={projectStyles.olLarge} style={{gap: '3rem'}}>
                                    <div className={projectStyles.olItemLarge}>
                                        <div style={{gap: '1rem'}}>
                                            {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Goal #1</span> */}
                                            <h4 style={{fontWeight: 600}}>Creating a lighter mood</h4>
                                            <p>
                                                The original was filled with an excess of visually dense colors, with dark browns, blues, and deep greens populating the space.
                                            </p>
                                            <p>
                                                I used a lighter color palette, with a much lighter blue-green gradient background, and backgrounds of mostly white. I also flipped the gradient direction to move from light to dark to draw the user's gaze to scroll down the page. 
                                            </p>
                                            <p>
                                                Lastly,drop shadow effects were also added to distinguish elements rather than borders and drastic color changes. I also strayed from the original's use of boxier elements to using more border radius and rounded shapes to aid this new theme.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={projectStyles.olItemLarge}>
                                        <div style={{gap: '1rem'}}>
                                            {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Goal #2</span> */}
                                            <h4 style={{fontWeight: 600}}>Improving contrast and legibility</h4>
                                            <p>
                                                Throughout the page, I made an effort to use as much blacks and whites as possible to emphasize contrast.
                                            </p>
                                            <p>
                                                Furthermore, I chose a new, darker sole accent color of <span style={{fontWeight: 600, fontSize: '1rem', color: '#215561'}}>#215561</span> to maintain good contrast ratios against the lighter background when highlighting specific elements.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={projectStyles.olItemLarge}>
                                       
                                        <div style={{gap: '1rem'}}>
                                            {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Goal #3</span> */}
                                            <h4 style={{fontWeight: 600}}>Emphasizing interaction</h4>
                                            <p>
                                                With a more streamlined use of color throughout the page, I used contrasting colors to visually emphasize interactable elements to distinguish them from regular content.
                                            </p>
                                            <p>
                                                The original website's button styling, with thick, dark borders, did not match the lighter feel of the website I wanted to create. In response, I avoided the use of borders in buttons in my redesign, using instead more rounded corners and colors to emphasize them better.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image src='/exploreri/sideBySide.jpg' quality={100} width={450} height={1116} style={{borderRadius: '12px'}} alt="Side by side comparison"/>
                        </div>
                    </div>

                        



                        
                       
                   

                    <div className={projectStyles.sectionContainer} style={{}}>
                        <div className={projectStyles.section}>
                            <b style={{marginBottom: 0}}><span style={{fontWeight: 600, color: '#F0916C'}}>Aspect #2</span></b>
                            
                            <h3>
                            Restructuring for organization and hierarchy
                            </h3>

                            <p>
                                My research showed me that the original website contained a lot of useful information for many different tasks, from driving directions, trail maps, and community-submitted content. However, it became clear that this information was <span style={{fontWeight: '600'}}>largely inacessible due to subpar organization and a confusing structure</span> that made navigating the website and scanning quite frustrating. 
                            </p>
                            <p style={{marginTop: '0rem'}}>
                                To solve this, I restructured the site to encourage the <Link className={homeStyles.primaryLink} style={{fontWeight: 600}}href="https://www.nngroup.com/articles/layer-cake-pattern-scanning/" target="_blank">layer-cake scanning pattern</Link>,   
                                as it best allows users to efficiently and quickly find information that they need.
                            </p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} style={{paddingBottom: '0rem', paddingTop: '0rem'}}>
                        <div className={projectStyles.spreadRow}style={{gap: '4rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b>
                                    What is a layer-cake scanning pattern?
                                </b>
                                <p>
                                    This pattern is characterized when users, while scanning through a page, fixate mostly on the page’s headings and subheadings, with deliberate occasional fixations on the (body) text in between. 
                                </p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                                <Image alt="Layer cake pattern explanation graphic" src='/exploreri/patterns.png' width={500} height={336}/>
                                <Link href="https://www.toptal.com/designers/web/ui-design-best-practices" target="_blank" style={{fontSize: '0.75rem'}} className={homeStyles.primaryLink}>Source</Link>
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                            <div className={projectStyles.section}>
                                <h4>
                                    The overall structure of my redesigned website focused on the two following ideas:
                                </h4>
                                <div className={projectStyles.olLarge}>
                                        <div className={projectStyles.olItemLarge}>
                                            <span style={{fontSize: '1.5rem'}}>1</span>
                                            <div>
                                                <h4 style={{fontWeight: 600}}>Clearly distributing sections</h4>
                                                <p>
                                                    Content is distributed into groups that are, for the most part, completely distinct with no overlap between groups, removing confusion on where information is located in the page.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={projectStyles.olItemLarge}>
                                        <span style={{fontSize: '1.5rem'}}>2</span>
                                            <div>
                                                <h4 style={{fontWeight: 600}}>Following a grid structure</h4>
                                                <p>
                                                The page structure follows a consistent grid that divides each section into thirds. With this grid, users will be able to easily scan vertically across sections by following the implied lines of the grid. Certain sections are then split in two columns with a 2:1 width ratio. This allows users to view related content by predictably scanning horizontally.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                        </div>
                        
                        
                    </div>

                    

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <h4 style={{marginTop: '0rem', alignSelf: 'center'}}>
                                        These changes were also aided by the inclusion of two new types of page elements:
                            </h4>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #1</span> */}
                                <h4 style={{fontWeight: 600}}>
                                    Clearly distributing sections
                                </h4>
                                <p>
                                    A navigation bar is included near the start of the page that acts as a table of contents, and provides an overview on the sections further down the page. On click, these links allow users to quickly navigate to a specific section.
                                </p>
                            </div>
                            <Image style={{borderRadius: '0px'}} alt="Gif" src="/exploreri/navbar.gif" width={500} height={336}/>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #2</span> */}
                                <h4 style={{fontWeight: 600}}>
                                    Marking content with headings
                                </h4>
                                <p>
                                    To help the user to scan, headings and subheadings are included throughout the page in a consistent, predictable manner. Font weights and sizes let these headings visually stand out to help users latch on to them. These also help screen readers to more easily navigate the page.
                                </p>
                            </div>
                            <Image style={{}} alt="Gif" src="/exploreri/headings.gif" width={500} height={336}/>
                        </div>
                        
                    </div>

                    <div className={projectStyles.sectionContainer} style={{}}>
                        <div className={projectStyles.section}>
                            <b style={{marginBottom: 0}}><span style={{fontWeight: 600, color: '#F0916C'}}>Aspect #3</span></b>
                            
                            <h3>
                                Using consistent language
                            </h3>

                            <p>
                               Another frequent issue I discovered through my cognitive walkthroughts was the lack of consistent language used across the original website. These inconsistencies made it difficult to understand what information was supposed to be communicated, and created frustration during my cognitive walkthroughs.
                            </p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} style={{paddingTop: '2rem'}}>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #1</span> */}
                                <h4 style={{fontWeight: 600}}>
                                    More verbs, less nouns
                                </h4>
                                <p>
                                    Instead of mixing unaccompanied nouns and verbs, text accompanying interactive elements always address the user and start with an action verb. This helps to make it clearer to users what different elements do.
                                </p>
                            </div>
                            <Image style={{borderRadius: '0px'}} alt="Gif" src="/exploreri/verbs.jpg" width={521} height={301}/>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #2</span> */}
                                <h4 style={{fontWeight: 600}}>
                                    Labeling icons
                                </h4>
                                <p>
                                Previously, important park information such as park restrictions were conveyed through unaccompanied icons. These icons had the potential to confuse readers as to what they meant, and also made it more difficult for screen reader use. To solve this, I made sure these icons are always accompanied with labels that confirm their intended meaning.
                                </p>
                            </div>
                            <Image style={{}} alt="" src="/exploreri/labels.gif" width={521} height={350}/>
                        </div>
                       
                        
                    </div>

                    <div className={projectStyles.sectionContainer} ref={takeawaysRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle}>Takeaways</div>
                            <p>
                                This project was critical in developing myself as a designer. Redesigning this website taught me a lot in how to reduce unnecessary design elements and complexity to create simple, clean design. This process also taught me the importance of considering platform responsiveness as a key factor in crafting interfaces.
                            </p>
                            <p>
                                Completing my cognitive walkthroughs also taught me how to better inform my design decisions, even when longer-term user observation, testing, and insights aren't possible.
                            </p>
                            <p>
                                When I presented this project to my peers, I felt proud with how much this experience helped me to feel more comfortable in design.
                            </p>
                            <h4 style={{fontWeight: 600, marginTop: '2rem'}}>
                                If I had more time, I would...
                            </h4>
                            <div className={projectStyles.olLarge}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Iterate with feedback from others
                                        </b>
                                        <p>
                                            Since my research process centered on cognitive walkthroughs I completed myself, I would like to examine how others might try and use my current redesign to see what could be further improved. This would also help me to better compensate for any blind spots that I might have missed.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Explore redesigning other sections of the website
                                        </b>
                                        <p>
                                            My redesign was only focused on one type of page of Explore Rhode Island's website. I would like to see how the design system I developed for this page could be extended to other parts of the website to create a more cohesive redesign that I could share with Explore Rhode Island.
                                        </p>
                                    </div>
                                </div>
                            </div>
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

                    {/* <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <h3> </h3>
                        </div>
                    </div>

                    <div className={projectStyles.olLarge}>
                        <div className={projectStyles.olItemLarge}>
                            <span style={{fontSize: '1.5rem'}}>1</span>
                            <h4>
                                Will the correct action be sufficiently evident to the user?
                            </h4>
                        </div>
                        <div className={projectStyles.olItemLarge}>
                            <span style={{fontSize: '1.5rem'}}>2</span>
                            <h4>
                                Will the user notice that the correct action is available?
                            </h4>
                        </div>
                        <div className={projectStyles.olItemLarge}>
                            <span style={{fontSize: '1.5rem'}}>3</span>
                            <h4>
                                Will the user associate and interpret the response from the action correctly?
                            </h4>
                        </div>
                    </div>

                    <div className={projectStyles.spreadRow}style={{gap: '6rem'}}>
                        <div className={projectStyles.spreadRowText}>
                            <b>
                            </b>
                            <p>

                            </p>
                        </div>
                        <Image style={{border: '1px solid #E4E4E4'}} alt="AllTrails home page" src={allTrails} width={500} height={336}/>
                    </div> */}

                </div>

                


            </div>

            <Footer variant={"project"}/>
        </div>
    )

}
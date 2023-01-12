import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components//Footer'
import projectStyles from '../styles/Project.module.css'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/ExploreRI.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"

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

                    <div className={projectStyles.sectionContainer} id="#overview">
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle}>Overview</div>
                            {/* <b>Description</b> */}
                            <p>
                                As a UI/UX class assignment, I chose to redesign and develop the <Link href="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList" target="_blank" className={homeStyles.primaryLink}>Explore Rhode Island park page</Link>, which I often came across when looking up local parks and trails. The site would often come up as the first result when searching locally, and contained information such as ADA accessibility information that is hard to find elsewhere, which was a significant motivation for my redesign. My task involved creating a redesigned website, <Link href="https://vegananteater125.github.io/responsive-redesign/" target="_blank" className={homeStyles.primaryLink}>linked here</Link>, based on the aims of the original website, that would be able to better meet the expected needs of users visiting across mobile, tablet, and desktop platforms.</p>
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
                        <div className={styles.comparison}>
                                {/* <h4>Compare my redesign with the original below.</h4> */}
                                <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                        <TabList>
                                            <Tab style={{ fontWeight: 500, marginBottom: '2px'}}
                                            _hover={{ color: '#F0916C'}}
                                            _active={{ color: '#F0916C' }}
                                            _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                                Redesigned
                                            </Tab>
                                            <Tab style={{ fontWeight: 500, marginBottom: '2px'}}
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
                                                    <iframe className={projectStyles.desktopFrame} src="https://vegananteater125.github.io/responsive-redesign/"/>
                                                </Fade>
                                            </TabPanel>
                                            <TabPanel style={{padding: 0}}>
                                                    <Fade 
                                                    variants={variants}
                                                    animate="in"
                                                    initial="out"
                                                    exit="out">
                                                        <iframe className={projectStyles.desktopFrame} src="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList"/>
                                                    </Fade>
                                            </TabPanel>
                                            
                                        </TabPanels>
                                    </Tabs>
                            </div>
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <h3>This project challenged me to identify specific areas of improvement while staying true to the original site's theme and design system.</h3>
                            <p>This redesign was also my first time researching, redesigning and then developing an existing website, combining these tasks into one consolidated project.</p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} id="research">
                        <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle}>Research</div>
                            <h3>First, I put myself in the shoes of the the user to identify areas of improvement.</h3>
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
                                <p>
                                    While walking through, I also refrenced Jakob Nielsen's <Link href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" className={homeStyles.primaryLink}>10 Heuristic Principles</Link> to fuel my insights. Each task was repeated thrice across mobile, tablet, and desktop devices. As a result, these walkthroughs provided me insight into what issues were likely hindering the experience of the website's users.
                                </p>
                                <h4 style={{fontWeight: 600, marginBottom: '1rem', marginTop: '4rem'}}>
                                I also used WebAIM's <Link style={{fontWeight: 600}} href="https://wave.webaim.org/" target="_blank" className={homeStyles.primaryLink}>WAVE tool</Link> to assess site accessibility.
                                </h4>
                                <p>I chose to use this to assess the site for use with screen readers, keyboard navigation, and regarding contrast levels. This tool proved invaluable in helping me to understand how users with impairments might experience the site. </p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <h3>With these insights, I defined the key problems I would focus on.</h3>
                            <h4>On a broader scale, the website had significant issues surrounding <br/> <span className="primary600">organization</span>, <span className="primary600">platform responsiveness</span>, and <span className="primary600">accessibility</span>.
                            </h4>
                            <h4 style={{marginTop: '1.5rem'}}>
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
                            <h3>Lastly, I examined and analyzed adjacent platforms.</h3>
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

                    <div className={projectStyles.sectionContainerGray} id="wireframing">
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle}>Low-Fidelity Design</div>
                            <h3>I then created three wireframes, with one for each platform.</h3>
                            <p>
                                During this stage, I focused on mapping out the layout of how the website would be structured using Balsamiq Wireframes. I prioritized making an overall structure that would translate easily across desktop, tablet, and mobile, with a strong sense of organization and hierarchy.
                            </p>
                            <p>
                                Each wireframe is annotated to show why particular design decisions were made. 
                            </p>
                            </div>
                            <div className={styles.lofis}>
                                <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                            <TabList>
                                                <Tab style={{ fontWeight: 500, marginBottom: '2px'}}
                                                _hover={{ color: '#F0916C'}}
                                                _active={{ color: '#F0916C' }}
                                                _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                                    Desktop
                                                </Tab>
                                                <Tab style={{ fontWeight: 500, marginBottom: '2px'}}
                                                _hover={{ color: '#F0916C'}}
                                                _active={{ color: '#F0916C' }}
                                                _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}}>
                                                    Tablet
                                                </Tab>
                                                <Tab style={{ fontWeight: 500, marginBottom: '2px'}}
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
                        <div>

                        </div>
                    </div>
                    <div className={projectStyles.sectionContainer} id="design">
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

                


            </div>

            <Footer variant={"project"}/>
        </div>
    )

}
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components//Footer'
import projectStyles from '../styles/Project.module.css'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/Blt.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"
import StartButton from '../components/StartButton'
import React, { useRef } from "react"

import bannerImage from '../public/blt/banner.png'

export default function ExploreRI() {

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
                <title>Summer Research | Shaun Latip</title>
            </Head>
            

            {/* <div className={projectStyles.sidebar}>
                <button onClick={handleSidebarClick} value="Overview">Overview</button>
            </div> */}

            <div className={projectStyles.pageContent}>
                <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
                    <div className={projectStyles.headline}>
                        <h2>Language and Thought Research Internship</h2>
                        <h3>Exploring behavioral research through virtual experiments</h3>
                    </div>
                    {/* <div className={projectStyles.bannerWhiteBottom}/> */}
                    <div className={projectStyles.bannerImageContainer}>
                        <Image
                        src={bannerImage}
                        alt="Banner image"
                        className={projectStyles.bannerImage}
                        fill={true}/>
                    </div>
                
                
                </div>
                <div className={projectStyles.sectionContainer} ref={overviewRef}>
                    <div className={projectStyles.section}>
                        <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Overview</div>
                        <p>
                            I spent my summer of 2022 working at the <Link href="https://sites.brown.edu/bltlab/" target="_blank" className={homeStyles.primaryLink}>Brown Language and Thought Lab</Link>, a psychology research lab at Brown University. I worked on developing and running a series of several behavioral studies examining how language and thought develop and relate with each other, with all of these studies taking place virtually through Zoom.
                        </p>
                        <div className={projectStyles.projectInfo}>
                            <div>
                                <b>Position</b>
                                <p>Research Assistant</p>
                            </div>
                            <div>
                                <b>Projects</b>
                                <p>Several virtual studies (Confidential)</p>
                            </div>
                            <div>
                                <b>Lab</b>
                                <p><Link href="https://sites.brown.edu/bltlab/" target="_blank" className={homeStyles.primaryLink}>Brown Language and Thought Lab</Link></p>
                            </div>
                            <div>
                                <b>Timeline</b>
                                <p>June, 2022 - Sept, 2022<br/>Three months</p>
                            </div>
                            {/* <div>
                                <b>Tools Used</b>
                                <p>Figma, Balsamiq Wireframes, HTML, CSS</p>
                            </div> */}
                        </div>
                    </div>

                </div>

                <div className={projectStyles.sections}>

                <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle}>Context</div>
                            <h2 style={{marginBottom: '1rem'}}>Adapting Research in the time of COVID-19</h2>
                            <p>
                                With the onset of the COVID-19 pandemic, psychology research in labs across the U.S faced an enormous challenge. With the pandemic halting the use of in-person studies, labs were forced to either learn how to transition their research fully online, through platforms such as Zoom, or to stop researching completely.
                            </p>
                            <p>
                                Throughout my internship, the studies I worked on were part of this transition and were developed to be conducted completely online. 
                            </p>
                            <b>
                                This challenged me to think flexibly and creatively to work around these constraints.
                            </b>
                            
                        </div>
                    </div>

                <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <h2 style={{marginBottom: '0rem'}}>My Impact</h2>
                           
                        </div>

                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText} style={{maxWidth: 600}}>
                            <div className={projectStyles.ol}>
                                <div className={projectStyles.olItem}>
                                    <span>01</span>
                                    <div>
                                        <p>
                                            <span style={{fontWeight: 600, fontSize: '1rem', color: 'black'}}>Held online studies</span> with our user participants, guiding parents and children with stimuli and online programs through experiments.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>02</span>
                                    <div>
                                        <p>
                                            <span style={{fontWeight: 600, fontSize: '1rem', color: 'black'}}>Analyzed experient results and recordings</span> to identify areas of improvement to iterate better experiment setups.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>03</span>
                                    <div>
                                        <p>
                                            <span style={{fontWeight: 600, fontSize: '1rem', color: 'black'}}>Developed visual stimuli</span> with prompts and graphics for use in future experiments.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>04</span>
                                    <div>
                                        <p>
                                            <span style={{fontWeight: 600, fontSize: '1rem', color: 'black'}}>Reached out to families and educational institutions</span> to recruit participants and create partnerships for our experiments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <Image style={{borderRadius: '12px'}} alt="Lab photo" src="/blt/lab.png" width={400} height={496}/>
                        </div>
                        
                    </div>

                    

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <h2 style={{marginBottom: '1rem'}}>Learnings</h2>
                            <div className={projectStyles.olLarge} style={{gap: '3rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>Iteration and progress come hand-in-hand.</h4>
                                        <p>With little prior examples of fully virtual studies to rely on, we were forced to constantly iterate how we set up our virtual experiments before arriving at one that could yield scientifically viable results.</p>
                                        <p style={{color: '#F0916C', fontWeight: 500}}>
                                            I learned it was important to see iteration as an important and necessary part of improvement, and as an important source of insight in the design process.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>When unsure, don't be afraid to ask.</h4>
                                        
                                        <p>
                                            As a Computer Science major and first-time lab researcher, I lacked the familiarity with psychology research concepts that many others in my team had.
                                        
                                            Although daunting, I found it was helpful to be open and ask my peers for guidance when I felt out of my depth. My peers answered me and provided resources for me to learn on my own time, which allowed me to keep learning and growing.
                                        </p>
                                        <p style={{color: '#F0916C', fontWeight: 500}}>
                                            I learned that it's okay to not know everything, and that that admission is the first step to learning more.
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>For the unfamiliar, borrow from adjacent fields.</h4>
                                        
                                        <p>
                                            Since we did not have access to physical objects or tools in our studies, we had to develop digital replacements with graphics, animations, and recorded audio that could be used virtually.
                                        
                                            We also employed tools used for HCI research to further develop our experiments. For instance, I worked with eye tracking for certain studies to help monitor the attention of our research participants.
                                        </p>
                                        <p style={{color: '#F0916C', fontWeight: 500}}>
                                            I learned that drawing across discplines can be helpful in managing unfamiliar situations.
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>4</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>Behavioral research demands ethical responsibility and trust.</h4>
                                        <p>
                                            As part of my training, I completed a social, behavioral, and educational research training program under the CITI program, <Link target="_blank" href="https://www.citiprogram.org/verify/?w9e6a6785-fc9e-43de-8aa1-d759c17231bd-49505561" className={homeStyles.primaryLink}>seen here</Link>. Through past examples, and from talking with my peers, I learned how behavioral research has the potential to cause great harm, a potential that requires active effort to avoid.
                                        </p>
                                        <p style={{color: '#F0916C', fontWeight: 500}}>
                                            With my experience, I learned that ethics, responsibility, and trust are central towards working in research.
                                        </p>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        

                    </div>

                    <div className={projectStyles.sectionContainer}>
                            <div className={projectStyles.section}>
                                <div className={projectStyles.sectionTitle}>Reflections</div>
                                <p>
                                    My experience at the Brown Language and Thought Lab was filled with new experiences, and let me get to know a team of incredibly talented, kind people. I am truly grateful at how my summer helped me to learn and grow in ways I never would have expected, having provided the trust and support needed for me to learn.
                                </p>
                                <p>
                                    
                                </p>
                                <p>
                                <span style={{fontWeight: 600}}>
                                    For confidentiality reasons, other details about my work this summer are not publicly available.
                                </span><br/><br/>Please reach out to me if you have any questions about my work.
                                </p>
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
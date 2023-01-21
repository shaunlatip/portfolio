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
                        fill={true}
                        style={{maxWidth: '600px'}}/>
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
                                We started by outlining the problem we faced.
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
                                We focused on designing an answer to the question:
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

                    {/* <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Final Designs</div>
                            <h3>
                                Our final interactive prototype is available below.
                            </h3>
                            <p>

                            </p>
                        </div>
                    </div> */}

                    

                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Process</div>
                            <h2 className={projectStyles.h2SectionHeader}>Brainstorming</h2>
                            <p>
                                We started our design process with a brainstorming session, where we each sketched a variety of possible design solutions to our challenge. Through this, we wanted to quickly explore a broad range of designs.
                           
                                We then reconvened and discussed our sketches, with each of us explaining the choices we made in our sketches. 
                            </p>
                            <p>
                                This process allowed us to share and learn from the different approaches we each used to get closer to a single wireframe.
                            </p>
                        </div>
                        <div className={styles.sketchFrame}>
                            <div className={styles.sketches}>
                                <iframe className={styles.sketchDisplay} src="/circular/sketches.pdf"/>
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Process</div>
                            <h2 className={projectStyles.h2SectionHeader}>Framing User Flow</h2>
                            <p>
                                Following our brainstorming session, we worked on forming an initial user flow to guide our wireframe. With just two weeks to finish our project, we decided that designing based on user tasks would be an efficient way to design around our solution. 
                            </p>
                            <p>
                                We considered how a variety of different possible users, each with a unique set of tasks they set out to complete, might be able to access and navigate a single website. 
                            </p>
                            <div className={styles.splitCol}>
                                <div className={styles.col}>
                                    <div className={styles.ol}>
                                        <h3 style={{fontWeight: 600, alignSelf: 'center'}}>New Users</h3>
                                        <div className={styles.olItem}>
                                            <span>01</span>
                                            <p>
                                            <p>
                                                How might they get acquainted with Circular's flexible subscription model?
                                            </p>
                                            </p>
                                        </div>
                                        <div className={styles.olItem}>
                                            <span>02</span>
                                            <p>
                                                How would they browse Circular's selection and rates of different electronics?
                                            </p>
                                        </div>
                                        <div className={styles.olItem}>
                                            <span>03</span>
                                            <p>
                                                How could they evaluate the legitimacy and credibility of Circular?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <div className={styles.ol}>
                                        <h3 style={{fontWeight: 600, alignSelf: 'center'}}>Returning Users</h3>
                                        <div className={styles.olItem}>
                                            <span>01</span>
                                            
                                            <p>
                                                How would they purchase products that they are currently trying from Circular?
                                            </p>
                                            
                                        </div>
                                        <div className={styles.olItem}>
                                            <span>02</span>
                                            <p>
                                                How could they find new products to try and explore?
                                            </p>
                                        </div>
                                        <div className={styles.olItem}>
                                            <span>03</span>
                                            <p>
                                                How might they change information or preferences linked with their account?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Building off these considerations, we started to map out a broad-level view on how our first prototype would manage these tasks. To accomodate the abundance of filters, information, and different functions we anticipated our design would need, we decided on designing for a desktop web interface. 
                            </p>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b>
                                    Sketching User Flows
                                </b>
                                <p>
                                    On a classroom whiteboard, we experimented with a variety of user flows. We created a series of rough mock webpages with dry-erase markers, and ran through our list of user tasks.
                                </p>
                                <p>
                                    Through iteration and experimenting with changes, we were able to identify more intuitive and efficient ways of navigating our website, which led us to a flow we were satisfied with.
                                </p>
                            </div>
                            <div className={projectStyles.pictureCaptionWrapper}>
                                <Image alt="AllTrails home page" src="/circular/whiteboard.jpg" width={500} height={336} style={{borderRadius: '12px', border: '1px solid #E4E4E4'}}/>
                                <span className={projectStyles.caption}>
                                    One iteration of our user flow sketching process
                                </span>
                            </div>
                        </div>
                        <div className={projectStyles.section} style={{marginTop: '2rem'}}>
                            <h4 style={{fontWeight: 600}}>These sketches led us to three choices in our website's flow.</h4>
                            <div className={projectStyles.olLarge}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Landing page
                                        </b>
                                        <p>
                                            We decided on having users first go through a landing page because we felt that a dedicated page was needed to acquaint users with Circular's unique subscription model.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <b>
                                            Logged in and out states
                                        </b>
                                        <p>
                                            A logged out state and logged in state exist for certain pages, to both prevent new users from being overwhelmed with information irrelevant in deciding to join the marketplace, and to make the flow of information more efficient for returning users.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <div>
                                        <b>
                                            Centralized explore page
                                        </b>
                                        <p>
                                            After the landing page, users are brought to the Explore page which lets users explore new products, search for specific products, and, if logged in, manage existing account information to let users complete tasks efficiently. This also allowed users to return to this page to reset after errors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitle} style={{paddingBottom: '0'}}>Prototyping</div>
                            <h2 className={projectStyles.h2SectionHeader}>Platform Analysis</h2>
                            <p>
                                With the overall structure defined, we delegated different sections of the website to create a prototype for. I was tasked with the site-wide navigation bars and the central explore page.
                            </p>
                            <p>
                                With so many different options possible to design, I chose to start by analyzing the market for websites that competed with or functioned similarly to Circular. I wanted to see what was working, and what wasn't, to see what I could apply.
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
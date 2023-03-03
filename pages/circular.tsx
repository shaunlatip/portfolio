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
    const finalPrototypeRef = useRef<HTMLDivElement>(null)
    const challengeRef = useRef<HTMLDivElement>(null)
    const researchRef = useRef<HTMLDivElement>(null)
    const firstIterationRef = useRef<HTMLDivElement>(null)
    const secondIterationRef = useRef<HTMLDivElement>(null)
    const userTestingRef = useRef<HTMLDivElement>(null)
    const takeawaysRef = useRef<HTMLDivElement>(null)

    function handleSidebarClick(e: React.MouseEvent<HTMLElement>) {
        const element = e.currentTarget as HTMLInputElement
        const value = element.value
        
        switch (value) {
            case "Overview":
                if (!overviewRef.current) {return} 
                overviewRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Final Prototype":
                if (!finalPrototypeRef.current) {return} 
                finalPrototypeRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Challenge":
                if (!challengeRef.current) {return} 
                challengeRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Research":
                if (!researchRef.current) {return} 
                researchRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "First Iteration":
                if (!firstIterationRef.current) {return} 
                firstIterationRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "Second Iteration":
                if (!secondIterationRef.current) {return} 
                secondIterationRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case "User Testing":
                if (!userTestingRef.current) {return} 
                userTestingRef.current.scrollIntoView({behavior: "smooth"})
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
                <title>Circular | Shaun Latip</title>
            </Head>
            
            <div className={projectStyles.sidebar}>
                <button onClick={handleSidebarClick} value="Overview">Overview</button>
                <button onClick={handleSidebarClick} value="Final Prototype">Final Solution</button>
                <button onClick={handleSidebarClick} value="Challenge">Challenge</button>
                <button onClick={handleSidebarClick} value="Research">Research</button>
                <button onClick={handleSidebarClick} value="First Iteration">First Iteration</button>
                <button onClick={handleSidebarClick} value="Second Iteration">Second Iteration</button>
                <button onClick={handleSidebarClick} value="User Testing">User Testing</button>
                <button onClick={handleSidebarClick} value="Takeaways">Takeaways</button>
            </div>

            {/* <div className={projectStyles.sidebar}>
                <button onClick={handleSidebarClick} value="Overview">Overview</button>
            </div> */}

            <div className={projectStyles.pageContent}>
                
                <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
                    <div className={projectStyles.headline}>
                        <h2>Circular</h2>
                        <h3>A flexible way to experience consumer electronics</h3>
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

                <div className={projectStyles.sectionContainer} ref={overviewRef} style={{paddingTop: 'calc(4rem - 34px)'}}>
                    <div className={projectStyles.section}>
                        {/* <div className={projectStyles.sectionTitleLarge} style={{paddingBottom: '0'}}>Overview</div> */}
                        <div>
                            <b>Impact</b>
                            
                                    <p style={{marginBottom: '0rem', marginTop: '0rem'}}>
                                        Provided clearer value proposition for product + clearer call to action for new users.
                                    </p>
                                
                                    <p style={{marginBottom: '0rem'}}>
                                        Crafted comprehensive web platform to browse, try, and manage consumer electronics.
                                    </p>
                                
                                    <p>
                                        Facilitated user testing with peers + <Link href="https://www.usertesting.com/" target="_blank" className={homeStyles.primaryLink}>usertesting.com</Link> to improve and validate usability.
                                    </p>
                                

                        </div>
                        <div style={{marginTop: '1rem'}}>
                            <b>Context</b>
                            <p style={{marginBottom: '1rem'}}>
                                Led team of four to design interface for <Link href="https://www.ycombinator.com/companies/circular" target="_blank" className={homeStyles.primaryLink}>Circular</Link>, a Y Combinator Winter 2022 startup providing flexible ownership of consumer electronics, involving multiple rounds of testing and iteration. 
                            </p>
                        </div>
                        <div className={projectStyles.projectInfo}>
                            <div>
                                <b>Role</b>
                                <p>Lead UI/UX Designer<br/>User Researcher</p>
                            </div>
                            <div>
                                <b>Timeline</b>
                                <p>Oct 25, 2022 to <br/>Nov 9, 2022 <br/>(Two Weeks)</p>
                            </div>
                            <div style={{width: '191px'}}>
                                <b>Teammates</b>
                                <p><Link href="https://www.julianahan.me/" target="_blank" className={homeStyles.primaryLink}>Juliana Han</Link> (Co-Lead)<br/>Eric Guo<br/>Kevin Nguyen</p>
                            </div>
                            <div style={{width: '170px'}}>
                                <b>Platform</b>
                                <p>Desktop</p>
                            </div>
                            {/* <div>
                                <b>Tools Used</b>
                                <p>Figma, Balsamiq Wireframes, HTML, CSS</p>
                            </div> */}
                        </div>
                    </div>

                </div>

                <div className={projectStyles.sections}>

                    <div className={projectStyles.sectionContainerGray} ref={finalPrototypeRef}>
                        <div className={projectStyles.section}  style={{}}>
                            {/* <div className={projectStyles.sectionTitleLarge} style={{paddingBottom: '0'}}>Preview</div> */}
                            <div className={projectStyles.sectionTitleLarge} style={{alignSelf: 'center'}}>Final Solution</div>
                            {/* <h2 className={projectStyles.h2SectionHeader}>Final Prototype</h2> */}
                            {/* <p>
                                The final interactive prototype for Circular is attached below.
                            </p> */}
                            
                        </div>
                        <div className={styles.previewFrame}>
                            <div className={styles.preview}>
                                <iframe className={styles.previewIFrame} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiEBib4ZvHpBnFPusFXnLl9%2FIterative%3Fpage-id%3D152%253A1823%26node-id%3D152%253A1823%26viewport%3D1106%252C1084%252C0.76%26scaling%3Dscale-down%26starting-point-node-id%3D152%253A1824" ></iframe>
                            </div>
                        </div>
                    </div>



                    <div className={projectStyles.sectionContainer} style={{padding: '2rem 0 2rem 0'}}>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b style={{color: "#F0916C", fontWeight: '600'}}>01</b>
                                <h4 style={{fontWeight: 600}}>
                                    Communicating the Circular model
                                </h4>
                                <p>
                                    Conveying how Circular works to new users in three simple steps, while highlighting popular products to route users to the rest of the website.
                                </p>
                            </div>
                            <Image className={styles.finalDesignGif} style={{borderRadius: '4px', border: '1px solid #E4E4E4'}} alt="Gif" src="/circular/final1.gif" width={600} height={369}/>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} style={{padding: '2rem 0 2rem 0'}}>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b style={{color: "#F0916C", fontWeight: '600'}}>02</b>
                                <h4 style={{fontWeight: 600}}>
                                Centralized exploration
                                </h4>
                                <p>
                                    Providing users insight into seasonal promotions, new product launches, and curated recommendations on one centralized page.
                                </p>
                            </div>
                            <Image className={styles.finalDesignGif} style={{borderRadius: '4px', border: '1px solid #E4E4E4'}} alt="Gif" src="/circular/final2.gif" width={600} height={369}/>
                        </div>
                    </div>
                    
                    <div className={projectStyles.sectionContainer} style={{padding: '2rem 0 2rem 0'}}>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b style={{color: "#F0916C", fontWeight: '600'}}>03</b>
                                <h4 style={{fontWeight: 600}}>
                                    Easily manage products
                                </h4>
                                <p>
                                    Communicating rental status, pricing, and all actions users have at their disposable quickly and effectively.
                                </p>
                            </div>
                            <Image className={styles.finalDesignGif} style={{borderRadius: '4px', border: '1px solid #E4E4E4'}} alt="Gif" src="/circular/final3.gif" width={600} height={369}/>
                        </div>
                    </div>
                    
                    <div className={projectStyles.sectionContainerGray} style={{padding: '2rem 0 2rem 0'}}>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b style={{color: "#F0916C", fontWeight: '600'}}>04</b>
                                <h4 style={{fontWeight: 600}}>
                                    Streamlined actions and information
                                </h4>
                                <p>
                                    Letting users know key details about their products, key dates, prices, and access to help, while allowing users to extend, buy, or return products comfortably.
                                </p>
                            </div>
                            <Image className={styles.finalDesignGif} style={{borderRadius: '4px', border: '1px solid #E4E4E4'}} alt="Gif" src="/circular/final4.gif" width={600} height={369}/>
                        </div>
                    </div>
                    

                    
                    
                    <div className={projectStyles.sectionContainer} ref={challengeRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge} >Challenge</div>
                            {/* <h3>
                                The challenge
                            </h3> */}
                            <span className={projectStyles.italicFocus} >
                                How might we empower users to better access and experience consumer electronics?
                            </span>
                            {/* <h4 style={{fontWeight: 600}}>
                                I started by outlining the challenge we were tasked with.
                            </h4> */}
                            <p>
                                To start, I examined the current experience of how consumer technology was distributed. 
                                Many existing consumer electronics platforms <span style={{fontWeight: 600}}>require customers to commit to fully purchasing or financing</span> the full cost of electronics before being able to use them.
                            </p>
                            <p>
                                In response, Circular was attempting to change this through a novel approach: <span style={{fontWeight: 600}}>low-cost, convenient subscriptions</span> that let users try out or rent productss without committing. 
                            </p>
                            {/* <p>
                                With Circular, customers can pay a monthly rate to keep a product for as long as they want, before choosing to either buy it, or to return it. Returned products will then be refurbished and passed on to the next owner to extend its useful life.
                            </p> */}
                            {/* <p>
                                My approach centered on answering the question:
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

                    <div className={projectStyles.sectionContainer} style={{display: 'none'}}>
                        <div className={projectStyles.section}>
                            
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '4rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <h4 style={{fontWeight: 600}}>
                                    Tooltips
                                </h4>
                                <p>
                                    Instead of mixing unaccompanied nouns and verbs, text accompanying interactive elements always address the user and start with an action verb. This helps to make it clearer to users what different elements do.
                                </p>
                            </div>
                            <Image className={styles.finalDesignGif} style={{borderRadius: '0px'}} alt="Gif" src="/circular/tooltip.gif" width={700} height={792}/>
                        </div>
                    </div>

                    {/* <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge} style={{paddingBottom: '0'}}>Final Designs</div>
                            <h3>
                                Our final interactive prototype is available below.
                            </h3>
                            <p>

                            </p>
                        </div>
                    </div> */}

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                            {/* <h4 style={{fontWeight: 600}}>First, I outlined the value Circular should provide for users.</h4> */}
                            <h4 style={{fontWeight: 600}}>
                                I broke down our goal into <span style={{color: '#F0916C'}}>three guiding design principles</span>.
                            </h4>
                            <div className={projectStyles.olLarge} style={{paddingTop: '2rem', paddingBottom: '2rem', gap: '1.5rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>Providing flexible access</h4>
                                        <p>
                                            Allow consumers to try products before fully purchasing them, providing users more flexibility. Users can pay monthly, keep products for as long as they want, and either purchase or return their products whenever they'd like.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>An intuitive process</h4>
                                        <p>
                                            Intuitively introduce and acclimate users to the Circular subscription model, involving increased reuse of refurbished electronics and temporary ownership.
                                        </p>
                                        {/* <p style={{fontWeight: 500, color: '#F0916C'}}>
                                            How might we promote this idea of circular ownership for consumers?
                                        </p> */}
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>Assuring quality and choice</h4>
                                        <p>
                                            Users can easily browse from quality products across diverse categories on one platform, including the latest and most desirable electronics. Flexible access should not mean compromising on quality and choice.
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
                        <h4 style={{fontWeight: 600}}>This led me to consider how to design for an emerging startup.</h4>
                            <p>
                                As I was designing a startup's MVP, I felt Circular would have to appeal to users who felt dissatisfied with and excluded by the current distribution model for consumer electronics, to whom Circular's flexible distribution model would likely feel quite unfamiliar. 
                            </p>
                            <p>
                                <span style={{fontWeight: 600}}>Our design had to tread a fine line between familiarity and distinction.</span> 
                            </p>
                            <p>
                                This required employing familiarity from existing mental models from platforms users were already familiar with, while distinguishing Circular enough to reflect the unique approach that Circular had as a startup.
                            </p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge}>Brainstorming</div>
                            <p>
                                Our group sketched a variety of possible design solutions to the challenge, quickly exploring a broad range of ideas, and discussing our varied solutions.
                            </p>
                        </div>
                        <div className={styles.sketchFrameAlt}>
                            <div className={styles.sketches}>
                                <iframe className={styles.sketchDisplay} src="/circular/sketches.pdf"/>
                            </div>
                        </div>
                    </div>

                    

                    <div className={projectStyles.sectionContainer} ref={researchRef}>
                        <div className={projectStyles.section}>
                            {/* <div className={projectStyles.sectionTitleLarge} style={{paddingBottom: '0'}}>Prototyping</div> */}
                            <div className={projectStyles.sectionTitleLarge}>Research</div>
                            <h2 className={projectStyles.h2SectionHeader}>Platform Analysis</h2>
                            <p>
                                I knew that Circular would have to <span style={{fontWeight: 600}}>merge ideas from a wide variety of genres.</span>
                            </p>
                            <p>
                                 First, much of Circular's planned functionalities mirrored that of existing e-commerce marketplaces that Circular would compete with. Second, in contrast with these competitors, Circular was an emerging concept involving temporary ownership, short-term rentals, and heightened reuse.
                            </p>
                            <p>
                                I ran through a heuristic evaluation of a variety of platforms that fit these two sides of Circular. I looked at existing e-commerce competitors, such as Amazon, and newer platforms providing less conventional ways to access products, to see what I could incorporate, modify, and avoid.
                            </p>
                        </div>
                       
                        

                        

                    </div>

                    <div className={projectStyles.sectionContainerGray} style={{padding: 0}}>
                        <div className={projectStyles.spreadRow} style={{gap: '4rem', marginTop: '4rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <h3 style={{color: '#F0916C'}}>Traditional e-commerce</h3>
                                <b>Amazon</b>
                                <p>
                                    Despite selling across 33 categories, searching made finding products easy. The search bar itself took nearly the whole size of the navigation bar, making it hard to miss, while searching by category further helped to ease navigating the site.
                                </p>
                                <p>
                                    Amazon’s home page, with endless cards of varying shapes filling up most of the screen, felt rather confusing to navigate through. Although space-efficient, the layout made exploring new products feel tedious.
                                </p>
                            </div>
                            <Image style={{border: '1px solid #E4E4E4'}} alt="" src="/circular/amazon.jpg" width={551} height={321.6}/>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '4rem', marginBottom: '4rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b>
                                    Shopee Singapore
                                </b>
                                <p>
                                    Shopee’s <Link className={homeStyles.primaryLink} target="_blank" href="https://shopee.sg/">home page</Link> contains banners that feature current promotions and new products that change throughout the year. Having dynamic banners allows users to engage with content that remains relevant with seasonal events and trends.
                                </p>
                            </div>
                            <Image style={{border: '1px solid #E4E4E4'}} alt="" src="/circular/shopee.jpg" width={551} height={321.6}/>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer} style={{padding: 0}}>
                        <div className={projectStyles.spreadRow}style={{gap: '4rem', marginTop: '4rem'}}>
                            
                            <div className={projectStyles.spreadRowText}>
                                <h3 style={{color: '#F0916C'}}>Alternative platforms</h3>
                                <b>
                                    ScentBird
                                </b>
                                <p>
                                    <Link className={homeStyles.primaryLink} target="_blank" href="https://www.scentbird.com/">ScentBird</Link> allows users to choose samples of designer fragrances on a monthly basis before buying them, intriguing me as another platform providing flexible access to consumer products.
                                </p>
                                <p>
                                    ScentBird directed new users to a landing page with prompts on how their process worked, with a variety of buttons channeling users to view their product offerings and sign up.
                                </p>
                            </div>
                            <Image style={{border: '1px solid #E4E4E4'}} alt="" src="/circular/scentbird.jpg" width={551} height={428.16}/>
                            
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '4rem', marginBottom: '4rem'}}>
                            
                            <div className={projectStyles.spreadRowText}>
                                <b>
                                    AirBnB
                                </b>
                                <p>
                                    I looked to AirBnB as an established example of a company providing more flexible ways to access products.
                                </p>
                                <p>
                                    AirBnB’s search bar, easily noticed at the center of the navigation bar, allows users to use constraints to easily quickly refine searches.
                                </p>
                                <p>
                                    AirBnB’s home page, with a consistent size for images and a common grid layout, made scanning through different listings feel natural.
                                    A primarily white background with a single accent color also helps to draw users to focus onto listings and to search with the search icon.
                                </p>
                            </div>
                            <Image style={{border: '1px solid #E4E4E4'}} alt="AirBnB home page" src="/circular/airbnb.jpg" height={321.6} width={551} />
                            
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section} style={{marginTop: '0rem'}}>
                            <h4 style={{fontWeight: 600}}>This analysis led me make several design choices.</h4>
                            <div className={projectStyles.olLarge}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Search-focused navigation
                                        </b>
                                        <p>
                                           For marketplaces with a large offering of products, having a prominent searchbar constantly placed in a fixed navigation bar facilitated the discovery and exploration of products.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <b>
                                            Highlighting categories
                                        </b>
                                        <p>
                                            Many marketplaces prominently featured a list of different product categories on their home page. I felt this was applicable to Circular in two ways: quickly communicating to users the range of products Circular could offer, and allowing users to quickly filter and browse categories they are interested in.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <div>
                                        <b>
                                            Three simple steps
                                        </b>
                                        <p>
                                            I examined existing, emerging platforms offering unconventional ways to try or access products. From this, I learned that websites that clearly communicated a simple process of ordering felt much easier to understand and navigate. 
                                        </p>
                                        <p>
                                            Thus, I streamlined Circular's user process into three steps: Choosing a product, trying it, and buying/returning it - a pattern used in the landing page and across the platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            {/* <div className={projectStyles.sectionTitleLarge} style={{paddingBottom: '0'}}>Process</div> */}
                            <h2 className={projectStyles.h2SectionHeader}>Framing User Flow</h2>
                            <p>
                                I developed a user flow that would guide our initial prototype. With just two weeks for this solution, I decided designing based on user tasks would be time-efficient and effective. 
                            </p>
                            <p>
                                I made sure to consider how a variety of different possible users, each with a unique set of tasks they set out to complete, might be able to access and navigate a single website. 
                            </p>
                            <div className={styles.splitCol}>
                                <div className={styles.col}>
                                    <div className={styles.ol}>
                                        <h3 style={{fontWeight: 600, alignSelf: 'center', textAlign: 'center'}}>New Users</h3>
                                        <div className={styles.olItem}>
                                            <span>01</span>
                                            <p>
                                            
                                                How might they get acquainted with Circular's flexible subscription model?
                                            
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
                                        <h3 style={{fontWeight: 600, alignSelf: 'center', textAlign: 'center'}}>Returning Users</h3>
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
                                We started to map out on a high-level how our first prototype would manage these tasks. To accomodate the abundance of filters, information, and different functions I anticipated our design would need, we decided on designing for a desktop web interface. 
                            </p>
                        </div>
                        <div className={projectStyles.spreadRow}style={{gap: '2rem'}}>
                            <div className={projectStyles.spreadRowText}>
                                <b>
                                    Sketching User Flows
                                </b>
                                <p>
                                    On a classroom whiteboard, we created a very rough prototype with dry-erase markers, running through different user tasks with them and experimenting with changes as we went.
                                </p>
                                <p>
                                    This process of rapid prototyping was inspired by <Link href="/circular/buxton-sketching.pdf" target="_blank" className={homeStyles.primaryLink}>Buxton's work</Link> on using interactive paper interfaces to quickly iterate interfaces.
                                </p>
                                {/* <p>
                                    Through iteration and experimenting with changes, we were able to identify more intuitive and efficient ways of navigating our website, which led us to a flow we were satisfied with.
                                </p> */}
                            </div>
                            <div className={projectStyles.pictureCaptionWrapper}>
                                <Image alt="" src="/circular/whiteboard.JPG" width={500} height={336} style={{borderRadius: '12px', border: '1px solid #E4E4E4'}}/>
                                <span className={projectStyles.caption}>
                                    One iteration of our user flow sketching process
                                </span>
                            </div>
                        </div>
                        <div className={projectStyles.section} style={{marginTop: '2rem'}}>
                            <h4 style={{fontWeight: 600}}>Rapid prototyping led to three choices in the Circular's flow.</h4>
                            <div className={projectStyles.olLarge}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Landing page
                                        </b>
                                        <p>
                                            I decided on having users first go through a landing page to acquaint users with Circular's unique subscription model. This was inspired by how ScentBird and other emerging platforms similarly used a landing page.
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
                                            A logged out state and logged in state exist for certain pages, to prevent new users from being overwhelmed irrelevant information to their conversion, and to streamline information for returning users.
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
                                            A centralized Explore page lets users explore and search for new products, and, if logged in, allow easier managing of accounts. Centralization also allowed users to return to this page to reset after errors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className={projectStyles.sectionContainer} ref={firstIterationRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge}>First Iteration</div>
                            <p>I created a set of low-fidelity wireframes on Figma for the site-wide navigation bars and explore page, while wireframing the landing page closely with Juliana.</p>
                            <p>
                                During the wireframing process, I focused on <span style={{fontWeight: 300}}>defining the overall structure and organization</span> of my design, prioritizing during this process the development of a <span style={{fontWeight: 300}}>clear hierarchy through the size, shading, and position</span> of different elements.
                            </p>
                            
                            {/* <h4 style={{fontWeight: 600, marginTop: '1rem'}}>First, I defined a series of principles that guided our wireframing approach.</h4>
                            <div className={projectStyles.olLarge} style={{marginBottom: '2rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Softer shapes and forms
                                        </b>
                                        <p>
                                           
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <b>
                                            Spacing
                                        </b>
                                        <p>
                                            
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
                            </div> */}
                            
                        </div>
                    
                        <div className={styles.frame}>
                            <div className={styles.wireframes}>
                                <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                    <TabList>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Explore (Logged Out)
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Explore (Logged In)
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Landing
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Other Wireframes
                                        </Tab>
                                    </TabList>
                                    <TabPanels style={{transition: 'all 0.3s ease'}}>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe className={styles.wireframe} src="/circular/loggedOutLofi.jpg"/>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe className={styles.wireframe} src="/circular/loggedInLofi.jpg"/>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe className={styles.wireframe} src="/circular/landing.jpg"/>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <iframe className={styles.wireframe} src="/circular/allWireframes.jpg"/>
                                            </Fade>
                                        </TabPanel>
                            
                                    </TabPanels>
                                </Tabs>
                            </div>
                        </div>
                    
                    </div>

                    

                    {/* <div className={projectStyles.sectionContainerDark}>
                    <div className={projectStyles.section}>
                            <h4 style={{alignSelf: 'center', textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
                               My design process can be examined through the aspects of <br/> <span style={{fontWeight: 600, color: '#F0916C'}}>visual design</span>, <span style={{fontWeight: 600, color: '#F0916C'}}>structure</span>, and <span style={{fontWeight: 600, color: '#F0916C'}}>consistent language</span>.
                            </h4>
                        </div>
                    </div> */}

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <h2 className={projectStyles.h2SectionHeader}>Crafting Visual Identity</h2>
                            {/* <h4>
                                After wireframing, I defined a visual identity for Circular that fit our design goals.
                            </h4> */}
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', marginTop: '2rem'}}>
                                <Image src='/circular/styleGuide.jpg' quality={100} width={840} height={486} style={{borderRadius: '12px'}} alt="Visual Style Guide"/>
                                {/* <p style={{fontSize: '1rem', color:'#737373'}}>The visual design style guide that defined my visual redesign.</p> */}
                            </div>
                            <h4 style={{fontWeight: 600}}>
                                Why these choices?
                            </h4>
                            <p>
                                As an emerging startup competing with a plethora of established e-commerce platforms, I found it important for Circular to host a distinctive brand identity. 
                            </p>
                            <p> Based on my research, I designed a visual identity that centered around creating an <span style={{fontWeight: 600}}>approachable, inviting,</span> and <span style={{fontWeight: 600}}>energetic</span> experience for users; contrasting with the brand identities seen in Circular's main competition.</p>
                            
                            {/* <p>This goal influenced my visual identity in two ways:</p> */}

                            <div className={projectStyles.olLarge} style={{paddingTop: '1rem', paddingBottom: '2rem', gap: '1.5rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>Distinctive color choice</h4>
                                        <p>
                                            I selected <span style={{color: '#EA2E5D', fontWeight: 800, fontSize: '1rem'}}>#EA2E5D</span>, a warm, pinkish red, as the primary accent color for my design. Using a vivid, saturated color helps to create a distinctive identity for Circular while retaining good contrast against white backgrounds.
                                        </p>
                                        <p>
                                            Using this accent color sparingly upon white backgrounds further emphasizes important UI elements.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <h4 style={{fontWeight: 600}}>Friendliness through roundness</h4>
                                        <p>
                                            I used rounded corners and circular elements throughout my design. Compared to the angular design language that many e-commerce websites I viewed at used, rounded elements helped to further distinguish Circular while creating a more friendly, inviting atmosphere throughout the site. 
                                        </p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            <h4 style={{fontWeight: 600}}>This led to Circular's initial interactive prototype.</h4>
                            {/* <p>I focused on augmenting the structure and layout from the wireframes to create an interactive Figma prototype that looked and felt like a real website.</p> */}
                        </div>
                        <div className={styles.frame}>
                            <div className={styles.initialHifis}>
                                <iframe className={styles.initialHifi} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiEBib4ZvHpBnFPusFXnLl9%2FIterative%3Fpage-id%3D96%253A2107%26node-id%3D96%253A2479%26viewport%3D639%252C287%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D124%253A3841" ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray} ref={secondIterationRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge}>Second Iteration</div>
                            <h4 style={{fontWeight: 600}}>Hosting group testing with our prototype led to more insights.</h4>
                            <p>
                                Our initial prototype underwent user testing through a group critique session. 36 peer students, alongside <Link href="http://giffordcheung.weebly.com/" target="_blank" className={homeStyles.primaryLink}>Gifford Cheung</Link>, a senior UX researcher at Nintendo, ran through a variety of tasks on our interactive prototype and shared their thoughts with us.
                            </p>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '1.5rem 0'}}>
                                <Image width={600} height={346} alt="Screenshot of our Zoom critique" src="/circular/zoomCritique.png"/>
                            </div>
                            <h2 style={{margin: '2rem 0 1rem 0', alignSelf: 'center'}}>Group Testing Results</h2>
                            <p style={{alignSelf: 'center'}}>
                                The UX problems their feedback highlighted mapped to several solutions listed below.
                            </p>
                        </div> 
                        
                        <div className={styles.wireframes} style={{marginTop: '2rem'}}>
                            <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                <TabList>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        Landing
                                    </Tab>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        Explore
                                    </Tab>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        Categories
                                    </Tab>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        Product
                                    </Tab>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        My Rentals
                                    </Tab>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        Rental
                                    </Tab>
                                    <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                    _hover={{ color: '#F0916C'}}
                                    _active={{ color: '#F0916C' }}
                                    _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                        Navigation
                                    </Tab>
                                </TabList>
                                <TabPanels style={{transition: 'all 0.3s ease'}}>
                                    
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                    <div className={styles.critiqueTitles}>
                                                        <h3>Problems</h3>
                                                        <h3>Solutions</h3>
                                                    </div>
                                                    <div className={styles.critiqueRow}>
                                                        <div className={styles.critiqueLeft}>
                                                            <span>1</span>
                                                            <p>
                                                                This page includes important information, but there is no way of going back to this page once users click the “CHOOSE NOW” button because the logo on the navbar currently links to explore page
                                                            </p>
                                                        </div>
                                                        <div className={styles.critiqueArrow}>
                                                            <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                        </div>
                                                        <div className={styles.critiqueRight}>
                                                            <p>
                                                                Reorganize navbar: link the logo to the landing page, add an “Explore” tab next to the “Rentals” tab
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.critiqueRow}>
                                                        <div className={styles.critiqueLeft}>
                                                            <span>2</span>
                                                            <p>
                                                                User feedback indicated that information on how renting works is very important and should have a higher priority than the product display section
                                                            </p>
                                                        </div>
                                                        <div className={styles.critiqueArrow}>
                                                            <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                        </div>
                                                        <div className={styles.critiqueRight}>
                                                            <p>
                                                                Put the “How It Works” section above the “Popular products” section
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.critiqueRow}>
                                                        <div className={styles.critiqueLeft}>
                                                            <span>3</span>
                                                            <p>
                                                                The wording of the “Choose Now” button is confusing - peers expect it to lead to a page where they can browse and choose from available products, but it just leads to the exploration page instead
                                                            </p>
                                                        </div>
                                                        <div className={styles.critiqueArrow}>
                                                            <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                        </div>
                                                        <div className={styles.critiqueRight}>
                                                            <p>
                                                                Change the button from “Choose Now” to “Explore Now”
                                                            </p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                <div className={styles.critiqueTitles}>
                                                    <h3>Problems</h3>
                                                    <h3>Solutions</h3>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>1</span>
                                                        <p>
                                                            The layout is very different when logged in and when logged out, confusing returning users before they log in, making users confused when transitioning between states
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Add a section telling users to log in to see current rentals with a “Log In” action button, indicating how returning users can view rentals if they log in
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                    <div className={styles.critiqueTitles}>
                                                        <h3>Problems</h3>
                                                        <h3>Solutions</h3>
                                                    </div>
                                                    <div className={styles.critiqueRow}>
                                                        <div className={styles.critiqueLeft}>
                                                            <span>1</span>
                                                            <p>
                                                                The category icons are unnecessarily big such that the page conveys little information, yet requires scrolling
                                                            </p>
                                                        </div>
                                                        <div className={styles.critiqueArrow}>
                                                            <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                        </div>
                                                        <div className={styles.critiqueRight}>
                                                            <p>
                                                                Shrink the icons and fit more icons in one row to allow more efficient use of space
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.critiqueRow}>
                                                        <div className={styles.critiqueLeft}>
                                                            <span>2</span>
                                                            <p>
                                                                Lacks hierarchy - the three featured categories are not emphasized enough
                                                            </p>
                                                        </div>
                                                        <div className={styles.critiqueArrow}>
                                                            <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                        </div>
                                                        <div className={styles.critiqueRight}>
                                                            <p>
                                                                Invert the color of the three curated categories to emphasize them
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.critiqueRow}>
                                                        <div className={styles.critiqueLeft}>
                                                            <span>3</span>
                                                            <p>
                                                                Users complained that the categories felt arbitrarily sorted
                                                            </p>
                                                        </div>
                                                        <div className={styles.critiqueArrow}>
                                                            <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                        </div>
                                                        <div className={styles.critiqueRight}>
                                                            <p>
                                                                Sort the categories by popularity to prioriotize more important ones first
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                <div className={styles.critiqueTitles}>
                                                    <h3>Problems</h3>
                                                    <h3>Solutions</h3>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>1</span>
                                                        <p>
                                                            Some users felt that it was difficult to conceptualize the process of trying products from Circular while browsing different products. From their confusion when using this page, more explanation is needed
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Add a section explaining the rental process; include a link next to where users select the rental period that scrolls to this section
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                <div className={styles.critiqueTitles}>
                                                    <h3>Problems</h3>
                                                    <h3>Solutions</h3>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>1</span>
                                                        <p>
                                                            Gifford stated that users should be able to know immediately what they can do and what options they have about the current rentals, especially the option to end the rental. Some users felt confused and restricted as to what they could do to manage their rentals.
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Change layout from two products per row to one product per row to include more information, and ddd three action buttons for each rental
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                <div className={styles.critiqueTitles}>
                                                    <h3>Problems</h3>
                                                    <h3>Solutions</h3>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>1</span>
                                                        <p>
                                                            The layout looks too similar to the shopping product page. This led to some getting confused about whether it is a product that they are about to rent or a product that they are currently renting
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Redesign the layout to differentiate from the shopping product page (smaller photo, less product information, more information on next steps)
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>2</span>
                                                        <p>
                                                            More information that users expressed they wanted to see, such as the cumulative amount paid, the last payment date, etc was missing in the prototype.
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Include more information through text and graphics, including shipping status, payment methods, address, upcoming payments, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>3</span>
                                                        <p>
                                                            Some users felt the locations of the existing extend, buy, and end buttons were awkwardly placed and far from relevant, corresponding information.
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Use three cards corresponding to three actions, each with information and an action button
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel style={{padding: 0}}>
                                        <Fade
                                        variants={variants}
                                        animate="in"
                                        initial="out"
                                        exit="out">
                                            <div className={styles.pageCritique}>
                                                <div className={styles.critiqueTitles}>
                                                    <h3>Problems</h3>
                                                    <h3>Solutions</h3>
                                                </div>
                                                <div className={styles.critiqueRow}>
                                                    <div className={styles.critiqueLeft}>
                                                        <span>1</span>
                                                        <p>
                                                            Some peers had trouble navigating to the desired page using breadcrumbs. A few wished that there was a back button that goes back to the previous page that they were on
                                                        </p>
                                                    </div>
                                                    <div className={styles.critiqueArrow}>
                                                        <Image src="/circular/critiqueArrow.png" width={24} height={12} quality={100} alt="Arrow"/>
                                                    </div>
                                                    <div className={styles.critiqueRight}>
                                                        <p>
                                                            Gray out the breadcrumb that corresponds to the current page that the user is on. After discussion, we decided that a back button is not necessary as users can generally use a browser's back button, which was unavailable to use for a Figma prototype.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                        
                                </TabPanels>
                            </Tabs>
                        </div>
                        
                        <h2 style={{margin: '4rem 0 1rem 0'}}>Second Iteration Prototype</h2>
                        <p>These changes were then used to revise our solution to the version below.</p>
                        <div className={styles.previewFrame}>
                            <div className={styles.preview}>
                                <iframe className={styles.previewIFrame} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiEBib4ZvHpBnFPusFXnLl9%2FIterative%3Fpage-id%3D152%253A1823%26node-id%3D152%253A1823%26viewport%3D1106%252C1084%252C0.76%26scaling%3Dscale-down%26starting-point-node-id%3D152%253A1824" ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainer} ref={userTestingRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge}>User Testing</div>
                            <h4 style={{fontWeight: 600}}>
                                Our project underwent further user testing to gather insights.
                            </h4>
                            <p>
                                With our updates implemented, Juliana and I developed a series of tasks and assesments to be presented to three users on <Link href="https://www.usertesting.com/" target="_blank" className={homeStyles.primaryLink}>usertesting.com</Link> to interact with the interactive Figma prototype updated based on feedback from our first critique session.
                            </p>
                            
                            <p>
                                Here, we assessed how users on our prototype started new rentals and managed existing rentals. 
                            </p>
                            <b style={{marginTop: '1rem'}}>
                                We designed a series of 4 tasks for each user to complete:
                            </b>
                            <div className={projectStyles.ol} style={{padding: 0, paddingBottom: '1rem'}}>
                                <div className={projectStyles.olItem}>
                                    <span>01</span>
                                    <p>
                                        Check the available categories of products
                                    </p>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>02</span>
                                    <p>
                                        Select a category, browse the products, and select a specific product
                                    </p>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>03</span>
                                    <p>
                                        Learn about how renting works
                                    </p>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>04</span>
                                    <p>
                                        From the eyes of a returning user, buy a product that they are currently renting
                                    </p>
                                </div>
                            </div>
                            <b>
                                    After completing each task, we then asked each user two questions:
                            </b>
                            <div className={projectStyles.ol} style={{padding: 0, paddingBottom: '1rem'}}>
                                <div className={projectStyles.olItem}>
                                    <span>01</span>
                                    <p>
                                        To describe whether they felt they successfully completed the subtask
                                    </p>
                                </div>
                                <div className={projectStyles.olItem}>
                                    <span>02</span>
                                    <p>
                                        To rate the difficulty of the subtask from 1 to 5 (1 = Very Difficult, 5 = Very Easy)
                                    </p>
                                </div>
                            </div>

                            

                            
                        </div>
                            
                        

                       
                        
                    </div>

                    <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                        <h4 style={{fontWeight: 600, marginTop: '0rem'}}>
                                With just three users, we focused on collecting qualitative data.
                            </h4>
                            <p>
                                On our user testing platform, Juliana and I decided to ask participants to narrate their thought process out loud while completing tasks. This let us better understand the 'Why?' behind the decisions users made, instead of relying on assumptions.
                            </p>
                        </div>
                    </div>

                    <div className={projectStyles.sectionContainerGray}>
                        <div className={projectStyles.section}>
                            <h4 style={{fontWeight: 600}}>
                                Analyzing these results led us to further insights on how to improve.
                            </h4>
                            <p>
                                Whenever a user we surveyed had difficulty with successfully completing a task, we came up with specific ways to modify our prototype to better achieve our goals.
                            </p>
                            <p style={{paddingBottom: '2rem'}}>
                                Throughout the breakdown below, we marked where certain user experiences led us to specific solutions that we proposed further below.
                            </p>
                            {/* <h3 style={{marginTop: '4rem', textAlign: 'center'}}>Task Breakdown</h3> */}
                        </div>

                        <div className={styles.frameAlt}>
                            <div className={styles.tasks}>
                                <Tabs isLazy={true} variant='unstyled' size='md' colorScheme='orange' defaultIndex={0}>
                                    <TabList>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Task 1
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Task 2
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Task 3
                                        </Tab>
                                        <Tab style={{ fontWeight: 500, marginBottom: '2px', padding: '0.8rem 1.2rem'}}
                                        _hover={{ color: '#F0916C'}}
                                        _active={{ color: '#F0916C' }}
                                        _selected={{ color: '#F0916C', boxShadow: '0 2px 0 rgba(240, 145, 108, 1)', marginBottom:'0px', transition: 'all 0.3s ease'}} >
                                            Task 4
                                        </Tab>
                                    </TabList>
                                    <TabPanels style={{transition: 'all 0.3s ease'}}>
                                        
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <div className={styles.task}>
                                                    <div>
                                                        <b>Prompt</b>
                                                        <p>
                                                            Imagine you want to find out what types of products the website offers. Now use this website to find this information. Stop when you feel like you have seen a complete list of what products are available.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <b>
                                                            Expected Taskflow
                                                        </b>
                                                        <p>
                                                            Click the “Explore now” button on the landing page to go to the explore page; see the selected categories and click the “View all categories” below.
                                                        </p>
                                                    </div>
                                                    <div className={styles.users}>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 1 - Completed</b>
                                                            <p>
                                                                First action was clicking the search bar, then used breadcrumbs to go to the correct categories page
                                                            </p>
                                                            <p>
                                                                (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 2 - Completed</b>
                                                            <p>
                                                                Navigated to the correct categories page but did not recognize it as the correct page, then went back to the explore page
                                                            </p>
                                                            <p>
                                                                (Reported they were sure that they completed the task successfully, and rated it 5/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 3 - <span style={{color: 'red'}}>Incomplete</span></b>
                                                            <p>
                                                                Thought the categories on the explore page were a complete list, did not see the “View all categories” link 
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 1</span>
                                                            </p>
                                                            <p>
                                                                (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <div className={styles.task}>
                                                    <div>
                                                        <b>Prompt</b>
                                                        <p>
                                                            Imagine that you are looking to try out a new tablet. Try to browse the tablet section and then rent a tablet using the website. Go as far as you can with the prototype before moving on to the next task.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <b>
                                                            Expected Taskflow
                                                        </b>
                                                        <p>
                                                            Click the tablet icon on the categories page to go to the browse page, then click the image or the title of a product to go to the product page.
                                                        </p>
                                                    </div>
                                                    <div className={styles.users}>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 1 - <span style={{color: 'red'}}>Incomplete</span></b>
                                                            <p>
                                                                Clicked the rental button on the browse page but did not check product specifics
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 2</span>
                                                            </p>
                                                            <p>
                                                                (Reported they were sure that they completed the task successfully, and rated it 5/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 2 - <span style={{color: 'red'}}>Incomplete</span></b>
                                                            <p>
                                                            Clicked the rental button on the browse page but did not check product specifics
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 2</span>
                                                            </p>
                                                            <p>
                                                            (Reported they were sure that they completed the task successfully, and rated it 5/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 3 - Completed</b>
                                                            <p>
                                                                Had some trouble finding the tablet category but completed successfully, only realized that this was a charged rental service instead of free trials until seeing the “rent” button
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 3</span>
                                                            </p>
                                                            <p>
                                                                (Reported they were NOT sure that they completed the task successfully, and rated it 3/5.)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <div className={styles.task}>
                                                    <div>
                                                        <b>Prompt</b>
                                                        <p>
                                                        Imagine you want to rent this tablet but you are confused about how the renting process works. Try to find more information about what you will need to do after trying out a product. Stop when you think you have found the corresponding section.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <b>
                                                            Expected Taskflow
                                                        </b>
                                                        <p>
                                                        At the product page, click “How does renting work?” or scroll down to the section.
                                                        </p>
                                                    </div>
                                                    <div className={styles.users}>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 1 - Completed</b>
                                                            <p>
                                                            Looked for information on the browse page at first before going to the correct product page
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 3</span>
                                                            </p>
                                                            <p>
                                                            (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 2 - <span style={{color: 'red'}}>Incomplete</span></b>
                                                            <p>
                                                            Looked for a separate “about” or “terms & conditions” page and ended with the “How it works” section on the landing page
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 3</span>
                                                            </p>
                                                            <p>
                                                            (Reported they were NOT sure that they completed the task successfully, and rated it 5/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 3 - Completed</b>
                                                            <p>
                                                            Already on the product page and found the correct section, but asked for a more detailed explanation
                                                            </p>
                                                            <p>
                                                            (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </TabPanel>
                                        <TabPanel style={{padding: 0}}>
                                            <Fade
                                            variants={variants}
                                            animate="in"
                                            initial="out"
                                            exit="out">
                                                <div className={styles.task}>
                                                    <div>
                                                        <b>Prompt</b>
                                                        <p>
                                                        Imagine you rented a pair of Sennheiser headphones to try out from this website a while ago. Now use this website to see how much it would cost to buy the headphones now.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <b>
                                                            Expected Taskflow
                                                        </b>
                                                        <p>
                                                        Click the “Rentals” tab on the navbar to go to the manage rentals page then the “view rental” button, or “Your rentals” section on the explore page, to go to the rental details pages, find the corresponding section.
                                                        </p>
                                                    </div>
                                                    <div className={styles.users}>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 1 - Completed</b>
                                                            <p>
                                                            Had some confusion understanding the task at first, but completed successfully

                                                            </p>
                                                            <p>
                                                                
                                                                (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 2 - Completed</b>
                                                            <p>
                                                            First clicked the “Your rentals” under the account drop-down menu, which was not implemented
                                                            </p>
                                                            <p>
                                                            (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                        <div className={styles.user} style={{background: 'white'}}>
                                                            <b style={{textAlign: 'center'}}>User 3 - Completed</b>
                                                            <p>
                                                            Asked for a more detailed explanation of the price
                                                            </p>
                                                            <p>
                                                                Led to <span style={{color: '#F0916C', fontWeight: 600}}>Solution 4</span>
                                                            </p>
                                                            <p>
                                                            (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </div>
                        </div>
                        <div className={projectStyles.section} style={{paddingTop: '4rem'}}>
                            <h4 style={{fontWeight: 600}}>These findings led us to propose four more changes to our second iteration.</h4>
                            <div className={projectStyles.olLarge} style={{paddingTop: '2rem', paddingBottom: '2rem', gap: '1.5rem'}}>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>1</span>
                                    <div>
                                        <b>
                                            Modify "View all categories" button on Explore Page.
                                        </b>
                                        <p>
                                            Change the wording instead into “view more categories”. It might also be possible to allow horizontal scrolling to let all categories be displayed on Explore page.
                                        </p>
                                        <p>
                                            
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>2</span>
                                    <div>
                                        <b>
                                            Update the "Rent" button on Search page
                                        </b>
                                        <p>
                                            Add additional functionality to create an overlay when clicking this "Rent" button that provides key product information for users seeking new rentals.
                                        </p>
                                        <p>
                                            
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>3</span>
                                    <div>
                                        <b>Add more intuitive information on how renting works throughout the website
                                        </b>
                                        <p>
                                            Change the wording of conversion buttons on the landing page from "Try" to "Rent" to avoid misconceptions of free trials.
                                        </p>
                                        <p>
                                            Include tooltips on on the browse page to help explain the renting process.
                                        </p>
                                    </div>
                                </div>
                                <div className={projectStyles.olItemLarge}>
                                    <span style={{fontSize: '1.5rem'}}>4</span>
                                    <div>
                                        <b>
                                            Visualize product information
                                        </b>
                                        <p>
                                            Provide graphics on buy price breakdown and how the buy price changes based on months rented. For instance, communicating what the price will be if users buy next month and how this month’s rental rate is calculated.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                    <div className={projectStyles.sectionContainer}>
                        <div className={projectStyles.section}>
                            
                        </div>
                    </div> */}


                    <div className={projectStyles.sectionContainer} ref={takeawaysRef}>
                        <div className={projectStyles.section}>
                            <div className={projectStyles.sectionTitleLarge}>Takeaways</div>
                            <h4 style={{fontWeight: 600}}>
                                Circular was critical to my growth as a designer and researcher.
                            </h4>
                            <p>
                                This project gave me the experience to <b>better utilize Figma's powerful prototyping features.</b> Through making components used across multiple pages and by several other team members, I became familiar with using Figma components and variants to create dynamic, interactive, and reusable components.
                            </p>
                            <p>
                                Circular also taught me how to <b>better collaborate with teammates and manage conflicting ideas.</b> While designing, I would often have disagreements with different team members on how to best approach a task. Over time, I learned to take these situations as learning opportunities to broaden my perspective: to understand the approach my teammate took to come closer towards an ideal solution. 
                            </p>
                            <p>
                                This also taught me to <b>always reinforce my claims with data</b> - it is not enough to say that a design just 'feels right'; decisions have to be backed up by insights, research, and data to be effective and be effectively communicated to others.
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
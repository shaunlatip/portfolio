import NavigationBar from '../components/NavigationBar'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import projectStyles from '../styles/Project.module.css'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/ExploreRI.module.css'
import bannerImage from '../public/exploreri/banner.jpg';

import visualDesignStyleGuideImage from 'public/visualdesignstyleguide.jpg'

export default function ExploreRI() {
    return (
        <div className="page">
            <Head>
                <title>Explore Rhode Island | Shaun Latip</title>
            </Head>
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
                <div className={homeStyles.section}>

                </div>

                <div id={projectStyles.subHeadline} className={homeStyles.section}>
                    <div className={projectStyles.subHeadline}>
                        <b>Visit:  </b>
                        <a href="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList" target="_blank" rel="noreferrer">Original Site</a> • <a href="https://vegananteater125.github.io/responsive-redesign/" target="_blank" rel="noreferrer">Redesigned Site</a>
                    </div>

                    <div className={projectStyles.subHeadline}>
                        <b>Jump to:  </b>
                        <a href="#overview">Overview</a> • <a href="#finding-problems">Finding Problems</a> • <a href="#accessibility">Accessibility</a> • <a href="#low-fidelity">Low-Fidelity</a> • <a href="#visual-design-style-guide">Visual Design Style Guide</a> • <a href="#high-fidelity">High-Fidelity</a> • <a href="#development">Development</a> • <a href="#conclusion">Conclusion</a> 
                    </div>
                </div>

                <div id="overview" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Overview</h2>
                    <p>
                        I decided to redesign <a href="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList" target="_blank" rel="noreferrer">this page from Explore Rhode Island</a>,
                        which is the first Google search result for a popular park close to where I live.
                        <br/><br/>
                        This was my first time redesigning and developing a public webpage.
                    </p>
                    <br/>
                    <iframe className={projectStyles.desktopFrame} src="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList"/>
                    {/* <img src="./exploreri/original-screenshot.png"/> */}
                    <p>
                        <br/>The site provides critical information on directions, ADA accessibility, trail restrictions, and historical context all difficult to find elsewhere; all useful and unique information hindered by poor design.
                        <br/><br/>
                        <b>I then redesigned and developed this page, with the following result:</b>
                        <br/>
                    </p>
                    <iframe className={projectStyles.desktopFrame} src="https://vegananteater125.github.io/responsive-redesign/"/>
                </div>

                <div id="finding-problems" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Finding Problems</h2>
                    <p>
                        To assess the usability of the webpage, I completed a Cognitive Walkthrough of the webpage to experience the webpage through the eyes of the user. 
                        <br/><br/>To do this, I came up with a set of scenarios, keeping in mind a broad range of users with differing contexts and needs.
                        <br/>
                        My scenarios included:
                    </p>

                    <div className={projectStyles.centeredContent}>
                        <ul>
                            <li>
                            Check if the park has wheelchair-friendly trails and ADA accessible parking
                            </li>
                            <li>
                            Examine the distance and difficulty of the park’s trail.
                            </li>
                            <li>
                            Figure out how to best get to the park across several modes of transport
                            </li>
                        </ul>
                    </div>

                    <p>
                        For each step of each scenario, I asked myself the following questions:
                    </p>
                
                    <div className={projectStyles.centeredContent}>
                    <p>
                        Will the correct action be sufficiently evident to the user?
                        <br/>Will the user notice that the correct action is available?
                        <br/>Will the user associate and interpret the response from the action correctly?
                    </p>
                    </div>

                    <h3>Key Issues</h3>
                    <p>
                        <br/>
                        After going through these, I also went through Nielson’s 10 Heuristics to fuel my insights. I also accessed the website across phones, tablets, and desktops across varying window sizes and orientations.
                        <br/><br/>
                        I summarized my findings into 6 key points:
                    </p>

                    <div className={projectStyles.centeredContent}>
                        <p>
                            <b>Scattered hierarchy and organization</b> of information with related elements, such as transportation methods and trail maps, separated across the webpage. Running through different tasks made me scan back and forth and search in a very scattered, unorganized path.
                            <br/><br/>
                            <b>Inconsistent affordances from interactive UI elements</b>regarding their interactability and linked functions, while also lacking feedback upon toggling, hovering, and clicking, leading to possibility for errors in conflict with user’s conceptual model.
                            <br/><br/>
                            <b>Undersized text, hyperlinks, and images </b>create difficulty in legibility and interaction, the latter especially for users on touchscreens, using gloves, or with precision impairments.
                            <br/><br/>
                            <b>Lack of responsiveness</b> across differing devices. For example, on mobile, several UI elements break with overlapping elements and spacings hiding UI elements and decreasing legibility.
                            <br/><br/>
                            <b>Significant visual clutter</b> from overuse of differing colors and font-family/weight/size, alongside lack of contrast across UI and lack of white space creating unneeded density and lack of emphasis.
                            <br/><br/>
                            <b>Inconsistent language and unaccompanied icons</b> lead to confusion of park information. 
                        </p>
                    </div>
                </div>

                <div id="accessibility" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Accessibility</h2>
                    <p>
                        I also examined the accessibility of this webpage using WebAIM WAVE to assess compatibility with screen readers, keyboard navigation, and on contrast with the following results:
                    </p>
                    <div className={projectStyles.centeredContent}>
                        <ul>
                            <li>
                                Lack of alternative text on a many key buttons and on all images of the park, and redundant alternative text on several images or alternative text tags with no content.
                            </li>
                            <li>
                                Missing language descriptor.
                            </li>
                            <li>
                                Very low contrast and size warnings on a significant amount of text on buttons and paragraphs.                    
                            </li>
                            <li>
                                No page regions and no use of ARIA outside of linked Google maps widget.                    
                            </li>
                            <li>
                                Skipped heading levels and smaller p tags styled to match larger headings.                    
                            </li>
                            <li>
                                Most buttons lacking keyboard event handlers.                    
                            </li>
                        </ul>
                    </div>
                    <p>
                        Judging from these findings, I would expect keyboard and/or screen reader navigation of this webpage to be extremely difficult, if not outright impossible. The only area I might disagree with is regarding low contrast, as some text contrast is still quite legible even on grayscale.
                    </p>
                </div>
                
                <div id="low-fidelity" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Low Fidelity Wireframes</h2>
                    <p>
                        I then created three Low-Fidelity wireframes for Desktop, Tablet, and Mobile sizes addressing the key issues I found:
                    </p>
                    <iframe className={projectStyles.fullPdfFrame} src="./exploreri/lofi-desktop.pdf"/>
                    <iframe className={projectStyles.fullPdfFrame} src="./exploreri/lofi-tablet.pdf"/>
                    <iframe className={projectStyles.fullPdfFrame} src="./exploreri/lofi-mobile.pdf"/>

                </div>

                <div id="visual-design-style-guide" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Visual Design Style Guide</h2>
                    <p>
                        I then created the following visual design style guide. I focused on maintaining the emphasis on nature-inspired blues and greens that the original site had, while mixing in cleaner UI elements, sans-serif typography, and more interaction states.
                    </p>
                    <img className={styles.styleGuideImage} alt="Graphic of Visual Design Style Guide" src="exploreri/visualdesignstyleguide.jpg"/>
                </div>

                <div id="high-fidelity" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>High Fidelity Wireframes</h2>
                    <p>
                        I designed three separate high fidelity prototypes for Desktop (1440px wide), Tablet (768px wide), and Mobile (375px wide) with annotation for development.
                    </p>
                    <iframe className={projectStyles.fullPdfFrame} src="./exploreri/hifi-desktop.pdf"/>
                    <iframe className={projectStyles.fullPdfFrame} src="./exploreri/hifi-tablet.pdf"/>
                    <iframe className={projectStyles.fullPdfFrame} src="./exploreri/hifi-mobile.pdf"/>
                </div>

                <div id="development" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Development</h2>
                    <p>
                        I developed a prototype of my redesign on the link below: <br/>
                        <a href="https://vegananteater125.github.io/responsive-redesign/" target="_blank" rel="noreferrer">vegananteater125.github.io/responsive-redesign/</a>
                        <br/>
                        <br/>
                        <b>Images used:</b>
                        <br/>
                        http://www.friendsofindiapointpark.org/wp-content/uploads/2021/04/ramps-website-resolution-1200x550.jpg
                        <br/>
                        https://www.alltrails.com/parks/us/rhode-island/india-point-park
                        <br/>
                        https://www.labnol.org/internet/embed-responsive-google-maps/28333/
                    </p>
                </div>

                <div id="conclusion" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Conclusion</h2>
                    <p>
                        This project provided me several takeaways:<br/><br/>
                        My research process, involving running through scenarious and heuristics, taught me that designs have to be able to <b>accomodate diverse ranges of behavior</b>; accounting for niche use cases while prioritizing frequent, critical cases. 
                        <br/>Designing with both low fidelity and high fidelity prototypes also helped me to improve my process, by <b>distributing layout, hierarchy, and color design across structured stages</b>. 
                        <br/>Developing my website also taught me the importance of <b>considering frontend engineering costs and complexity into my design decisions.</b>
                    </p>
                </div>


            </div>
        </div>
    )

}
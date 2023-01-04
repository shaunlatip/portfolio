import styles from '../styles/Home.module.css'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import { Stint_Ultra_Condensed } from '@next/font/google'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shaun Latip</title>
      </Head>
      <NavigationBar/>
      <div className={styles.pageWrapper}>
        <div className={styles.section}>
          <div className={styles.headline}>
            <div className={styles.headlineContent}>
            {/* <img className={styles.portrait} src="portrait.png"/> */}
            <h1>
                Hi! I'm Shaun, a product designer and user researcher.
                {/* <span className={styles.titleEmoji} role="img" aria-label="dog">☁️</span> */}
              </h1>
              <p className={styles.subHeadline}>
                I design to shape an accessible, intentional digital world.
              </p>
              <p className={styles.roles}>
                Senior CS student @ <a className={styles.primaryLink} target="_blank" href="https://www.brown.edu/">Brown University</a> <br/>
                Previously Research @ <a className={styles.primaryLink} target="_blank" href="https://sites.brown.edu/bltlab/">Brown Language and Thought Lab</a>
              </p>

            </div>
          </div>
          <div className={styles.headlineGraphic}>
        
          </div>

        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Selected Work
          </h3>
          <div className={styles.gallery}>

            <div className={styles.project}>
              <Link href="/exploreri">
                <img className={styles.projectImage} src="images/exploreri-card.jpg"/>
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h2>Explore Rhode Island</h2>
                    <div className={styles.badges}>
                      <span className={styles.badge}>UI/UX Design</span>
                      <span className={styles.badge}>User Research</span>
                      <span className={styles.badge}>HTML/CSS</span>
                    </div>
                    <p>Redesigning and developing how public park info is accessed through a responsive webpage</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.project}>
              <Link href="/circular">
                <img className={styles.projectImage} src="images/circular-card.jpg"/>
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                  <h2>Circular</h2>
                    <div className={styles.badges}>
                      <span className={styles.badge}>UI/UX Design</span>
                      <span className={styles.badge}>User Research</span>
                      <span className={styles.badge}>User Testing</span>
                    </div>
                    <p>Designed website for Circular, providing accessible consumer technology subscriptions</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.project}>
              <Link href="/pokemon-ranch">
                <img className={styles.projectImage} src="images/pokemon-card.jpg"/>
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h2>Honeydew Pokemon Ranch</h2>
                    <div className={styles.badges}>
                      <span className={styles.badge}>UI/UX Design</span>
                      <span className={styles.badge}>Web App</span>
                      <span className={styles.badge}>React/CSS/JS</span>
                    </div>

                    <p>Interactive React web app to browse and make a team from certified cute pokemon</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.project}>
              <Link href="/checkin">
                <img className={styles.projectImage} src="images/checkin-card.jpg"/>
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                  <h2>Health Services Check In</h2>
                  <div className={styles.badges}>
                      <span className={styles.badge}>User Research</span>
                      <span className={styles.badge}>Storyboard</span>
                      <span className={styles.badge}>Persona Mapping</span>
                    </div>

                    <p>Studying the state of clinical care from a UX perspective at Brown University</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.project}>
              <Link href="/exploreri">
                <img className={styles.projectImage} src="images/projectPlaceholderImage.jpg"/>
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h2>Language and Thought</h2>
                    <div className={styles.badges}>
                      <span className={styles.badge}>UI/UX Design</span>
                      <span className={styles.badge}>User Research</span>
                      <span className={styles.badge}>HTML/CSS</span>
                    </div>
                    <p>Redesigning and developing a responsive webpage for public parks and trails across Rhode Island</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.projectPlaceholder}>
              <img className={styles.projectImage} src="images/projectPlaceholderImage.jpg"/>
              <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <span className={styles.projectPlaceholderText}></span>
                    </div>
                </div>
            </div>

            </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Writing</h3>
          <div className={styles.rowGallery}>

          <Link href="">
            <div className={styles.row}>
              <div className={styles.rowImage}>
                <img src="images/lippitthill.jpg"/>
              </div>
              <div className={styles.rowContent}>
                <h2>"Lippitt Hill" and the East Side</h2>
                <p>
                  A research project exploring the razing of Providence's predominant Black Neighborhood.
                </p>
              </div>
            </div>
          </Link>

            <div className={styles.row}>

            <div className={styles.rowImage}>
                <img src="images/lippitthill.jpg"/>
              </div>

              <div className={styles.rowContent}>
                <h2>Digital Spaces of Comfort in Seoul</h2>
                <p>
                  When digital and physical spaces interweave together in Seoul, how can we apply Urban Studies to better understand digital space?
                </p>
              </div>

            </div>

            <div className={styles.row}>

              <div className={styles.rowImage}>
                <img src="images/lippitthill.jpg"/>
              </div>
              <div className={styles.rowContent}>
                <h2>Digital Spaces of Comfort in Seoul</h2>
                <p>
                  When digital and physical spaces interweave together in Seoul, how can we apply Urban Studies to better understand digital space?
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className={`${styles.section} ${styles.finalSection}`}>
          <h3 className={styles.sectionTitle}>About</h3>
          <div className={styles.about}>
            <img className={styles.aboutPortrait} src="images/aboutPortrait.jpg"/>
            <div className={styles.aboutContent}>
              <p>Hi! I’m a senior at Brown University studying Computer Science and Behavioral Decision Sciences with a joint focus on Design and Human-Computer Interaction. 
            
            As a designer, I’m relentlessly user-centric—I take the extra mile to advocate for users’ needs. As a first-generation immigrant who had to overcome language, cultural and technical barriers, I relate to those who struggle with using apps and interfaces. This background pushes me to design products with intentionality and accessibility in mind.
            
            Last summer, I interned at MongoDB's Education team, leading the full design process for two projects. Previously, I worked closely with startups—leading design sprints, rapid prototyping, and launching products in a fast-paced setting. I made design decisions leveraging both data and behavioral insights, built upon iterations with an open mind, and collaborated with engineers to bring impact to the world. 
            
            Recently, I've been working on hatching impactful innovations , building prototypes for visual computing research, mentoring women in tech, and designing the TEDxBrownU website to empower ideas worth spreading.</p>
            </div>
          </div>
        </div>


       
      </div>
      <Footer/>
    </div>
  )
}

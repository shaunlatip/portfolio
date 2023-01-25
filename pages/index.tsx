import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components//Footer'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Shaun Latip | Portfolio</title>
      </Head>
        <div className={styles.pageWrapper}>
          <div className={styles.section}>
            <div className={styles.headline}>
              <div className={styles.headlineContent}>
              {/* <img className={styles.portrait} src="portrait.png"/> */}
              <h1>
                  Hi! I'm Shaun, a curious product designer and researcher.
                  {/* <span className={styles.titleEmoji} role="img" aria-label="dog">☁️</span> */}
                </h1>
                <p className={styles.subHeadline}>
                  I design to shape a more inclusive, intentional digital world.
                  <br/>My process is deeply informed by my past experiences in anthropology, psychology, and front-end development.
                  <br/>
                  Take a look at some of my work below to learn a bit more about how I tick.
                </p>
                <p className={styles.roles}>
                  Senior in Computer Science @ <a className={styles.primaryLink} target="_blank" href="https://www.brown.edu/">Brown University</a> <br/>
                  Previously Research @ <a className={styles.primaryLink} target="_blank" href="https://sites.brown.edu/bltlab/">Brown Language and Thought Lab</a>
                </p>
              </div>
            </div>
            <div className={styles.headlineGraphic}>
        
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              Selected work
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
                      <p>Iterative design and research for YC Startup providing flexible access to consumer electronics</p>
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
                      <p>User observation and interview research on the clinical experience at Brown Health Services.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.project} style={{display: 'none'}}>
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
                <Link href="/blt">
                  <img className={styles.projectImage} src="images/blt-card.jpg"/>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h2>Language and Thought</h2>
                      <div className={styles.badges}>
                        <span className={styles.badge}>Behavioral Research</span>
                      </div>
                      <p>Running virtual research on how we think and speak at a Brown University psychology research lab</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.projectPlaceholder} style={{display: 'none'}}>
                <img className={styles.projectImage} src="images/projectPlaceholderImage.jpg"/>
                <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <span className={styles.projectPlaceholderText}></span>
                      </div>
                  </div>
              </div>
              </div>
          </div>
          <div className={styles.section} id="writing">
            <h3 className={styles.sectionTitle}>Writing</h3>
            <div className={styles.rowGallery}>
            <Link href="writing/TheEastSide.pdf">
              <div className={styles.row}>
                <div className={styles.rowImage}>
                  <img src="images/lippitthill.jpg"/>
                </div>
                <div className={styles.rowContent}>
                  <h2>"Lippitt Hill" and the East Side</h2>
                  <p>
                    A research project exploring the razing of Providence's predominant Black Neighborhood in the 1950s. Produced for URBN 1871A, I explore the often discriminatory, unsavory history of urban development in Providence and, more broadly, the U.S.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="writing/IdentityDisabilityAgency.pdf">
              <div className={styles.rowReverse}>
                <div className={styles.rowImage}>
                    <img src="images/kilimanjaro.jpeg"/>
                  </div>
                  <div className={styles.rowContent}>
                    <h2>Identity, Disability, and Agency through Lupus</h2>
                    <p>
                      Rooting from an ethnographic interview with my friend Jason, I explore how Jason's experience of Lupus relates deeply with themes of identity, disability, and agency playing into how impaired individuals navigate their experiences.
                    </p>
                  </div>
              </div>
            </Link>
              <Link href="writing/DigitalSpacesOfComfort.pdf">
                <div className={styles.row}>
                  <div className={styles.rowImage}>
                    <img src="images/seoul.png"/>
                  </div>
                  <div className={styles.rowContent}>
                    <h2>Digital Spaces of Comfort in Seoul</h2>
                    <p>
                      In Seoul, South Korea, how are emerging, interwoven digital/physical spaces in livestreams, PC cafes, and more growing in importance across communities today?
                      When digital and physical spaces weave in with each other, how can we apply Urban Studies principles to better understand how people perceive these digital spaces?
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        
        </div>
        <Footer variant="home"/>
    </div>
  )
}

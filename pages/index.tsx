import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components//Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Shaun Latip | Portfolio</title>
      </Head>
        <div className={styles.pageWrapper}>
          <div className={styles.section}>
            <div className={styles.top}>
              <div className={styles.headline}>
                <div className={styles.headlineContent}>
                {/* <img className={styles.portrait} src="portrait.png"/> */}
                <h1>
                    Hi! I'm Shaun.
                    {/* <span className={styles.titleEmoji} role="img" aria-label="dog">☁️</span> */}
                  </h1>
                  <p className={styles.subHeadline}>
                    I'm a <span style={{fontWeight: 600}}>designer</span> and <span style={{fontWeight: 600}}>researcher</span> working to shape a more inclusive, intentional digital world.
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
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              Selected Work —
            </h3>
            <div className={styles.gallery}>
              
              <div className={styles.project}>
                <Link href="/circular">
                  <Image className={styles.projectImage} src="/images/circular-card.jpg" width={522} height={362.5} alt=""/>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                    <h2>Circular</h2>
                      <div className={styles.badges}>
                        <span className={styles.badge}>UI/UX Design</span>
                        <span className={styles.badge}>User Research</span>
                        <span className={styles.badge}>User Testing</span>
                      </div>
                      <p>Prototyping MVP for Y Combinator 2022 startup providing flexible access to consumer electronics</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.project}>
                <Link href="/exploreri">
                  <Image src="/images/exploreri-card.jpg" width={522} height={351.86} className={styles.projectImage} alt=""/>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h2>Explore Rhode Island</h2>
                      <div className={styles.badges}>
                        <span className={styles.badge}>UI/UX Design</span>
                        <span className={styles.badge}>User Research</span>
                        <span className={styles.badge}>HTML/CSS</span>
                      </div>
                      <p>Redesign upgrading responsiveness, usability, and intuitiveness of frequently used public park website</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.project}>
                <Link href="/checkin">
                  <Image className={styles.projectImage} src="/images/checkin-card.jpg" width={522} height={351.98} alt=""/>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                    <h2>Health Services Check In</h2>
                    <div className={styles.badges}>
                        <span className={styles.badge}>User Research</span>
                        <span className={styles.badge}>Interviews</span>
                        <span className={styles.badge}>Field Studies</span>
                      </div>
                      <p>Field research and interviews examining the front-door clinical experience</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.project} style={{display: 'none'}}>
                <Link href="/pokemon-ranch">
                  <Image className={styles.projectImage} src="/images/pokemon-card.jpg" width={522} height={362.5} alt=""/>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h2>Honeydew Pokemon Ranch</h2>
                      <div className={styles.badges}>
                        <span className={styles.badge}>UI/UX Design</span>
                        <span className={styles.badge}>Web App</span>
                        <span className={styles.badge}>React/CSS/JS</span>
                      </div>
                      <p>Interactive React web app to browse and make a team from certified-cute pokemon</p>
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
                        <span className={styles.badge}>User Research</span>
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
            <h3 className={styles.sectionTitle}>Writing —</h3>
            <div className={styles.rowGallery}>
            <Link href="writing/OnTheEastSide.pdf">
              <div className={styles.row}>
                <div className={styles.rowImage}>
                  <Image src="/images/lippitthill.jpg" width={300} height={225} alt=""/>
                </div>
                <div className={styles.rowContent}>
                  <h2>"Lippitt Hill" and the East Side</h2>
                  <p>
                    A research project exploring the razing of Providence's predominant Black Neighborhood in the 1950s. Produced for the Brown Urban Studies Department, I explore the often discriminatory, unsavory history of urban development in Providence and, more broadly, the U.S.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="writing/IdentityDisabilityAndAgency.pdf">
              <div className={styles.rowReverse}>
                <div className={styles.rowImage}>
                    <Image src="/images/kilimanjaro.jpeg" width={300} height={225} alt=""/>
                  </div>
                  <div className={styles.rowContent}>
                    <h2>Identity, Disability, and Agency through Lupus</h2>
                    <p>
                      Rooting from an ethnographic interview with my friend Jason, I explore how Jason's experience of Lupus relates deeply with themes of identity, disability, and agency playing into how impaired individuals navigate their experiences.
                    </p>
                  </div>
              </div>
            </Link>
              <Link href="writing/DigitalSpacesOfComfortInSeoul.pdf">
                <div className={styles.row}>
                  <div className={styles.rowImage}>
                    <Image src="/images/seoul.png" width={300} height={225} alt=""/>
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

          <div className={styles.section} id="other" style={{marginTop: '1rem', marginBottom: '2rem'}}>
            <h3 className={styles.sectionTitle}>Side Projects —</h3>
            <div className={styles.otherProjects}>

              <div className={styles.otherProject}>
                <Link href="https://www.browndailyherald.com/article/2021/10/richie-engn-robots" target="_blank">
                  <Image src="/images/robots.gif" alt="" width={348} height={229} className={styles.otherProjectImage}/>
                  <div className={styles.otherProjectInfo}>
                    <div className={styles.otherProjectInfoContent}>
                      <h3>Think-Bot Split Flaps</h3>
                      <p>Designing and coding an Arduino-powered split-flap display for an artistic robotic installation.</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.otherProject}>
                <Link href="https://drive.google.com/file/d/1BDbKiPABNon0NO-FpfMnJBnjMC8lRFDQ/view" target="_blank">
                  <Image src="/images/scallops.gif" alt="" width={348} height={229} className={styles.otherProjectImage}/>
                  <div className={styles.otherProjectInfo}>
                    <div className={styles.otherProjectInfoContent}>
                      <h3>Scallop-Bot</h3>
                      <p>Designer, engineer, and coder for an Arduino-based robotic art installation.</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className={styles.otherProject}>
                <Link href="https://shaunlatip.github.io/Pokemon-Ranch/" target="_blank">
                  <Image src="/images/pokemonRanch.gif" alt="" width={348} height={229} className={styles.otherProjectImage}/>
                  <div className={styles.otherProjectInfo}>
                    <div className={styles.otherProjectInfoContent}>
                      <h3>Pokemon Ranch</h3>
                      <p>React web app that lets you browse and choose a Pokemon team.</p>
                    </div>
                  </div>
                </Link>
              </div>
              
            </div>
          </div>
        
        </div>
        <Footer variant="home"/>
    </div>
  )
}

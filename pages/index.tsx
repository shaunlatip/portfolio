import styles from "../styles/Home.module.css";
import system from "../styles/System.module.css";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components//Footer";
import Image from "next/image";
import { GithubCircle, Linkedin, Mail } from "iconoir-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    { text: "product designer", color: "#F36545" },
    { text: "developer", color: "#737A96" },
    { text: "musician", color: "#ECC589" },
    { text: "tinkerer", color: "#76C9CC" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <Head>
        <title>Shaun Latip</title>
      </Head>
      <div className={styles.pageWrapper}>
        <div className={`${styles.section} ${styles.headlineSection}`}>
          <div className={`${styles.headline} `}>
            <div className={styles.headlineContent}>
              {/* <img className={styles.portrait} src="portrait.png"/> */}
              <h2 className={`${system.medium} ${system.h2}`}>
                Shaun is a
                {/* <span className={styles.titleEmoji} role="img" aria-label="dog">☁️</span> */}
              </h2>
              <div
                className={styles.animationContainer}
              >
                {" "}
                {/* Adjust height based on your font size */}
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={titleIndex}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 18,
                      mass: 1,
                    }}
                    className={`${system.semibold} ${system.h2}`}
                    style={{
                      color: titles[titleIndex].color,
                      marginBottom: 48,
                      position: "relative",
                    }}
                  >
                    {titles[titleIndex].text}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <p
                className={`${system.regular} ${system.h6}`}
              >
                I build digital products, systems, and experiences. <br />
                Currently designing products at{" "}
                <a
                  target="_blank"
                  href="https://www.mindbodyonline.com/"
                  className={`${system.link}`}
                >
                  Mindbody + ClassPass
                </a>
                .
              </p>

              <div className={styles.socialIcons}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shaun-latip/"
                >
                  <Linkedin className={styles.socialIcon} />
                </a>
                <a target="_blank" href="https://github.com/shaunlatip">
                  <GithubCircle className={styles.socialIcon} />
                </a>
                <a target="_blank" href="mailto:shaunlatip@gmail.com">
                  <Mail className={styles.socialIcon} />
                </a>
              </div>

              {/* <h6 className={`${system.medium} ${system.h6}`}>
                  See my work below
                </h6> */}
            </div>
          </div>
          <div className={styles.headlineGraphic}></div>
        </div>
        <div
          className={`${styles.section} ${styles.highlightedProjectsSection}`}
        >
          {/* <h3 className={styles.sectionTitle}>
              Selected Work —
            </h3> */}

          <div className={styles.highlightedProjects}>
            <Link 
              href="https://www.mindbodyonline.com/business/education/blog/ai-assistant-mindbody-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*  Can convert project into a component with separate collapsed, dark/light mode states */}
              <div className={styles.highlightedProject}>
                <div
                  className={`${styles.highlightedProjectImage} ${styles.supportAssistantImage}`}
                >
                  <img
                    src="images/AIAssistant.png"
                    style={{ borderRadius: "48px 48px 0px 48px" }}
                  />
                </div>
                <div className={styles.highlightedProjectContent}>
                  <div>
                    <h4 className={`${system.h4} ${system.semibold}`}>
                      AI Assistant & Support
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                        marginTop: 8,
                      }}
                    >
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        Mindbody
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)", margin: "0 4px" }}
                      >
                        •
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        2023 - 2024
                      </span>
                    </div>
                    <p
                      className={`${system.p} ${system.regular}`}
                      style={{ marginTop: 16 }}
                    >
Led 0→1 design for Mindbody's first LLM product, a support chatbot that improved our first response from support and deflected 78% of all incoming support inquiries.                    </p>
                    <p
                      className={`${system.p} ${system.semibold} ${styles.viewText}`}
                      style={{ marginTop: 16 }}
                    >
                      View
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="https://www.mindbodyonline.com/business"               
              target="_blank"
              rel="noopener noreferrer">
              <div className={styles.highlightedProject}>
                <div className={styles.highlightedProjectContent}>
                  <div>
                    <h4 className={`${system.h4} ${system.semibold}`}>
                      Settings
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                        marginTop: 8,
                      }}
                    >
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        Mindbody
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)", margin: "0 4px" }}
                      >
                        •
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        2024
                      </span>
                    </div>
                    <p
                      className={`${system.p} ${system.regular}`}
                      style={{ marginTop: 16 }}
                    >
                      Led redesign of Mindbody's legacy Settings architecture, with a revamped navigation and organizational-wide framework to modernize the most complex part of our B2B platform.
                    </p>
                    <p
                      className={`${system.p} ${system.semibold} ${styles.viewText}`}
                      style={{ marginTop: 16 }}
                    >
                      View
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.highlightedProjectImage} ${styles.supportAssistantImage}`}
                >
                  <img
                    src="images/settings.png"
                    style={{ borderRadius: "48px 48px 48px 0px" }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.gallery} style={{ marginTop: 80 }}>
            <div className={`${styles.projectSecondary} ${styles.projectSecondaryHighlighted}`}>
              <Link href="/project-template">
                <Image
                  className={styles.projectImage}
                  src="/images/AIAssistant.png"
                  width={522}
                  height={362.5}
                  alt=""
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h5 className={`${system.h5} ${system.semibold}`}>
                      AI Assistant
                    </h5>
                    <div
                      className={styles.capTagsContainer}
                      style={{ marginTop: 8 }}
                    >
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        Mindbody
                      </span>
                    </div>
                    <p style={{ marginTop: 16}}>
                    Led 0→1 design for Mindbody's first LLM product, creating a support chatbot that improved our first response from support and deflected 78% on all incoming support inquiries.

                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={`${styles.projectSecondary} ${styles.projectSecondaryHighlighted}`}>
              <Link href="/settings">
                <Image
                  className={styles.projectImage}
                  src="/images/settings.png"
                  width={522}
                  height={362.5}
                  alt=""
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h5 className={`${system.h5} ${system.semibold}`}>
                      Settings
                    </h5>
                    <div
                      className={styles.capTagsContainer}
                      style={{ marginTop: 8 }}
                    >
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        Mindbody
                      </span>
                    </div>
                    <p style={{ marginTop: 16}}>
                    Led redesign of Mindbody's legacy Settings architecture, with a revamped navigation and organizational-wide framework to modernize the most complex part of our B2B platform.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.projectSecondary}>
              <Link href="/circular">
                <Image
                  className={styles.projectImage}
                  src="/images/circular-card.jpg"
                  width={522}
                  height={362.5}
                  alt=""
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h5 className={`${system.h5} ${system.semibold}`}>
                      Circular
                    </h5>
                    <div
                      className={styles.capTagsContainer}
                      style={{ marginTop: 8 }}
                    >
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        Independent
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)", margin: "0 4px" }}
                      >
                        •
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        Nov 2022
                      </span>
                    </div>
                    <p style={{ marginTop: 16}}>
                      Prototyping MVP for Y Combinator 2022 startup providing
                      flexible access to consumer electronics
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.projectSecondary}>
              <Link href="/exploreri">
                <Image
                  className={styles.projectImage}
                  src="/images/exploreri-card.jpg"
                  width={522}
                  height={362.5}
                  alt=""
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectInfoContent}>
                    <h5 className={`${system.h5} ${system.semibold}`}>
                      Explore Rhode Island
                    </h5>
                    <div
                      className={styles.capTagsContainer}
                      style={{ marginTop: 8 }}
                    >
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        UI/UX Design
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)", margin: "0 4px" }}
                      >
                        •
                      </span>
                      <span
                        className={`${system.capTag} ${system.medium}`}
                        style={{ color: "var(--shade-3)" }}
                      >
                        User Research
                      </span>
                    </div>
                    <p style={{ marginTop: 16}}>
                      Redesign upgrading responsiveness, usability, and
                      intuitiveness of frequently used public park website
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* <div className={styles.project}>
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
      </Link> */}

            <div
              className={styles.projectPlaceholder}
              style={{ display: "none" }}
            >
              <img
                className={styles.projectImage}
                src="images/projectPlaceholderImage.jpg"
              />
              <div className={styles.projectInfo}>
                <div className={styles.projectInfoContent}>
                  <span className={styles.projectPlaceholderText}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Below section should be just using dark mode in tailwind. */}
        <div className={styles.fullWidthSection}>
          <div className={styles.fullWidthContent}>
            <h3 className={styles.sectionTitle}>Side Projects —</h3>
            <div className={styles.gallerySmall}>
              <div className={styles.projectSecondary}>
                <Link href="https://www.browndailyherald.com/article/2021/10/richie-engn-robots" target="_blank">
                  <Image
                    src="/images/robots.gif"
                    alt=""
                    width={522}
                    height={362.5}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h3 className={`${system.h5} ${system.semibold}`}>Think-Bot Split Flaps</h3>
                      <div className={styles.capTagsContainer} style={{ marginTop: 8 }}>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Arduino</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)", margin: "0 4px" }}>•</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>C++</span>
                      </div>
                      <p className={system.p} style={{ marginTop: 16, color: "var(--shade-4)" }}>
                        Designing and coding an Arduino-powered split-flap display for an artistic robotic installation.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.projectSecondary}>
                <Link href="https://drive.google.com/file/d/1BDbKiPABNon0NO-FpfMnJBnjMC8lRFDQ/view" target="_blank">
                  <Image
                    src="/images/scallops.gif"
                    alt=""
                    width={522}
                    height={362.5}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h3 className={`${system.h5} ${system.semibold}`}>Scallop-Bot</h3>
                      <div className={styles.capTagsContainer} style={{ marginTop: 8 }}>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Arduino</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)", margin: "0 4px" }}>•</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Processing</span>
                      </div>
                      <p className={system.p} style={{ marginTop: 16, color: "var(--shade-4)" }}>
                        Designer, engineer, and coder for an Arduino-based robotic art installation.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.projectSecondary}>
                <Link href="https://shaunlatip.github.io/Pokemon-Ranch/" target="_blank">
                  <Image
                    src="/images/pokemonRanch.gif"
                    alt=""
                    width={522}
                    height={362.5}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h3 className={`${system.h5} ${system.semibold}`}>Pokemon Ranch</h3>
                      <div className={styles.capTagsContainer} style={{ marginTop: 8 }}>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }} >React</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)", margin: "0 4px" }}>•</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>JavaScript</span>
                      </div>
                      <p className={system.p} style={{ marginTop: 16, color: "var(--shade-4)" }}>
                        React web app that lets you browse and choose a Pokemon team.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <h3 className={styles.sectionTitle} style={{ marginTop: 80 }}>Writing —</h3>
            <div className={styles.gallerySmall}>
              <div className={styles.projectSecondary}>
                <Link href="writing/OnTheEastSide.pdf" target="_blank">
                  <Image
                    src="/images/lippitthill.jpg"
                    alt=""
                    width={522}
                    height={362.5}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h3 className={`${system.h5} ${system.semibold}`}>"Lippitt Hill" and the East Side</h3>
                      <div className={styles.capTagsContainer} style={{ marginTop: 8 }}>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Research</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)", margin: "0 4px" }}>•</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Urban Studies</span>
                      </div>
                      <p className={system.p} style={{ marginTop: 16, color: "var(--shade-4)" }}>
                        A research project exploring the razing of Providence's predominant Black Neighborhood in the 1950s. Produced for the Brown Urban Studies Department, I explore the often discriminatory, unsavory history of urban development in Providence and, more broadly, the U.S.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.projectSecondary}>
                <Link href="writing/IdentityDisabilityAndAgency.pdf" target="_blank">
                  <Image
                    src="/images/kilimanjaro.jpeg"
                    alt=""
                    width={522}
                    height={362.5}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h3 className={`${system.h5} ${system.semibold}`}>Identity, Disability, and Agency through Lupus</h3>
                      <div className={styles.capTagsContainer} style={{ marginTop: 8 }}>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Research</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)", margin: "0 4px" }}>•</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Ethnography</span>
                      </div>
                      <p className={system.p} style={{ marginTop: 16, color: "var(--shade-4)" }}>
                        Rooting from an ethnographic interview with my friend Jason, I explore how Jason's experience of Lupus relates deeply with themes of identity, disability, and agency playing into how impaired individuals navigate their experiences.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={styles.projectSecondary}>
                <Link href="writing/DigitalSpacesOfComfortInSeoul.pdf" target="_blank">
                  <Image
                    src="/images/seoul.png"
                    alt=""
                    width={522}
                    height={362.5}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectInfo}>
                    <div className={styles.projectInfoContent}>
                      <h3 className={`${system.h5} ${system.semibold}`}>Digital Spaces of Comfort in Seoul</h3>
                      <div className={styles.capTagsContainer} style={{ marginTop: 8 }}>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Research</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)", margin: "0 4px" }}>•</span>
                        <span className={`${system.capTag} ${system.medium}`} style={{ color: "var(--shade-3)" }}>Urban Studies</span>
                      </div>
                      <p className={system.p} style={{ marginTop: 16, color: "var(--shade-4)" }}>
                        In Seoul, South Korea, how are emerging, interwoven digital/physical spaces in livestreams, PC cafes, and more growing in importance across communities today? When digital and physical spaces weave in with each other, how can we apply Urban Studies principles to better understand how people perceive these digital spaces?
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.section} id="writing">
          <h3 className={styles.sectionTitle}>Writing —</h3>
          <div className={styles.rowGallery}>
            <Link href="writing/OnTheEastSide.pdf">
              <div className={styles.row}>
                <div className={styles.rowImage}>
                  <Image
                    src="/images/lippitthill.jpg"
                    width={300}
                    height={225}
                    alt=""
                  />
                </div>
                <div className={styles.rowContent}>
                  <h2>"Lippitt Hill" and the East Side</h2>
                  <p>
                    A research project exploring the razing of Providence's
                    predominant Black Neighborhood in the 1950s. Produced for
                    the Brown Urban Studies Department, I explore the often
                    discriminatory, unsavory history of urban development in
                    Providence and, more broadly, the U.S.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="writing/IdentityDisabilityAndAgency.pdf">
              <div className={styles.rowReverse}>
                <div className={styles.rowImage}>
                  <Image
                    src="/images/kilimanjaro.jpeg"
                    width={300}
                    height={225}
                    alt=""
                  />
                </div>
                <div className={styles.rowContent}>
                  <h2>Identity, Disability, and Agency through Lupus</h2>
                  <p>
                    Rooting from an ethnographic interview with my friend Jason,
                    I explore how Jason's experience of Lupus relates deeply
                    with themes of identity, disability, and agency playing into
                    how impaired individuals navigate their experiences.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="writing/DigitalSpacesOfComfortInSeoul.pdf">
              <div className={styles.row}>
                <div className={styles.rowImage}>
                  <Image
                    src="/images/seoul.png"
                    width={300}
                    height={225}
                    alt=""
                  />
                </div>
                <div className={styles.rowContent}>
                  <h2>Digital Spaces of Comfort in Seoul</h2>
                  <p>
                    In Seoul, South Korea, how are emerging, interwoven
                    digital/physical spaces in livestreams, PC cafes, and more
                    growing in importance across communities today? When digital
                    and physical spaces weave in with each other, how can we
                    apply Urban Studies principles to better understand how
                    people perceive these digital spaces?
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div> */}
      </div>
      <Footer variant="home" />
    </div>
  );
}

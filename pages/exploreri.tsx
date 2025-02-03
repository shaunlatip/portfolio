import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components//Footer";
import projectStyles from "../styles/Project.module.css";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/ExploreRI.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import StartButton from "../components/StartButton";
import React, { useRef } from "react";

import bannerImage from "../public/exploreri/banner.png";
import problemSpread from "../public/exploreri/problemSpread.jpg";
import airbnb from "../public/exploreri/airbnb.png";
import allTrails from "../public/exploreri/allTrails.png";

import original1 from "../public/exploreri/original1.jpg";
import original2 from "../public/exploreri/original2.jpg";

import visualDesignStyleGuideImage from "public/visualdesignstyleguide.jpg";

export default function ExploreRI() {
  const variants = {
    out: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0,
      },
    },
  };

  const overviewRef = useRef<HTMLDivElement>(null);
  const redesignedWebsiteRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const prototypingRef = useRef<HTMLDivElement>(null);
  const finalDesignsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const takeawaysRef = useRef<HTMLDivElement>(null);

  function handleSidebarClick(e: React.MouseEvent<HTMLElement>) {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;

    switch (value) {
      case "Overview":
        if (!overviewRef.current) {
          return;
        }
        overviewRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Redesigned Website":
        if (!redesignedWebsiteRef.current) {
          return;
        }
        redesignedWebsiteRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Research":
        if (!researchRef.current) {
          return;
        }
        researchRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Prototyping":
        if (!prototypingRef.current) {
          return;
        }
        prototypingRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Final Designs":
        if (!finalDesignsRef.current) {
          return;
        }
        finalDesignsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Process":
        if (!processRef.current) {
          return;
        }
        processRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Takeaways":
        if (!takeawaysRef.current) {
          return;
        }
        takeawaysRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  return (
    <div className="page">
      <Head>
        <title>Explore Rhode Island | Shaun Latip</title>
      </Head>

      <div className={projectStyles.sidebar}>
        <button onClick={handleSidebarClick} value="Overview">
          Overview
        </button>
        <button onClick={handleSidebarClick} value="Redesigned Website">
          Redesigned Website
        </button>
        <button onClick={handleSidebarClick} value="Research">
          Research
        </button>
        <button onClick={handleSidebarClick} value="Prototyping">
          Prototyping
        </button>
        <button onClick={handleSidebarClick} value="Final Designs">
          Final Designs
        </button>
        <button onClick={handleSidebarClick} value="Process">
          Design Choices
        </button>
        <button onClick={handleSidebarClick} value="Takeaways">
          Takeaways
        </button>
      </div>

      <div className={projectStyles.pageContent}>
        <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
          <div className={projectStyles.headline}>
            <h2>Explore Rhode Island</h2>
            <h3>
              Redesigning public park information with responsiveness in mind
            </h3>
          </div>
          <div className={projectStyles.bannerWhiteBottom} />
          <div className={projectStyles.bannerImageContainer}>
            <Image
              src={bannerImage}
              alt="iMac, Tablet, and Phone display of interface"
              className={projectStyles.bannerImage}
              fill={true}
              style={{ maxWidth: "700px" }}
            />
          </div>
        </div>

        <div className={projectStyles.sections}>
          <div
            className={projectStyles.sectionContainer}
            ref={overviewRef}
            style={{ paddingTop: "calc(4rem - 34px)" }}
          >
            <div className={projectStyles.section}>
              {/* <div className={projectStyles.sectionTitleLarge}>Overview</div> */}
              {/* <b>Description</b> */}
              <div>
                <b>Impact</b>
                <p>
                  Made frequently used public park website{" "}
                  <b>responsive and intuitive</b> so that more users can access
                  key information (such as ADA accessibility) on the go.
                </p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <b>Context</b>
                <p style={{ marginBottom: "1rem" }}>
                  Redesign and development of the{" "}
                  <Link
                    href="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList"
                    target="_blank"
                    className={homeStyles.primaryLink}
                  >
                    Explore Rhode Island park page
                  </Link>
                  , often the first result when searching for information on
                  local parks and trails. Site contained information such as ADA
                  accessibility information hard to find elsewhere - a
                  significant motivation to my redesign.
                  <br />
                  My{" "}
                  <Link
                    href="https://shaunlatip.github.io/responsive-redesign/"
                    target="_blank"
                    className={homeStyles.primaryLink}
                  >
                    redesigned, responsive website
                  </Link>{" "}
                  better met the needs of users visiting across platforms.
                </p>
              </div>
              <div className={projectStyles.projectInfo}>
                <div>
                  <b>Role</b>
                  <p>
                    UI/UX Designer
                    <br />
                    User Researcher
                    <br />
                    Frontend Developer
                  </p>
                </div>
                <div>
                  <b>Timeline</b>
                  <p>Oct 4, 2022 - Oct 18, 2022 (Two weeks)</p>
                </div>
                <div>
                  <b>Tools Used</b>
                  <p>
                    Figma, Balsamiq Wireframes, HTML, <br />
                    and CSS
                  </p>
                </div>
                <div>
                  <b>Platforms</b>
                  <p>
                    Mobile
                    <br />
                    Tablet
                    <br />
                    Desktop
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainer}
            style={{ paddingTop: "2rem" }}
            ref={redesignedWebsiteRef}
          >
            <div
              className={projectStyles.sectionTitleLarge}
              style={{ alignSelf: "center", paddingTop: "2rem" }}
            >
              Redesigned Website
            </div>

            <div className={styles.frame}>
              <div className={styles.comparison}>
                <Tabs
                  isLazy={true}
                  variant="unstyled"
                  size="md"
                  colorScheme="orange"
                  defaultIndex={0}
                >
                  <TabList>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Desktop
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Tablet
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Mobile
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Original
                    </Tab>
                  </TabList>
                  <TabPanels style={{ transition: "all 0.3s ease" }}>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          style={{ borderRadius: "0 0 12px 12px" }}
                          className={styles.previewFrame}
                          src="https://shaunlatip.github.io/responsive-redesign/"
                        />
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <div className={styles.previewFrameContainer}>
                          <iframe
                            style={{ borderRadius: "0 0 12px 12px" }}
                            className={styles.previewFrameTablet}
                            src="https://shaunlatip.github.io/responsive-redesign/"
                          />
                        </div>
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <div className={styles.previewFrameContainer}>
                          <iframe
                            style={{ borderRadius: "0 0 12px 12px" }}
                            className={styles.previewFrameMobile}
                            src="https://shaunlatip.github.io/responsive-redesign/"
                          />
                        </div>
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.previewFrame}
                          src="https://exploreri.org/gSiteReport2.php?siteID=102&src=siteList"
                        />
                      </Fade>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>

          <div className={projectStyles.sectionContainerDark}>
            <div className={projectStyles.section}>
              <h3>This project challenged me as my first redesign.</h3>
              <p>
                Before this, I had mostly used Figma for working on isolated
                projects or tutorials. This redesign let me better master Figma
                and fully follow through research, prototyping, and development.
              </p>
            </div>
          </div>

          <div className={projectStyles.sectionContainerGray} ref={researchRef}>
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Research</div>
              <h4 style={{ fontWeight: 600 }}>
                To start, I put myself in the shoes of the the user.
              </h4>
              <p style={{ marginBottom: "0.5rem" }}>
                Due to the limited time frame of two weeks, and the nature of
                the class assignment, I decided to start my research process by
                conducting a series of{" "}
                <Link
                  href="https://www.nngroup.com/articles/cognitive-walkthroughs/"
                  target="_blank"
                  className={homeStyles.primaryLink}
                >
                  cognitive walkthroughs
                </Link>
                .
              </p>
              <p>
                I came up with a list of 13 broad scenarios containing a series
                of tasks that a user might expect to complete. These included
                the following scenarios.
              </p>

              <div className={projectStyles.ol}>
                <div className={projectStyles.olItem}>
                  <span>01</span>
                  <p>
                    Checking if the park has wheelchair-friendly trails and ADA
                    accessible parking
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
                    Learning how to access the park across several modes of
                    transport
                  </p>
                </div>
                <div className={projectStyles.olItem}>
                  <span>04</span>
                  <p>
                    Reading and responding to submissions and questions from
                    other users
                  </p>
                </div>
                <div className={projectStyles.olItem}>
                  <span>05</span>
                  <p>Planning trail routes for trips ahead of time</p>
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
              <h4 style={{ fontWeight: 600 }}>
                I then ran through each scenario while asking myself the
                following questions:
              </h4>
              <div className={projectStyles.olLarge} style={{ gap: "1rem" }}>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>1</span>
                  <h4>
                    Will the correct action be sufficiently evident to the user?
                  </h4>
                </div>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>2</span>
                  <h4>
                    Will the user notice that the correct action is available?
                  </h4>
                </div>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>3</span>
                  <h4>
                    Will the user associate and interpret the response from the
                    action correctly?
                  </h4>
                </div>
              </div>
              <p>
                While walking through, I also refrenced Jakob Nielsen's{" "}
                <Link
                  href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                  target="_blank"
                  className={homeStyles.primaryLink}
                >
                  10 Heuristic Principles
                </Link>{" "}
                to fuel my insights. Each task was repeated thrice across
                mobile, tablet, and desktop devices. As a result, these
                walkthroughs provided me insight into what issues were likely
                hindering the experience of the website's users.
              </p>
              <h4
                style={{
                  fontWeight: 600,
                  marginBottom: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                I also used WebAIM's{" "}
                <Link
                  style={{ fontWeight: 600 }}
                  href="https://wave.webaim.org/"
                  target="_blank"
                  className={homeStyles.primaryLink}
                >
                  WAVE tool
                </Link>{" "}
                to assess site accessibility.
              </h4>
              <p>
                I chose to use this to assess the site for use with screen
                readers, keyboard navigation, and regarding contrast levels.
                This tool proved invaluable in helping me to understand how
                users with impairments might experience the site.{" "}
              </p>
            </div>
          </div>

          <div className={projectStyles.sectionContainerDark}>
            <div
              className={projectStyles.section}
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h4 style={{ fontWeight: 600 }}>
                With these insights, I explored the key problems I would focus
                on.
              </h4>
              <h4>
                On a broader scale, the website had significant issues
                surrounding <br />{" "}
                <span className="primary600">organization</span>,{" "}
                <span className="primary600">platform responsiveness</span>, and{" "}
                <span className="primary600">accessibility</span>.
              </h4>
              <h4 style={{ marginTop: "0.5rem" }}>
                My walkthroughs led me to 5 main pain points in the original
                design:
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
            <Image
              style={{ marginTop: "4.5rem" }}
              alt="Spread of 6 key pain points"
              src={problemSpread}
              width={1176}
              height={1114}
              quality={100}
            />
            {/* <iframe src="./exploreri/problemSpread.pdf" className={styles.problemSpreadPdf}></iframe> */}
            <div
              className={projectStyles.section}
              style={{ marginTop: "6rem" }}
            >
              <h4 style={{ fontWeight: 600 }}>
                The WAVE tool highlighted other possible issues to my attention,
                including:{" "}
              </h4>
              <div
                className={projectStyles.olLarge}
                style={{ marginTop: "0rem", paddingTop: "0.5rem" }}
              >
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>1</span>
                  <h4>
                    Skipped heading levels and smaller p tags styled to match
                    larger headings.
                  </h4>
                </div>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>2</span>
                  <h4>
                    No page regions and no use of ARIA outside of linked Google
                    maps widget.
                  </h4>
                </div>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>3</span>
                  <h4>
                    Low contrast and size warnings on a significant amount of
                    text on buttons and paragraphs.
                  </h4>
                </div>
              </div>
              <h4 style={{ marginTop: "1.5rem" }}>
                A complete list of my findings from my research process can be
                viewed{" "}
                <Link
                  href="/exploreri/extrafindings.pdf"
                  target="_blank"
                  className={homeStyles.primaryLink}
                >
                  here
                </Link>
                .
              </h4>
            </div>
          </div>
          <div className={projectStyles.sectionContainer}>
            <div
              className={projectStyles.section}
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h2 className={projectStyles.h2SectionHeader}>
                Competitor Analysis
              </h2>
              <p>
                I viewed at a variety of platforms online that sought to
                accomplish similar functions as Explore RI.
                <br />I wanted to see what design patterns I could apply to my
                redesign.
              </p>
            </div>
            <div
              className={projectStyles.spreadRow}
              style={{ gap: "4rem", marginTop: "4rem" }}
            >
              <div className={projectStyles.spreadRowText}>
                <b>AirBnB</b>
                <p>
                  AirBnB's experience is a lot less cluttered while still
                  sharing a significant amount of information about a location,
                  with a sparingly-used accent color and considerable white
                  space.{" "}
                </p>
                <p>
                  Photos take considerable space in the center, allowing the
                  user to immediately see what a location looks like.
                </p>
              </div>
              <Image
                style={{ border: "1px solid #E4E4E4" }}
                alt="AirBnB home page"
                src={airbnb}
                width={600}
                height={336}
              />
            </div>
            <div className={projectStyles.spreadRow} style={{ gap: "4rem" }}>
              <div className={projectStyles.spreadRowText}>
                <b>AllTrails</b>
                <p>
                  AllTrails features photos and trail at the start of the page,
                  while a trail map is similarly included at a much smaller,
                  preview size.
                </p>
                <p>
                  Content is split in a 2:1 column ratio with text-heavy
                  sections on the left, making more efficient use of horizontal
                  space and aiding the page's sense of order through alignment.
                </p>
              </div>
              <Image
                style={{ border: "1px solid #E4E4E4" }}
                alt="AllTrails home page"
                src={allTrails}
                width={600}
                height={336}
              />
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            ref={prototypingRef}
          >
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Prototyping</div>
              <h4 style={{ fontWeight: 600 }}>
                I then created three wireframes, with one for each platform.
              </h4>
              <p>
                I focused on mapping out the layout of how the website would be
                structured using Balsamiq Wireframes. I prioritized making an
                overall structure that would{" "}
                <b>translate easily across desktop, tablet, and mobile,</b> with
                a strong sense of organization and hierarchy.
              </p>
              <p>
                Each wireframe is annotated to show why a particular design
                decision was made.
              </p>
            </div>
            <div className={styles.frameAlt}>
              <div className={styles.lofis}>
                <Tabs
                  isLazy={true}
                  variant="unstyled"
                  size="md"
                  colorScheme="orange"
                  defaultIndex={0}
                >
                  <TabList>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Desktop
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Tablet
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Mobile
                    </Tab>
                  </TabList>
                  <TabPanels style={{ transition: "all 0.3s ease" }}>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.lofiFrame}
                          src="/exploreri/lofiDesktop.jpg"
                        />
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.lofiFrame}
                          src="/exploreri/lofiTablet.jpg"
                        />
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.lofiFrame}
                          src="/exploreri/lofiMobile.jpg"
                        />
                      </Fade>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
            <div></div>
          </div>

          <div className={projectStyles.sectionContainer} ref={finalDesignsRef}>
            <div
              className={projectStyles.section}
              style={{ alignItems: "center" }}
            >
              <div className={projectStyles.sectionTitleLarge}>
                Final Designs
              </div>
              <p>
                I then developed three high-fidelity prototypes in Figma, with
                one for each platform.
              </p>
            </div>
            <div className={styles.frame}>
              <div
                className={styles.hifiComparison}
                style={{ marginTop: "0rem" }}
              >
                {/* <h4>Compare my redesign with the original below.</h4> */}
                <Tabs
                  isLazy={true}
                  variant="unstyled"
                  size="md"
                  colorScheme="orange"
                  defaultIndex={0}
                >
                  <TabList>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Desktop Hi-Fi
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Tablet Hi-Fi
                    </Tab>
                    <Tab
                      style={{
                        fontWeight: 500,
                        marginBottom: "2px",
                        padding: "0.8rem 1.2rem",
                      }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Mobile Hi-Fi
                    </Tab>
                  </TabList>
                  <TabPanels style={{ transition: "all 0.3s ease" }}>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.hifiFrame}
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5RmQxdjM28kNy1HCv6DXUB%2FResponsive-Redesign%3Fnode-id%3D10%253A437%26t%3DMPFt0dAo7QpAwdxw-1"
                        ></iframe>
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.hifiFrame}
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5RmQxdjM28kNy1HCv6DXUB%2FResponsive-Redesign%3Fnode-id%3D104%253A221%26t%3DMPFt0dAo7QpAwdxw-1"
                        ></iframe>
                      </Fade>
                    </TabPanel>
                    <TabPanel style={{ padding: 0 }}>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                      >
                        <iframe
                          className={styles.hifiFrame}
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5RmQxdjM28kNy1HCv6DXUB%2FResponsive-Redesign%3Fnode-id%3D10%253A453%26t%3DMPFt0dAo7QpAwdxw-1"
                        ></iframe>{" "}
                      </Fade>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>

          <div className={projectStyles.sectionContainerDark} ref={processRef}>
            <div className={projectStyles.section}>
              <div
                className={projectStyles.sectionTitleLarge}
                style={{ alignSelf: "center" }}
              >
                Design Choices
              </div>
              <h4
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  marginTop: "0rem",
                }}
              >
                My design choices can be broken into the three changes of <br />{" "}
                <span style={{ fontWeight: 600, color: "#F0916C" }}>
                  visual design
                </span>
                ,{" "}
                <span style={{ fontWeight: 600, color: "#F0916C" }}>
                  structure
                </span>
                , and{" "}
                <span style={{ fontWeight: 600, color: "#F0916C" }}>
                  consistent language
                </span>
                .
              </h4>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            style={{ paddingBottom: "0rem", paddingTop: "2rem" }}
          >
            <div className={projectStyles.section}>
              <b style={{ marginBottom: 0 }}>
                <span style={{ fontWeight: 600, color: "#F0916C" }}>
                  Change 1
                </span>
              </b>

              <h2 className={projectStyles.h2SectionHeader}>Visual Design</h2>

              <p>
                Visually, the original website often felt extremely{" "}
                <span style={{ fontWeight: "600" }}>crowded and noisy</span>{" "}
                while in use, lending the website to feel{" "}
                <span style={{ fontWeight: "600" }}>uninviting for users</span>.
              </p>
              <p style={{ paddingTop: "0.5rem" }}>
                I reworked the website's visual design system to help make the
                feel of the website more inviting and clean for users. Working
                off of the original blue and green color palette, I made changes
                to improve usability while maintaining certain elements from the
                previous visual design theme.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "3rem",
                  marginTop: "2rem",
                }}
              >
                <Image
                  src="/exploreri/styleGuide.jpg"
                  quality={100}
                  width={732}
                  height={412}
                  style={{ borderRadius: "12px" }}
                  alt="Visual Style Guide"
                />
                {/* <p style={{fontSize: '1rem', color:'#737373'}}>The visual design style guide that defined my visual redesign.</p> */}
              </div>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            style={{ paddingTop: "1rem" }}
          >
            <div className={projectStyles.section}>
              <h4 style={{ alignSelf: "center", paddingTop: "1rem" }}>
                This new design style was developed with the following goals in
                mind:
              </h4>
            </div>
            <div
              className={projectStyles.spreadRow}
              style={{ gap: "4rem", paddingTop: "2rem" }}
            >
              <div className={projectStyles.spreadRowText}>
                <div className={projectStyles.olLarge} style={{ gap: "3rem" }}>
                  <div className={projectStyles.olItemLarge}>
                    <div style={{ gap: "1rem" }}>
                      {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Goal #1</span> */}
                      <h4 style={{ fontWeight: 600 }}>
                        Creating a lighter mood
                      </h4>
                      <p>
                        The original was filled with an excess of visually dense
                        colors, with dark browns, blues, and deep greens
                        populating the space.
                      </p>
                      <p>
                        I used a lighter color palette, with a much lighter
                        blue-green gradient background, and backgrounds of
                        mostly white. I also flipped the gradient direction to
                        move from light to dark to draw the user's gaze to
                        scroll down the page.
                      </p>
                      <p>
                        Lastly,drop shadow effects were also added to
                        distinguish elements rather than borders and drastic
                        color changes. I also strayed from the original's use of
                        boxier elements to using more border radius and rounded
                        shapes to aid this new theme.
                      </p>
                    </div>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <div style={{ gap: "1rem" }}>
                      {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Goal #2</span> */}
                      <h4 style={{ fontWeight: 600 }}>
                        Improving contrast and legibility
                      </h4>
                      <p>
                        Throughout the page, I made an effort to use as much
                        blacks and whites as possible to emphasize contrast.
                      </p>
                      <p>
                        Furthermore, I chose a new, darker sole accent color of{" "}
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            color: "#215561",
                          }}
                        >
                          #215561
                        </span>{" "}
                        to maintain good contrast ratios against the lighter
                        background when highlighting specific elements.
                      </p>
                    </div>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <div style={{ gap: "1rem" }}>
                      {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Goal #3</span> */}
                      <h4 style={{ fontWeight: 600 }}>
                        Emphasizing interaction
                      </h4>
                      <p>
                        With a more streamlined use of color throughout the
                        page, I used contrasting colors to visually emphasize
                        interactable elements to distinguish them from regular
                        content.
                      </p>
                      <p>
                        The original website's button styling, with thick, dark
                        borders, did not match the lighter feel of the website I
                        wanted to create. In response, I avoided the use of
                        borders in buttons in my redesign, using instead more
                        rounded corners and colors to emphasize them better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/exploreri/sideBySide.jpg"
                quality={100}
                width={450}
                height={1116}
                style={{ borderRadius: "12px" }}
                alt="Side by side comparison"
              />
            </div>
          </div>

          <div className={projectStyles.sectionContainer} style={{}}>
            <div className={projectStyles.section}>
              <b style={{ marginBottom: 0 }}>
                <span style={{ fontWeight: 600, color: "#F0916C" }}>
                  Change 2
                </span>
              </b>

              <h2 className={projectStyles.h2SectionHeader}>Restructuring</h2>

              <p>
                My research showed me that the original website contained a lot
                of useful information for many different tasks, from driving
                directions, trail maps, and community-submitted content.
              </p>
              <p>
                However, it became clear that this information was{" "}
                <span style={{ fontWeight: "600" }}>
                  largely inacessible due to subpar organization and a confusing
                  structure
                </span>{" "}
                that made navigating the website and scanning quite frustrating.
              </p>
              <p style={{ marginTop: "0rem" }}>
                To solve this, I restructured the site to encourage the{" "}
                <Link
                  className={homeStyles.primaryLink}
                  style={{ fontWeight: 600 }}
                  href="https://www.nngroup.com/articles/layer-cake-pattern-scanning/"
                  target="_blank"
                >
                  layer-cake scanning pattern
                </Link>
                , as it best allows users to efficiently and quickly find
                information that they need.
              </p>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainer}
            style={{ paddingBottom: "0rem", paddingTop: "0rem" }}
          >
            <div className={projectStyles.spreadRow} style={{ gap: "4rem" }}>
              <div className={projectStyles.spreadRowText}>
                <b>What is a layer-cake scanning pattern?</b>
                <p>
                  When users, while scanning through a page, fixate mostly on
                  the page’s headings and subheadings, with deliberate
                  occasional fixations on the (body) text in between.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Image
                  alt="Layer cake pattern explanation graphic"
                  src="/exploreri/patterns.png"
                  width={500}
                  height={336}
                />
                <Link
                  href="https://www.toptal.com/designers/web/ui-design-best-practices"
                  target="_blank"
                  style={{ fontSize: "0.75rem" }}
                  className={homeStyles.primaryLink}
                >
                  Source
                </Link>
              </div>
            </div>
          </div>

          <div className={projectStyles.sectionContainerDark}>
            <div className={projectStyles.section}>
              <h4>
                The overall structure of my redesigned website focused on the
                two ideas:
              </h4>
              <div className={projectStyles.olLarge}>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>1</span>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>
                      Clearly distributing sections
                    </h4>
                    <p>
                      Content is distributed into groups that are, for the most
                      part, completely distinct with no overlap between groups,
                      removing confusion on where information is located in the
                      page.
                    </p>
                  </div>
                </div>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>2</span>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>
                      Following a grid structure
                    </h4>
                    <p>
                      The page structure follows a consistent grid that divides
                      each section into thirds. With this grid, users will be
                      able to easily scan vertically across sections by
                      following the implied lines of the grid. Certain sections
                      are then split in two columns with a 2:1 width ratio. This
                      allows users to view related content by predictably
                      scanning horizontally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={projectStyles.sectionContainerGray}>
            <div className={projectStyles.section}>
              <b>
                I experimented with a variety of alternatives before arriving at
                this grid structure.
              </b>
              <p>
                Initially, I tried fitting each section with just one column.
                However, this made paragraphs difficult to read, and also made
                the sizing of certain elements such as maps fit awkwardly.
              </p>
              <p>
                I also experimented with splitting sections into equal columns
                of two. Although this was better than one, after further
                experimentation I found that having a 2:1 ratio allowed more
                efficient use of space. I also found that the asymmetry with the
                2:1 ratio helped to further delineate a clearer hierarchy
                through size.
              </p>
            </div>
          </div>

          <div className={projectStyles.sectionContainer}>
            <div className={projectStyles.section}>
              <h4 style={{ marginTop: "0rem", alignSelf: "center" }}>
                This restructure was aided by the inclusion of two types of page
                elements:
              </h4>
            </div>
            <div className={projectStyles.spreadRow} style={{ gap: "2rem" }}>
              <div className={projectStyles.spreadRowText}>
                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #1</span> */}
                <h4 style={{ fontWeight: 600 }}>Navigation bar</h4>
                <p>
                  A navigation bar is included near the start of the page that
                  acts as a table of contents, and provides an overview on the
                  sections further down the page. On click, these links allow
                  users to quickly navigate to a specific section.
                </p>
              </div>
              <Image
                style={{ borderRadius: "0px" }}
                alt="Gif"
                src="/exploreri/navbar.gif"
                width={500}
                height={336}
              />
            </div>
            <div className={projectStyles.spreadRow} style={{ gap: "2rem" }}>
              <div className={projectStyles.spreadRowText}>
                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #2</span> */}
                <h4 style={{ fontWeight: 600 }}>
                  Marking content with headings
                </h4>
                <p>
                  To help the user to scan, headings and subheadings are
                  included throughout the page in a consistent, predictable
                  manner.
                </p>
                <p>
                  Font weights and sizes let these headings visually stand out
                  to help users latch on to them. These also help screen readers
                  to more easily navigate the page.
                </p>
              </div>
              <Image
                style={{}}
                alt="Gif"
                src="/exploreri/headings.gif"
                width={500}
                height={336}
              />
            </div>
          </div>

          <div className={projectStyles.sectionContainerGray} style={{}}>
            <div className={projectStyles.section}>
              <b style={{ marginBottom: 0 }}>
                <span style={{ fontWeight: 600, color: "#F0916C" }}>
                  Change 3
                </span>
              </b>

              <h2 className={projectStyles.h2SectionHeader}>
                Consistent Language
              </h2>

              <p>
                Another frequent issue I discovered through my cognitive
                walkthroughts was the lack of consistent language used across
                the original website.
              </p>
              <p>
                These inconsistencies made it{" "}
                <b>
                  difficult to understand what information was supposed to be
                  communicated
                </b>
                , and created frustration during my cognitive walkthroughs.
              </p>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            style={{ paddingTop: "2rem" }}
          >
            <div className={projectStyles.spreadRow} style={{ gap: "4rem" }}>
              <div className={projectStyles.spreadRowText}>
                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #1</span> */}
                <h4 style={{ fontWeight: 600 }}>More verbs, less nouns</h4>
                <p>
                  Instead of mixing unaccompanied nouns and verbs, text
                  accompanying interactive elements always address the user and
                  start with an action verb. This helps to make it clearer to
                  users what different elements do.
                </p>
              </div>
              <Image
                style={{ borderRadius: "0px" }}
                alt="Gif"
                src="/exploreri/verbs.jpg"
                width={521}
                height={301}
              />
            </div>
            <div className={projectStyles.spreadRow} style={{ gap: "4rem" }}>
              <div className={projectStyles.spreadRowText}>
                {/* <span style={{fontWeight: 600, color: '#F0916C', fontSize: '1rem'}}>Inclusion #2</span> */}
                <h4 style={{ fontWeight: 600 }}>Labeling icons</h4>
                <p>
                  Previously, important park information such as park
                  restrictions were conveyed through unaccompanied icons. These
                  icons had the potential to confuse readers as to what they
                  meant, and also made it more difficult for screen reader use.
                </p>
                <p>
                  To solve this, I made sure these icons are always accompanied
                  with labels that confirm their intended meaning.
                </p>
              </div>
              <Image
                style={{}}
                alt=""
                src="/exploreri/labels.gif"
                width={521}
                height={350}
              />
            </div>
          </div>

          <div className={projectStyles.sectionContainer} ref={takeawaysRef}>
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Takeaways</div>
              <p>
                This project was critical in developing myself as a designer.
                Redesigning this website taught me a lot in how to reduce
                unnecessary design elements and complexity to create simple,
                clean design. This process also taught me the importance of
                considering platform responsiveness as a key factor in crafting
                interfaces.
              </p>
              <p>
                Completing my cognitive walkthroughs also taught me how to
                better inform my design decisions, even when longer-term user
                observation, testing, and insights aren't possible.
              </p>
              <p>
                When I presented this project to my peers, I felt proud with how
                much this experience helped me to feel more comfortable in
                design.
              </p>
              <h4 style={{ fontWeight: 600, marginTop: "2rem" }}>
                If I had more time, I would...
              </h4>
              <div className={projectStyles.olLarge}>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>1</span>
                  <div>
                    <b>Iterate with feedback from others</b>
                    <p>
                      Since my research process centered on cognitive
                      walkthroughs I completed myself, I would like to examine
                      how others might try and use my current redesign to see
                      what could be further improved. This would also help me to
                      better compensate for any blind spots that I might have
                      missed.
                    </p>
                  </div>
                </div>
                <div className={projectStyles.olItemLarge}>
                  <span style={{ fontSize: "1.5rem" }}>2</span>
                  <div>
                    <b>Explore redesigning other sections of the website</b>
                    <p>
                      My redesign was only focused on one type of page of
                      Explore Rhode Island's website. I would like to see how
                      the design system I developed for this page could be
                      extended to other parts of the website to create a more
                      cohesive redesign that I could share with Explore Rhode
                      Island.
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
                <StartButton />
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

      <Footer variant={"project"} />
    </div>
  );
}

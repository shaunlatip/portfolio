import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components//Footer";
import projectStyles from "../styles/Project.module.css";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/CheckIn.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import React, { useRef } from "react";
import StartButton from "../components/StartButton";

import { useState } from "react";
import bannerImage from "../public/checkin/building.jpg";
import overviewSketch from "../public/checkin/overview-sketch.png";
import desktopSketch from "../public/checkin/desktop-sketch.png";
import harryPortrait from "../public/checkin/harry-portrait.png";
import sakshiPortrait from "../public/checkin/sakshi-portrait.png";

export default function CheckIn() {
  const [sakshiTabIndex, setSakshiTabIndex] = useState(true);

  const variants = {
    out: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0,
      },
    },
  };

  const contextRef = useRef<HTMLDivElement>(null);
  const interfaceRef = useRef<HTMLDivElement>(null);
  const observationsRef = useRef<HTMLDivElement>(null);
  const interviewsRef = useRef<HTMLDivElement>(null);
  const personasRef = useRef<HTMLDivElement>(null);
  const storyboardRef = useRef<HTMLDivElement>(null);
  const takeawaysRef = useRef<HTMLDivElement>(null);

  function handleSidebarClick(e: React.MouseEvent<HTMLElement>) {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;

    switch (value) {
      case "Context":
        if (!contextRef.current) {
          return;
        }
        contextRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Interface":
        if (!interfaceRef.current) {
          return;
        }
        interfaceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Observations":
        if (!observationsRef.current) {
          return;
        }
        observationsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Interviews":
        if (!interviewsRef.current) {
          return;
        }
        interviewsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Personas":
        if (!personasRef.current) {
          return;
        }
        personasRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Storyboard":
        if (!storyboardRef.current) {
          return;
        }
        storyboardRef.current.scrollIntoView({ behavior: "smooth" });
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
        <title>Check In | Shaun Latip</title>
      </Head>
      <div className={projectStyles.sidebar}>
        <button onClick={handleSidebarClick} value="Context">
          Context
        </button>
        <button onClick={handleSidebarClick} value="Interface">
          Interface
        </button>
        <button onClick={handleSidebarClick} value="Observations">
          Observations
        </button>
        <button onClick={handleSidebarClick} value="Interviews">
          Interviews
        </button>
        <button onClick={handleSidebarClick} value="Personas">
          Personas
        </button>
        <button onClick={handleSidebarClick} value="Storyboard">
          Storyboard
        </button>
        <button onClick={handleSidebarClick} value="Takeaways">
          Takeaways
        </button>
      </div>
      <div className={projectStyles.pageContent}>
        <div className={`${styles.bannerProjectColor} ${projectStyles.banner}`}>
          <div className={projectStyles.headline}>
            <h2>Check In</h2>
            <h3>Understanding clinical care experiences at Brown</h3>
          </div>
          <div className={projectStyles.bannerWhiteBottom} />
          <div className={styles.bannerImageContainer}>
            <Image
              src={bannerImage}
              alt="Banner Image"
              className={styles.bannerImage}
              fill={true}
            />
          </div>
        </div>

        <div className={projectStyles.sections}>
          <div
            className={projectStyles.sectionContainer}
            ref={contextRef}
            id="context"
          >
            <div className={projectStyles.section}>
              {/* <div className={projectStyles.sectionTitleLarge} style={{paddingBottom: '0'}}>Context</div> */}
              {/* <b>Context</b> */}
              <div>
                <b>Context</b>
                <p>
                  Since September 2021, clinical care at Brown University has
                  been centralized at the{" "}
                  <Link
                    target="_blank"
                    href="https://www.brown.edu/news/2021-09-16/wellness"
                    className={homeStyles.primaryLink}
                  >
                    new health and wellness center
                  </Link>
                  . I wanted to better understand how different users experience
                  visiting the new clinic, from walking in the door to being
                  taken care of, in order to find room for improvement.
                </p>
              </div>
              <div className={projectStyles.projectInfo}>
                <div>
                  <b>Role</b>
                  <p>
                    UI/UX Designer
                    <br />
                    User Researcher
                  </p>
                </div>
                <div>
                  <b>Timeline</b>
                  <p>Sep 20, 2022 - Oct 4, 2022</p>
                </div>
                <div>
                  <b>Skills</b>
                  <p>
                    Field Observation
                    <br />
                    Interviews
                    <br />
                    Storyboarding
                    <br />
                    Persona Mapping
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={projectStyles.sectionContainerDark}>
            <div className={projectStyles.section}>
              <h4 style={{ fontWeight: 600 }}>
                This was my first time crafting a whole UX research project,
                from A to Z.
              </h4>
              <p>
                While I spent the past summer researching at the Brown Language
                and Thought Lab, there I worked on assisting existing projects
                alongside others. This project{" "}
                <span>required me to assume ownership over every step:</span>{" "}
                from writing precise questions, to approaching strangers to ask
                about their experience, all while respecting the sensitive
                subject matter of health. This was also my first time crafting
                personas and storyboarding with real insights.
              </p>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainer}
            ref={interfaceRef}
            id="interface"
          >
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Interface</div>
              <h4 style={{ fontWeight: 600 }}>
                First, I got familiar with the check-in interface and its
                surroundings.
              </h4>
            </div>
            <div
              style={{ alignItems: "center", padding: "0 0 0 0", gap: "2rem" }}
              className={projectStyles.spreadRow}
            >
              <div
                style={{ width: 450 }}
                className={projectStyles.spreadRowText}
              >
                <p>The check-in interface consisted of four sections:</p>
                <div className={projectStyles.ol}>
                  <div className={projectStyles.olItem}>
                    <span>01</span>
                    <p>
                      Desktop check-in booth where users validate their identity
                      and update health information.
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>02</span>
                    <p>
                      Seating area for users to sit and wait for their names to
                      be called after using the booth.
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>03</span>
                    <p>
                      Greeter area where staff members answer miscellaneous
                      inquiries.
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>04</span>
                    <p>
                      Clinical area entrance where nurses primarily call
                      checked-in users inside to meet providers, and escort
                      users out afterwards.
                    </p>
                  </div>
                </div>
              </div>
              <Image src={overviewSketch} width={650} alt="Overview of area" />
            </div>
            <div
              style={{
                alignItems: "center",
                padding: "0 0 2rem 0",
                gap: "2rem",
              }}
              className={projectStyles.spreadRow}
            >
              <div
                style={{ width: 450 }}
                className={projectStyles.spreadRowText}
              >
                <p>
                  The desktop interface is itself comprised of three main
                  components:
                </p>
                <div className={projectStyles.ol}>
                  <div className={projectStyles.olItem}>
                    <span>01</span>
                    <p>Navbar indicating which of the 5 pages a user is on.</p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>02</span>
                    <p>
                      Instructions containing paragraphs on how the displayed
                      page should be used.
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>03</span>
                    <p>
                      Body holding the fields, options, and checkboxes for each
                      page, with a “Cancel” and “Next” button pair that resets
                      the program and submits the displayed form respectively.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={desktopSketch}
                width={450}
                style={{ margin: "0 100px 0 100px" }}
                alt="Overview of desktop"
              />
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            ref={observationsRef}
            id="#observations"
          >
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>
                Observations
              </div>
              <h4 style={{ fontWeight: 600 }}>
                Second, I observed users as they checked in to the clinic.
              </h4>
              <p>
                Over two weekdays, I waited in the public seating area and
                observed 12 users in the morning and afternoon. I avoided
                observing up close how users filled out forms on the desktop
                check-in to respect their privacy. Instead, I focused on
                observing how each user navigated the station, including how
                long they lingered on each section, and their interactions with
                staff.
              </p>
              <div style={{ padding: "3rem 0 1rem 0" }}>
                <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                  These were some of my key observations:
                </h4>
                <div className={projectStyles.olLarge}>
                  <div className={projectStyles.olItemLarge}>
                    <span>1</span>
                    <div>
                      <b>
                        Most (8/12) users first approached staff in the Greeter
                        Area instead of the desktops.
                      </b>
                      <p>
                        Half of these users stood and waited for several minutes
                        while staff were busy, all without noticing a printed
                        page instructing users to check-in with the computer.
                        Most of them seemed somewhat confused upon entering the
                        check-in area, with the staff telling most of them to
                        "just use the computer".
                      </p>
                    </div>
                    <p></p>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <span>2</span>
                    <div>
                      <b>
                        Several (3/12) users were late to their appointment.
                      </b>
                      <p>
                        These users tended to rush directly to a desktop, check
                        in, then approach staff to apologize and see if they
                        could still be seen. One user spent 10 minutes
                        rescheduling with staff, as User A’s schedule conflicted
                        with many of the suggested times.
                      </p>
                      <p style={{ color: "#F0916C", fontWeight: 400 }}>
                        They later remarked: "I’m a med student…I can’t control
                        when my lab ends.”
                      </p>
                    </div>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <span>3</span>
                    <div>
                      <b>
                        Only a handful of users seemed to be familiar with the
                        interface.
                      </b>
                      <p>
                        Outside of this minority, most seemed to appear unsure
                        on how to check-in; scanning the room, observing others,
                        before approaching a staff member.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainer}
            ref={interviewsRef}
            id="interviews"
          >
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Interviews</div>
              <h4 style={{ fontWeight: 600 }}>
                Next, I spoke with three users to hear about their experience
                directly.
              </h4>
              <p>
                To make this process less daunting, I created an interview guide
                of 8 questions to better understand what underlying goals,
                frustrations, and emotions they associated with the experience.
                I crafted my questions based on{" "}
                <Link
                  className={homeStyles.primaryLink}
                  href="https://www.cs.cmu.edu/~jhm/Readings/Dillman,%20Chapter%204.pdf"
                  target="_blank"
                >
                  Dillman's basics of crafting good questions
                </Link>
                , emphasizing open-ended questions to capture more information,
                and keeping it simple and objective.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Depending on how the conversation went, I followed up on related
                topics that my interviewees expressed interest in discussing,
                while making space to answer any questions they had about my
                project.
              </p>
              <div style={{ padding: "3rem 0 1rem 0" }}>
                <h4 style={{ fontWeight: 600 }}>My Interview Guide</h4>
                <div className={projectStyles.ol}>
                  <div className={projectStyles.olItem}>
                    <span>01</span>
                    <p>Have you checked in here before today?</p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>02</span>
                    <p>
                      What initial reactions did you have when you arrived at
                      the check in area today?
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>03</span>
                    <p>
                      Did you experience any difficulty in understanding how to
                      check in?
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>04</span>
                    <p>
                      (If they used the computer) How was your experience
                      navigating the computer?
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>05</span>
                    <p>
                      What do you wish the check in process could accomplish
                      differently?
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>06</span>
                    <p>
                      Were there any parts of checking in that you enjoyed? If
                      so, could you tell me about them?
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>07</span>
                    <p>
                      Do you have any other concerns about the check in process?
                    </p>
                  </div>
                  <div className={projectStyles.olItem}>
                    <span>08</span>
                    <p>
                      Is there anything else about your experience today you’d
                      like to share?
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ padding: "3rem 0 1rem 0" }}>
                <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                  I then summarized the key points I learned from talking with
                  three users.
                </h4>
                <div className={projectStyles.olLarge}>
                  <div className={projectStyles.olItemLarge}>
                    <span>1</span>
                    <div>
                      <b>
                        Everyone unanimously felt frustrated and confused by the
                        desktop interface.
                      </b>
                      <p>
                        All three felt the desktop program was "cluttered,
                        outdated, and hard to read," and wished that the process
                        was more streamlined.
                      </p>
                    </div>
                    <p></p>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <span>2</span>
                    <div>
                      <b>
                        For those newer to campus, the check-in process made
                        them feel anxious and nervous.
                      </b>
                      <p>
                        {" "}
                        Users B and C were both first time users and
                        undergraduates on campus for less than 2 years. Both
                        were unsure on which section to first visit and felt
                        nervous approaching staff. They both were anxious about
                        how their presence could be acknowledged by clinicians.
                      </p>
                    </div>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <span>3</span>
                    <div>
                      <b>
                        Checking in quickly was only possible with experience
                        and familiarity.
                      </b>
                      <p>
                        User B, relatively new to the interface, was frustrated
                        that the desktop check-in took far longer than they
                        expected and caused them to be late, despite having come
                        "extra early". Meanwhile, another user, having been
                        using the system for 5 years, claimed to be able to now
                        check in extremely quickly “without reading
                        instructions.”
                      </p>
                    </div>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <span>4</span>
                    <div>
                      <b>
                        Sanitation, especially with COVID-19, was a concern with
                        the desktop booth.
                      </b>
                      <p>
                        User A wished that the desktop required less physical
                        contact, as once they were forced to use a booth right
                        after somebody had coughed on it as they were running
                        late. They also wished a way existed to display a wait
                        time and queue for those waiting.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            ref={personasRef}
            id="personas"
          >
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Personas</div>
              <h4 style={{ fontWeight: 600 }}>
                To analyze my findings, I devised two personas based on these
                insights.
              </h4>
              <p style={{ marginBottom: "0.5rem" }}>
                I worked to synthesize my findings into two distinct personas,
                each capturing a distinct set of behavior patterns. To better
                inform myself, I read Chapter 5 of Alan Cooper's "About Face:
                The Essentials of Interaction Design" to provide a framework for
                developing research based personas. During this process, I
                focused on exploring the underlying motivations behind the
                check-in process, emphasizing the 'why' moreso than the 'what'.
              </p>
            </div>
            <div
              style={{ background: "white", padding: "2rem", gap: "1rem" }}
              className={projectStyles.spreadRow}
            >
              <div className={styles.persona}>
                <div className={styles.personaHeader}>
                  <Image
                    src={sakshiPortrait}
                    width={140}
                    height={196}
                    alt="Portrait of Sakshi"
                  />
                  <div>
                    <h3 style={{ color: "#F0916C", margin: 0 }}>
                      Scattered Sakshi
                    </h3>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div>
                  <b style={{ color: "#F0916C" }}>Background</b>
                  <p>
                    Sakshi is a med student, juggling her time between managing
                    a lab project, volunteering at the hospital, and studying.
                    Sakshi schedules biweekly clinical visits to manage an
                    ongoing health condiiton between commitments, without much
                    time to spare.
                  </p>
                </div>
                <div>
                  <b style={{ color: "#F0916C" }}>Why Sakshi?</b>
                  <p>
                    Sakshi is based on observations of several users, alongside
                    findings from my conversation with User A, who all arrived
                    late. Sakshi represents those who possess more familiarity
                    with the check-in process and struggle to fit their
                    appointments within their busy schedules.
                  </p>
                </div>
                <div>
                  <b style={{ color: "#F0916C" }}>Interface Issues</b>
                  <div
                    className={projectStyles.ol}
                    style={{ paddingTop: "0.5rem" }}
                  >
                    <div className={projectStyles.olItem}>
                      <span>01</span>
                      <p>
                        The keyboard and mouse are unhygienic, yet take too long
                        to disinfect before use.
                      </p>
                    </div>
                    <div className={projectStyles.olItem}>
                      <span>02</span>
                      <p>
                        No wait time or queue information is provided while
                        waiting.
                      </p>
                    </div>
                    <div className={projectStyles.olItem}>
                      <span>03</span>
                      <p>
                        Rescheduling any missed appointments takes a significant
                        amount of time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={projectStyles.selector}>
                  <Tabs
                    isLazy={true}
                    variant="unstyled"
                    size="md"
                    colorScheme="orange"
                    defaultIndex={0}
                  >
                    <TabList>
                      <Tab
                        style={{ fontWeight: 500, marginBottom: "2px" }}
                        _hover={{ color: "#F0916C" }}
                        _active={{ color: "#F0916C" }}
                        _selected={{
                          color: "#F0916C",
                          boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                          marginBottom: "0px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Thinks
                      </Tab>
                      <Tab
                        style={{ fontWeight: 500, marginBottom: "2px" }}
                        _hover={{ color: "#F0916C" }}
                        _active={{ color: "#F0916C" }}
                        _selected={{
                          color: "#F0916C",
                          boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                          marginBottom: "0px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Feels
                      </Tab>
                      <Tab
                        style={{ fontWeight: 500, marginBottom: "2px" }}
                        _hover={{ color: "#F0916C" }}
                        _active={{ color: "#F0916C" }}
                        _selected={{
                          color: "#F0916C",
                          boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                          marginBottom: "0px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Does
                      </Tab>
                      <Tab
                        style={{ fontWeight: 500, marginBottom: "2px" }}
                        _hover={{ color: "#F0916C" }}
                        _active={{ color: "#F0916C" }}
                        _selected={{
                          color: "#F0916C",
                          boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                          marginBottom: "0px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Says
                      </Tab>
                    </TabList>

                    <TabPanels style={{ transition: "all 0.3s ease" }}>
                      <TabPanel>
                        <Fade
                          variants={variants}
                          animate="in"
                          initial="out"
                          exit="out"
                          in={sakshiTabIndex}
                        >
                          <div className={styles.personaMapPanel}>
                            <p>
                              "If it's 4:04PM now, and if I sprint, I shouldn't
                              be too late..."
                            </p>
                            <p>
                              "If I can't make it today, I'll have to reschedule
                              to finals week, which really won't work."
                            </p>
                            <p>"That time only works if lab ends on time..."</p>
                          </div>
                        </Fade>
                      </TabPanel>
                      <TabPanel>
                        <Fade
                          variants={variants}
                          animate="in"
                          initial="out"
                          exit="out"
                          in={sakshiTabIndex}
                        >
                          <div className={styles.personaMapPanel}>
                            <p>
                              Grossed out by touching keyboards that are never
                              sanitized.
                            </p>
                            <p>
                              Stretched thin and exhausted after a long day in
                              lab, lecture, and the library.
                            </p>
                            <p>
                              Worried if the Doctor can still see them today.
                            </p>
                          </div>
                        </Fade>
                      </TabPanel>
                      <TabPanel>
                        <Fade
                          variants={variants}
                          animate="in"
                          initial="out"
                          exit="out"
                          in={sakshiTabIndex}
                        >
                          <div className={styles.personaMapPanel}>
                            <p>
                              Speeds through desktop check-in having memorized
                              each step
                            </p>
                            <p>
                              Color codes every hour of every weekday on their
                              Google Calendar
                            </p>
                            <p>
                              Sprints straight towards the desktop check-in
                              booth
                            </p>
                          </div>
                        </Fade>
                      </TabPanel>
                      <TabPanel>
                        <Fade
                          variants={variants}
                          animate="in"
                          initial="out"
                          exit="out"
                          in={sakshiTabIndex}
                        >
                          <div className={styles.personaMapPanel}>
                            <p>
                              "I have 45 minutes at 2PM between classes next
                              Tuesday. Would that work for the X-Ray?"
                            </p>
                            <p>
                              "I'm so sorry, I can't control when my lab ends.
                              Can the Doctor still see me?"
                            </p>
                            <p>
                              "Excuse me, I missed my 3:20. Is Doctor So-and-so
                              still here?"
                            </p>
                          </div>
                        </Fade>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
              <div className={styles.persona}>
                <div className={styles.personaHeader}>
                  <Image
                    src={harryPortrait}
                    width={140}
                    alt="Portrait of Harry"
                  />
                  <div>
                    <h3 style={{ color: "#F0916C", margin: 0 }}>
                      Hesitant Harry
                    </h3>
                    <p>19 Years Old</p>
                  </div>
                </div>
                <div>
                  <b style={{ color: "#F0916C" }}>Background</b>
                  <p style={{}}>
                    Harry is a sophomore in his first in-person year at Brown,
                    navigating dorm-life and living alone for their first time,
                    and is a combination of Users B and H. Today is Harry’s
                    first visit to Health Services to get a vaccination shot.
                  </p>
                </div>
                <div>
                  <b style={{ color: "#F0916C" }}>Why Harry?</b>
                  <p>
                    Harry is based off my observations of numerous users and
                    conversations with Users B and C who required more staff
                    guidance to successfully check in. Harry represents newer
                    users less familiar to checking in, who feel pressured to
                    avoid any mistakes.
                  </p>
                </div>
                <div>
                  <b style={{ color: "#F0916C" }}>Interface Issues</b>
                  <div
                    className={projectStyles.ol}
                    style={{ paddingTop: "0.5rem" }}
                  >
                    <div className={projectStyles.olItem}>
                      <span>01</span>
                      <p>
                        A lack of appropriate affordances to indicate which
                        section to first go to check in.
                      </p>
                    </div>
                    <div className={projectStyles.olItem}>
                      <span>02</span>
                      <p>
                        Difficulty reading and using user interface elements on
                        desktop.
                      </p>
                    </div>
                    <div className={projectStyles.olItem}>
                      <span>03</span>
                      <p>
                        Feels unseen by healthcare providers while checking in.
                      </p>
                    </div>
                  </div>
                </div>
                <Tabs
                  isLazy={true}
                  variant="unstyled"
                  size="md"
                  colorScheme="orange"
                  defaultIndex={0}
                >
                  <TabList>
                    <Tab
                      style={{ fontWeight: 500, marginBottom: "2px" }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Thinks
                    </Tab>
                    <Tab
                      style={{ fontWeight: 500, marginBottom: "2px" }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Feels
                    </Tab>
                    <Tab
                      style={{ fontWeight: 500, marginBottom: "2px" }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Does
                    </Tab>
                    <Tab
                      style={{ fontWeight: 500, marginBottom: "2px" }}
                      _hover={{ color: "#F0916C" }}
                      _active={{ color: "#F0916C" }}
                      _selected={{
                        color: "#F0916C",
                        boxShadow: "0 2px 0 rgba(240, 145, 108, 1)",
                        marginBottom: "0px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Says
                    </Tab>
                  </TabList>

                  <TabPanels style={{ transition: "all 0.3s ease" }}>
                    <TabPanel>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                        in={sakshiTabIndex}
                      >
                        <div className={styles.personaMapPanel}>
                          <p>"Where should I go first?"</p>
                          <p>
                            "What if I fill out this form wrong? Is that OK?"
                          </p>
                          <p>
                            "How do I let the doctors know I'm already here?"
                          </p>
                        </div>
                      </Fade>
                    </TabPanel>
                    <TabPanel>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                        in={sakshiTabIndex}
                      >
                        <div className={styles.personaMapPanel}>
                          <p>
                            Anxious about making a mistake and drawing
                            attention.
                          </p>
                          <p>
                            Pressured to not inconvenience other students and
                            staff with unnecessary questions.
                          </p>
                          <p>
                            Frustrated from scanning and straining eyes to use
                            the desktop UI.
                          </p>
                        </div>
                      </Fade>
                    </TabPanel>
                    <TabPanel>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                        in={sakshiTabIndex}
                      >
                        <div className={styles.personaMapPanel}>
                          <p>
                            After arriving, scans left and right to try and
                            figure out where to go.
                          </p>
                          <p>
                            Waits for several minutes in front of the door to
                            confirm if they have checked in or not.
                          </p>
                          <p>
                            Asks staff what they should do to check in before
                            trying anything.
                          </p>
                        </div>
                      </Fade>
                    </TabPanel>
                    <TabPanel>
                      <Fade
                        variants={variants}
                        animate="in"
                        initial="out"
                        exit="out"
                        in={sakshiTabIndex}
                      >
                        <div className={styles.personaMapPanel}>
                          <p>
                            "Excuse me, is this where I can check in for Health
                            Services?"
                          </p>
                          <p>
                            "Hi, I've checked in on the computer, do I need to
                            do anything else here?"
                          </p>
                          <p>
                            "Hi, I have an appointment at 5:40, is this where I
                            should be?"
                          </p>
                        </div>
                      </Fade>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>

          <div
            className={projectStyles.sectionContainerGray}
            ref={storyboardRef}
          >
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Storyboard</div>
              <h4 style={{ fontWeight: 600 }}>
                To further explore Scattered Sakshi's user journey, I created a
                storyboard.{" "}
              </h4>
              <p>
                This was a challenge for me as I rarely draw human characters,
                so I spent much effort to go through multiple drafts, practice
                sketching expressions, and using examples from comics to better
                portray the experience. While crafting this storyboard, I
                focused on the three pillars of authenticity, simplicity, and
                emotion to frame Sakshi's experience.
              </p>
            </div>

            <div className={styles.storyboard}>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel1.png"
                />
                <p>
                  Sakshi spends the day cycling through lectures, volunteer
                  work, and finally her lab.
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel2.png"
                />
                <p>
                  Sakshi is working at her lab, expecting to finish when the lab
                  runs into an unexpected problem. Her Professor asks her stay
                  and help out: “Just another 15 minutes!”
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel3.png"
                />
                <p>
                  30 minutes later, Sakshi sprints out of lab, barely catching
                  the bus to 450 Brook St.
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel4.png"
                />
                <p>
                  She arrives at the building, slamming open the door and
                  sprinting up the stairs, as the user before her leaves their
                  booth while coughing right into the keyboard.
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel5.png"
                />
                <p>
                  After heading straight towards the nearest available counter,
                  Sakshi, while grossed out, furiously clicks and types through
                  the program just as she's done a thousand times.
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel6.png"
                />
                <p>
                  Through each section, Sakshi ignores the paragraphs of dense
                  instructions and text; using her experience to speed through
                  the clunky program ASAP to not miss her appointment.
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel7.png"
                />
                <p>
                  Unfortunately after the program says she is too late, she goes
                  to the Greeter Area and makes her case: "I'm sorry I'm late -
                  I came here as fast as I could!"
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel8.png"
                />
                <p>
                  They spend the next ten minutes trying to reschedule. They go
                  back and forth: “2:00PM? No I cant do then, could 2:00pm
                  Wednesday work?" "...What about Thursday?...Friday? [and so
                  on]...”
                </p>
              </div>
              <div className={styles.panel}>
                <Image
                  alt="Comic Panel"
                  width={320}
                  height={320}
                  src="/checkin/panel9.png"
                />
                <p>
                  After scheduling another appointment tightly packed between
                  her commitments, Sakshi walks away disappointed, back again
                  where she first started.
                </p>
              </div>
            </div>
          </div>

          <div className={projectStyles.sectionContainer} ref={takeawaysRef}>
            <div className={projectStyles.section}>
              <div className={projectStyles.sectionTitleLarge}>Takeaways</div>
              <h4 style={{ fontWeight: 600 }}>
                As my first major UI/UX experience, this research project was
                truly valuable to my growth as a designer.
              </h4>
              <p>
                Looking back, it was truly exciting to put the UX tools that my
                UI/UX class introduced to work, in examining a part of campus
                that I find important in a deeper light. This project forced me
                to learn in a lot of ways which I found valuable in helping to
                develop my process; in forcing me to practice sketching and
                visual imagination to communicate my ideas, in planning every
                step of a research project, and interviewing and observing users
                in real life.
              </p>
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

          {/* <div className={projectStyles.sectionContainerDark}>
                        <div className={projectStyles.section}>
                        </div>
                    </div>

                    <div className={projectStyles.ol}>
                        <div className={projectStyles.olItem}>
                            <span>01</span>
                            <p>

                            </p>
                        </div>
                        <div className={projectStyles.olItem}>
                            <span>02</span>
                            <p>
        
                            </p>
                        </div>
                        <div className={projectStyles.olItem}>
                            <span>03</span>
                            <p>

                            </p>
                        </div>
                    </div> */}
        </div>
      </div>
      <Footer variant="project" />
    </div>
  );
}

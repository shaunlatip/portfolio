import Head from 'next/head'
import projectStyles from '../styles/Project.module.css'
import styles from '../styles/CheckIn.module.css'

export default function CheckIn() {
    return(
        <div className="page">
            <Head>
                <title>Snazzy Portfolio</title>
            </Head>
            <div className="content">
                <div className={projectStyles.section}>
                    <div className={projectStyles.headline}>
                        <h1 className={styles.projectColorText}>Health Services Check In</h1>
                        <p>Studying the state of clinical care from a UX perspective at Brown University</p>
                    </div>
                </div>

                <div id={projectStyles.subHeadline} className={projectStyles.section}>
                    <div className={projectStyles.subHeadline}>
                        <b>Jump to:  </b>
                        <a href="#background">Background</a> • <a href="#overview">Overview</a> • <a href="#desktop-ui">Desktop UI</a> • <a href="#observations">Observations</a> • <a href="#personas">Personas</a> • <a href="#storyboard">Storyboard</a> • <a href="#conclusion">Conclusion</a>
                    </div>
                </div>

                <div id="background" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    {/* <div className={styles.overviewSketch}>
                        <img src="checkin/building.jpg"/>
                    </div> */}
                    <h2>Background</h2>
                    <div className={projectStyles.twoColContent}>
                        <div>
                            <p>
                                My goal for this study was to better understand the experiences of users checking in for scheduled clinical appointments at Brown University's new Health Services clinic.
                                <br/><br/>
                                The new check in station my study centers on was <a href="https://www.brown.edu/news/2021-09-16/wellness">launched</a> in September of 2021 as part of a new, integrated Health and Wellness center, combining the previously separated Health Services alongside Counseling and Psychological Services into one centralized point of care in the middle of Brown University's campus.
                                <br/>
                                <br/>As someone interested in and personally invested towards the accessibility of healthcare on campus, I wanted to evaluate the experiences of patients to understand and communicate the condition of this facet of Brown's campus healthcare system.
                            </p>
                        </div>

                        <div className={projectStyles.imageCol}>
                            <img className={styles.buildingImage} src="checkin/building.jpg"/>
                        </div>
                    </div>

                </div>

                <div id="overview" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Overview</h2>
                    <p>
                        The check-in station consisted of four distinct, interactable sections:
                    </p>

                    <img className={styles.centeredImage} src="checkin/overview-sketch.png"/>

                    <p>
                        <b>Desktop Check-in Booths</b>  where users validate their identity and update health information. <br/>
                        <br/>
                        <b>Seating Area</b> for users to sit and wait for their names to be called after using the booth. <br/>
                        <br/>
                        <b>Greeter Area</b> where staff members answer miscellaneous inquiries. <br/>
                        A printed page instructs users to “Please sign in with the computers across from staff.” <br/>
                        <br/>
                        <b>Clinical Area Main Door</b> where nurses primarily call checked-in users inside to meet providers, and escort users out afterwards. Two other secondary doors are also used to the left and behind the sketched area.
                    </p>
                </div>

                <div id="desktop-ui" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Desktop UI</h2>
                    <p>
                        The Desktop interface is itself comprised of three main components:
                    </p>

                    <img className={`${styles.centeredImage} ${styles.desktopSketchImage}`} src="checkin/desktop-sketch.png"/>

                    <p>
                        <b>Navbar</b> indicates which of the 5 pages a user is on. <br/>
                        <br/>
                        <b>Instructions</b> contains paragraphs on how the displayed page should be used. <br/>
                        <br/>
                        <b>Body</b> holds the fields, options, and checkboxes for each page. 
                        <br/><br/> A “Cancel” and “Next” button pair resets the program and submits the displayed form respectively. <br/>
                        <br/>
                    </p>
                </div>
                <div id="observations" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Observations</h2>
                    <p>
                        Over two weekdays, I waited in the public seating area and observed 12 users from morning to afternoon.
                        <br/>
                        <br/>
                        I avoided observing up close how users filled out forms on the desktop check-in to respect their privacy.
                        Instead, I focused on observing how each user navigated the station, including how long they lingered on each section, and their interactions with staff.
                    </p>
                    <div className={projectStyles.centeredContent}>
                    <b>Key Observations</b>
                  <br/>
                  <ul>
  
                    <li>
                      8 users first approached staff in the Greeter Area instead of the desktops.
                      <ul>
                        <li>Half of these users stood and waited for several minutes while staff were busy, all without noticing the printed instructional page to use the computer.</li>
                        <li>Most of them seemed somewhat confused upon entering the check-in area, with the staff telling most to just use the computer.</li>
                      </ul>
                    </li>
  
                    <br/>
  
                    <li>
                      3 users were late to their appointment. These users tended to rush directly to a desktop, check in, then approach staff to apologize and see if they could still be seen.
                      <ul>
                        <li>User A spent 10 minutes rescheduling with staff, as User A’s schedule conflicted with many of the suggested times.</li>
                        <li>User A remarked: "<i>I’m a med student…I can’t control when my lab ends</i>.”</li>
                      </ul>
                    </li>
  
                    <br/>
  
                    <li>
                      3 users arrived holding a prescription from the downstairs pharmacy, with 2 stating they came for vaccinations. 
                    </li>
  
                    <br/>
  
                    <li>
                      The doors to the clinical area create a startling “Bang!” whenever opened, interrupting nearly everyone waiting from what they are doing and causing them to look up.
                    </li>

                  </ul>
                    </div>
                </div>

                <div id="interviews" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Interviews</h2>
                    <p>
                        Of those I observed, I interviewed Users A, B and H after they left the clinical area. I selected my interviewees based on how distinct their observed behaviors were to capture a more exhaustive range of patterns across diverse groups.
                        <br/> 
                        <br/>While I followed my eight questions, I also followed up on related topics that my interviewees expressed interest in discussing, while casually conversing afterwards and answering questions they had about my project.
                    </p>
                    <div className={projectStyles.centeredContent}>
                        <p>
                            <b>Interview Questions</b>
                            <br/>
                        </p>

                        <ol>
                            <li>Have you checked in here before today?</li>
                            <li>What initial reactions did you have when you arrived at the check in area today?</li>
                            <li>Did you experience any difficulty in understanding how to check in?</li>
                            <li>(If they used the computer) How was your experience navigating the computer?</li>
                            <li>What do you wish the check in process could accomplish differently?</li>
                            <li>
                            Were there any parts of checking in that you enjoyed? 
                            <ul>
                                <li>If so, which parts specifically?</li>
                            </ul>
                            </li>
                            <li>Do you have any other concerns about the check in process?</li>
                            <li>Is there anything else about your experience today you’d like to share?</li>
                        </ol>
                    </div>

                    <p>
                        I then summarized the responses in the following patterns:
                    </p>

                    <div className={projectStyles.centeredContent}>
                        <ul>
                            <li>Everyone unanimously felt the desktop program was cluttered, outdated, and hard to read, wishing that the process was more streamlined.</li>
                            <br/>
                            <li>Users B and H were both first time users and undergraduates on campus for less than 2 years. Both were unsure on which section to first approach and expressed anxiety while approaching staff and on how their presence could be acknowledged by clinicians.</li>
                            <br/>
                            <li>User H complained how, despite arriving early, the desktop check-in took far longer than they expected causing H to be seen late.</li>
                            <br/>
                            <li>User A, a med student, has been using the system very often for 5 years and claimed to be able to now check in extremely quickly “<i>without reading instructions.</i>”</li>
                            <br/>
                            <li>User A wished the desktop involved less physical contact, as once the student before A coughed on the keyboard as A was running late with no time to sanitize. They also wished a way existed to display a wait time and queue for those waiting.</li>
                        </ul>
                    </div>
                </div>

                <div id="personas" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Personas</h2>
                    <p>
                        Stemming from my research, I crafted two user personas, <b>Scattered Sakshi</b> and <b>Hesitant Harry</b>, who represented two discrete clusters of user behavior patterns I noticed.
                    </p>

                    <div className={styles.personasContainer}>
                        <div className={styles.persona}>
                            <div className={styles.personaCard}>
                                <img src="checkin/sakshi-portrait.png"/>
                                <h3 >Scattered Sakshi</h3>
                                <p>
                                    Sakshi is a med student, juggling her time between managing a research lab project, volunteering at RI hospital, and studying full time. Sakshi schedules biweekly visits to health services to manage an ongoing health condiiton between lab and class, without much time to spare.
                                </p>
                            </div>
                            <div className={styles.personaInfo}>
                                <b>
                                    Why Sakshi?
                                </b>
                                <p>
                                    Sakshi is based on observations of Users A, I, K, alongside findings from my conversation with User A, who all arrived late. Sakshi represents those who possess more familiarity with the check-in process and struggle to fit their appointments within their busy schedules.
                                </p>
                                <br/>
                                <b>Interface Problems</b>
                                <ul>
                                    <li>
                                        The keyboard and mouse are unhygienic, yet take too long to disinfect before use.
                                    </li>
                                    <li>
                                    No wait time or queue information is provided while waiting.
                                    </li>
                                    <li>
                                    Rescheduling any missed appointments takes a significant amount of time.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.personaEmpathyMap}>
                            <img src="checkin/sakshi-map.png"/>
                            </div>
                        </div>
                        <div className={styles.persona}>
                            <div className={styles.personaCard}>
                            <img src="checkin/harry-portrait.png"/>
                            <h3 >Hesitant Harry</h3>
                            <p>
                                Harry is a sophomore in his first in-person year at Brown, navigating dorm-life and living alone for their first time, and is a combination of Users B and H. Today is Harry’s first visit to Health Services to get a vaccination shot.
                            </p>
                            </div>
                            <div className={styles.personaInfo}>
                                <b>
                                    Why Harry?
                                </b>
                                <p>
                                    Harry is based off my observations of numerous users and conversations with Users B and H who required more staff guidance to successfully check in. Harry represents newer users less familiar to checking in, who feel pressured to avoid any mistakes.
                                </p>
                                <br/>
                                <b>Interface Problems</b>
                                <br/>
                                <ul>
                                    <li>
                                    A lack of appropriate affordances to indicate which section to first go to check in.
                                    </li>
                                    <li>
                                        Difficulty reading user interface elements on desktop.
                                </li>
                                    <li>
                                    Feels unseen by healthcare providers while checking in.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.personaEmpathyMap}>
                            <img src="checkin/harry-map.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="storyboard" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Storyboard</h2>

                    <p>
                        I then created the following storyboard to communicate the user journey of Scattered Sakshi. 
                        I decided to map Sakshi's journey. One reason behind why I chose Sakshi was that I felt Sakshi's user journey could highlight instances where the existing check-in process could leave frequent users disappointed, especially within the context of their broader life.
                    </p>

                    <div className={styles.storyboardContainer}>

                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel1.png"/>
                        <p>
                            Sakshi spends the day cycling through lectures, volunteer work, and finally her lab.
                        </p>
                        </div>

                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel2.png"/>
                        <p>
                            Sakshi is working at her lab, expecting to finish when the lab runs into an unexpected problem. Her Professor asks her stay and help out: “Just another 15 minutes!”
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel3.png"/>
                        <p>
                            30 minutes later, Sakshi sprints out of lab, barely catching the bus to 450 Brook St.
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel4.png"/>
                        <p>
                            She arrives at the building, slamming open the door and sprinting up the stairs, 
                            as the user before her leaves their booth while coughing right into the keyboard.
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel5.png"/>
                        <p>
                            After heading straight towards the nearest available counter, Sakshi, while grossed out, furiously clicks and types through the program just as she's done a thousand times.
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel6.png"/>
                        <p>
                            Through each section, Sakshi ignores the paragraphs of dense instructions and text; using her experience to speed through the clunky program ASAP to not miss her appointment.
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel7.png"/>
                        <p>
                            Unfortunately after the program says she is too late, she goes to the Greeter Area and makes her case:
                            "I'm sorry I'm late - I came here as fast as I could!"
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel8.png"/>
                        <p>
                            They spend the next ten minutes trying to reschedule. They go back and forth: “2:00PM? No I cant do then, could 2:00pm Wednesday work?" "...What about Thursday?...Friday? [and so on]...”                  
                        </p>
                        </div>


                        <div className={styles.storyboardPanel}>
                        <img src="checkin/panel9.png"/>
                        <p>
                            After scheduling another appointment tightly packed between her commitments, Sakshi walks away disappointed, back again where she first started. 
                        </p>
                        </div>


                        </div>
                </div>

                <div id="conclusion" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Conclusion</h2>
                    <p>
                        All in all, I really enjoyed being able to conduct this research project. Despite being a frequent user of the check in station myself, I was surprised at how my findings of what different people wanted and got out from their experience checking in could differ so much from my own expectations. It was also a great experience to apply web design principles I knew from theory to use HTML and CSS to create a responsive webpage to showcase my research process. As I learn more, I hope to sometime redesign the way users access clinical care at 450 Brook St. based on my findings.
                        <br/> <br/>
                        If you are taking a look at this page for CSCI 1300, I would love to hear about any and all suggestions you might have regarding my process.
                        <br/>
                        <br/>Thank you for taking a look at my work!
                    </p>
                </div>

            </div>
        </div>
    )
}
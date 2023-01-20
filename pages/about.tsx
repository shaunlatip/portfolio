import homeStyles from '../styles/Home.module.css'
import styles from '../styles/About.module.css'
import Head from 'next/head'
import Link from 'next/link'
import selfPortrait from '../public/about/portrait.jpeg'
import Image from 'next/image'

export default function About() {

    return (
        <div className="page">
            <Head>
                <title>Shaun Latip</title>
            </Head>
                <div className={homeStyles.pageWrapper}>
                <div className={`${homeStyles.section} ${styles.aboutSection}`}>
                    <br/>
                    <div className={styles.about}>
                        <div className={styles.aboutContent}>
                            <h3 className={styles.greeting}>
                                Hi there! I'm Shaun. Nice to meet you.
                            </h3>
                            <p>
                                <br/>
                                I'm a Computer Science student at Brown University with coursework spanning Urban Studies, Psychology, and Anthropology.
                                <br/>
                                <br/>
                                <span className="primary600">As a designer and researcher</span>, my design process centers on accessibility, context, and impact.
                                <br/>
                                <br/>
                                <span className="primary600">From my coursework in anthropology and as a volunteer peer counselor</span> (at  <Link className={homeStyles.primaryLink} target="_blank" href="https://projectlets.org/">Project LETS</Link>), I believe design must be user-centered to truly work. Understanding the context behind user needs, outside of assumptions, is difficult, yet critical, to impact.
                                <br/>
                                <br/>
                                {/* <span className="primary600">My background in Urban Studies</span> shapes me to view digital products as another facet of space; as places that people inhabit, depend upon, and often find central to their lives. I often draw from theories in Urban Studies to help fuel my design process accomodate the user first.
                                <br/>
                                <br/> */}
                                <span className="primary600">Living with ADHD, and as a</span>  <span className="primary600">first-generation international student</span>, I understand how difficult it can be to navigate systems built without accessibility in mind. I believe inclusive design is a powerful way to unlock potential for our communities; for we shape our designs, then afterwards, our designs shape us.
                                <br/>
                                <br/>
                                <br/>
                
                            </p>
                            <h3 className={styles.greeting}>
                                Before this, I started as...
                            </h3>
                            <ul className={styles.list}>
                                <br/>
                                <li>
                                    A front-end engineer building a <Link target="_blank" className={homeStyles.primaryLink} href="https://castyr.com/">social podcasting and listening platform</Link> featured on <Link target="_blank" className={homeStyles.primaryLink} href="https://www.producthunt.com/products/castyr?utm_source=badge-featured&utm_medium=badge#castyr">Product Hunt</Link>.
                                </li>
                                <li>
                                    An intern in an <Link target="_blank" className={homeStyles.primaryLink} href="https://digitaraya.com/">international startup accelerator</Link> working with early-stage startups to find product-market fit and grow.
                                </li>
                                <li>
                                    The leader of a <Link  target="_blank" className={homeStyles.primaryLink} href="https://www.youtube.com/watch?v=my4Ga_uBGKA&t=36s&ab_channel=BeritaSatu">nonprofit</Link> in Jakarta, Indonesia promoting community organization, public health access, and social entrepreneurship.
                                </li>
                                <li>
                                    A rock band guitarist and music producer, and (currently) a performing Jazz vocalist.
                                </li>
                            </ul>
                            <p>
                                <br/>
                                <br/>
                                If you've read all the way here, thank you for taking this journey with me! <br/><br/>
                                Reach out to me <Link target="_blank" className={homeStyles.primaryLink} href="mailto:shaunlatip@gmail.com">shaunlatip@gmail.com</Link> if you'd like to chat!
                            </p>
                        </div>
                        <Image
                        src={selfPortrait}
                        alt="Photo of me in a forest"
                        className={styles.aboutPortrait}/>                    
                        </div>
                    </div>
                </div>
        </div>
    )

}
import NavigationBar from '../components/NavigationBar'
import Head from 'next/head'
import projectStyles from '../styles/Project.module.css'
import styles from '../styles/PokemonRanch.module.css'

export default function PokemonRanch() {
    return (
        <>
            <Head>
            <title>Snazzy Portfolio</title>
            </Head>
            <div className="content">
                <div className={projectStyles.section}>
                    <div className={projectStyles.headline}>
                        <h1 className={styles.projectColorText}>Honeydew Pokemon Ranch</h1>
                        <p>An Interactive React web app to browse and make a team from certified cute pokemon</p>
                    </div>
                </div>


                <div id={projectStyles.subHeadline} className={projectStyles.section}>
                    <div className={projectStyles.subHeadline}>
                        <b>Jump to:  </b>
                        <a href="#background">Background</a> • <a href="#design-choices">Design Choices</a> • <a href="#development">Development</a>  • <a href="#takeaways">Takeaways</a>
                    </div>
                </div>

                <div id="demo" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2 className={styles.demoTitle}>Try the app out here!</h2>
                    <iframe className={styles.demoFrame} src="https://vegananteater125.github.io/development/"/>
                </div>

                <div id="background" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Background</h2>
                    <p>
                        I have always been a huge Pokemon fan growing up. Recently, as a part of Brown's UI/UX class, I decided to design and develop a Pokemon-themed app featuring some of the cutest pokemon that the games have to show, which is embedded to play with above. 
                        <br/><br/>The app lets users browse from a gallery of 12 cute pokemon, allowing the user to sort, group, and select pokemon based on their type, relative power level, photo, and more. 
                    </p>
                </div>

                <div id="design-choices" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Design Choices</h2>
                    <p>
                        I chose to have a gallery of Pokemon taking up most of the right-hand side content on the screen, with each pokemon represented through its own card. I focused on making the information within each card follow a hierarchy of importance, with names, types, and photos taking up more prominence through position and visual weight. 
                        The sidebar, which allows the user to sort or group the gallery pokemon, is also grouped by categories such as typing and sort orders. <br/><br/>For this project, I also decided to match my design with Google's Material UI design theme, which I tried to follow with the components that I designed by matching similar border-radiuses, colors, and spacings to make the design cohesive.
                    </p>
                </div>


                <div id="development" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Development</h2>
                    <p>
                        This project was coded in React and styled with plain CSS, while using certain UI components from Material UI. This project involved the creation of React components to better organize my code. This also involved the use of props to pass information between components and my App.js.
                        <br/><br/>My project also involved the management of state using React's useState() tool to keep track of the various sortings, filters, team selections, and options selected by the user. My code is located on <a target="_blank" rel="noreferrer" href="https://github.com/vegananteater125/development">this GitHub repository</a>, and is hosted on GitHub pages.
                    </p>
                </div>


                <div id="takeaways" className={`${projectStyles.section} ${projectStyles.contentSection}`}>
                    <h2>Takeaways</h2>
                    <p>
                        Although I have worked on React-based web applications before, this was the first time I completed an app of this scale without following online tutorials or guides. Designing and developing this app taught me a lot on how to match designs and code alongside UI systems such as Material UI. This project also taught me on how to effectively manage state across multiple components in React, and how to better use components to minimize repeated code.
                    </p>
                </div>



            </div>
        </>
    )
}
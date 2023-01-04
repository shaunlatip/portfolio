import homeStyles from '../styles/Home.module.css'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'

export default function About() {

    return (
        <div>
            <Head>
                <title>Shaun Latip</title>
            </Head>
            <NavigationBar/>
            <div className={homeStyles.pageWrapper}>

            </div>
            <Footer/>
        </div>
    )

}
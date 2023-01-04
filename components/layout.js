import NavigationBar from './NavigationBar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Snazzy Portfolio</title>
        </Head>
      <NavigationBar />
      <main>{children}</main>
    </>
  )
}
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
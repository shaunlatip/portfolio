import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
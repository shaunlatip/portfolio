import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function NavbarLayout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
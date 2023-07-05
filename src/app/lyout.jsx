import NavBar from './copy'
import Footer from './footer'

export default function Layout({children}) {
    return (
      <div className= "w-full">
        <NavBar color="white"/>
        {children}
        <Footer color="white"/>
      </div>
    )
  }
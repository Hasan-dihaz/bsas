import TopMenu from './topMenu'
import Footer from './footer'

export default function Layout({children}) {
    return (
      <div className= "max-w-screen-xl md:h-screen mx-auto flex flex-col justify-between">
        <TopMenu color="white"/>
        {children}
        <Footer color="white"/>
      </div>
    )
  }
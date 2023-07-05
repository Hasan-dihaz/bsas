import TopMenu from './topMenu'
import Footer from './footer'

export default function Layout({children}) {
    return (
      <div className= "w-full">
        <TopMenu color="white"/>
        {children}
        <Footer color="white"/>
      </div>
    )
  }
import TopMenu from './topMenu'
import Footer from './footer'

export default function Layout(props) {
    return (
      <div className=  { props.className + " max-w-screen-xl mx-auto 3xl:max-w-screen-2xl flex flex-col justify-between"}>
        <TopMenu color="white"/>
        {props.children}
        <Footer color="white"/>
      </div>
    )
  }
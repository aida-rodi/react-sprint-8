import Navbar from "../components/Navbar"
import welcomeGif from '../assets/welcomeGif.gif'

function Home() {

  return(
    <>
      <Navbar/>
      <div className="homePageDiv">
        <img src={welcomeGif} alt="gif" className="welcomeGif"/>
      </div>      
    </>
  )
}

export default Home
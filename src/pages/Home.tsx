import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Offer from '../components/Offer'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <StatsBar/>
        <Offer/>
        <Process/>
        <Testimonials/>
        <CTABanner/>
        <Footer/>
    </div>
    
  )
}

export default Home
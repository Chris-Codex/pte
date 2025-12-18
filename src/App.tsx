import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import ChooseUs from './components/ChooseUs'
import Classes from './components/Classess'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonial from './components/Testimonials'

function App() {

  return (
    <main className='relative'>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <ChooseUs />
      <Testimonial />
      <Classes />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

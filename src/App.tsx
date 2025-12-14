import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import ChooseUs from './components/ChooseUs'
import Classes from './components/Classess'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <main className='relative'>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <ChooseUs />
      <Classes />
    </main>
  )
}

export default App

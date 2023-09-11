import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import PokeDisplay from './components/PokeDisplay'

export default function Home() {
    return (
      <main>
        <Navbar />  
        <Drawer /> 
        <PokeDisplay />
        <Footer />  
      </main>
    )

  
  
}

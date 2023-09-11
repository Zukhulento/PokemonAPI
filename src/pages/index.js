import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Drawer from './components/Drawer'

export default function Home() {
  return (
    <main>
      <Navbar />  
      <Drawer /> 
      <Footer />  
    </main>
  )
}

import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import LogoCarousel from "../components/LogoCarousel"
import Devices from "../components/Devices"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Devices/>
    </>
  )
} 
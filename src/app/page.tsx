import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import LogoCarousel from "../components/LogoCarousel"
import Devices from "../components/Devices"
import Features from "../components/Features"
import Features2 from "../components/Features2"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Devices/>
      <Features/>
      <Features2/>
    </>
  )
} 
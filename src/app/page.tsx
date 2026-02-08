import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import LogoCarousel from "../components/LogoCarousel"
import Devices from "../components/Devices"
import Features from "../components/Features"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Devices/>
      <Features/>
    </>
  )
} 
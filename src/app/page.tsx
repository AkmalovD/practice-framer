import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#C5DBF0] via-[#E8F1F8] to-[#D8E8F4]">
        <Navbar />
        <Hero />
      </div>
    </>
  )
} 
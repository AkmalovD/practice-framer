'use client'

import { section } from "framer-motion/client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
// import { runde } from "../app/fonts"

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

            {/* Floating decorative gradient blobs */}
            <div className="absolute top-0 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-violet-200/25 via-purple-200/25 to-transparent rounded-full mix-blend-normal filter blur-3xl animate-blob" />
            <div className="absolute top-20 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/25 via-cyan-200/25 to-transparent rounded-full mix-blend-normal filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/20 via-rose-200/20 to-transparent rounded-full mix-blend-normal filter blur-3xl animate-blob animation-delay-4000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
                {/* Hero Content */}
                <div className="text-center max-w-3xl mx-auto space-y-8">

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1615] leading-tight"
                    >
                        Run your freelance business like a pro
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        All-in-one platform for managing clients, projects, and payments without the chaos.
                        From first contract to final invoice, we&apos;ve got your back.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <button className="group px-8 py-4 bg-[#1A1615] text-white rounded-full font-medium text-base hover:bg-[#2A2625] transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl">
                            Try Dreelio free
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="px-8 py-4 bg-transparent border-2 border-[#1A1615] text-[#1A1615] rounded-full font-medium text-base hover:bg-[#1A1615] hover:text-white transition-all duration-300 hover:scale-105">
                            See features
                        </button>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 md:mt-20 relative"
                >
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <Image
                            src="/Hero.webp"
                            alt="Dreelio Dashboard"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Decorative gradient blur */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-purple-200/20 via-blue-200/20 to-transparent blur-3xl -z-10" />
                </motion.div>

                {/* Trus Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-16 md:mt-20 text-center"
                >
                    <p className="text-sm md:text-base text-gray-500 font-medium">
                        Trusted by 7,000+ top startups, freelancers and studios
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
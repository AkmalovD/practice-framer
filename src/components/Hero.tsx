'use client'

import Image from "next/image"

const Hero: React.FC = () => {
    return (
        <>
            <section className="relative min-h-[80vh] bg-gradient-to-b from-[#9CC1E7] to-[#EDDFD0] flex items-center justify-center px-4 pt-40 overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/40 rounded-full blur-3xl" />

                {/* Clouds */}
                <div className="absolute left-0 top-1/4 w-64 h-64 opacity-80">
                <Image
                    src="/clouds.webp"
                    alt="Cloud decoration"
                    width={256}
                    height={256}
                    className="w-full h-auto"
                />
                </div>
                <div className="absolute right-0 top-1/3 w-64 h-64 opacity-80">
                <Image
                    src="/clouds.webp"
                    alt="Cloud decoration"
                    width={256}
                    height={256}
                    className="w-full h-auto transform scale-x-[-1]"
                />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fadeInUp">
                        Run your freelance<br />business like a pro
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                        All-in-one platform for managing clients, projects, and payments without
                        the chaos. From first contract to final invoice, we&apos;ve got your back.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-400">
                        <button className="px-8 py-4 bg-black text-white rounded-full font-semibold text-base hover:scale-105 hover:shadow-xl transition-all shadow-lg">
                            Try Dreelio free
                        </button>

                        <button className="px-8 py-4 bg-white/50 text-gray-900 rounded-full font-semibold text-base hover:scale-105 hover:bg-white/80 transition-all border border-gray-200">
                            See features
                        </button>
                    </div>

                    {/* Dashboard Preview Image */}
                    <div className="mt-16 md:mt-20 animate-fadeInScale animation-delay-600">
                        <div className="relative max-w-5xl mx-auto rounded-t-2xl overflow-hidden shadow-2xl animate-float">
                            <Image
                                src="/Hero2.webp"
                                alt="Dreelio Dashboard Preview"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
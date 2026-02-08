'use client'

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const Devices: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile')
    const [direction, setDirection] = useState(0)

    const handleTabChange = (newTab: 'mobile' | 'web') => {
        const tabOrder = ['mobile', 'web']
        const currentIndex = tabOrder.indexOf(activeTab)
        const newIndex = tabOrder.indexOf(newTab)

        setDirection(newIndex > currentIndex ? 1 : -1)
        setActiveTab(newTab)
    }   

    const tabs = [
        { id: 'mobile', label: 'Mobile App' },
        { id: 'web', label: 'Web App' }
    ] as const

    const slideVariants = {
        enter: (direction: number) => ({
          x: direction > 0 ? '100%' : '-100%',
        }),
        center: {
          x: 0,
        },
        exit: (direction: number) => ({
          x: direction > 0 ? '-100%' : '100%',
        })
      }

    return (
        <>
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <span className="text-sm text-[#614A44] text-xl font-semibold tracking-wider text-gray-500 uppercase">
                        Seamless across devices
                    </span>
                </div>

                <h2 className="text-6xl md:-text-5xl font-bold text-center mb-20">
                    Work from anywhere,<br />stay in sync
                </h2>

                <div className="relative rounded-3xl overflow-hidden bg-gray-100">
                    <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={activeTab}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ 
                                  x: { type: 'tween', duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeTab === 'mobile' ? '/mobile-app.webp' : '/web-app.webp'}
                                    alt={`${activeTab} view`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm p-2 rounded-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-black text-white shadow-lg'
                                        : 'bg-white/30 text-white hover:bg-white/50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Devices 
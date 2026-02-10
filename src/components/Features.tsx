'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { ListTodo, Clock, ClipboardList, FileText } from "lucide-react"

const features = [
    { label: 'Tasks', icon: ListTodo },
    { label: 'Time tracking', icon: Clock },
    { label: 'Timesheets', icon: ClipboardList },
    { label: 'Reports', icon: FileText },
]

const Features: React.FC = () => {
    return (
        <>
            <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                    <motion.div
                        className="w-full lg:w-1/2 flex"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-[#9CC1E7] to-[#EDDFD0] p-9 shadow-xl flex flex-col justify-center">
                            <Image
                                src='/projects-card.webp'
                                alt='Project management card'
                                width={530}
                                height={700}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <span className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                            Project management
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Keep every project moving forward
                        </h2>

                        <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                            <strong>Plan, assign, and deliver your work</strong> – all in one
                            place. With smart task tracking, deadlines, and real-time progress,
                            you stay organized and clients stay confident.
                        </p>

                        <button className="mt-8 px-8 py-4 bg-black text-white rounded-full font-semibold text-base hover:scale-105 hover:shadow-xl transition-all shadow-lg">
                            Try Dreelio free
                        </button>

                        <div className="mt-36 flex flex-wrap gap-3 justify-center lg:justify-start">
                            {features.map(({ label, icon: Icon }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
                                >
                                    <Icon className="w-4 h-4 text-gray-500" />
                                    {label}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Features
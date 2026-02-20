'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Settings } from 'lucide-react'
const Benefits: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-[#]">
        <div className="text-center mb-10">
          <span className="uppercase text-xs tracking-widest text-gray-500">Features</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Built for frilancers, <br />powered by simplicity
          </h2>
        </div>
        <div className="grid grif-cols-1 md:grind-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-semibold text-lg mb-2">
              Smart, flexible, and built around your business workflow
            </h3>
            <div className="flex gap-2 my-2">

            </div>
            <div className="flex gap-2">
              <div className="bg-white text-black rounded-full px-4 py-1 text-xs font-medium">
                Hide Dreelio branding
              </div>
              <div className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sx">
                <Settings/>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-bold">Personalize every detail</span>
            </p>
          </div>

          {/* Right card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-semibold text-lg mb-2">
              Integrates seamlessly with the tools you already use
            </h3>
            <div className="flex gap-2 my-2">

            </div>
            <p className="text-sm text-gray-600 mt-2">
              Seamless integrations. Set up automations, sync your data, and make your systems work smarter together.
            </p>
          </div>


        </div>
      </section>
    </>
  )
}

export default Benefits
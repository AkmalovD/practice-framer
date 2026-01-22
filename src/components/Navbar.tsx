'use client' 

import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, CircleX } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
                <div className='flex items-center justify-between h-16 md:h-20'>

                    {/* Logo Section - Left */}
                    <div className='flex items-center gap-2'>
                        <Image
                            src='/logo.svg'
                            alt='Logo'
                            width={32}
                            height={32}
                        />
                        <span className='text-xl font-bold text-[#1A1615]'>Dreelio</span>
                    </div>

                    {/* Navigation */}
                    <div className='hidden lg:flex items-center gap-8'>
                        <Link
                            href='#features'
                            className='text-[#1A1615] hover:text-gray-600 transition-colors text-[15px] font-medium'
                        >
                            Features
                        </Link>
                        <Link 
                            href='#benefits'
                            className='text-[#1A1615] hover:text-gray-600 transition-colors text-[15px] font-medium'
                        >
                            Benefits
                        </Link>
                        <Link 
                            href='#pricing'
                            className='text-[#1A1615] hover:text-gray-600 transition-colors text-[15px] font-medium'
                        >
                            Pricing
                        </Link>
                        <Link 
                            href='/blog-page'
                            className='text-[#1A1615] hover:text-gray-600 transition-colors text-[15px] font-medium'
                        >
                            Blog
                        </Link>
                        <Link 
                            href='/contact-us'
                            className='text-[#1A1615] hover:text-gray-600 transition-colors text-[15px] font-medium'
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className='hidden lg:flex items-center gap-4'>
                        <button className='px-6 py-2.5 bg-[#1A1615] text-white rounded-full font-medium text-[15px] hover:bg-[#2A2625] transition-all duration-300 hover:scale-105 '>
                            Try Dreelio free
                        </button>
                    </div>

                    {/* Mobile */}
                    <button 
                        className='lg:hidden'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        {isMobileMenuOpen ? (
                            <CircleX/>
                        ) : (
                            <Menu/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='lg:hidden boreder-t border-gray-100 bg-white'
                    >
                        <div className='px-4 py4 space-y-3'>
                            <Link
                                href='#features'
                                className='block py-2 text-[#1A1615] hover:text-gray-600 font-medium'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href='#benefits'
                                className='block py-2 text-[#1A1615] hover:text-gray-600 font-medium'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Benefits
                            </Link>
                            <Link
                                href='#pricing'
                                className='block py-2 text-[#1A1615] hover:text-gray-600 font-medium'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href='/blog-page'
                                className='block py-2 text-[#1A1615] hover:text-gray-600 font-medium'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href='/contact-us'
                                className='block py-2 text-[#1A1615] hover:text-gray-600 font-medium'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <button className='w-full mt-2 px-6 py-2.5 bg-[#1A1615] text-white rounded-full font-medium hover:bg-[#2A2625] transition-colors'></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar 
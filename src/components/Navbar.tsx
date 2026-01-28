'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav 
                className='hidden lg:block fixed top-0 left-0 right-0 z-50'
                initial={{ y: 0 }}
                animate={{
                    paddingLeft: isScrolled ? '80px' : '0px',
                    paddingRight: isScrolled ? '80px' : '0px',
                    paddingTop: isScrolled ? '12px' : '20px',
                    paddingBottom: isScrolled ? '12px' : '20px',
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                <motion.div
                    className='mx-auto rounded-[40px] overflow-hidden border border-solid'
                    animate={{
                        maxWidth: isScrolled ? '820px' : '1240px',
                    }}
                    style={{
                        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0)',
                        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
                        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
                        borderColor: isScrolled ? 'rgba(117, 115, 114, 0.15)' : 'rgba(117, 115, 114, 0)',
                        transition: 'background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), -webkit-backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                        <motion.div 
                            className='flex items-center justify-between'
                            animate={{
                                paddingTop: isScrolled ? '8px' : '12px',
                                paddingBottom: isScrolled ? '8px' : '12px',
                                paddingLeft: isScrolled ? '8px' : '32px',
                                paddingRight: isScrolled ? '8px' : '16px',
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            {/* Logo */}
                            <motion.div 
                                className='flex items-center gap-2'
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <motion.div
                                    animate={{
                                        width: isScrolled ? 22 : 28,
                                        height: isScrolled ? 22 : 28,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Image
                                        src='/logo.svg'
                                        alt='Logo'
                                        width={isScrolled ? 22 : 28}
                                        height={isScrolled ? 22 : 28}
                                        className='transition-all duration-500'
                                    />
                                </motion.div>
                                <motion.span 
                                    className='font-semibold text-[#1A1615]'
                                    animate={{
                                        fontSize: isScrolled ? '16px' : '18px',
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    Dreelio
                                </motion.span>
                            </motion.div>

                            {/* Navigation Links */}
                            <motion.div 
                                className='flex items-center'
                                animate={{
                                    gap: isScrolled ? '20px' : '28px',
                                }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.div
                                    animate={{
                                        fontSize: isScrolled ? '14px' : '15px',
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href='#features'
                                        className='text-[#1A1615] hover:text-gray-600 transition-colors font-medium'
                                    >
                                        Features
                                    </Link>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        fontSize: isScrolled ? '14px' : '15px',
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link 
                                        href='#benefits'
                                        className='text-[#1A1615] hover:text-gray-600 transition-colors font-medium'
                                    >
                                        Benefits
                                    </Link>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        fontSize: isScrolled ? '14px' : '15px',
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link 
                                        href='#pricing'
                                        className='text-[#1A1615] hover:text-gray-600 transition-colors font-medium'
                                    >
                                        Pricing
                                    </Link>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        fontSize: isScrolled ? '14px' : '15px',
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link 
                                        href='/blog-page'
                                        className='text-[#1A1615] hover:text-gray-600 transition-colors font-medium'
                                    >
                                        Blog
                                    </Link>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        fontSize: isScrolled ? '14px' : '15px',
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link 
                                        href='/contact-us'
                                        className='text-[#1A1615] hover:text-gray-600 transition-colors font-medium'
                                    >
                                        Contact Us
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button 
                                className='bg-[#1A1615] text-white rounded-full font-medium hover:bg-[#2A2625] transition-colors'
                                animate={{
                                    paddingLeft: isScrolled ? '20px' : '24px',
                                    paddingRight: isScrolled ? '20px' : '24px',
                                    paddingTop: isScrolled ? '8px' : '10px',
                                    paddingBottom: isScrolled ? '8px' : '10px',
                                    fontSize: isScrolled ? '14px' : '15px',
                                }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Try Dreelio free
                            </motion.button>
                        </motion.div>
                </motion.div>
            </motion.nav>

            {/* Mobile Navbar */}
            <nav className='lg:hidden sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                    <div className='flex items-center justify-between h-16'>
                        {/* Logo */}
                        <div className='flex items-center gap-2'>
                            <Image
                                src='/logo.svg'
                                alt='Logo'
                                width={28}
                                height={28}
                            />
                            <span className='text-xl font-bold text-[#1A1615]'>Dreelio</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label='Toggle menu'
                            className='p-2 text-[#1A1615]'
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className='border-t border-gray-100 bg-white'
                        >
                            <div className='px-4 py-4 space-y-3'>
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
                                <button className='w-full mt-2 px-6 py-2.5 bg-[#1A1615] text-white rounded-full font-medium hover:bg-[#2A2625] transition-colors'>
                                    Try Dreelio free
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default Navbar 
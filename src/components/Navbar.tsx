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
            <style jsx>{`
                .nav-link {
                    font-size: 20px;
                    padding: 8px 16px;
                    border-radius: 20px;
                    transition: background-color 0.3s ease;
                }
                .nav-link:hover {
                    background-color: rgba(26, 22, 21, 0.05);
                }
                .logo-text {
                    font-size: 24px;
                }
                .logo-image {
                    width: 32px;
                    height: 32px;
                }
                .cta-button {
                    padding: 0 24px;
                    font-size: 16px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .cta-button.scrolled {
                    padding: 0 28px;
                }
            `}</style>

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
                        maxWidth: isScrolled ? '1100px' : '1240px',
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
                                paddingTop: isScrolled ? '14px' : '12px',
                                paddingBottom: isScrolled ? '14px' : '12px',
                                paddingLeft: isScrolled ? '24px' : '32px',
                                paddingRight: isScrolled ? '12px' : '16px',
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            {/* Logo */}
                            <div className='flex items-center gap-2'>
                                <div className='logo-image'>
                                    <Image
                                        src='/logo.svg'
                                        alt='Logo'
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <span className='logo-text font-semibold text-[#1A1615]'>
                                    Dreelio
                                </span>
                            </div>

                            {/* Navigation Links */}
                            <motion.div 
                                className='flex items-center'
                                animate={{
                                    gap: isScrolled ? '32px' : '28px',
                                }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    href='#features'
                                    className='nav-link text-[#1A1615] transition-colors font-large'
                                >
                                    Features
                                </Link>
                                <Link 
                                    href='#benefits'
                                    className='nav-link text-[#1A1615] transition-colors font-medium'
                                >
                                    Benefits
                                </Link>
                                <Link 
                                    href='#pricing'
                                    className='nav-link text-[#1A1615] transition-colors font-medium'
                                >
                                    Pricing
                                </Link>
                                <Link 
                                    href='/blog-page'
                                    className='nav-link text-[#1A1615] transition-colors font-medium'
                                >
                                    Blog
                                </Link>
                                <Link 
                                    href='/contact-us'
                                    className='nav-link text-[#1A1615] transition-colors font-medium'
                                >
                                    Contact Us
                                </Link>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button 
                                className={`cta-button bg-[#1A1615] text-white rounded-full font-medium hover:bg-[#2A2625] transition-colors ${isScrolled ? 'scrolled' : ''}`}
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
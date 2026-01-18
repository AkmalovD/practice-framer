'use client' 

import logo from '@/public/logo.svg'
import Image from 'next/image'

const Navbar: React.FC = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-around h-16 md:h-20"></div>
            {/* Logo and name */}
            <div className='flex items-center justify-between'>
                <div className="flex justify-end items-center">
                    <Image
                    src="/public/logo.svg" 
                    alt="Logo" 
                    width={24} 
                    height={24}  
                    className="object-contain"
                    />
                </div>
                <div className='text-[#1A1615] text-xl font-bold'>
                    Dreelio
                </div>
            </div>
            {/* Navigation */}
            <div className='flex items-center justify-around max-w-2xl mx-auto'>
                
            </div>
            <div className='lg:flex items-center gap-8'></div>
        </div>
    )
}

export default Navbar 
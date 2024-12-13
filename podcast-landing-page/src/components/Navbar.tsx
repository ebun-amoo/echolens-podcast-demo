'use client';

import React, { useState } from 'react'
import { AlignJustify, Podcast, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    // const isActivePath = (path: string) => pathname === path;
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const links = [
        { href: '/', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#episodes', label: 'Episodes' },
        { href: '#blog', label: 'Blog' },
    ];

    return (
        <nav className="flex flex-col md:flex-row md:justify-between bg-accent_white lg:mt-8 mb-4 md:items-center">
            <div className='flex flex-row justify-between'>
                <div className="flex">
                    <Podcast color='#FF6D00' size={30}/>
                    <p className='text-main_black lg:text-2xl text-xl font-bold ml-2'>Echolens</p>
                </div>
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(true)} className={isOpen? 'hidden': 'block'}>
                        <AlignJustify />
                    </button>
                    {isOpen &&
                        <button
                            onClick={() => setIsOpen(false)}>
                            <X/>
                        </button>
                    }
                </div>
            </div>
            <div className={`flex text-lg md:block md:space-x-6 space-y-2 md:my-0 my-3 md:space-y-0 md:flex-row md:justify-between md:items-center ${isOpen? 'flex-col block': 'hidden'}`}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                            setActiveLink(link.href), 
                            setIsOpen(false)
                        }}
                        className={`${
                            activeLink === link.href
                                ? 'text-main_orange font-medium'
                                : 'text-accent_gray font-normal'
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className={`md:space-x-3 space-y-3 md:space-y-0 flex md:flex-row flex-col md:block ${isOpen? 'block': 'hidden'}`}>
                <button className='border-main_orange py-2 px-6 border text-main_orange rounded-md'>
                    Log In
                </button>
                <button className='bg-main_orange py-2 px-6 rounded-md text-accent_white'>
                    Subscribe
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

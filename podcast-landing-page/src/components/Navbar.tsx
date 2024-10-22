'use client';

import React from 'react';
import Image from 'next/image';
import echoLens from '../../public/echolensLogo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="flex justify-between items-center py-4 bg-accent_white px-6">
            <div className="text-main_black text-xl font-bold flex">
                <Image src={echoLens} alt='Echolens logo' className='mr-2'/>
                Echolens
            </div>
            <ul className="flex space-x-6 ml-6">
                <li>
                    <Link href="/" className={`${isActive('/') ? 'text-main_orange font-medium' : 'text-accent_gray font-normal'}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={`${isActive('/about') ? 'text-main_orange font-medium' : 'text-accent_gray font-normal'}`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/episodes" className={`${isActive('/episodes') ? 'text-main_orange font-medium' : 'text-accent_gray font-normal'}`}>
                        Episodes
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className={`${isActive('/blog') ? 'text-main_orange font-medium' : 'text-accent_gray font-normal'}`}>
                        Blog
                    </Link>
                </li>
            </ul>
            <div className='space-x-3 flex ml-2'>
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

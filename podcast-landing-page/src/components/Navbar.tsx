import React from 'react';
import Image from 'next/image';
import echoLens from '../../public/echolensLogo.png'

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center py-4 bg-accent_white px-6">
            <div className="text-main_black text-xl font-bold flex">
                <Image src={echoLens} alt='Echolens logo' className='mr-2'/>
                Echolens
            </div>
            <ul className="flex space-x-6 text-accent_gray ml-6">
                <li><a href="/" className='text-main_orange font-medium'>Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/episodes">Episodes</a></li>
                <li><a href="/contact">Blog</a></li>
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

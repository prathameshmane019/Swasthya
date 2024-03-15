'use client'
import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-[#490c57] relative">
            <div className="container mx-auto px-4 h-16 py-2 md:flex md:justify-between md:items-center">
                <div className="flex items-center align-middle justify-between">
                    <span className="text-lg font-semibold">Swasthya Samridhhi</span>
                    <button onClick={toggleMenu} className="block md:hidden  focus:outline-none">
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        ) : (
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm-16 5h16v2H4v-2z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} ml-0 lg:ml-[30%] mt-4 md:mt-0 bg-white`}>
                    <div className="text-lg md:flex-grow md:flex md:justify-end">
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-200 mr-4">Home</a>
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-200 mr-4">About</a>
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-200 mr-4">Services</a>
                        <a href="/login" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-200">Contact</a>
                    </div>
                    
                </div>
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} bg-white text-lg md:flex-grow md:flex md:justify-end`}>
                        <a href="/login" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-200">Login</a>
                </div>
            </div>
        </nav>
    );
}

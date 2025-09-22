'use client'; // 🔥 Must be first line

import React, { useState, useEffect } from 'react';
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
    const [active, setActive] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (id) => {
        setActive(id);
        setIsOpen(false); // close mobile menu after clicking
    };

    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const links = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'projects', label: 'Projects', href: '#Projects' },
        { id: 'contact', label: 'Contact', href: '#Contact' },
    ];

    return (
        <header className="w-full bg-black fixed font-rancho top-0 left-0 z-50 shadow-md">
            <div className="mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="text-xl font-bold text-purple-400">
                        <img src="/Blue & Black Globe Logo.png" alt="Logo" className="h-19 w-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => handleClick(link.id)}
                                className={`relative text-gray-300 font-medium transition-all duration-300 hover:text-purple-400
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-purple-500
                  after:w-0 hover:after:w-full after:transition-all after:duration-300
                  ${active === link.id ? 'text-purple-400 after:w-full' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CV Button (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            href="/SojiburAsif-Resume.pdf"
                            download
                            className="flex items-center space-x-2 text-sm font-semibold text-white px-4 py-1.5 rounded hover:bg-gray-900 border border-purple-500 transition-all"
                        >
                            <FaDownload className="w-4 h-4 text-purple-500" />
                            <span>Download CV</span>
                        </Link>

                    </div>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="lg:hidden text-white text-2xl cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile Side Drawer Menu */}
            <div
                className={`lg:hidden fixed top-20 right-0 w-3/4 max-w-xs h-full bg-black z-40 shadow-lg border-l border-purple-900 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col items-start px-6 py-8 space-y-6">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => handleClick(link.id)}
                            className={`block w-full text-lg font-medium transition-all duration-200 ${active === link.id ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <Link
                        href="/SojiburAsif-Resume.pdf"
                        download
                        className="mt-4 inline-block text-sm font-semibold px-4 py-1.5 rounded hover:bg-purple-600/10 transition-all"
                    >
                        Download CV
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

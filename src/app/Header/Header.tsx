'use client';

import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaDownload,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে হেডারের ব্যাকগ্রাউন্ড পরিবর্তন হওয়ার ইফেক্ট
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    setIsOpen(false);
  };

  // href এর id গুলো সব ছোট হাতের অক্ষরে (lowercase) করা হয়েছে সামঞ্জস্য রাখার জন্য
  const links = [
    { id: 'home', label: 'Home', href: '#home', icon: <FaHome /> },
    { id: 'about', label: 'About', href: '#about', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', href: '#TechStack', icon: <FaProjectDiagram /> },
    { id: 'projects', label: 'Projects', href: '#Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', href: '#Contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-black/70 backdrop-blur-lg border-white/10 py-2 shadow-lg'
          : 'bg-transparent border-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-1 lg:px-3 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" onClick={() => setActive('home')}>
              {/* লোগো বড় করার জন্য h-16 বা h-20 ব্যবহার করতে পারেন */}
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={64}
                className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => handleClick(link.id)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex items-center gap-2 text-sm uppercase tracking-wider font-bold transition-all duration-300
                  ${active === link.id ? 'text-purple-400' : 'text-gray-300 hover:text-white'}
                `}
              >
                <span className={`${active === link.id ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'} transition-colors`}>
                  {link.icon}
                </span>
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Controls (Desktop CV Button) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center"
          >
            <Link
              href="/SojiburAsif.Resume.pdf"
              download
              className="group relative flex items-center gap-3 px-8 py-3 bg-transparent text-white text-sm font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 border border-purple-600/50 hover:border-purple-500"
            >
              {/* Background Slide Effect */}
              <span className="absolute inset-0 w-0 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full -z-10"></span>

              {/* Top Right Accent - Small Corner Cut Style (Optional) */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>

              <FaDownload className="text-purple-500 group-hover:text-white transition-colors duration-300" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Resume
              </span>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] pointer-events-none"></div>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 text-2xl transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-full bg-[#0a0a0a] border-l border-white/5 z-50 flex flex-col px-8 py-24 shadow-2xl lg:hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col space-y-6 mt-4">
                {links.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleClick(link.id)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 text-lg font-black uppercase tracking-widest transition-colors duration-300
                      ${active === link.id ? 'text-purple-500' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    <span className="text-xl">
                      {link.icon}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto mb-10"
              >
                <Link
                  href="/SojiburAsif.Resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-purple-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-purple-700 transition-colors"
                >
                  <FaDownload />
                  Download Resume
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
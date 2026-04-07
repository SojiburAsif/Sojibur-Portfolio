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
  FaFilePdf,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDocs, setShowDocs] = useState(false);


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
                style={{ width: 'auto', height: 'auto' }}
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

          {/* Right Controls (Desktop CV Button - Hover Triggered) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setShowDocs(true)}
            onMouseLeave={() => setShowDocs(false)}
            className="hidden lg:flex items-center relative group/doc"
          >
            <button
              className="group relative flex items-center gap-3 px-8 py-3 bg-transparent text-white text-sm font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 border border-purple-600/50 group-hover/doc:border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.1)] active:scale-95"
            >
              <span className={`absolute inset-0 bg-purple-600 transition-all duration-300 ease-out -z-10 ${showDocs ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              <FaDownload className={`${showDocs ? 'text-white' : 'text-purple-500 group-hover:text-white'} transition-colors duration-300`} />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Documents</span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showDocs && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-0 pt-3 w-56 z-50 rounded-none drop-shadow-[0_20px_50px_rgba(147,51,234,0.2)]"
                >
                  <div className="bg-[#0a0a0a] border border-white/10 overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-b from-purple-600/5 to-transparent pointer-events-none"></div>
                    
                    <a
                      href="/CV & Resume/SojiburAsif.Resume (1).pdf"
                      download="SojiburAsif_Resume.pdf"
                      className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/5 group/item"
                    >
                      <div className="p-2 bg-purple-600/10 text-purple-500 group-hover/item:bg-purple-600 group-hover/item:text-white transition-all">
                        <FaFilePdf size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Full_Resume</span>
                        <span className="text-[8px] text-gray-500 font-bold uppercase">Ready_to_Download</span>
                      </div>
                    </a>

                    <a
                      href="/CV & Resume/SojiburAsif.CV (1).pdf"
                      download="SojiburAsif_CV.pdf"
                      className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="p-2 bg-blue-600/10 text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                        <FaFilePdf size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Academic_CV</span>
                        <span className="text-[8px] text-gray-500 font-bold uppercase">Ready_to_Download</span>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

                {/* Mobile Documents Quick Access */}
                <div className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500/50">Downloads</span>
                  
                  <a
                    href="/CV & Resume/SojiburAsif.Resume (1).pdf"
                    download="SojiburAsif_Resume.pdf"
                    className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 group transition-all"
                  >
                    <div className="p-2 bg-purple-600/10 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <FaFilePdf size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">Full_Resume</span>
                      <span className="text-[8px] text-gray-500 font-bold uppercase">PDF_Download</span>
                    </div>
                  </a>

                  <a
                    href="/CV & Resume/SojiburAsif.CV (1).pdf"
                    download="SojiburAsif_CV.pdf"
                    className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 group transition-all"
                  >
                    <div className="p-2 bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <FaFilePdf size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">Academic_CV</span>
                      <span className="text-[8px] text-gray-500 font-bold uppercase">PDF_Download</span>
                    </div>
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto mb-10"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 transition-colors"
                >
                  Close Menu
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
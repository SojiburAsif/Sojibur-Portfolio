'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black text-gray-400 py-6 border-t border-purple-600 text-center font-FiraSans">

      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-8 right-6 bg-[#0b1220] border border-gray-800 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-105 focus:outline-none"
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, -8, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaArrowUp className="text-purple-400" size={18} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <img
            src="/Logo/logo.png"
            alt="Sojibur Logo"
            width={96}
            height={96}
            className="h-24 w-auto"
          
          />
        </div>

        <p className="mt-2 text-sm sm:text-base">
          © 2025. All rights reserved by{' '}
          <span className="text-purple-400 font-semibold">Sojibur Rahman Asif</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

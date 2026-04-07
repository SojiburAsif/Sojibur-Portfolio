'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      {/* --- Floating WhatsApp Button --- */}
      <motion.a
        href="https://wa.me/8801840587095"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] border-2 border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -10, 0] 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          default: { duration: 0.4 }
        }}
      >
        <FaWhatsapp size={32} />
        <span className="absolute inset-0 bg-[#25D366] opacity-20 animate-ping rounded-full"></span>
      </motion.a>

      {/* --- Footer Section --- */}
      <footer className="relative bg-black text-gray-400 py-10 border-t border-purple-600/20">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Logo Section - Reduced Size */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Image
              src="/logo.png" 
              alt="Sojibur Logo"
              width={180} 
              height={70}
              className="h-16 w-auto brightness-125 object-contain"
            />
          </motion.div>

          {/* Navigation Links - Compact */}
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-6 text-[10px] font-black uppercase tracking-[0.4em]">
            <a href="#Home" className="text-gray-500 hover:text-purple-500 transition-all duration-300">Home</a>
            <a href="#Projects" className="text-gray-500 hover:text-purple-500 transition-all duration-300">Projects</a>
            <a href="#Contact" className="text-gray-500 hover:text-purple-500 transition-all duration-300">Contact</a>
          </nav>

          {/* Divider Line */}
          <div className="w-full max-w-xs h-[1px] bg-neutral-900 mb-6"></div>

          {/* Copyright Text */}
          <motion.div 
            className="text-center space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
              © 2026. <span className="text-purple-600">All_Rights_Reserved.</span>
            </p>
            <p className="text-[9px] font-medium tracking-widest text-gray-600">
              DESIGNED & DEVELOPED BY 
              <span className="text-white font-black block mt-1 text-[11px]">SOJIBUR RAHMAN ASIF</span>
            </p>
          </motion.div>

         
        </div>
      </footer>
    </>
  );
};

export default Footer;
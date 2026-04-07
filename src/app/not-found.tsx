'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C1FF00]/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="relative inline-block mb-8">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-[#C1FF00]"
          >
            <Ghost size={120} strokeWidth={1.5} />
          </motion.div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/5 blur-md rounded-full"></div>
        </div>

        <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
          Lost in <span className="text-[#C1FF00]">Space?</span>
        </h2>
        
        <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg font-medium">
          The page you are looking for has been moved, deleted, or never existed in this dimension.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 px-8 py-4 bg-[#C1FF00] text-black font-black uppercase text-sm tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(193,255,0,0.3)]"
          >
            <Home size={18} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-black uppercase text-sm tracking-widest rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C1FF00]/40 rounded-full"
          animate={{
            x: [Math.random() * 100, Math.random() * -100],
            y: [Math.random() * 100, Math.random() * -100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

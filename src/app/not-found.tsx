'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Ghost, Rocket } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Animated Icon Container */}
        <div className="relative inline-block mb-12">
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 8, -8, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <Ghost size={140} strokeWidth={1} />
          </motion.div>
          
          {/* Shadow beneath ghost */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-purple-900/30 blur-xl rounded-[100%]"
          ></motion.div>
        </div>

        {/* Huge 404 Background Text */}
        <h1 className="text-[10rem] md:text-[18rem] font-black leading-none tracking-tighter text-white/[0.03] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 font-mono">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Space?</span>
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto text-lg md:text-xl font-light leading-relaxed">
            Oops! The coordinates you provided lead to a void. This page has drifted out of orbit.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link 
            href="/"
            className="group relative flex items-center gap-3 px-10 py-4 bg-purple-600 text-white font-bold uppercase text-sm tracking-[0.2em] rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
            <span className="relative flex items-center gap-2">
              <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
              Back to Base
            </span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-10 py-4 bg-transparent text-gray-300 font-bold uppercase text-sm tracking-[0.2em] rounded-full border border-gray-800 hover:border-purple-500/50 hover:text-white hover:bg-white/[0.02] transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>

      {/* Floating Stars/Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
    </div>
  );
}
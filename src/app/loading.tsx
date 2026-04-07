'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#9333ea 1px, transparent 1px), linear-gradient(90deg, #9333ea 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative flex flex-col items-center">
        
        {/* Main Loading Animation Container */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          
          {/* Outer Pulse Orbit */}
          <motion.div
            className="absolute inset-0 border-[0.5px] border-purple-500/10 rounded-full"
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Outer Rotating Segmented Ring */}
          <motion.div
            className="absolute w-28 h-28 border-y-2 border-purple-600 rounded-full opacity-40 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Fast Counter-Rotating Ring */}
          <motion.div
            className="absolute w-20 h-20 border-x border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Central Monolithic Diamond Core */}
          <motion.div 
            className="relative w-8 h-8 bg-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.6)] flex items-center justify-center transform rotate-45"
            animate={{ 
              rotate: [45, 135, 45],
              scale: [1, 1.1, 1],
              backgroundColor: ["#9333ea", "#7c3aed", "#9333ea"] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Core Glow Particle */}
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_#fff]" />
          </motion.div>
        </div>

        {/* Text and Progress UI */}
        <div className="mt-20 flex flex-col items-center gap-4">
          
          {/* Loading Identifier */}
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-1.5 h-1.5 bg-purple-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.p 
              className="text-[11px] font-black uppercase tracking-[0.6em] text-white/90"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              System_Executing
            </motion.p>
          </div>

          {/* Industrial Progress Bar */}
          <div className="w-48 h-[2px] bg-neutral-900 overflow-hidden relative border-x border-white/5">
            <motion.div 
              className="absolute h-full bg-gradient-to-r from-transparent via-purple-600 to-transparent shadow-[0_0_15px_#9333ea]"
              animate={{ left: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              style={{ width: "60%" }}
            />
          </div>

        </div>
      </div>

      {/* Extreme Low-latency Flare */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-purple-950/5 to-transparent pointer-events-none" />
    </div>
  );
}
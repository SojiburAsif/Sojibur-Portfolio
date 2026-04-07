'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
      
      {/* Red Glow for Error */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center z-10 max-w-2xl"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border border-red-600/20 rounded-2xl mb-8 text-red-500">
          <AlertCircle size={40} />
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
          Something went <span className="text-red-500">Wrong</span>
        </h2>
        
        <p className="text-gray-500 mb-10 text-lg font-medium">
          An unexpected error occurred. Don t worry, it s not your fault (probably).
          {error.digest && (
            <code className="block mt-4 text-xs font-mono text-gray-600 bg-neutral-900 py-2 px-4 rounded-lg">
              Error Digest: {error.digest}
            </code>
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-black uppercase text-sm tracking-widest rounded-full hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
          
          <Link 
            href="/"
            className="flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-black uppercase text-sm tracking-widest rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

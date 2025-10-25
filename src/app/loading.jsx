'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
    opacity: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-5 h-5 rounded-full bg-purple-500"
            initial={{ y: 0, opacity: 0.6 }}
            animate={{ y: -12, opacity: 1 }}
            transition={{
              ...bounceTransition,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

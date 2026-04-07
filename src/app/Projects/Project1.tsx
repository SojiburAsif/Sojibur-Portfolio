'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiStripe,
} from 'react-icons/si';

const techStack = [
  { Icon: FaReact, label: 'React', color: 'text-cyan-400' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
  { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
  { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
  { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-400' },
  { Icon: SiJsonwebtokens, label: 'JWT', color: 'text-rose-400' },
  { Icon: SiStripe, label: 'Stripe', color: 'text-indigo-400' },
];

const Project1 = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Swiper / Image Section (Occupies 7 columns) */}
          <div className="lg:col-span-7 order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Sharp Decorative Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 group-hover:opacity-40 transition duration-500 blur-sm"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden">
                <Swiper
                  spaceBetween={0}
                  navigation={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  loop={true}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay, Pagination]}
                  className="project-swiper w-full aspect-video sm:h-[400px] lg:h-[450px]"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <SwiperSlide key={i} className="bg-black flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/Project-1/img${i + 1}.png`}
                          alt={`Workfleed Slide ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 70vw"
                          className="object-contain md:object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 bg-purple-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                Full Stack Case Study
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content Section (Occupies 5 columns) */}
          <div className="lg:col-span-5 order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  WORKFLEED
                </h2>
                <p className="text-purple-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                  Employee Management Ecosystem
                </p>
                <div className="h-1 w-12 bg-purple-600"></div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Workfleed is a high-performance, role-based management system. It bridges the gap between 
                <span className="text-white font-medium"> Admin oversight, HR logistics, and Employee productivity </span> 
                with real-time data synchronization and secure financial processing.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-10">
                {[
                  'Multi-Role Dashboards (Admin, HR, Employee)',
                  'Automated Payroll & Stripe Integration',
                  'Worksheet Tracking with Real-time Updates',
                  'Secure JWT & Firebase Authentication'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <FaCheckCircle className="text-purple-500 group-hover:scale-110 transition-transform" size={14} />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Grid */}
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Engineered With:</h4>
              <div className="grid grid-cols-2 gap-2 mb-10">
                {techStack.map(({ Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-3 hover:bg-white/[0.08] transition-colors group"
                  >
                    <Icon className={`${color} text-lg group-hover:scale-110 transition-transform`} />
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-tight">{label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://resonant-syrniki-b1e2dc.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
                >
                  <FaExternalLinkAlt className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Live Preview
                </a>

                <a
                  href="https://github.com/SojiburAsif/Workfleed.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-transparent border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
                >
                  <FaGithub size={16} />
                  Source Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Inline styles for Swiper Customization */}
      <style jsx global>{`
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: #fff !important;
          background: rgba(0,0,0,0.5);
          width: 40px !important;
          height: 40px !important;
          &::after { font-size: 14px !important; font-weight: bold; }
        }
        .project-swiper .swiper-pagination-bullet {
          background: #a855f7 !important;
          border-radius: 0 !important; /* Sharp corners */
        }
      `}</style>
    </div>
  );
};

export default Project1;
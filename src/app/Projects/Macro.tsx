'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiExpress,
} from 'react-icons/si';

// Image indices for ServZen (Adjust based on your public folder)
const slides = [1, 2, 3, 4, 5]; 

const techStack = [
  { Icon: FaReact, label: 'React', color: 'text-cyan-400' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
  { Icon: SiExpress, label: 'Express.js', color: 'text-gray-300' },
  { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
  { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
  { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-400' },
  { Icon: SiJsonwebtokens, label: 'JWT', color: 'text-rose-400' },
];

const Macro = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
      
          <div className="lg:col-span-7 order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Sharp Decorative Border with Purple Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 group-hover:opacity-40 transition duration-500 blur-sm"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden">
                <Swiper
                  spaceBetween={0}
                  navigation={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  loop={true}
                  autoplay={{ delay: 3800, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay, Pagination]}
                  className="project-swiper w-full aspect-video sm:h-[400px] lg:h-[450px]"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SwiperSlide key={num} className="bg-black flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/Project-2/img${num === 1 ? 10 : num === 2 ? 11 : num === 3 ? 12 : num === 4 ? 13 : num === 5 ? 14 : 18}.png`}
                          alt={`Macro System screenshot ${num}`}
                          fill
                          className="object-contain md:object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Sharp Floating Badge */}
              <div className="absolute top-4 left-4 z-10 bg-purple-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                Macro System
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content Section */}
          <div className="lg:col-span-5 order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                   <FaBriefcase className="text-purple-500" size={18} />
                   <h2 className="text-3xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 uppercase">
                    Macro
                  </h2>
                </div>
                <p className="text-purple-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                  Automation & Integration Hub
                </p>
                <div className="h-1 w-12 bg-purple-600"></div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Macro is a specialized <span className="text-white font-medium">Automation and Workflow Integration Hub</span>. It streamlines complex business processes by connecting multiple APIs and triggers to execute high-efficiency macro operations.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-10">
                {[
                  'Custom Macro Workflow Automation',
                  'Seamless Multi-API Integration',
                  'Real-time Execution Tracking',
                  'Advanced Trigger-based Logic'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <FaCheckCircle className="text-purple-500 group-hover:scale-110 transition-transform" size={14} />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Grid */}
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Built With:</h4>
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
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
                >
                  <FaExternalLinkAlt className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Live System
                </a>

                <a
                  href="https://github.com/SojiburAsif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-transparent border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
                >
                  <FaGithub size={16} />
                  View Source
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sharp Pagination Styles */}
      <style jsx global>{`
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: #fff !important;
          background: rgba(0,0,0,0.6);
          width: 45px !important;
          height: 45px !important;
          border: 1px solid rgba(255,255,255,0.1);
          &::after { font-size: 16px !important; font-weight: 900; }
        }
        .project-swiper .swiper-pagination-bullet {
          background: #a855f7 !important; /* Purple for Macro */
          border-radius: 0 !important; 
          width: 12px;
          height: 3px;
        }
      `}</style>
    </div>
  );
};

export default Macro;
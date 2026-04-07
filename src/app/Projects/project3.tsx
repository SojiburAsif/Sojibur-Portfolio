'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaDatabase } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiJsonwebtokens,
  SiFramer,
  SiExpress,
} from 'react-icons/si';

const techStack = [
  { Icon: SiNextdotjs, label: 'Next.js', color: 'text-white' },
  { Icon: SiExpress, label: 'Express.js', color: 'text-gray-400' },
  { Icon: FaReact, label: 'React', color: 'text-cyan-400' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
  { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
  { Icon: FaDatabase, label: 'BetterAuth', color: 'text-yellow-400' },
];

import Image from 'next/image';
import { FaBriefcase } from 'react-icons/fa';

const Project3 = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Swiper Section */}
          <div className="lg:col-span-7 order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Sharp Decorative Border with Orange Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 opacity-20 group-hover:opacity-40 transition duration-500 blur-sm"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden">
                <Swiper
                  spaceBetween={0}
                  navigation={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  loop={true}
                  autoplay={{ delay: 3200, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay, Pagination]}
                  className="project-swiper w-full aspect-video sm:h-[400px] lg:h-[450px]"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SwiperSlide key={num} className="bg-black flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/project-3/img${num}.png`}
                          alt={`ServZen screenshot ${num}`}
                          fill
                          className="object-contain md:object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Sharp Floating Badge */}
              <div className="absolute top-4 left-4 z-10 bg-orange-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                Service Hub
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
                   <FaBriefcase className="text-orange-500" size={18} />
                   <h2 className="text-3xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 uppercase">
                    ServZen
                  </h2>
                </div>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                  Premium Service Marketplace
                </p>
                <div className="h-1 w-12 bg-orange-600"></div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                ServZen is a specialized <span className="text-white font-medium">marketplace for professional services</span>. It provides a clean, high-performance interface for users to discover, book, and manage local services with an integrated review and rating system.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-10">
                {[
                  'User-Friendly Service Discovery & Filters',
                  'Interactive Booking & Management System',
                  'Dynamic Review & Feedback Integration',
                  'Optimized Dashboard for Service Providers'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <FaCheckCircle className="text-orange-500 group-hover:scale-110 transition-transform" size={14} />
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
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] group"
                >
                  <FaExternalLinkAlt className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Live Preview
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
          background: #f97316 !important; /* Orange for Project 3 */
          border-radius: 0 !important; 
          width: 12px;
          height: 3px;
        }
      `}</style>
    </div>
  );
};

export default Project3;
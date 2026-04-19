'use client';

import React from 'react';
import Image from 'next/image';
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
  { Icon: SiPrisma, label: 'Prisma ORM', color: 'text-emerald-400' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: 'text-blue-500' },
  { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
  { Icon: FaDatabase, label: 'BetterAuth', color: 'text-yellow-400' },
];

const Project2 = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Swiper / Image Section */}
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
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay, Pagination]}
                  className="project-swiper w-full aspect-video sm:h-[400px] lg:h-[450px]"
                >
                  {/* SkillBridge Screenshots (Assumed path) */}
                  {[1, 2, 3, 4, 5 , 6,7,8].map((num) => (
                    <SwiperSlide key={num} className="bg-black flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/Project-2/img${num}.png`}
                          alt={`MentorFlow Slide ${num}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 70vw"
                          className="object-contain md:object-cover"
                          priority={num === 1}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                Full-Stack Marketplace
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
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  SKILLBRIDGE
                </h2>
                <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                  Tutor Booking & Skill Exchange Platform
                </p>
                <div className="h-1 w-12 bg-blue-600"></div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                SkillBridge is a robust <span className="text-white font-medium">Tutor Booking Platform</span> designed to connect students with expert mentors. It features a comprehensive scheduling system, secure payments, and a dynamic database architecture built for scale.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-10">
                {[
                  'Advanced Tutor Search & Filtering',
                  'Real-time Booking & Scheduling System',
                  'Secure Student/Tutor Dashboards',
                  'Relational Database with Prisma & PostgreSQL'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <FaCheckCircle className="text-blue-500 group-hover:scale-110 transition-transform" size={14} />
                    <span className="text-sm text-gray-300 font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Grid */}
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Core Technology:</h4>
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
                  href="https://mentor-flow-fontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] group"
                >
                  <FaExternalLinkAlt className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Live Demo
                </a>

                <a
                  href="https://github.com/SojiburAsif/MentorFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-transparent border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
                >
                  <FaGithub size={16} />
                  GitHub Source
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Global Swiper Customization */}
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
          background: #2563eb !important;
          border-radius: 0 !important; 
          width: 12px;
          height: 3px;
        }
      `}</style>
    </div>
  );
};

export default Project2;
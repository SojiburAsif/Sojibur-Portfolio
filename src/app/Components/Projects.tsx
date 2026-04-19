'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { FiFolder, FiX } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaArrowRight } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiStripe,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
} from 'react-icons/si';

// Project Components Import
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';
import Macro from '../Projects/Macro';

// Project Images Import
import project1Img from '../../../public/Project-1/img1.png';
import project2Img from '../../../public/Project-2/img1.png';
import project3Img from '../../../public/Project-3/img1.png'; 
 

const iconMap = {
  React: <FaReact className="inline-block text-blue-400 mr-1" size={14} />,
  'Tailwind CSS': <SiTailwindcss className="inline-block text-teal-400 mr-1" size={14} />,
  'Node.js': <FaNodeJs className="inline-block text-green-500 mr-1" size={14} />,
  MongoDB: <SiMongodb className="inline-block text-green-600 mr-1" size={14} />,
  Firebase: <SiFirebase className="inline-block text-yellow-400 mr-1" size={14} />,
  JWT: <SiJsonwebtokens className="inline-block text-purple-400 mr-1" size={14} />,
  Stripe: <SiStripe className="inline-block text-purple-600 mr-1" size={14} />,
  'Next.js': <SiNextdotjs className="inline-block text-white mr-1" size={14} />,
  Prisma: <SiPrisma className="inline-block text-emerald-400 mr-1" size={14} />,
  PostgreSQL: <SiPostgresql className="inline-block text-blue-500 mr-1" size={14} />,
};

const projects = [
  {
    title: 'Workfleed - Employee Management System',
    subtitle: 'Role-based Employee Management System',
    banner: project1Img,
    component: Project1,
    description:
      'Workfleed is a role-based employee management system with dashboards for Employees, HR, and Admin. It supports payroll handling, real-time updates, and task tracking.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase', 'JWT', 'Stripe'],
  },
  {
    title: 'MentorFlow - Tutor Booking Platform',
    subtitle: 'Expert mentor matching system',
    banner: project2Img,
    component: Project2,
    description:
      'A robust Tutor Booking Platform designed to connect students with expert mentors. It features scheduling, secure payments, and a scalable architecture.',
    technologies: ['Next.js', 'Express.js', 'BetterAuth', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'ServZen - Premium Service Marketplace',
    subtitle: 'Professional service discovery & booking',
    banner: project3Img,
    component: Project3,
    description:
      'ServZen is a specialized marketplace for professional services. It provides a clean, high-performance interface for users to discover, book, and manage local services with an integrated review and rating system.',
    technologies: ['Next.js', 'Express.js', 'BetterAuth', 'Tailwind CSS' ,'Prisma', 'PostgreSQL'],
  },

  // {
  //   title: 'Macro - Automation & Integration Hub',
  //   subtitle: 'Streamline complex workflows',
  //   banner: macroImg,
  //   component: Macro,
  //   description:
  //     'Macro is a specialized Automation and Workflow Integration Hub. It streamlines complex business processes by connecting multiple APIs and triggers.',
  //   technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase', 'JWT'],
  // },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const modalBackdrop: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
const modalPanel: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.98, y: 30, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: false });

  const ActiveComponent = activeProject ? activeProject.component : null;

  return (
    <section
      id="Projects"
      ref={sectionRef}
      className="relative scroll-mt-24 bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Static Lines */}
      <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Aligned to Left */}
        <motion.div 
          className="flex flex-col items-start mb-16 text-left"
          initial={{ opacity: 0, x: -25 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <motion.div 
            className="flex items-center gap-3 mb-5 px-5 py-2 border border-purple-900/50 bg-purple-950/20 backdrop-blur-sm"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
          >
            <FiFolder className="text-purple-500 animate-pulse" size={18} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-300">Development_Log.sh</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 uppercase">
              FEATURED WORKS
            </span>
          </h1>
          <div className="h-1 w-24 bg-purple-600 shadow-[0_0_20px_#a855f7]" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={gridVariants}
        >
          {projects.map((proj) => (
            <motion.article
              key={proj.title}
              variants={cardVariants}
              className="group relative bg-[#080808] border border-neutral-900 rounded-none overflow-hidden flex flex-col transition-all duration-500 hover:border-purple-600/50"
              style={{ minHeight: '480px' }} // Height slightly reduced for compactness
            >
              {/* Image Container - Sharp */}
              <div className="relative w-full h-52 overflow-hidden border-b border-neutral-900">
                <Image
                  src={proj.banner}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-extrabold mb-1 group-hover:text-purple-400 transition-colors tracking-tight line-clamp-1">{proj.title}</h3>
                  <p className="text-purple-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3 line-clamp-1 italic">{proj.subtitle}</p>
                </div>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] flex items-center bg-neutral-900/50 border border-neutral-800 px-2.5 py-1 font-bold text-gray-400 uppercase tracking-tight group-hover:border-purple-900/30"
                    >
                      {iconMap[tech] || null}
                      <span className="ml-1">{tech}</span>
                    </span>
                  ))}
                  {proj.technologies.length > 5 && <span className="text-[9px] text-gray-600 self-center">+{proj.technologies.length - 5}</span>}
                </div>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-6">{proj.description}</p>

                {/* Sharp Details Button */}
                <button
                  onClick={() => setActiveProject(proj)}
                  className="relative mt-auto flex items-center justify-between gap-3 px-6 py-4 bg-[#0a0a0a] border border-purple-600/50 overflow-hidden transition-all duration-300 group-hover:border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] z-10">Details View</span>
                  <FaArrowRight className="z-10 text-xs group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div className="mt-16 flex justify-center">
          <motion.button
            onClick={() => setViewAllOpen(true)}
            className="group relative flex items-center gap-4 px-10 py-4 bg-transparent border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:border-purple-600"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">Access Full Archive</span>
            <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <FaArrowRight className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Modals remain the same for functionality */}
      <AnimatePresence>
        {(activeProject || viewAllOpen) && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-[#050505] w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-none relative border border-purple-900/30 shadow-[0_0_100px_rgba(0,0,0,1)]"
              variants={modalPanel}
            >
              <button
                onClick={() => { setActiveProject(null); setViewAllOpen(false); }}
                className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center bg-purple-950/30 border border-purple-800 text-purple-400 hover:bg-red-950 hover:border-red-700 transition-all z-[110]"
              >
                <FiX size={20} />
              </button>
              
              <div className="p-0">
                {activeProject ? (
                  <ActiveComponent project={activeProject} />
                ) : (
                  <div className="p-10 md:p-14">
                    <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 uppercase">System Archive</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.map((proj) => (
                        <div 
                          key={proj.title}
                          onClick={() => { setActiveProject(proj); setViewAllOpen(false); }}
                          className="flex items-center gap-5 p-4 bg-[#080808] border border-neutral-900 hover:border-purple-600/50 cursor-pointer transition-all group"
                        >
                          <div className="relative w-16 h-16 overflow-hidden flex-shrink-0 border border-neutral-800">
                            <Image
                              src={proj.banner}
                              alt={proj.title}
                              fill
                              sizes="64px"
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg leading-tight group-hover:text-purple-400">{proj.title}</h3>
                            <p className="text-purple-600 text-[9px] font-black uppercase tracking-widest mt-1">{proj.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { FiInfo, FiTerminal } from 'react-icons/fi';
import {
    FaArrowRight,
    FaUserGraduate,
    FaLaptopCode,
    FaHeart,
    FaRocket,
    FaMapMarkedAlt,
    FaBriefcase
} from 'react-icons/fa';
import { MdWork, MdTravelExplore } from 'react-icons/md';

export default function About() {
    const [activeTab, setActiveTab] = useState('Achievements');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Animation Variants
    const leftVariants: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const rightVariants: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const textItemVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    const tabEnter = (tab) => (tab === 'Achievements' ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 });
    const tabExit = (tab) => (tab === 'Achievements' ? { opacity: 0, x: 60 } : { opacity: 0, x: -60 });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-20 sm:py-10 bg-black text-white overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-purple-900/20 opacity-10"
                style={{ filter: 'blur(80px)' }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-15 lg:px-12">
                
                {/* Header Section - Aligned to Left */}
                <div className="flex flex-col items-start mb-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="flex items-center gap-3 mb-5 px-5 py-2 border border-purple-900/50 bg-purple-950/20 backdrop-blur-sm"
                    >
                        <FiInfo className="text-purple-500 animate-pulse" size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-300">Identity_Protocol.init()</span>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Identity</span>
                        </h2>
                        <div className="h-1 w-24 bg-purple-600 shadow-[0_0_20px_#a855f7]" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
                    
                    {/* Left Column: Professional Section */}
                    <motion.div
                        className="space-y-8 sm:space-y-10 max-w-full lg:max-w-4xl mx-auto"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={leftVariants}
                    >
                        <motion.section
                            className="rounded-3xl p-6 sm:p-8 md:p-10 bg-black/40 backdrop-blur-md border border-purple-900/10"
                            style={{ boxShadow: '0 0 25px rgba(168, 85, 247, 0.12)' }}
                        >
                            <h1 className="flex items-center font-bold mb-4 sm:mb-6 text-xl sm:text-2xl text-purple-500 uppercase tracking-wider">
                                Professional Profile <FaArrowRight className="ml-3 text-purple-500 animate-pulse" />
                            </h1>

                            <motion.h2
                                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.12, duration: 0.5 }}
                            >
                                Sojibur Rahman Asif - Software Engineer & Backend Systems Architect
                            </motion.h2>

                            <motion.p
                                className="text-sm sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed"
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={{ 
                                    hidden: { opacity: 0, y: 12 }, 
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
                                }}
                            >
                                I am a Computer Science Engineer finishing my final year at <strong>Dinajpur Polytechnic Institute</strong>. Recently, I completed a <strong>3-month tenure</strong> at a tech firm, where I gained hands-on experience in building scalable web solutions. 
                                <br /><br />
                                My core expertise lies in building <strong>distributed systems</strong> and <strong>scalable backends</strong> using <strong>Go (Golang)</strong>. I specialize in integrating <strong>AI-driven automation</strong> and <strong>RAG-based systems</strong> to solve complex engineering challenges with efficiency and a future-ready mindset.
                            </motion.p>
                        </motion.section>
                    </motion.div>

                    {/* Right Column: Tabbed Content */}
                    <div className="flex flex-col">
                        <div className="flex flex-nowrap justify-start items-center gap-6 sm:gap-10 mb-6 sm:mb-8 border-b border-white/10 overflow-hidden pb-2">
                            {['Achievements', 'Hobbies', 'Education'].map((tab) => {
                                const active = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative min-w-fit font-semibold text-sm sm:text-base md:text-[15px] pb-2 transition-all duration-300 ${active
                                            ? 'text-purple-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-purple-500 after:rounded-full'
                                            : 'text-white/50 hover:text-purple-400'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>

                        <motion.section
                            className="about py-2 sm:py-4"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={rightVariants}
                        >
                            <div className="min-h-[220px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={tabEnter(activeTab)}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={tabExit(activeTab)}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                    >
                                        {activeTab === 'Achievements' && (
                                            <motion.ul
                                                className="list-disc list-inside space-y-3 text-white/80 leading-relaxed"
                                                initial="hidden" animate="visible"
                                                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                                            >
                                                {/* ADDED: Job Experience */}
                                                <motion.li variants={textItemVariants} className="">
                                                    Next.js Developer - [Bangladeshi Software Ltd.] (Oct 2025 - Jan 2026)
                                                </motion.li>
                                                <motion.li variants={textItemVariants}><strong>Next Level Web Development (L2)</strong> - Programming Hero(2025-2026)</motion.li>
                                                <motion.li variants={textItemVariants}><strong>Vice President</strong> - Programming Club, DPI</motion.li>
                                                <motion.li variants={textItemVariants}>Blackbelt Achievement - Programming Hero (Sep 2025)</motion.li>
                                                <motion.li variants={textItemVariants}>MERN Stack Certification - Jul 2025</motion.li>
                                            </motion.ul>
                                        )}

                                        {activeTab === 'Hobbies' && (
                                            <motion.ul
                                                className="list-disc list-inside space-y-3 text-white/80 leading-relaxed"
                                                initial="hidden" animate="visible"
                                                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                                            >
                                                <motion.li variants={textItemVariants}><strong>Traveling:</strong> Exploring cultures to spark architectural ideas.</motion.li>
                                                <motion.li variants={textItemVariants}><strong>Photography:</strong> Capturing technical perspectives through a lens.</motion.li>
                                                <motion.li variants={textItemVariants}><strong>Tech Blogging:</strong> Documenting the journey into Go & AI.</motion.li>
                                                <motion.li variants={textItemVariants}><strong>Bike Riding:</strong> Seeking adventure and new mental horizons.</motion.li>
                                            </motion.ul>
                                        )}

                                        {activeTab === 'Education' && (
                                            <motion.ul
                                                className="list-disc list-inside space-y-3 text-white/80 leading-relaxed"
                                                initial="hidden" animate="visible"
                                                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                                            >
                                                <motion.li variants={textItemVariants}>Diploma in CSE (Final Year) — <strong>Dinajpur Polytechnic Institute</strong></motion.li>
                                                <motion.li variants={textItemVariants}>Specialized Track: Distributed Systems & Advanced SQL</motion.li>
                                                <motion.li variants={textItemVariants}>SSC (Batch 2022) — GPA: 5.00</motion.li>
                                            </motion.ul>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.section>
                    </div>
                </div>

                {/* Unified CTA Button */}
                <div className="mt-12 flex justify-center">
                    <motion.button
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center gap-3 px-10 py-4 bg-transparent text-white text-xs font-black uppercase tracking-[0.3em] transition-all border border-purple-600/40 hover:border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    >
                        View Full Story
                    </motion.button>
                </div>
            </div>

            {/* Premium Modal Design */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl flex justify-center items-center z-[100] p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#050505] text-white rounded-[2rem] w-full max-w-2xl p-10 relative border border-white/5 shadow-2xl"
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        >
                            <button onClick={closeModal} className="absolute top-8 right-8 text-white/40 hover:text-white text-3xl transition-colors">&times;</button>
                            
                            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 tracking-tight">
                                Beyond the Code
                            </h2>
                            
                                <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="p-3 rounded-xl bg-purple-500/10"><FaBriefcase className="text-purple-500 text-xl" /></div>
                                    <p className="text-white/70 leading-relaxed text-lg">Next.js Developer at Bangladeshi Software Ltd. (Oct 2025 - Jan 2026). Worked on production-grade systems and agile workflows.</p>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="p-3 rounded-xl bg-purple-500/10"><FaRocket className="text-purple-500 text-xl" /></div>
                                    <p className="text-white/70 leading-relaxed text-lg">Focusing on high-concurrency systems and the bridge between traditional software and AI.</p>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="p-3 rounded-xl bg-purple-500/10"><MdTravelExplore className="text-purple-500 text-xl" /></div>
                                    <p className="text-white/70 leading-relaxed text-lg">Aiming to travel the world while building products that impact global users.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
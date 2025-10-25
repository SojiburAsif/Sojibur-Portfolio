'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import {
    FaArrowRight,
    FaUserGraduate,
    FaLaptopCode,
    FaBookReader,
    FaHeart,
    FaRocket,
    FaMapMarkedAlt,
} from 'react-icons/fa';
import { MdWork, MdTravelExplore } from 'react-icons/md';

export default function About() {
    const [activeTab, setActiveTab] = useState('Achievements');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const leftVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const textItemVariants = {
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
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 opacity-8"
                style={{ filter: 'blur(48px)' }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-15 lg:px-12">
                <motion.h1
                    className="flex items-center justify-center text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-20 gap-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <FiInfo className="text-purple-500" size={42} /> About
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
                    {/* Left column */}
                    <motion.div
                        className="space-y-8 sm:space-y-10 max-w-full lg:max-w-4xl mx-auto"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={leftVariants}
                    >
                        <motion.section
                            className="rounded-3xl p-6 sm:p-8 md:p-10 bg-black/40 backdrop-blur-md border border-purple-900/10"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
                            style={{ boxShadow: '0 0 15px #a855f7' }} // purple shadow
                        >
                            <h1 className="flex items-center font-bold mb-4 sm:mb-6 text-xl sm:text-2xl text-purple-500">
                                About Me <FaArrowRight className="ml-3 text-purple-500 font-bold" />
                            </h1>

                            <motion.h2
                                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.12, duration: 0.5 }}
                            >
                                Sojibur Rahman - Aspiring MERN Stack Developer
                            </motion.h2>

                            <motion.p
                                className="text-sm sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed"
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            >
                                I’m <strong>Sojibur Rahman Asif</strong>, a final-year Diploma student at <strong>Dinajpur Polytechnic Institute</strong>. I build modern, efficient, and responsive web applications using the MERN stack with a focus on clean, maintainable code and real-world usability.
                            </motion.p>
                        </motion.section>
                    </motion.div>

                    {/* Right column */}
                    <div className="flex flex-col">
                        {/* Tabs (fixed, non-shifting) */}
                        <div className="flex flex-nowrap justify-start items-center gap-6 sm:gap-10 mb-6 sm:mb-8 border-b border-white/20 overflow-hidden pb-2">
                            {['Achievements', 'Hobbies', 'Education'].map((tab) => {
                                const active = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative min-w-fit font-semibold text-sm sm:text-base md:text-[15px] pb-2 transition-colors ${active
                                                ? 'text-purple-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-purple-500 after:rounded'
                                                : 'text-white/70 hover:text-purple-500'
                                            }`}
                                        aria-pressed={active}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Animated Tab Content (keeps tabs fixed) */}
                        <motion.section
                            className="about py-2 sm:py-4 text-sm sm:text-[15px] md:text-[16px] max-w-full mx-auto px-0"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={rightVariants}
                        >
                            <div className="min-h-[180px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={tabEnter(activeTab)}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={tabExit(activeTab)}
                                        transition={{ duration: 0.42, ease: 'easeOut' }}
                                        className="text-sm sm:text-[15px] md:text-[16px]"
                                    >
                                        {activeTab === 'Achievements' && (
                                            <motion.ul
                                                className="list-disc list-inside space-y-2 text-white/80 leading-relaxed"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } }}
                                            >
                                                <motion.li variants={textItemVariants}>Blackbelt Achievement (Web Development) - Programming Hero | Sep 2025</motion.li>
                                                <motion.li variants={textItemVariants}>Complete Web Development Course (MERN Stack) - Programming Hero | Jul 2025</motion.li>
                                                <motion.li variants={textItemVariants}>Microsoft Office (Computer Applications) - Bangladesh Technical Education Board | Jun 2021</motion.li>
                                                <motion.li variants={textItemVariants}>Completed multiple MERN stack projects demonstrating coding skills.</motion.li>
                                                <motion.li variants={textItemVariants}>Knowledgeable in Digital Marketing.</motion.li>
                                            </motion.ul>
                                        )}

                                        {activeTab === 'Hobbies' && (
                                            <motion.ul
                                                className="list-disc list-inside space-y-2 text-white/80 leading-relaxed"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } }}
                                            >
                                                <motion.li variants={textItemVariants}>Traveling: Exploring new places and cultures to spark creativity.</motion.li>
                                                <motion.li variants={textItemVariants}>Photography: Capturing moments through a creative lens.</motion.li>
                                                <motion.li variants={textItemVariants}>Reading Tech Blogs: Staying updated with the latest in web development.</motion.li>
                                                <motion.li variants={textItemVariants}>Bike Riding: Enjoying adventurous rides and exploring new paths.</motion.li>
                                            </motion.ul>
                                        )}

                                        {activeTab === 'Education' && (
                                            <motion.ul
                                                className="list-disc list-inside space-y-2 text-white/80 leading-relaxed"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } }}
                                            >
                                                <motion.li variants={textItemVariants}>Diploma in Computer Science Engineering (Final Year)</motion.li>
                                                <motion.li variants={textItemVariants}>Currently studying at <strong>Dinajpur Polytechnic Institute</strong></motion.li>
                                                <motion.li variants={textItemVariants}>Started SSC in 2022</motion.li>
                                                <motion.li variants={textItemVariants}>SSC GPA: 5.00</motion.li>
                                                <motion.li variants={textItemVariants}>Relevant Coursework: Data Structures, Web Development</motion.li>
                                            </motion.ul>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.section>
                    </div>
                </div>

                {/* View More (fixed button behavior, prevents navigation) */}
                <div className="mt-8 sm:mt-12 flex justify-center">
                    <motion.button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal();
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
                    >
                        View More
                    </motion.button>
                </div>
            </div>

            {/* Modal (no automatic scroll/navigation) */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-start sm:items-center z-50 p-4 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <motion.div
                            className="bg-black text-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-purple-700/20"
                            initial={{ scale: 0.95, y: -20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: -20, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                        >
                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-bold transition"
                                aria-label="Close Modal"
                            >
                                &times;
                            </button>

                            <motion.h2
                                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-500 border-b border-purple-500/30 pb-2"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                More About Me
                            </motion.h2>

                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
                                className="space-y-4 text-base sm:text-lg"
                            >
                                {[
                                    {
                                        icon: <FaUserGraduate />,
                                        title: 'Education',
                                        text: 'I am Sojibur Rahman Asif, a final-year Diploma student at Dinajpur Polytechnic Institute.',
                                    },
                                    { icon: <FaLaptopCode />, title: 'Profession', text: 'Passionate Web Developer aiming to become a skilled Full-Stack Developer.' },
                                    { icon: <FaBookReader />, title: 'Learning Journey', text: 'Started programming out of curiosity and sustained it through practice and projects.' },
                                    { icon: <MdWork />, title: 'Work Ethic', text: 'I enjoy working with dedication, passion, and creativity.' },
                                    { icon: <FaMapMarkedAlt />, title: 'Travel', text: 'Dream of traveling across Bangladesh and the world.' },
                                    { icon: <FaHeart />, title: 'Hobbies', text: 'Traveling, enjoying nature, and coding late at night.' },
                                    { icon: <FaRocket />, title: 'Goal', text: 'Become a Software Engineer and create impactful tech solutions.' },
                                    { icon: <MdTravelExplore />, title: 'Curiosity', text: 'Always curious about new technologies and improving problem-solving skills.' },
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-purple-900/10 transition"
                                        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                                    >
                                        <span className="text-purple-500 text-2xl mt-1 flex-shrink-0">{item.icon}</span>
                                        <div>
                                            <div className="font-semibold">{item.title}</div>
                                            <div className="text-white/80">{item.text}</div>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

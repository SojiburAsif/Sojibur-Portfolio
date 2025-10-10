'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBookReader, FaHeart, FaRocket, FaMapMarkedAlt } from 'react-icons/fa';
import { MdWork, MdTravelExplore } from 'react-icons/md';

const About = () => {
    const [activeTab, setActiveTab] = useState('Achievements');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Scroll to top on modal open
    useEffect(() => {
        if (isModalOpen) window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [isModalOpen]);

    return (
        <section
            id="about"
            className="relative py-20 sm:py-10 bg-gradient-to-br font-rancho from-gray-900 via-black to-gray-900 text-white overflow-hidden"
        >
            {/* Decorative background */}
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 opacity-30 animate-gradient-x"
                style={{ filter: 'blur(60px)' }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-1 lg:px-4">
                {/* Title */}
                <motion.h1
                    className="flex items-center justify-center text-4xl sm:text-5xl md:text-5xl font-bold text-center mb-12 sm:mb-20 gap-3"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <FiInfo className="text-gray-100" size={45} /> About
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
                    {/* Left */}
                    <motion.div
                        className="space-y-8 sm:space-y-10 max-w-full lg:max-w-4xl mx-auto"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                    >
                        <section className="text-white rounded-3xl p-6 sm:p-8 md:p-10 bg-black bg-opacity-30 backdrop-blur-md shadow-2xl">
                            <h1 className="flex items-center font-bold mb-4 sm:mb-6 text-xl sm:text-2xl text-purple-600">
                                About Me <FaArrowRight className="ml-3 text-purple-600 font-bold" />
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                                Sojibur Rahman - Aspiring MERN Stack Developer
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                I’m Sojibur Rahman, passionate about web development. As a MERN stack developer, I build modern, efficient, and responsive web applications with a focus on real-world usability and clean code.
                            </p>
                        </section>
                    </motion.div>

                    {/* Right */}
                    <section className="about py-12 sm:py-24 text-gray-400 max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
                        <div className="about-col-2 w-full">
                            {/* Tabs */}
                            <div className="flex space-x-8 sm:space-x-14 mb-8 sm:mb-12 border-b border-gray-600 overflow-x-auto no-scrollbar">
                                {['Achievements', 'Hobbies', 'Education'].map(tab => (
                                    <p
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`cursor-pointer font-semibold text-lg sm:text-xl pb-2 sm:pb-3 relative whitespace-nowrap ${activeTab === tab
                                                ? 'text-purple-600 after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-[calc(50%+6px)] after:bg-purple-600 after:rounded'
                                                : 'text-gray-400 hover:text-purple-600'
                                            }`}
                                    >
                                        {tab}
                                    </p>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="min-h-[180px] text-sm sm:text-base md:text-lg"
                                >
                                    {activeTab === 'Achievements' && (
                                        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                                            <li>Blackbelt Achievement (Web Development) - Programming Hero | Sep 2025</li>
                                            <li>Complete Web Development Course (MERN Stack) - Programming Hero | Jul 2025</li>
                                            <li>Microsoft Office (Computer Applications) - Bangladesh Technical Education Board | Jun 2021</li>
                                            <li>Completed multiple MERN stack projects demonstrating coding skills.</li>
                                            <li>Knowledgeable in Digital Marketing.</li>
                                        </ul>
                                    )}

                                    {activeTab === 'Hobbies' && (
                                        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                                            <li>Traveling: Exploring new places and cultures to spark creativity.</li>
                                            <li>Photography: Capturing moments through a creative lens.</li>
                                            <li>Reading Tech Blogs: Staying updated with the latest in web development.</li>
                                            <li>Bike Riding: Enjoying adventurous rides and exploring new paths.</li>
                                        </ul>
                                    )}

                                    {activeTab === 'Education' && (
                                        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                                            <li>Diploma in Computer Science Engineering (Final Year)</li>
                                            <li>Started SSC in 2022</li>
                                            <li>SSC GPA: 5.00</li>
                                            <li>Relevant Coursework: Data Structures, Web Development</li>
                                        </ul>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </section>
                </div>

                {/* View More */}
                <div className="mt-5 flex justify-center">
                    <motion.button
                        onClick={openModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
                    >
                        View More
                    </motion.button>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-start sm:items-center z-50 p-4 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-gray-900 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl border border-purple-700"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                            {/* Close Btn */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold transition-colors"
                                aria-label="Close Modal"
                            >
                                &times;
                            </button>

                            {/* Modal Header */}
                            <motion.h2
                                className="text-3xl font-bold mb-6 text-purple-400 border-b border-purple-500 pb-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                More About Me
                            </motion.h2>

                            {/* Modal Content */}
                            <motion.ul
                                className="space-y-5 text-gray-300 text-base sm:text-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, staggerChildren: 0.05 }}
                            >
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <FaUserGraduate className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Education:</span> I am <strong>Sojibur Rahman Asif</strong>, a final-year Diploma student at <strong>Dinajpur Polytechnic Institute</strong>.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <FaLaptopCode className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Profession:</span> Passionate <strong>Web Developer</strong> aiming to become a skilled Full-Stack Developer.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <FaBookReader className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Learning Journey:</span> Started programming purely out of curiosity and interest.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <MdWork className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Work Ethic:</span> I enjoy working with dedication, passion, and creativity.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <FaMapMarkedAlt className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Travel:</span> Dream of traveling all over Bangladesh and the world.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <FaHeart className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Hobbies:</span> Traveling, enjoying nature, and coding late at night.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <FaRocket className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Goal:</span> Become a Software Engineer and create impactful tech solutions.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:bg-purple-900/20 p-3 rounded-lg transition-all">
                                    <MdTravelExplore className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Curiosity:</span> Always curious about new technologies and improving problem-solving skills.
                                    </div>
                                </li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default About;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import {
    FaUserGraduate,
    FaLaptopCode,
    FaMapMarkedAlt,
    FaHeart,
    FaRocket,
    FaBookReader
} from 'react-icons/fa';
import { MdWork, MdTravelExplore } from 'react-icons/md';

const About = () => {
    const [activeTab, setActiveTab] = useState('Achievements');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section id="about" className="relative py-20 sm:py-28 bg-gradient-to-br font-rancho from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 opacity-30 animate-gradient-x" style={{ filter: 'blur(60px)' }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                {/* Title */}
                <motion.h1 className="flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-20 gap-3" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <FiInfo className="text-blue-500" size={40} /> About
                </motion.h1>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
                    {/* Left */}
                    <motion.div className="space-y-8 sm:space-y-10 max-w-full lg:max-w-4xl mx-auto" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}>
                        <section className="text-white rounded-3xl p-6 sm:p-8 md:p-10 bg-black bg-opacity-30 backdrop-blur-md shadow-2xl">
                            <div>
                                <h1 className="flex items-center font-bold mb-4 sm:mb-6 text-xl sm:text-2xl text-purple-600">
                                    About Me <FaArrowRight className="ml-3 text-purple-600 font-bold" />
                                </h1>
                                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                                    Sojibur Rahman - Aspiring MERN Stack Developer & CSE Diploma Student
                                </h2>
                                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                    I’m Sojibur Rahman, a final-year Diploma in Computer Science student, passionate about web development. As a MERN stack developer, I build modern, efficient, and responsive web applications with a focus on real-world usability and clean code.
                                </p>
                            </div>
                        </section>
                    </motion.div>

                    {/* Right */}
                    <section className="about py-12 sm:py-24 text-gray-400 max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
                        <div className="about-col-2 w-full">
                            {/* Tabs */}
                            <div className="flex space-x-8 sm:space-x-14 mb-8 sm:mb-12 border-b border-gray-600 overflow-x-auto no-scrollbar">
                                {['Achievements', 'Education', 'Hobbies'].map(tab => (
                                    <p key={tab} onClick={() => setActiveTab(tab)} className={`cursor-pointer font-semibold text-lg sm:text-xl pb-2 sm:pb-3 relative whitespace-nowrap ${activeTab === tab ? 'text-purple-600 after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-[calc(50%+6px)] after:bg-purple-600 after:rounded' : 'text-gray-400 hover:text-purple-600'}`}>{tab}</p>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3 }} className="min-h-[180px] text-sm sm:text-base md:text-lg">
                                {activeTab === 'Achievements' && (
                                    <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                                        <li>Completed multiple MERN stack projects demonstrating coding skills.</li>
                                        <li>Successfully contributed to open-source projects.</li>
                                        <li>Awarded best project in the final year of Diploma.</li>
                                        <li>Proficient in MS Word, Excel, and PowerPoint.</li>
                                        <li>Knowledgeable in Digital Marketing.</li>
                                    </ul>
                                )}

                                {activeTab === 'Education' && (
                                    <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                                        <li>Diploma in Computer Science Engineering (Final Year)</li>
                                        <li>Started SSC in 2022</li>
                                        <li>SSC GPA: 5.00</li>
                                        <li>Currently in Diploma Final Year</li>
                                        <li>Relevant Coursework: Data Structures, Web Development</li>
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
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* View More */}
                <div className="mt-10 flex justify-center">
                    <button onClick={openModal} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition">
                        View More
                    </button>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div className="fixed inset-0 bg-transparent backdrop-blur-md flex justify-center items-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-gray-900 bg-opacity-90 rounded-lg w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
                            {/* Close Btn */}
                            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold" aria-label="Close Modal">&times;</button>

                            {/* Modal Content */}
                            <section>
                                <h2 className="text-3xl font-bold mb-6 border-b border-purple-400 pb-2">More About Me</h2>
                                <ul className="text-gray-300 space-y-4 text-lg">
                                    <li className="flex items-start gap-3">
                                        <FaUserGraduate className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            I am <strong>Sojibur Rahman Asif</strong>, a final-year Diploma student in Computer Science & Technology at <strong>Dinajpur Polytechnic Institute</strong>.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaLaptopCode className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Passionate <strong>Web Developer</strong> aiming to become a skilled <strong>Full-Stack Developer</strong> in the future.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaBookReader className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Started my programming journey purely out of curiosity and interest, and I’m continuously learning through <strong>Programming Hero</strong> to improve my skills.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MdWork className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            I enjoy working with full dedication, passion, and creativity. Every project I do feels exciting and rewarding.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaMapMarkedAlt className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            I dream of traveling all over Bangladesh and the world — exploring new places is my biggest hobby.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaHeart className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Hobbies include traveling, enjoying nature, and sipping tea while coding late at night.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaRocket className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            My goal is to become a <strong>Software Engineer</strong> and create impactful tech solutions that help people.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MdTravelExplore className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Always curious about learning new technologies, improving my problem-solving skills, and staying updated with the latest in tech.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaRocket className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Strong believer in <strong>“Learning by Doing”</strong> — I prefer building real projects while learning new concepts.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaLaptopCode className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Comfortable working with <strong>MERN Stack</strong> and always excited to explore Next.js for SEO-friendly apps.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaHeart className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Love collaborating with other developers, sharing knowledge, and growing together as a community.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaBookReader className="text-purple-400 text-2xl mt-1" />
                                        <span>
                                            Inspired by the idea of creating technology that solves real-life problems for people.
                                        </span>
                                    </li>
                                </ul>
                            </section>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;

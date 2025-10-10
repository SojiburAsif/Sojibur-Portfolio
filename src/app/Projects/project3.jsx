'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SiTailwindcss, SiMongodb, SiFirebase, SiJsonwebtokens } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const slides = [1, 2, 3, 4, 5, 6];

const Project3 = () => {
    return (
        <div className="py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Swiper Section */}
                    <div className="w-full md:w-[60%] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-0.5 rounded-xl shadow-xl">
                        <div className="rounded-lg overflow-hidden bg-[#071018] relative h-[420px] md:h-[460px] lg:h-[520px]">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation
                                loop
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                spaceBetween={0}
                                className="h-full w-full"
                                aria-label="Micro Freelance Platform screenshots"
                            >
                                {slides.map((num) => (
                                    <SwiperSlide key={num} className="h-full w-full flex items-center justify-center bg-black relative">
                                        <Image
                                            src={`/project-3/img${num}.png`}
                                            alt={`Micro Freelance screenshot ${num}`}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-extrabold mb-3 text-purple-300">Micro Freelance Platform</h2>

                        <p className="text-gray-300 mb-5 text-lg leading-relaxed">
                            A platform that helps individuals find freelancers for small tasks. Users can post tasks, bid, and connect based on skills, budget, and deadlines.
                        </p>

                        <ul className="list-disc pl-6 text-base text-gray-400 space-y-2 mb-6 text-left">
                            <li>Task Posting & Bidding System</li>
                            <li>User Roles: Client and Freelancer</li>
                            <li>Skill Matching & Filtering</li>
                            <li>Live Chat</li>
                            <li>Stripe Payment Integration</li>
                        </ul>

                        {/* Tech Stack */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base text-gray-300 mb-6">
                            {[
                                { Icon: FaReact, label: 'React', color: 'text-cyan-400' },
                                { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
                                { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
                                { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
                                { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-400' },
                                { Icon: SiJsonwebtokens, label: 'JWT', color: 'text-rose-400' },
                            ].map(({ Icon, label, color }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2 bg-[#08121a] px-3 py-2 rounded-lg shadow-sm border border-gray-800"
                                >
                                    <Icon className={`${color} text-xl`} aria-hidden />
                                    <span className="text-sm">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
                            <a
                                href="https://symphonious-bubblegum-ad2f44.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-2 rounded text-white bg-purple-600 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-300 transition duration-300"
                                aria-label="Open live site"
                            >
                                Live Site
                            </a>

                            <a
                                href="https://github.com/SojiburAsif/Tasky-web"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300"
                                aria-label="Open GitHub repository"
                            >
                                GitHub Client
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;

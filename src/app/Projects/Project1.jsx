'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { SiTailwindcss, SiMongodb, SiFirebase, SiJsonwebtokens } from 'react-icons/si';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const Project1 = () => {
  return (
    <div className="py-10">
      {/* Center container with max width 7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Swiper Section */}
          <div className="w-full md:w-[60%] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-0.5 rounded-xl shadow-xl">
            <div className="rounded-lg overflow-hidden bg-[#071018]">
              <Swiper
                spaceBetween={0}
                navigation={true}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                className="h-[420px] md:h-[460px] lg:h-[520px]"
                aria-label="Workfleed project screenshots"
              >
                {Array.from({ length: 10 }).map((_, i) => {
                  const num = i + 1;
                  return (
                    <SwiperSlide key={num} className="h-full w-full flex items-center justify-center bg-black">
                      <img
                        src={`/Project-1/img${num}.png`}
                        alt={`Workfleed screenshot ${num}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="1200"
                        height="800"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-extrabold mb-3 text-purple-300">
              Workfleed — Employee Management System
            </h2>

            <p className="text-gray-300 mb-5 text-lg leading-relaxed">
              Workfleed is a role-based employee management system with dashboards for Employees,
              HR, and Admin. It supports payroll handling, real-time updates, and task tracking.
            </p>

            <ul className="list-disc pl-6 text-base text-gray-400 space-y-2 mb-6 text-left">
              <li>Role-based Dashboard (Employee, HR, Admin)</li>
              <li>Task & Work Sheet Management</li>
              <li>Payroll & Salary Approval System</li>
              <li>Email / Google Authentication</li>
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
                href="https://resonant-syrniki-b1e2dc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 rounded text-white bg-purple-600 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-300 transition duration-300"
                aria-label="Open live site"
              >
                Live Site
              </a>

              <a
                href="https://github.com/SojiburAsif/Workfleed.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300"
                aria-label="Open GitHub repository"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
} from 'react-icons/si';

const slides = [11, 12, 13, 14, 10, 18];

const techStack = [
  { Icon: FaReact, label: 'React', color: 'text-cyan-400' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
  { Icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
  { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
  { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-400' },
  { Icon: SiJsonwebtokens, label: 'JWT', color: 'text-rose-400' },
];

const Project2 = () => {
  return (
    <div className="py-8 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-purple-300">
              Service Sharing Web Application
            </h2>

            <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
              A platform where users can add, manage, and book services. It supports dashboards,
              bookings, real-time updates, and more.
            </p>

            <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base text-gray-400 space-y-1 mb-5 text-left">
              <li>Service Management System</li>
              <li>Role-based Dashboard</li>
              <li>Status Tracking (Pending → Working → Completed)</li>
              <li>Email / Google Authentication</li>
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm md:text-base text-gray-300 mb-5">
              {techStack.map(({ Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[#08121a] px-3 py-2 rounded-lg shadow-sm border border-gray-800"
                >
                  <Icon className={`${color} text-lg`} aria-hidden />
                  <span className="truncate">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
              <a
                href="https://celadon-griffin-404747.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded text-white bg-purple-600 hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-300 transition duration-300 text-sm sm:text-base"
              >
                Live Site
              </a>

              <a
                href="https://github.com/SojiburAsif/WorkLoop-web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded text-white bg-gray-700 hover:bg-transparent hover:border hover:border-gray-500 hover:text-gray-300 transition duration-300 text-sm sm:text-base"
              >
                GitHub Client
              </a>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="w-full lg:w-[60%] order-1 lg:order-2">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-0.5 rounded-xl shadow-xl">
              <div className="rounded-lg overflow-hidden bg-[#071018]">
                <Swiper
                  spaceBetween={0}
                  navigation={true}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay]}
                  className="w-full"
                  aria-label="Service Sharing project screenshots"
                >
                  {slides.map((num) => (
                    <SwiperSlide key={num} className="w-full flex items-center justify-center bg-black">
                      <div
                        className="
                          w-full
                          aspect-[16/9]
                          sm:aspect-[16/9]
                          md:h-[360px]
                          lg:h-[420px]
                          max-h-[440px]
                          overflow-hidden
                          relative
                        "
                      >
                        <img
                          src={`/Project-2/img${num}.png`}
                          alt={`Service Sharing screenshot ${num}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          width="1200"
                          height="800"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;

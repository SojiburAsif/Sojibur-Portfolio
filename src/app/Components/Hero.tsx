'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaLinkedin, FaReact, FaNodeJs, FaBriefcase, FaFilePdf } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiPrisma } from "react-icons/si";


const floatingIcons = [
  { icon: <FaReact />, pos: "top-[10%] left-[8%] md:top-[10%] md:left-[5%]", size: "text-4xl md:text-5xl", color: "text-cyan-500/40" },
  { icon: <SiNextdotjs />, pos: "top-[35%] left-[80%] md:top-[20%] md:left-[85%]", size: "text-3xl md:text-4xl", color: "text-white/30" },
  { icon: <FaNodeJs />, pos: "top-[38%] left-[8%] md:top-[75%] md:left-[10%]", size: "text-4xl md:text-5xl", color: "text-green-500/30" },
  { icon: <SiTypescript />, pos: "top-[48%] left-[92%] md:top-[65%] md:left-[80%]", size: "text-3xl md:text-4xl", color: "text-blue-500/30" },
  { icon: <SiTailwindcss />, pos: "hidden lg:block md:top-[45%] md:left-[90%]", size: "text-4xl", color: "text-sky-400/30" },
  { icon: <SiPostgresql />, pos: "top-[72%] left-[90%] md:top-[85%] md:left-[55%]", size: "text-4xl md:text-5xl", color: "text-white/80" }, 
  { icon: <SiPrisma />, pos: "top-[8%] left-[85%] md:top-[15%] md:left-[45%]", size: "text-3xl md:text-4xl", color: "text-white/80" },      
];

const PortfolioBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50;
      const y = (clientY / window.innerHeight - 0.5) * 50;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden font-rancho" id="home" ref={ref}>
      

      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.pos} ${item.size} ${item.color} filter blur-[0.5px]`}
            style={{ 
                x: mouseX,
                y: mouseY
            }}
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black z-[1]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.section
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-12 pt-24 pb-16 md:py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left z-20 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-purple-500 font-mono tracking-widest text-sm md:text-base mb-2 uppercase font-bold">
                &lt; Developer Portfolio /&gt;
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 drop-shadow-md">Sojibur Rahman</span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400">
                  <Typewriter
                    words={["Full Stack Developer", "Software Engineer", "Go Enthusiast"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
            </motion.div>

            <p className="max-w-xl mx-auto lg:mx-0 text-gray-300/80 text-base md:text-lg leading-relaxed italic px-4 md:px-0">
              &quot;Crafting scalable digital solutions with passion and precision.&quot;
            </p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative group/doc">
                <button
                  className="group relative flex items-center gap-3 px-8 py-4 bg-transparent text-white text-sm font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 border border-purple-600/50 hover:border-purple-500 rounded-none shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                >
                  <span className="absolute inset-0 w-0 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
                  <FaDownload className="text-purple-500 group-hover:text-white transition-colors duration-300" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Documents</span>
                </button>

                {/* Dropdown for Hero */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 opacity-0 invisible group-hover/doc:opacity-100 group-hover/doc:visible transition-all duration-300 z-50 shadow-2xl">
                  <a
                    href="/CV & Resume/SojiburAsif.Resume.pdf"
                    download="SojiburAsif_Resume.pdf"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-purple-600/10 border-b border-white/5 group/item"
                  >
                    <FaFilePdf className="text-purple-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Resume</span>
                  </a>
                  <a
                    href="/CV & Resume/SojiburAsif...CV  (1).pdf"
                    download="SojiburAsif_CV.pdf"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-600/10 group/item"
                  >
                    <FaFilePdf className="text-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Curriculum Vitae</span>
                  </a>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link href="https://github.com/SojiburAsif" target="_blank" className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl text-2xl text-white hover:border-purple-500 transition-all">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/sojibur-asif/" target="_blank" className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl text-2xl text-blue-500 hover:border-purple-500 transition-all">
                  <FaLinkedin />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-2/5 flex justify-center items-center relative z-20 order-1 lg:order-2">
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-[70px] opacity-25 animate-pulse" />
              
              <div className="relative p-1 bg-gradient-to-tr from-purple-500 via-transparent to-blue-500 rounded-full shadow-2xl">
                <Image
                  src="/My img/Gemini_Generated_Image_c7atjkc7atjkc7at.png"
                  alt="Sojibur Rahman Asif"
                  width={400}
                  height={400}
                  className="w-[250px] md:w-[350px] lg:w-[400px] aspect-square rounded-full object-cover border-[6px] border-black"
                  priority
                />
              </div>

              {/* Experience Badge */}
              <motion.div 
                className="absolute -bottom-2 -left-2 md:-left-5 group cursor-default"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative flex items-center gap-3 px-6 py-4 bg-black border border-purple-600/50 overflow-hidden transition-all duration-300 group-hover:border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  
                  {/* Top Right Accent */}
                  <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>

                  <div className="bg-black p-2 border border-purple-500/20 transition-all duration-300">
                    <FaBriefcase className="text-purple-500 text-lg md:text-xl transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg md:text-xl leading-none tracking-tight">1.5+ Years</p>
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-[0.2em] mt-1 transition-colors duration-300">Experience</p>
                  </div>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_25px_rgba(168,85,247,0.3)] pointer-events-none"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </motion.section>
      </div>
    </div>
  );
};

export default PortfolioBanner;
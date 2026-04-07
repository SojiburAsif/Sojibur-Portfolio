'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Icons
import {
  FaReact, FaNode, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiReactrouter,
  SiNextdotjs, SiPostgresql, SiTypescript, SiPrisma, SiGo, SiAuth0
} from 'react-icons/si';
import { FiLayers, FiTerminal, FiShield } from 'react-icons/fi';

// Skill Data Categories
const frontendSkills = [
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, url: 'https://nextjs.org/' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, url: 'https://www.typescriptlang.org/' },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" />, url: 'https://react.dev/' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, url: 'https://developer.mozilla.org/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, url: 'https://tailwindcss.com/' },
  { name: 'Framer Motion', icon: <FiLayers className="text-purple-400" />, url: 'https://www.framer.com/motion/' },
];

const backendSkills = [
  { name: 'Node.js', icon: <FaNode className="text-green-500" />, url: 'https://nodejs.org/' },
  { name: 'Go (Golang)', icon: <SiGo className="text-cyan-500" />, url: 'https://go.dev/' },
  { name: 'BetterAuth', icon: <FiShield className="text-purple-500" />, url: 'https://www.better-auth.com/' },
  { name: 'Prisma ORM', icon: <SiPrisma className="text-white" />, url: 'https://www.prisma.io/' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, url: 'https://www.postgresql.org/' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, url: 'https://www.mongodb.com/' },
];

const toolsDevOps = [
  { name: 'Docker', icon: <FaDocker className="text-blue-500" />, url: 'https://www.docker.com/' },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500" />, url: 'https://github.com/' },
  { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, url: 'https://expressjs.com/' },
];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'backOut' } 
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

// Sub-component for each skill card
const SkillCard = ({ skill }: { skill: any }) => (
  <motion.a
    href={skill.url}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    whileHover={{ y: -10, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex flex-col items-center justify-center p-6 bg-[#0A0A0A] border border-neutral-900 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
      {skill.icon}
    </div>
    <p className="text-sm md:text-base font-black text-gray-400 group-hover:text-white transition-colors tracking-tight z-10 uppercase">
      {skill.name}
    </p>
    {/* Animated Bottom Accent */}
    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-purple-600 group-hover:w-full transition-all duration-500 ease-in-out" />
  </motion.a>
);

const SkillsSection = ({ title, skills }: { title: string; skills: any[] }) => {
  return (
    <div className="space-y-10">
      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-[2px] bg-gradient-to-r from-purple-600 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        <h3 className="text-lg md:text-xl font-black uppercase tracking-[0.4em] text-white/90">
          {title}
        </h3>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="TechStack" className="relative py-32 bg-[#000000] text-white overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" 
      />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20">
          <motion.div 
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="flex items-center gap-3 mb-6 px-4 py-1.5 border border-neutral-800/80 rounded-full bg-neutral-900/40 backdrop-blur-md shadow-xl"
          >
            <FiTerminal className="text-purple-500 animate-pulse" size={14} />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 font-bold">System.Stack.init()</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Arsenal</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-16 bg-purple-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
              <div className="h-1 w-3 bg-white/20 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          <SkillsSection title="Frontend Infrastructure" skills={frontendSkills} />
          <SkillsSection title="Backend & Security" skills={backendSkills} />
          <SkillsSection title="Development Ecosystem" skills={toolsDevOps} />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      </div>
    </section>
  );
};

export default Skills;
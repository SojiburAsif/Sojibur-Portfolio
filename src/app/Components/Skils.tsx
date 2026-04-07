'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  { name: 'BetterAuth', icon: <FiShield className="text-purple-500" />, url: 'https://www.better-auth.com/' }, // BetterAuth Added
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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'circOut' } },
};

// Sub-component for each skill card
const SkillCard = ({ skill }: { skill: any }) => (
  <motion.a
    href={skill.url}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group relative flex flex-col items-center justify-center p-6 bg-[#0A0A0A] border border-neutral-900 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
  >
    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300">
      {skill.icon}
    </div>
    <p className="text-sm md:text-base font-bold text-gray-400 group-hover:text-white transition-colors tracking-tight">
      {skill.name}
    </p>
    {/* Bottom Accent - Purple */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-purple-500 group-hover:w-1/2 transition-all duration-300" />
  </motion.a>
);

const SkillsSection = ({ title, skills }: { title: string; skills: any[] }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="space-y-10" ref={ref}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-[2px] bg-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        <h3 className="text-lg md:text-xl font-black uppercase tracking-[0.3em] text-gray-300">
          {title}
        </h3>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
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
    <section id="Skills" className="relative py-28 bg-[#000000] text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 px-5 py-2 border border-neutral-800 rounded-full bg-neutral-900/50 backdrop-blur-sm"
          >
            <FiTerminal className="text-purple-500" size={16} />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500">Core_Stack.init()</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-center uppercase tracking-tighter leading-none">
            Technical <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
        </div>

        {/* Categories */}
        <div className="space-y-28">
          <SkillsSection title="Frontend Mastery" skills={frontendSkills} />
          <SkillsSection title="Backend & Auth" skills={backendSkills} />
          <SkillsSection title="Tools & Infrastructure" skills={toolsDevOps} />
        </div>

        {/* Decorative Corner Orbs */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      </div>
    </section>
  );
};

export default Skills;
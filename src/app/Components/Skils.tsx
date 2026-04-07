'use client';

import React from "react";
import { motion, Variants } from "framer-motion";

// Icons
import {
  FaReact, FaNode, FaGitAlt, FaDocker, FaGithub, FaJsSquare
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiFirebase,
  SiNextdotjs, SiPostgresql, SiTypescript, SiPrisma, SiGo, SiJsonwebtokens
} from "react-icons/si";
import { FiTerminal, FiShield, FiCpu } from "react-icons/fi";

// Skill Data Categories
const frontendSkills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, url: "https://nextjs.org/" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, url: "https://www.typescriptlang.org/" },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" />, url: "https://developer.mozilla.org/" },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, url: "https://react.dev/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, url: "https://tailwindcss.com/" },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNode className="text-[#339933]" />, url: "https://nodejs.org/" },
  { name: "BetterAuth", icon: <FiShield className="text-[#512BD4]" />, url: "https://www.better-auth.com/" },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, url: "https://firebase.google.com/" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, url: "https://expressjs.com/" },
  { name: "Go (Golang)", icon: <SiGo className="text-[#00ADD8]" />, url: "https://go.dev/" },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#FB015B]" />, url: "https://jwt.io/" },
  { name: "Prisma ORM", icon: <SiPrisma className="text-white" />, url: "https://www.prisma.io/" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, url: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, url: "https://www.mongodb.com/" },
];

const toolsDevOps = [
  { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, url: "https://www.docker.com/" },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" />, url: "https://github.com/" },
  { name: "Security", icon: <FiShield className="text-purple-500" />, url: "#" },
  { name: "System Arch", icon: <FiCpu className="text-blue-500" />, url: "#" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillCard = ({ skill }: { skill: any }) => (
  <motion.a
    href={skill.url}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    className="group relative flex flex-col items-center justify-center p-6 bg-[#050505] border border-white/5 rounded-none transition-all duration-500 hover:border-emerald-500/40 hover:shadow-2xl"
  >
    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"></div>
    <div className="text-4xl md:text-5xl mb-4 z-10 filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-400">
      {skill.icon}
    </div>
    <p className="text-[10px] md:text-xs font-black text-neutral-500 group-hover:text-white transition-colors tracking-[0.2em] z-10 uppercase">
      {skill.name}
    </p>
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-500 ease-in-out" />
  </motion.a>
);

const SkillsSection = ({ title, skills }: { title: string; skills: any[] }) => (
  <motion.div 
    className="space-y-10" 
    variants={containerVariants} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: false, amount: 0.1 }}
  >
    <div className="flex items-center gap-4">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="w-12 h-[1px] bg-purple-600 shadow-[0_0_10px_#9333ea] origin-left" 
      />
      <motion.h3 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-neutral-400"
      >
        {title}
      </motion.h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill, idx) => <SkillCard key={idx} skill={skill} />)}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="TechStack" className="relative py-32 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-start mb-20">
          <motion.div 
             initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }}
             className="mb-10 inline-flex items-center gap-3 px-4 py-2 border border-purple-900/40 bg-purple-900/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
            <FiTerminal className="text-purple-500 text-sm relative z-10" />
            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white relative z-10">SYSTEM_STACK.INIT()</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Arsenal</span>
            </h2>
            <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.8 }} className="h-1 w-24 bg-purple-600 shadow-[0_0_20px_#a855f7] origin-left" />
          </motion.div>
        </div>
        <div className="space-y-32">
          <SkillsSection title="Frontend Infrastructure" skills={frontendSkills} />
          <SkillsSection title="Backend & Auth Engineering" skills={backendSkills} />
          <SkillsSection title="Development Ecosystem" skills={toolsDevOps} />
        </div>
      </div>
    </section>
  );
}

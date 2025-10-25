'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiFolder } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiStripe,
} from 'react-icons/si';

import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/project3';

import project1Img from '../../../public/Project-1/img1.png';
import project2Img from '../../../public/Project-2/img11.png';
import project3Img from '../../../public/project-3/img1.png';

const iconMap = {
  React: <FaReact className="inline-block text-blue-400 mr-1" size={14} />,
  'Tailwind CSS': <SiTailwindcss className="inline-block text-teal-400 mr-1" size={14} />,
  'Node.js': <FaNodeJs className="inline-block text-green-500 mr-1" size={14} />,
  MongoDB: <SiMongodb className="inline-block text-green-600 mr-1" size={14} />,
  Firebase: <SiFirebase className="inline-block text-yellow-400 mr-1" size={14} />,
  JWT: <SiJsonwebtokens className="inline-block text-purple-400 mr-1" size={14} />,
  Stripe: <SiStripe className="inline-block text-purple-600 mr-1" size={14} />,
};

const projects = [
  {
    title: 'Workfleed - Employee Management System',
    subtitle: 'Role-based Employee Management System',
    banner: project1Img,
    component: Project1,
    description:
      'Workfleed is a role-based employee management system with dashboards for Employees, HR, and Admin. It supports payroll handling, real-time updates, and task tracking.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase', 'JWT', 'Stripe'],
  },
  {
    title: 'Service Sharing Web Application',
    subtitle: 'Add, manage, and book services',
    banner: project2Img,
    component: Project2,
    description:
      'A platform where users can add, manage, and book services. It supports dashboards, bookings, real-time updates, and more.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase', 'JWT'],
  },
  {
    title: 'Micro Freelance Platform',
    subtitle: 'Find freelancers for small tasks',
    banner: project3Img,
    component: Project3,
    description:
      'A platform that helps individuals find freelancers for small tasks. Users can post tasks, bid, and connect based on skills, budget, and deadlines.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase', 'JWT'],
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const modalBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
const modalPanel = {
  hidden: { opacity: 0, y: -12, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 28 } },
  exit: { opacity: 0, y: -12, scale: 0.985, transition: { duration: 0.18 } },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.18, once: false });

  const ActiveComponent = activeProject ? activeProject.component : null;

  return (
    <section
      id="Projects"
      ref={sectionRef}
      className="scroll-mt-24 bg-gradient-to-br from-gray-900 via-black bg-black text-white py-12 font-rancho"
    >
      <motion.h1
        className="text-4xl md:text-5xl text-center font-bold mb-8 flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <FiFolder className="text-blue-500" size={36} /> My Projects
      </motion.h1>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:px-14 px-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={gridVariants}
      >
        {projects.map((proj) => (
          <motion.article
            key={proj.title}
            className="bg-[#0b1220] rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col"
            style={{ minHeight: '330px' }}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 18px 40px rgba(8,7,25,0.5)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="relative w-full h-48">
              <Image src={proj.banner} alt={proj.title} fill className="object-cover" />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 leading-tight">{proj.title}</h3>
                <p className="text-purple-400 italic text-sm mb-3 truncate">{proj.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4 max-w-full overflow-hidden">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs flex items-center bg-gray-800 rounded-full px-2 py-1 select-none whitespace-nowrap"
                    >
                      {iconMap[tech] ?? null}
                      <span className="max-w-[80px] truncate">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveProject(proj)}
                className="mt-auto w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
                aria-expanded={activeProject === proj}
              >
                View Details →
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div className="mt-10 flex justify-center">
        <motion.button
          onClick={() => setViewAllOpen(true)}
          className="px-8 py-3 border border-white hover:bg-purple-500 rounded text-white font-semibold text-lg transition-transform"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View All Projects →
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 bg-black/70"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-[#0b1220] w-full max-w-7xl max-h-[110vh] overflow-y-auto rounded-lg relative shadow-2xl p-0"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 text-white text-2xl font-bold z-50"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="p-0">{ActiveComponent ? <ActiveComponent project={activeProject} /> : null}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {viewAllOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 bg-black/70"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-[#0b1220] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg relative shadow-2xl p-5"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() => setViewAllOpen(false)}
                className="absolute right-4 top-4 text-white text-2xl font-bold z-50"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-4">All Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <motion.div
                    key={proj.title}
                    className="bg-gray-900 rounded-lg p-3 flex items-center gap-3 cursor-pointer"
                    onClick={() => {
                      setActiveProject(proj);
                      setViewAllOpen(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image src={proj.banner} alt={proj.title} fill className="object-cover rounded" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{proj.title}</h3>
                      <p className="text-xs text-purple-400">{proj.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaShoppingCart, 
  FaLayerGroup, 
  FaTimes, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaEnvelope, 
  FaFolderOpen, 
  FaPhoneAlt,
  FaReact,
  FaNodeJs,
  FaJs,
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiFramer, 
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiStripe,
  SiJsonwebtokens,
  SiSocketdotio,
} from 'react-icons/si';
import { 
  MdSecurity 
} from 'react-icons/md';

const services: {
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  techs: { name: string; icon: React.ReactNode; color: string }[];
  details: string[];
}[] = [
  {
    title: "Full-Stack Development",
    shortDesc: "Complete web solutions with MERN Stack.",
    icon: <FaLayerGroup />,
    techs: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
      { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]" }
    ],
    details: [
      "Custom Web Application Architecture",
      "Dynamic UI/UX with Next.js 16 (Turbopack)",
      "Scalable Backend with Node.js & Express",
      "Secure MongoDB & Prisma Database Design",
      "Comprehensive State Management & Auth"
    ]
  },
  {
    title: "Backend & System APIs",
    shortDesc: "Secure, high-performance API design.",
    icon: <FaServer />,
    techs: [
      { name: "Express", icon: <SiExpress />, color: "text-white" },
      { name: "Prisma", icon: <SiPrisma />, color: "text-white" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
      { name: "JWT", icon: <SiJsonwebtokens />, color: "text-[#d63384]" },
      { name: "JS", icon: <FaJs />, color: "text-[#F7DF1E]" }
    ],
    details: [
      "Banking API & Payment Integration",
      "RESTful & GraphQL API Engineering",
      "Advanced JWT/OAuth Security Protocols",
      "Real-time Data Processing & Sockets",
      "Server-side Performance Optimization"
    ]
  },
  {
    title: "Premium E-Commerce",
    shortDesc: "Advanced online stores with dashboards.",
    icon: <FaShoppingCart />,
    techs: [
      { name: "Stripe", icon: <SiStripe />, color: "text-[#635BFF]" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Auth", icon: <MdSecurity />, color: "text-[#FFD700]" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "text-white" },
      { name: "JS", icon: <FaJs />, color: "text-[#F7DF1E]" }
    ],
    details: [
      "Full-featured E-commerce Ecosystems",
      "Multi-vendor Support & Admin Panels",
      "Seamless Payment Gateway Integration",
      "Inventory & Order Tracking Systems",
      "Mobile-first Shopping Experience"
    ]
  },
  {
    title: "Frontend Engineering",
    shortDesc: "Interactive and responsive interfaces.",
    icon: <FaCode />,
    techs: [
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
      { name: "Motion", icon: <SiFramer />, color: "text-[#FF0055]" },
      { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
      { name: "JS", icon: <FaJs />, color: "text-[#F7DF1E]" }
    ],
    details: [
      "Pixel-perfect UI with Tailwind CSS",
      "High-speed Performance Optimization",
      "Cross-platform Web Compatibility",
      "TypeScript for Type-safe Development"
    ]
  }
];

export default function MyServices() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="Services" className="py-24 bg-black text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <motion.div 
          className="mb-10 inline-flex items-center gap-3 px-4 py-2 border border-purple-900/40 bg-purple-900/5 relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
          <FaFolderOpen className="text-purple-500 text-sm relative z-10" />
          <h2 className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white relative z-10">
            SERVICE_CAPABILITIES.LOG
          </h2>
        </motion.div>

        {/* --- Section Title --- */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none mb-6"
          >
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]">Services</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="h-1 w-24 bg-purple-600 shadow-[0_0_20px_#a855f7] mb-6 origin-left" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-500 text-xs md:text-sm max-w-xl font-bold tracking-wide uppercase"
          >
            Combining modern frontend aesthetics with powerful backend architecture to deliver high-end digital solutions.
          </motion.p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative bg-[#050505] border border-white/5 p-10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-purple-500 text-4xl group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500">
                    {service.icon}
                  </div>
                  {/* Tech Stack Icons */}
                  <div className="flex gap-2">
                    {service.techs.map((tech, i) => (
                      <div 
                        key={i} 
                        className={`${tech.color} hover:scale-125 transition-all duration-300 text-lg`}
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 font-bold uppercase tracking-tight">
                  {service.shortDesc}
                </p>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className="text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 bg-white/5 border border-white/10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                >
                  View Technical Specs
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-transparent group-hover:border-emerald-600/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* --- Details Modal --- */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />
              
              {/* Modal Content */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                className="relative bg-[#0a0a0a] border border-purple-600/30 p-8 md:p-12 w-full max-w-3xl shadow-[0_0_100px_rgba(147,51,234,0.2)] overflow-y-auto max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2"
                >
                  <FaTimes size={24} />
                </button>

                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <div className="text-purple-500 text-6xl">{selectedService.icon}</div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                    {selectedService.title}
                  </h2>
                </div>

                <div className="space-y-4 mb-14">
                  <p className="text-[11px] font-black text-purple-500 uppercase tracking-[0.5em] mb-4 border-l-2 border-purple-600 pl-4">
                    TECHNICAL_MODULES:
                  </p>
                  {selectedService.details.map((point, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-sm md:text-lg text-gray-400 font-bold uppercase tracking-tight"
                    >
                      <FaCheckCircle className="text-purple-600 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* --- Contact Details Section --- */}
                <div className="pt-10 border-t border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-8">
                     ESTABLISH_CONNECTION
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/8801840587095" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-[#25D366] text-black px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:brightness-110 hover:-translate-y-1 transition-all shadow-xl"
                    >
                      <FaWhatsapp size={20} /> WhatsApp
                    </a>
                    <a 
                      href="tel:+8801840587095" 
                      className="flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-gray-200 hover:-translate-y-1 transition-all shadow-xl"
                    >
                      <FaPhoneAlt size={18} /> Call_Now
                    </a>
                    <a 
                      href="mailto:sojiburrahmanasif@gmail.com"
                      className="flex items-center gap-3 bg-purple-600 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-purple-700 hover:-translate-y-1 transition-all shadow-xl"
                    >
                      <FaEnvelope size={20} /> Send_Mail
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
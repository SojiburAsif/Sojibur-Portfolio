'use client';

import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaDownload,
  FaPaperPlane,
  FaFilePdf,
} from 'react-icons/fa';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [msg, setMsg] = useState('');
  const [showDocs, setShowDocs] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, { amount: 0.18, once: false });

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyaE4Z-rjzg0yGO-7umGjjHF8IMBVD4yF2QxhlZNQkVshMNOU-9rdVkI6KTug71eUJDgA/exec';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setMsg('');
    const form = e.currentTarget;
    const data = {
      Name: (form.elements.namedItem('Name') as HTMLInputElement).value.trim(),
      Email: (form.elements.namedItem('Email') as HTMLInputElement).value.trim(),
      Message: (form.elements.namedItem('Message') as HTMLTextAreaElement).value.trim(),
      submittedAt: new Date().toISOString(),
    };

    if (!data.Name || !data.Email || !data.Message) {
      Swal.fire({ 
        icon: 'error', 
        title: 'Oops...', 
        text: 'Please fill out all fields!', 
        background: '#000', 
        color: '#fff', 
        confirmButtonColor: '#9333ea',
        customClass: { popup: 'rounded-none', confirmButton: 'rounded-none' } 
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Network response not ok');

      setStatus('success');
      form.reset();
      Swal.fire({ 
        icon: 'success', 
        title: 'Message Sent!', 
        text: 'Thank you! I will get back to you shortly.', 
        background: '#000', 
        color: '#fff', 
        confirmButtonColor: '#9333ea',
        customClass: { popup: 'rounded-none', confirmButton: 'rounded-none' } 
      });
    } catch (err) {
      setStatus('error');
      setMsg('Failed to send message. Please try again.');
      Swal.fire({ 
        icon: 'error', 
        title: 'Oops...', 
        text: 'Failed to send message.', 
        background: '#000', 
        color: '#fff', 
        confirmButtonColor: '#ef4444',
        customClass: { popup: 'rounded-none', confirmButton: 'rounded-none' } 
      });
    } finally {
      setLoading(false);
    }
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="Contact" ref={sectionRef} className="py-24 bg-black text-white overflow-hidden selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Aligned to Left */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="flex items-center gap-3 mb-5 px-5 py-2 border border-purple-900/50 bg-purple-950/20 backdrop-blur-sm"
          >
            <FaEnvelope className="text-purple-500 animate-pulse" size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-300">Message_Protocol.init()</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Me</span>
            </h1>
            <div className="h-1 w-24 bg-purple-600 shadow-[0_0_20px_#a855f7]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-10"
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={item}>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-6">System_Contact_Info</h2>
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="flex items-center gap-5 group cursor-default bg-neutral-900/30 border border-white/5 p-4 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white shrink-0 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-600 tracking-widest mb-1">Send_Email</p>
                    <p className="text-sm md:text-base font-bold tracking-tight">sojiburrahmanasif@gmail.com</p>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <a 
                  href="https://wa.me/8801840587095" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group bg-neutral-900/30 border border-white/5 p-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white shrink-0 group-hover:scale-105 transition-transform">
                    <FaWhatsapp size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-600 tracking-widest mb-1">WhatsApp_Direct</p>
                    <p className="text-sm md:text-base font-bold tracking-tight">+880 1840587095</p>
                  </div>
                </a>

              </div>
            </motion.div>

            {/* Social Presence */}
            <motion.div variants={item}>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-6">Network_Presence</h2>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, link: "https://github.com/sojiburAsif", color: "hover:bg-white hover:text-black hover:shadow-[0_0_20px_#fff]" },
                  { icon: FaFacebook, link: "https://www.facebook.com/share/1JrRvtDKYi/", color: "hover:bg-blue-600 hover:shadow-[0_0_20px_#2563eb]" },
                  { icon: FaInstagram, link: "https://www.instagram.com/f_asif77", color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:shadow-[0_0_20px_#ef4444]" },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    className={`w-12 h-12 border border-white/10 flex items-center justify-center text-xl transition-all duration-300 rounded-full ${social.color}`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Simple CV Download Section */}
            <motion.div 
              variants={item} 
              className="relative group/doc-contact pt-4"
              onMouseEnter={() => setShowDocs(true)}
              onMouseLeave={() => setShowDocs(false)}
            >
              <div className="relative inline-block">
                <button
                  className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:bg-purple-700 active:scale-95"
                >
                  <FaDownload size={12} />
                  Download CV
                </button>

                {/* Dropdown Menu - Simple */}
                <AnimatePresence>
                  {showDocs && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-full left-0 w-48 mb-2 z-50 bg-[#0a0a0a] border border-white/10 shadow-2xl"
                    >
                      <a
                        href="/CV & Resume/SojiburAsif.Resume.pdf"
                        download="SojiburAsif_Resume.pdf"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-purple-600/10 border-b border-white/5 transition-colors group/item"
                      >
                        <FaFilePdf className="text-purple-500" size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white">Resume</span>
                      </a>

                      <a
                        href="/CV & Resume/SojiburAsif...CV  (1).pdf"
                        download="SojiburAsif_CV.pdf"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-blue-600/10 transition-colors group/item"
                      >
                        <FaFilePdf className="text-blue-500" size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white">Full CV</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Sharp Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5 group-hover:opacity-10 transition duration-500 blur-md"></div>
              
              <form 
                onSubmit={handleSubmit}
                className="relative bg-[#080808] border border-white/10 p-6 md:p-8 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-600">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="e.g. Sojibur Rahman"
                      required
                      className="w-full bg-black border border-white/10 px-4 py-3 focus:border-purple-600 focus:outline-none transition-all font-bold text-xs placeholder:text-gray-800 placeholder:font-normal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-600">Email Address</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="e.g. asif@example.com"
                      required
                      className="w-full bg-black border border-white/10 px-4 py-3 focus:border-purple-600 focus:outline-none transition-all font-bold text-xs placeholder:text-gray-800 placeholder:font-normal"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-600">Message</label>
                  <textarea
                    name="Message"
                    rows={4}
                    placeholder="Tell me about your project or query..."
                    required
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-purple-600 focus:outline-none transition-all font-bold text-xs resize-none placeholder:text-gray-800 placeholder:font-normal"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all ${
                    loading 
                    ? 'bg-neutral-800 cursor-not-allowed text-gray-600 border border-white/5' 
                    : 'bg-white text-black hover:bg-purple-600 hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]'
                  }`}
                >
                  {loading ? (
                    'Initialising_Transfer...'
                  ) : (
                    <>
                      <FaPaperPlane className="text-[10px]" />
                      Execute_Send.sh
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-[10px] font-black uppercase tracking-widest text-center mt-4"
                    >
                      {msg}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
            
            <p className="mt-6 text-[9px] text-gray-700 font-black uppercase tracking-[0.2em] text-center lg:text-left">
              * Average response latency: &lt; 24 hours. No logs stored.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
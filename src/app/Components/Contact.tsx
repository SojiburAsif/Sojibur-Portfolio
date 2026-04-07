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
} from 'react-icons/fa';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [msg, setMsg] = useState('');
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
        
        {/* Section Header - Bold & Sharp */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 flex items-center gap-4 uppercase">
             Contact <span className="text-purple-600">Me</span>
          </h1>
          <div className="h-1.5 w-16 bg-purple-600 shadow-[0_0_15px_#9333ea]"></div>
        </motion.div>

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

            {/* Download CV */}
            <motion.div variants={item}>
              <a
                href="/SojiburAsif.CV (1).pdf"
                download
                className="inline-flex items-center gap-4 px-8 py-4 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-purple-700 transition-all shadow-[0_0_25px_rgba(147,51,234,0.2)] group"
              >
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
                Download_CV.exe
              </a>
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
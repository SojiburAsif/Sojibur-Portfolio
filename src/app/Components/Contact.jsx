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
} from 'react-icons/fa';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState('');
  const sectionRef = useRef(null);

  // when element is in viewport -> true, otherwise false
  const inView = useInView(sectionRef, { amount: 0.18, once: false });

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyaE4Z-rjzg0yGO-7umGjjHF8IMBVD4yF2QxhlZNQkVshMNOU-9rdVkI6KTug71eUJDgA/exec';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setMsg('');
    const form = e.target;
    const data = {
      Name: form.Name.value.trim(),
      Email: form.Email.value.trim(),
      Message: form.Message.value.trim(),
      submittedAt: new Date().toISOString(),
    };

    if (!data.Name || !data.Email || !data.Message) {
      setStatus('error');
      setMsg('All fields are required.');
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please fill out all fields!' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Apps Script error:', res.status, text);
        throw new Error('Network response not ok');
      }

      setStatus('success');
      setMsg('Message sent successfully! I will respond soon.');
      form.reset();
      Swal.fire({ icon: 'success', title: 'Message Sent!', text: 'Thank you! I will get back to you shortly.' });
    } catch (err) {
      console.error('Send error:', err);
      setStatus('error');
      setMsg('Failed to send message. Please try again or email me directly.');
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  const container = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { staggerChildren: 0.06 } },
    exit: { opacity: 0, y: 12, transition: { duration: 0.36 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.28 } },
  };

  return (
    <section id="Contact" ref={sectionRef} className="py-16 bg-black font-rancho text-white">
      {/* Title always present so user can scroll to the section; animated content mounts/unmounts */}
      <motion.h1
        className="flex items-center justify-center text-5xl font-bold mb-12 gap-3"
        initial={{ opacity: 0, y: -18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <FaEnvelope className="text-gray-100" size={48} />
        Contact
      </motion.h1>

      <AnimatePresence>
        {inView && (
          <motion.div
            className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="contact-content"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left: Info */}
              <motion.div className="lg:w-1/2 space-y-4 mt-8" variants={item}>
                <motion.h2 className="text-3xl font-semibold text-purple-500" variants={item}>
                  Contact Information
                </motion.h2>

                <motion.p className="flex items-center text-lg" variants={item}>
                  <FaEnvelope className="text-purple-600 mr-3 text-2xl" />
                  asif81534@gmail.com
                </motion.p>

                <motion.p className="flex items-center text-lg" variants={item}>
                  <FaPhone className="text-purple-600 mr-3 text-2xl" />
                  +8801840587095
                </motion.p>

                <motion.p className="flex items-center text-lg" variants={item}>
                  <FaWhatsapp className="text-purple-600 mr-3 text-2xl" />
                  <a
                    href="https://wa.me/8801840587095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp Chat
                  </a>
                </motion.p>

                <motion.div className="flex gap-6 mt-4 text-3xl text-gray-400" variants={item}>
                  <motion.a
                    href="https://github.com/sojiburAsif"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.06 }}
                    className="hover:text-gray-200 transition"
                  >
                    <FaGithub />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/f_asif77?igsh=MWhoN3RnazBqeHZyYw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.06 }}
                    className="hover:text-[#c22ca1] transition"
                  >
                    <FaInstagram />
                  </motion.a>

                  <motion.a
                    href="https://www.facebook.com/share/1JrRvtDKYi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.06 }}
                    className="hover:text-[#0e60db] transition"
                  >
                    <FaFacebook />
                  </motion.a>
                </motion.div>

                <motion.a
                  href="/SojiburAsif.CV (1).pdf"
                  download
                  whileHover={{ scale: 1.03 }}
                  className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition"
                  variants={item}
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* Right: Form */}
              <motion.div className="lg:w-1/2" variants={item}>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5 md:p-6 "
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <motion.input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded bg-gray-900 text-gray-50"
                    whileFocus={{ scale: 1.01 }}
                  />
                  <motion.input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded bg-gray-900 text-gray-50"
                    whileFocus={{ scale: 1.01 }}
                  />
                  <motion.textarea
                    name="Message"
                    rows="6"
                    placeholder="Your Message"
                    required
                    className="w-full p-3 rounded bg-gray-900 text-gray-50"
                    whileFocus={{ scale: 1.01 }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-6 py-3 rounded text-white font-medium inline-flex items-center justify-center ${loading ? 'bg-gray-600 cursor-wait' : 'bg-purple-600 hover:bg-purple-700'
                        }`}
                    >
                      {loading ? 'Sending...' : 'Submit'}
                    </motion.button>

                    <motion.p className="text-xs text-gray-400 mt-3 sm:mt-0" variants={item}>
                      By sending, you agree to be contacted. No spam.
                    </motion.p>
                  </div>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="text-green-400 text-sm font-medium"
                      >
                        {msg}
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="text-rose-400 text-sm font-medium"
                      >
                        {msg}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

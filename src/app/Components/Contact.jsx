'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from 'react-icons/fa';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState('');

  // ✅ Updated Apps Script Web App URL
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields!',
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

      if (!res.ok) {
        const text = await res.text();
        console.error('Apps Script error:', res.status, text);
        throw new Error('Network response not ok');
      }

      setStatus('success');
      setMsg('Message sent successfully! I will respond soon.');
      form.reset();

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you! I will get back to you shortly. 🙌',
      });
    } catch (err) {
      console.error('Send error:', err);
      setStatus('error');
      setMsg('Failed to send message. Please try again or email me directly.');

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="Contact" className="py-16 bg-black font-rancho text-white">
      <h1 className="flex items-center justify-center text-5xl font-bold mb-12 gap-3">
        <FaEnvelope className="text-gray-100" size={48} />
        Contact
      </h1>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Info */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-purple-500">Contact Information</h2>

            <p className="flex items-center text-lg">
              <FaEnvelope className="text-purple-600 mr-3 text-2xl" />
              asif81534@gmail.com
            </p>

            <p className="flex items-center text-lg">
              <FaPhone className="text-purple-600 mr-3 text-2xl" />
              +8801840587095
            </p>

            <p className="flex items-center text-lg">
              <FaWhatsapp className="text-purple-600 mr-3 text-2xl" />
              <a
                href="https://wa.me/8801840587095"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp Chat
              </a>
            </p>

            <div className="flex gap-6 mt-4 text-3xl text-gray-400">
              <a
                href="https://github.com/sojiburAsif"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/f_asif77?igsh=MWhoN3RnazBqeHZyYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c22ca1] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1JrRvtDKYi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0e60db] transition"
              >
                <FaFacebook />
              </a>
            </div>

            <a
              href="/SojiburAsif.CV (1).pdf"
              download
              className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition"
            >
              Download CV
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-5" aria-live="polite">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-gray-900 text-gray-50"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-gray-900 text-gray-50"
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-gray-900 text-gray-50"
              ></textarea>

              {status === 'success' && (
                <div className="text-green-400 text-sm font-medium">{msg}</div>
              )}
              {status === 'error' && (
                <div className="text-rose-400 text-sm font-medium">{msg}</div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded text-white font-medium transition inline-flex items-center ${
                    loading ? 'bg-gray-600 cursor-wait' : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
                <p className="text-xs text-gray-500 mt-0">
                  By sending, you agree to be contacted. (No spam, promise.)
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

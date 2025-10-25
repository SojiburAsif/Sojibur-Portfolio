'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const certificates = [
  {
    title: "Blackbelt Achievement (Web Development)",
    issuedBy: "Programming Hero",
    date: "Sep 2025",
    img: "/Certificate/Screenshot 2025-10-10 214703.png",
  },
  {
    title: "Complete Web Development Course (MERN Stack)",
    issuedBy: "Programming Hero",
    date: "Jul 2025",
    img: "/Certificate/1759231524778 (2).png",
  },
  {
    title: "English for Everyday",
    issuedBy: "10 Minute School",
    date: "Sep 13, 2025",
    img: "/Certificate/english.png",
  },
  {
    title: "Digital Networking Strategies",
    issuedBy: "Shea Hanson, Head of Learning Content Strategy",
    date: "Sep 12, 2025",
    skills: ["Professional Networking"],
    certificateId:
      "4e1b611385261f230cf5815c5adb8c7db4ef9d56e88be2aa5d8ad4630e0df8da",
    img: "/Certificate/digital.png",
  },
  {
    title: "Engage the Likability Effect in the Job Search",
    issuedBy: "Shea Hanson, Head of Learning Content Strategy",
    date: "Sep 11, 2025",
    skills: ["Job Search Strategies", "Interpersonal Skills"],
    certificateId:
      "80d00f15c903bc2a091913f766525d3d5b0944be7cfabf15e40c69e2fd254b04",
    img: "/Certificate/network.png",
  },
  {
    title: "Microsoft Office (Computer Applications)",
    issuedBy: "Bangladesh Technical Education Board",
    date: "Jun 2021",
    img: "/Certificate/WhatsApp Image 2025-10-10 at 21.54.33_7f1011fb.jpg",
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: -24, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: 'easeOut' } },
};

export default function Certificate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.16, once: false });

  const openModal = (cert = null) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };
  const closeModal = () => {
    setSelectedCert(null);
    setModalOpen(false);
  };

  const handleCardKey = (e, cert) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(cert);
    }
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-16 bg-black text-white font-rancho relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-900 rounded-full opacity-16 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-900 rounded-full opacity-12 blur-3xl -z-10" />

      <div className="text-center mb-12 px-1">
        <div className="flex items-center justify-center gap-3">
          <FiAward className="text-purple-600 text-4xl" />
          <h2 className="text-4xl font-bold">My Certificates</h2>
        </div>
        <p className="text-gray-400 mt-2">Courses & Achievements I Completed</p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-15 px-6"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={gridVariants}
      >
        {certificates.slice(0, 3).map((cert, idx) => (
          <motion.div
            key={cert.title + idx}
            role="button"
            tabIndex={0}
            onClick={() => openModal(cert)}
            onKeyDown={(e) => handleCardKey(e, cert)}
            className="group text-left focus:outline-none cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 18px 40px rgba(99, 102, 241, 0.12)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            {/* FIXED CARD HEIGHT */}
            <div className="relative bg-[#0b1220] rounded-sm overflow-hidden border border-gray-800 hover:border-purple-600 transition-colors h-[360px] md:h-[380px]">
              {/* FIXED IMAGE HEIGHT */}
              <div className="relative w-full h-44 md:h-48 bg-gray-800">
                <Image
                  src={cert.img}
                  alt={cert.title}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all"
                />
              </div>

              <div className="p-4 flex flex-col gap-2 h-[calc(100%-176px)] md:h-[calc(100%-192px)]">
                <h3 className="text-lg font-semibold leading-snug line-clamp-2">{cert.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="truncate">{cert.issuedBy}</span>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>

                <div className="mt-4 flex items-center gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(cert);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white text-sm font-semibold transition"
                  >
                    <FiExternalLink className="text-white" />
                    <span>View Certificate</span>
                  </button>

                  <span className="text-xs text-gray-400">Details</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => openModal('all')}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold text-lg transition-transform transform hover:scale-105"
        >
          View All Certificates
        </button>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0b1220] rounded-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto p-6 relative shadow-2xl border border-purple-700/20"
              initial={{ scale: 0.92, y: -12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: -12, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-50 text-white text-lg font-bold bg-gray-800/60 hover:bg-gray-900 rounded-full w-9 h-9 flex items-center justify-center"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="space-y-6 pt-2">
                {selectedCert === 'all' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, idx) => (
                      <motion.div
                        key={cert.title + idx}
                        className="flex flex-col border border-gray-800 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28, delay: idx * 0.04 }}
                      >
                        <div className="relative w-full h-48">
                          <Image src={cert.img} alt={cert.title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">{cert.title}</h3>
                          <p className="text-gray-400 text-sm">{cert.issuedBy}</p>
                          <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                          {cert.skills && <p className="text-xs text-gray-400 mt-2">Top skills: {cert.skills.join(', ')}</p>}
                          {cert.certificateId && <p className="text-xs text-gray-500 mt-2 break-all">ID: {cert.certificateId}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  selectedCert && (
                    <div className="flex flex-col">
                      <div className="relative w-full h-[46vh] max-h-[680px] bg-gray-900 rounded-md overflow-hidden">
                        <Image src={selectedCert.img} alt={selectedCert.title} fill className="object-contain" />
                      </div>

                      <div className="mt-4">
                        <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                        <p className="text-gray-400">{selectedCert.issuedBy}</p>
                        <p className="text-gray-500 mt-1">{selectedCert.date}</p>
                        {selectedCert.skills && <p className="text-sm text-gray-400 mt-3">Top skills: {selectedCert.skills.join(', ')}</p>}
                        {selectedCert.certificateId && (
                          <p className="text-xs text-gray-500 mt-2 break-all">Certificate ID: {selectedCert.certificateId}</p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

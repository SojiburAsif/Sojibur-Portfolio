'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiAward } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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
        title: "Microsoft Office (Computer Applications)",
        issuedBy: "Bangladesh Technical Education Board",
        date: "Jun 2021",
        img: "/Certificate/WhatsApp Image 2025-10-10 at 21.54.33_7f1011fb.jpg",
    },
  
];

const Certificate = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const openModal = (cert = null) => {
        setSelectedCert(cert);
        setModalOpen(true);
    };
    const closeModal = () => {
        setSelectedCert(null);
        setModalOpen(false);
    };

    return (
        <section id="certificates" className="py-16 bg-black text-white font-rancho relative overflow-hidden">
            {/* Icon Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-900 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-900 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />

            {/* Title */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3">
                    <FiAward className="text-purple-600 text-4xl" />
                    <h2 className="text-4xl font-bold">My Certificates</h2>
                </div>
                <p className="text-gray-400 mt-2">Courses & Achievements I Completed</p>
            </div>

            {/* Certificates Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-17 px-10">
                {certificates.slice(0, 3).map((cert, idx) => (
                    <div
                        key={idx}
                        className="bg-[#0b1220] rounded-xl shadow-lg border border-gray-800 overflow-hidden flex flex-col cursor-pointer"
                        onClick={() => openModal(cert)}
                    >
                        <div className="relative w-full h-48">
                            <Image src={cert.img} alt={cert.title} fill className="object-cover" />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                            <p className="text-gray-400 text-sm">{cert.issuedBy}</p>
                            <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                            <button
                                className="mt-auto text-purple-600 hover:underline font-semibold text-sm"
                                onClick={() => openModal(cert)}
                            >
                                View Certificate →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="mt-10 flex justify-center">
                <button
                    onClick={() => openModal('all')}
                    className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold text-lg transition-transform transform hover:scale-105"
                >
                    View All Certificates
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#0b1220] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                            {/* Fixed Close Button */}
                            <button
                                onClick={closeModal}
                                className=" absolute top-1 right-2 z-50 text-white text-xl font-bold bg-gray-800/70 hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                                ✕
                            </button>

                            <div className="space-y-6 pt-4">
                                {selectedCert === 'all' ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {certificates.map((cert, idx) => (
                                            <div key={idx} className="flex flex-col border border-gray-800 rounded-lg overflow-hidden">
                                                <div className="relative w-full h-48">
                                                    <Image src={cert.img} alt={cert.title} fill className="object-cover" />
                                                </div>
                                                <div className="p-4 flex flex-col">
                                                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                                                    <p className="text-gray-400 text-sm">{cert.issuedBy}</p>
                                                    <p className="text-gray-500 text-xs">{cert.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    selectedCert && (
                                        <div className="flex flex-col">
                                            <div className="relative w-full h-96">
                                                <Image src={selectedCert.img} alt={selectedCert.title} fill className="object-cover" />
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                                                <p className="text-gray-400">{selectedCert.issuedBy}</p>
                                                <p className="text-gray-500">{selectedCert.date}</p>
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
};

export default Certificate;

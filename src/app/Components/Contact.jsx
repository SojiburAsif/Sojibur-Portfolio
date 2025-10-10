'use client';

import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaReact,
} from "react-icons/fa";

const ContactSection = () => {
    return (
        <div id="Contact" className="py-16 bg-black font-rancho text-white ">

            {/* Title centered at the top */}
            <h1 className="flex items-center justify-center text-5xl font-bold text-white text-center mb-18 gap-3">
                <FaEnvelope className="text-gray-100" size={48} />
                Contact
            </h1>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 ">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left: Contact Info */}
                    <div className="lg:w-1/2 space-y-6" >

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

                        {/* Social Icons */}
                        <div className="flex gap-6 mt-4 text-3xl text-gray-400">
                            <a
                                href="https://github.com/sojiburAsif"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.instagram.com/f_asif77?igsh=MWhoN3RnazBqeHZyYw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                        </div>

                        <a
                            href="/img/DSC_0006.JPG"
                            download
                            className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:w-1/2">
                        <form className="space-y-5">
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
                                className="w-full p-3 rounded bg-gray-900 text-gray-50"
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactSection;

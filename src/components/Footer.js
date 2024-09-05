'use client'
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Personal Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Abdul Rafy</h3>
            <p className="text-sm mt-2 max-w-md">
              I am a Full-Stack Developer with expertise in modern web technologies like Next.js, React, and Django. My passion lies in building scalable, high-performance web applications that provide exceptional user experiences. Let's create something amazing together!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="/" className="text-sm hover:text-blue-500">Home</a>
            <a href="/pages/about" className="text-sm hover:text-blue-500">About</a>
            <a href="/pages/projects" className="text-sm hover:text-blue-500">Projects</a>
            <a href="/pages/contact" className="text-sm hover:text-blue-500">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/abdulrafy707"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-blue-500"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-blue-500"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-blue-400"
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
            <motion.a
              href="mrafybasra2020@gmail.com"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-blue-500"
            >
              <FaEnvelope className="text-2xl" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Abdul Rafy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

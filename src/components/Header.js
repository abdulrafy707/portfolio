'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12 lg:w-8/12 rounded-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              Rafycode's Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-8 text-lg">
                <li>
                  <Link href="#home" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-gray-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <Link href="#contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold">
              Get in Touch
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none focus:text-white"
            >
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav>
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-lg">
              <li>
                <Link href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="px-5 py-3">
            <Link href="#contact" className="block w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-center text-white font-semibold">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

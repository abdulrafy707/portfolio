'use client'
import React from 'react';
import ThreeScene from '@/components/ThreeScene'; // Import the ThreeScene component

const AboutMe = () => {
  return (
    <section id="about" className="relative text-white py-20">
      {/* Render ThreeScene as the background */}
      {/* <ThreeScene /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg mt-4">A brief introduction to who I am and what I do.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <p className="text-lg mb-6">
              Hello! I'm Abdul Rafy, a passionate Full-Stack Developer with over 5 years of experience in building dynamic and responsive web applications. I specialize in using modern web technologies like Next.js, React, and Django to create user-friendly, scalable solutions.
            </p>
            <p className="text-lg mb-6">
              My journey in web development began with a deep curiosity for how things work behind the scenes. Over the years, I've honed my skills in front-end and back-end development, consistently delivering high-quality code and exceptional user experiences.
            </p>
            <p className="text-lg">
              My mission is to solve complex problems through elegant and efficient code, turning ideas into reality. Let's build something amazing together!
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center relative z-10">
            <img
              src="/rafy.jpg" // Replace with your image path
              alt="Abdul Rafy"
              className="rounded-full w-64 h-64 object-cover border-4 border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

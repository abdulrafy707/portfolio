import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen text-white">
      <div className="absolute inset-0 z-0">
        {/* Three.js background or other background media will remain visible */}
      </div>
      <div className="z-10 flex flex-col items-center max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Centered Text Content */}
        <div className="w-full mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Abdul Rafy: Full-Stack Developer</h1>
          <p className="text-lg md:text-2xl font-light mb-6">
            Crafting high-performance web applications with Next.js, React, and Django
          </p>
          <p className="text-base md:text-lg font-light mb-8">
            I am a passionate developer with over 5 years of experience in building responsive and scalable web applications. I specialize in modern web technologies like Next.js, React, and Django. My goal is to transform complex problems into simple, user-friendly solutions.
          </p>
          <a href="#projects" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold">
            See My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

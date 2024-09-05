'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNextdotjs, SiDjango, SiPython, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, proficiency: 90 },
  { name: 'React', icon: SiReact, proficiency: 85 },
  { name: 'Next.js', icon: SiNextdotjs, proficiency: 80 },
  { name: 'Django', icon: SiDjango, proficiency: 75 },
  { name: 'Python', icon: SiPython, proficiency: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative text-white py-20">
      {/* Skills content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="text-lg mt-4">Technologies and tools I am proficient in.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <skill.icon className="text-6xl text-white mx-auto mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

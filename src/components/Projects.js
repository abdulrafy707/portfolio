'use client'
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'store2u.ca',
    description: 'A full-fledged e-commerce website built with Next.js and Tailwind CSS, featuring a custom admin panel and MySQL database.',
    technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
    link: 'https://store2u.ca',
    image: '/store2u.png',
  },
  {
    title: 'maker4u.com',
    description: 'A project built with React.js and Tailwind CSS. You can visit it to explore more about the services offered.',
    technologies: ['React.js', 'Tailwind CSS'],
    link: 'https://maker4u.com',
    image: '/maker4u.png',
  },
  {
    title: 'swadilaundry.ae',
    description: 'A laundry service website built with Next.js and Tailwind CSS, providing an intuitive interface for users.',
    technologies: ['Next.js', 'Tailwind CSS'],
    link: 'https://swabilaundry.ae',
    image: '/swabi.png',
  },
  {
    title: 'Heart Disease Prediction with AI Assistant',
    description: 'A Django and Bootstrap-based project featuring doctor booking, a chatbot, and heart disease prediction using supervised machine learning.',
    technologies: ['Django', 'Bootstrap', 'Machine Learning'],
    link: '#',
    image: '/heartdisease.png',
  },
];

const Projects = () => {
  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, rotate: 2 },
  };

  return (
    <section id="projects" className="relative text-white py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-lg mt-4">A selection of my recent work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg mb-4 text-white">{project.description}</p>
                <div className="flex flex-wrap space-x-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

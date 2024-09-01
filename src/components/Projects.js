'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'store2u.ca',
    description: 'A full-fledged e-commerce website built with Next.js and Tailwind CSS, featuring a custom admin panel and MySQL database.',
    technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
    link: 'https://store2u.ca', // Replace with actual link if available
    image: '/store2u.png', // Replace with an actual image of the project
  },
  {
    title: 'maker4u.com',
    description: 'A project built with React.js and Tailwind CSS. You can visit it to explore more about the services offered.',
    technologies: ['React.js', 'Tailwind CSS'],
    link: 'https://maker4u.com',
    image: '/maker4u.png', // Replace with an actual image of the project
  },
  {
    title: 'swadilaundry.ae',
    description: 'A laundry service website built with Next.js and Tailwind CSS, providing an intuitive interface for users.',
    technologies: ['Next.js', 'Tailwind CSS'],
    link: 'https://swabilaundry.ae', // Replace with actual link if available
    image: '/swabi.png', // Replace with an actual image of the project
  },
  {
    title: 'Heart Disease Prediction with AI Assistant',
    description: 'A Django and Bootstrap-based project featuring doctor booking, a chatbot, and heart disease prediction using supervised machine learning.',
    technologies: ['Django', 'Bootstrap', 'Machine Learning'],
    link: '#', // Replace with actual link if available
    image: '/heartdisease.png', // Replace with an actual image of the project
  },
];

const Projects = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Set the background color to black
    currentRef.appendChild(renderer.domElement);

    // Create geometries and materials for shapes
    const circleGeometry = new THREE.CircleGeometry(2, 32);
    const squareGeometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const hexagonGeometry = new THREE.CircleGeometry(2, 6);
    
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true });

    // Create meshes for shapes
    const shapes = [];

    const createShape = (geometry, x, y) => {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(x, y, 0);
      scene.add(shape);
      shapes.push(shape);
    };

    createShape(circleGeometry, -10, 5);
    createShape(squareGeometry, 5, 7);
    createShape(hexagonGeometry, 10, -5);
    createShape(circleGeometry, -7, -8);
    createShape(squareGeometry, 0, -10);
    createShape(hexagonGeometry, 7, 3);

    // Create dot geometry
    const dotGeometry = new THREE.BufferGeometry();
    const dotMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
    const dotCount = 1000;
    const dotPositions = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount; i++) {
      dotPositions[i * 3] = (Math.random() - 0.5) * 40;
      dotPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      dotPositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    dotGeometry.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const dots = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dots);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach(shape => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
      });

      // Move dots slightly
      dots.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, rotate: 2 },
  };

  return (
    <section id="projects" className="relative bg-gray-900 text-white py-20">
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-lg mt-4">A selection of my recent work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg mb-4 text-black">{project.description}</p>
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

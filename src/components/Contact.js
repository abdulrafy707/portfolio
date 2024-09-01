'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
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

    // Create geometries and materials for a professional look
    const planeGeometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.2, transparent: true });

    // Create meshes for shapes
    const shapes = [];

    const createShape = (geometry, x, y) => {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(x, y, 0);
      scene.add(shape);
      shapes.push(shape);
    };

    createShape(planeGeometry, -8, 5);
    createShape(planeGeometry, 7, -4);
    createShape(planeGeometry, 10, 7);

    // Create dot geometry for a particle effect
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

  return (
    <section id="contact" className="relative bg-gray-900 text-white py-2">
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-lg mt-4">I'd love to hear from you. Whether you have a question or just want to say hi, feel free to drop a message!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          <div className="flex flex-col justify-center items-center text-center">
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope className="text-3xl text-blue-600 mr-3" />
              <p className="text-lg">email@example.com</p>
            </motion.div>
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaPhone className="text-3xl text-blue-600 mr-3" />
              <p className="text-lg">+123 456 7890</p>
            </motion.div>
            <motion.div
              className="flex justify-center space-x-6 mt-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-blue-600" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl text-blue-400" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

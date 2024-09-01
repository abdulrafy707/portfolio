'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Abdul Rafy was fantastic to work with. His skills in Next.js and Tailwind CSS are top-notch.",
    name: "John Doe",
    position: "CEO, Example Co.",
    rating: 5,
  },
  {
    quote: "Abdul's ability to turn complex problems into simple, effective solutions is impressive.",
    name: "Jane Smith",
    position: "CTO, Tech Innovators",
    rating: 4,
  },
  {
    quote: "His expertise in Django and machine learning significantly improved our project's outcomes.",
    name: "Emily Davis",
    position: "Lead Developer, AI Solutions",
    rating: 5,
  },
  {
    quote: "Working with Abdul on our e-commerce platform was a great experience. He's reliable and skilled.",
    name: "Michael Brown",
    position: "Project Manager, Ecom Ventures",
    rating: 4,
  },
  {
    quote: "Abdul is a highly professional and talented developer. He delivered above and beyond our expectations.",
    name: "Sarah Johnson",
    position: "COO, Digital Dreams",
    rating: 5,
  },
  {
    quote: "From start to finish, Abdul was a pleasure to work with. His coding skills are second to none.",
    name: "David Wilson",
    position: "Founder, Startup Genius",
    rating: 5,
  },
];

const Testimonials = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Set the background color to black
    currentRef.appendChild(renderer.domElement);

    // Create geometries and materials for different shapes
    const tetrahedronGeometry = new THREE.TetrahedronGeometry(2);
    const octahedronGeometry = new THREE.OctahedronGeometry(2);
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(2);
    const coneGeometry = new THREE.ConeGeometry(2, 4, 32);

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0.3, transparent: true });

    // Create meshes for shapes
    const shapes = [];

    const createShape = (geometry, x, y) => {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(x, y, 0);
      scene.add(shape);
      shapes.push(shape);
    };

    createShape(tetrahedronGeometry, -15, 8);
    createShape(octahedronGeometry, 10, 10);
    createShape(dodecahedronGeometry, -5, -10);
    createShape(coneGeometry, 15, -5);

    // Create dot geometry
    const dotGeometry = new THREE.BufferGeometry();
    const dotMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
    const dotCount = 1200;
    const dotPositions = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount; i++) {
      dotPositions[i * 3] = (Math.random() - 0.5) * 60;
      dotPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      dotPositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
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
    <section id="testimonials" className="relative bg-gray-900 text-white py-20">
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">What People Say</h2>
          <p className="text-lg mt-4">Here are some testimonials from my clients and colleagues.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 ${i < testimonial.rating ? '' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-700">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
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

    // Create geometries and materials for black and white shapes
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const cubeGeometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);

    const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.4, transparent: true });
    const blackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.4, transparent: true });

    // Create meshes for shapes
    const shapes = [];

    const createShape = (geometry, material, x, y) => {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(x, y, 0);
      scene.add(shape);
      shapes.push(shape);
    };

    createShape(sphereGeometry, whiteMaterial, -8, 5);
    createShape(cubeGeometry, blackMaterial, 7, -4);
    createShape(torusGeometry, whiteMaterial, 10, 7);

    // Create dot geometry for subtle particle effect
    const dotGeometry = new THREE.BufferGeometry();
    const dotMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const dotCount = 1500;
    const dotPositions = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount; i++) {
      dotPositions[i * 3] = (Math.random() - 0.5) * 50;
      dotPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      dotPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
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
    <section id="skills" className="relative bg-gray-900 text-white py-20">
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="text-lg mt-4">Technologies and tools I am proficient in.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <skill.icon className="text-6xl text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl text-black font-semibold mb-2">{skill.name}</h3>
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

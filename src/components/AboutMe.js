'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SiJavascript, SiPython, SiHtml5, SiCss3, SiGit, SiNodedotjs } from 'react-icons/si';

const AboutMe = () => {
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

  return (
    <section id="about" className="relative bg-gray-900 text-white py-20">
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg mt-4">A brief introduction to who I am and what I do.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
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

          {/* Right Side - Skills/Technologies */}
          <div className="md:w-1/2 flex justify-center relative z-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow">
                <SiJavascript className="text-yellow-500 text-6xl" />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow">
                <SiPython className="text-blue-500 text-6xl" />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow">
                <SiHtml5 className="text-orange-500 text-6xl" />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow">
                <SiCss3 className="text-blue-700 text-6xl" />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow">
                <SiGit className="text-red-500 text-6xl" />
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow">
                <SiNodedotjs className="text-green-500 text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

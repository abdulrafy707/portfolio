// src/components/ThreeScene.js
'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Set the background color to black
    currentRef.appendChild(renderer.domElement);

    // Create geometries and materials for multiple objects
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.5, 16, 100);
    const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const particlePositions = new Float32Array(particleCount * 3);

    // Create a material for all shapes
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x404040,
      shininess: 100,
    });

    // Create mesh for cube
    const cube = new THREE.Mesh(cubeGeometry, material);
    cube.position.x = -5;
    scene.add(cube);

    // Create mesh for torus
    const torus = new THREE.Mesh(torusGeometry, material);
    torus.position.x = 5;
    scene.add(torus);

    // Create mesh for sphere
    const sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.y = -3;
    scene.add(sphere);

    // Generate particles and add to scene
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const particles = new THREE.Points(particleGeometry, particlesMaterial);
    scene.add(particles);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Spin the torus
      torus.rotation.x += 0.02;
      torus.rotation.y += 0.02;

      // Bounce the sphere
      sphere.position.y += Math.sin(Date.now() * 0.001) * 0.05;

      // Move particles slightly
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />;
};

export default ThreeScene;

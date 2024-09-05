// src/app/page.js
import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects'; // Import the Projects component
import ThreeScene from '@/components/ThreeScene';
import '../../globals.css';
import Testimonials from '@/components/Testimonials';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Abdul Rafy's Portfolio</title>
        <meta name="description" content="Portfolio of Abdul Rafy - Full-Stack Developer specializing in Next.js, React, and Django." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background 3D Scene */}
      {/* <ThreeScene /> */}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        {/* <Projects /> */}
        {/* <Skills/> */}
        
        
        <Contact/>
        <Testimonials/>
        <Footer/>
      </main>
    </div>
  );
}

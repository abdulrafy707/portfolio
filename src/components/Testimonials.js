'use client'
import React from 'react';
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
  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, rotate: 2 },
  };

  return (
    <section id="testimonials" className="relative text-white py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">What People Say</h2>
          <p className="text-lg mt-4">Here are some testimonials from my clients and colleagues.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-300">{testimonial.position}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 ${i < testimonial.rating ? '' : 'text-gray-500'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-300">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

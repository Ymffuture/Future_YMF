import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-red-600 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About PestGuard
      </motion.h2>

      <motion.div
        className="bg-black text-white p-6 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex items-start space-x-4">
          <FaShieldAlt className="text-yellow-400 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            At <span className="text-red-500 font-semibold">PestGuard</span>, we are committed to providing fast, safe, and
            effective pest control solutions. With over <span className="text-yellow-400 font-semibold">10 years of experience</span>,
            we specialize in both residential and commercial pest management.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <FaLeaf className="text-green-400 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            Our licensed technicians use the latest <span className="text-green-400">eco-friendly techniques</span> and technologies,
            ensuring your environment stays protected while remaining pest-free.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            Based in <span className="text-yellow-400 font-semibold">Orange Farm, Johannesburg South</span>, we proudly serve local
            communities with a reputation built on trust, quality, and customer satisfaction.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

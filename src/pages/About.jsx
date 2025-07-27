import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaMapMarkerAlt, FaBug, FaSyringe, FaTree } from 'react-icons/fa';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-red-600 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Moele Pest Solutions
      </motion.h2>

      <motion.div
        className="bg-black text-white p-6 rounded-lg shadow-lg space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Company Overview */}
        <div className="flex items-start space-x-4">
          <FaShieldAlt className="text-yellow-400 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            At <span className="text-red-500 font-semibold">Moele Pest Solutions</span>, we offer fast, safe, and eco-conscious pest
            control services. With over <span className="text-yellow-400 font-semibold">7 years of hands-on experience</span>, we
            specialize in both residential and commercial solutions.
          </p>
        </div>

        {/* Eco-Friendly */}
        <div className="flex items-start space-x-4">
          <FaLeaf className="text-green-400 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            We use <span className="text-green-400 font-semibold">eco-friendly techniques</span> such as biological pest control,
            integrated pest management (IPM), and low-toxicity chemical treatments.
          </p>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            Serving communities around <span className="text-yellow-400 font-semibold">Polokwane, Lephalale, and Limpopo</span>, we
            understand the local environment and pest challenges.
          </p>
        </div>

        {/* Common Pests in Polokwane Trees */}
        <div className="flex items-start space-x-4">
          <FaBug className="text-red-400 text-2xl mt-1" />
          <div>
            <p className="text-lg font-semibold text-yellow-300 mb-2">Common Tree Pests in Polokwane:</p>
            <ul className="list-disc list-inside text-white space-y-1">
              <li><strong>Aphids:</strong> Cause leaf curling, stunted growth. ✅ Use neem oil or insecticidal soap.</li>
              <li><strong>Whiteflies:</strong> Leave honeydew leading to black mold. ✅ Use yellow sticky traps or natural predators.</li>
              <li><strong>Mealybugs:</strong> Target fruit trees and ornamentals. ✅ Wipe with alcohol-dipped cotton or prune infested parts.</li>
              <li><strong>Borer Beetles:</strong> Bore into bark, damaging sap flow. ✅ Apply systemic insecticide or prune affected branches.</li>
            </ul>
          </div>
        </div>

        {/* Tree Care Advice */}
        <div className="flex items-start space-x-4">
          <FaTree className="text-green-300 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            Regular pruning, watering, and soil treatment ensure healthier trees that resist pests naturally. Trees such as <span className="text-yellow-300">Mopani</span>, <span className="text-yellow-300">Marula</span>, and <span className="text-yellow-300">Baobab</span> benefit from seasonal pest checkups.
          </p>
        </div>

        {/* Treatment Methods */}
        <div className="flex items-start space-x-4">
          <FaSyringe className="text-red-300 text-2xl mt-1" />
          <p className="text-lg leading-relaxed">
            Treatments we use include:
            <span className="block mt-2">
              🔹 <strong>Biological Control:</strong> Ladybugs and parasitic wasps for aphids and whiteflies.
            </span>
            <span>
              🔹 <strong>Systemic Insecticides:</strong> For deep-rooted infestations like borers.
            </span>
            <span>
              🔹 <strong>Neem Oil:</strong> Organic option safe for kids, pets, and pollinators.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

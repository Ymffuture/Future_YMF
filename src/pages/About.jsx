import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLeaf,
  FaMapMarkerAlt,
  FaBug,
  FaSyringe,
  FaTree,
  FaCheckCircle,
  FaUsers,
  FaClock,
  FaTools,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-[#1877F2] mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Moele Pest Solutions
      </motion.h2>

      {/* Main Card */}
      <motion.div
        className="bg-white shadow-md rounded-xl p-8 space-y-10 border border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* COMPANY OVERVIEW */}
        <div className="flex items-start space-x-4">
          <FaShieldAlt className="text-[#1463F3] text-3xl mt-1" />
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="font-bold text-[#1877F2]">Moele Pest Solutions</span> provides fast,
            reliable and eco-friendly pest control services across Limpopo and
            Gauteng. With over{" "}
            <span className="text-[#1877F2] font-semibold">
              7 years of industry experience
            </span>
            , our mission is to keep homes and businesses pest-free using
            modern, safe, and certified techniques.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Why Choose Us?
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex gap-3">
              <FaUsers className="text-blue-500 mt-1" />
              Experienced & certified pest specialists
            </li>
            <li className="flex gap-3">
              <FaClock className="text-blue-500 mt-1" />
              Same-day and emergency treatments available
            </li>
            <li className="flex gap-3">
              <FaLeaf className="text-green-500 mt-1" />
              Eco-friendly & safe for children and pets
            </li>
            <li className="flex gap-3">
              <FaTools className="text-yellow-500 mt-1" />
              Advanced equipment & modern treatment solutions
            </li>
          </ul>
        </div>

        {/* ECO-FRIENDLY */}
        <div className="flex items-start space-x-4">
          <FaLeaf className="text-green-500 text-3xl mt-1" />
          <p className="text-lg text-gray-800 leading-relaxed">
            We prioritize safety by using{" "}
            <span className="font-semibold text-green-600">
              low-toxicity and bio-friendly chemicals
            </span>{" "}
            combined with Integrated Pest Management (IPM). This ensures long-term pest
            prevention without harming your family or the environment.
          </p>
        </div>

        {/* HOW OUR PROCESS WORKS */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-4 flex items-center gap-2">
            <FaBug className="text-red-500" /> How Our Pest Control Process Works
          </h3>
          <ol className="space-y-3 text-gray-700">
            <li>
              <strong>1. Inspection:</strong> We assess the area and identify infestation levels.
            </li>
            <li>
              <strong>2. Treatment Plan:</strong> A tailored approach based on pest type and
              environment.
            </li>
            <li>
              <strong>3. Application:</strong> Safe, effective treatment using sprays, gels, bait
              stations or fumigation.
            </li>
            <li>
              <strong>4. Prevention:</strong> We seal entry points and provide maintenance advice.
            </li>
            <li>
              <strong>5. Follow-Up:</strong> Optional scheduled checkups to ensure pests don't return.
            </li>
          </ol>
        </div>

        {/* SERVICE AREAS */}
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-red-500 text-3xl mt-1" />
          <p className="text-lg text-gray-800 leading-relaxed">
            We proudly serve:  
            <span className="font-semibold text-[#1877F2] block mt-1">
              Polokwane • Lephalale • Seshego • Mokopane • Tzaneen • Johannesburg South • Orange Farm • Surrounding areas
            </span>
          </p>
        </div>

        {/* COMMON PESTS */}
        <div className="flex items-start space-x-4">
          <FaBug className="text-red-400 text-3xl mt-1" />
          <div>
            <p className="text-lg font-semibold text-gray-900 mb-3">
              Common Pests We Deal With
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Bed Bugs – full room spray + mattress treatment</li>
              <li>Cockroaches – gel bait + residual chemical spray</li>
              <li>Rats & Mice – bait stations + entry-point sealing</li>
              <li>Ants & Termites – soil treatment + perimeter barriers</li>
              <li>Flies, Mosquitoes, Wasps – fumigation & nest removal</li>
            </ul>
          </div>
        </div>

        {/* TREE & GARDEN PESTS */}
        <div className="flex items-start space-x-4">
          <FaTree className="text-green-600 text-3xl mt-1" />
          <p className="text-lg text-gray-800 leading-relaxed">
            We also offer garden and tree pest management for trees such as{" "}
            <span className="font-semibold text-green-700">Mopani, Marula, Avocado, Mango, Lemon,</span>{" "}
            and more—protecting them from aphids, whiteflies, mealybugs, borers, and fungus.
          </p>
        </div>

        {/* TREATMENT METHODS */}
        <div className="flex items-start space-x-4">
          <FaSyringe className="text-red-400 text-3xl mt-1" />
          <p className="text-lg text-gray-800 leading-relaxed">
            Our treatment techniques include:
            <span className="block mt-2">
              ✔ <strong>Biological Control</strong> — natural predators like ladybugs & wasps
            </span>
            <span className="block">
              ✔ <strong>Systemic Insecticides</strong> — effective for termites & borers
            </span>
            <span className="block">
              ✔ <strong>Gel Baiting</strong> — for cockroaches in kitchens & appliances
            </span>
            <span className="block">
              ✔ <strong>Residual Sprays</strong> — long-lasting protection for walls & surfaces
            </span>
            <span className="block">
              ✔ <strong>Fumigation</strong> — whole-room or industrial treatment
            </span>
          </p>
        </div>

        {/* MISSION & VISION */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To provide reliable, affordable, and environmentally responsible pest management
            solutions that protect homes, businesses, and communities.
          </p>

          <h3 className="font-semibold text-xl text-gray-900 mt-5 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To be Limpopo’s most trusted pest-control brand known for innovation, safety, and
            exceptional customer experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

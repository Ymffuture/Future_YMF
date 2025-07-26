import React from 'react';
import { ShieldCheck, AlarmClock, ThumbsUp, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center py-28 px-4 ">
      {/* Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#FF0000]"
      >
        Fast & Reliable Pest Control
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-lg max-w-2xl"
      >
        We eliminate pests quickly and safely from your home or office.
      </motion.p>

      {/* Overview Icons */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full"
      >
        <div className="flex flex-col items-center ">
          <ShieldCheck className="w-10 h-10 text-[#FFD700] mb-3" />
          <p className="text-sm font-medium">Certified & Safe</p>
        </div>
        <div className="flex flex-col items-center">
          <AlarmClock className="w-10 h-10 text-[#FFD700] mb-3" />
          <p className="text-sm font-medium">Fast Response</p>
        </div>
        <div className="flex flex-col items-center ">
          <ThumbsUp className="w-10 h-10 text-[#FFD700] mb-3" />
          <p className="text-sm font-medium">Trusted Technicians</p>
        </div>
        <div className="flex flex-col items-center ">
          <PhoneCall className="w-10 h-10 text-[#FFD700] mb-3" />
          <p className="text-sm font-medium">24/7 Support</p>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        href="https://wa.me/27634414863?text=Hi%20I%20need%20pest%20control%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block px-8 py-3 rounded-md bg-[#FF0000] text-white font-semibold hover:bg-white hover:text-black border-2 border-[#FF0000] transition-all"
      >
        Book on WhatsApp
      </motion.a>
    </section>
  );
};

export default Home;


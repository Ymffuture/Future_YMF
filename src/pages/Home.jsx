import React, { useEffect, useState } from 'react';
import { ShieldCheck, AlarmClock, ThumbsUp, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import pestAnimation from '../assets/Pest.json'; // Make sure to add your Lottie file

const Home = () => {
  const [showStickyButtons, setShowStickyButtons] = useState(false);

  // Show sticky buttons only after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButtons(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-yellow-50 py-28 px-6 text-center overflow-hidden shadow-lg">
      {/* Top Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto mb-8"
      >
        <Lottie animationData={pestAnimation} loop={true} />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-[#FF0000] drop-shadow-md"
      >
        Fast & Reliable Pest Control
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
      >
        We eliminate pests quickly and safely from your home or office, with guaranteed protection and 24/7 support.
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto"
      >
        {[
          { icon: <ShieldCheck className="w-10 h-10 text-yellow-500 mb-3" />, label: 'Certified & Safe' },
          { icon: <AlarmClock className="w-10 h-10 text-yellow-500 mb-3" />, label: 'Fast Response' },
          { icon: <ThumbsUp className="w-10 h-10 text-yellow-500 mb-3" />, label: 'Trusted Technicians' },
          { icon: <PhoneCall className="w-10 h-10 text-yellow-500 mb-3" />, label: '24/7 Support' }
        ].map(({ icon, label }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center"
          >
            {icon}
            <p className="text-sm font-medium text-gray-800">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main CTA */}
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 inline-block px-10 py-4 rounded-full bg-[#FF0000] text-white font-bold text-lg shadow-md hover:bg-white hover:text-[#FF0000] hover:border-[#FF0000] border-2 transition-all"
      >
        Book on WhatsApp
      </motion.a>

      {/* Sticky Buttons on Scroll */}
      {showStickyButtons && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all"
          >
            Chat on WhatsApp
          </a>

          {/* Call Button */}
          <a
            href="tel:+27723162651"
            className="px-5 py-3 bg-[#FF0000] text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-[#FF0000] border-2 border-[#FF0000] transition-all"
          >
            Call Us Now
          </a>
        </div>
      )}
    </section>
  );
};

export default Home;


import React from 'react';
import { ShieldCheck, AlarmClock, ThumbsUp, PhoneCall } from 'lucide-react'; // modern, clean icons

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center py-28 px-4 bg-green-50">
      <h2 className="text-4xl md:text-5xl font-bold text-green-700">Fast & Reliable Pest Control</h2>
      <p className="mt-4 text-lg max-w-2xl text-gray-700">
        We eliminate pests quickly and safely from your home or office.
      </p>

      {/* Icons Row */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-10 h-10 text-green-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">Certified & Safe</p>
        </div>
        <div className="flex flex-col items-center">
          <AlarmClock className="w-10 h-10 text-green-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">Fast Response</p>
        </div>
        <div className="flex flex-col items-center">
          <ThumbsUp className="w-10 h-10 text-green-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">Trusted Technicians</p>
        </div>
        <div className="flex flex-col items-center">
          <PhoneCall className="w-10 h-10 text-green-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">24/7 Support</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/27634414863?text=Hi%20I%20need%20pest%20control%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Book on WhatsApp
      </a>
    </section>
  );
};

export default Home;

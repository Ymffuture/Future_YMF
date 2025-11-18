import React, { useEffect, useState, Suspense, useMemo } from 'react';
import {
  ShieldCheck,
  AlarmClock,
  ThumbsUp,
  PhoneCall,
  MessageSquare,
  AlertTriangle,
  Paw,
  FirstAid,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import pestAnimation from '../assets/Pest.json'; // Lottie animation file (kept local)

// Lazy-load Lottie so the hero bundle stays small
const Lottie = React.lazy(() => import('lottie-react'));

const FeatureCard = ({ icon, title }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="flex flex-col items-center text-center p-4">
    <div className="mb-3">{icon}</div>
    <p className="text-sm font-medium text-gray-800">{title}</p>
  </motion.div>
);

const InfoBadge = ({ icon, title, children }) => (
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-[#FF0000]">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
    <div className="text-sm text-gray-700">{children}</div>
  </div>
);

const PetSafetyList = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const Home = () => {
  const [showStickyButtons, setShowStickyButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyButtons(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // memoize static arrays to avoid re-creation on each render
  const features = useMemo(
    () => [
      { icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />, label: 'Certified & Safe' },
      { icon: <AlarmClock className="w-10 h-10 text-yellow-500" />, label: 'Fast Response' },
      { icon: <ThumbsUp className="w-10 h-10 text-yellow-500" />, label: 'Trusted Technicians' },
      { icon: <PhoneCall className="w-10 h-10 text-yellow-500" />, label: '24/7 Support' }
    ],
    []
  );

  const negativeEffects = useMemo(
    () => [
      'Vomiting or drooling',
      'Tremors, seizures or uncoordinated movement',
      'Excessive drooling, pawing at mouth',
      'Lethargy, weakness, collapse',
      'Difficulty breathing or rapid breathing',
      'Severe skin irritation after contact'
    ],
    []
  );

  const firstAid = useMemo(
    () => [
      'Remove pet to fresh air and a safe location away from the treated area.',
      'If the product is on fur/paws: gently wash with mild soap and warm water — avoid getting soap in eyes.',
      'Do NOT induce vomiting unless directed by a veterinarian or poison control.',
      'Contact your veterinarian or emergency animal clinic immediately — have product label & time of exposure ready.',
      'If ingestion of bait or product packaging: bring a sample to the vet and call immediately.'
    ],
    []
  );

  const prevention = useMemo(
    () => [
      'Keep pets out of treated areas until surfaces are fully dry (follow product label).',
      'Secure bait stations where only pests can access them (not pets/children).',
      'Consider non-chemical methods first for inside spaces (traps, sealing gaps, sanitation).',
      'Store pesticides securely and out of reach of pets.',
      'Notify household members and place visible “treated” signs if needed.'
    ],
    []
  );

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Top Lottie */}
      <div className="max-w-md mx-auto mb-6">
        <Suspense fallback={<div className="h-48 w-full bg-gray-100 rounded animate-pulse" />}>
          <Lottie animationData={pestAnimation} loop />
        </Suspense>
      </div>

      {/* Hero */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-[#FF0000] text-center drop-shadow-md"
      >
        Fast & Reliable Pest Control
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-5 text-center text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
      >
        We eliminate pests quickly and safely from your home or office, with guaranteed protection and 24/7 support.
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {features.map((f) => (
          <FeatureCard key={f.label} icon={f.icon} title={f.label} />
        ))}
      </motion.div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-[#FF0000] text-white font-bold text-lg shadow-md hover:bg-white hover:text-[#FF0000] border-2 border-transparent hover:border-[#FF0000] transition-all"
        >
          Book on WhatsApp
        </a>
      </div>

      {/* Pets & Safety Section */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Paw className="w-6 h-6 text-[#FF0000]" /> Pets & Safety — Read Before Treatment
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column: Info & FAQs */}
          <div className="space-y-4">
            <InfoBadge icon={<AlertTriangle className="w-6 h-6" />} title="Why this matters">
              Pesticides and some baits can cause serious reactions in pets. We always recommend sharing pet information
              before any treatment so we can use pet-safe approaches. If your pet has been exposed or shows symptoms,
              follow the first-aid steps and contact your veterinarian immediately. 
            </InfoBadge>

            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold mb-2">Common negative effects (watch for these)</h4>
              <PetSafetyList items={negativeEffects} />
            </div>

            <details className="bg-white border rounded-lg p-4 shadow-sm group">
              <summary className="cursor-pointer font-medium">
                First aid & emergency steps <span className="ml-2 text-xs text-gray-500">(click to expand)</span>
              </summary>
              <div className="mt-3 text-sm text-gray-700">
                <PetSafetyList items={firstAid} />
                <p className="mt-3 text-xs text-gray-500">
                  If in South Africa, have your veterinarian or nearest emergency clinic number ready. Keep the product label
                  available to show the doctor. In severe cases call your vet or an emergency animal poison control line.
                </p>
              </div>
            </details>
          </div>

          {/* Right column: Prevention & Quick Tips */}
          <div className="space-y-4">
            <InfoBadge icon={<FirstAid className="w-6 h-6" />} title="Prevention & recommended practices">
              Small changes reduce risk: use enclosed bait stations, keep pets out of rooms during treatment until surfaces
              are dry, and prefer mechanical traps indoors when possible.
            </InfoBadge>

            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold mb-2">Quick prevention checklist</h4>
              <PetSafetyList items={prevention} />
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm rounded">
              <strong className="block">Emergency contact</strong>
              <p className="text-sm text-gray-700">If you suspect poisoning call your veterinarian or your nearest emergency animal clinic immediately.</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <details className="bg-white border rounded-lg p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">Myths vs facts about pets & pest control</summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p><strong>Myth:</strong> If a product is “natural” it’s completely safe for pets. <br /><strong>Fact:</strong> Natural products can still be toxic at the wrong dose. Always follow instructions and keep pets away during treatment.</p>
              <p><strong>Myth:</strong> Dry surfaces are safe immediately. <br /><strong>Fact:</strong> Many residues remain after drying; follow label re-entry intervals and manufacturer guidance.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Sticky Buttons */}
      {showStickyButtons && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
          <a
            href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-[#25D366] border-2 border-transparent hover:border-[#25D366] transition-all"
            aria-label="Contact via WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="sr-only">WhatsApp</span>
          </a>

          <a
            href="tel:+27723162651"
            className="flex items-center gap-2 px-4 py-3 bg-[#FF0000] text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-[#FF0000] border-2 border-transparent hover:border-[#FF0000] transition-all"
            aria-label="Call us"
          >
            <PhoneCall className="w-5 h-5" />
            <span className="sr-only">Call</span>
          </a>
        </div>
      )}
    </section>
  );
};

export default Home;

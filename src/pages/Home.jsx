
import React, { useEffect, useState, useMemo, useCallback, Suspense, lazy } from "react";
import { ShieldCheck, AlarmClock, ThumbsUp, PhoneCall, MessageSquare, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
// Lottie is lazy-loaded to reduce initial bundle size
const Lottie = lazy(() => import("lottie-react"));
import pestAnimation from "../assets/Pest.json"; // keep asset import static for bundlers

// Simple ErrorBoundary to avoid whole-app crash if Lottie or other child throws
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // In prod, send to logging (Sentry/Winston) here
    // console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-4 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6" />
            <div>
              <strong>Animation failed to load.</strong>
              <div className="text-sm">We still show the main content — try refreshing if needed.</div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Small custom hook to track scroll threshold (keeps component tidy & testable)
function useScrollThreshold(threshold = 200) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return past;
}

// Accessible accordion item (controlled)
const AccordionItem = ({ id, title, children, open, onToggle }) => {
  const buttonId = `acc-btn-${id}`;
  const panelId = `acc-panel-${id}`;
  return (
    <div className="border-b last:border-b-0">
      <h3>
        <button
          id={buttonId}
          aria-controls={panelId}
          aria-expanded={open}
          onClick={onToggle}
          className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none focus:ring focus:ring-offset-2"
        >
          <span className="font-semibold">{title}</span>
          <span aria-hidden className="ml-4">{open ? "▴" : "▾"}</span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="px-4 pb-4 text-sm text-gray-700"
      >
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const showStickyButtons = useScrollThreshold(200);
  const [openId, setOpenId] = useState(null);

  // memoized features to avoid reallocation on each render
  const features = useMemo(
    () => [
      { Icon: ShieldCheck, label: "Certified & Safe" },
      { Icon: AlarmClock, label: "Fast Response" },
      { Icon: ThumbsUp, label: "Trusted Technicians" },
      { Icon: PhoneCall, label: "24/7 Support" }
    ],
    []
  );

  const toggleAccordion = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="relative py-20 px-6 text-center overflow-hidden max-w-7xl mx-auto">
      {/* Top Lottie Animation - lazy and suspended */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md mx-auto mb-6">
        <ErrorBoundary>
          <Suspense fallback={<div className="py-10">Loading animation...</div>}>
            <Lottie animationData={pestAnimation} loop={true} />
          </Suspense>
        </ErrorBoundary>
      </motion.div>

      <motion.h2 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-red-600 drop-shadow-md">
        Fast & Reliable Pest Control
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-700">
        We eliminate pests quickly and safely from your home or office — we also follow recommended risk-reduction approaches and explain trade-offs so you can make an informed choice.
      </motion.p>

      {/* Features */}
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map(({ Icon, label }) => (
          <motion.div key={label} whileHover={{ scale: 1.03 }} className="flex flex-col items-center text-center">
            <Icon className="w-10 h-10 text-yellow-500 mb-3" aria-hidden />
            <p className="text-sm font-medium text-gray-800">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main CTA */}
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block px-8 py-3 rounded-full bg-red-600 text-white font-semibold text-base shadow-md hover:bg-white hover:text-red-600 border-2 border-red-600 transition-colors focus:outline-none focus:ring focus:ring-offset-2"
      >
        Book on WhatsApp
      </motion.a>

      {/* Negative outcomes & facts (accessible accordion) */}
      <section aria-labelledby="negatives-heading" className="mt-14 max-w-4xl mx-auto text-left">
        <h3 id="negatives-heading" className="text-xl font-bold mb-4">Negative outcomes & important facts</h3>
        <p className="mb-4 text-sm text-gray-700">
          We believe in transparency. Below are common downsides, long-term concerns, and safe alternatives so you can decide what's right for your space.
        </p>

        <div className="border rounded-md divide-y">
          <AccordionItem
            id="health"
            title="Health risks of pesticides"
            open={openId === "health"}
            onToggle={() => toggleAccordion("health")}
          >
            <p>
              Some pesticide chemistries (especially organophosphates, carbamates and older classes) can affect the nervous system and are linked to other health outcomes when exposure is high or frequent. People with respiratory sensitivity, pregnant women and children are more vulnerable.
            </p>
            <div className="mt-2 text-xs text-gray-600">
              Sources: EPA health risk summaries and recent systematic reviews.
            </div>
          </AccordionItem>

          <AccordionItem
            id="resistance"
            title="Resistance & reduced long-term effectiveness"
            open={openId === "resistance"}
            onToggle={() => toggleAccordion("resistance")}
          >
            <p>
              Repeated use of the same insecticide classes selects for resistant individuals, causing treatments to fail over time. Rotating methods and judicious use is important.
            </p>
            <div className="mt-2 text-xs text-gray-600">Sources: CDC/WHO resistance literature.</div>
          </AccordionItem>

          <AccordionItem
            id="environment"
            title="Environmental & non-target impacts"
            open={openId === "environment"}
            onToggle={() => toggleAccordion("environment")}
          >
            <p>
              Pesticides can harm beneficial insects (pollinators), birds, aquatic organisms, and reduce biodiversity when misused. Runoff and drift are common pathways to contamination.
            </p>
            <div className="mt-2 text-xs text-gray-600">Sources: peer-reviewed syntheses and NGO analyses.</div>
          </AccordionItem>

          <AccordionItem
            id="recurrence"
            title="Treatment failures & recurring infestations"
            open={openId === "recurrence"}
            onToggle={() => toggleAccordion("recurrence")}
          >
            <p>
              If root causes (entry points, food/water sources) are not addressed, pests return — leading to repeated treatments and higher cost/chemical exposure. Structural fixes + sanitation are often required.
            </p>
          </AccordionItem>

          <AccordionItem
            id="legal"
            title="Regulatory & safety compliance"
            open={openId === "legal"}
            onToggle={() => toggleAccordion("legal")}
          >
            <p>
              Some chemicals are restricted in different countries. Professional applicators follow label instructions and local regulations — do not attempt unauthorized commercial treatments yourself.
            </p>
          </AccordionItem>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          <strong>Recommended approach:</strong> Prefer Integrated Pest Management (IPM): inspection, monitoring, exclusion, sanitation, targeted low-toxicity products, and only use higher-toxicity pesticides as last resort. Your service should explain trade-offs and record what was used and why.
        </div>
      </section>

      {/* Sticky Buttons */}
      {showStickyButtons && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          <a
            href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-green-500 border-2 border-green-500 transition-colors focus:outline-none focus:ring focus:ring-offset-2"
            aria-label="Message on WhatsApp"
          >
            <MessageSquare className="w-5 h-5" aria-hidden />
            <span className="sr-only">WhatsApp</span>
          </a>

          <a
            href="tel:+27723162651"
            className="flex items-center gap-2 px-4 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-red-600 border-2 border-red-600 transition-colors focus:outline-none focus:ring focus:ring-offset-2"
            aria-label="Call"
          >
            <PhoneCall className="w-5 h-5" aria-hidden />
            <span className="sr-only">Call</span>
          </a>
        </div>
      )}
    </section>
  );
};

export default Home;

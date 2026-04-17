import React, { useEffect, useState, useMemo, useCallback, Suspense, lazy } from "react";
import { 
  ShieldCheck, 
  AlarmClock, 
  ThumbsUp, 
  PhoneCall, 
  MessageSquare, 
  AlertTriangle,
  Zap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Headphones
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Lottie is lazy-loaded to reduce initial bundle size
const Lottie = lazy(() => import("lottie-react"));
import pestAnimation from "../assets/Pest.json";

// SwiftMeta Logo Component
const SwiftMetaLogo = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5", 
    lg: "h-6 w-6",
    xl: "h-8 w-8"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path 
            d="M12 2L2 7L12 12L22 7L12 2Z" 
            fill="url(#gradient1)" 
            className="drop-shadow-lg"
          />
          <path 
            d="M2 17L12 22L22 17" 
            stroke="url(#gradient2)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M2 12L12 17L22 12" 
            stroke="url(#gradient3)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-80"
          />
          <defs>
            <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="2" y1="17" x2="22" y2="17" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
        SwiftMeta
      </span>
    </div>
  );
};

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
  }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <div>
              <strong className="text-amber-100">Animation failed to load.</strong>
              <div className="text-sm text-amber-200/80 mt-1">We still show the main content — try refreshing if needed.</div>
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
    <div className="border-b border-slate-700/50 last:border-b-0">
      <h3>
        <button
          id={buttonId}
          aria-controls={panelId}
          aria-expanded={open}
          onClick={onToggle}
          className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all group"
        >
          <span className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{title}</span>
          <motion.span 
            aria-hidden 
            className="ml-4 text-cyan-400"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Smart Feature Card Component
const FeatureCard = ({ Icon, label, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-cyan-400" aria-hidden />
      </div>
      <h3 className="font-semibold text-slate-100 mb-2">{label}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  </motion.div>
);

// Trust Badge Component
const TrustBadge = ({ Icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
    <Icon className="w-4 h-4 text-cyan-400" />
    <span className="text-sm font-medium text-slate-300">{text}</span>
  </div>
);

const Home = () => {
  const showStickyButtons = useScrollThreshold(200);
  const [openId, setOpenId] = useState(null);

  // memoized features to avoid reallocation on each render
  const features = useMemo(
    () => [
      { 
        Icon: ShieldCheck, 
        label: "Certified & Safe", 
        description: "Licensed professionals using EPA-approved methods that prioritize your family's safety." 
      },
      { 
        Icon: Zap, 
        label: "Rapid Response", 
        description: "Emergency call-out within 2 hours. We understand pest problems can't wait." 
      },
      { 
        Icon: Award, 
        label: "Expert Technicians", 
        description: "Certified specialists with 10+ years experience in residential and commercial pest control." 
      },
      { 
        Icon: Headphones, 
        label: "24/7 Support", 
        description: "Round-the-clock assistance and monitoring to ensure lasting protection." 
      }
    ],
    []
  );

  const toggleAccordion = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md"
          >
            <SwiftMetaLogo size="md" />
            <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Powered by</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-6 px-6 py-3 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md"
          >
            <a href="#services" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#faq" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">FAQ</a>
            <a 
              href="tel:+27723162651"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden max-w-7xl mx-auto z-10">
        {/* Top Lottie Animation - lazy and suspended */}
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="max-w-md mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-2xl" />
          <ErrorBoundary>
            <Suspense fallback={
              <div className="py-10 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Lottie animationData={pestAnimation} loop={true} />
            </Suspense>
          </ErrorBoundary>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <TrustBadge Icon={CheckCircle2} text="Licensed & Insured" />
          <TrustBadge Icon={Shield} text="Money-Back Guarantee" />
          <TrustBadge Icon={Clock} text="2-Hour Response" />
        </motion.div>

        <motion.h2 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Smart Pest Control
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }} 
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-slate-400 leading-relaxed"
        >
          Experience the future of pest management. Our SwiftMeta-powered platform delivers 
          precision targeting, predictive prevention, and transparent reporting for complete peace of mind.
        </motion.p>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {features.map(({ Icon, label, description }, index) => (
            <FeatureCard 
              key={label} 
              Icon={Icon} 
              label={label} 
              description={description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Book on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+27723162651"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-lg hover:bg-slate-700 hover:border-slate-600 transition-all"
          >
            <PhoneCall className="w-5 h-5 text-cyan-400" />
            Call +27 72 316 2651
          </motion.a>
        </motion.div>

        {/* SwiftMeta Intelligence Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur-md max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <SwiftMetaLogo size="md" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-slate-200 mb-1">Intelligent Pest Detection</h4>
              <p className="text-sm text-slate-400">
                Our SwiftMeta AI analyzes infestation patterns, predicts hotspots, and optimizes treatment schedules 
                for maximum effectiveness with minimal environmental impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Negative outcomes & facts (accessible accordion) */}
        <section aria-labelledby="negatives-heading" className="mt-20 max-w-3xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 id="negatives-heading" className="text-2xl font-bold text-slate-100">Transparency & Safety</h3>
            </div>
            <p className="mb-6 text-slate-400 leading-relaxed">
              We believe in complete transparency. Below are important considerations about pest control methods, 
              potential risks, and our commitment to safety through SwiftMeta's intelligent monitoring systems.
            </p>

            <div className="border border-slate-700/50 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm">
              <AccordionItem
                id="health"
                title="Health risks of pesticides"
                open={openId === "health"}
                onToggle={() => toggleAccordion("health")}
              >
                <p className="text-slate-300">
                  Some pesticide chemistries (especially organophosphates, carbamates and older classes) can affect the nervous system and are linked to other health outcomes when exposure is high or frequent. People with respiratory sensitivity, pregnant women and children are more vulnerable.
                </p>
                <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  SwiftMeta monitors exposure levels in real-time
                </div>
              </AccordionItem>

              <AccordionItem
                id="resistance"
                title="Resistance & reduced long-term effectiveness"
                open={openId === "resistance"}
                onToggle={() => toggleAccordion("resistance")}
              >
                <p className="text-slate-300">
                  Repeated use of the same insecticide classes selects for resistant individuals, causing treatments to fail over time. Rotating methods and judicious use is important.
                </p>
                <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  AI-powered rotation scheduling prevents resistance
                </div>
              </AccordionItem>

              <AccordionItem
                id="environment"
                title="Environmental & non-target impacts"
                open={openId === "environment"}
                onToggle={() => toggleAccordion("environment")}
              >
                <p className="text-slate-300">
                  Pesticides can harm beneficial insects (pollinators), birds, aquatic organisms, and reduce biodiversity when misused. Runoff and drift are common pathways to contamination.
                </p>
                <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" />
                  Precision targeting minimizes environmental impact
                </div>
              </AccordionItem>

              <AccordionItem
                id="recurrence"
                title="Treatment failures & recurring infestations"
                open={openId === "recurrence"}
                onToggle={() => toggleAccordion("recurrence")}
              >
                <p className="text-slate-300">
                  If root causes (entry points, food/water sources) are not addressed, pests return — leading to repeated treatments and higher cost/chemical exposure. Structural fixes + sanitation are often required.
                </p>
              </AccordionItem>

              <AccordionItem
                id="legal"
                title="Regulatory & safety compliance"
                open={openId === "legal"}
                onToggle={() => toggleAccordion("legal")}
              >
                <p className="text-slate-300">
                  Some chemicals are restricted in different countries. Professional applicators follow label instructions and local regulations — do not attempt unauthorized commercial treatments yourself.
                </p>
              </AccordionItem>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <p className="text-sm text-cyan-200/80">
                <strong className="text-cyan-400">SwiftMeta Recommended Approach:</strong> We utilize Integrated Pest Management (IPM) protocols enhanced by machine learning: inspection, monitoring, exclusion, sanitation, targeted low-toxicity products, and only use higher-toxicity pesticides as last resort. Our system records every treatment with full transparency.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer with SwiftMeta Branding */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-slate-800"
        >
          <div className="flex flex-col items-center gap-6">
            <SwiftMetaLogo size="lg" />
            <p className="text-slate-500 text-sm text-center max-w-md">
              Protecting homes and businesses with intelligent pest management solutions. 
              Powered by advanced AI and decades of expertise.
            </p>
            <div className="flex items-center gap-6 text-slate-600 text-sm">
              <span>© 2026 Smart Pest Control</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span>Powered by SwiftMeta</span>
            </div>
          </div>
        </motion.footer>
      </section>

      {/* Sticky Buttons */}
      <AnimatePresence>
        {showStickyButtons && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/27723162651?text=Hi%20I%20need%20pest%20control%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
              aria-label="Message on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" aria-hidden />
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+27723162651"
              className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
              aria-label="Call"
            >
              <PhoneCall className="w-5 h-5" aria-hidden />
              <span>Call Now</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

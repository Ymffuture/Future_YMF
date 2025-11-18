import React from "react";
import { motion } from "framer-motion";
import { Tag } from "antd";
import {
  Bug,
  SprayCan,
  ShieldAlert,
  Flame,
  Skull,
  Sparkles,
} from "lucide-react";

import termiteImg from "../assets/terminal.jpg";
import rodentsImg from "../assets/received_749126384429751.jpeg";
import bedbugsImg from "../assets/received_746896064595781.jpeg";
import cockroachImg from "../assets/cockroach.jpg";
import fumigationImg from "../assets/terminal3.jpg";
import clean1 from "../assets/surfacesclean.jpeg";
import clean2 from "../assets/images.jpeg";
import clean5 from "../assets/update.jpeg";
import clean4 from "../assets/ants.jpeg";

const serviceCategories = [
  {
    title: "Pest Management",
    icon: <Bug className="text-red-400" />,
    services: [
      {
        name: "Bed Bugs",
        image: bedbugsImg,
        description:
          "Heat, chemical and mattress treatment to eliminate all life stages.",
        howItWorks: [
          "Inspection of bed frame, mattress, furniture & cracks",
          "Use of professional insecticides, steam or heat",
          "Follow-up treatment within 7–14 days",
        ],
        negatives: [
          "Possible strong odour from chemicals",
          "You may need to wash bedding & clothes",
          "Severe infestations may require 2–3 treatments",
        ],
        facts: [
          "Bed bugs can survive 4–6 months without feeding",
          "They hide in stitching and small gaps",
        ],
      },
      {
        name: "Rodent Control",
        image: rodentsImg,
        description:
          "Professional elimination of rats & mice using baits, traps & entry-point sealing.",
        howItWorks: [
          "Identify droppings, holes, roof activity",
          "Place bait stations & traps safely",
          "Seal entry points permanently",
        ],
        negatives: [
          "Dead rodents may smell for a few days",
          "Exterior bait stations need monitoring",
          "Rodents reproduce very fast—maintenance needed",
        ],
        facts: [
          "Rats can enter through a hole the size of a coin",
          "1 pair can produce up to 2,000 offspring in a year",
        ],
      },
      {
        name: "Insect Control",
        image: fumigationImg,
        description:
          "Control of mosquitoes, flies, fleas & crawling insects using safe indoor spray treatments.",
        howItWorks: [
          "Identify insect hotspots",
          "Apply residual spray indoors/outdoors",
          "Fogging/fumigation for heavy infestations",
        ],
        negatives: [
          "You may need to leave property for 1–2 hours",
          "Possible mild chemical smell",
        ],
        facts: [
          "Mosquitoes breed in still water as small as a bottle cap",
        ],
      },
      {
        name: "Wasps & Ants",
        image: clean4,
        description:
          "Safe destruction of wasp nests and long-lasting ant control.",
        howItWorks: [
          "Find nest location",
          "Apply fast-acting dust or liquid pesticide",
          "Prevent re-entry with barriers",
        ],
        negatives: [
          "Wasps may become aggressive during nesting season",
        ],
        facts: [
          "Ant colonies can contain millions of workers",
        ],
      },
      {
        name: "Termite Treatment",
        image: termiteImg,
        description:
          "Soil injection, foundation protection & post-construction termite extermination.",
        howItWorks: [
          "Soil drilling and chemical injection",
          "Wall and slab perimeter treatment",
          "Long-term monitoring",
        ],
        negatives: [
          "Drilling may leave small visible holes",
          "Termites often return if moisture persists",
        ],
        facts: [
          "Termites cause more damage annually than fires & storms",
        ],
      },
      {
        name: "Cockroach Proofing",
        image: cockroachImg,
        description:
          "Removal of cockroaches & sealing of all entry points for long-term protection.",
        howItWorks: [
          "Gel baiting & spray treatment",
          "Identify moisture or food sources",
          "Seal cracks & gaps",
        ],
        negatives: [
          "Roaches may be visible for 12–24 hours after treatment",
        ],
        facts: [
          "Cockroaches can survive without food for a month",
        ],
      },
    ],
  },
  {
    title: "Disinfection Services",
    icon: <Sparkles className="text-blue-400" />,
    services: [
      {
        name: "Surface Disinfection",
        image: clean1,
        description:
          "Antibacterial spray and wipe-down to kill viruses and germs.",
        howItWorks: [
          "Use of medical-grade disinfectant",
          "Wipe down high-touch surfaces",
        ],
        negatives: ["Some surfaces may feel damp for 10–20 minutes"],
        facts: ["Most germs live up to 48 hours on surfaces"],
      },
      {
        name: "Equipment Disinfection",
        image: clean2,
        description:
          "Sterilizing office equipment, electronics & tools.",
        howItWorks: [
          "Fogging or spray application",
          "Electronic-safe cleaning solution",
        ],
        negatives: [
          "Electronics must be powered off during cleaning",
        ],
        facts: ["Shared tools carry high bacteria levels"],
      },
      {
        name: "Furniture Disinfection",
        image: clean5,
        description:
          "Deep cleaning & germ removal for couches, beds & chairs.",
        howItWorks: ["Steam cleaning", "Sanitizing spray"],
        negatives: ["Furniture may take 2–4 hours to dry"],
        facts: ["Fabric furniture traps allergens easily"],
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        Our Services
      </h2>

      {serviceCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          {/* Category Title */}
          <div className="flex items-center gap-3 mb-5">
            {category.icon}
            <h3 className="text-2xl font-semibold">{category.title}</h3>
          </div>

          {/* Netflix-like slider */}
          <div className="overflow-x-auto flex gap-6 pb-4 scrollbar-thin scrollbar-thumb-red-600">
            {category.services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-72 flex-shrink-0 bg-neutral-900 rounded-xl shadow-lg cursor-pointer transition-all"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover"
                    alt={service.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <Tag color="red">Moele</Tag>
                  </div>

                  <p className="text-gray-300 text-sm mt-1">
                    {service.description}
                  </p>

                  {/* How it works */}
                  <div className="mt-3">
                    <p className="font-semibold mb-1 text-red-400">
                      How It Works:
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {service.howItWorks.map((step, i) => (
                        <li key={i}>• {step}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Negatives */}
                  <div className="mt-3">
                    <p className="font-semibold mb-1 text-yellow-400">
                      Possible Issues:
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {service.negatives.map((n, i) => (
                        <li key={i}>• {n}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Facts */}
                  <div className="mt-3 mb-2">
                    <p className="font-semibold mb-1 text-blue-400">
                      Interesting Facts:
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {service.facts.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;

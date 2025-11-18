import React, { useState } from 'react';
import { Drawer, Tag } from 'antd';
import { motion } from 'framer-motion';
import {
  BugOutlined,
  ToolOutlined,
  DeleteOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';

// Images
import termiteImg from '../assets/terminal.jpg';
import rodentsImg from '../assets/received_749126384429751.jpeg';
import bedbugsImg from '../assets/received_746896064595781.jpeg';
import cockroachImg from '../assets/cockroach.jpg';
import fumigationImg from '../assets/terminal3.jpg';
import clean1 from '../assets/surfacesclean.jpeg';
import clean2 from '../assets/images.jpeg';
import clean5 from '../assets/update.jpeg';
import clean4 from '../assets/ants.jpeg';

const serviceCategories = [
  {
    title: 'Pest Management Services',
    icon: <BugOutlined className="text-red-500 text-xl" />,
    services: [
      {
        name: 'Bed Bugs',
        image: bedbugsImg,
        description: 'Heat + chemical treatment for mattresses, carpets, and furniture.',
        howItWorks:
          'We apply professional heat and chemical combination to kill eggs, larvae, and adult bed bugs. A follow-up session may be required depending on infestation level.',
        negatives: [
          'May require 2–3 treatments depending on severity.',
          'Strong smell for 1–2 hours.',
          'Clients must leave the room for 3–4 hours.',
          'Bedding and clothes must be washed afterwards.'
        ],
        facts: [
          'Bed bugs can survive 12 months without feeding.',
          'They hide inside sockets, cracks, and bed frames.'
        ]
      },
      {
        name: 'Rodent Control',
        image: rodentsImg,
        description:
          'Trap setting, sealing entry points, poison bait stations, and sanitation.',
        howItWorks:
          'We place bait stations safely and seal access points. Droppings are disinfected, and rodents are monitored over 7 days.',
        negatives: [
          'Poison smell possible in hidden areas.',
          'Dead rodents may take time to locate.',
          'Requires follow-up monitoring.'
        ],
        facts: [
          'Rats reproduce every 21 days.',
          'Rodents can chew wires and cause electrical fires.'
        ]
      },
      {
        name: 'Insect Fumigation',
        image: fumigationImg,
        description: 'Mosquito, fly, flea, and general insect extermination.',
        howItWorks:
          'We fog the entire building with industry-approved insecticides for fast knock-down and long-term residual protection.',
        negatives: [
          'Odor lasts 1–2 hours.',
          'People and pets must leave for 3 hours.',
          'Fish tanks must be covered or removed.'
        ],
        facts: [
          'Mosquitoes carry malaria, dengue, and chikungunya.',
          'Flies can contaminate food instantly.'
        ]
      },
      {
        name: 'Wasps & Ants',
        image: clean4,
        description: 'Nest removal and ant-trail elimination.',
        howItWorks:
          'We safely neutralize nests and use gel + spray treatments to destroy colonies.',
        negatives: ['Aggressive wasps may react if disturbed before treatment.'],
        facts: ['Ants leave chemical trails that attract more ants.']
      },
      {
        name: 'Termite Treatment',
        image: termiteImg,
        description: 'Soil injection, drilling, and anti-termite spray.',
        howItWorks:
          'We drill foundation lines or use external trenching to inject termiticide right into the soil.',
        negatives: [
          'Drilling may cause noise.',
          'Strong smell for a short time.',
          'Termites may take 5–10 days to fully disappear.'
        ],
        facts: [
          'Termites cause billions in structural damage yearly.',
          'They never sleep and eat 24/7.'
        ]
      },
      {
        name: 'Cockroach Proofing',
        image: cockroachImg,
        description: 'Gel bait, fumigation, and sealing entry points.',
        howItWorks:
          'We apply long-lasting gel bait and fog kitchens or dark hiding spaces.',
        negatives: [
          'Gel must not be wiped for 7 days.',
          'Cockroaches may be seen more during first 48 hours.'
        ],
        facts: [
          'Cockroaches can survive 7 days without a head.',
          'They reproduce extremely fast.'
        ]
      }
    ]
  },

  // DISINFECTION
  {
    title: 'Disinfection Services',
    icon: <ToolOutlined className="text-blue-500 text-xl" />,
    services: [
      {
        name: 'Surface Disinfection',
        image: clean1,
        description: 'Kills 99% of bacteria & viruses on walls and countertops.',
        howItWorks:
          'We spray hospital-grade disinfectants on all high-touch surfaces.',
        negatives: ['Mild chemical smell for 30–60 minutes.'],
        facts: ['High-touch areas can spread germs every few minutes.']
      },
      {
        name: 'Equipment Disinfection',
        image: clean2,
        description: 'Safe on electronics, tools, and office devices.',
        howItWorks:
          'We use ULV misting that dries quickly and doesn’t damage electronics.',
        negatives: ['Must avoid using equipment for 10–15 minutes.'],
        facts: ['Viruses can live up to 72 hours on hard surfaces.']
      },
      {
        name: 'Furniture Sanitizing',
        image: clean5,
        description: 'Deep cleaning and germ removal from couches, beds & chairs.',
        howItWorks:
          'We apply fabric-safe disinfectants and extract dirt/odors.',
        negatives: ['Furniture may remain damp for 20–60 minutes.'],
        facts: ['Dirty sofas trap dust mites and bacteria.']
      }
    ]
  },

  // CLEANING
  {
    title: 'Cleaning Services',
    icon: <DeleteOutlined className="text-red-500 text-xl" />,
    services: [
      {
        name: 'Post-Pest Cleaning',
        image: clean1,
        description:
          'We remove droppings, smells, residues, and sanitize affected rooms.',
        howItWorks:
          'Rooms are cleaned, disinfected and deodorized after pest treatment.',
        negatives: ['May require extra drying time.'],
        facts: ['Droppings can spread airborne bacteria.']
      }
    ]
  }
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const showDetails = (service: any) => {
    setActiveService(service);
    setOpen(true);
  };

  return (
    <section className="bg-black py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-14">
        Our Services
      </h2>

      {/* Netflix Rows */}
      {serviceCategories.map((cat, i) => (
        <div key={i} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            {cat.icon}
            <h3 className="text-white text-xl font-semibold">{cat.title}</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
          >
            {cat.services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                onClick={() => showDetails(service)}
                className="min-w-[240px] bg-gray-900 rounded-xl relative cursor-pointer shadow-lg overflow-hidden group"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover opacity-80 group-hover:opacity-60 transition-all duration-300"
                />

                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-3 w-full">
                  <h4 className="text-white text-lg font-bold">{service.name}</h4>
                  <Tag color="red" className="mt-1">
                    Moele Pest Solutions
                  </Tag>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Drawer for Details */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        width={380}
        title={
          <span className="text-red-500 font-bold">
            <InfoCircleOutlined className="mr-2" />
            Service Details
          </span>
        }
      >
        {activeService && (
          <div>
            <img
              src={activeService.image}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{activeService.name}</h3>

            <p className="text-gray-700">{activeService.description}</p>

            <h4 className="font-bold mt-4">How It Works</h4>
            <p className="text-gray-700">{activeService.howItWorks}</p>

            <h4 className="font-bold mt-4 text-red-500">Negatives / Side Effects</h4>
            <ul className="list-disc ml-4 text-gray-700">
              {activeService.negatives?.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>

            <h4 className="font-bold mt-4">Facts</h4>
            <ul className="list-disc ml-4 text-gray-700">
              {activeService.facts?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}
      </Drawer>
    </section>
  );
};

export default Services;

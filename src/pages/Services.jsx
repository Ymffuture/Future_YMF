import React from 'react';

const services = [
  {
    name: 'Termite Control',
    description: 'Effective removal of termites from wooden structures, flooring, and walls.',
    image: './assets/Messenger_creation_1177669607460733.jpeg ',
  },
  {
    name: 'Rodent Removal',
    description: 'Eliminate rats and mice from your home or business.',
    image: './assets/received_749126384429751.jpeg',
  },
  {
    name: 'Bed Bug Treatment',
    description: 'Safe and quick treatment of bed bugs from furniture and beds.',
    image: './assets/received_643489042097518.jpeg',
  },
  {
    name: 'Cockroach Control',
    description: 'Professional cockroach extermination using eco-friendly methods.',
    image: './assets/received_643489042097518.jpeg',
  },
  {
    name: 'Fumigation',
    description: 'Comprehensive space fumigation for homes, offices, and warehouses.',
    image: '../assets/received_749126384429751.jpeg ',
  },
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">Our Pest Control Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600 mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


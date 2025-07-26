import React from 'react';
import { Card, Row, Col } from 'antd';

const services = [
  {
    name: 'Termite Control',
    description: 'Effective removal of termites from wooden structures, flooring, and walls.',
    image: '/assets/termite.jpg',
  },
  {
    name: 'Rodent Removal',
    description: 'Eliminate rats and mice from your home or business.',
    image: '/assets/rodents.jpg',
  },
  {
    name: 'Bed Bug Treatment',
    description: 'Safe and quick treatment of bed bugs from furniture and beds.',
    image: '/assets/bedbugs.jpg',
  },
  {
    name: 'Cockroach Control',
    description: 'Professional cockroach extermination using eco-friendly methods.',
    image: '/assets/cockroach.jpg',
  },
  {
    name: 'Fumigation',
    description: 'Comprehensive space fumigation for homes, offices, and warehouses.',
    image: '/assets/fumigation.jpg',
  },
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Our Pest Control Services</h2>
      <Row gutter={[24, 24]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={service.name}
                  src={service.image}
                  className="h-52 object-cover rounded-t-lg"
                />
              }
              className="rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Card.Meta
                title={<h3 className="text-xl text-green-600">{service.name}</h3>}
                description={<p className="text-gray-600 mt-2">{service.description}</p>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;


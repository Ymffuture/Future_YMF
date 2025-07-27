import React from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { BugOutlined, ToolOutlined, DeleteOutlined } from '@ant-design/icons';

// 📦 Local image imports
import termiteImg from '../assets/terminal.jpg';
import rodentsImg from '../assets/received_749126384429751.jpeg';
import bedbugsImg from '../assets/received_746896064595781.jpeg';
import cockroachImg from '../assets/cockroach.jpg';
import fumigationImg from '../assets/terminal3.jpg';
import clean1 from '../assets/surfacesclean.jpeg' 
import clean2 from '../assets/surfacesclean.jpeg' 
import clean3 from '../assets/spend.jpeg' 
import clean4 from '../assets/surfacesclean.jpeg' 
const serviceCategories = [
  {
    title: 'Pest Management Services',
    icon: <BugOutlined className="text-green-600" />,
    services: [
      {
        name: 'Bed Bugs',
        description: 'Quick removal of bed bugs from beds, furniture, and carpets.',
        image: bedbugsImg,
      },
      {
        name: 'Rodent Control',
        description: 'Professional extermination of rats and mice in homes and offices.',
        image: rodentsImg,
      },
      {
        name: 'Insect Control',
        description: 'Control of insects like flies, mosquitoes, and fleas.',
        image: fumigationImg,
      },
      {
        name: 'Wasps & Ants',
        description: 'Safe removal of wasp nests and ant infestations.',
        image: termiteImg,
      },
      {
        name: 'Termite Treatment',
        description: 'Pre & post construction termite control with sprays and soil injection.',
        image: termiteImg,
      },
      {
        name: 'Cockroach Proofing',
        description: 'Full cockroach eradication and entry-point sealing.',
        image: cockroachImg,
      },
    ],
  },
  {
    title: 'Disinfection Services',
    icon: <ToolOutlined className="text-blue-600" />,
    services: [
      {
        name: 'Surface Disinfection',
        description: 'Sanitizing walls, countertops, and home surfaces.',
        image: clean3,
      },
      {
        name: 'Equipment Disinfection',
        description: 'Sterilization of tools, office machinery and devices.',
        image: fumigationImg,
      },
      {
        name: 'Furniture Disinfection',
        description: 'Deep cleaning and disinfection of sofas, beds, and chairs.',
        image: bedbugsImg,
      },
    ],
  },
  {
    title: 'Cleaning Services',
    icon: <DeleteOutlined className="text-red-600" />,
    services: [
      {
        name: 'Post-Pest Cleaning',
        description: 'Cleaning after pest control to remove smell, droppings and residues.',
        image: clean1,
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-[#FF0000] ">Our Services</h2>

      {serviceCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            {category.icon}
            <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
          </div>

          <Row gutter={[24, 24]}>
            {category.services.map((service, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={service.name}
                      src={service.image}
                      className="h-52 w-full object-cover rounded-t-lg"
                    />
                  }
                  className="rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <Card.Meta
                    title={
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-black">{service.name}</h3>
                        <Tag color="#FF0000">Moele Pest Solutions</Tag>
                      </div>
                    }
                    description={<p className="text-gray-600 mt-2">{service.description}</p>}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </section>
  );
};

export default Services;


import { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, MessageCircle, Mail } from 'lucide-react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const { Title } = Typography;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = () => {
    const whatsappURL = `https://wa.me/27723162651?text=Name:%20${formData.name}%0APhone:%20${formData.phone}%0AMessage:%20${formData.message}`;
    window.open(whatsappURL, '_blank');
  };

  const contacts = [
    {
      name: 'Moele N.P',
      phone: '0723162651',
      whatsapp: '0723162651',
      email: 'moelegroup2@gmail.com',
      location: 'Polokwane, Lephalale Limpopo',
    },
    {
      name: 'Moele L.J',
      phone: '0823299733',
      whatsapp: '0823299733',
      email: 'moelegroup2@gmail.com',
      location: 'Polokwane, Lephalale Limpopo',
    },
  ];

  return (
    <motion.section
      className="max-w-4xl mx-auto py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title level={2} className="!text-red-600 text-center mb-10 font-bold">
        Contact Moele Pest Solutions
      </Title>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {contacts.map((contact, idx) => (
          <motion.div
            key={idx}
            className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
          >
            <div className="text-lg font-semibold text-yellow-300">{contact.name}</div>
            <div className="flex flex-col gap-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="text-yellow-400" size={20} />
                <span>{contact.phone}</span>
                <a
                  href={`tel:${contact.phone}`}
                  className="ml-auto text-green-400 hover:text-green-500 transition"
                  title="Call"
                >
                  <FaPhone />
                </a>
                <a
                  href={`https://wa.me/27${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-500 hover:text-blue-600 transition"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-yellow-400" size={20} />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-yellow-400" size={20} />
                <span>Mon–Sat: 08:00–18:00</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Contact Form */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Title level={4} className="text-red-600 font-bold mb-6 text-center">
          Send us a Message
        </Title>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Your Name" required>
            <Input
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              size="large"
            />
          </Form.Item>
          <Form.Item label="Phone Number" required>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              size="large"
            />
          </Form.Item>
          <Form.Item label="Describe your issue">
            <Input.TextArea
              rows={4}
              placeholder="Tell us more about the pest problem"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-red-600 hover:bg-red-700 text-white w-full flex items-center justify-center gap-2"
              size="large"
            >
              <FaWhatsapp /> Send via WhatsApp
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

import { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';

const { Title } = Typography;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = () => {
    const whatsappURL = `https://wa.me/27634414863?text=Name:%20${formData.name}%0APhone:%20${formData.phone}%0AMessage:%20${formData.message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title level={2} className="!text-red-600 text-center mb-10 font-bold">
        Contact Moele Pest Solutions
      </Title>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {[
          {
            icon: <Phone className="text-yellow-400" />,
            title: 'Moele N.P (Call or WhatsApp)',
            desc: '072 316 2651 / 081 775 9870',
          },
      {
            icon: <Phone className="text-yellow-400" />,
            title: 'Moele L.J (Call or WhatsApp) ',
            desc: '082 329 9733',
          },
          {
            icon: <Clock className="text-yellow-400" />,
            title: 'Working Hours',
            desc: 'Mon–Sat: 08:00–18:00',
          },
          {
            icon: <MapPin className="text-yellow-400" />,
            title: 'Location',
            desc: 'Polokwane, Lephalale Limpopo',
          },
          {
            icon: <MessageCircle className="text-yellow-400" />,
            title: 'Send a Message',
            desc: 'We usually reply within 1 hour.',
          },
        ].map(({ icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="bg-black text-white p-4 rounded-md shadow-lg flex gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="text-2xl">{icon}</div>
            <div>
              <p className="text-base font-semibold text-yellow-300">{title}</p>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Contact Form */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
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
              className="bg-red-600 hover:bg-red-700 text-white w-full"
              size="large"
            >
              Send via WhatsApp
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;



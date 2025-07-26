import { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = () => {
    const whatsappURL = `https://wa.me/27634414863?text=Name:%20${formData.name}%0APhone:%20${formData.phone}%0AMessage:%20${formData.message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <Title level={2} className="text-green-700 !mb-6">Contact Us</Title>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Card bordered={false} className="flex items-start gap-4">
          <Phone className="text-green-600" />
          <div>
            <p className="font-medium text-gray-700">Call or WhatsApp</p>
            <p className="text-sm text-gray-500">+27 63 441 4863</p>
          </div>
        </Card>
        <Card bordered={false} className="flex items-start gap-4">
          <Clock className="text-green-600" />
          <div>
            <p className="font-medium text-gray-700">Working Hours</p>
            <p className="text-sm text-gray-500">Mon–Sat: 08:00–18:00</p>
          </div>
        </Card>
        <Card bordered={false} className="flex items-start gap-4">
          <MapPin className="text-green-600" />
          <div>
            <p className="font-medium text-gray-700">Location</p>
            <p className="text-sm text-gray-500">Orange Farm, Johannesburg South</p>
          </div>
        </Card>
        <Card bordered={false} className="flex items-start gap-4">
          <MessageCircle className="text-green-600" />
          <div>
            <p className="font-medium text-gray-700">Send a Message</p>
            <p className="text-sm text-gray-500">We usually reply within 1 hour.</p>
          </div>
        </Card>
      </div>

      {/* WhatsApp Form */}
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
            className="bg-green-600 hover:bg-green-700 text-white"
            size="large"
          >
            Send via WhatsApp
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contact;


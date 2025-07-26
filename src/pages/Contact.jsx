import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/27634414863?text=Name:%20${formData.name}%0APhone:%20${formData.phone}%0AMessage:%20${formData.message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="w-full p-3 border rounded"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <textarea
          className="w-full p-3 border rounded"
          rows="4"
          placeholder="Describe your issue"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Contact;


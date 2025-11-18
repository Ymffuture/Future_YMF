import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Menu, Tooltip } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { FaHome, FaBug, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: (
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <FaHome /> Home
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link to="/services" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <FaBug /> Services
        </Link>
      ),
      key: 'services',
    },
    {
      label: (
        <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <FaInfoCircle /> About
        </Link>
      ),
      key: 'about',
    },
    {
      label: (
        <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <FaEnvelope /> Contact
        </Link>
      ),
      key: 'contact',
    },
  ];

  return (
    <nav className="fixed w-full bg-[#FF0000] shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Email Icon */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="/IMG-20250726-WA0016.jpg"
              alt="Moele Pest Solutions Logo"
              className="h-10 w-auto object-contain rounded-full scale-125"
            />
          </Link>
          <Tooltip title="Email us">
            <a
              href="mailto:moelegroup2@gmail.com"
              className="text-white hover:text-yellow-300 transition duration-200"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </Tooltip>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {menuItems.map((item) => (
            <div key={item.key} className="hover:text-gray-200 hover:bg-white">
              {item.label}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined style={{ color: '#fff' }} />} onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
  title={
    <div className="text-gray-700 text-md text-center font-semibold">
    .... 
    </div>
  }
  placement="bottom"
  height="85%"
  onClose={() => setOpen(false)}
  open={open}
  className="md:hidden custom-bottom-drawer"
  footer={
    <div className="text-center border-t pt-4">
      <p className="text-sm text-gray-500">Powered by</p>
      <p className="text-red-600 font-semibold text-sm">SwiftMeta™</p>
      <img
        src="/SNlogo.svg"
        alt="SwiftMeta Logo"
        className="w-12 h-12 rounded-full mx-auto mt-2"
      />
    </div>
  }
>
  {/* MENU ITEMS */}
  <Menu mode="vertical" items={menuItems} selectable={false} />

  {/* SOCIAL MEDIA SECTION */}
  <div className="mt-6 px-4">
    <h3 className="text-gray-700 font-semibold mb-2">Follow Us</h3>
    <div className="flex items-center gap-6 text-2xl text-red-600">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://wa.me/27634414863"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <i className="fab fa-tiktok"></i>
      </a>
    </div>
  </div>

  {/* GOOGLE MAP SECTION */}
  <div className="mt-8 px-4">
    <h3 className="text-gray-700 font-semibold mb-2">Our Location</h3>

    <div className="w-full h-56 rounded-xl overflow-hidden border shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.766753534208!2d27.881!3d-26.3819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9513e37f96da63%3A0x1ef7b5f85c9b6131!2sDrieziek%204%2C%20Orange%20Farm%2C%20Johannesburg%20South!5e0!3m2!1sen!2za!4v1731470000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</Drawer>

    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

// React Icons
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
        {/* Logo from public folder */}
        <Link to="/">
          <img
            src="/IMG-20250726-WA0016.jpg"
            alt="Moele Pest Solutions Logo"
            className="h-10 w-auto object-contain rounded-full scale-125"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {menuItems.map((item) => (
            <div key={item.key} className="hover:text-gray-200">
              {item.label}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined style={{ color: '#fff' }} />} onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        className="md:hidden"
      >
        <Menu mode="vertical" items={menuItems} selectable={false} />
      </Drawer>
    </nav>
  );
};

export default Navbar;


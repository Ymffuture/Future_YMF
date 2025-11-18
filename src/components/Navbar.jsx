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
    <div className="text-red-600 font-bold text-lg text-center w-full">
      Menu
    </div>
  }
  placement="bottom"
  height="80%"               // makes it feel like a mobile sheet
  onClose={() => setOpen(false)}
  open={open}
  className="md:hidden custom-bottom-drawer"
  footer={
    <div className="text-center border-t pt-4">
      <p className="text-sm text-gray-500">Powered by</p>
      <p className="text-red-600 font-semibold text-sm">Quorvex Institute</p>
      <a
        href="mailto:quorvexinstitute@gmail.com"
        className="text-sm text-blue-600 hover:underline block mt-1"
      >
        quorvexinstitute@gmail.com
      </a>
      <img
        src="/IMG-20250726-WA0016.jpg"
        alt="Quorvex Logo"
        className="w-12 h-12 rounded-full mx-auto mt-2"
      />
    </div>
  }
>
  <Menu mode="vertical" items={menuItems} selectable={false} />
</Drawer>

    </nav>
  );
};

export default Navbar;


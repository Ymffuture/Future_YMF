import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: <Link to="/" onClick={() => setOpen(false)}>Home</Link>, key: 'home' },
    { label: <Link to="/services" onClick={() => setOpen(false)}>Services</Link>, key: 'services' },
    { label: <Link to="/about" onClick={() => setOpen(false)}>About</Link>, key: 'about' },
    { label: <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>, key: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">PestGuard</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 text-sm font-medium">
          {menuItems.map((item) => (
            <div key={item.key} className="hover:text-green-500">
              {item.label}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Ant Design Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        className="md:hidden"
      >
        <Menu
          mode="vertical"
          items={menuItems}
          selectable={false}
        />
      </Drawer>
    </nav>
  );
};

export default Navbar;

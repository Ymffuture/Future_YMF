import React from 'react';
import { Row, Col } from 'antd';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm pt-12 pb-8 mt-20 border-t border-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <Row gutter={[24, 16]} className="mb-8">
          {/* Company Info */}
          <Col xs={24} md={10}>
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                Moele Pest Solutions
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Delivering reliable pest control services with care, precision, and professionalism — keeping your spaces safe and clean.
              </p>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={6} className="md:text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400 md:items-center">
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
              <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={8} className="md:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <div className="text-gray-400 space-y-1">
              <p>Phone: <span className="text-white font-medium">081 775 9870</span></p>
              <p>Email: <span className="text-white font-medium">info@moelepestsolutions.co.za</span></p>
              <p>
                Address: <span className="text-white font-medium">
                  Stand 20074, Martinique, Abbortspoort, Lephalale 0608
                </span>
              </p>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* Bottom Section */}
        <Row align="middle" justify="space-between">
          <Col xs={24} md={12} className="text-center md:text-left mb-3 md:mb-0">
            <p className="text-yellow-400">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white">Moele Pest Solutions</span>. All rights reserved.
            </p>
          </Col>

          <Col xs={24} md={12} className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-5">
              <a
                href="https://www.facebook.com/share/1HFjRLLsmH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/moelepestsolutions?igsh=MXM3aXluZ3F5dzZtdA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;


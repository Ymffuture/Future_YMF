import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm pt-10 pb-6 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Row: Company Info + Quick Links */}
        <Row gutter={[24, 16]} className="mb-8">
          <Col xs={24} md={12}>
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">Moele Pest Solutions</h2>
              <p className="text-gray-400">“Solution for your pests.”</p>
            </div>
          </Col>

          <Col xs={24} md={12} className="md:text-right">
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <div className="flex md:justify-end gap-4 text-gray-300">
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
              <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4" />

        {/* Bottom Row: Social + Contact */}
        <Row gutter={[16, 16]} align="middle" justify="space-between">
          <Col xs={24} md={12} className="text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
              {/* Social Icons */}
              <a
                href="https://www.facebook.com/share/1HFjRLLsmH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} className="text-[royalblue] hover:text-yellow-400 transition" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter size={18} className="text-white hover:text-yellow-400 transition" />
              </a>
              <a
                href="https://www.instagram.com/moelepestsolutions?igsh=MXM3aXluZ3F5dzZtdA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="text-pink-500 hover:text-yellow-400 transition" />
              </a>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-2 md:mt-0 text-gray-300 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <FaPhoneAlt className="text-yellow-400" />
                  <span>081 775 9870</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <span>Stand 20074, Martinique, Abbortspoort, Lephalale 0608</span>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <p className="text-center md:text-left text-yellow-400">
              &copy; {new Date().getFullYear()} <span className="text-white">Moele Pest Solutions</span>. All rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;


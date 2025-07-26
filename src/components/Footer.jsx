import React from 'react';
import { Row, Col } from 'antd';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'; // X (Twitter)

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[16, 8]} align="middle" justify="space-between">
          <Col xs={24} md={12}>
            <p className="text-center md:text-left text-yellow-400">
              &copy; {new Date().getFullYear()} <span className="text-white">PestGuard</span>. All rights reserved.
            </p>
          </Col>

          <Col xs={24} md={12} className="text-center md:text-right">
            <div className="flex justify-center md:justify-end items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-red-600 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-red-600 transition"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-red-600 transition"
              >
                <FaInstagram size={18} />
              </a>
              <span className="ml-4 text-white">📞 063 441 4863 · Orange Farm</span>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;


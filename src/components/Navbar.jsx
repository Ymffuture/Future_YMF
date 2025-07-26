import React from 'react';
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-sm py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[16, 8]} align="middle" justify="space-between">
          <Col xs={24} md={12}>
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} PestGuard. All rights reserved.
            </p>
          </Col>
          <Col xs={24} md={12}>
            <p className="text-center md:text-right">
              Orange Farm, Johannesburg South · 📞 063 441 4863
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;


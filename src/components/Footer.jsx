import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-gray-300 pt-16 pb-10 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* ─── TOP GRID: BRAND + LINKS + CONTACT ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Moele Pest Solutions
            </h2>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Providing fast, effective and eco-friendly pest control solutions
              for homes, businesses & industrial sites.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">
              SOCIAL
            </h3>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/share/1HFjRLLsmH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-700 transition"
              >
                <FaFacebookF size={18} className="text-blue-500" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-700 transition"
              >
                <FaXTwitter size={18} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/moelepestsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-700 transition"
              >
                <FaInstagram size={18} className="text-pink-400" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">
              CONTACT
            </h3>

            <div className="space-y-4 text-[15px]">
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400" />
                <span>081 775 9870</span>
              </div>

              <div className="flex items-start gap-3">
                <FaLocationDot className="text-yellow-400 mt-1" />
                <span>
                  Stand 20074, Martinique<br />
                  Abbortspoort, Lephalale 0608
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* ─── BOTTOM COPYRIGHT ROW ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-300">Moele Pest Solutions</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-yellow-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

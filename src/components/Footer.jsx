import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Footer Content */}
        <div className="mb-6">
          <p className="text-lg font-semibold">About Nepal</p>
          <p className="text-sm mt-2">Discover the beauty and culture of Nepal</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://facebook.com"
            className="text-white hover:text-blue-500 transition-colors"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={28} />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={28} />
          </Link>
          <Link
            href="https://instagram.com"
            className="text-white hover:text-pink-500 transition-colors"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-white hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-white-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} About Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

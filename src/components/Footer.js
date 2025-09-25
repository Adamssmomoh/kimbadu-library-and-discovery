import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Sierra Leone, Kono District, Koidu City, Kimbadu town  </p>
          <p>Email: info@kimbadulibrary.org</p>
          <p>Phone: (+232) 33-99-09-10</p>
        </div>

        
        {/* Copyright */}
        <div className="md:col-span-3 text-center mt-8 md:mt-0">
          <p>&copy; 2025 Kimbadu Library & Discovery Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

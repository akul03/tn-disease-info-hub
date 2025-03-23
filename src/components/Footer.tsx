
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-100 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">TN Disease Info Hub</h3>
            <p className="text-gray-600">
              A comprehensive resource dedicated to providing information about Trigeminal Neuralgia.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-600 hover:text-blue-800 transition-colors">About TN</a></li>
              <li><a href="#interactive" className="text-blue-600 hover:text-blue-800 transition-colors">Interactive Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <p className="text-gray-600 mb-2">Department of Information Science and Engineering</p>
            <p className="text-gray-600">Global Academy of Technology, Bengaluru</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Global Academy of Technology. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

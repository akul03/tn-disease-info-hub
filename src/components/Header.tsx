
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="w-full bg-[#1A2435] py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img 
              src="/lovable-uploads/3e711cf2-1f4e-4191-a848-21968b2ad504.png" 
              alt="Global Academy of Technology Logo" 
              className="w-24 h-24 object-contain"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Global Academy of Technology,<br />
              <span className="text-xl md:text-3xl">Bengaluru</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 mt-1">
              Department of Information Science and Engineering
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

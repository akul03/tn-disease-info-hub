
import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  content: string;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default InfoCard;

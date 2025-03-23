
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DragItem {
  id: string;
  content: string;
  info: string;
}

const DragAndDrop: React.FC = () => {
  const [dragItems] = useState<DragItem[]>([
    { id: 'symptoms', content: 'Symptoms', info: 'Trigeminal neuralgia causes intense, stabbing or electric shock-like pain in the face. It typically affects one side of the face, particularly the cheek, jaw, teeth, gums, lips, or less commonly the eye and forehead.' },
    { id: 'causes', content: 'Causes', info: 'Trigeminal neuralgia is often caused by compression of the trigeminal nerve, usually by a blood vessel. Other causes include multiple sclerosis, which damages the myelin sheath protecting the nerve.' },
    { id: 'diagnosis', content: 'Diagnosis', info: 'Diagnosis primarily relies on the patient\'s description of symptoms. Doctors may conduct neurological examinations to test facial sensation and reflexes.' },
    { id: 'treatment', content: 'Treatment', info: 'Treatment options include medications like anticonvulsants to block pain signals. Surgical options include microvascular decompression to relocate blood vessels pressing on the nerve.' },
  ]);

  const [currentInfo, setCurrentInfo] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);
  const [activeDropZone, setActiveDropZone] = useState<boolean>(false);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('id', id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setActiveDropZone(true);
  };

  const handleDragLeave = () => {
    setActiveDropZone(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('id');
    const item = dragItems.find(item => item.id === itemId);
    
    if (item) {
      setCurrentInfo(item.info);
      setCurrentTitle(item.content);
    }
    
    setActiveDropZone(false);
  };

  return (
    <div className="w-full">
      <motion.h2 
        className="text-2xl font-semibold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Drag & Drop to Learn More
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {dragItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="cursor-grab active:cursor-grabbing bg-white rounded-lg p-4 text-center font-medium text-gray-800 shadow-sm hover:shadow-md border border-gray-100"
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
          >
            {item.content}
          </motion.div>
        ))}
      </div>

      <motion.div
        className={`min-h-[200px] border-2 border-dashed rounded-lg p-6 transition-colors mt-8 ${activeDropZone ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {!currentInfo ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-500">
                {activeDropZone ? 'Release to see information' : 'Drop here to learn more'}
              </h3>
              <p className="text-gray-400">
                Drag a topic here to learn more about Trigeminal Neuralgia
              </p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 text-center">{currentTitle}</h3>
              <p className="text-gray-700 leading-relaxed">
                {currentInfo}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DragAndDrop;

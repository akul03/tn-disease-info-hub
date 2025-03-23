
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import DragAndDrop from '../components/DragAndDrop';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* About TN Section */}
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">About Trigeminal Neuralgia</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Trigeminal neuralgia (TN) is considered one of the most painful conditions known to medicine. 
                It causes sudden, severe facial pain that's often described as sharp, stabbing, or like an electric shock. 
                The pain typically affects one side of the face, occurs in short attacks that may last a few seconds to about two minutes, 
                and can be triggered by everyday activities such as eating, talking, or brushing teeth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <InfoCard 
                title="What Causes It?" 
                content="TN is usually caused by a blood vessel pressing on the trigeminal nerve as it exits the brain stem. This compression causes the protective coating around the nerve (myelin) to wear away, resulting in pain signals being sent to the brain."
                delay={0.1}
              />
              <InfoCard 
                title="Who Gets It?" 
                content="TN affects about 12 out of 100,000 people per year, with the condition being more common in people over 50. It affects women more often than men, and can sometimes be associated with conditions like multiple sclerosis."
                delay={0.2}
              />
              <InfoCard 
                title="How Is It Treated?" 
                content="Treatment options include medications such as anticonvulsants and muscle relaxants. For those who don't respond to medication, surgical procedures that reduce pressure on the nerve or destroy nerve fibers may be considered."
                delay={0.3}
              />
            </div>
          </div>
        </section>
        
        {/* Interactive Section */}
        <section id="interactive" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <DragAndDrop />
          </div>
        </section>
        
        {/* Additional Resources */}
        <section id="resources" className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Additional Resources</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Learn more about Trigeminal Neuralgia through these valuable resources and supportive communities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Medical Resources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>American Association of Neurological Surgeons: Comprehensive Information on TN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mayo Clinic: Trigeminal Neuralgia Diagnosis and Treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>National Institute of Neurological Disorders and Stroke: TN Fact Sheet</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Support Groups</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>TNA - The Facial Pain Association: Support and Advocacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Living With TN: Online Community and Forum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Trigeminal Neuralgia Support Group: Social Media Community</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

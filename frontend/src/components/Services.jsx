import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database, Smartphone, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Full-stack web applications built with the MERN stack',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implement AI solutions to enhance your web applications',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Scalable and efficient MongoDB database architecture',
    },
    {
      icon: Globe,
      title: 'API Development',
      description: 'RESTful and GraphQL API design and implementation',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach for all screen sizes',
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Robust security measures and best practices',
    },
  ];

  return (
    <section className="py-20 px-4" id="services">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
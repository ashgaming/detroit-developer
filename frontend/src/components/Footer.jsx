import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-dark-light">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Code2 className="w-12 h-12 text-primary animate-float" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-center"
          >
            © {new Date().getFullYear()} Your Name. All rights reserved.
            <br />
            Building the future with MERN stack and AI
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
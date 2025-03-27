import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database } from 'lucide-react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Link } from 'react-router-dom';

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#00ffff",
            },
            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Detroit Web Development
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-8">
            Transforming ideas into powerful web applications
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Code2 className="w-12 h-12 text-primary mb-2" />
              <span className="text-gray-300">MERN Stack</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Brain className="w-12 h-12 text-secondary mb-2" />
              <span className="text-gray-300">AI Integration</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Database className="w-12 h-12 text-primary mb-2" />
              <span className="text-gray-300">Cloud Solutions</span>
            </motion.div>
          </div>

           <Link
                          to="/project-specification"
                        >
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-dark font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-shadow"
            >
            Request Project
          </motion.button>
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
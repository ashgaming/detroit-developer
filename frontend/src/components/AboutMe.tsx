import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Globe2 } from 'lucide-react';

const AboutMe = () => {
  const skills = [
    { icon: Code2, label: 'MERN Stack', description: 'Expert in MongoDB, Express, React, and Node.js' },
    { icon: Brain, label: 'AI Integration', description: 'Building intelligent web solutions' },
    { icon: Database, label: 'Cloud Solutions', description: 'AWS & Google Cloud certified' },
    { icon: Globe2, label: 'Responsive Design', description: 'Mobile-first approach' }
  ];

  return (
    <section className="py-20 px-4 bg-dark-light" id="about">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate MERN stack developer with expertise in building AI-powered web applications. 
            With over 5 years of experience, I specialize in creating innovative solutions that help businesses 
            grow and succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((Skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-dark p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <Skill.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{Skill.label}</h3>
                <p className="text-gray-400">{Skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
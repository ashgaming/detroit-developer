import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="bg-dark-light rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark rounded-full text-primary text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <Github size={20} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
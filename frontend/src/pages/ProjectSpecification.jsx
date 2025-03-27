import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Calendar, DollarSign, MessageSquare } from 'lucide-react';

const ProjectSpecification = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    features: [],
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const projectTypes = [
    'Web Application',
    'AI Integration',
    'E-commerce Platform',
    // 'Mobile App',
    // 'Custom Solution'
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Start Your Project
          </h1>
          <p className="text-xl text-gray-400">
            Tell us about your project and let's create something amazing together
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-dark-light p-8 rounded-xl shadow-lg"
        >
          <div className="space-y-4">
            <label className="block text-xl font-semibold mb-4">
              What type of project do you need?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setFormData({ ...formData, projectType: type })}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.projectType === type
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-600 hover:border-primary/50'
                  }`}
                >
                  <FileCode2 className="w-6 h-6 mb-2 mx-auto" />
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xl font-semibold mb-4">
              What's your estimated timeline?
            </label>
            <div className="flex items-center space-x-4">
              <Calendar className="w-6 h-6 text-primary" />
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="flex-1 bg-dark border-2 border-gray-600 rounded-lg p-3 focus:border-primary transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xl font-semibold mb-4">
              What's your budget range?
            </label>
            <div className="flex items-center space-x-4">
              <DollarSign className="w-6 h-6 text-primary" />
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="flex-1 bg-dark border-2 border-gray-600 rounded-lg p-3 focus:border-primary transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xl font-semibold mb-4">
              Tell us about your project
            </label>
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-6 h-6 text-primary mt-3" />
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                placeholder="Describe your project, goals, and any specific requirements..."
                className="flex-1 bg-dark border-2 border-gray-600 rounded-lg p-3 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark border-2 border-gray-600 rounded-lg p-3 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-dark border-2 border-gray-600 rounded-lg p-3 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-dark border-2 border-gray-600 rounded-lg p-3 focus:border-primary transition-colors"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-dark font-bold py-4 px-8 rounded-lg text-lg shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-shadow"
          >
            Submit Project Request
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ProjectSpecification;
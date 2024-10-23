import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Layout } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Building responsive web applications with React, TypeScript, and modern frameworks"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI/ML Development",
    description: "Implementing machine learning models and AI-powered features"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Analysis",
    description: "Processing and analyzing data using Python and ML libraries"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive and user-friendly interfaces"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-400">
            I'm a passionate frontend developer with a deep interest in artificial intelligence 
            and machine learning. I combine my expertise in modern web technologies with AI/ML 
            to create innovative and intelligent web applications. My goal is to bridge the gap 
            between user-friendly interfaces and powerful AI capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
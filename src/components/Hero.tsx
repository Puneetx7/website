import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWord = ({ children }: { children: string }) => (
  <motion.span
    className="inline-block hover:text-blue-400 transition-colors cursor-default"
    whileHover={{ scale: 1.1 }}
  >
    {children}
  </motion.span>
);

export default function Hero() {
  const name = "Puneet Malhotra".split(" ");
  const description = "Frontend Developer & AI/ML Enthusiast".split(" ");
  const subtitle = "Crafting intelligent and intuitive web experiences".split(" ");

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 flex justify-center gap-4"
        >
          {name.map((word, index) => (
            <AnimatedWord key={index}>{word}</AnimatedWord>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto space-x-2"
        >
          {description.map((word, index) => (
            <AnimatedWord key={index}>{word}</AnimatedWord>
          ))}
          <br />
          <span className="inline-block mt-2">
            {subtitle.map((word, index) => (
              <AnimatedWord key={index}>{word}</AnimatedWord>
            ))}
          </span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <motion.a 
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a 
            href="#contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
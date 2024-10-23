import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import FloatingCube from './components/FloatingCube';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2 hover:text-blue-400 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={32} />
    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </motion.a>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <section className="relative h-[60vh] my-20">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingCube />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </section>

        <About />
        <Projects />
        <Contact />

        <section className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="inline-block hover:text-blue-400 transition-colors">Let's</span>{' '}
              <span className="inline-block hover:text-blue-400 transition-colors">Connect</span>
            </h2>
            <div className="flex justify-center gap-8">
              <SocialLink 
                href="https://github.com/PMX078" 
                icon={Github}
                label="GitHub"
              />
              <SocialLink 
                href="https://www.linkedin.com/in/puneet-malhotra7/" 
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink 
                href="mailto:puneetmalhotra7@proton.me" 
                icon={Mail}
                label="Email"
              />
              <SocialLink 
                href="https://www.kaggle.com/puneetmalhotra" 
                icon={() => (
                  <svg 
                    viewBox="0 0 24 24" 
                    width="32" 
                    height="32" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 8.5v7L12 22l10-6.5v-7L12 2zm0 4l6 3.5v5L12 18l-6-3.5v-5L12 6z" />
                  </svg>
                )}
                label="Kaggle"
              />
              <SocialLink 
                href="#projects" 
                icon={Terminal}
                label="Projects"
              />
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';
import { motion } from 'framer-motion';

const heroLines = [
  'Hello World! I\'m Walid Ezzat',
  'Junior Frontend Developer',
  'Where Engineering Meets Creativity',
  'Building beautiful, accessible web experiences',
];

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0e0a] via-[#101c10] to-[#1a1d1a] overflow-hidden">
      {/* Animated background shimmer */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, #0a0e0a, #101c10, #1a1d1a, #101c10, #0a0e0a)',
          backgroundSize: '400% 400%',
        }}
      />
      <TerminalWindow>
        <div className="flex flex-col items-center gap-6">
          <TypingAnimation
            lines={heroLines}
            typingSpeed={40}
            className="text-lg md:text-xl text-terminal-green text-center"
          />
          <motion.button
            whileHover={{ scale: 1.05, textShadow: "0 0 8px #00ff41", boxShadow: "0 0 15px #00ff41" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-2 border-2 border-terminal-green text-terminal-green font-bold text-lg bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-terminal-green"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">&gt;</span>
              <span>Initiate Contact</span>
            </span>
          </motion.button>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Home;

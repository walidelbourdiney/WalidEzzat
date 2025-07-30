import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingAnimation from "../components/TypingAnimation";
import { motion } from "framer-motion";
import cv from "../assets/Walid-Ezzat-CV-2025.pdf";

const heroLines = [
  '"Good design solves problems. Great design tells a story."',
  "Hi, I'm Walid Ezzat an engineer by foundation, front-end developer by choice.",
  "From technical blueprints to user interfaces. I design with clarity and build with care.",
  "My work blends precision with creativity to create meaningful user experiences.",
  "React and TypeScript handle the logic, Tailwind shapes the design, empathy guides the result.",
  "I code with intent, collaborate with purpose, and always aim for lasting impact.",
];

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0e0a] via-[#101c10] to-[#1a1d1a] overflow-hidden px-2 sm:px-4">
      {/* Animated background shimmer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, #0a0e0a, #101c10, #1a1d1a, #101c10, #0a0e0a)",
          backgroundSize: "400% 400%",
        }}
      />
      <TerminalWindow>
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-full">
          <TypingAnimation
            lines={heroLines}
            typingSpeed={50}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-terminal-green text-center leading-relaxed"
          />
          <motion.a
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px #00ff41",
              boxShadow: "0 0 15px #00ff41",
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:walidelbourdiney25@gmail.com"
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 border-2 border-terminal-green text-terminal-green font-bold text-base sm:text-lg bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-terminal-green inline-block whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">&gt;</span>
              <span>Initiate Contact</span>
            </span>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px #00ff41",
              boxShadow: "0 0 15px #00ff41",
            }}
            whileTap={{ scale: 0.95 }}
            href={cv}
            download
            aria-label="Download resume"
            className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-terminal-green text-black font-mono font-bold shadow-lg hover:bg-accent-green transition-colors duration-200 border-2 border-terminal-green ring-2 ring-terminal-green/40 animate-pulse-glow inline-block text-sm sm:text-base whitespace-nowrap"
          >
            $ download resume
          </motion.a>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Home;

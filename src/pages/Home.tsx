import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingAnimation from "../components/TypingAnimation";
import { motion } from "framer-motion";
import cv from "../assets/Walid-Ezzat-CV-2025.pdf";

const heroLines = [
  "I build joyful, story-driven interfaces with React and TypeScript.",
  "My UIs feel alive, thoughtful, fast, and always user-first.",
  "I code with intent, learn fast, and think beyond the obvious.",
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
          {/* Animated title */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-terminal-green text-center"
          >
            Hi, I'm Walid Ezzat, an engineer by foundation. Front-end developer
            by choice.
          </motion.h1>
          <TypingAnimation
            lines={heroLines}
            typingSpeed={50}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-terminal-green text-center leading-relaxed"
          />
          <motion.div
            animate={{ opacity: 1, x: 0, scale: 1 }}
            initial={{ opacity: 0, x: "-100vw", scale: 0.5 }}
            transition={{
              delay: 15,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
            className="flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-8"
          >
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
          </motion.div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Home;

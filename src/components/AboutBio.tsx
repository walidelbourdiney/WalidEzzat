import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import me from "../assets/me.png";
import cv from "../assets/Walid-Ezzat-CV-2025.pdf";

const bioLines = [
  "// Meet the developer 👇",
  "From mechanical engineering blueprints to React components.",
  "I bring systematic thinking and creative problem-solving\nto frontend development.",
  "I build with users in mind, code with intention,\nand collaborate with heart.",
];

const AboutBio: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6 px-2 sm:px-4 md:px-6 text-center"
    >
      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-terminal-green/10 border-2 sm:border-4 border-terminal-green shadow-lg flex items-center justify-center animate-pulse-glow overflow-hidden flex-shrink-0"
      >
        <img
          src={me}
          alt="Photo of Walid Ezzat"
          loading="lazy"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Bio Text */}
      <TypingAnimation
        lines={bioLines}
        typingSpeed={50}
        className="text-terminal-green text-sm sm:text-base md:text-lg leading-relaxed font-mono max-w-full"
      />

      {/* Resume Button */}
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
  );
};

export default AboutBio;

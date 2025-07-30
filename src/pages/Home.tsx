import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingAnimation from "../components/TypingAnimation";
import { motion } from "framer-motion";

const heroLines = [
  "Hello World! I'm Walid Ezzat.",
  "Frontend Developer with an engineer's mind & artist's eye.",
  "React. TypeScript. TailwindCSS. and more.",
  "Let's build something unforgettable together!",
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
            typingSpeed={40}
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
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Home;

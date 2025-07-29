import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import me from "../assets/me.png";

const bioLines = [
  "From mechanical engineering blueprints to React components.",
  "I bring systematic thinking and creative problem-solving \nto frontend development.",
  "",
  "I build with users in mind, code with intention, \nand collaborate with heart.",
];

const AboutBio: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center gap-8"
    >
      {/* Avatar placeholder */}
      <div className=" w-40 h-40 rounded-full bg-terminal-green/10 border-4 border-terminal-green shadow-lg flex items-center justify-center text-6xl text-terminal-green mb-2 animate-pulse-glow text-center">
        <img
          src={me}
          alt="avatar"
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <div className="mt-10 w-full max-w-2xl flex flex-col items-center gap-6 ">
        <TypingAnimation lines={bioLines} typingSpeed={30} />
      </div>
      <a
        href="/resume.pdf"
        download
        className="mt-4 px-6 py-3 rounded-lg bg-terminal-green text-black font-mono font-bold shadow-lg hover:bg-accent-green transition-colors duration-200 border-2 border-terminal-green ring-2 ring-terminal-green/40 animate-pulse-glow"
      >
        $ curl -O resume.pdf
      </a>
    </motion.div>
  );
};

export default AboutBio;

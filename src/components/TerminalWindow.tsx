import React from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative max-w-3xl mx-auto my-12 rounded-2xl bg-gradient-to-br from-[#101c10cc] to-[#1a1d1acc] backdrop-blur-lg border-2 border-terminal-green/60 shadow-2xl p-0 overflow-hidden ring-1 ring-terminal-green/40"
    style={{
      boxShadow: "0 8px 32px 0 rgba(0,255,65,0.15), 0 1.5px 0 0 #00ff41",
    }}
  >
    {/* Terminal bar */}
    <div className="flex items-center px-4 py-2 bg-gradient-to-r from-[#222] to-[#191c19] border-b border-terminal-green/20">
      <span className="w-3 h-3 rounded-full bg-red-500 mr-2 shadow-md"></span>
      <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2 shadow-md"></span>
      <span className="w-3 h-3 rounded-full bg-green-500 mr-4 shadow-md"></span>
      <span className="text-xs text-terminal-green font-mono opacity-80 animate-pulse-glow">
        {title || "user@Walid-Ezzat:~$"}
      </span>
    </div>
    <div className="p-8">{children}</div>
  </motion.div>
);

export default TerminalWindow;

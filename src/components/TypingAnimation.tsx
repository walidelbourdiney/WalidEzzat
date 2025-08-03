import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TypingAnimationProps {
  lines: string[];
  typingSpeed?: number; // ms per character
  linePause?: number; // ms between lines
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  lines,
  typingSpeed = 50,
  linePause = 600,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState<string[]>([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx < lines.length) {
      const currentLine = lines[lineIdx];
      const currentChar = currentLine[charIdx];

      if (charIdx < currentLine.length) {
        const isPauseChar = [",", ".", "!", "?"].includes(currentChar);
        const delay = isPauseChar ? typingSpeed * 5 : typingSpeed;

        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const updated = [...prev];
            updated[lineIdx] = (updated[lineIdx] || "") + currentChar;
            return updated;
          });
          setCharIdx((c) => c + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        if (lineIdx < lines.length - 1) {
          const timeout = setTimeout(() => {
            setDisplayed((prev) => [...prev, ""]);
            setLineIdx((l) => l + 1);
            setCharIdx(0);
          }, linePause);
          return () => clearTimeout(timeout);
        } else {
          setDone(true);
        }
      }
    }
  }, [charIdx, lineIdx, lines, typingSpeed, linePause]);

  return (
    <div
      className={`whitespace-pre-wrap font-mono break-words ${className}`.trim()}
    >
      {displayed.map((line, i) => (
        <div key={i} className="relative flex items-start">
          <span className="break-words">{line}</span>
          {i === displayed.length - 1 && !done && (
            <AnimatePresence>
              <motion.span
                key="cursor"
                className="ml-1 w-[2px] h-[1em] bg-terminal-green animate-pulse flex-shrink-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.3, 1] }}
                exit={{ opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1 }}
                aria-hidden="true"
              />
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
};

export default TypingAnimation;

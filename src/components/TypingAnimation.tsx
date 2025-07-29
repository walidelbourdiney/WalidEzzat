import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TypingAnimationProps {
  lines: string[];
  typingSpeed?: number; // ms per character
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ lines, typingSpeed = 50, className }) => {
  const [displayed, setDisplayed] = useState<string[]>(['']);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx < lines.length) {
      if (charIdx < lines[lineIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const newLines = [...prev];
            newLines[lineIdx] = (newLines[lineIdx] || '') + lines[lineIdx][charIdx];
            return newLines;
          });
          setCharIdx((c) => c + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line
        if (lineIdx < lines.length - 1) {
          setTimeout(() => {
            setDisplayed((prev) => [...prev, '']);
            setLineIdx((l) => l + 1);
            setCharIdx(0);
          }, typingSpeed * 10);
        } else {
          setDone(true);
        }
      }
    }
  }, [charIdx, lineIdx, lines, typingSpeed]);

  return (
    <div className={`whitespace-pre font-mono ${className || ''}`.trim()}>
      {displayed.map((line, i) => (
        <div key={i} className="relative flex items-center">
          <span className="glitch" data-text={line}>
            {line}
          </span>
          {i === displayed.length - 1 && !done && (
            <AnimatePresence>
              <motion.span
                key="cursor"
                className="inline-block w-3 h-5 bg-terminal-green ml-1"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.2, 1] }}
                exit={{ opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
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

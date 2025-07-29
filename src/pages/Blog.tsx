import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark py-8">
      <TerminalWindow title="user@walid-portfolio:~/blog$">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="font-mono text-terminal-green">
            <div className="mb-4">
              <a
                href="https://hashnode.com/@walidezzat"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent-green font-bold"
              >
                Visit my Hashnode Blog
              </a>
            </div>
            <div className="mb-2 text-accent-green">$ cat recent-posts.txt</div>
            <ul className="list-disc ml-6">
              <li>How I built my terminal-inspired portfolio (coming soon)</li>
              <li>React + TypeScript: My favorite patterns (coming soon)</li>
              <li>Performance tips for modern web apps (coming soon)</li>
            </ul>
          </div>
        </motion.div>
      </TerminalWindow>
    </div>
  );
};

export default Blog;

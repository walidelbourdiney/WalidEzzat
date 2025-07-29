import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import SkillsTerminal from '../components/SkillsTerminal';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark py-8">
      <TerminalWindow title="user@walid-portfolio:~/skills$">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SkillsTerminal />
        </motion.div>
      </TerminalWindow>
    </div>
  );
};

export default Skills;

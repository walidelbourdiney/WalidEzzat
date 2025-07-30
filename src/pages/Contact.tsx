import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark py-4 sm:py-8 w-full max-w-full">
      <TerminalWindow title="user@walid-portfolio:~/contact$">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full"
        >
          <ContactForm />
        </motion.div>
      </TerminalWindow>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import TerminalWindow from '../components/TerminalWindow';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Terminal Portfolio',
    description: 'A modern terminal-inspired portfolio built with React, TypeScript, and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/walid-ezzat/terminal-portfolio',
    demo: '#',
  },
  {
    title: 'AI Chatbot',
    description: 'Conversational AI chatbot with OpenAI API and custom UI.',
    tech: ['React', 'OpenAI', 'Vite'],
    github: 'https://github.com/walid-ezzat/ai-chatbot',
    demo: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Minimal blog platform with Markdown support and Hashnode integration.',
    tech: ['React', 'Markdown', 'Hashnode'],
    github: 'https://github.com/walid-ezzat/blog-platform',
    demo: '#',
  },
  {
    title: 'UI Kit',
    description: 'Reusable UI component kit for rapid prototyping.',
    tech: ['React', 'Storybook', 'Tailwind'],
    github: 'https://github.com/walid-ezzat/ui-kit',
    demo: '#',
  },
];

const techFilters = ['All', 'React', 'AI', 'Tailwind', 'OpenAI', 'Markdown'];

const Projects: React.FC = () => {
  const [active, setActive] = useState('All');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark py-8">
      <TerminalWindow title="user@walid-portfolio:~/projects$">
        <div className="mb-4 flex gap-2">
          {techFilters.map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 rounded font-mono text-sm border border-terminal-green/40 transition-colors duration-150 ${active === filter ? 'bg-terminal-green text-black' : 'bg-terminal-dark-alt text-terminal-green hover:bg-terminal-green/20'}`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </TerminalWindow>
    </div>
  );
};

export default Projects;

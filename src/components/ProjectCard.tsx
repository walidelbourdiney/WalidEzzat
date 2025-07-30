import React from 'react';

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, github, demo }) => {
  return (
    <div className="rounded-lg bg-terminal-dark-alt border border-terminal-green/40 p-3 sm:p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-xl hover:border-terminal-green cursor-pointer mb-4 w-full">
      <h3 className="text-lg sm:text-xl font-bold text-terminal-green mb-2 break-words">{title}</h3>
      <p className="text-terminal-green/80 mb-3 text-sm sm:text-base leading-relaxed break-words">{description}</p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-terminal-green/10 text-terminal-green text-xs rounded font-mono whitespace-nowrap">{t}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline text-terminal-green font-mono text-sm sm:text-base hover:text-accent-green transition-colors"
        >
          GitHub
        </a>
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline text-accent-green font-mono text-sm sm:text-base hover:text-terminal-green transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

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
    <div className="rounded-lg bg-terminal-dark-alt border border-terminal-green/40 p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-xl hover:border-terminal-green cursor-pointer mb-4">
      <h3 className="text-xl font-bold text-terminal-green mb-2">{title}</h3>
      <p className="text-terminal-green/80 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-terminal-green/10 text-terminal-green text-xs rounded font-mono">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="underline text-terminal-green font-mono">GitHub</a>
        {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="underline text-accent-green font-mono">Live Demo</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

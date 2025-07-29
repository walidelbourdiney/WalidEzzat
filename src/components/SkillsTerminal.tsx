import React from 'react';

const skills = [
  { category: 'Frontend', items: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'UI/UX', level: 75 },
  ]},
  { category: 'Backend', items: [
    { name: 'Node.js', level: 60 },
    { name: 'Express', level: 55 },
  ]},
  { category: 'Tools', items: [
    { name: 'Git', level: 80 },
    { name: 'Vite', level: 70 },
    { name: 'Storybook', level: 60 },
  ]},
  { category: 'Learning', items: [
    { name: 'Next.js', level: 30 },
    { name: 'AI/ML', level: 20 },
  ]},
];

const SkillsTerminal: React.FC = () => {
  return (
    <div className="font-mono text-terminal-green">
      {skills.map((cat) => (
        <div key={cat.category} className="mb-6">
          <div className="text-accent-green font-bold mb-2">$ npm list --{cat.category.toLowerCase()}</div>
          {cat.items.map((skill) => (
            <div key={skill.name} className="mb-1 flex items-center gap-2">
              <span className="w-32 inline-block">{skill.name}</span>
              <div className="flex-1 bg-terminal-dark-alt rounded h-3 overflow-hidden">
                <div
                  className="bg-terminal-green h-3 rounded"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs ml-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsTerminal;

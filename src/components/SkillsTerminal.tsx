import React from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React 19", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Responsive Design", level: 85 },
      { name: "UI/UX", level: 75 },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Zustand", level: 80 },
      { name: "Context API", level: 75 },
      { name: "React Query", level: 70 },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Vite", level: 85 },
      { name: "Git / GitHub", level: 85 },
      { name: "DevTools & Debugging", level: 80 },
      { name: "i18next / RTL", level: 70 },
      { name: "Formik", level: 65 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "RESTful APIs", level: 85 },
      { name: "WordPress", level: 60 },
      { name: "Linux Basics", level: 60 },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "Next.js", level: 40 },
      { name: "AI APIs (Cohere, HuggingFace)", level: 35 },
    ],
  },
];

const SkillsTerminal: React.FC = () => {
  return (
    <div className="font-mono text-terminal-green w-full px-4 sm:px-6">
      {skills.map((cat) => (
        <div key={cat.category} className="mb-8 max-w-2xl mx-auto">
          <div className="text-accent-green font-bold mb-2">
            $ npm list --{cat.category.toLowerCase().replace(/ /g, "-")}
          </div>
          {cat.items.map((skill) => (
            <div
              key={skill.name}
              className="mb-2 flex flex-col sm:flex-row sm:items-center sm:gap-2"
            >
              <span className="w-full sm:w-40 inline-block">{skill.name}</span>
              <div className="w-full flex-1 bg-terminal-dark-alt rounded h-3 overflow-hidden mt-1 sm:mt-0">
                <div
                  className="bg-terminal-green h-3 rounded"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs ml-auto mt-1 sm:mt-0 sm:ml-2">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsTerminal;

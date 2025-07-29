import React from "react";
import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

const levelTag = (level: SkillLevel) => {
  switch (level) {
    case "Advanced":
      return <span className="text-xs text-green-400">🟢 Advanced</span>;
    case "Intermediate":
      return <span className="text-xs text-yellow-300">🟡 Intermediate</span>;
    case "Beginner":
      return <span className="text-xs text-blue-400">🔵 Beginner</span>;
  }
};

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React 19", level: "Advanced" },
      { name: "TypeScript", level: "Beginner" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "UI/UX", level: "Intermediate" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Zustand", level: "Advanced" },
      { name: "Context API", level: "Beginner" },
      { name: "React Query", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Vite", level: "Advanced" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "DevTools & Debugging", level: "Intermediate" },
      { name: "i18next / RTL", level: "Intermediate" },
      { name: "Formik", level: "Intermediate" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "RESTful APIs", level: "Advanced" },
      { name: "WordPress", level: "Intermediate" },
      { name: "Linux Basics", level: "Intermediate" },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "Next.js", level: "Beginner" },
      { name: "AI APIs", level: "Beginner" },
    ],
  },
] as {
  category: string;
  items: { name: string; level: SkillLevel }[];
}[];

const barVariants: Variants = {
  hidden: { width: 0 },
  visible: (level: SkillLevel): TargetAndTransition => ({
    width:
      level === "Advanced" ? "100%" : level === "Intermediate" ? "66%" : "33%",
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }, // use easing array
  }),
};

const SkillsTerminal: React.FC = () => {
  return (
    <div className="font-mono text-terminal-green w-full px-4 sm:px-6">
      {skills.map((cat) => (
        <div key={cat.category} className="mb-10 max-w-2xl mx-auto">
          {/* Animated Header */}
          <TypingAnimation
            lines={[
              `$ npm list --${cat.category.toLowerCase().replace(/ /g, "-")}`,
            ]}
            typingSpeed={30}
            className="text-accent-green font-bold mb-3 text-sm sm:text-base"
          />

          {cat.items.map((skill) => (
            <div
              key={skill.name}
              className="mb-2 flex flex-col sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="w-full sm:w-40">{skill.name}</span>
              <div className="w-full flex-1 bg-terminal-dark-alt rounded h-3 overflow-hidden mt-1 sm:mt-0">
                <motion.div
                  className="bg-terminal-green h-3 rounded"
                  custom={skill.level}
                  initial="hidden"
                  animate="visible"
                  variants={barVariants}
                />
              </div>
              <div className="mt-1 sm:mt-0 sm:ml-2">
                {levelTag(skill.level)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsTerminal;

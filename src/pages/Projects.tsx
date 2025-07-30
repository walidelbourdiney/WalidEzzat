import React, { useState } from "react";
import TerminalWindow from "../components/TerminalWindow";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mood Nest",
    description:
      "AI-powered mental wellness companion. Analyze journal entries using Cohere AI to help users understand emotional patterns.",
    tech: [
      "React 19",
      "Zustand",
      "Tailwind",
      "Vite",
      "Cohere AI",
      "Recharts",
      "APIs",
    ],
    github: "https://github.com/walidelbourdiney/MOOD-NEST",
    demo: "https://mood-nest.vercel.app",
  },
  {
    title: "Admin Portal",
    description:
      "Bilingual healthcare admin dashboard with i18n, secure auth, protected routes, and RTL/LTR layout support.",
    tech: [
      "React 19",
      "Tailwind",
      "Zustand",
      "React Query",
      "Formik",
      "i18next",
      "Vite",
      "APIs",
    ],
    github: "https://github.com/walidelbourdiney/portal",
    demo: "https://portal-sooty-pi.vercel.app/",
  },
  {
    title: "Chef Welly",
    description:
      "AI-powered recipe recommendation system using Hugging Face Mixtral model with markdown formatting.",
    tech: ["React 19", "Vite", "HuggingFace", "Markdown", "APIs"],
    github: "https://github.com/walidelbourdiney/chef-welly",
  },
  {
    title: "Meme Generator",
    description:
      "A fun meme generator using Imgflip API with live text editing and responsive design.",
    tech: ["React", "Vite", "Imgflip API", "CSS", "APIs"],
    github: "https://github.com/walidelbourdiney/MemeGenerator",
  },
  {
    title: "Weather App",
    description:
      "Responsive weather app using OpenWeather API with emoji icons, loading states, and error handling.",
    tech: ["JavaScript", "HTML", "CSS", "OpenWeather API", "APIs"],
    github: "https://github.com/walidelbourdiney/WEATHER-APP--native-JS-",
    demo: "https://weather-app-native-js.vercel.app/",
  },
  {
    title: "Modern Web Calculator",
    description:
      "JavaScript-powered calculator with decimal, operator logic, input validation, and modern UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/walidelbourdiney/Calculator",
  },
];

const techFilters = [
  "All",
  "React",
  "JavaScript",
  "Tailwind",
  "AI",
  "Vite",
  "APIs",
  "Markdown",
];

const Projects: React.FC = () => {
  const [active, setActive] = useState("All");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark py-4 sm:py-8 w-full max-w-full">
      <TerminalWindow title="user@walid-portfolio:~/projects$">
        <div className="mb-4 flex flex-wrap gap-2 w-full">
          {techFilters.map((filter) => (
            <button
              key={filter}
              className={`px-2 sm:px-3 py-1 rounded font-mono text-xs sm:text-sm border border-terminal-green/40 transition-colors duration-150 whitespace-nowrap ${
                active === filter
                  ? "bg-terminal-green text-black"
                  : "bg-terminal-dark-alt text-terminal-green hover:bg-terminal-green/20"
              }`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          {projects
            .filter((p) =>
              active === "All"
                ? true
                : p.tech.some((tech) =>
                    tech.toLowerCase().includes(active.toLowerCase())
                  )
            )
            .map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
        </motion.div>
      </TerminalWindow>
    </div>
  );
};

export default Projects;

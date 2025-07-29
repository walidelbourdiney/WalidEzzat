import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import AboutBio from "../components/AboutBio";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark p-8">
      <TerminalWindow title="user@walid-portfolio:~/about$">
        <AboutBio />
      </TerminalWindow>
    </div>
  );
};

export default About;

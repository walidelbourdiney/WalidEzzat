import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "~/home" },
  { to: "/about", label: "~/about" },
  { to: "/projects", label: "~/projects" },
  { to: "/skills", label: "~/skills" },
  { to: "/blog", label: "~/blog" },
  { to: "/contact", label: "~/contact" },
];

const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono ">
      <nav className="flex space-x-4 px-6 py-4 border-b border-terminal-green/30 bg-black/80 backdrop-blur text-terminal-green justify-center align-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative px-3 py-1 transition-colors duration-200 ${
              location.pathname === link.to
                ? "bg-terminal-green text-black"
                : "hover:bg-terminal-green/20"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

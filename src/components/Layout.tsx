import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "~/home" },
  { to: "/projects", label: "~/projects" },
  { to: "/skills", label: "~/skills" },
  { to: "/blog", label: "~/blog" },
  { to: "/contact", label: "~/contact" },
];

const Layout: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path
      ? "bg-terminal-green text-black"
      : "hover:bg-terminal-green/20";

  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono">
      {/* Navbar */}
      <nav className="w-full border-b border-terminal-green/30 bg-black/80 backdrop-blur px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-base sm:text-lg truncate">
            <Link to="/" className="hover:text-accent-green whitespace-nowrap">
              &gt;_ walid-ezzat
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-2 lg:px-3 py-1 transition-colors duration-200 whitespace-nowrap ${isActive(
                  link.to
                )}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-terminal-green focus:outline-none p-1"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-1 md:hidden px-2 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded transition whitespace-nowrap ${isActive(
                  link.to
                )}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="p-2 sm:p-4 w-full overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

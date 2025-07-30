import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import { motion } from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";

const posts = [
  {
    title: "Tailwind CSS v4 Complete Guide",
    date: "Jul 28, 2025",
    link: "https://walidezzat.hashnode.dev/tailwind-css-v4-complete-guide",
  },
  {
    title:
      "Simplifying React: Key Concepts of Components, Props, and Code Optimization",
    date: "Feb 11, 2025",
    link: "https://walidezzat.hashnode.dev/simplifying-react-key-concepts-of-components-props-and-code-optimization",
  },
  {
    title: "JavaScript and DOM Manipulation Explained for Beginners",
    date: "Jan 14, 2025",
    link: "https://walidezzat.hashnode.dev/",
  },
  {
    title: "Error Handling in JavaScript: A Comprehensive Guide",
    date: "Dec 25, 2024",
    link: "https://walidezzat.hashnode.dev/",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-terminal-dark py-4 sm:py-8 w-full max-w-full">
      <TerminalWindow title="user@walid-portfolio:~/blog$">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <div className="font-mono text-terminal-green max-w-2xl mx-auto px-2 sm:px-4">
            {/* Blog Header */}
            <TypingAnimation
              lines={["$ cat recent-posts.txt"]}
              typingSpeed={30}
              className="text-accent-green font-bold mb-4 text-sm sm:text-base text-center break-words"
            />

            {/* Post List */}
            <ul className="space-y-3 sm:space-y-4 pl-2 sm:pl-4 md:pl-6">
              {posts.map((post) => (
                <li key={post.title} className="break-words">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:text-accent-green underline text-sm sm:text-base transition-colors"
                  >
                    {post.title}
                  </a>{" "}
                  <span className="text-xs text-terminal-dark-alt whitespace-nowrap">
                    ({post.date})
                  </span>
                </li>
              ))}
            </ul>

            {/* Visit Blog Link */}
            <div className="mt-4 sm:mt-6 text-center">
              <a
                href="https://walidezzat.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent-green font-bold text-sm sm:text-base hover:text-terminal-green transition-colors"
              >
                Explore more on Hashnode →
              </a>
            </div>
          </div>
        </motion.div>
      </TerminalWindow>
    </div>
  );
};

export default Blog;

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="font-mono text-terminal-green flex flex-col items-center gap-6">
      <form className="w-full max-w-md bg-terminal-dark-alt p-6 rounded-lg border border-terminal-green/40 flex flex-col gap-4">
        <label>
          Name
          <input type="text" className="w-full mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green" />
        </label>
        <label>
          Email
          <input type="email" className="w-full mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green" />
        </label>
        <label>
          Message
          <textarea className="w-full mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green" rows={4} />
        </label>
        <button type="submit" className="mt-2 px-4 py-2 rounded bg-terminal-green text-black font-bold shadow hover:bg-accent-green transition-colors duration-200 border border-terminal-green">
          $ send-message
        </button>
      </form>
      <div className="flex gap-6 mt-4">
        <a href="mailto:walid@example.com" className="underline text-accent-green">Email</a>
        <a href="https://linkedin.com/in/walidezzat" target="_blank" rel="noopener noreferrer" className="underline text-accent-green">LinkedIn</a>
        <a href="https://github.com/walid-ezzat" target="_blank" rel="noopener noreferrer" className="underline text-accent-green">GitHub</a>
      </div>
      <div className="mt-4 text-accent-green">git clone &lt;my-skills&gt; &amp;&amp; npm install me</div>
    </div>
  );
};

export default ContactForm;

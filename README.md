#  Walid Ezzat - Frontend Developer Portfolio

> **Terminal-Inspired Portfolio** | React 19 • TypeScript • Tailwind CSS v4 • Framer Motion

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?logo=framer)](https://www.framer.com/motion/)

---

## 🎯 Overview

A modern, terminal-inspired portfolio website showcasing my journey from mechanical engineering to frontend development. Built with cutting-edge technologies and designed with a unique cyberpunk aesthetic that reflects my passion for both systematic thinking and creative problem-solving.

### ✨ Key Features

- **Terminal-Inspired UI**: Authentic terminal window design with glowing effects
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion-powered transitions and typing effects
- **Modern Stack**: React 19, TypeScript, Tailwind CSS v4, Vite
- **Performance Optimized**: Fast loading with modern build tools
- **Accessibility**: Keyboard navigation and screen reader support

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool

### **Styling & Animation**
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Custom CSS Variables** - Terminal-themed color system

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Git** - Version control

### **Deployment**
- **Vercel** - Modern hosting platform
- **FormSubmit** - Contact form handling

---

## 🎨 Design Philosophy

### Terminal Aesthetic
- **Color Scheme**: Classic terminal green (#00ff41) on dark backgrounds
- **Typography**: JetBrains Mono for authentic terminal feel
- **Effects**: Glowing borders, typing animations, and glitch effects
- **Layout**: Clean, minimal design with focus on content

### Responsive Design
- **Mobile-First**: Optimized for mobile devices (320px+)
- **Breakpoints**: Tailwind's responsive utilities
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive designs
- **Touch-Friendly**: Proper touch targets and spacing

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with navigation
│   ├── TerminalWindow.tsx  # Terminal-style container
│   ├── TypingAnimation.tsx # Animated text typing
│   ├── ProjectCard.tsx     # Project showcase cards
│   ├── SkillsTerminal.tsx  # Skills visualization
│   ├── ContactForm.tsx     # Contact form component
│   └── AboutBio.tsx        # About section component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills page
│   ├── Blog.tsx        # Blog posts
│   └── Contact.tsx     # Contact page
├── assets/             # Static assets
│   ├── me.png         # Profile image
│   └── Walid-Ezzat-CV-2025.pdf  # Resume
├── App.tsx            # Main app component
├── main.tsx           # App entry point
├── index.css          # Global styles and theme
└── vite-env.d.ts      # Vite type definitions
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/walidelbourdiney/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

---

## 🎯 Key Components

### TerminalWindow
A reusable component that creates authentic terminal-style containers with:
- Terminal bar with control buttons
- Glowing borders and shadows
- Responsive padding and sizing
- Smooth entrance animations

### TypingAnimation
Custom typing effect component featuring:
- Character-by-character typing
- Blinking cursor animation
- Configurable typing speed
- Glitch effect overlays

### ProjectCard
Interactive project showcase cards with:
- Hover animations and scaling
- Tech stack tags
- GitHub and demo links
- Responsive layout

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 576px
- **Tablet**: 768px - 992px
- **Desktop**: 1024px - 1200px
- **Large Desktop**: 1200px+

### Responsive Features
- **Flexible Typography**: Responsive text sizing
- **Adaptive Layouts**: Mobile-first design approach
- **Touch Optimization**: Proper touch targets
- **Content Wrapping**: Smart text and element wrapping

---

## 🎨 Custom Styling

### Terminal Theme Colors
```css
--color-terminal-green: #00ff41;
--color-bg-dark: #0c0f0c;
--color-bg-dark-alt: #141814;
--color-accent: #00ffc8;
```

### Animation Classes
- `.glitch` - Terminal glitch effect
- `.animate-pulse-glow` - Pulsing glow animation
- `.shadow-glow` - Terminal-style glowing shadows

---

## 📊 Performance

### Optimization Features
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Optimized assets
- **Tree Shaking**: Unused code elimination
- **Minification**: Compressed production builds

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 🔧 Development

### Code Quality
- **TypeScript**: Strict type checking
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent formatting
- **Git Hooks**: Pre-commit validation

### Best Practices
- **Component Composition**: Reusable, modular components
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized rendering and animations
- **Accessibility**: ARIA labels and keyboard navigation

---

## 📈 Features Roadmap

### Planned Enhancements
- [ ] **Dark/Light Mode Toggle**
- [ ] **Internationalization (i18n)**
- [ ] **Project Filtering by Category**
- [ ] **Interactive Terminal Commands**

---

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

---


## 📞 Contact

- **Email**: [walidelbourdiney25@gmail.com](mailto:walidelbourdiney25@gmail.com)
- **LinkedIn**: [Walid Ezzat](https://www.linkedin.com/in/walid-ezzat/)
- **GitHub**: [@walidelbourdiney](https://github.com/walidelbourdiney)
- **Portfolio**: [walid-ezzat-portfolio.vercel.app](https://walid-ezzat.vercel.app/)

---

## 🙏 Acknowledgments

- **JetBrains Mono** - Beautiful monospace font
- **Framer Motion** - Amazing animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Vercel** - Excellent hosting platform

---

<div align="center">

**Built with ❤️ and ☕ by Walid Ezzat**

*From mechanical engineering blueprints to React components*

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00ff41?style=for-the-badge)](https://walid-ezzat.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/walid-ezzat/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/walidelbourdiney)

</div>

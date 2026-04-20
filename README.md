# Agency Portfolio

A modern, responsive agency portfolio website built with cutting-edge technologies. Showcase your agency's services, team, case studies, and testimonials with beautiful animations and professional design.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-06B6D4?style=flat&logo=tailwind-css)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

---

## 🛠️ Development Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19.2.4 |
| **Language** | TypeScript 6.0.2 |
| **Build Tool** | Vite 8.0.4 |
| **Styling** | Tailwind CSS 4.2.2 |
| **Animations** | Framer Motion 12.38.0 |
| **Icons** | Lucide React 1.8.0, React Icons 5.6.0 |
| **Linting** | ESLint 9.39.4 |

---

## ✨ Key Features

### 🎨 UI Components
- **Navbar** - Responsive navigation with smooth scrolling
- **Hero Section** - Eye-catching landing area with animations
- **Services Grid** - Showcase your agency services
- **Feature Section** - Highlight key features
- **Case Studies** - Display project portfolios
- **Client Logos** - Trusted brand showcases
- **Testimonials** - Client reviews and feedback
- **Team Section** - Meet your team members
- **Blog Section** - Share insights and articles
- **Pricing Section** - Service pricing tables
- **FAQ Section** - Frequently asked questions
- **Stats Section** - Agency statistics and metrics
- **Why Choose Us** - Unique selling propositions
- **Final CTA** - Call-to-action sections
- **Footer** - Complete footer with links

### 🎯 Highlights
- **Smooth Animations** - Powered by Framer Motion
- **Fully Responsive** - Mobile-first design approach
- **TypeScript Support** - Type-safe code
- **Modern Build System** - Lightning-fast HMR with Vite
- **Utility-First CSS** - Tailwind CSS for rapid styling
- **Icon Library** - Multiple icon sets included
- **Clean Code Structure** - Well-organized component architecture

---

## 📊 Project Statistics

- **Total Components**: 16+ specialized sections
- **Total Files**: 37 files in initial commit
- **Lines of Code**: 5,055+ lines
- **Dependencies**: 20+ packages
- **TypeScript**: Full type safety enabled
- **ESLint**: Strict linting rules configured

---

## ⚙️ Configuration Files

### TypeScript Configuration
- `tsconfig.json` - Base TypeScript config
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js environment config

### Build Configuration
- `vite.config.ts` - Vite build configuration
- `eslint.config.js` - ESLint rules and plugins

### Dependencies Structure

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.8.0",
    "react-icons": "^5.6.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "vite": "^8.0.4",
    "typescript": "~6.0.2",
    "tailwindcss": "^4.2.2",
    "@tailwindcss/vite": "^4.2.2",
    "eslint": "^9.39.4"
  }
}
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── BlogSection.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── FaqSection.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── FinalCta.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TestimonialFeature.tsx
│   │   ├── TestimonialGrid.tsx
│   │   └── WhyChooseUs.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── utils/
│   │   └── animations.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── README.md
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Customization

### Adding New Components
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to page layout

### Styling
- Edit `src/index.css` for global styles
- Modify `src/App.css` for component-specific styles
- Use Tailwind CSS classes for rapid styling

### Animations
- Import from `src/utils/animations.ts`
- Use Framer Motion for complex animations

---

## 📄 License

MIT License - Feel free to use this template for your projects.

---

## 🔗 Links

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with ❤️ using React, TypeScript, and Vite

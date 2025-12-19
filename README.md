# Om Janamanchi - Portfolio Website

A modern, professional portfolio website featuring an Apple-inspired design with smooth animations and a sophisticated dark tech theme. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Tech Dark Theme**: Sophisticated dark color scheme with vibrant blue and cyan accents
- **Apple-Inspired Design**: Smooth, fluid animations and transitions throughout
- **Glass-morphism Navbar**: Translucent navigation bar with backdrop blur effects
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Smooth Scroll Animations**: Framer Motion powered scroll-triggered animations
- **Performance Optimized**: Built with Vite for lightning-fast builds and hot module replacement
- **Type-Safe**: Full TypeScript support for robust development
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 with custom design system
- **Animations**: Framer Motion 10
- **Icons**: Lucide React
- **Forms**: React Hook Form with EmailJS integration
- **Fonts**: Inter (Google Fonts) + JetBrains Mono
- **Deployment**: GitHub Pages

## 🎨 Design System

The portfolio uses a custom **Modern Tech Dark** design system with:

- **Color Palette**: Deep navy backgrounds (#0D1117) with electric blue (#58A6FF) and cyan (#00D9FF) accents
- **Typography**: Inter for body text, with a refined type scale
- **Animations**: Apple-like smooth cubic-bezier easing functions for natural motion
- **Components**: Reusable button styles, cards, badges, and section headers
- **Glass Effects**: Backdrop blur and transparency for modern UI elements

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/omjanamanchi/omjanamanchi.github.io.git
cd omjanamanchi.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
omjanamanchi.github.io/
├── public/                    # Static assets
│   ├── logo_apple_premium_centered.svg  # Navbar logo & favicon
│   ├── omjanamanchi-headshot.jpg        # Profile image
│   ├── Om_Janamanchi_Resume.pdf         # Resume PDF
│   └── *.jpg                            # Company/school logos
│
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.tsx        # Navigation bar with glass-morphism
│   │   ├── Hero.tsx          # Landing section with profile
│   │   ├── About.tsx         # About section with stats
│   │   ├── Education.tsx     # Education timeline
│   │   ├── Experience.tsx    # Work experience cards
│   │   ├── Research.tsx      # Research experience
│   │   ├── Leadership.tsx    # Leadership roles
│   │   ├── Projects.tsx      # Project showcase with filters
│   │   ├── Skills.tsx        # Technical skills
│   │   ├── Interests.tsx     # Hobbies and interests
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer component
│   │
│   ├── data/                 # Data files (TypeScript interfaces)
│   │   ├── education.ts      # Education data
│   │   ├── experience.ts     # Work experience data
│   │   ├── research.ts       # Research data
│   │   ├── leadership.ts     # Leadership data
│   │   ├── projects.ts       # Projects data
│   │   └── skills.ts         # Skills data
│   │
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global styles & design system
│   └── vite-env.d.ts         # Vite type definitions
│
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎯 Key Components

### Navigation
- Fixed glass-morphism navbar with smooth scroll detection
- Active section highlighting
- Mobile-responsive hamburger menu

### Hero Section
- Large profile image with gradient border
- Animated background elements
- Call-to-action buttons
- Social media links

### Content Sections
- Education: Timeline of academic achievements
- Experience: Professional work experience cards
- Research: Research positions and publications
- Leadership: Leadership roles and responsibilities
- Projects: Filterable project showcase
- Skills: Technical skills organized by category
- Interests: Personal hobbies and interests
- Contact: Email form with validation

## 🎨 Customization

### Updating Content

All content is stored in TypeScript data files under `src/data/`:

- **Personal Info**: Update `src/data/experience.ts`, `src/data/education.ts`, etc.
- **Projects**: Modify `src/data/projects.ts` to add or update projects
- **Skills**: Edit `src/data/skills.ts` to update technical skills

### Styling

- **Colors**: Modify color variables in `src/index.css` under `:root`
- **Design Tokens**: Update spacing, typography, and other design tokens in `src/index.css`
- **Tailwind Config**: Customize Tailwind settings in `tailwind.config.js`

### Assets

- **Images**: Place images in `public/` folder and reference with `/filename.ext`
- **Logo**: Update `public/logo_apple_premium_centered.svg` for navbar logo
- **Favicon**: The logo SVG also serves as the favicon (defined in `index.html`)

## 🚀 Deployment

The site is deployed to GitHub Pages. To deploy:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy (if configured)
3. Or manually build and configure GitHub Pages to serve from `dist/` folder

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Set source to "GitHub Actions" (if using workflow) or "Deploy from a branch"
3. If deploying from branch, select `main` branch and `/dist` folder

## 📝 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Code Quality

- **TypeScript**: Full type safety throughout the codebase
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Modular, reusable components

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Om Janamanchi**

- 🎓 Computer Science Student @ Purdue University
- 💼 Software Engineering Intern @ Whisp & RockABlock
- 🔬 Research @ UC Berkeley BAIR Lab
- 👨‍💼 President @ Purdue CS Club
- 📊 Quantitative Analyst @ Boiler Quant

**Links:**
- 🌐 Website: [omjanamanchi.github.io](https://omjanamanchi.github.io)
- 💻 GitHub: [@omjanamanchi](https://github.com/omjanamanchi)
- 💼 LinkedIn: [omjanamanchi](https://linkedin.com/in/omjanamanchi)
- 📧 Email: omjanamanchi@gmail.com

---

Built with ❤️ using React, TypeScript, and modern web technologies.

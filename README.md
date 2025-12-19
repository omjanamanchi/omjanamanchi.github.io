# Om Janamanchi - Portfolio Website

A modern, professional portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with professional color scheme
- **Fully Responsive**: Mobile-first approach with breakpoints for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Fast Performance**: Optimized with Vite for lightning-fast loading
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: GitHub Pages

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

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Leadership.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Interests.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/            # Data files
│   ├── education.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── leadership.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files.

3. Configure GitHub Pages to serve from the `dist` folder (or use GitHub Actions workflow).

## 📝 Customization

- Update personal information in `src/data/` files
- Modify colors in `tailwind.config.js`
- Adjust animations in component files
- Update images in the `public/` folder

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Om Janamanchi**
- GitHub: [@omjanamanchi](https://github.com/omjanamanchi)
- LinkedIn: [omjanamanchi](https://linkedin.com/in/omjanamanchi)
- Email: omjanamanchi@gmail.com

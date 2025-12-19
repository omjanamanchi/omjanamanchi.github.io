# Setup Instructions

## Prerequisites

- Node.js 18+ and npm installed
- Git installed

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## GitHub Pages Deployment

The site is automatically deployed via GitHub Actions when you push to the `main` branch.

### Manual Setup (if needed)

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

## Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `education.ts` - Education history
- `experience.ts` - Work experience
- `projects.ts` - Project portfolio
- `skills.ts` - Technical skills
- `leadership.ts` - Leadership roles

### Update Images

Place images in the `public/` folder and reference them:
- Profile image: `/omjanamanchi-headshot.jpg`
- Resume PDF: `/resume.pdf`
- Favicon: `/om-svg.svg`

### Customize Colors

Edit `tailwind.config.js` to change the color scheme.

### Update Contact Email

Edit `src/components/Contact.tsx` and `src/components/Hero.tsx` to update email addresses.

## Troubleshooting

### Build Errors

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Deployment Issues

- Check GitHub Actions workflow logs
- Ensure `base: '/'` in `vite.config.ts` for GitHub Pages
- Verify all assets are in the `public/` folder


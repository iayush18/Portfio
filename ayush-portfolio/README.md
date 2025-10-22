## Ayush Kumar — Portfolio (React + Vite + Tailwind)

Modern, responsive developer portfolio with dark/light themes, smooth animations, SEO meta, and accessible components.

### Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Replace placeholders
- `public/social-preview.png`: Social image (1200x630)
- `public/Ayush_Kumar_Resume.pdf`: Your resume
- Links in `src/App.jsx`: GitHub, LinkedIn, project repos
- Profile photo in Hero section

### Build

```bash
npm run build
npm run preview
```

### Deploy
- Vercel: Import the repo, framework = Vite, build = `npm run build`, output = `dist`
- Netlify: Build command `npm run build`, publish directory `dist`

### Accessibility
- Semantic sections with landmarks
- Keyboard-navigable dialogs and menus
- Focus-visible and skip link

### Tech
- React, Vite, Tailwind CSS (dark mode via `class`)
- No heavy animation libraries; uses CSS and tiny JS for cursor glow

### License
MIT

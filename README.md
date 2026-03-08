# codeq — Quality in Every Line

A premium boutique dev studio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Three.js**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
codeq/
├── app/
│   ├── layout.tsx       # Root layout — fonts, SEO metadata, Open Graph
│   ├── page.tsx         # Home page — assembles all sections
│   └── globals.css      # All styles (design tokens, components, responsive)
├── components/
│   ├── sections/        # Page sections (each in its own file)
│   │   ├── Hero.tsx
│   │   ├── Ticker.tsx
│   │   ├── Story.tsx
│   │   ├── Services.tsx
│   │   ├── Numbers.tsx
│   │   ├── Work.tsx
│   │   ├── Process.tsx
│   │   ├── About.tsx
│   │   ├── Testimonial.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/              # Shared UI components
│       ├── Loader.tsx
│       ├── Cursor.tsx
│       ├── Navbar.tsx
│       └── ClientInit.tsx  # All client-side JS (Three.js, GSAP, animations)
├── public/              # Static assets (add og-image.png, favicon here)
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✅ Issues Fixed (vs original HTML)

### 🔴 SEO
- Full `<title>`, `<meta description>` in `layout.tsx`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card meta tags
- Robots meta configuration
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`, `<blockquote>`, `<cite>`, `<footer>`)
- H1 is now a real heading (not just styled spans)

### 📱 Mobile Responsiveness
- Navbar collapses to hamburger menu on mobile
- Hero switches to single-column on < 900px
- Services cards restack on mobile
- Numbers grid collapses: 4→2→1 columns
- Work grid collapses: 3→2→1 columns
- Process grid simplifies on mobile
- About section stacks vertically on mobile
- Consistent 24px mobile padding throughout

### ♿ Accessibility
- `<a href="#main-content" class="skip-link">` skip navigation link
- All interactive elements have `aria-label`
- Decorative elements have `aria-hidden="true"`
- `role="navigation"`, `role="marquee"`, `role="status"`, `role="contentinfo"` added
- Custom cursor only shown on hover-capable devices (`@media (hover: hover)`)
- `focus-visible` keyboard focus rings on all interactive elements
- `prefers-reduced-motion` media query disables all animations for affected users
- Blockquote with `<cite>` for testimonial

### ⚡ Performance
- Three.js and GSAP loaded dynamically (`import('three')`) — never blocks SSR
- `next/font/google` for zero-FOUT font loading with `display: swap`
- Particle count halved on mobile (`cnt` reduces from 2800 → 1000)
- Three.js Q wireframe skipped on mobile
- `next.config.js` enables WebP/AVIF image optimization
- Security headers added (X-Frame-Options, CSP, etc.)
- All animations use `will-change` and GPU-composited properties only

---

## 🌐 Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

Or build and deploy to any static/Node host:

```bash
npm run build
npm start
```

---

## 📝 Customisation

- **Email**: Replace `hello@codeq.tech` in `CTA.tsx` and `Footer.tsx`
- **Projects**: Edit the `bigProjects` / `gridProjects` arrays in `Work.tsx`
- **Stats**: Edit the `stats` arrays in `Numbers.tsx` and `About.tsx`
- **OG Image**: Add `public/og-image.png` (1200×630px)
- **Favicon**: Add `public/favicon.ico`, `public/favicon-16x16.png`, `public/apple-touch-icon.png`

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router, SSR, Image optimisation) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first CSS |
| GSAP | Scroll animations, timeline sequences |
| Three.js | WebGL hero canvas (particles + Q wireframe) |
| next/font | Zero-FOUT Google Fonts loading |

---

*codeq — Quality in Every Line*

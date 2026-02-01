# Small Business Websites Landing Page

A standalone landing page for selling simple, one-off website builds to small businesses and trades.

## Features

- Single-page, fully static Next.js site
- Mobile-first responsive design
- Clean, professional UI
- Ready to deploy to Vercel

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Local Dev Checklist

1. `npm run dev` — starts local server
2. Open `http://localhost:3000` (or port shown in terminal)
3. Test mobile view via DevTools (iPhone SE size)
4. Click WhatsApp button — verify it opens correct `wa.me` link
5. Check that `.next` folder exists after `npm run build` for deployment

### Pre-Deploy Validation

```bash
npx tsc --noEmit   # TypeScript check
npm run build      # Production build
npm run lint       # ESLint (if configured)
```

## Deployment Readiness Checklist

- [ ] Build folder (`.next`) exists and build completes with exit code 0
- [ ] No console errors in browser DevTools
- [ ] WhatsApp link prepopulates message correctly
- [ ] Phone `tel:` link works on mobile
- [ ] Images load in production build (check network tab)

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Update WhatsApp Number

Edit the WhatsApp link in `src/app/page.tsx`:

```tsx
href="https://wa.me/YOUR_NUMBER_HERE"
```

### Update Email Form

The contact form is currently a placeholder. Add form handling by:
- Using a service like Formspree, FormSubmit, or Netlify Forms
- Or connecting to your own backend API

## Project Structure

```
.
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata
│       ├── page.tsx        # Main landing page
│       └── globals.css     # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

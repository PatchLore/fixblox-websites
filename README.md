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

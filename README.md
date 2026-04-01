# Frank Ocean Nights - Next.js Migration

This project has been migrated from Vite to Next.js for better production readiness and seamless deployment on Vercel.

## Features
- **Next.js 15 (App Router)**
- **Tailwind CSS 4** with PostCSS support
- **Framer Motion** for smooth transitions and animations
- **Lucide React** for iconography
- **Three.js** support (base installed)
- **Vercel Optimized**

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is ready to be deployed on **Vercel**. 

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Connect your repository to Vercel.
3. Vercel will automatically detect the Next.js project and deploy it.

## File Structure Changes
- **src/app**: Main application logic, layouts, and global styles.
- **src/components**: React components (marked with `'use client'` where necessary).
- **public/assets**: Static video assets (vg1.mp4, vg2.mp4).

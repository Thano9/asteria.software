# Asteria Software

A modern, animated portfolio website showcasing products and applications by Asteria Software.

## Features

- **Animated UI**: Smooth page load animations with staggered reveals using Motion (Framer Motion)
- **Project Cards**: Interactive project showcase with hover effects
- **Modern Design**: Clean, minimalist design with custom typography
- **Responsive**: Built with Next.js 15 and optimized for all devices
- **Performance**: Optimized images and animations for fast loading

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Vanilla CSS with Google Fonts
- **Animations**: Motion (Framer Motion) for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Optimized for Vercel

## Typography

- **Instrument Serif**: Main title font
- **Nanum Brush Script**: Subtitle styling
- **Chivo Mono**: Project card text

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── ProjectCard.tsx    # Reusable project card component
│   ├── globals.css            # Global styles and Google Fonts
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
└── public/
    └── images/
        └── projects/          # Project icons and images
```

## Animation System

The site uses a carefully crafted animation system with:
- Blur-to-focus transitions
- Staggered loading sequences
- Spring physics for natural motion
- Hover interactions with scale and color changes

## Deployment

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

---

Built with ❤️ by Asteria Software

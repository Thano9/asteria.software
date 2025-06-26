# Asteria Software Website

## Project Overview

This is the official website for Asteria Software, built as a modern, animated portfolio showcasing our products and applications. The site features a clean, minimalist design with sophisticated animations and interactive elements.

## Design Philosophy

- **Simplicity First**: Clean, uncluttered interface that puts content front and center
- **Animation-Driven**: Smooth, purposeful animations that enhance user experience
- **Performance-Focused**: Optimized for fast loading and smooth interactions
- **Mobile-First**: Responsive design that works beautifully on all devices

## Key Features

### Animated Landing Page
- Staggered loading sequence with blur-to-focus transitions
- Spring physics for natural motion
- Interactive project cards with hover effects

### Project Showcase
- Reusable ProjectCard component for easy content management
- Support for custom project icons and external links
- Hover animations with scale and color transitions

### BattleDex Product Page
- Dedicated product page with animated hero section
- Custom device mockup using the Device component system
- Responsive scaling for optimal viewing on all screen sizes
- Smart download button with shimmer animation effect
  - Opens App Store app on iOS devices
  - Opens App Store web page on desktop browsers
- Navigation with privacy policy and support links

### Device Component System
- Reusable Device component for displaying app mockups
- Support for multiple device frames (iPhone 16 Pro, iPhone 11 Pro, frameless)
- Responsive scaling with customizable desktop/mobile scales
- Hydration-safe implementation to prevent SSR mismatches
- Support for both image and video content
- Automatic error handling and fallback displays

### Modern Tech Stack
- Next.js 15 with App Router for optimal performance
- Motion (Framer Motion) for smooth animations
- Vanilla CSS with Google Fonts for custom typography
- Lucide React for consistent iconography

## Typography System

- **Instrument Serif**: Elegant serif font for the main "ASTERIA" title
- **Nanum Brush Script**: Handwritten style for the "SOFTWARE" subtitle
- **Chivo Mono**: Clean monospace font for project card text
- **Mondwest**: Custom font for BattleDex page titles
- **NeueBit**: Pixel-perfect font for BattleDex navigation and UI elements

## Animation Timeline

### Landing Page
1. **0.1s**: Main container fades in
2. **0.2s**: Title block (ASTERIA + SOFTWARE) animates together
3. **1.1s**: First project card appears after dramatic pause
4. **1.2s**: Second project card follows
5. **1.3s**: Third project card completes the sequence
6. **1.6s**: All interactions become available

### BattleDex Page
1. **0.1s**: Navigation header fades in from top
2. **0.5s**: Main title animates with blur-to-focus effect
3. **0.7s**: Download button appears with hover interactions
4. **0.95s**: Device mockup animates in from bottom with scale effect

## Component Architecture

### Device Component (`/src/app/components/Device.tsx`)
- **Props**: 
  - `project`: Project configuration object
  - `desktopScale`: Scale factor for desktop viewports
  - `mobileScale`: Scale factor for mobile viewports (default: 1.0)
  - `breakpoint`: Pixel width where mobile scaling kicks in (default: 680px)
  - `isActive`: Controls video playback state
  - `shouldLoad`: Lazy loading control
  - `onClick`: Click handler
  - `className`: Additional CSS classes

- **Features**:
  - Responsive scaling with SSR-safe hydration
  - Multiple device frame support
  - Video and image content support
  - Error handling with graceful fallbacks
  - Dark mode overlay support
  - Customizable content positioning

### Device Frame System
- Base frame configurations with scalable dimensions
- Content area positioning with border radius support
- Dynamic path resolution for different project structures
- Support for frameless displays

## Development Notes

- Removed Tailwind CSS in favor of vanilla CSS for better control
- Simplified CSS Grid to absolute positioning for the header layout
- Implemented proper loading state management to prevent premature interactions
- Used semantic HTML structure for accessibility
- Migrated from manual device mockups to reusable Device component
- Implemented hydration-safe responsive logic to prevent SSR mismatches
- Added comprehensive error handling for media content
- Optimized CSS by removing unused phone mockup styles

## Technical Implementation Details

### Hydration Mismatch Prevention
The Device component uses a careful hydration strategy:
```typescript
const [windowWidth, setWindowWidth] = useState<number | null>(null);
const [hasMounted, setHasMounted] = useState(false);

// Use desktop scale as default until client hydrates
const scale = !hasMounted || windowWidth === null 
  ? desktopScale 
  : windowWidth <= breakpoint ? mobileScale : desktopScale;
```

### Responsive Scaling Logic
- Desktop (>680px): Uses `desktopScale` parameter
- Mobile (≤680px): Uses `mobileScale` parameter
- Breakpoint customizable per implementation
- Smooth transitions on window resize

### CSS Architecture
- Component-specific styles in globals.css
- Responsive design with media queries
- Animation keyframes for shimmer effects
- Cursor override system for non-interactive displays

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Device.tsx          # Reusable device mockup component
│   │   └── ProjectCard.tsx     # Landing page project cards
│   │   
│   │   ├── battledex/
│   │   │   ├── page.tsx           # BattleDex product page
│   │   │   ├── privacypolicy/     # Privacy policy page
│   │   │   └── support/           # Support page
│   │   └── globals.css            # Global styles and animations
│   │   └── layout.tsx             # Root layout
│   └── page.tsx               # Landing page
public/
├── images/
│   ├── frames/                # Device frame images
│   └── projects/battledex/    # BattleDex assets
├── fonts/                     # Custom font files
└── components/                # UI component assets
```

## Future Enhancements

- Add more project cards as new products are developed
- Implement dark mode support across all pages
- Add contact form or additional pages
- Integrate with a CMS for easier content management
- Extend Device component to support more device types
- Add animation presets for different page types
- Implement lazy loading for device frame images
- Add accessibility improvements for animations

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for device content
- Efficient CSS with minimal unused styles
- Spring physics for natural animations
- Proper error boundaries for media content
- SSR-safe responsive implementations

---

*Last updated: January 2025*

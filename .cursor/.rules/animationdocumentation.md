## Animation Design Language

### Core Animation Principles

Our animation system follows a consistent design language across all pages, built on these principles:

1. **Loading State Management**: Every page has a `hasLoaded` state that prevents interactions during initial animations
2. **Blur-Based Focus Transitions**: Elements transition from blurred to focused states, creating depth and guiding attention
3. **Staggered Sequences**: Content reveals in logical reading order with deliberate timing gaps
4. **Spring Physics**: Consistent use of spring animations for natural, responsive motion
5. **Container-to-Content Hierarchy**: Parent containers animate first, followed by nested content

### Animation Implementation Patterns

#### 1. Work Page (Device Carousel)
**Primary Focus**: Dynamic product showcase with sophisticated device animations

```typescript
// Animation Timeline
0.1s  - Main container (blur: 15px → 0px, y: 30 → 0)
0.1s  - Device carousel begins (first device from y: 30, others from x: +40)
0.2s  - Text container wrapper
0.3s  - Project title
0.4s  - Project description
1.0s  - hasLoaded = true, interactions enabled
```

**Key Features**:
- Devices slide in with reduced distance (40px) for subtle entrance
- Fast stagger intervals (0.08s) between devices
- Text appears while devices are still animating
- Spring config: `stiffness: 200, damping: 30, mass: 1`

#### 2. About Page (Polaroids & Biography)
**Primary Focus**: Personal storytelling with playful polaroid interactions

```typescript
// Animation Timeline
0.1s  - Polaroid container (blur: 15px → 0px, y: 30 → 0)
0.3s  - Individual polaroids start (staggered by 0.05s each)
0.6s  - Introduction + contact links (grouped)
0.7s  - Experience text
0.8s  - Company logos (all together)
1.2s  - hasLoaded = true, theme toggle enabled
```

**Key Features**:
- Polaroids have individual blur + scale effects
- Two-container approach groups related content
- Experience section uses faster springs (`stiffness: 250`)
- Random polaroid selection on each load

#### 3. Archive Page (Timeline List)
**Primary Focus**: Clean, efficient information display

```typescript
// Animation Timeline
0.1s  - Title "Archive" (blur: 10px → 0px, y: 20 → 0)
0.2s  - First archive item begins
0.05s - Stagger interval between items
0.8s  - hasLoaded = true, hover previews enabled
```

**Key Features**:
- Horizontal expansion animation for rows (columns slide apart)
- Left column starts at x: 100, right column at x: -100
- Fast springs for snappy feel (`stiffness: 200`)
- Hover interactions disabled during loading

### Shared Animation Components

#### Blur Effects
```css
/* Standard blur progression */
Initial: filter: 'blur(15px)' - Heavy blur for containers
Initial: filter: 'blur(10px)' - Medium blur for headers
Initial: filter: 'blur(8px)'  - Light blur for body text
Final:   filter: 'blur(0px)'  - Sharp focus
```

#### Spring Configurations
```typescript
// Container animations (slower, heavier)
{ stiffness: 150, damping: 25, mass: 1.2 }

// Content animations (standard, responsive)
{ stiffness: 200, damping: 30, mass: 1 }

// Fast animations (snappy, light)
{ stiffness: 250, damping: 25, mass: 0.8 }
```

#### Vertical Motion
```css
/* Standard vertical distances */
Containers: y: 30 → 0
Headers:    y: 20 → 0  
Content:    y: 15 → 0
```

### Animation Best Practices

1. **Group Related Content**: Animate related elements together (e.g., contact links with introduction)
2. **Respect Reading Order**: Stagger animations to follow natural reading patterns
3. **Consistent Timing**: Use 0.1s as base stagger interval, adjust sparingly
4. **Loading Protection**: Always disable interactions during initial animations
5. **Performance First**: Limit simultaneous animations, use GPU-accelerated properties

### Future Animation Guidelines

When adding new pages or components:

1. Start with a container animation (0.1s delay)
2. Add content animations with 0.1-0.2s stagger intervals
3. Use blur effects to create focus transitions
4. Implement hasLoaded state for interaction control
5. Keep total animation duration under 1.5s
6. Test on lower-end devices for performance

## Recent Updates (Latest Session)

### Animation System Implementation
- **Work Page**: Enhanced with blur effects, staggered text, and refined device carousel animations
- **About Page**: Added sophisticated loading sequence with polaroids, grouped content animations
- **Archive Page**: Implemented horizontal expansion effect with fast, snappy transitions
- **Consistent Design Language**: Established animation patterns across all pages

### Dark Mode Enhancements
- **Device Frame Darkening**: Added CSS mask-based overlay system for device frames in dark mode
  - Black overlay with 50% opacity and normal blending mode
  - CSS masking ensures overlay follows exact device frame shape
  - Works consistently across different device frame sizes (iPhone 16 Pro, iPhone 11 Pro, etc.)
  
- **Navigation Dark Mode**: Complete navigation theming overhaul
  - Background: Semi-transparent black in light mode, semi-transparent white in dark mode
  - Active selector: White background in light mode, black background in dark mode
  - Text colors: Black/white for active items, neutral gray for inactive items
  - Removed blue tint from gray colors using `text-neutral-400`

- **Animated Theme Toggle**: Implemented View Transitions API for smooth theme switching
  - Expanding circle animation originates from click position ("craft" word)
  - Uses spring-based easing: `cubic-bezier(0.16, 1, 0.3, 1)` 
  - 500ms duration for optimal synchronization with View Transition
  - Graceful fallback for browsers without View Transitions API support
  - Integrated with existing `hasLoaded` state for interaction control

- **Typography Improvements**: 
  - "& More" text made darker in dark mode (`dark:text-foreground/80`)
  - Polaroid frames use `bg-gray-100` in dark mode for subtle darkening
  - "Craft" button matches sentence color by default, changes to black/white on hover

### Background Flash Fix
- **Root Cause**: Inconsistent background handling between pages caused white/black flashes during navigation
- **Solution**: Added `bg-page-background` to all page containers and Layout component
- **Result**: Seamless theme transitions without background color flashing

### 404 Page Cleanup
- **Noise Removal**: Removed all three noise texture layers for cleaner appearance
- **Simplified Design**: Now uses clean `bg-page-background` with terminal content only

### Theme System Improvements
- **Centralized Background**: All pages now use consistent `bg-page-background` class
- **Theme Toggle**: "Craft" word in about page toggles between light/dark themes
- **Persistent Theming**: Uses `next-themes` for automatic localStorage persistence

## Future Enhancements

Potential future improvements could include:
1. Adding a blog section for design articles
2. Implementing a contact form
3. Integrating with a CMS for easier content management
4. Adding analytics to track user behavior
5. Implementing a newsletter signup
6. Adding testimonials from clients
7. Expanding case studies with interactive components
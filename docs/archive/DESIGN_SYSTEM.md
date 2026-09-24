# Tetradapt Design System
## Swiss + Geometric Hybrid

### Core Principles
1. **Swiss Typography**: Large, bold, tight tracking, clear hierarchy
2. **Tetradapt Geometry**: Red/black pills and circles as functional & decorative elements
3. **Person-Focused**: Emphasize independence, dignity, choice over technology specs
4. **Accessibility First**: WCAG 2.1 AA compliant, keyboard navigable, semantic HTML
5. **Performance**: Optimized images, proper loading, reduced motion support

### Color Palette
- **Primary Red**: #af0d28 (brand-red)
- **Primary Black**: #221b1d (brand-black)
- **Gray**: #6b6568 (brand-gray)
- **Background**: #ffffff (white)
- **Surface**: #f7f7f7 (gray-50)

### Typography
**Fonts**:
- **Display (Headings)**: Helvetica Neue (classic Swiss) - Use `font-display` class on all h1, h2, h3
- **Body (Text)**: DM Sans - Default on body element via `font-body`

**Scale**:
- **Hero**: 96px / 6rem (lg:8rem) - `font-display text-6xl lg:text-8xl font-semibold`
- **H1**: 72px / 4.5rem (lg:6rem) - `font-display text-6xl lg:text-8xl font-semibold`
- **H2**: 56px / 3.5rem (lg:4rem) - `font-display text-5xl lg:text-6xl font-semibold`
- **H3**: 32px / 2rem - `font-display text-2xl font-bold`
- **Body Large**: 20px / 1.25rem - `text-xl`
- **Body**: 16px / 1rem - `text-base` (default)
- **Small**: 14px / 0.875rem - `text-sm`

**Font Weights**:
- ALL headings (Hero, H1, H2, H3): font-normal (400) - minimal weight, classic Swiss style
- Body text: normal (400)

**Important**: ALL headings (h1, h2, h3) MUST include `font-display` to ensure consistent Swiss typography with Helvetica Neue

### Geometric Modules
**Accent Pills (Decorative)**
- Horizontal: 80-120px × 6-8px, rounded-full
- Used as: Section dividers, visual punctuation

**Circles (Decorative)**
- Small: 8-12px diameter
- Medium: 40-50px diameter
- Used as: List bullets, corner accents

**Functional Pills**
- Buttons: Full rounded (rounded-full)
- Badges: Smaller pills for tags/labels

### Swiss Grid System
**Numbered Sections**: 1.1, 1.2, 1.3 format
- Number: 3xl font-bold text-brand-red
- Grid: 3-column layout (number | title | content)
- Spacing: gap-8, border-b on sections

### Component Patterns
**Buttons**
- Primary: bg-brand-red text-white rounded-full with focus-visible:ring-2
- Secondary: Text link with arrow, hover:opacity-70
- Ghost: border-2 with hover state

**Cards**
- White background on gray-50 surface
- 2px border, hover:border-brand-red
- Geometric accent (circle or pill) in corner

**Stats Blocks**
- Alternating red/black backgrounds
- White text, geometric accent inside
- Square format, no rounding

### Accessibility Requirements
- All interactive elements have focus-visible:ring
- Images have alt text
- Form inputs have labels or aria-label
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast ≥ 4.5:1 for text
- Support prefers-reduced-motion

### Page Structure Template
1. Hero: Large typography + geometric accents
2. Main sections: Swiss numbered lists
3. Stats/Trust: Geometric blocks
4. CTA: Red background with pills
5. Footer: Minimal with geometric accent

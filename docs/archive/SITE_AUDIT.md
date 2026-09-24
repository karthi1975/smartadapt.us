# Tetradapt Website - Information Architecture Audit

## PROBLEMATIC PATTERNS IDENTIFIED

### 1. Numbered Sections (Swiss Design Numbers)
**Location:** Multiple pages use arbitrary numbering like "10.1", "7.2", "13.3"
- Smart Hospital: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6
- Smart Home: 7.1, 7.2, 7.3
- Active Living: 13.1, 13.2, 13.3... (9 items)
- Devices: 9.1, 9.2, 9.3, 9.4, 9.5

**Why it's bad:**
- Numbers feel arbitrary and meaningless
- "Swiss design" aesthetic doesn't match the warm, accessible brand
- Creates cognitive load (users wonder what the numbers mean)
- Feels cold/technical for a product about independence and care

### 2. Information Architecture Issues by Page

#### Smart Hospital Page (/smart-hospital)
**Good sections:**
- Hero (clean, visual)
- "How They Control" / "What They Control" grid (icon cards)
- Video demo

**Bad sections:**
- "Healthcare Software Modules" (10.1-10.6) - Swiss numbered list
  - Emergency Response
  - AI Patient Education  
  - Power Savings Mode
  - Physician Presence Detection
  - Memory Manager
  - DoC Protocols
- These could be categorized better (Clinical Care vs. Automation vs. Safety)

#### Smart Home Page (/smart-home)
**Good sections:**
- Hero
- "What You Control" grid (icon cards with hover states)
- Video placeholders (need content)

**Bad sections:**
- "Key Benefits" (7.1, 7.2, 7.3) - Swiss numbered list
  - Your Space, Your Rules
  - Family and Provider Remote Monitoring
  - Smooth Transition
- Should be restructured as benefit cards or icon grid

#### Active Living Page (/active-living)
**Entire page is problematic:**
- 9 numbered care modules (13.1-13.9)
- Additional services grid (better, but inconsistent)
- No visual hierarchy
- Reads like a feature list, not a solution

**Care modules:**
1. SCI Education
2. TBI Care
3. Stroke Care
4. DoC Care
5. Buddy Calls
6. Pressure Tracker
7. Memory Manager
8. Emergency Alerts
9. PulseOx Integration

#### Devices Page (/devices)
**Entire page needs work:**
- 5 devices with Swiss numbering (9.1-9.5)
- No images
- No CTAs per device
- Feels incomplete

## PAGES WITH GOOD IA (REFERENCE THESE)

### Homepage (/page)
✅ Clean hero with background image
✅ Trusted partners logos
✅ "From Hospital...To Home" visual journey
✅ Services card grid with icons
✅ Testimonials with avatars
✅ Research stats section
✅ Clear visual hierarchy

### Smart Hospital Page (first sections)
✅ Hero with image
✅ "How They Control" / "What They Control" icon grids
✅ Integration cards with icons and hover states
✅ Stats section with colored cards

## RECOMMENDED IMPROVEMENTS

### Pattern 1: Icon Card Grids (like "What You Control")
Replace numbered lists with visual cards:
- Icon + Title + Short Description
- Hover effects
- Consistent sizing
- Scannable

### Pattern 2: Category Sections
Group related features:
- Clinical Care (Emergency, Monitoring, Alerts)
- Patient Support (Education, Memory, Communication)
- Automation (Power Savings, Presence Detection)

### Pattern 3: Visual Stats/Callouts
For key benefits, use:
- Large numbers or icons
- Colored backgrounds
- Brief text
- Visual hierarchy

### Pattern 4: Comparison/Feature Tables
For complex features, consider:
- Side-by-side comparisons
- Feature matrices
- Before/After scenarios

## QUESTIONS FOR CLIENT

1. Do you want me to remove ALL numbered sections site-wide?
2. For the care modules (13.1-13.9), do these need to be categorized?
   - By condition? (SCI, TBI, Stroke, Aging)
   - By function? (Monitoring, Education, Communication, Safety)
3. Should devices have product photos or illustrations?
4. Do you want consistent card layouts across all pages?
5. Priority pages to fix first?

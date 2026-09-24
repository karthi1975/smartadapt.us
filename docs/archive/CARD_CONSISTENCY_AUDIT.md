# Card & Icon Consistency Audit

## INCONSISTENCIES FOUND:

### 1. Active Living - "Additional Services" Section
**Problem:** Uses horizontal red line + title layout (old pattern)
**Should be:** Icon circle cards like Care Modules above it
**Location:** Lines 173-179

### 2. Active Living - "Available Across Settings" 
**Problem:** Dark boxes with decorative circles, different style entirely
**Should be:** Simpler badge/pill style or icon cards
**Location:** Lines 199-207

### 3. Different Card Patterns Count:
- ✅ Icon cards (Smart Hospital, Active Living care modules)
- ✅ Large benefit cards (Smart Home)
- ✅ Horizontal device cards (Devices)
- ❌ Red line cards (Active Living additional services) - REMOVE
- ❌ Dark setting boxes (Active Living settings) - SIMPLIFY

---

## STANDARDIZED CARD PATTERNS:

### Pattern 1: Small Icon Cards ✅
**Used for:** Features, modules, integrations
**Style:**
- `bg-white border border-gray-200 rounded-lg p-6`
- `group hover:border-brand-red hover:shadow-lg`
- 12x12 icon circle: `w-12 h-12 rounded-full bg-brand-red/10`
- Icon: `w-6 h-6 text-brand-red group-hover:text-white`

### Pattern 2: Large Benefit Cards ✅
**Used for:** Key benefits, value props
**Style:**
- `bg-white p-8 rounded-2xl shadow-sm border border-gray-100`
- 16x16 icon circle: `w-16 h-16 rounded-full bg-brand-red`
- Icon: `w-8 h-8 text-white`
- No hover state needed

### Pattern 3: Horizontal Device Cards ✅
**Used for:** Products with longer descriptions
**Style:**
- `group bg-white border border-gray-200 rounded-lg p-8`
- `flex items-start gap-6`
- 16x16 icon circle: `w-16 h-16 rounded-full bg-brand-red/10 group-hover:bg-brand-red`

---

## FIXES NEEDED:

1. **Active Living - Additional Services:**
   - Convert to Pattern 1 (small icon cards)
   - Add appropriate icons for each service
   - Match Care Modules styling

2. **Active Living - Available Across Settings:**
   - Simplify to clean badge/pill layout
   - Remove dark boxes and decorative elements
   - Make it feel like tags, not cards

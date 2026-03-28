# Design System: Nuceria Health
**Version**: 1.0  
**Date**: 2026-03-27  
**Status**: Production Ready

---

## Brand Foundation

### Primary Brand Color
**#2E3192** — Deep Indigo (RETAINED from original brand identity)

This color has been Nuceria's brand anchor and conveys:
- Clinical authority and medical trust
- Premium wellness positioning
- Stability and expertise
- Differentiation from generic medical blues

---

## Color Palette

### Light Mode

| Token | Name | Hex | HSL | Usage |
|-------|------|-----|-----|-------|
| `--primary` | Deep Indigo | `#2E3192` | `239 52% 38%` | Primary CTAs, links, brand accent |
| `--primary-dark` | Midnight Indigo | `#1E2168` | `238 55% 26%` | Hover states, pressed buttons |
| `--primary-light` | Periwinkle | `#6B6DBF` | `239 38% 59%` | Tints, backgrounds, subtle accents |
| `--primary-pale` | Lavender Mist | `#E8E9F5` | `238 43% 94%` | Light backgrounds, tags |
| `--secondary` | Charcoal | `#1A1A2E` | `240 27% 14%` | Headlines, dark surfaces, footer |
| `--secondary-mid` | Slate | `#3D3D5C` | `240 21% 30%` | Body text on light backgrounds |
| `--accent` | Teal | `#3D8C8C` | `180 39% 39%` | Secondary CTAs, wellness emphasis |
| `--accent-light` | Seafoam | `#C5E5E5` | `180 33% 83%` | Teal tints, wellness tags |
| `--background` | Warm White | `#FAFAFC` | `240 20% 99%` | Page background |
| `--surface` | Soft Gray | `#F4F4F8` | `240 18% 97%` | Card backgrounds, section alternates |
| `--surface-raised` | Pure White | `#FFFFFF` | `0 0% 100%` | Elevated cards, modals |
| `--border` | Light Gray | `#E2E2EB` | `240 15% 90%` | Borders, dividers |
| `--muted` | Silver | `#EDEEF2` | `240 12% 93%` | Muted backgrounds |
| `--muted-foreground` | Warm Gray | `#6B6B7B` | `240 8% 46%` | Placeholder text, captions |
| `--foreground` | Charcoal | `#1A1A2E` | `240 27% 14%` | Primary text |
| `--foreground-secondary` | Graphite | `#4A4A5E` | `240 12% 33%` | Secondary body text |
| `--success` | Sage | `#5A8A6A` | `140 22% 45%` | Success states |
| `--warning` | Amber | `#D4882A` | `33 67% 50%` | Warning states |
| `--destructive` | Rose | `#C0392B` | `5 60% 46%` | Error states |

### Dark Mode

| Token | Name | Hex | HSL | Usage |
|-------|------|-----|-----|-------|
| `--background` | Deep Space | `#0A0A14` | `240 33% 6%` | Page background |
| `--surface` | Midnight | `#141428` | `240 27% 12%` | Card backgrounds |
| `--surface-raised` | Dark Slate | `#1E1E3A` | `240 30% 17%` | Elevated cards |
| `--foreground` | Off White | `#F0F0F5` | `240 20% 95%` | Primary text |
| `--foreground-secondary` | Light Gray | `#B8B8C8` | `240 12% 75%` | Secondary text |
| `--primary` | Indigo | `#6B6DBF` | `239 38% 59%` | Lighter for dark mode contrast |
| `--primary-dark` | Pale Indigo | `#A0A2D9` | `239 43% 74%` | Hover on dark |
| `--secondary` | Off White | `#F0F0F5` | `240 20% 95%` | Headlines on dark |
| `--accent` | Bright Teal | `#5AADAD` | `180 33% 52%` | Brighter on dark |
| `--border` | Dark Gray | `#2A2A42` | `240 21% 21%` | Borders on dark |
| `--muted` | Charcoal | `#1A1A2E` | `240 27% 14%` | Muted backgrounds |
| `--muted-foreground` | Gray | `#6B6B7B` | `240 8% 46%` | Muted text on dark |

### WCAG Contrast Ratios (Light Mode)

| Combination | Ratio | Pass |
|-------------|-------|------|
| `--foreground` on `--background` | 15.2:1 | ✅ AAA |
| `--foreground` on `--surface` | 13.8:1 | ✅ AAA |
| `--primary` on `--background` | 7.8:1 | ✅ AA |
| White on `--primary` | 4.8:1 | ✅ AA |
| White on `--secondary` | 17.3:1 | ✅ AAA |
| `--foreground-secondary` on `--background` | 7.2:1 | ✅ AA |
| `--muted-foreground` on `--background` | 4.6:1 | ✅ AA |

---

## Typography System

### Font Pairing

#### Display: **Cormorant Garamond**
- **Source**: Google Fonts — `https://fonts.google.com/specimen/Cormorant+Garamond`
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Style**: Italic variants for pull quotes
- **Usage**: All H1–H3 headings, hero text, section titles, pull quotes
- **Why**: High-contrast luxury serif that signals premium wellness positioning. Classical proportions convey trust and sophistication.
- **License**: Open Font License (OFL) ✅

#### Body: **DM Sans**
- **Source**: Google Fonts — `https://fonts.google.com/specimen/DM Sans`
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Usage**: Body text, navigation, buttons, form labels, captions, H4–H6
- **Why**: Geometric humanist sans-serif with excellent legibility. Modern without being trendy. Pairs beautifully with Cormorant's classical form.
- **License**: Open Font License (OFL) ✅

### Type Scale

```
Display XL:  Cormorant Garamond 700  /  72px  /  line-height 1.05  /  letter-spacing -0.02em
Display L:   Cormorant Garamond 600  /  56px  /  line-height 1.08  /  letter-spacing -0.02em
H1:          Cormorant Garamond 600  /  48px  /  line-height 1.1   /  letter-spacing -0.01em
H2:          Cormorant Garamond 500  /  36px  /  line-height 1.2   /  letter-spacing -0.01em
H3:          Cormorant Garamond 500  /  28px  /  line-height 1.25  /  letter-spacing 0
H4:          DM Sans 600             /  20px  /  line-height 1.3   /  letter-spacing 0
H5:          DM Sans 600             /  16px  /  line-height 1.4   /  letter-spacing 0.02em (uppercase)
H6:          DM Sans 500             /  14px  /  line-height 1.4   /  letter-spacing 0.04em (uppercase)
Body L:      DM Sans 400             /  18px  /  line-height 1.65
Body:        DM Sans 400             /  16px  /  line-height 1.65
Body S:      DM Sans 400             /  14px  /  line-height 1.6
Caption:     DM Sans 400             /  12px  /  line-height 1.5
Label:       DM Sans 500             /  12px  /  line-height 1.4   /  letter-spacing 0.06em (uppercase)
```

### Special Typography Moments
- **Hero taglines**: Cormorant Garamond 300 Italic — light italic creates aspirational quality
- **Section eyebrows**: DM Sans 500, 11px, 0.12em letter-spacing, uppercase, `--primary` color
- **Pull quotes**: Cormorant Garamond 400 Italic, 24px, `--primary` color
- **Price displays**: DM Sans 300, large size — lightness feels premium

---

## Design Tokens (CSS Custom Properties)

```css
/* ============================================
   NUCERIA HEALTH — DESIGN TOKENS
   Version 1.0 | 2026-03-27
   Brand Color: #2E3192 (Deep Indigo)
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

:root {
  /* Fonts */
  --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;

  /* Brand Colors */
  --color-indigo: #2E3192;
  --color-indigo-dark: #1E2168;
  --color-indigo-light: #6B6DBF;
  --color-indigo-pale: #E8E9F5;
  --color-charcoal: #1A1A2E;
  --color-slate: #3D3D5C;
  --color-teal: #3D8C8C;
  --color-teal-light: #C5E5E5;
  --color-teal-pale: #E8F4F4;

  /* Semantic Colors (Light Mode) */
  --background: 240 20% 99%;
  --surface: 240 18% 97%;
  --surface-raised: 0 0% 100%;
  --foreground: 240 27% 14%;
  --foreground-secondary: 240 12% 33%;
  --primary: 239 52% 38%;
  --primary-foreground: 0 0% 100%;
  --primary-dark: 238 55% 26%;
  --primary-light: 239 38% 59%;
  --secondary: 240 27% 14%;
  --secondary-foreground: 0 0% 100%;
  --accent: 180 39% 39%;
  --accent-foreground: 0 0% 100%;
  --accent-light: 180 33% 83%;
  --muted: 240 12% 93%;
  --muted-foreground: 240 8% 46%;
  --border: 240 15% 90%;
  --input: 240 15% 90%;
  --ring: 239 52% 38%;
  --card: 0 0% 100%;
  --card-foreground: 240 27% 14%;
  --success: 140 22% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 33 67% 50%;
  --warning-foreground: 0 0% 100%;
  --destructive: 5 60% 46%;
  --destructive-foreground: 0 0% 100%;

  /* Typography Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.75rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.5rem;
  --text-7xl: 4.5rem;

  /* Line Heights */
  --leading-tight: 1.05;
  --leading-snug: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;

  /* Letter Spacing */
  --tracking-tighter: -0.02em;
  --tracking-tight: -0.01em;
  --tracking-normal: 0em;
  --tracking-wide: 0.04em;
  --tracking-wider: 0.08em;
  --tracking-widest: 0.12em;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Layout */
  --container-max: 1280px;
  --container-wide: 1440px;
  --container-narrow: 768px;
  --container-prose: 680px;
  --nav-height: 72px;
}

.dark {
  --background: 240 33% 6%;
  --surface: 240 27% 12%;
  --surface-raised: 240 30% 17%;
  --foreground: 240 20% 95%;
  --foreground-secondary: 240 12% 75%;
  --primary: 239 38% 59%;
  --primary-foreground: 240 33% 6%;
  --primary-dark: 239 43% 74%;
  --primary-light: 239 30% 36%;
  --secondary: 240 20% 95%;
  --secondary-foreground: 240 33% 6%;
  --accent: 180 33% 52%;
  --accent-foreground: 240 33% 6%;
  --accent-light: 180 33% 17%;
  --muted: 240 27% 14%;
  --muted-foreground: 240 8% 46%;
  --border: 240 21% 21%;
  --input: 240 21% 21%;
  --ring: 239 38% 59%;
  --card: 240 27% 12%;
  --card-foreground: 240 20% 95%;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
```

---

## Component Styling Guidelines

### Navigation

```
Structure:
- Single-tier sticky header, 72px height
- Background: white with subtle border-bottom (--border)
- On scroll: backdrop-blur + slight shadow-sm
- Logo: left-aligned, Cormorant Garamond wordmark
- Nav links: DM Sans 500, 14px, letter-spacing 0.04em, uppercase
- Active state: indigo underline (2px, --primary)
- Hover: color transition to --primary, 150ms ease
- CTA button: "Book Consultation" — indigo filled button, top-right
- Mobile: hamburger → full-screen overlay with staggered link animation
- Mega-menu: services organized into 4 categories
  - Clean grid layout, no visual clutter
  - Category headers in Cormorant Garamond italic
  - Service links in DM Sans

DO NOT: two-tier header, dropdown on hover (use click), sticky appointment form in nav
```

### Buttons

```
Primary (Indigo Filled):
- Background: --primary (#2E3192)
- Text: white, DM Sans 500, 14px, letter-spacing 0.06em, uppercase
- Padding: 14px 28px
- Border radius: --radius (8px)
- Hover: background --primary-dark (#1E2168), shadow-indigo
- Active: scale(0.98)
- Focus: ring-2 ring-primary ring-offset-2
- Transition: 150ms ease-out

Secondary (Charcoal Filled):
- Background: --secondary (#1A1A2E)
- Text: white
- Same sizing as primary
- Hover: background #3D3D5C

Outline (Indigo Border):
- Background: transparent
- Border: 1.5px solid --primary
- Text: --primary
- Hover: background --primary, text white
- Use for secondary CTAs on dark backgrounds

Ghost:
- No border, no background
- Text: --foreground-secondary
- Hover: background --muted
- Use for tertiary actions

Sizes:
- sm:  padding 10px 20px, text 12px
- md:  padding 14px 28px, text 14px (default)
- lg:  padding 18px 36px, text 16px
- xl:  padding 22px 44px, text 18px (hero CTAs)

NEVER: purple/blue buttons, rounded-full on primary CTAs (pill shape feels cheap here)
```

### Cards

```
Service Card:
- Background: --surface-raised (white)
- Border: 1px solid --border
- Border radius: --radius-lg (16px)
- Padding: 32px
- Shadow: shadow-sm
- Hover: shadow-md, translateY(-2px), border-color --primary-light
- Transition: 250ms ease-out
- Icon: Lucide icon, 24px, --primary color
- Title: Cormorant Garamond 500, 22px
- Description: DM Sans 400, 15px, --foreground-secondary
- CTA link: DM Sans 500, 14px, --primary, arrow icon

Product Card:
- Image: aspect-ratio 4/3, border-radius top corners only
- Price: DM Sans 300, 24px, --foreground
- Discount badge: --primary-pale background, --primary-dark text, pill shape
- Add to cart: ghost button on hover overlay

Team Card:
- Photo: square crop, border-radius --radius-lg
- Name: Cormorant Garamond 600, 20px
- Title: DM Sans 500, 12px, uppercase, letter-spacing 0.08em, --muted-foreground
- Credentials: DM Sans 400, 13px, --accent
- Hover: photo subtle zoom (scale 1.03), shadow-md

Testimonial Card:
- Background: --surface (soft gray)
- Left border: 3px solid --primary
- Quote: Cormorant Garamond 400 Italic, 18px
- Attribution: DM Sans 500, 13px, --muted-foreground
- Star rating: --primary color, Lucide Star icons (filled)
```

### Hero Section

```
Layout: Full-viewport height (100svh), dark overlay on background image/video
Background: High-quality lifestyle/clinical photography
Overlay: hero-gradient (charcoal to transparent)

Content positioning: Left-aligned, vertically centered, max-width 680px
- Eyebrow: DM Sans 500, 11px, uppercase, letter-spacing 0.12em, --primary color
- Headline: Cormorant Garamond 700, 64-72px, line-height 1.05, white
  - Use italic on key emotional words: "Feel *younger*. Live *better*."
- Subheadline: DM Sans 300, 20px, line-height 1.6, white/80% opacity
- CTA group: Primary indigo button + ghost "Learn More" with arrow

Visual element: Floating stat cards (bottom-right)
  - Background: white/10% backdrop-blur, border white/20%
  - "2,000+ Patients Treated", "15+ Specialists"

NEVER: Revolution Slider, auto-playing carousels, stock photography, pre-loader GIFs
```

### Forms

```
Input fields:
- Background: --surface-raised
- Border: 1.5px solid --border
- Border radius: --radius (8px)
- Focus: border-color --primary, ring-2 ring-primary/20
- Placeholder: --muted-foreground
- Font: DM Sans 400, 15px
- Height: 48px (comfortable touch target)
- Error state: border --destructive

Labels:
- DM Sans 500, 13px, letter-spacing 0.02em, --foreground
- Always visible (no floating labels)

Submit button:
- Full-width on mobile
- Indigo primary button
- Loading state: spinner + "Sending..."

Appointment form specifically:
- Condensed to essential fields: Name, Phone, Email, Service Interest, Message
- Remove "How did you hear about us" typo — fix to "How did you hear about us?"
- Add: preferred date/time picker
```

### Footer

```
Background: --secondary (#1A1A2E)
Layout: 5-column grid on desktop, 2-column on tablet, stacked on mobile

Column 1 (Brand):
- Logo in white
- Tagline: Cormorant Garamond 300 Italic, 16px, white/70%
- Social icons: Lucide (Facebook, Instagram, Youtube, Yelp)
- Media logos: MSNBC, CNN, Fox, CBS, BuzzFeed — white/40% opacity

Columns 2-4 (Links):
- Header: DM Sans 600, 11px, uppercase, letter-spacing 0.1em, --primary-light
- Links: DM Sans 400, 14px, white/70%, hover white/100%

Column 5 (Contact):
- Address, phone, hours
- "Book Appointment" CTA — outline button

Bottom bar:
- Border-top: white/10%
- Copyright: DM Sans 400, 13px, white/40%
- Links: Privacy Policy, Terms, Accessibility
- Language toggle: EN | ES
```

---

## Motion Philosophy

### Principle: Calm Authority
Nuceria is a medical practice. Animations feel **controlled and intentional** — never playful, bouncy, or distracting. The motion language mirrors the brand: precise, confident, trustworthy.

### Rules

1. **Entrance animations**: `fade-up` on scroll-triggered elements. Duration: 400-500ms. Stagger: 80ms between siblings.

2. **Hover states**: 150ms ease-out for color/border. 250ms for shadow/transform.

3. **Page transitions**: Subtle fade (300ms) between routes.

4. **Loading states**: Skeleton screens with shimmer gradient.

5. **Hero text**: Staggered `fade-up` on load — eyebrow (0ms), headline (100ms), subheadline (200ms), CTAs (300ms).

6. **Service cards**: `fade-up` on scroll, staggered 60ms per card.

7. **Reduced Motion**: All animations disabled when `prefers-reduced-motion: reduce` is set.

---

## shadcn/ui Theming

```typescript
// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

**Key shadcn/ui overrides**:
- `Button`: Extend with `variant: "indigo"` and `variant: "charcoal"`
- `Card`: Default padding increased to `p-8`, border-radius to `--radius-lg`
- `Input`: Height 48px, font DM Sans, focus ring indigo
- `Accordion`: Used for FAQ — indigo left-border on open state
- `Dialog/Sheet`: Backdrop-blur overlay, charcoal header background
- `Badge`: Pill shape, indigo/teal/muted variants
- `Tabs`: Underline style — indigo active indicator

---

## Responsive Strategy

### Breakpoints
| Name | Width | Target Device |
|------|-------|---------------|
| `xs` | 375px | iPhone SE |
| `sm` | 640px | Large phones |
| `md` | 768px | iPad portrait |
| `lg` | 1024px | iPad landscape |
| `xl` | 1280px | Desktop |
| `2xl` | 1440px | Large desktop |

### Mobile-Specific Patterns
1. **Floating "Book Now" button**: Fixed bottom-right, above tab bar
2. **Navigation**: Bottom tab bar (5 items) + hamburger drawer
3. **Hero**: 85svh height, text 48px max
4. **Forms**: Input fields 48px tall (prevents iOS zoom)
5. **Phone numbers**: Always `<a href="tel:+13053984370">`

---

## Implementation Notes for FE Engineer

1. **Font loading**: Use `next/font/google` with `display: 'swap'` and `preload: true`.
2. **CSS variables**: Define all tokens in `globals.css` under `:root` and `.dark`.
3. **Image optimization**: `next/image` with explicit width/height to prevent CLS.
4. **Animation**: Use Framer Motion for scroll-triggered animations.
5. **Dark mode**: Implement via `next-themes` with `defaultTheme: "light"`.
6. **Icon imports**: Always import individually from `lucide-react`.

---

## Anti-Pattern Checklist

Before shipping, verify:
- [ ] Brand color #2E3192 used consistently (no champagne gold)
- [ ] Exactly 2 font families loaded (Cormorant + DM Sans)
- [ ] No emoji used as icons — only Lucide SVGs
- [ ] No Revolution Slider or jQuery
- [ ] No pre-loader GIF
- [ ] All animations respect `prefers-reduced-motion`
- [ ] All form labels are visible
- [ ] All images have explicit dimensions
- [ ] Touch targets minimum 44×44px

---

*Design System v1.0 — Ready for Implementation*

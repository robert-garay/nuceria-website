# Unified Specification: Nuceria Health Website Revamp
**Project**: Nuceria Health — mynuceria.com  
**Date**: 2026-03-27  
**Status**: Ready for Implementation

---

## 1. Project Overview

### Business Context
Nuceria Health is a Miami-based wellness and aesthetics center offering 35+ medical services including hormone replacement therapy (HRT), weight loss programs, IV therapy, and aesthetic treatments. The current Laravel-based site suffers from information architecture problems (35-item flat menu), performance issues (Revolution Slider, 10+ fonts), and poor mobile experience.

### Scope Boundary
**IN SCOPE**: Marketing/informational website — homepage, services, about, team, blog, contact, booking forms.  
**OUT OF SCOPE**: E-commerce checkout/cart, patient portal, existing backend systems. These remain in Laravel and are linked to externally.

### Quality Targets
- Lighthouse 90+ (all categories)
- WCAG 2.1 AA compliance
- <2s LCP on 3G
- CLS < 0.1
- Fully responsive (mobile-first)

---

## 2. Information Architecture

### New Sitemap (Patient-Centric)

```
Home (/)
├── Goals (mega-menu)
│   ├── Balance My Hormones (/hormones)
│   │   ├── For Women (/hormones/women)
│   │   ├── For Men (/hormones/men)
│   │   ├── Peptide Therapy (/hormones/peptides)
│   │   └── Testosterone Therapy (/hormones/testosterone)
│   ├── Lose Weight (/weight-loss)
│   │   ├── Medical Weight Loss (/weight-loss/medical)
│   │   ├── Semaglutide / Tirzepatide (/weight-loss/glp1)
│   │   ├── Metabolic Health (/weight-loss/metabolic)
│   │   └── Nutrition Coaching (/weight-loss/nutrition)
│   ├── Look & Feel Younger (/aesthetics)
│   │   ├── Injectables (/aesthetics/injectables)
│   │   │   ├── Botox (/aesthetics/injectables/botox)
│   │   │   ├── Lip Fillers (/aesthetics/injectables/lip-fillers)
│   │   │   ├── Sculptra (/aesthetics/injectables/sculptra)
│   │   │   ├── Kybella (/aesthetics/injectables/kybella)
│   │   │   └── Bio-Filler (/aesthetics/injectables/bio-filler)
│   │   ├── Skin Treatments (/aesthetics/skin)
│   │   │   ├── Endolift (/aesthetics/skin/endolift)
│   │   │   ├── HydraFacial (/aesthetics/skin/hydrafacial)
│   │   │   ├── Chemical Peels (/aesthetics/skin/chemical-peels)
│   │   │   ├── Microneedling (/aesthetics/skin/microneedling)
│   │   │   └── PRP Facial (/aesthetics/skin/prp)
│   │   └── Body (/aesthetics/body)
│   │       ├── PDO Thread Lift (/aesthetics/body/pdo-thread)
│   │       ├── Sclerotherapy (/aesthetics/body/sclerotherapy)
│   │       └── Laser Hair Removal (/aesthetics/body/laser-hair)
│   └── Optimize My Wellness (/wellness)
│       ├── IV Therapy (/wellness/iv-therapy)
│       ├── NAD+ Therapy (/wellness/nad)
│       ├── Ozone Therapy (/wellness/ozone)
│       ├── Exosome Therapy (/wellness/exosome)
│       ├── Sexual Performance (/wellness/sexual-performance)
│       ├── Medical Screening (/wellness/screening)
│       └── Iron IV (/wellness/iron-iv)
├── Shop (/shop) → External link to existing store
├── Learn (/learn)
│   ├── Blog (/learn/blog) — categorized, paginated
│   │   ├── Hormones (/learn/blog/hormones)
│   │   ├── Weight Loss (/learn/blog/weight-loss)
│   │   ├── Aesthetics (/learn/blog/aesthetics)
│   │   └── Wellness (/learn/blog/wellness)
│   ├── [Post Detail] (/learn/blog/[slug])
│   └── HRT Guide (/learn/hrt-guide) — gated lead magnet
├── About (/about)
│   ├── Our Story (/about)
│   ├── Our Team (/about/team)
│   │   └── [Team Member] (/about/team/[slug])
│   ├── Membership (/about/membership)
│   └── Franchise (/about/franchise)
├── Book Now (/book) — multi-step booking hub
│   └── HRT Intake Questionnaire (/book/hrt-intake)
└── Contact (/contact)
```

### Key IA Changes
1. **35 flat services → 4 Goals** with nested services (patient intent-based)
2. **Products separated** into dedicated Shop section (external link)
3. **Blog → Learn hub** with categories, search, pagination
4. **New booking flow** — dedicated /book with multi-step guided experience
5. **Team page redesigned** as trust-building centerpiece with credentials

---

## 3. User Flows

### Primary Flow: Booking Appointment
```
Any Page → "Book Now" CTA (sticky header)
→ /book — Step 1: "What's your goal?"
→ Step 2: "Which service?" (filtered by goal, max 6 options)
→ Step 3: "New or returning patient?"
→ Step 4: Contact info (name, email, phone, DOB)
→ Step 5: "When works for you?" (calendar or callback option)
→ Confirmation screen + email confirmation
→ If HRT: prompt to complete HRT Intake Questionnaire
```

### Discovery Flow: Browsing Services
```
Homepage → Goal selector (4 cards) or Goals mega-menu
→ Goal landing page (/hormones, /weight-loss, etc.)
  → Symptom checklist → service recommendations
  → Service detail page → "Book This Treatment" CTA
```

### Shopping Flow
```
Homepage → Shop link
→ Existing Laravel store (external)
→ Product pages link back to related services for cross-sell
```

---

## 4. Technical Architecture

### Stack
- **Framework**: Next.js 15+ (App Router, React Server Components by default)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm

### Routing Structure
```
src/app/
  [locale]/
    page.tsx                    # Home
    layout.tsx                  # Root layout with nav/footer
    about/
      page.tsx
      team/
        page.tsx
        [slug]/page.tsx
      membership/page.tsx
      franchise/page.tsx
    book/
      page.tsx                  # Multi-step booking form
      hrt-intake/page.tsx       # HRT questionnaire
    contact/page.tsx
    hormones/
      page.tsx                  # Goal landing
      women/page.tsx
      men/page.tsx
      [slug]/page.tsx           # Service detail
    weight-loss/
      page.tsx
      [slug]/page.tsx
    aesthetics/
      page.tsx
      injectables/
        page.tsx
        [slug]/page.tsx
      skin/
        page.tsx
        [slug]/page.tsx
      body/
        page.tsx
        [slug]/page.tsx
    wellness/
      page.tsx
      [slug]/page.tsx
    learn/
      page.tsx                  # Learn hub
      blog/
        page.tsx                # Blog listing
        [slug]/page.tsx         # Post detail
      hrt-guide/page.tsx
    shop/page.tsx               # Redirect or teaser with external link
    globals.css
  (shared)/
    sitemap.ts
    robots.ts
    not-found.tsx
```

### SSG Strategy
All marketing pages pre-generated at build time:
- 35+ service pages via `generateStaticParams()`
- 50+ blog posts
- Team member profiles
- Category landing pages

### Integration Boundaries
| Capability | Implementation |
|------------|----------------|
| Marketing pages | Next.js SSG |
| Booking forms | Next.js UI → POST to existing Laravel endpoint |
| Shop/cart/checkout | External link to existing store |
| Blog content | MDX or JSON content layer (Phase 1) |

---

## 5. Content Requirements

### Pages & Components

#### Home (/)
**Purpose**: Convert first-time visitors to booked consultations

**Sections** (top to bottom):
1. **Hero** — Static (no slider), single full-viewport image
   - Headline: "Feel Like Yourself Again"
   - Subhead: "Miami's premier hormone, weight loss & aesthetics center"
   - CTAs: "Book Free Consultation" (primary) + "Explore Treatments" (secondary)
2. **Social proof bar** — Media logos (MSNBC, CNN, Fox, CBS, BuzzFeed) + "500+ 5-star reviews"
3. **Goal selector** — 4 cards (Balance Hormones, Lose Weight, Look Younger, Optimize Wellness)
4. **"How It Works"** — 3 steps: Consult → Personalized Plan → Feel the Difference
5. **Featured services** — 4 cards with patient outcome headlines
6. **Video testimonials** — 3 featured, muted autoplay with captions
7. **Team trust section** — 3 medical team photos with credentials
8. **Blog preview** — 3 recent posts
9. **Final CTA** — "Ready to start? Your first consultation is free"

**Responsive**:
- Mobile: Single column, goal cards 2×2 grid
- Tablet: 2-column grids
- Desktop: 4-up goal cards, 3-up testimonials

#### Goal Landing Pages (/hormones, /weight-loss, /aesthetics, /wellness)
**Template**:
1. Hero with goal-specific headline + patient outcome stat
2. "Is this right for you?" — Symptom checklist (interactive)
3. Services in category — Card grid (6-8 max)
4. Patient testimonials (category-specific)
5. "Meet your care team" — Relevant practitioners
6. FAQ accordion (5-7 questions)
7. Related products (3 products, link to shop)
8. CTA: "Start with a free consultation"

#### Service Detail Pages
**Standardized Template**:
1. Breadcrumb: Home > Goals > Category > Service
2. Hero: Service name + benefit headline + "Book This Treatment" button
3. "What is [Service]?" — 2-3 paragraph explanation
4. "How it works" — 3-4 step visual process
5. "What to expect" — Before / During / After tabs
6. "Who is this for?" — Ideal candidate + contraindications
7. "Results" — Before/after photos or outcome stats
8. "Pricing" — "Starting from $X" or "Contact us for pricing"
9. Patient stories — 2-3 testimonials
10. FAQ — 4-6 questions
11. Related services — 3 cards
12. **Sticky bottom bar (mobile)**: "Book [Service Name]" button

#### Book Now (/book)
**Multi-step Form** (5 steps):
1. "What's your goal?" — 5 options including "Not Sure"
2. "Which service interests you?" — Filtered by goal, max 6 options
3. "New or returning patient?"
4. Contact info — Name, Email, Phone, DOB, "How did you hear about us?"
5. Scheduling — Calendar picker OR "Call me to schedule" checkbox

**Confirmation**:
- Summary of selections
- "We'll send confirmation to [email]"
- "Add to calendar" links
- If HRT selected: link to HRT Intake Questionnaire

**Features**:
- Progress indicator (Step 2 of 5)
- Back button on all steps
- Inline validation (on blur)
- Phone auto-format: (305) 000-0000
- Calendar: disabled dates for closed days

#### Team Page (/about/team)
**Purpose**: Build trust through credentials

**Sections**:
1. "Your care is in expert hands" intro
2. **Medical team** (featured) — Large cards with photo, name, credentials, specialty, 2-sentence bio
3. **Executive team** — Medium cards
4. **Office team** — Small cards
5. "Join our team" recruitment CTA

**Team Member Detail**:
- Large photo
- Full bio (3-4 paragraphs)
- Education & certifications
- Specialties (tags)
- "Book a consultation with [Name]" CTA
- Related services

#### Learn / Blog (/learn/blog)
**Listing Page**:
1. Category tabs: All | Hormones | Weight Loss | Aesthetics | Wellness
2. Featured post (hero card)
3. Post grid: 3-up desktop, 2-up tablet, 1-up mobile
4. Pagination
5. Sidebar (desktop): Newsletter signup + "Most Popular" + "Book a Consultation" CTA

**Post Detail**:
1. Breadcrumb: Home > Learn > [Category] > [Title]
2. Hero image + title + author + date + read time
3. Article body (formatted with subheadings, pull quotes)
4. "Was this helpful?" thumbs up/down
5. Author bio with team link
6. Related posts (3 cards)
7. CTA: "Ready to take the next step?"

---

## 6. Navigation Design

### Primary Nav (Desktop)
```
[Logo: Nuceria]  Goals ▾  Shop  Learn  About  [Patient Portal]  [Book Now]
```

**Goals Mega-Menu** (opens on click):
- 4 columns: Balance Hormones | Lose Weight | Look Younger | Optimize Wellness
- Each column shows 3-4 key services + "View All →"
- Bottom banner: "📋 Not sure where to start? Take our 2-min quiz →"

**Design**:
- Sticky header, 72px height
- Background: white with subtle border
- On scroll: backdrop-blur + shadow-sm
- "Book Now" always visible (filled button)
- Language toggle (EN | ES) in top utility bar

### Mobile Navigation
**Bottom Tab Bar** (always visible):
```
[🏠 Home] [🎯 Goals] [🛒 Shop] [📖 Learn] [📅 Book]
```

**Hamburger Drawer** (for secondary items):
- Full-screen overlay, slides from left
- Shows: About, Team, Membership, Franchise, Contact, Patient Portal
- Language toggle at top
- "Book Now" CTA at bottom

### Breadcrumbs
- Show on all pages except Home, Goal landing pages, /book
- Format: Home > Look Younger > Skin Treatments > Endolift
- Mobile: Collapsed to "← Skin Treatments"

---

## 7. Accessibility Requirements

### WCAG 2.1 AA Compliance

**Perceivable**:
- [ ] All images have descriptive alt text
- [ ] Videos have captions
- [ ] Color never sole means of conveying info
- [ ] Contrast ratio: 4.5:1 for normal text, 3:1 for large text
- [ ] Brand color #2E3192 on white passes AA (~7.8:1)

**Operable**:
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicator visible at all times
- [ ] "Skip to main content" link
- [ ] Escape key closes mega-menu/modals
- [ ] Touch targets minimum 44×44px

**Understandable**:
- [ ] Language attribute on `<html>`: lang="en" or lang="es"
- [ ] Form labels always visible (no floating-only labels)
- [ ] Error messages specific ("Please enter a valid email")
- [ ] No jargon without explanation

**Robust**:
- [ ] Semantic HTML: `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`
- [ ] ARIA roles where native semantics insufficient
- [ ] `aria-live` for dynamic content

### Motion & Animation
- All animations respect `prefers-reduced-motion: reduce`
- Hero: subtle Ken Burns effect (disabled if reduced motion)
- Entrance animations: fade-up on scroll, staggered 80ms
- Hover states: 150ms ease-out
- No auto-playing carousels without user controls

---

## 8. Third-Party Integrations

### Analytics
- GTM container: GTM-5RDTZ32
- Segment write key (environment variable)
- Event taxonomy:
  - `appointment_submit`
  - `cta_click`
  - `service_view`
  - `blog_read`
  - `shop_redirect`
  - `portal_click`

### Booking Forms
- Next.js API route (`/api/contact`) validates and forwards to existing Laravel endpoint
- Honeypot + rate limiting
- Fallback to Formspree if backend unavailable

### Vimeo Videos
- Lazy-loaded embeds (thumbnail + click-to-load)
- Defer iframe loads until interaction
- Include transcripts for accessibility

### Shop / Patient Portal
- External links with `utm_source=revamp_site` tracking
- Clear "opens in new tab" indicators where appropriate

---

## 9. SEO Requirements

### Meta & Structured Data
- Global `LocalBusiness` + `MedicalBusiness` schema
- Per-service `Service` schema
- `BlogPosting` schema for articles
- Dynamic OG images via `next/og`

### Technical SEO
- Sitemap: `/sitemap.xml` with all service and blog pages
- Robots: `/robots.txt`
- Canonical URLs on all pages
- Legacy URL redirects (301) for changed slugs
- BreadcrumbList structured data

### Content
- Unique title tags per page
- Meta descriptions 150-160 characters
- Alt text for all images
- Internal linking between related services

---

## 10. Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Scaffold Next.js project
- [ ] Set up Tailwind + shadcn/ui
- [ ] Configure design tokens (globals.css)
- [ ] Create base components: Button, Card, Input, Navigation
- [ ] Set up layout with nav/footer
- [ ] Configure i18n structure

### Phase 2: Core Pages (Week 2)
- [ ] Home page with all sections
- [ ] About page
- [ ] Contact page with form
- [ ] 404 page
- [ ] Navigation (desktop + mobile)

### Phase 3: Services (Week 3)
- [ ] Goal landing page templates (4 pages)
- [ ] Service detail page template
- [ ] Service content data structure
- [ ] Generate all 35+ service pages
- [ ] Breadcrumb implementation

### Phase 4: Booking & Team (Week 4)
- [ ] Multi-step booking form (/book)
- [ ] HRT intake questionnaire
- [ ] Team listing page
- [ ] Team member detail pages
- [ ] Appointment form API integration

### Phase 5: Content Hub (Week 5)
- [ ] Blog listing page with pagination
- [ ] Blog post detail page
- [ ] HRT guide (gated)
- [ ] Membership page
- [ ] Franchise page

### Phase 6: Polish & Deploy (Week 6)
- [ ] SEO: sitemap, robots, meta tags, schema
- [ ] OG images
- [ ] Analytics integration
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Deploy to Vercel

---

## 11. File Structure

```
~/Projects/genion/nuceria-website/
├── CHECKPOINT.md
├── specs/
│   ├── discovery.md
│   ├── ux-analysis.md
│   ├── ui-proposal.md
│   ├── fe-assessment.md
│   ├── be-assessment.md
│   ├── spec.md                    # This file
│   └── design-system.md
├── src/
│   ├── app/
│   │   [locale]/
│   │     ├── page.tsx
│   │     ├── layout.tsx
│   │     ├── globals.css
│   │     ├── about/
│   │     ├── book/
│   │     ├── hormones/
│   │     ├── weight-loss/
│   │     ├── aesthetics/
│   │     ├── wellness/
│   │     ├── learn/
│   │     └── contact/
│   │   (shared)/
│   │     ├── sitemap.ts
│   │     ├── robots.ts
│   │     └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── GoalSelector.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── BlogPreview.tsx
│   │   ├── ui/                    # shadcn/ui components
│   │   └── shared/
│   │       ├── ServiceCard.tsx
│   │       ├── TeamCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       └── BlogCard.tsx
│   ├── content/                   # Static content data
│   │   ├── services/
│   │   ├── team/
│   │   └── blog/
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── seo.ts
│   │   └── analytics.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   └── fonts/
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── .env.local
```

---

## 12. Design System Reference

See `specs/design-system.md` for complete tokens, colors, typography, and component styling.

**Primary Brand Color**: #2E3192 (Deep Indigo) — **RETAINED from original brand**  
**Font Families**: 2 max (Cormorant Garamond + DM Sans)  
**Border Radius**: 8px default, 16px for cards  
**Shadows**: Subtle, warm-tinted  
**Spacing**: 4px grid system

---

*End of Unified Specification — Ready for implementation*

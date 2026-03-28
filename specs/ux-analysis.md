# UX Analysis: Nuceria Health
**Author**: UX Designer
**Date**: 2026-03-27
**Source**: `/specs/discovery.md`

---

## Current State Assessment

### The Core Problem: A Catalog Masquerading as a Website

The current Nuceria Health site is built like a product catalog — every service is equal, every page is a flat list, and the user is left to figure out what they need. For a medical wellness center where patients arrive with *symptoms* ("I feel tired all the time," "I want to lose weight," "I want to look younger"), this is the wrong mental model entirely.

**The 7 most critical UX failures:**

1. **35+ services in a flat mega-menu** — No human can process this. Users with a specific problem (fatigue, weight gain, aging skin) cannot self-identify which of 35 services applies to them. The navigation forces users to already know what they want, which is the opposite of how medical decisions work.

2. **Two identical appointment forms on the homepage** — Duplication signals disorganization. It also dilutes conversion: which form do I fill out? It creates a "paradox of choice" moment on the most important page.

3. **No clear separation between Services and Products** — A patient researching hormone therapy should not be looking at a product grid with prices. These are fundamentally different user journeys (consultation vs. purchase) and mixing them creates cognitive overload and trust issues.

4. **No patient-centric entry points** — The site is organized by *what Nuceria offers*, not by *what the patient needs*. There is no "I'm a man over 40 feeling low energy" or "I want to lose weight" starting point. The "For Men / For Women" pages are the closest attempt but they bury the lead.

5. **Blog is a content graveyard** — 50+ posts with no categories, no search, no pagination, all on one page. This is an SEO asset being wasted and a trust-builder being ignored.

6. **Team page hides credentials** — The most trust-critical page in a medical context shows photos with no roles, no credentials, no bios on the listing page. In a market where patients are choosing who will inject hormones into their body, this is a major conversion killer.

7. **Booking flow is broken** — "Schedule a Conversation" leads to a generic form. There is no confirmation, no calendar, no expectation-setting. The HRT intake questionnaire exists but is disconnected from the main booking flow.

### Secondary UX Problems

- Pre-loader GIF blocks content — users see nothing for 2-3 seconds
- No skip navigation (accessibility failure)
- Typo in the appointment form ("how did you here about us")
- Blog has no related posts, no content recommendations
- No 404 page
- Google Translate widget is a poor substitute for real i18n
- Service detail pages are inconsistent in layout and CTA placement
- No social proof near CTAs (trust signals are buried in the footer or homepage only)
- No sticky "Book Now" on mobile — the primary CTA disappears as you scroll

---

## New Sitemap

### Design Rationale

The new sitemap is built around **patient intent**, not service taxonomy. The primary navigation uses four patient-centric entry points ("Goals") plus three utility sections. Services are grouped under goals, not listed flat. Products are clearly separated into a "Shop" section. The blog becomes a "Learn" hub.

```
Home (/)
│
├── Goals (mega-menu — patient-centric entry points)
│   ├── Balance My Hormones (/hormones)
│   │   ├── For Women (/hormones/women)
│   │   ├── For Men (/hormones/men)
│   │   ├── Peptide Therapy (/hormones/peptides)
│   │   └── Testosterone Therapy (/hormones/testosterone)
│   │
│   ├── Lose Weight (/weight-loss)
│   │   ├── Medical Weight Loss (/weight-loss/medical)
│   │   ├── Semaglutide / Tirzepatide (/weight-loss/glp1)
│   │   ├── Metabolic Health (/weight-loss/metabolic)
│   │   └── Nutrition Coaching (/weight-loss/nutrition)
│   │
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
│   │
│   └── Optimize My Wellness (/wellness)
│       ├── IV Therapy (/wellness/iv-therapy)
│       ├── NAD+ Therapy (/wellness/nad)
│       ├── Ozone Therapy (/wellness/ozone)
│       ├── Exosome Therapy (/wellness/exosome)
│       ├── Sexual Performance (/wellness/sexual-performance)
│       ├── Medical Screening (/wellness/screening)
│       └── Iron IV (/wellness/iron-iv)
│
├── Shop (/shop)
│   ├── All Products (/shop)
│   ├── Supplements (/shop/supplements)
│   ├── Weight Loss (/shop/weight-loss)
│   ├── Skin Care (/shop/skin-care)
│   ├── Vitamins (/shop/vitamins)
│   └── [Product Detail] (/shop/[slug])
│
├── Learn (/learn)
│   ├── Blog (/learn/blog)
│   │   ├── Hormones (/learn/blog/hormones)
│   │   ├── Weight Loss (/learn/blog/weight-loss)
│   │   ├── Aesthetics (/learn/blog/aesthetics)
│   │   └── Wellness (/learn/blog/wellness)
│   ├── [Post Detail] (/learn/blog/[slug])
│   └── HRT Guide (/learn/hrt-guide) — gated lead magnet
│
├── About (/about)
│   ├── Our Story (/about)
│   ├── Our Team (/about/team)
│   │   └── [Team Member] (/about/team/[slug])
│   ├── Membership (/about/membership)
│   └── Franchise (/about/franchise)
│
├── Book Now (/book) — dedicated booking hub
│   ├── Choose a Goal → Choose a Service → Pick a Time → Confirm
│   └── HRT Intake Questionnaire (/book/hrt-intake)
│
└── [Utility — not in primary nav]
    ├── Contact (/contact)
    ├── Patient Portal (external link)
    ├── Privacy Policy (/privacy-policy)
    ├── Privacy Practice (/privacy-practice)
    └── 404 (/404)
```

### What Changed and Why

| Old Structure | New Structure | Rationale |
|---|---|---|
| "Services" (35 flat items) | "Goals" (4 patient intents → nested services) | Users think in problems, not service names |
| "For Men / For Women" as top-level nav | Nested under "Balance My Hormones" | HRT is one goal; gender is a filter, not a category |
| Products mixed into HRT pages | Dedicated "Shop" section | Separates consultation journey from purchase journey |
| "Blog" (flat, no categories) | "Learn" hub with categorized blog + guides | Positions Nuceria as an authority, improves SEO |
| "About" with no team bios | "About" with full team profiles | Trust is the #1 conversion driver in medical |
| Generic contact form as CTA | Dedicated "Book Now" hub with guided flow | Converts intent into appointments, not just leads |

---

## User Flows

### Flow 1: Booking an Appointment (Primary Conversion)

**Current Flow (broken):**
```
Homepage → "Schedule a Conversation" form → Submit → ??? (no confirmation UX)
```
Friction: Generic form, no service selection, no calendar, no expectation-setting. User doesn't know what happens next.

**Proposed Flow:**
```
Any Page
  → "Book Now" CTA (sticky header + floating mobile button)
  → /book — Step 1: "What's your goal?"
      [Balance Hormones] [Lose Weight] [Look Younger] [Optimize Wellness] [Not Sure]
  → Step 2: "Which service?" (filtered by goal, 3-6 options max)
  → Step 3: "Tell us about yourself" (name, email, phone, DOB, new/returning patient)
  → Step 4: "When would you like to come in?" (calendar picker — or "Call me to schedule")
  → Step 5: Confirmation screen + email confirmation
      → If HRT selected: prompt to complete HRT Intake Questionnaire
```

**Key improvements:**
- Goal-first entry reduces cognitive load
- Service selection is contextual (not all 35 at once)
- Calendar or callback option accommodates both user types
- HRT questionnaire is woven into the flow, not a separate dead-end URL
- Confirmation sets expectations ("We'll call you within 1 business day")

---

### Flow 2: Browsing Services (Discovery Journey)

**Current Flow:**
```
Homepage → Mega-menu (35 items) → Service detail page → Generic CTA
```
Friction: Overwhelming choice, no guidance, no personalization.

**Proposed Flow A — Goal-driven (most users):**
```
Homepage → Hero CTA "Find Your Treatment" → Goal selector quiz (3 questions)
  → Personalized service recommendations (3-4 services)
  → Service detail page → "Book This Treatment" CTA
```

**Proposed Flow B — Direct navigation (returning users):**
```
Homepage → Nav: Goals → [Category] → Service list (6-8 per category)
  → Service detail page → "Book This Treatment" CTA
```

**Proposed Flow C — Search (power users):**
```
Any page → Search icon in header → Type "botox" or "testosterone"
  → Instant results: services + blog posts + products
  → Click result → destination page
```

---

### Flow 3: Purchasing a Product (E-commerce Journey)

**Current Flow:**
```
Homepage → Products → Product category → Product detail → Add to cart → Checkout
```
Friction: Products are buried under a generic "Products" link, mixed with service content on HRT pages.

**Proposed Flow:**
```
Homepage → "Shop" in nav (or "Shop Supplements" CTA on service pages)
  → /shop — filtered grid (All / Supplements / Weight Loss / Skin Care / Vitamins)
  → Product detail page
      → Product info + ingredients + reviews
      → "Add to Cart" (primary) + "Subscribe & Save" (secondary)
  → Cart drawer (slides in from right, no page reload)
  → Checkout → Confirmation
```

**Cross-sell integration:**
- Each service page has a "Recommended Products" section at the bottom
- Each product page links to the related service ("Pair this with our HRT program")
- Shop landing page has "New Patient? Start Here" banner linking to /book

---

### Flow 4: Learning About HRT (Education Journey)

**Current Flow:**
```
Homepage → "For Men" or "For Women" → Long page with mixed content → Generic form
```
Friction: Information is scattered, no clear learning path, product listings interrupt the educational content.

**Proposed Flow:**
```
Homepage → "Balance My Hormones" (nav or hero)
  → /hormones — Goal landing page
      → "Are you a man or woman?" toggle (or separate cards)
      → Key benefits (3-4 bullet points)
      → "How it works" (3-step visual process)
      → "Is HRT right for me?" quiz (3 questions → recommendation)
      → Patient testimonials (video + text)
      → Team credentials ("Supervised by Dr. Alex Alonso, MD")
      → FAQ accordion
      → "Start with a free consultation" CTA → /book?goal=hormones
  → /hormones/women or /hormones/men — Specific landing page
      → Symptoms checklist ("Do you experience any of these?")
      → Treatment options
      → Before/after results (if available)
      → "Take the HRT Assessment" → /book/hrt-intake
```

---

## Page-by-Page Recommendations

### Home (/)

**Purpose**: Convert first-time visitors into booked consultations. Establish trust and authority in 5 seconds.

**Primary CTA**: "Book a Free Consultation" → /book

**Content Hierarchy** (top to bottom):
1. **Hero** — Single, full-viewport hero (no slider). Headline: "Feel Like Yourself Again." Subhead: "Miami's premier hormone, weight loss & aesthetics center." Two CTAs: "Book Free Consultation" (primary) + "Explore Treatments" (secondary, scrolls down).
2. **Goal selector** — 4 cards: Balance Hormones / Lose Weight / Look Younger / Optimize Wellness. Each card is a link to the goal landing page. This replaces the mega-menu as the primary discovery mechanism.
3. **Social proof bar** — Media logos (MSNBC, CNN, Fox, CBS, BuzzFeed) + "500+ 5-star reviews" stat. Immediately after the hero, before any service content.
4. **"How It Works"** — 3 steps (not 4): Consult → Personalized Plan → Feel the Difference. Clean, icon-driven.
5. **Featured services** — 4 cards (one per goal), each with a patient outcome headline ("Lost 35 lbs in 3 months"), photo, and "Learn More" link.
6. **Video testimonials** — 3 featured (not 7). Auto-play muted with captions. "See all stories" link.
7. **Team trust section** — "Meet the doctors behind your care" — 3 medical team photos with credentials. Links to /about/team.
8. **Blog preview** — 3 recent posts from the Learn hub. "Read all articles" link.
9. **Final CTA** — Full-width banner: "Ready to start? Your first consultation is free." + "Book Now" button.

**Interaction Patterns**:
- Hero: Static image (no slider), subtle Ken Burns effect (CSS only, respects prefers-reduced-motion)
- Goal cards: Hover lifts card with shadow, cursor changes to pointer
- Testimonial videos: Click to play (no autoplay with sound), modal overlay on mobile
- Sticky header: Appears on scroll down, hides on scroll up (smart hide)

**Responsive Strategy**:
- Mobile (375px): Single column, goal cards stack 2x2, testimonials swipeable carousel
- Tablet (768px): Goal cards 2x2 grid, testimonials 2-up
- Desktop (1280px): Goal cards 4-up row, testimonials 3-up

---

### Goal Landing Pages (/hormones, /weight-loss, /aesthetics, /wellness)

**Purpose**: Convert a user who knows their goal into a booked consultation or service exploration.

**Primary CTA**: "Book a Consultation" → /book?goal=[goal]

**Content Hierarchy**:
1. Hero with goal-specific headline + patient outcome stat ("Over 1,000 patients treated")
2. "Is this right for you?" — Symptom/concern checklist (interactive, no form required)
3. Services in this category — Card grid (6-8 max), each with brief description + "Learn More"
4. Patient testimonials specific to this goal
5. "Meet your care team" — Relevant doctors/practitioners
6. FAQ accordion (5-7 questions specific to this goal)
7. Related products from Shop (3 products, "Add to Cart" inline)
8. CTA: "Start with a free consultation"

**Interaction Patterns**:
- Symptom checklist: Checkboxes that, when 3+ are checked, show a "This sounds like you might benefit from [service]" recommendation
- Service cards: Hover reveals a "Quick facts" tooltip (duration, price range, recovery time)
- FAQ: Accordion with smooth expand/collapse, keyboard navigable

**Responsive Strategy**:
- Mobile: Symptom checklist is a horizontal scroll chip selector
- Tablet+: Checklist is a 2-column grid

---

### Service Detail Pages (/hormones/women, /aesthetics/skin/endolift, etc.)

**Purpose**: Educate on a specific service and convert to a booking.

**Primary CTA**: "Book This Treatment" → /book?service=[service]

**Standardized Template** (currently inconsistent):
1. **Breadcrumb**: Home > Goals > Category > Service Name
2. **Hero**: Service name + one-line benefit headline + "Book This Treatment" button
3. **What is [Service]?** — 2-3 paragraph plain-language explanation
4. **How it works** — 3-4 step visual process (icon + step name + brief description)
5. **What to expect** — Before / During / After tabs
6. **Who is this for?** — Ideal candidate description + contraindications
7. **Results** — Before/after photos (if applicable) or outcome stats
8. **Pricing** — "Starting from $X" or "Contact us for pricing" (transparent pricing builds trust)
9. **Patient stories** — 2-3 testimonials specific to this service
10. **FAQ** — 4-6 questions
11. **Related services** — "Patients who book [this] also explore:" (3 cards)
12. **Sticky bottom bar (mobile)**: "Book [Service Name]" button always visible

**Interaction Patterns**:
- Before/after: Drag slider comparison (not two separate images)
- Pricing: If range, show tooltip explaining what affects price
- Sticky bottom bar: Appears after scrolling past hero, disappears at footer

---

### Shop (/shop)

**Purpose**: Allow patients and non-patients to purchase supplements and wellness products.

**Primary CTA**: "Add to Cart"

**Content Hierarchy**:
1. **Filter bar** (sticky on scroll): All | Supplements | Weight Loss | Skin Care | Vitamins | Sale
2. **Sort**: Best Selling / Newest / Price Low-High / Price High-Low
3. **Product grid**: 3-up desktop, 2-up tablet, 1-up mobile
4. **Product card**: Image + Name + Short description + Price + "Add to Cart"
5. **"New Patient?" banner**: "Not sure what to buy? Book a consultation and get a personalized supplement plan." → /book

**Interaction Patterns**:
- Filter: Instant filter (no page reload), URL updates for shareability (/shop?category=supplements)
- Cart: Slide-in drawer from right (not a new page), shows cart total + "Checkout" button
- Add to Cart: Button shows loading spinner, then "Added ✓" confirmation, cart count in header updates
- Quick view: Click product image → modal with full product details (desktop only)

**Responsive Strategy**:
- Mobile: Filter bar becomes horizontal scroll chips, grid is 1-up, cart drawer is full-screen bottom sheet

---

### Learn / Blog (/learn/blog)

**Purpose**: SEO content hub, patient education, trust building.

**Primary CTA**: "Subscribe to our newsletter" (secondary: "Book a Consultation")

**Content Hierarchy**:
1. **Category tabs**: All | Hormones | Weight Loss | Aesthetics | Wellness
2. **Featured post**: Large hero card (latest or editor's pick)
3. **Post grid**: 3-up desktop, 2-up tablet, 1-up mobile
4. **Post card**: Image + Category tag + Title + Excerpt (2 lines) + Read time + Date
5. **Sidebar (desktop only)**: Newsletter signup + "Most Popular" posts + "Book a Consultation" CTA

**Post Detail Page**:
1. Breadcrumb: Home > Learn > [Category] > [Post Title]
2. Hero image + title + author + date + read time + category tag
3. Article body (well-formatted, with pull quotes, subheadings, images)
4. "Was this helpful?" thumbs up/down (engagement signal)
5. Author bio (links to team profile)
6. Related posts (3 cards, same category)
7. CTA: "Ready to take the next step? Book a free consultation."

**Interaction Patterns**:
- Category tabs: Instant filter, URL updates
- Reading progress: Thin progress bar at top of page (desktop)
- Estimated read time shown on cards and post header

---

### Our Team (/about/team)

**Purpose**: Build trust by humanizing the medical team. This is a primary conversion driver for medical services.

**Primary CTA**: "Book with [Name]" or "Meet the team, then book a consultation"

**Content Hierarchy**:
1. **Section intro**: "Your care is in expert hands" — 1-2 sentences about the team's credentials and approach
2. **Medical team** (featured, top): Large cards with photo, name, title/credentials, specialty, 2-sentence bio, "View Profile" link
3. **Executive team**: Medium cards with photo, name, role, 1-sentence description
4. **Office team**: Small cards with photo, name, role (no bio needed)
5. **"Join our team" CTA** at bottom (for recruitment)

**Team Member Detail Page**:
1. Large photo + name + credentials + title
2. Full bio (3-4 paragraphs)
3. Education & certifications list
4. Specialties (tags)
5. "Book a consultation with [Name]" CTA
6. Related services they specialize in

**Responsive Strategy**:
- Mobile: Single column, medical team cards are full-width with photo on top
- Desktop: Medical team is 3-up grid with large photos

---

### Book Now (/book)

**Purpose**: Convert intent into a booked appointment. The most important conversion page on the site.

**Primary CTA**: "Confirm My Appointment"

**Multi-Step Form Design**:

```
Step 1: What's your goal?
  [Balance Hormones] [Lose Weight] [Look Younger] [Optimize Wellness] [Not Sure — Help Me]
  Progress: ●○○○○

Step 2: Which service interests you?
  (Filtered list based on Step 1 — max 6 options)
  "Not sure? We'll help you decide during your consultation."
  Progress: ●●○○○

Step 3: Are you a new or returning patient?
  [New Patient] [Returning Patient]
  Progress: ●●●○○

Step 4: Your information
  First Name | Last Name
  Email | Phone
  Date of Birth (for medical context)
  How did you hear about us? (dropdown)
  Progress: ●●●●○

Step 5: When would you like to come in?
  Calendar picker (Mon-Fri 10AM-6PM, Sat 10AM-4PM)
  OR: "I'd prefer a callback to schedule" checkbox
  Progress: ●●●●●

Confirmation:
  "You're all set, [First Name]!"
  Summary of: goal, service, date/time (or callback request)
  "We'll send a confirmation to [email]"
  "Add to calendar" links (Google, Apple, Outlook)
  → If HRT selected: "Complete your HRT Assessment (takes 5 min)" → /book/hrt-intake
```

**Interaction Patterns**:
- Step indicator: Horizontal progress bar + step count ("Step 2 of 5")
- Back button: Always visible, never loses entered data
- Validation: Inline, on blur (not on submit)
- Phone field: Auto-format as (305) 000-0000
- Calendar: Disabled dates for closed days/times, shows next available highlighted
- Mobile: Each step is full-screen, swipe-back gesture supported

**Accessibility**:
- Each step has a unique `<h1>` for screen readers
- Focus moves to top of new step on advance
- Error messages are announced via `aria-live`
- Calendar is keyboard navigable (arrow keys)

---

### About (/about)

**Purpose**: Build brand trust, tell the Nuceria story, establish credibility.

**Primary CTA**: "Meet Our Team" → /about/team (secondary: "Book a Consultation")

**Content Hierarchy**:
1. Mission statement (1-2 powerful sentences)
2. Origin story (2-3 paragraphs — why Nuceria was founded, what problem it solves)
3. Core values (4-5, icon + title + 1-sentence description)
4. "What makes us different" (3-4 differentiators with data: "1,000+ patients treated," "Featured on CNN, MSNBC")
5. Location + hours + contact info
6. Photo gallery (8 images: clinic interior, team, treatments)
7. CTA: "Come see us" with embedded map

---

### Contact (/contact)

**Purpose**: Provide a direct line for non-booking inquiries (general questions, media, franchise).

**Primary CTA**: "Send Message"

**Content Hierarchy**:
1. Contact form (Name, Email, Phone, Subject dropdown: General / Media / Franchise / Other, Message)
2. Direct contact info (phone, email) — displayed prominently ABOVE the form
3. Hours of operation
4. Location with embedded Google Map
5. Social links

**Key Change**: Phone number and email should be clickable (tel: and mailto: links) and displayed BEFORE the form. Many users just want to call — don't make them scroll past a form to find the number.

---

### Membership (/about/membership)

**Purpose**: Convert existing patients into members, explain perks.

**Primary CTA**: "Become a Member" → /book?type=membership

**Content Hierarchy**:
1. Membership headline + value proposition
2. Perks list (icon + benefit + value)
3. Pricing tiers (if applicable)
4. "Member stories" — 2-3 testimonials
5. FAQ (5 questions)
6. CTA

---

## Navigation Design

### Primary Navigation (Desktop)

```
[Logo]  Goals ▾  Shop  Learn  About  [Patient Portal]  [Book Now — filled button]
```

**Goals mega-menu** (opens on hover/click):
```
┌─────────────────────────────────────────────────────────────┐
│  Balance Hormones    Lose Weight    Look Younger    Wellness │
│  ─────────────────  ────────────  ─────────────  ───────── │
│  • For Women         • Medical WL   • Injectables   • IV     │
│  • For Men           • GLP-1        • Skin Treats   • NAD+   │
│  • Peptides          • Metabolic    • Body          • Ozone  │
│  • Testosterone      • Nutrition    [View All →]    [View→]  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ 📋 Not sure where to start? Take our 2-min quiz →   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Design rules**:
- Mega-menu opens on click (not hover) — hover is unreliable on touch devices
- Keyboard: Tab into menu, arrow keys navigate, Escape closes
- "Book Now" button is always visible in header — never hidden
- Language toggle (EN | ES) in top utility bar, not in main nav

### Secondary Navigation (Footer)

```
Column 1: Goals
  Balance Hormones | Lose Weight | Look Younger | Optimize Wellness

Column 2: Services (quick links to most popular)
  Botox | Lip Fillers | HRT Women | HRT Men | Weight Loss | IV Therapy

Column 3: Company
  About | Our Team | Blog | Membership | Franchise | Careers

Column 4: Support
  Contact | Patient Portal | Privacy Policy | Privacy Practice | Sitemap

Column 5: Contact
  Address | Phone | Email | Hours | Social icons
```

### Mobile Navigation

**Pattern**: Bottom tab bar (primary) + hamburger drawer (secondary)

```
Bottom Tab Bar (always visible):
[🏠 Home] [🎯 Goals] [🛒 Shop] [📖 Learn] [📅 Book]
```

**Hamburger drawer** (for secondary nav items):
- Full-screen overlay, slides in from left
- Shows: About, Team, Membership, Franchise, Contact, Patient Portal
- Language toggle at top of drawer
- "Book Now" CTA at bottom of drawer (always visible)

**Rationale**: Bottom tab bar puts the 5 most important destinations within thumb reach. The hamburger is for secondary items only. "Book Now" is always one tap away.

### Breadcrumbs

**Pattern**: Shown on all pages except Home, Goal landing pages, and /book
```
Home > Look Younger > Skin Treatments > Endolift
```
- Implemented as `<nav aria-label="Breadcrumb">` with `<ol>` and structured data (BreadcrumbList schema)
- Last item is not a link (current page)
- Mobile: Collapsed to show only parent ("← Skin Treatments")

### Search

- Search icon in header (desktop: right side of nav; mobile: in top bar)
- Opens a full-width search overlay
- Instant results as you type (debounced 300ms)
- Results grouped: Services | Blog Posts | Products
- "No results" state suggests: "Try 'botox' or 'hormone therapy'" + link to /book

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance Checklist

#### Perceivable
- [ ] All images have descriptive `alt` text (medical context: describe what's shown, not just "image")
- [ ] Before/after photos: alt text describes the treatment outcome
- [ ] Videos have captions (Vimeo supports closed captions — enable them)
- [ ] Color is never the only means of conveying information (e.g., form errors use icon + text + color)
- [ ] Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text (18px+ or 14px+ bold)
- [ ] The brand indigo (#2E3192) on white passes AA (contrast ratio ~7.8:1 ✓)
- [ ] Check any teal/green CTAs against white backgrounds — verify contrast

#### Operable
- [ ] All interactive elements reachable by keyboard (Tab, Shift+Tab)
- [ ] Focus indicator visible at all times — never `outline: none` without a custom replacement
- [ ] Skip navigation link: "Skip to main content" as first focusable element
- [ ] Mega-menu: Escape key closes it, focus returns to trigger button
- [ ] Multi-step booking form: Focus moves to step heading on advance
- [ ] Touch targets: Minimum 44×44px for all buttons, links, and form controls
- [ ] No keyboard traps (modal dialogs must be escapable)
- [ ] Session timeout warning (if patient portal has sessions): 20-second warning with option to extend

#### Understandable
- [ ] Language attribute on `<html>`: `lang="en"` or `lang="es"` based on active language
- [ ] Form labels: Every input has an associated `<label>` (not just placeholder text)
- [ ] Error messages: Specific ("Please enter a valid email address") not generic ("Invalid input")
- [ ] Error messages linked to the field via `aria-describedby`
- [ ] Required fields marked with `aria-required="true"` AND visual indicator
- [ ] Consistent navigation: Same nav order on every page
- [ ] No jargon without explanation (e.g., "GLP-1" should have a tooltip or parenthetical)

#### Robust
- [ ] Valid semantic HTML: `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`
- [ ] ARIA roles only where native HTML semantics are insufficient
- [ ] `aria-live` regions for dynamic content (cart updates, form step changes, search results)
- [ ] `aria-expanded` on accordion triggers and mega-menu button
- [ ] `aria-current="page"` on active nav item
- [ ] `role="dialog"` + `aria-modal="true"` on modals, with focus trap

#### Motion & Animation
- [ ] All animations respect `prefers-reduced-motion: reduce`
- [ ] Ken Burns hero effect: disabled if reduced motion
- [ ] Carousel auto-play: paused if reduced motion OR if user has interacted
- [ ] Page transitions: Instant if reduced motion

#### Bilingual (EN/ES)
- [ ] Language toggle is keyboard accessible
- [ ] When language changes, `lang` attribute on `<html>` updates
- [ ] Screen reader announces language change
- [ ] All translated content has proper `lang` attributes on inline language switches
- [ ] Form error messages translated in both languages

---

## Responsive Strategy

### Breakpoints

| Name | Width | Target Device |
|---|---|---|
| `xs` | 375px | iPhone SE, small Android |
| `sm` | 640px | Large phones, landscape |
| `md` | 768px | iPad portrait |
| `lg` | 1024px | iPad landscape, small laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Breakpoint-Specific Behavior

#### Navigation
| Breakpoint | Behavior |
|---|---|
| xs–md | Bottom tab bar (5 items) + hamburger drawer for secondary nav |
| lg+ | Horizontal top nav with Goals mega-menu |

#### Homepage Hero
| Breakpoint | Behavior |
|---|---|
| xs | Full-viewport height, text centered, single CTA button |
| sm–md | Text left-aligned, two CTA buttons side by side |
| lg+ | Split layout: text left, lifestyle image right |

#### Goal Cards
| Breakpoint | Behavior |
|---|---|
| xs | 2×2 grid (2 columns, 2 rows) |
| md | 2×2 grid (larger cards) |
| lg+ | 4×1 row |

#### Service Grids
| Breakpoint | Behavior |
|---|---|
| xs | 1 column |
| sm | 2 columns |
| lg | 3 columns |
| xl | 4 columns |

#### Shop Product Grid
| Breakpoint | Behavior |
|---|---|
| xs | 1 column (full-width cards) |
| sm | 2 columns |
| lg | 3 columns |
| xl | 4 columns |

#### Blog Grid
| Breakpoint | Behavior |
|---|---|
| xs | 1 column |
| md | 2 columns |
| lg | 3 columns + sidebar |

#### Booking Form
| Breakpoint | Behavior |
|---|---|
| xs–md | Full-screen per step, no sidebar |
| lg+ | Two-column: form left, summary/trust signals right |

#### Team Grid
| Breakpoint | Behavior |
|---|---|
| xs | 1 column (full-width cards) |
| md | 2 columns |
| lg | 3 columns |

### Mobile-Specific Patterns

1. **Floating "Book Now" button**: Fixed position, bottom-right, above the tab bar. Appears after scrolling past the hero. Disappears when the footer is visible.
2. **Cart**: Full-screen bottom sheet (not a side drawer) on mobile
3. **Mega-menu**: Replaced entirely by the bottom tab bar + drawer on mobile
4. **Before/after slider**: Touch-friendly drag handle, minimum 44px
5. **Video testimonials**: Tap to play (no autoplay), full-screen on tap
6. **Forms**: Input fields are minimum 48px tall (prevents iOS zoom on focus)
7. **Phone numbers**: Always `<a href="tel:+13053984370">` — never plain text

### Performance Targets by Breakpoint

| Metric | Mobile (3G) | Desktop |
|---|---|---|
| LCP | < 2.5s | < 1.5s |
| FID / INP | < 100ms | < 50ms |
| CLS | < 0.1 | < 0.1 |
| Lighthouse Performance | 90+ | 95+ |

**Key performance decisions driven by UX**:
- No hero slider (Revolution Slider removed) → single static hero with CSS animation
- No pre-loader → content renders immediately, skeleton screens for async content
- Images: Next.js `<Image>` with explicit width/height (prevents CLS), WebP/AVIF format
- Fonts: Maximum 2 families (display + body), loaded with `font-display: swap`
- Language switching: Route-based (next-intl) not Google Translate widget

---

## Summary of Key Recommendations

### Priority 1 — Information Architecture (Do First)
1. Replace the 35-item flat service menu with 4 patient-centric "Goals" (Balance Hormones, Lose Weight, Look Younger, Optimize Wellness)
2. Create a dedicated `/book` multi-step booking hub — separate from the generic contact form
3. Separate Services and Shop into clearly distinct sections of the site

### Priority 2 — Conversion Optimization
4. Single hero (no slider) with one clear headline and one primary CTA
5. Remove the duplicate appointment form from the homepage
6. Add a "Not sure where to start?" quiz that routes users to the right goal
7. Make the team page a trust-building centerpiece with credentials and bios

### Priority 3 — Content & SEO
8. Transform the blog into a "Learn" hub with categories, search, and pagination
9. Add breadcrumbs to all service and blog pages (structured data included)
10. Create proper HRT landing pages for men and women as educational journeys, not product pages

### Priority 4 — Accessibility & Performance
11. Skip navigation link, proper focus management, ARIA labels throughout
12. Remove Revolution Slider, pre-loader GIF, and 8 of the 10 loaded font families
13. Implement `prefers-reduced-motion` for all animations
14. All touch targets minimum 44×44px, all phone numbers are `tel:` links

### Priority 5 — Mobile Experience
15. Bottom tab bar navigation pattern (not hamburger-only)
16. Floating "Book Now" button on all pages
17. Full-screen booking form steps on mobile
18. Swipeable carousels for testimonials and service cards

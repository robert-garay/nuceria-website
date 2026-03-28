# Frontend Feasibility Assessment — Nuceria Health Revamp

**Project**: Nuceria Health (`https://mynuceria.com/`)  
**Date**: 2026-03-27  
**Role**: Frontend Engineering Assessment (Next.js 15 + App Router + Tailwind + shadcn/ui)

## Executive Recommendation

The revamp is **highly feasible** as a modern Next.js marketing site if scope is kept clear:

1. Rebuild **marketing/informational** pages in Next.js with SSG/ISR.
2. Keep **e-commerce checkout/cart/account/patient systems** in the existing backend.
3. Use integration links and lightweight API bridges where needed (appointments, catalog teasers).

This approach delivers major gains in performance, UX, SEO, and maintainability without replatforming high-risk medical/e-commerce backend flows.

---

## 1) Component Architecture

### A. shadcn/ui components to use

- `Button` (primary, secondary, ghost, outline; loading state)
- `Card` (service/product/team/blog cards)
- `Badge` (category, credentials, "new", "featured", language)
- `Input`, `Textarea`, `Label`, `Select`, `Checkbox`, `RadioGroup`
- `Form` + `react-hook-form` + `zod` validation
- `NavigationMenu` + `Sheet` (desktop mega-nav + mobile nav drawer)
- `DropdownMenu` (language switcher, utility menus)
- `Tabs` (service category switchers)
- `Accordion` (FAQs, policy sections)
- `Dialog` (video modal fallback; consent notices)
- `Carousel` (logos/testimonials where applicable)
- `Pagination` (blog and listing pages)
- `Breadcrumb` (service/product/blog detail pages)
- `Avatar` (team member chips)
- `Toast` / `Sonner` (form submission feedback)
- `Skeleton` (loading placeholders for lists/cards)
- `Separator`, `Tooltip`, `Alert`, `AlertDialog` as needed

### B. Custom composed components to build

- `MegaNav` (services grouped by category + key quick links)
- `ServiceCard` (icon, title, short description, CTA)
- `ServiceCategorySection` (Aesthetics / HRT / Wellness / Injectables)
- `ServiceDetailTemplate` (hero, benefits, candidacy, process, FAQs, CTA)
- `HowItWorksSteps` (4-step visual process)
- `ProductTeaserCard` (for marketing snippets only; no local checkout)
- `TeamMemberCard` (photo, role, credentials, short bio, profile link)
- `TestimonialVideoCard` (thumbnail + play, loads Vimeo on interaction)
- `AppointmentForm` (general inquiry booking)
- `SpecializedForm` (e.g., Endolift / intake routing)
- `BlogPostCard` and `BlogListingGrid`
- `FeaturedLogosStrip` (media trust signals)
- `LanguageSwitcher` (EN/ES)
- `ExternalSystemCTA` (Shop / Patient Portal / App links with context)

### C. Client vs Server boundary

- **Server Components by default**: page shells, static content, SEO metadata.
- **Client Components only where needed**:
  - forms
  - mobile menu interactions
  - video modal/player activation
  - analytics event tracking hooks

---

## 2) Proposed Next.js App Router Structure

Given bilingual support and large content sets, use locale-prefixed routes with static generation.

```txt
src/app/
  [locale]/                      # en | es
    layout.tsx
    page.tsx                     # Home
    about/page.tsx
    contact/page.tsx
    franchise/page.tsx
    membership-perks/page.tsx
    privacy-policy/page.tsx
    privacy-practice/page.tsx

    services/
      page.tsx                   # Services hub grouped by category
      [slug]/page.tsx            # 35+ service detail pages

    categories/
      [slug]/page.tsx            # 16 marketing category landing pages

    products/
      page.tsx                   # Product discovery/teaser index
      [id]/page.tsx              # Product detail teaser page (optional)

    blog/
      page.tsx                   # Blog listing + pagination/search filters
      [slug]/page.tsx            # 50+ posts

    team/
      page.tsx                   # Team listing
      [slug]/page.tsx            # Team profile pages

    hrt-for-men/page.tsx
    hrt-for-women/page.tsx

    hrt-intake-questionnaire/page.tsx
    endolift-appointment/page.tsx

  (shared)
    sitemap.ts
    robots.ts
    not-found.tsx
```

### Routing implementation details

- `generateStaticParams()` for:
  - service slugs (35+)
  - product IDs/slugs (only if marketing teaser pages are retained)
  - category slugs (16)
  - blog slugs (50+)
  - team slugs
- `dynamicParams = true` + fallback behavior for future entries if CMS/feed expands.
- Locale strategy:
  - Prefer `next-intl` over Google Translate widget.
  - Persist locale in URL (`/en/*`, `/es/*`) for SEO and sharing.
- Legacy URL support:
  - Add `redirects()`/`rewrites()` for existing Laravel paths to preserve rankings.

---

## 3) Performance Optimization Strategy

### A. Font strategy (hard cap: 2 families)

- Use `next/font` with self-hosting and subset loading.
- Recommended pattern:
  - **Heading**: one display family (e.g., Poppins or Playfair, not both unless strongly justified)
  - **Body/UI**: one sans family (e.g., Inter or Lato)
- Load only required weights/styles; no runtime Google CSS.

### B. Image/media strategy

- Use `next/image` everywhere with explicit width/height to avoid CLS.
- Keep CloudFront as origin CDN and configure `remotePatterns` in Next config.
- Use responsive `sizes` and modern formats (WebP/AVIF where available).
- Generate blur placeholders for above-the-fold imagery.
- Replace heavy hero slider with static hero + lightweight transitions.
- For testimonial videos:
  - render preview thumbnail first
  - lazy-load Vimeo embed on click/intent

### C. Code splitting & JS reduction

- Keep most pages as RSC to cut client bundle size.
- Dynamically import non-critical client features:
  - Vimeo player wrappers
  - analytics-heavy components
  - carousels/tabs below fold
- Remove jQuery-era plugin behavior (no Revolution Slider, no global plugin bundles).
- Use route-level loading boundaries (`loading.tsx`) and fine-grained Suspense.

### D. Core Web Vitals targets

- **LCP**: < 2.5s (target ~2.0s desktop, ~2.5s mobile)
- **CLS**: < 0.1 (target ≤ 0.05)
- **INP**: < 200ms (target < 150ms)
- **TTFB**: < 800ms on cached pages
- Lighthouse target: **90+** in Performance/Accessibility/Best Practices/SEO.

---

## 4) Third-Party Integrations Approach

###+ 4.1 Appointment booking forms

- Build modern frontend forms in Next.js with validation and UX improvements.
- Submit to existing backend endpoints (or secure middleware proxy route handlers if CORS/security require).
- Add anti-spam (honeypot + rate limit + captcha only if abuse appears).
- Track conversion events via GTM/Segment.

###+ 4.2 E-commerce/cart

- **Do not rebuild checkout/cart logic in this phase.**
- Marketing site options:
  1. Product teaser pages + "Buy Now" deep links to legacy shop.
  2. "Shop" top-level CTA routed to existing backend storefront.
- Optional: display featured products via read-only API/feed if available.

###+ 4.3 Patient portal

- Keep as external system (`portal.mynuceria.com`).
- Prominent CTA with clear "secure external portal" messaging.
- Open in new tab with proper accessibility labels.

###+ 4.4 Vimeo testimonial videos

- Use privacy-enhanced lazy embeds (thumbnail + click-to-load iframe).
- Defer all iframe loads until interaction/viewport threshold.
- Provide transcript/summary text for accessibility and SEO.

###+ 4.5 Analytics (GTM + Segment)

- Integrate via `next/script` with consent-aware loading.
- Standardize event taxonomy:
  - `appointment_submit`
  - `cta_click`
  - `service_view`
  - `blog_read`
  - `shop_redirect`
  - `portal_click`
- Avoid duplicate trackers from legacy templates.

###+ 4.6 Bilingual (Google Translate replacement)

- Prefer first-class i18n (`next-intl`) with localized content files.
- Avoid runtime machine-translate widget due to UX/performance/SEO drawbacks.
- If full localization is phased:
  - phase 1: EN primary + high-impact ES pages
  - phase 2: complete ES parity

---

## 5) Technical Constraints: SSG/ISR vs Backend Responsibilities

| Capability | Next.js Marketing Site (SSG/ISR) | Existing Backend Required |
|---|---|---|
| Marketing pages (home, about, services, team, contact, franchise) | ✅ Yes | — |
| Service detail pages (35+) | ✅ Yes (`/services/[slug]`) | — |
| Blog (50+) with pagination/categories | ✅ Yes | Optional CMS/feed integration |
| SEO metadata, schema, sitemap, robots | ✅ Yes | — |
| Bilingual content routes (`/en`, `/es`) | ✅ Yes | — |
| Appointment form UI + submission | ✅ UI + submission bridge | ✅ Existing booking processing |
| Product teaser pages | ✅ Yes | — |
| Full cart/checkout/payment/taxes | ❌ Out of scope | ✅ Existing e-commerce backend |
| Patient authentication/records portal | ❌ Out of scope | ✅ Existing patient platform |
| Order history/account management | ❌ Out of scope | ✅ Existing backend |

### Scope guardrails (critical)

- This revamp should explicitly be a **marketing/informational front-end platform**.
- Keep transactional and regulated/identity-sensitive workflows in current systems.
- Use clear navigation boundaries so users can move seamlessly between marketing site and backend apps.

---

## Implementation Phasing (Recommended)

1. **Foundation**: App Router scaffold, design tokens, nav/footer, locale structure.
2. **Core marketing pages**: Home, About, Services hub, key service templates, Contact.
3. **Content scale routes**: services dynamic pages, blog, team profiles.
4. **Integrations**: appointments bridge, analytics, external CTAs (shop/portal).
5. **Polish & QA**: accessibility pass, CWV optimization, redirects, schema, SEO validation.

---

## Final Feasibility Verdict

✅ **Feasible and recommended** with low technical risk **if scope remains marketing-focused**.  
⚠️ **Not recommended in this phase**: rebuilding Laravel e-commerce + patient portal capabilities inside Next.js.

This strategy gives Nuceria a modern, fast, scalable frontend while protecting existing operational systems.

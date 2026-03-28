# Backend / Infrastructure Assessment — Nuceria Health Revamp

**Project**: Nuceria Health marketing website revamp  
**Current site**: `https://mynuceria.com/` (Laravel monolith)  
**Target**: Next.js 15 marketing frontend that **integrates** with existing Laravel systems (shop, portal, booking) rather than rebuilding them.

---

## 1) Project Configuration

### Stack baseline
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 4-compatible setup (or latest stable used by scaffold)
- **UI primitives**: shadcn/ui + Radix + `lucide-react`
- **Package manager**: pnpm
- **Lint/format**: ESLint + Prettier (or Biome if team preference, but keep one formatter)

### Recommended app architecture
- `src/app` for route segments and metadata exports
- `src/content` for structured marketing content (services, team, faqs)
- `src/lib` for SEO helpers, schema generators, analytics utilities
- `src/components` split by `layout/`, `sections/`, `ui/`, `shared/`
- Route groups for clean organization, e.g.:
  - `(marketing)/page.tsx`
  - `(marketing)/services/[slug]/page.tsx`
  - `(marketing)/blog/[slug]/page.tsx`

### TypeScript config requirements
- `"strict": true`
- `"noUncheckedIndexedAccess": true`
- `"moduleResolution": "bundler"`
- path alias `@/*`
- shared content types for:
  - `Service`
  - `BlogPost`
  - `TeamMember`
  - `NavItem`

### Tailwind config requirements
- Define design tokens as CSS variables in `globals.css`
- Tailwind theme extension for brand palette, spacing scale, shadows, radii
- Typography plugin for long-form blog/service content
- Container + responsive breakpoints tuned for medical marketing pages
- Motion-safe patterns and reduced motion fallbacks

### shadcn/ui setup
- Initialize with **new-york** style baseline (or agreed style)
- Keep components in `src/components/ui`
- Use accessible primitives for:
  - forms
  - dialogs
  - accordions (service FAQs)
  - tabs (service categories)
  - toasts (form feedback)

---

## 2) Environment Variables

Use `.env.local` for development and Vercel project env for Preview/Production.

```bash
NEXT_PUBLIC_SITE_URL=https://mynuceria.com
NEXT_PUBLIC_GTM_ID=GTM-5RDTZ32
NEXT_PUBLIC_SEGMENT_WRITE_KEY=__SET_IN_VERCEL__

# Optional if we keep secondary GTM container from legacy
NEXT_PUBLIC_GTM_ID_SECONDARY=GTM-55V87G7

# Contact form integration (choose one strategy below)
CONTACT_FORM_ENDPOINT=__SET_IF_EXTERNAL_FORM_SERVICE__
CONTACT_FORM_API_KEY=__SET_IF_REQUIRED__

# Optional: webhook secret if using Next.js API route relay
FORM_WEBHOOK_SECRET=__SET_IF_USING_INTERNAL_API_ROUTE__
```

### Notes
- `NEXT_PUBLIC_*` values are exposed client-side by design.
- Segment write key is public by nature, but still managed via env for environment isolation.
- Keep secrets (API keys, webhook secrets) server-only (no `NEXT_PUBLIC_` prefix).

---

## 3) Third-Party Service Integrations

## Guiding principle
This revamp is **marketing-only frontend**. Existing Laravel systems remain source of truth for commerce, portal, and booking workflows.

### Contact / appointment form (recommended)
**Recommendation**: Next.js API route proxy to existing backend endpoint (preferred), with fallback to Formspree.

1. **Primary**: `POST /api/contact` in Next.js validates + forwards to existing Laravel endpoint/webhook
   - Pros: keeps frontend independent, adds spam protection, preserves CRM/email routing
   - Add honeypot + rate limiting + server-side validation (zod)
2. **Fallback**: Formspree only if backend endpoint is unavailable
3. **Do not** rebuild booking logic in Next.js; deep-link to existing questionnaire/booking URLs when needed

### Analytics
- Implement GTM via `@next/third-parties/google` or `next/script`
- Primary container: `GTM-5RDTZ32`
- Validate whether `GTM-55V87G7` is still active before dual-injecting
- Segment initialization through GTM or direct SDK (prefer one path to avoid duplicate events)

### Video (Vimeo)
- Use lazy-loaded Vimeo embeds (thumbnail + click-to-load iframe)
- For above-the-fold hero video: defer until interaction if possible
- Include `title`, `loading="lazy"`, and explicit dimensions to avoid CLS

### Patient portal
- Keep as external CTA to `https://portal.mynuceria.com`
- Open in same tab for continuity unless compliance/security team requests new tab

### E-commerce
- Do **not** migrate storefront into Next.js scope
- Keep product/cart/checkout links pointing to existing `mynuceria.com` product URLs
- Add tracking params (`utm_source=revamp_site`) for attribution

---

## 4) SEO Technical Requirements

### Sitemap
- Implement `src/app/sitemap.ts` using dynamic generation
- Include:
  - core marketing pages
  - 35+ service pages
  - blog index + all blog posts
- Priority/frequency hints:
  - homepage/services high
  - blog medium
- Revalidate or rebuild on content changes

### Robots
- `src/app/robots.ts` with:
  - allow all public pages
  - disallow internal utility paths if any
  - point to canonical sitemap URL

### Structured data
- Global `LocalBusiness` + `MedicalBusiness` schema in layout
- Per-service `Service` schema on service detail pages
- `BlogPosting` schema per blog article
- Include organization, address, phone, geo/service area where available

### OG image strategy
- Dynamic OG image endpoint using `next/og` for:
  - homepage
  - service detail pages
  - blog posts
- Fallback static branded OG image for pages without custom assets

### Canonical URLs
- Critical due to coexistence with legacy routes
- Each Next page must set canonical URL under chosen primary host
- If launching on subdomain first (e.g. `new.mynuceria.com`), canonical policy must be explicit:
  - canonical to subdomain during prelaunch
  - switch canonical to `https://mynuceria.com/*` at cutover

---

## 5) Deployment Configuration

### GitHub
- Repo: `robert-garay/nuceria-website`
- Branch strategy: `main` + short-lived feature branches
- Required checks: lint, typecheck, build

### Vercel
- Project linked under `robert-genion` scope
- Environments:
  - Preview for PR validation
  - Production for live release
- Build command: `pnpm build`
- Output: standard Next.js output

### Domain strategy (recommended)
**Recommended rollout**:
1. Launch first on `new.mynuceria.com` (or `revamp.mynuceria.com`) for QA + SEO validation
2. After sign-off, cut over apex/primary `mynuceria.com` to Next.js app
3. Keep legacy Laravel available behind internal/staging domain for operational continuity

### Redirect strategy
- Build URL mapping table from legacy to new routes
- Add 301 redirects for changed slugs
- Keep explicit passthrough/external redirects for:
  - patient portal
  - product/shop URLs
  - intake/appointment flows still served by Laravel
- Monitor 404s post-launch and patch redirect map quickly

---

## 6) Content Strategy

### Service pages (35+)
**Recommendation**: structured content files + static generation.
- Store service content as typed JSON/TS content objects (or MDX if editorial formatting needed)
- Use one reusable service template
- Pre-generate all service routes at build time via `generateStaticParams`
- Add category metadata to support filtered services hub UX

### Blog
Two viable options:
1. **Preferred (phase 1)**: ingest/export existing posts into MDX/content layer for performance + SEO control
2. **Alternative**: fetch from existing Laravel API if stable and versioned

If API path chosen, use caching/revalidation and define failure fallback behavior.

### Team member data
- Store in typed content collection (`team.json` or `team.ts`)
- Include name, credentials, role, photo, bio, specialties, ordering
- Render from one reusable card/profile template

### Product links
- Maintain curated product sections on marketing pages
- CTA links point to existing shop URLs on `mynuceria.com`
- No cart or checkout logic inside Next.js app

---

## Final Infrastructure Recommendation

Build a **high-performance Next.js 15 marketing frontend** with static-first rendering, modern SEO, and strong analytics instrumentation, while **intentionally preserving** Laravel as the backend for transactional flows (shop, portal, booking). This minimizes migration risk, shortens delivery time, and still achieves a full visual/UX modernization.

Key execution priorities:
1. Lock domain/canonical strategy early (subdomain soft launch vs immediate cutover)
2. Finalize form integration contract with existing backend
3. Implement content model for services/blog/team before UI build to avoid rework
4. Validate GTM/Segment event parity against current production before launch

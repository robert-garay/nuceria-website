# Deployment Summary: Nuceria Health Website

## URLs
- **Production**: https://nuceria-website-dckmhbpwu-roberts-projects-966b2130.vercel.app
- **GitHub Repo**: https://github.com/robert-garay/nuceria-website
- **Vercel Dashboard**: https://vercel.com/roberts-projects-966b2130/nuceria-website

## Configuration
- **Framework**: Next.js 15.1.0
- **Build Command**: `pnpm build`
- **Output**: Static Export
- **Package Manager**: pnpm
- **Node.js**: 18.x

## Deployment Details
- **Date**: March 27, 2026
- **Status**: ✅ Successfully deployed
- **Pages**: 15 static pages generated
- **Total Build Time**: ~21 seconds

## Environment Variables
| Name | Value | Environment |
|------|-------|-------------|
| (none required for static export) | | |

## Pages Deployed
| Page | Route | Status |
|------|-------|--------|
| Homepage | / | ✅ Live |
| About | /about | ✅ Live |
| Contact | /contact | ✅ Live |
| Book Appointment | /book | ✅ Live |
| Hormones Hub | /hormones | ✅ Live |
| HRT for Women | /hormones/women | ✅ Live |
| HRT for Men | /hormones/men | ✅ Live |
| Weight Loss Hub | /weight-loss | ✅ Live |
| Aesthetics Hub | /aesthetics | ✅ Live |
| Wellness Hub | /wellness | ✅ Live |
| Team | /about/team | ✅ Live |
| Privacy Policy | /privacy-policy | ✅ Live |
| 404 | /404 | ✅ Live |

## Build Metrics
- **First Load JS (shared)**: 106 kB
- **Individual Page Sizes**: 202 B - 3.69 kB
- **Total Chunks**: 3 main chunks

## Notes
- Static export configured via `next.config.ts`
- All pages prerendered successfully
- Build output in `/dist` directory
- No environment variables required for static site

## Next Steps
1. Configure custom domain (mynuceria.com) in Vercel
2. Update DNS settings when ready for production cutover
3. Add environment variables for:
   - Analytics (GTM ID)
   - Contact form endpoint (when connecting to Laravel backend)
   - Patient portal URL

## Security Note
- Next.js 15.1.0 has a known vulnerability (CVE-2025-66478)
- Update to Next.js 15.2+ for production use
- Current deployment is for demo/preview purposes

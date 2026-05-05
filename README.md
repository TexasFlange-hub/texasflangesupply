# Texas Flange Supply

One-page Next.js landing site for `texasflangesupply.com`. Used as a verifier-friendly destination for cold email campaigns. Tracked email link paths 302 redirect to `texasflange.com`.

## Stack

Next.js 14 (App Router), plain CSS, deployed on Vercel.

## Email link paths

The redirects in `next.config.js` route campaign clicks to the main site:

| Email link | Redirects to |
|---|---|
| `texasflangesupply.com/quote` | `texasflange.com/contact-us/` |
| `texasflangesupply.com/contact` | `texasflange.com/contact-us/` |
| `texasflangesupply.com/cad` | `texasflange.com/cad-3d-flange-drawings/` |
| `texasflangesupply.com/catalog` | catalog PDF |
| `texasflangesupply.com/dimensions` | `texasflange.com/flange-dims-weights/` |
| `texasflangesupply.com/types` | `texasflange.com/flange-types-basics/` |
| `texasflangesupply.com/about` | `texasflange.com/about/` |
| `texasflangesupply.com/r/[anything]` | `texasflange.com/contact-us/` (catch-all) |

The bare domain (`texasflangesupply.com`) serves the landing page so verifiers see a real site.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Deploy

Push to GitHub, then import the repo at https://vercel.com/new. Vercel auto-detects Next.js and deploys with no extra config.

After deploy:
1. Add custom domain `texasflangesupply.com` in the Vercel project's Domains tab.
2. Update DNS to point at Vercel (A record `76.76.21.21` for apex, CNAME `cname.vercel-dns.com` for `www`).
3. Vercel issues SSL automatically.

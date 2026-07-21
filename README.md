# Voltara Technologies — website

Next.js 16 / React 19 marketing site, converted to plain JavaScript and
restructured around a feature-based (controller → service → schema) pattern.

## Setup

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY to enable contact-form email delivery
npm run dev
```

## Deploying to production (Vercel)

### 1. Connect and verify your domain in Resend
1. Sign in at resend.com → **Domains** → **Add Domain**, enter your domain
   (e.g. `voltaratechnologies.com`).
2. Resend gives you 3 DNS records (SPF, DKIM, and usually a `resend._domainkey`
   TXT record). Add these at your domain registrar / DNS provider — the same
   place you'll point the domain itself at Vercel (step 3 below).
3. Wait for the domain status to flip to **Verified** in Resend (usually a
   few minutes, can take up to ~24h for DNS propagation).
4. Once verified, you can send from any address on that domain — e.g.
   `inquiries@voltaratechnologies.com` — instead of the shared
   `onboarding@resend.dev` sandbox address, which only delivers to your own
   Resend account email and isn't suitable for real visitors.

### 2. Deploy to Vercel
1. Push this project to a GitHub/GitLab/Bitbucket repo (`.env.local` is
   gitignored — never commit it).
2. At vercel.com → **Add New → Project**, import that repo. Vercel
   auto-detects Next.js; no build settings need changing.
3. Before the first deploy (or any time after, in **Project → Settings →
   Environment Variables**), set:
   - `RESEND_API_KEY` — your Resend API key
   - `RESEND_FROM_EMAIL` — e.g. `inquiries@voltaratechnologies.com` (must be
     on the verified domain)
   - `CONTACT_INBOX_EMAIL` — where inquiries should land
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://voltaratechnologies.com`

   Apply these to the **Production** environment (and Preview too, if you
   want working email on preview deploys).
4. Deploy. Vercel builds and gives you a `*.vercel.app` URL.

### 3. Point your domain at Vercel
1. In the Vercel project → **Settings → Domains**, add
   `voltaratechnologies.com` (and `www.` if you want it).
2. Vercel shows the DNS records to add:
   - Root domain: an **A record** to `76.76.21.21`, or use Vercel's
     nameservers if your registrar supports it.
   - `www`: a **CNAME** to `cname.vercel-dns.com`.
3. Add these at the same DNS provider as the Resend records from step 1.
   Vercel auto-issues an SSL certificate once DNS resolves.
4. Redeploy after adding the env vars if the first deploy happened before
   you set them — env var changes need a new deployment to take effect.

### Rotate your Resend key
An API key for this project was present in the uploaded `.env.local`. Since
it already left your machine via that upload, treat it as compromised —
revoke it in the Resend dashboard and generate a fresh one to use in Vercel's
environment variables.

## What changed in this pass

**Language**
- Every `.ts`/`.tsx` file was converted to `.js`/`.jsx` (type annotations
  stripped, all runtime logic unchanged). `tsconfig.json` → `jsconfig.json`.
  TypeScript, `@types/*`, and the `shadcn` CLI package were removed from
  `package.json` since nothing in the app needs them anymore.

**Architecture** — reorganized into:
- `app/` — routes and API route handlers only (`app/api/contact`,
  `app/api/newsletter`)
- `components/` — presentation only: `ui/` (primitives), `layout/`
  (header/footer), `home/`, `shared/`, `forms/`, `motion/`
- `features/<name>/` — business logic per feature (`contact`, `newsletter`),
  each split into `*.schema.js` (validation), `*.service.js` (what actually
  happens — e.g. sending email), and `*.controller.js` (wires an API route to
  the schema + service)
- `data/*.data.js` — every static content array (services, projects, FAQs,
  testimonials, nav links, etc.) that used to live inline inside page files
- `constants/site.js` — brand name, email, phone, address in one place
- `lib/api-response.js`, `lib/logger.js` — small shared infra used by the
  controllers

**Contact page**
- Added a real working inquiry form (`components/forms/contact-form.jsx`) —
  previously the page had no way to actually submit a message.
- Added an embedded Google Map for the Kharadi, Pune office
  (`components/shared/office-map.jsx`), no API key required.
- The submit posts to `/api/contact`, which validates the payload and sends
  the email via Resend (already a dependency) when `RESEND_API_KEY` is set —
  otherwise it logs the submission so nothing is lost during development.
- The newsletter form (footer/contact) now actually posts to
  `/api/newsletter` instead of only flipping local state.

**Lazy loading**
- Home, About, Services, and Projects pages load their below-the-fold
  sections (stats, grids, timeline, testimonials, FAQ, CTA) via
  `next/dynamic`, so that code isn't in the initial JS bundle. The hero /
  page header stays eager since it's above the fold. Each shows a small
  pulse skeleton (`components/shared/section-skeleton.jsx`) while it streams
  in.

**Fixes**
- Header logo `alt` text said "Voltcraft" while the brand everywhere else is
  "Voltara Technologies" — fixed.
- Removed `typescript.ignoreBuildErrors` from `next.config.mjs` (no longer
  needed, and it was silently hiding real errors).
- Removed duplicate lockfiles/build artifacts from what should ship
  (`.next/`, `tsconfig.tsbuildinfo`, `package-lock.json` vs `pnpm-lock.yaml`
  — pick one package manager and keep only its lockfile).

**Package cleanup**
- Dropped `.next/` (build cache), `tsconfig.tsbuildinfo`, and a stray
  `Freelancing/` folder (an older duplicate TypeScript copy of this same
  site) that was left inside the dev zip — none of that belongs in a
  production package.
- Dropped `.env.local` from this package entirely — the API key it
  contained has already been exposed by being uploaded here, so it's not
  safe to keep passing around. Set real values via Vercel's Environment
  Variables (see below) instead, using `.env.example` as your reference.

## Still worth deciding
- Pick one package manager (npm or pnpm) and delete the other's lockfile.
- If you want the newsletter signup to go to a real mailing list, swap the
  placeholder in `features/newsletter/newsletter.service.js` for your
  provider (Resend Audiences, Mailchimp, etc.).

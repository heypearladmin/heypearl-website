# HeyPearl.io

Authority infrastructure for the AI search era. Production-ready Next.js 14 site for HeyPearl, maker of PearlOS.

> **P.E.A.R.L.** stands for **Process · Efficiency · Automation · Revenue · Leverage.**
> The site treats this as a strategic framework, not a literal pearl. No pearl, oyster, ocean, or jewelry imagery anywhere.

## Stack

- Next.js 14 (App Router) with TypeScript strict mode
- Tailwind CSS with custom HeyPearl design tokens
- Framer Motion for editorial scroll motion
- Lucide icons
- Optimized for Vercel

## Quick start

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

```bash
npm run build       # production build
npm run start       # start production server
npm run lint        # eslint
npm run type-check  # tsc --noEmit
```

## Project layout

```
heypearl-website/
├─ public/
│  └─ images/                  # Drop brand assets here (see IMAGE_PROMPTS.md)
├─ src/
│  ├─ app/                     # App Router pages
│  │  ├─ layout.tsx            # Root layout (Navigation + Footer)
│  │  ├─ page.tsx              # Homepage
│  │  ├─ globals.css           # Tailwind + brand tokens
│  │  ├─ sitemap.ts            # /sitemap.xml
│  │  ├─ robots.ts             # /robots.txt
│  │  ├─ not-found.tsx         # 404
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ pricing/page.tsx
│  │  ├─ services/
│  │  │  ├─ page.tsx
│  │  │  ├─ geo/page.tsx
│  │  │  ├─ heylocal/page.tsx
│  │  │  └─ authority-websites/page.tsx
│  │  ├─ insights/page.tsx
│  │  ├─ privacy/page.tsx
│  │  └─ terms/page.tsx
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Navigation.tsx
│  │  │  └─ Footer.tsx
│  │  ├─ sections/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ MarketShift.tsx
│  │  │  ├─ PearlFramework.tsx
│  │  │  ├─ Services.tsx
│  │  │  ├─ HowItWorks.tsx
│  │  │  ├─ WhyHeyPearl.tsx
│  │  │  ├─ Showcase.tsx
│  │  │  ├─ Founder.tsx
│  │  │  ├─ PricingPreview.tsx
│  │  │  └─ FinalCTA.tsx
│  │  └─ ui/
│  │     ├─ Button.tsx          (Button + LinkButton)
│  │     ├─ Container.tsx
│  │     ├─ Eyebrow.tsx
│  │     ├─ LegalShell.tsx
│  │     ├─ Logo.tsx
│  │     ├─ PageHero.tsx
│  │     ├─ PricingCard.tsx
│  │     ├─ Reveal.tsx
│  │     └─ SectionHeading.tsx
│  └─ lib/
│     ├─ framework.ts          # P.E.A.R.L. pillars (centralized copy)
│     ├─ nav.ts                # Navigation structure
│     ├─ pricing.ts            # GEO + HeyLocal tiers
│     ├─ services.ts           # Services, How It Works, Why HeyPearl
│     ├─ site.ts               # Brand, contact, founder
│     └─ utils.ts              # cn() helper
├─ IMAGE_PROMPTS.md            # Cinematic prompts for every image
├─ README.md
├─ package.json
├─ tsconfig.json
├─ tailwind.config.ts
├─ next.config.js
├─ postcss.config.js
└─ .gitignore
```

## The P.E.A.R.L. framework

Defined in `src/lib/framework.ts` and rendered through `<PearlFramework />`. Reusable on any page:

```tsx
// Default: light, full layout (homepage)
<PearlFramework />

// Inverted on plum (about page)
<PearlFramework invert />

// Compact header version, e.g. inside a sub-page
<PearlFramework variant="compact" />
```

Pillars:

| Letter | Word        | One line                                            |
| ------ | ----------- | --------------------------------------------------- |
| P      | Process     | Map the motion. Make it visible.                    |
| E      | Efficiency  | Remove the friction in the systems that compound.   |
| A      | Automation  | Let software work, so people can do what only people can. |
| R      | Revenue     | Visibility is leakage without conversion.           |
| L      | Leverage    | Compound, quarter over quarter.                     |

Edit copy in `src/lib/framework.ts`. The component picks it up automatically.

## Where the framework appears today

- **Homepage** — between Market Shift and Services (light variant)
- **About page** — between the founder story and operating principles (inverted on plum)
- **Hero card** — references the P.E.A.R.L. score so the framework is visible from first paint
- **Footer** — micro line under the brand summary

## Configuration

Primary brand and contact configuration lives in `src/lib/site.ts`. Update:

- `strategyCallUrl` — booking URL (Calendly, Cal.com, Savvy, etc.)
- `contact.*` — phone, email, address
- `social.*` — HeyPearl social
- `founder.*` — Misti's links and headshot path

Pricing tiers live in `src/lib/pricing.ts`.

## Brand assets

Drop these files into `public/images/`:

- `logo.png` and `logo-inverse.png` (the "HeyPEARL.io" wordmark)
- `misti-headshot.jpg` (founder portrait)
- `pearl-mark.svg` (the layered system mark — NOT a literal pearl)
- All cinematic imagery from `IMAGE_PROMPTS.md`

A clean wordmark fallback is rendered by the `Logo` component if no image is present.

## Design tokens

Defined in `tailwind.config.ts`:

| Token       | Value     |
| ----------- | --------- |
| `cream`     | `#FFF9ED` |
| `lavender`  | `#F6F4FB` |
| `orange`    | `#FF914D` |
| `magenta`   | `#D34681` |
| `plum`      | `#431043` |
| `navy`      | `#1B263B` |
| `blush`     | `#FED0D1` |
| `slate`     | `#38476B` |
| `graytone`  | `#737373` |

Display font: Helvetica Neue / Helvetica / Inter (fallback chain).

## Deploying to Vercel

1. Push to GitHub.
2. Import into Vercel.
3. Set the production domain to `heypearl.io`.
4. Add environment variables only when integrations are added later.

## Voice rules

- "Software with a soul." Editorial, warm, confident, clear.
- The brand voice positions P.E.A.R.L. as elegant operational leverage, never as a literal pearl.
- Avoid hype, jargon, and generic agency language.
- No em dashes anywhere in copy.

# HeyPearl Authority Page Master Build Prompt

Use this prompt whenever you need to spin up a new authority page for a HeyPearl client (real estate agent, broker, coach, founder, etc.) — like Christine Andreasen, Laurel Seymour, Pam, or any future client.

Paste the entire prompt block below into Cursor, Claude, or any AI coding tool. Replace the `[CLIENT BRIEF]` section with the specifics of the agent you're building for, then let the AI generate the project.

---

## How to use this prompt

1. Copy the entire `MASTER PROMPT` block below
2. Fill in the `[CLIENT BRIEF]` section with the agent's actual details
3. Paste into Cursor/Claude as a new chat
4. Let it generate the full project
5. Run through the `DEPLOY_PLAYBOOK.md` steps to push to GitHub + Vercel + connect domain

---

## MASTER PROMPT

Copy from here ↓

```
You are building a premium, production-ready authority website for [CLIENT NAME].

This is NOT a generic real estate or coaching website.
The goal is to create a luxury authority page that feels editorial, warm, human-centered, and unmistakably premium. It should establish [CLIENT NAME] as the trusted name in their category.

The website should feel like the next chapter of how HeyPearl builds authority — same DNA as the HeyPearl mothership, same editorial discipline, same Direction 2 palette (Editorial Black & Magenta), tailored to this individual operator.

IMPORTANT: Avoid anything that feels:
- generic real estate template
- IDX listing aggregator
- corporate brokerage clone
- influencer marketing agency
- hype marketing
- cyberpunk AI startup

The emotional tone should feel: "Quiet authority, warm authority, software with a soul."

[CLIENT BRIEF — fill this in before sending]
- Client name: [Full name]
- Title / role: [e.g. Real Estate Advisor, Founding Broker, Coach, etc.]
- Brokerage / company: [if applicable]
- Service area / city: [e.g. Austin TX, San Diego CA]
- Target client: [e.g. luxury home buyers, first-time home sellers, downsizing professionals]
- Personality keywords: [e.g. warm, grounded, sharp, thoughtful, decisive]
- Years in market: [number]
- Key results / numbers: [e.g. $250M+ in volume, 200+ closings, top 1% nationally]
- Categories of expertise: [e.g. luxury homes, first-time buyers, investment properties]
- Social handles: [Instagram, Facebook, YouTube, LinkedIn]
- Phone: [number]
- Email: [address]
- Calendly / booking link: [URL]
- Primary CTA goal: [e.g. "Book a buyer consultation", "Schedule a listing call", "Get the home valuation"]
- Domain: [e.g. clientname.com or clientname.heypearl.io]
- Color preference: [Direction 2 - Editorial Black & Magenta, OR specify alternative palette]
- Headshot file path: [/images/client-headshot.jpg]
- Optional editorial photo path: [/images/client-editorial.jpg]
[END CLIENT BRIEF]

CORE BRAND POSITIONING

Brand: [CLIENT NAME] — [tagline based on their brief]
Positioning: [CLIENT NAME] is positioned as the operator-led authority in [category] for [service area]. The website should make any visitor in their first 5 seconds think: "This person is the most credible choice in this market."

Tagline directions:
- The trusted name in [category]
- [Service area]'s [category] authority
- [CLIENT FIRST NAME]'s playbook for [target outcome]
- Modern [category] for modern operators

BRAND PHILOSOPHY

Tone should feel:
- warm
- confident
- intelligent
- editorial
- decisive
- human-centered
- premium without pretension

Avoid:
- jargon
- "luxury home specialist" cliches
- aggressive sales language
- "growth hack" energy
- buzzwords

Copy should feel:
- magazine-grade
- crisp
- specific (use numbers and names, not vague claims)
- generous (educate, don't pitch)
- human (Misti / [CLIENT NAME] talking, not corporate-speak)

IMPORTANT: DO NOT use em dashes anywhere in the copy.

VISUAL DIRECTION (Direction 2 — Editorial Black & Magenta)

Use the same palette as the HeyPearl mothership unless the brief overrides:
- Background: Ivory #F8F5EE
- Soft surface: Bone #EFE9DC
- Ink: Editorial black #0E0E0E
- Primary accent: Magenta #D34681
- Secondary accent: Warm orange #FF914D
- Soft accent: Blush #FED0D1

Mood references: NYT Sunday Magazine, Vogue Business, Harper's Bazaar masthead, RH catalog, Hermès editorial.

The website should feel:
- cinematic
- spacious
- elegant
- premium
- warm
- editorial
- decisive

NOT:
- neon cyberpunk
- generic real estate template
- corporate dashboard
- influencer brand
- crypto/tech startup

TYPOGRAPHY

Primary Font: Helvetica Neue / Helvetica / Inter (fallback chain)
Display: same family, heavier weight
Italic emphasis: used sparingly for single emphasized words ("chooses", "cite", "trusted")

Typography should feel:
- editorial
- modern
- spacious
- magazine-grade

PAGES TO BUILD

1. Homepage
2. About / Story
3. Services (or "How I Work")
4. Listings or Case Studies (if applicable)
5. Insights / Notes (blog placeholder)
6. Contact
7. Privacy
8. Terms
9. 404

HOMEPAGE STRUCTURE

1. Hero Section
   - Eyebrow: small label (e.g. "[Service area] · [Category]")
   - Headline: A signature line that anchors authority. Examples:
     · "Become the trusted name in [target outcome]."
     · "[CLIENT FIRST NAME]'s playbook for [category]."
     · "Modern [category] for modern operators."
   - Supporting copy: 2-3 sentences explaining the unique value
   - Primary CTA: "Schedule a [consultation type] with [first name]"
   - Secondary CTA: "Contact [first name]"
   - Visual: cinematic editorial card or photo backdrop with very light cream wash

2. Market Shift / Why Now Section
   - Headline that anchors the urgency in the client's category
   - 2-3 paragraphs of editorial copy
   - Optional 4-6 bullet list of platform/market signals

3. Services / Approach Section (5 layers preferred)
   - Editorial cards explaining how the client serves their market
   - Each card: number, title, italic tagline, description, 3-5 bullet points

4. How It Works (4-step process)
   - Step 01: Discovery
   - Step 02: Strategy
   - Step 03: Execution
   - Step 04: Compounding / Long-term partnership

5. Why [CLIENT NAME] (vs. comparison)
   - Two cards side by side
   - Left: "Most agents/brokers/coaches in this market..."
   - Right: "[CLIENT FIRST NAME] does..."
   - The right card should use the magenta-gradient styling from HeyPearl
   - Set against a clean cream background (NOT navy or plum — this is the change Misti requested)

6. Results / Showcase
   - 4 metric tiles (e.g. closings, volume, average days, satisfaction)
   - 2-3 case study cards with editorial photos
   - 1 testimonial with a silhouette portrait

7. Founder / Operator Section ([CLIENT NAME])
   - Editorial portrait (use Direction 2 bokeh background — see IMAGE_PROMPTS)
   - 2-3 paragraphs of bio in editorial voice
   - 3-up stats grid: years in market, key designation, focus area

8. Pricing / Packages (if applicable)
   - 1-3 cards depending on the offer structure

9. Final CTA
   - Repeat the primary CTA
   - Subtle photographic backdrop

PRICING / OFFER STRUCTURE

Adapt to the client's actual offers. For real estate agents, this might be:
- Buyer Consultation (free) — Schedule a call
- Listing Strategy Call (free) — Schedule a call
- Investment Strategy (paid or premium tier)

Price tiles should NOT use the heavy plum/navy backgrounds from the original HeyPearl prototype. Use cream tiles with magenta accent borders for the highlighted tier.

CONTACT INFORMATION

Pull from [CLIENT BRIEF] section above and wire into:
- Footer
- Contact page
- Centralized site config file

TECH REQUIREMENTS

Build:
- Next.js 14 with App Router
- TypeScript strict mode
- Tailwind CSS with custom HeyPearl design tokens
- Framer Motion for editorial scroll motion
- Lucide icons
- next/image for all photos
- Optimized for Vercel deployment

Project structure:
```
project/
├─ public/
│  ├─ favicon.ico
│  └─ images/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  ├─ not-found.tsx
│  │  ├─ about/
│  │  ├─ services/
│  │  ├─ contact/
│  │  ├─ insights/
│  │  ├─ privacy/
│  │  └─ terms/
│  ├─ components/
│  │  ├─ layout/  (Navigation, Footer)
│  │  ├─ sections/  (Hero, About, Services, etc.)
│  │  └─ ui/  (Button, Container, Eyebrow, Logo, etc.)
│  └─ lib/
│     ├─ site.ts  (centralized brand + contact config)
│     ├─ nav.ts
│     ├─ services.ts
│     └─ utils.ts (cn helper)
├─ tailwind.config.ts (Direction 2 palette tokens)
├─ tsconfig.json
├─ next.config.js
├─ postcss.config.js
├─ package.json
└─ .gitignore
```

Use these reusable UI components from the HeyPearl mothership:
- Container (size: sm | md | lg | xl)
- Button + LinkButton (variant: primary | secondary | ghost | inverse, size: sm | md | lg)
- Eyebrow (small label with magenta dot prefix)
- SectionHeading (eyebrow + title + description, optional invert)
- Reveal (Framer Motion fade-up scroll wrapper)
- Logo (PNG-based wordmark with inverse variant)
- PageHero (with optional `image` prop for background photo)
- PricingCard
- LegalShell

VOICE RULES

- Editorial, warm, confident, decisive
- No em dashes anywhere
- No "luxury home specialist" cliches
- Use specific numbers when available (volume, closings, designations)
- Speak in [CLIENT FIRST NAME]'s voice, not corporate-speak
- Keep sentences medium-length, no jargon
- Italic emphasis for ONE word per headline at most

VERY IMPORTANT FINAL TASK

At the end of the build, generate a complete IMAGE_PROMPTS.md document for this project. For every image needed, provide:

1. File name
2. Save path (always public/images/[filename])
3. Recommended aspect ratio
4. Detailed cinematic AI image prompt aligned with Direction 2 palette and the universal style prefix

Universal style prefix (always include in every image prompt):
"Editorial luxury aesthetic in the spirit of NYT Magazine and Vogue Business. Warm cinematic lighting. Ivory #F8F5EE and bone #EFE9DC base palette with restrained magenta #D34681 and warm orange #FF914D accent pops. Editorial black ink for shadows. Premium magazine photography, spacious composition, shallow depth of field, soft natural daylight. No purple, no eggplant, no lavender, no neon, no cyberpunk, no robotic imagery, no readable text on screens, no fake brand logos, no watermarks."

Generate prompts for:
- Homepage hero ambient (16:9)
- Homepage hero side accent (4:5)
- Editorial founder portrait — bokeh background, light pink or magenta blouse, captured "in the work" (16:9)
- Founder secondary photo for About page (4:5 or 16:9)
- Showcase / case study cards (3 × 4:3)
- Testimonial silhouette (1:1)
- All Open Graph cards per page (1.91:1, 1200×630)
- Footer aurora background (16:9)
- 404 ambient (16:9)
- All other section backgrounds and accents

DELIVERABLE CHECKLIST

The completed build should have:
- [ ] Production-ready Next.js 14 project with TypeScript strict
- [ ] Direction 2 palette wired into tailwind.config.ts
- [ ] Centralized site config in src/lib/site.ts
- [ ] All 9 pages built and routed
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] Real Calendly link wired site-wide via site.strategyCallUrl
- [ ] Per-page Open Graph metadata
- [ ] Sitemap and robots.ts
- [ ] README documenting the structure and how to update copy
- [ ] IMAGE_PROMPTS.md with cinematic prompts for every needed image
- [ ] DEPLOY_PLAYBOOK.md (or reference back to the HeyPearl mothership runbook)

The final result should feel like a premium modern editorial authority page that screams credibility within 5 seconds, in the same DNA as the HeyPearl mothership.
```

Copy to here ↑

---

## After the AI generates the project

1. Save the project locally to `~/Projects/[client-name]-website/`
2. Open the `IMAGE_PROMPTS.md` file the AI generated
3. Generate every image in ChatGPT (use the Direction 2 universal style prefix)
4. Drop images into `public/images/`
5. Run `cd ~/Projects/[client-name]-website && npm install && npm run dev`
6. Review locally at `http://localhost:3000`
7. Push to GitHub + deploy to Vercel + connect domain following `DEPLOY_PLAYBOOK.md`

---

## Reference: client info template

Keep this template handy and fill it out for each new client before running the master prompt.

```
Client name:
Title:
Brokerage:
Service area:
Target client:
Personality keywords:
Years in market:
Key results:
Categories:
Instagram:
Facebook:
YouTube:
LinkedIn:
Phone:
Email:
Calendly:
Primary CTA:
Domain:
Color preference:
Headshot path:
Editorial photo path:
```

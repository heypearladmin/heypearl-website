# HeyPearl Deploy Playbook

Everything you need to take a fresh Next.js project from your local machine to a live website at a custom domain. Works for the HeyPearl mothership and every authority page you build going forward.

---

## Phase 1 — Open and run a project locally (terminal)

### Once-per-machine setup (only do this if it's a new Mac)

```bash
# Install Homebrew (Mac package manager) if you don't have it:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (the JavaScript runtime Next.js needs):
brew install node

# Verify Node is installed:
node -v          # should print v20.x.x or newer
npm -v           # should print 10.x.x or newer

# Install Git if it's not already there:
brew install git
git --version

# Tell Git who you are (only once):
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Open an existing project (the day-to-day flow)

```bash
# Navigate into the project folder:
cd ~/heypearl-website
# or for a different project:
cd ~/Projects/laurel-seymour-website

# Install dependencies (only the first time, or after pulling new code):
npm install

# Start the dev server:
npm run dev
```

You'll see something like:

```
▲ Next.js 14.2.15
- Local:        http://localhost:3000
✓ Ready in 1.8s
```

Open `http://localhost:3000` in Chrome to see the site. Hot reload happens automatically — edit a file, save, and the browser updates.

To stop the dev server: hit `Ctrl+C` in the terminal.

### Common dev-time commands

```bash
# Start dev server:
npm run dev

# Run production build (catches errors before deploying):
npm run build

# Preview production build locally:
npm run start

# Lint the code:
npm run lint

# Type-check:
npm run type-check

# Clear Next.js cache (use after replacing image files with same filename):
rm -rf .next
npm run dev
```

### Move a project from the Cowork outputs folder to a real working location

```bash
# Make a Projects folder if you don't have one:
mkdir -p ~/Projects

# Move the project (one long path, all on one line):
mv "/Users/dalegatchallan/Library/Application Support/Claude/local-agent-mode-sessions/.../outputs/PROJECT-NAME" ~/Projects/PROJECT-NAME

# Now go work in it:
cd ~/Projects/PROJECT-NAME
```

---

## Phase 2 — GitHub (terminal + browser)

### First-time setup for a new project

```bash
# 1. Make sure you're inside the project folder:
cd ~/Projects/PROJECT-NAME

# 2. Initialize Git tracking:
git init

# 3. Stage all files:
git add .

# 4. Make your first commit:
git commit -m "Initial: project setup"
```

### Create the GitHub repo (browser)

1. Go to **https://github.com/new**
2. **Repository name:** `project-name` (lowercase, no spaces)
3. **Visibility:** Private (recommended; you can flip to public later)
4. **DO NOT** check "Add a README", "Add .gitignore", or "Add a license" — your project already has these
5. Click **Create repository**

GitHub will show three commands. Use the second block ("…or push an existing repository from the command line").

### Push to GitHub (terminal)

```bash
# Replace YOUR-USERNAME and PROJECT-NAME below:
git remote add origin https://github.com/YOUR-USERNAME/PROJECT-NAME.git
git branch -M main
git push -u origin main
```

The first push will ask you to authenticate. Easiest option:
- A browser window opens — sign in with GitHub and click Authorize
- If it asks for a password in the terminal, generate a Personal Access Token at **https://github.com/settings/tokens** with `repo` permission and paste it as the password

### Day-to-day update flow

```bash
# Make code changes in your editor

# Stage everything:
git add .

# Commit with a message describing the change:
git commit -m "Update pricing copy"

# Push to GitHub (Vercel will auto-deploy):
git push
```

That's it. Vercel auto-deploys every push to `main` in about 60 seconds.

### Common Git commands

```bash
git status                    # Show what's changed
git log --oneline -10         # See last 10 commits
git diff                      # Show unstaged changes
git diff --staged             # Show staged changes
git pull                      # Pull latest from GitHub (if you have changes from another machine)
git remote -v                 # Show remotes
```

### If you get a Git error

- **"fatal: not a git repository"** → run `git init`
- **"Updates were rejected"** → someone else (or you on another machine) pushed first. Run `git pull --rebase`, then `git push`
- **"Authentication failed"** → token expired. Make a new token at github.com/settings/tokens and use it

---

## Phase 3 — Vercel (browser)

### First-time deploy

1. Go to **https://vercel.com**
2. Sign in **with GitHub** (use the same account you pushed to)
3. From the dashboard, click **Add New → Project**
4. Find the repo you just pushed → click **Import**
5. **Framework Preset:** should auto-detect "Next.js" — leave it
6. **Build & Output Settings:** leave defaults
7. **Environment Variables:** none needed for these projects yet
8. Click **Deploy**

Wait 60–90 seconds. You'll get a confetti animation and a live preview URL like:

```
https://project-name-xyz.vercel.app
```

Click it. Your site is live at that Vercel URL with HTTPS.

### Future updates

You don't touch Vercel. Every `git push` to `main` triggers an automatic deploy. The Vercel dashboard shows you the build status and live URL — that's it.

### Vercel preview deployments (free bonus)

If you push a branch other than `main` (e.g. `git checkout -b new-feature && git push`), Vercel builds a unique preview URL just for that branch. Useful for showing Misti a draft change before merging to live.

```bash
# Make a feature branch:
git checkout -b feature/new-pricing
# Make changes, commit, push:
git add .
git commit -m "New pricing tiers"
git push -u origin feature/new-pricing
# Vercel auto-builds a preview URL — find it in the Vercel dashboard
```

When ready to ship to live:

```bash
git checkout main
git merge feature/new-pricing
git push
```

---

## Phase 4 — Connect a custom domain (Vercel + Namecheap or GoDaddy)

### Step 1 — Add the domain in Vercel

1. Open your project in Vercel
2. Click **Settings** (top tab) → **Domains** (left sidebar)
3. Type `clientdomain.com` → click **Add**
4. Type `www.clientdomain.com` → click **Add**

Vercel will show both domains with a status of "Invalid Configuration" and tell you the exact DNS records to set. Keep this Vercel tab open — you'll need to copy values from it.

The records will be one of two patterns:

**Pattern A — fresh domain (no Vercel claim conflict):**

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `cname.vercel-dns.com` |

**Pattern B — domain already on another Vercel account (you'll see a yellow warning):**

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `[some-hash].vercel-dns-017.com` |
| TXT | `_vercel` | `vc-domain-verify=clientdomain.com,[hash]` |
| TXT | `_vercel` | `vc-domain-verify=www.clientdomain.com,[hash]` |

**Always copy the actual values from the Vercel page** — don't guess. The hashes are unique per project.

### Step 2A — Configure DNS at GoDaddy

1. Go to **https://dcc.godaddy.com/manage/CLIENTDOMAIN.com/dns** (replace with the actual domain)
2. You'll see a "DNS Records" table
3. **Update the apex A record:**
   - Find the existing A record where Name = `@`
   - Click the pencil/edit icon
   - Change Value to: `216.198.79.1`
   - Save
4. **Update or add the www CNAME:**
   - Find existing CNAME where Name = `www` (or click **Add New Record**)
   - Type: CNAME, Name: `www`, Value: (whatever Vercel showed)
   - Save
5. **Add TXT verification records (only if Vercel asked):**
   - Click **Add New Record** for each
   - Type: TXT, Name: `_vercel`, Value: (the full `vc-domain-verify=...` string)
   - Save each one separately
6. **Clean up conflicts:**
   - Delete any A record at `@` pointing to a non-Vercel IP
   - Delete any CNAME at `@` (CNAMEs at root aren't allowed)
   - Turn off any forwarding rule under the **Forwarding** tab

**Don't touch:** MX records (email), other TXT records (email/Google verification), NS records, SOA record.

### Step 2B — Configure DNS at Namecheap

1. Go to **https://ap.www.namecheap.com/Domains/DomainControlPanel/CLIENTDOMAIN.com/advancedns**
2. Scroll to "Host Records" section
3. **Update the apex A record:**
   - Find the row where Type = `A Record` and Host = `@`
   - Click the trash icon to delete it (Namecheap will let you re-add)
   - Click **Add New Record**
   - Type: `A Record`, Host: `@`, Value: `216.198.79.1`, TTL: Automatic
   - Save (green checkmark)
4. **Update or add the www CNAME:**
   - Find existing CNAME row with Host = `www` and delete it
   - Click **Add New Record**
   - Type: `CNAME Record`, Host: `www`, Value: (whatever Vercel showed), TTL: Automatic
   - Save
5. **Add TXT verification records (only if Vercel asked):**
   - Click **Add New Record** for each
   - Type: `TXT Record`, Host: `_vercel`, Value: (the full `vc-domain-verify=...` string), TTL: Automatic
   - Save each one
6. **Clean up conflicts:**
   - Delete any "URL Redirect Record" rows that point the domain elsewhere
   - Delete any "Parking Page" forwarding under **Domain → Manage** if it exists
   - Turn off "Namecheap Web Hosting" parking if it's on
7. **CRITICAL Namecheap step — confirm Nameservers are set to Namecheap:**
   - On the same domain page, scroll to "Nameservers"
   - Make sure it says "Namecheap BasicDNS" or "Namecheap Web Hosting DNS"
   - If it says "Custom DNS" with weird values, that's why your DNS records aren't being read — change it back to Namecheap BasicDNS

**Don't touch:** MX records (email), other TXT records (email/Google verification).

### Step 3 — Verify and wait

1. Go back to the Vercel Domains tab
2. Click **Refresh** next to each domain
3. Wait 5–30 minutes (occasionally up to a few hours)
4. Status flips from "Invalid Configuration" → ✅
5. HTTPS certificate auto-issues
6. Test by visiting `https://clientdomain.com` — site should load with a padlock icon

### Step 4 — Set the primary domain

In Vercel → Domains, one domain will be marked "Primary" (the other auto-redirects to it). Most people want the apex `clientdomain.com` (without www) as primary.

If `www.clientdomain.com` is set as primary by default:
- Hover over the `clientdomain.com` row
- Click the three-dot menu → **Set as Primary**

Now `www.clientdomain.com` redirects to `clientdomain.com`.

### Verify DNS propagation manually

If the Vercel status doesn't flip after 30 minutes, check what the global DNS sees:

- **A record check:** https://dnschecker.org/#A/clientdomain.com
- **CNAME check:** https://dnschecker.org/#CNAME/www.clientdomain.com
- **TXT check:** https://dnschecker.org/#TXT/_vercel.clientdomain.com

If the values match what you set, click Refresh in Vercel again. If they don't, the records didn't save at the registrar — go back and re-add.

### Common DNS issues and fixes

| Problem | Cause | Fix |
| --- | --- | --- |
| Vercel says "Invalid Configuration" after 30 min | Stale parking record at registrar | Delete any A or CNAME at `@` pointing to non-Vercel IP |
| "This domain is linked to another Vercel account" | Domain previously connected to another Vercel project | Add the two TXT verification records Vercel asked for |
| Site loads but no HTTPS / "Not secure" | Cert still being issued | Wait 5 more min, refresh |
| Email stops working | Touched MX or TXT records by accident | Restore: ask AI/DNS provider for correct MX records |
| Namecheap records aren't being read | Nameservers set to Custom DNS | Change to Namecheap BasicDNS |

---

## Phase 5 — Day-to-day maintenance

### Update site copy or images

```bash
cd ~/Projects/PROJECT-NAME
# edit files in your editor
git add .
git commit -m "Describe the change"
git push
```

### Replace an image with the same filename

Next.js caches optimized images. After replacing a file:

```bash
cd ~/Projects/PROJECT-NAME
rm -rf .next
npm run dev
# verify locally, then:
git add .
git commit -m "Update hero photo"
git push
```

### Switch a Calendly link site-wide

Edit one file:

```bash
cd ~/Projects/PROJECT-NAME
# Open src/lib/site.ts
# Change strategyCallUrl: 'https://calendly.com/...'
# Save
git add .
git commit -m "Update Calendly link"
git push
```

### Update colors site-wide

Edit `tailwind.config.ts` — change the hex values for `cream`, `lavender`, `plum`, `navy`, `magenta`, `orange`. Save, push, deploy.

### Add a new page

```bash
# Make a new folder under src/app/
mkdir -p src/app/case-studies
# Create page.tsx in that folder
# Use the structure of an existing page like src/app/about/page.tsx
git add .
git commit -m "Add case studies page"
git push
```

---

## Quick reference card

| What you want to do | Where it happens |
| --- | --- |
| Edit copy on a page | `src/app/<page>/page.tsx` |
| Change pricing | `src/lib/pricing.ts` |
| Change phone, email, address, founder | `src/lib/site.ts` |
| Change Calendly URL | `src/lib/site.ts` → `strategyCallUrl` |
| Change brand colors | `tailwind.config.ts` |
| Update P.E.A.R.L. pillars | `src/lib/framework.ts` |
| Replace a photo | drop file into `public/images/` (same filename), `rm -rf .next && npm run dev`, push |
| Add a new page | new folder under `src/app/`, create `page.tsx` |
| Deploy a change | `git add . && git commit -m "..." && git push` (Vercel auto-deploys) |
| Connect a new domain | Vercel Domains → Add → set DNS at registrar (GoDaddy or Namecheap) |
| Switch primary domain | Vercel Domains → three-dot → Set as Primary |

---

## When to come back to me

Anything weird, anything broken, anything you're not sure about. The instructions above cover the 95% case; the 5% case is where you DM Dale or ask Claude to debug.

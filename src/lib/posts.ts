export type Post = {
  slug: string;
  eyebrow: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  quickAnswer: string;
  publishedAt: string;
  readTime: string;
  image: string;
  content: string;
  faq: { q: string; a: string }[];
  conclusion: string;
  internalLinks: { label: string; href: string }[];
  imagePrompt: string;
  imageFilename: string;
};

export const posts: Post[] = [
  {
    slug: "90-day-ai-visibility-roadmap",
    eyebrow: "Roadmap",
    seoTitle: "From Invisible to Recommended: Your 90-Day AI Visibility Roadmap | Hey Pearl",
    metaDescription: "A month-by-month roadmap to move from invisible to recommended in AI search \u2014 foundation, content, and reputation \u2014 with the metrics to track at each stage.",
    h1: "From Invisible to Recommended: Your 90-Day AI Visibility Roadmap",
    excerpt: "AI visibility is not a switch you flip. It is a sequence you execute. Here is the 90-day roadmap we use to move a business from invisible to recommended \u2014 and the metrics that prove it is working.",
    quickAnswer: "AI visibility is built in three stages over 90 days: entity foundation in month one, citation-worthy content in month two, and reputation signals in month three. The sequence matters because each stage depends on the one before it — skipping ahead produces leaky results that compound slowly if at all.",
    publishedAt: "2026-07-02",
    readTime: "10 min read",
    image: "/images/website-blog-90-day-ai-visibility-roadmap.png",
    content: `## Ninety days, in the right order

Most businesses that try to improve their AI visibility fail for one reason: they do the right things in the wrong order. They chase content before their entity is stable, or pursue reviews before they have a page worth citing. Sequence matters, because each stage depends on the one before it.

What follows is the 90-day roadmap we run with clients. It is not a guarantee of overnight results — AI visibility compounds over quarters, not days — but it is a disciplined path that reliably moves a business from invisible to part of the consideration set to actively recommended. Each month has a focus, a set of actions, and metrics that tell you whether it is working.

## Month 1 — Foundation

You cannot build authority on an entity the machines cannot resolve. Month one is about making your business unambiguously identifiable.

### Entity setup

Establish one canonical version of your business identity — exact name, address, description, founding date, specialty — and enforce it consistently everywhere you appear. Inconsistency is the most common reason engines fail to resolve a business confidently.

### Schema

Implement structured data across your site: Organization and Person schema on your About page, LocalBusiness schema where relevant, and the sameAs links that connect your entity to its authoritative profiles. Schema tells engines your facts directly rather than leaving them to inference.

### About page

Rewrite your About page to state, plainly and in structured form, who runs the business, when it was founded, where it operates, and what it is specifically known for. This is the page engines read first to establish identity.

### Google Business Profile

Claim and fully complete your Google Business Profile — categories, description, hours, service areas, photos. It is a primary source for AI Overviews and local recommendations.

**Metrics for Month 1:** Entity consistency across your top platforms (aim for full alignment), schema validation with no errors, and a baseline AI visibility audit score across the four major engines. Establishing that baseline now is what lets you prove progress later.

## Month 2 — Content

With a stable entity in place, month two builds the material engines can cite. The goal is topical authority: becoming a source engines reach for when answering questions in your domain.

### Topical authority

Map the questions your buyers actually ask — the problem queries, not just the branded ones — and build a coherent set of pages that answer them thoroughly. Depth and coherence across a topic signal expertise more than any single page can.

### FAQ content

Structure clear, specific answers to the real questions in your category, marked up with FAQ schema. This is some of the most directly citable content you can produce, because it matches the question-and-answer shape of how engines respond.

### Citation-worthy pages

Build the pages engines want to cite: specific, first-party, well-structured content on your methodology, your outcomes, and your area of expertise. Aim to be the source, not merely a source that gets scraped for a competitor's benefit.

**Metrics for Month 2:** Number of published citation-worthy pages, appearance in problem and category queries (not just branded ones), and which sources engines cite when answering questions in your domain. If your own pages start appearing as citations, the content pillar is working.

## Month 3 — Reputation and amplification

With a resolvable entity and citable content established, month three turns to the signals that move you from credible to recommended.

### Reviews

Stand up a deliberate, ongoing review program — a compliant, systematic process for earning specific, recent reviews on Google and your industry's key platforms. Velocity and sentiment now feed AI recommendations directly.

### PR and mentions

Earn mentions and links from authoritative third-party sources in your domain. External corroboration strengthens how confidently engines resolve and frame your entity. A business the wider web references is one the machines trust more.

### sameAs signals

Expand and reinforce the network of authoritative profiles connected to your entity — industry directories, professional networks, relevant listings — all consistent, all linked. This tightens entity resolution and compounds the foundation from month one.

**Metrics for Month 3:** Review velocity and average sentiment, number and quality of third-party mentions, breadth of consistent sameAs profiles, and — the metric that matters most — your movement in category and problem queries relative to competitors. Re-run the full visibility audit against your month-one baseline.

## What to expect at day 90

By the end of 90 days, a business that started invisible should be resolvable as a confident entity, present in the consideration set for its category queries, cited from its own properties, and building the reputation velocity that drives active recommendation. The trajectory matters more than any single-day snapshot: you are looking for a visibility audit score that has moved decisively upward and continues to climb.

Then the work changes shape. AI visibility is not a project you complete; it is a position you hold. The businesses that win the AI search era are the ones that treat this roadmap not as a one-time sprint but as the beginning of a standing discipline — maintaining the entity, publishing the content, and sustaining the reputation, quarter after quarter, while their competitors are still deciding whether any of it matters.`,
    faq: [
    {
        "q": "Can I really become visible in AI search in 90 days?",
        "a": "Ninety days is enough to move from invisible to part of the consideration set and to build the signals that drive active recommendation, but AI visibility compounds over quarters rather than days. The roadmap reliably moves a business in the right direction; the goal at day 90 is a visibility score that has climbed decisively and continues to rise, not a finished project."
    },
    {
        "q": "Why does the sequence matter \u2014 can't I do everything at once?",
        "a": "Sequence matters because each stage depends on the one before it. Content built before your entity is stable is harder for engines to attribute to you, and reviews earned before you have citable pages have less to reinforce. Foundation first, then content, then reputation is the order that lets each investment compound rather than leak."
    },
    {
        "q": "What should I do in month one?",
        "a": "Month one is foundation: establish one canonical version of your business identity and enforce it consistently everywhere, implement Organization and Person schema plus sameAs links, rewrite your About page to state your identity facts plainly, and fully complete your Google Business Profile. The aim is to make your business unambiguously resolvable as an entity."
    },
    {
        "q": "What metrics should I track over the 90 days?",
        "a": "Start with a baseline AI visibility audit score in month one, along with entity consistency and clean schema validation. In month two, track published citation-worthy pages and whether your own properties start appearing as sources. In month three, track review velocity and sentiment, third-party mentions, sameAs breadth, and your movement in category and problem queries against your baseline."
    },
    {
        "q": "What happens after the 90 days are over?",
        "a": "The work changes shape from a sprint to a standing discipline. AI visibility is a position you hold, not a project you complete, so you maintain the entity, keep publishing citable content, and sustain reputation velocity quarter after quarter. Businesses that treat the roadmap as the beginning of an ongoing practice are the ones that hold their advantage as competitors catch on."
    },
    {
        "q": "Do I need to hire help, or can I run this roadmap myself?",
        "a": "Much of the roadmap can be run internally by a disciplined operator, particularly the foundation and content stages, provided you are rigorous about consistency, structure, and cadence. The common failure points are technical schema implementation, sustaining content and review velocity, and earning authoritative third-party mentions \u2014 which is where many businesses choose to bring in specialized help."
    },
    {
        "q": "Is this roadmap different for local versus national businesses?",
        "a": "The three-stage structure holds for both, but the emphasis shifts. Local businesses lean harder on Google Business Profile, service-area signals, and location-specific reviews, while national or online businesses put more weight on topical authority content and authoritative third-party mentions across their domain. The foundation-content-reputation sequence remains the same in either case."
    }
],
    conclusion: `Moving from invisible to recommended is not a matter of effort alone; it is a matter of doing the right things in the right order. Build a resolvable entity, then the content worth citing, then the reputation that drives recommendation — and track the metrics that prove each stage is working. Ninety days will not finish the job, but it will change your position decisively and give you a standing discipline that compounds while your competitors are still watching from the sidelines.`,
    internalLinks: [
    {
        "label": "Explore our GEO services",
        "href": "/services/geo"
    },
    {
        "label": "Find your solution",
        "href": "/get-started"
    },
    {
        "label": "Start your 90-day roadmap",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of a clean project roadmap laid out on a large desk with sticky notes and a pen, person's hands visible pointing at milestone, warm natural light, overhead perspective, premium quality, no text, no logos",
    imageFilename: "website-blog-90-day-ai-visibility-roadmap.png",
  },
  {
    slug: "pearl-framework-building-ai-ready-businesses",
    eyebrow: "The Framework",
    seoTitle: "The P.E.A.R.L. Framework: How to Build a Business That AI Actually Trusts | Hey Pearl",
    metaDescription: "Process, Efficiency, Automation, Revenue, Leverage \u2014 the five pillars of a business AI engines trust and recommend. A framework for operators, not marketers.",
    h1: "The P.E.A.R.L. Framework: How to Build a Business That AI Actually Trusts",
    excerpt: "AI engines recommend businesses that signal operational maturity. The P.E.A.R.L. framework is how we build that maturity into a company so the machines can see it.",
    quickAnswer: "The P.E.A.R.L. framework — Process, Efficiency, Automation, Revenue, Leverage — gives AI engines the structured, consistent signals they need to recognize and recommend a business with confidence. A business that is operationally mature signals trustworthiness across every surface AI reads.",
    publishedAt: "2026-06-25",
    readTime: "8 min read",
    image: "/images/website-blog-pearl-framework-ai-ready-business.png",
    content: `## Trust is an output, not a tactic

Most advice about AI visibility treats it as a set of tricks — add this schema, write that page, chase these citations. Those tactics matter, but they are downstream of something larger. AI engines are, at their core, trust-allocation machines. They are constantly deciding which businesses are real, capable, and safe to put in front of a person asking for help. The businesses they trust are the ones that are genuinely well-run and that leave a visible trail of that fact.

You cannot fake operational maturity to an engine that reads everything. So we stopped trying to game the signal and started building the substance. The P.E.A.R.L. framework is how we do it: five pillars that make a business both genuinely stronger and legibly trustworthy to AI. It is named for the company, but it is a discipline any operator can apply.

## P — Process

**Documented, AI-readable workflows.**

A business that runs on documented process is a business an engine can understand. When your methodology, your service delivery, and your standards exist as clear, published, structured content, you give engines concrete material to resolve and cite. "How we onboard a client in five defined stages" is citable. Undocumented, in-someone's-head process is invisible.

Process is the foundational pillar because it turns the tacit knowledge that runs most businesses into explicit assets. It also happens to make the business run better. The signal and the substance are the same thing.

## E — Efficiency

**Systems that signal operational maturity.**

Efficiency is what process produces at scale. When a business has systems — for scheduling, for follow-up, for reporting, for quality — those systems throw off signals: fast response times, consistent delivery, reliable communication. Engines increasingly weigh these operational signals, drawn from reviews, response behavior, and the completeness of your digital footprint, as evidence that a business is mature enough to recommend.

A prospect who describes their problem to an assistant is, implicitly, asking "who will actually handle this well?" Efficiency is how you answer that question at scale, and how the machine perceives that you can.

## A — Automation

**AI tools that create authority signals.**

Automation, used well, does not just save time. It generates authority signals as a byproduct. An automated review-request system produces a steady velocity of reputation signals. An automated content and publishing rhythm keeps your first-party properties current, which engines read as a sign of an active, living entity. Automated data consistency keeps your entity coherent across every platform.

The point is not automation for its own sake. It is that the right automations produce, on a continuous basis, exactly the signals AI engines look for — reputation, recency, consistency — without depending on anyone remembering to do them.

## R — Revenue

**Tracked outcomes that prove value.**

AI engines are moving toward outcome-based evaluation, and businesses that can evidence results have a durable advantage. Tracked, documented outcomes — case studies with specific numbers, before-and-after results, measurable client impact — are among the most citable assets a business can own. They move you from claiming value to proving it.

Revenue as a pillar is about building the habit and the infrastructure to capture proof of value as you deliver it. Every measured result becomes a piece of evidence that an engine can use to recommend you with confidence, and that a competitor without the same discipline cannot match.

## L — Leverage

**Compounding authority assets.**

Leverage is what ties the framework together. The assets built through the first four pillars — documented process, efficient systems, automation-generated signals, proven outcomes — do not merely add up. They compound. A strong entity makes every citation more credible. A body of proof makes every new page more authoritative. A steady reputation velocity makes every recommendation more likely.

Leverage means you are building assets that keep working and keep strengthening your position without proportional new effort. A business built on the P.E.A.R.L. pillars accumulates authority the way a well-run balance sheet accumulates equity — quietly, durably, and in a way that becomes progressively harder for competitors to overtake.

## Why the framework holds together

Each pillar strengthens the others. Process enables efficiency. Efficiency enables meaningful automation. Automation produces the reputation and consistency signals. Revenue tracking proves the whole thing works. And leverage compounds all of it into a defensible position in the channel where buyers now begin.

The deeper point is that P.E.A.R.L. does not ask you to choose between building a better business and building AI visibility. They are the same project. The businesses AI trusts are the ones worth trusting — and the framework is simply a disciplined way of becoming, and being seen as, one of them.`,
    faq: [
    {
        "q": "What does P.E.A.R.L. stand for?",
        "a": "Process, Efficiency, Automation, Revenue, and Leverage. Each is a pillar that both makes a business genuinely stronger and makes it more legibly trustworthy to AI engines. Process documents your workflows, Efficiency signals operational maturity, Automation generates authority signals, Revenue proves value through tracked outcomes, and Leverage compounds all of it into a durable position."
    },
    {
        "q": "Why does documented process matter for AI visibility?",
        "a": "Because a business that runs on documented, published process gives engines concrete, structured material to understand and cite. Tacit knowledge that lives in someone's head is invisible to an AI engine. Turning your methodology and delivery standards into explicit content makes the business both easier to run and easier for machines to resolve and recommend."
    },
    {
        "q": "How does automation create authority signals?",
        "a": "The right automations produce the exact signals engines look for as a byproduct of running. An automated review-request system generates steady reputation velocity, an automated publishing rhythm keeps first-party content current, and automated data consistency keeps your entity coherent across platforms. The value is not the time saved but the continuous, reliable production of reputation, recency, and consistency signals."
    },
    {
        "q": "Why is revenue a pillar in an AI visibility framework?",
        "a": "Because AI engines are moving toward outcome-based evaluation, and tracked results are among the most citable assets a business can own. Documented outcomes with specific numbers move you from claiming value to proving it. Building the discipline to capture proof of value as you deliver creates evidence engines use to recommend you with confidence."
    },
    {
        "q": "What makes the framework's assets compound?",
        "a": "Each asset strengthens the others. A strong entity makes every citation more credible, a body of proof makes every new page more authoritative, and steady reputation velocity makes every recommendation more likely. That is the leverage pillar: assets that keep working and strengthening your position over time without proportional new effort, accumulating authority the way equity accumulates on a balance sheet."
    },
    {
        "q": "Do I have to implement all five pillars at once?",
        "a": "No, and the pillars build in sequence. Process comes first because it enables efficiency; efficiency enables meaningful automation; automation produces signals; revenue tracking proves the system works; and leverage compounds it all. Most operators start by documenting process and establishing a clean entity, then layer in the remaining pillars as the foundation solidifies."
    }
],
    conclusion: `AI engines are trust-allocation machines, and you cannot fake operational maturity to a system that reads everything. The P.E.A.R.L. framework refuses the trick and builds the substance: documented process, efficient systems, signal-generating automation, proven outcomes, and compounding leverage. The businesses AI trusts are the ones genuinely worth trusting. Build the substance, make it legible, and the recommendations follow.`,
    internalLinks: [
    {
        "label": "Learn more about who we are",
        "href": "/about"
    },
    {
        "label": "Apply the framework to your business",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of a minimalist whiteboard with a clean geometric framework diagram in a bright modern conference room, warm sunlight streaming through windows, empty chairs around a wooden table, architectural and premium feel, no text, no logos",
    imageFilename: "website-blog-pearl-framework-ai-ready-business.png",
  },
  {
    slug: "reputation-signals-ai-era-reviews-recommendations",
    eyebrow: "Reputation Authority",
    seoTitle: "Reputation Signals in the AI Era: Why Reviews Now Drive AI Recommendations | Hey Pearl",
    metaDescription: "How review signals feed AI recommendation engines, which platforms matter most, and why review velocity and sentiment now compound into AI visibility.",
    h1: "Reputation Signals in the AI Era: Why Reviews Now Drive AI Recommendations",
    excerpt: "Reviews were once a conversion tool at the bottom of the funnel. In the AI era, they are training data \u2014 and they now shape whether the machines recommend you at all.",
    quickAnswer: "In the AI era, reviews are training data, not just social proof. AI engines use review velocity, sentiment, and specificity as signals of trustworthiness — businesses with a sustained stream of detailed, authentic reviews appear more credible in AI-generated recommendations than those with few or stale ones.",
    publishedAt: "2026-06-18",
    readTime: "7 min read",
    image: "/images/website-blog-reputation-signals-ai-recommendations.png",
    content: `## Reviews stopped being about conversion

For years, reviews did one job: they reassured a buyer who had already found you. Star ratings sat near the checkout, doing their quiet work at the bottom of the funnel. That job still exists, but it is no longer the important one.

In the AI era, reviews have become something else entirely — a primary signal that determines whether an AI engine recommends you in the first place. When someone asks Perplexity or ChatGPT "who is the best [category] near me?", the engine is not just checking whether you have a good rating. It is reading the actual language of your reviews, weighing sentiment, measuring how recent and how frequent they are, and using all of it to decide whether you belong in the answer. Reputation has moved from the bottom of the funnel to the top of the recommendation.

## How review signals feed recommendation engines

Modern AI engines ingest reputation data from two directions. They pull structured signals — aggregate ratings, review counts, recency — from platforms like Google. And they pull unstructured signals — the words themselves — which they are unusually good at interpreting. A model can read a thousand reviews and form a nuanced picture of what you are actually good at, where you fall short, and how you compare to alternatives, in a way that a simple star average never captured.

This means the content of your reviews now matters as much as the count. Reviews that name specific outcomes, specialties, and use cases give the engine concrete material to cite. "They rebuilt our failing HVAC controls in two days" tells an engine what to recommend you for. "Great service, five stars" tells it almost nothing.

## Which platforms matter most

Not all reputation sources carry equal weight.

### Google

Google remains the gravitational center of local and commercial reputation. Its review corpus feeds AI Overviews directly and is heavily referenced by third-party engines. If you invest in one platform, invest here first. A complete, active, well-reviewed Google Business Profile is table stakes for AI visibility in any location-based category.

### Industry-specific platforms

After Google, the platforms native to your category matter disproportionately, because engines treat them as authoritative for that domain. For a contractor, that may be a trade directory; for a restaurant, a dining platform; for a professional service, a specialist review site. Engines weight domain-relevant sources when resolving domain-specific queries.

### Your own site

First-party testimonials and case studies, properly structured with review schema, let you feed reputation signals through a source you fully control. This is not a substitute for third-party platforms — engines know the difference — but it reinforces the picture.

## Velocity is a signal, not just volume

A business with 400 reviews and nothing new in eighteen months reads, to an engine, as a business in decline. A business with 120 reviews and a steady stream of recent ones reads as active, current, and safe to recommend. Recency and consistency — review velocity — are signals in their own right.

The strategic implication is that reputation is not a milestone you hit and bank. It is a flow you maintain. A deliberate review program — a systematic, compliant process for requesting reviews from satisfied customers on an ongoing basis — keeps your velocity healthy and your sentiment picture current. Sporadic bursts followed by silence are far less valuable than a steady cadence.

## Sentiment is now legible

Because engines read the language of reviews, sentiment is legible in a way it never was to older ranking systems. The engine can tell the difference between customers who are merely satisfied and customers who are enthusiastic and specific. It can also detect patterns in complaints and factor them into how it frames you against competitors.

This raises the value of two things: earning genuinely strong experiences worth writing about, and responding to reviews — including critical ones — thoughtfully. Owner responses are themselves part of the record the engine reads, and a professional, resolution-oriented response to criticism can meaningfully soften how your reputation is interpreted.

## The compound effect

Here is what makes reputation the most durable of all AI visibility assets: it compounds, and it is hard to fake. Content can be rewritten in an afternoon. Schema can be added in a week. But a deep, recent, specific, well-distributed body of genuine reviews takes months of real customer relationships to build — which is precisely why engines trust it so heavily.

Every review adds to a base that competitors cannot quickly replicate. Sentiment strengthens. Velocity signals health. Domain platforms reinforce authority. Over quarters, this becomes a moat: a reputation so well-established across the sources engines trust that displacing you would require a competitor to out-earn you over the same long horizon. In a channel where the machines are constantly choosing whom to recommend, that is the position you want to hold.`,
    faq: [
    {
        "q": "Do AI engines actually read the text of my reviews, or just the star rating?",
        "a": "They do both, and the text increasingly matters more. Modern AI engines are highly capable at interpreting language, so they read the actual content of reviews to understand what you are specifically good at, where you fall short, and how you compare. Reviews that name concrete outcomes and specialties give engines material to cite; generic five-star reviews give them little to work with."
    },
    {
        "q": "Which review platform should I prioritize?",
        "a": "Google first. Its review corpus feeds AI Overviews directly and is heavily referenced by other engines, making a complete and active Google Business Profile table stakes for AI visibility. After Google, prioritize the review platforms native to your specific industry, since engines treat domain-relevant sources as authoritative for domain-specific queries."
    },
    {
        "q": "How many reviews do I need to show up in AI recommendations?",
        "a": "There is no fixed threshold, and volume alone is not the point. A steady flow of recent, specific reviews across trusted platforms often outperforms a larger but stale review base. Engines weight recency and consistency \u2014 review velocity \u2014 alongside count and sentiment, so an active, current reputation matters more than a big number that stopped growing."
    },
    {
        "q": "What is review velocity and why does it matter?",
        "a": "Review velocity is the rate and consistency with which you earn new reviews over time. It matters because engines read a steady stream of recent reviews as a signal that a business is active, current, and safe to recommend, while a review base that stopped growing can read as a business in decline. Maintaining velocity through a deliberate, ongoing review program is a distinct strategy from simply accumulating volume."
    },
    {
        "q": "Should I respond to negative reviews for AI visibility?",
        "a": "Yes. Owner responses are part of the record engines read, and a professional, resolution-oriented reply to criticism can meaningfully soften how your reputation is interpreted. Because sentiment is now legible to engines, thoughtful responses to critical reviews are both good customer service and a reputation signal in their own right."
    },
    {
        "q": "Why is reputation harder for competitors to copy than other AI signals?",
        "a": "Because a deep, recent, specific, well-distributed body of genuine reviews takes months of real customer relationships to build. Content and schema can be changed quickly, but authentic reputation cannot be shortcut, which is exactly why engines trust it heavily and why it becomes a durable moat that compounds in your favor over time."
    }
],
    conclusion: `Reviews are no longer a conversion detail at the bottom of the funnel. They are training data that helps decide whether the machines recommend you at all. Prioritize Google and your industry's native platforms, maintain a steady velocity of specific, recent reviews, respond thoughtfully to every one, and treat reputation as an ongoing discipline rather than a milestone. Do that consistently and you build the one AI visibility asset your competitors cannot quickly replicate.`,
    internalLinks: [
    {
        "label": "Explore our services",
        "href": "/services"
    },
    {
        "label": "Build your reputation strategy with us",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of a five-star review notification glowing softly on a smartphone screen lying on a warm marble desk, morning light, coffee nearby, premium lifestyle quality, shallow depth of field, no text, no logos",
    imageFilename: "website-blog-reputation-signals-ai-recommendations.png",
  },
  {
    slug: "why-your-about-page-matters-for-ai-citations",
    eyebrow: "Content Architecture",
    seoTitle: "Why Your About Page Is the Most Underrated Page for AI Citations | Hey Pearl",
    metaDescription: "AI engines use your About page to establish who you are as an entity. Here is what to include, how to structure it for machine readability, and what engines actually extract.",
    h1: "Why Your About Page Is the Most Underrated Page for AI Citations",
    excerpt: "Most businesses treat the About page as an afterthought. AI engines treat it as the primary source of truth about who you are. That mismatch is costing you citations.",
    quickAnswer: "AI engines read your About page first to establish who you are, what you do, and why you should be cited. A sparse or vague About page leaves engines unable to resolve your entity with confidence — meaning they skip you in favor of businesses whose facts are stated clearly.",
    publishedAt: "2026-06-11",
    readTime: "7 min read",
    image: "/images/website-blog-about-page-ai-citations.png",
    content: `## The page you ignore is the page the machines read first

Ask most operators to name their most important page and they will say the homepage, or a high-converting service page. Ask an AI engine, and the answer is often the About page. When ChatGPT, Perplexity, or Gemini needs to establish who you are — to decide whether you are a real, credible entity worth recommending — the About page is where it goes looking. It is the single densest source of identity signals on most websites, and it is almost always neglected.

This is a structural mismatch. The page you treat as a formality is the page that determines whether the machines can confidently answer "who is this business?" And confidence is the currency of AI recommendation.

## Entities, not keywords

To understand why the About page carries so much weight, you have to understand how modern AI engines think. They do not primarily match keywords; they resolve entities. An entity is a distinct, identifiable thing — a person, a company, a place — that the engine can connect to a web of facts: what it does, when it was founded, where it operates, who runs it, what it is known for.

When an engine cannot confidently resolve your business as an entity, it does one of two things. It hedges ("I don't have specific information about this company"), or it recommends a competitor it can resolve with confidence. Your About page is the clearest opportunity you have to make yourself unambiguously resolvable.

## What an AI-ready About page must contain

The engines are looking for a specific set of identity facts. A strong About page states them plainly rather than burying them in narrative.

### Founder and leadership identity

Name the people who run the business. Include a real founder bio with credentials, background, and relevant expertise. AI engines increasingly weight the identity and authority of the humans behind a business — a legacy of the experience-and-expertise standards that shaped search for years, now applied to entity resolution. "Founded by Jane Okafor, a licensed structural engineer with 18 years in commercial retrofits" is a citable fact. "Our team is passionate about quality" is not.

### Founding date and history

State when the business was founded and, briefly, how it came to be. Longevity is a trust signal, and a specific founding year is an anchoring fact engines extract and repeat.

### Location and service area

Name your physical location and the geography you serve. This is essential for the local and regional queries that dominate commercial AI search.

### Mission and specialty

Say clearly what you do and, more importantly, what you are specifically known for. Specificity beats breadth. "We help independent restaurants recover margin through menu engineering" is more resolvable than "we offer business consulting."

### Proof of expertise

Credentials, notable clients, years in operation, recognitions, measurable outcomes. These are the facts that move you from "exists" to "credible."

## Structure it for machines, not just readers

Content is necessary but not sufficient. How you structure the page determines how reliably an engine can extract it.

### Use plain, declarative statements

Write facts as clean sentences a machine can lift verbatim. Front-load the important claim. Avoid cleverness that obscures the fact.

### Add Organization and Person schema

Mark up the page with structured data — Organization schema for the business, Person schema for founders and key leaders. Populate the fields that carry identity: name, foundingDate, founder, address, description, and the sameAs links that connect your entity to its other authoritative profiles (LinkedIn, industry directories, Wikipedia if applicable). Schema is the difference between hoping the engine infers a fact and telling it the fact directly.

### Use clear headings and logical order

Headings that name what follows — who we are, what we do, who we serve, our credentials — help engines segment and extract the page. A well-structured About page is easier to cite than a beautiful but ambiguous one.

## What engines actually extract

When we audit client About pages against live AI results, the pattern is consistent. Engines pull the founding year, the founder's name and credential, the specific specialty, and the service geography — then use those facts to frame every subsequent mention of the business. Get those four facts stated clearly and marked up, and you see the engine repeat them accurately. Leave them vague, and you see the engine either omit you or invent plausible-but-wrong details, which is worse.

We have watched businesses go from "I don't have information about this company" to being described with an accurate founder bio and specialty inside a single re-indexing cycle — the only change being a rewritten, structured About page.

## The compounding effect

A strong About page does not just help the About page rank. It stabilizes your entire entity. Every other page, every citation, every mention becomes easier for engines to connect back to a confident, well-defined identity. It is foundational infrastructure — which is exactly why it deserves more attention than the marketing copy that usually gets all of it. Fix the foundation, and everything built on top of it holds.`,
    faq: [
    {
        "q": "Why do AI engines rely on the About page specifically?",
        "a": "Because it is typically the densest source of identity facts on a website \u2014 founder, founding date, location, mission, and expertise in one place. AI engines resolve businesses as entities before recommending them, and the About page is where they most reliably find the facts needed to do that resolution with confidence."
    },
    {
        "q": "What is the single most important thing to add to my About page?",
        "a": "A specific, credentialed founder or leadership bio, paired with a clear statement of what you are specifically known for. AI engines weight the authority of the humans behind a business heavily, and specificity of expertise is what moves you from a business that merely exists to one the engine treats as credible."
    },
    {
        "q": "Do I really need schema markup on my About page?",
        "a": "It is strongly recommended. Organization and Person schema let you state identity facts directly rather than hoping the engine infers them from prose. Populating fields like foundingDate, founder, address, and sameAs links removes ambiguity and materially improves how accurately engines describe you."
    },
    {
        "q": "What are sameAs links and why do they matter?",
        "a": "sameAs is a schema property that connects your entity to its other authoritative profiles \u2014 LinkedIn, industry directories, and similar. These links help engines confirm they have resolved the correct entity by cross-referencing consistent facts across multiple trusted sources, which increases their confidence in recommending you."
    },
    {
        "q": "Can a bad About page actually hurt me?",
        "a": "Yes. A vague or inaccurate About page can lead engines to omit you entirely, confuse you with another business, or invent plausible-but-wrong details. Fabricated or incorrect information is often worse than absence, because it erodes buyer trust at the exact moment of consideration."
    },
    {
        "q": "How long does it take for changes to show up in AI results?",
        "a": "It varies by engine, but structured, well-written About page changes often register within a single re-indexing cycle \u2014 sometimes days to a few weeks. Because the fix is foundational to your entire entity, its effects also compound across every other page and citation over the following weeks."
    }
],
    conclusion: `The About page is not a formality. It is the primary source AI engines use to decide who you are and whether you are worth recommending. State your founder, founding date, location, specialty, and proof of expertise plainly, mark them up with schema, and structure the page so a machine can extract it cleanly. Do that, and you give every engine the confident, accurate entity it needs before it will ever put your name in an answer.`,
    internalLinks: [
    {
        "label": "See how we approach our own story",
        "href": "/about"
    },
    {
        "label": "Learn about our authority websites",
        "href": "/services/authority-websites"
    }
],
    imagePrompt: "Editorial photography of a founder-style professional standing in a minimalist office, natural daylight portrait, warm wooden tones, confident relaxed posture, bookshelves slightly blurred in background, premium editorial style, realistic photography, no text, no logos",
    imageFilename: "website-blog-about-page-ai-citations.png",
  },
  {
    slug: "audit-your-ai-search-visibility",
    eyebrow: "Practical GEO",
    seoTitle: "How to Audit Your AI Search Visibility in Under 30 Minutes | Hey Pearl",
    metaDescription: "A step-by-step process to audit how ChatGPT, Perplexity, Gemini, and Google AI Overviews represent your business \u2014 plus a scoring framework and quick wins.",
    h1: "How to Audit Your AI Search Visibility in Under 30 Minutes",
    excerpt: "Most business owners have never checked what AI engines say about them. Here is a repeatable 30-minute audit that tells you exactly where you stand \u2014 and what to fix first.",
    quickAnswer: "An AI visibility audit has four steps: test how major engines respond to your category and problem queries, check your entity consistency across platforms, validate your structured data for errors, and document which competitors are being cited instead of you. The audit takes 30 minutes and reveals the highest-leverage fixes.",
    publishedAt: "2026-06-04",
    readTime: "9 min read",
    image: "/images/website-blog-audit-ai-search-visibility.png",
    content: `## You are already being described by machines

By mid-2026, a majority of buyer research journeys begin with a generative answer rather than a list of blue links. Google's AI Overviews now appear on the bulk of commercial queries, and standalone assistants — ChatGPT, Perplexity, Gemini, Claude — handle a growing share of the questions your prospects used to type into a search bar. Each of these systems already has an opinion about your business, your category, and your competitors. The problem is that almost no operator has actually read that opinion.

An AI visibility audit is the fastest way to close that gap. It does not require software, a subscription, or a consultant. It requires thirty focused minutes and a willingness to look at unflattering results honestly. This is the process we run before we ever quote a client.

## Before you start: set the conditions

Run the audit in a clean session. Log out of any account that personalizes results, or use a private window, so the engine is not simply reflecting your own history back at you. Turn off any memory or custom-instruction features. You want to see what a stranger sees, not what the model has learned about you specifically.

Keep a simple notepad open with four columns: the engine, the query, whether you were mentioned, and whether the information was correct. That table is your audit.

## Step one: the four engines, the same questions (about 15 minutes)

Run the same set of prompts across ChatGPT, Perplexity, Gemini, and Google AI Overviews. Using identical prompts lets you compare coverage across engines rather than testing four different things.

### The queries that matter

Start with three categories of prompt:

- **Category queries.** "Who are the best [your service] providers in [your city]?" and "What companies should I consider for [the problem you solve]?" These reveal whether you appear in the consideration set at all.
- **Named queries.** "Tell me about [your business name]" and "Is [your business name] reputable?" These reveal what the engines have actually ingested about you — and whether it is accurate.
- **Problem queries.** "How do I [solve the problem your customer has]?" followed by "Who can help me with this?" This is how real buyers behave: they describe a problem before they name a vendor.

Run each query, then ask one follow-up: "Why did you recommend those?" The reasoning the engine offers is often more useful than the list itself, because it exposes the signals it weighted.

## Step two: read the results like an operator (about 10 minutes)

You are looking for four things.

**Presence.** Did you appear? In which engines? For which query types? Appearing in named queries but never in category queries is common — it means the machines know you exist but do not yet consider you a credible answer.

**Accuracy.** Is your service description right? Your location? Your specialty? Outdated or wrong information is worse than absence, because it erodes trust at the exact moment of consideration.

**Framing.** How are you described relative to competitors? Are you the safe default, a niche option, or an afterthought? Note the adjectives the engine uses. They are downstream of your reputation signals.

**Citations.** In Perplexity and AI Overviews especially, note which sources the engine links to. If competitors are cited from their own sites and you are cited from a third-party directory — or not at all — that is a content architecture problem you can act on.

## Red flags to write down

- You do not appear in any category query, only when named directly.
- The engine confuses you with a similarly named business.
- Your founding date, location, or core service is wrong.
- Every citation about your category points to competitors' owned pages.
- The model hedges ("I don't have specific information about...") when asked about you by name.
- Your reviews or reputation are described in neutral-to-negative terms while competitors are described warmly.

Any two of these together mean you are effectively invisible in the channel where a large and growing share of buying decisions now begin.

## Step three: score it (about 5 minutes)

Use a simple 20-point framework. Award up to five points in each of four dimensions:

### The 4-part visibility score

1. **Presence (0–5).** Zero if you never appear; five if you appear in category, named, and problem queries across all four engines.
2. **Accuracy (0–5).** Zero if core facts are wrong; five if every engine describes you correctly.
3. **Positioning (0–5).** Zero if you are an afterthought; five if you are framed as a leading, credible answer.
4. **Citations (0–5).** Zero if no engine cites your owned properties; five if your own pages are consistently the source.

Add the columns. **16–20** means you are ahead of your market — protect the position. **9–15** means you have a foothold but leak authority to competitors — you have clear, winnable work. **0–8** means you are functionally absent, and every week you wait is compounding advantage for whoever moves first.

## Quick wins you can start this week

If your score exposed gaps, the highest-leverage fixes are almost always structural, not cosmetic:

- **Fix the facts first.** Correct wrong information on the sources engines cite — your site, your Google Business Profile, and the top directories. Accuracy is the cheapest point to buy back.
- **Publish the answer to your top problem query** as a clear, well-structured page on your own domain. Engines cite structured, specific, first-party content.
- **Establish a clean entity.** Consistent name, address, description, and founding details across every property you control. Machines reward coherence.
- **Address reputation signals.** Sentiment in reviews increasingly feeds how engines frame you. A deliberate review strategy moves positioning over a quarter.

Re-run the audit every 90 days. AI visibility is not a project you finish; it is a position you hold. The operators who treat it as a standing discipline — the way they already treat cash flow or hiring — are the ones the machines will keep recommending.`,
    faq: [
    {
        "q": "How often should I run an AI visibility audit?",
        "a": "Every 90 days is a sensible cadence for most businesses. AI engines update their models and re-index sources continuously, and your competitors are moving. A quarterly audit lets you track whether your score is climbing, holding, or slipping, and it aligns with the roughly one-quarter horizon it takes structural fixes to register."
    },
    {
        "q": "Do I need paid tools to audit my AI visibility?",
        "a": "No. The core audit requires only free access to ChatGPT, Perplexity, Gemini, and Google AI Overviews, plus a notepad to record results. Paid monitoring platforms are useful for tracking at scale over time, but the manual 30-minute audit is enough to establish where you stand and what to fix first."
    },
    {
        "q": "Why should I run queries while logged out?",
        "a": "Personalization and memory features cause the engines to reflect your own history back at you, which produces flattering but misleading results. A logged-out or private session shows you what a prospect who has never heard of you actually sees, which is the only view that matters for acquisition."
    },
    {
        "q": "What if the AI engines have my information wrong?",
        "a": "Inaccurate information is a priority fix and often the cheapest point to recover. Correct the facts on the sources these engines cite most \u2014 your own website, your Google Business Profile, and major directories. Ensure your entity details are consistent everywhere, then re-audit in a few weeks to confirm the correction has propagated."
    },
    {
        "q": "Why do I appear when named but not in category searches?",
        "a": "It means the engines know you exist but do not yet consider you a credible answer to the buyer's underlying problem. Closing that gap requires authority signals: first-party content that answers category and problem queries, consistent entity data, and reputation signals that position you as a leading option rather than a footnote."
    },
    {
        "q": "Which engine matters most for my business?",
        "a": "It depends on your buyers, but you should not optimize for one. Google AI Overviews reach the broadest audience, Perplexity is favored by research-heavy buyers, and ChatGPT and Gemini carry enormous conversational query volume. The good news is that the underlying signals \u2014 accurate entities, structured first-party content, strong reputation \u2014 improve visibility across all of them at once."
    },
    {
        "q": "What is a good AI visibility score?",
        "a": "On the 20-point framework, a score of 16 or above means you are ahead of your market and should focus on defending the position. Nine to 15 indicates a foothold with clear, winnable gaps. Eight or below means you are effectively invisible in AI search and should treat it as an urgent priority, since first movers in a category compound their advantage."
    }
],
    conclusion: `You cannot improve what you have never looked at. Thirty minutes of honest auditing tells you more about your position in the AI search era than most businesses will learn in a year of guessing. Run the audit, score it, fix the highest-leverage gaps, and re-run it next quarter. If the results surprised you — or if you want the structural work done properly rather than patched — this is exactly the discipline we build for our clients.`,
    internalLinks: [
    {
        "label": "Explore our GEO services",
        "href": "/services/geo"
    },
    {
        "label": "Talk to us about your audit results",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of a business owner seated at a modern desk with a tablet open and notebook with a pen beside it, reviewing results with focused expression, warm natural light from window, clean contemporary workspace, no text, no logos",
    imageFilename: "website-blog-audit-ai-search-visibility.png",
  },
  {
    slug: "entity-seo-make-your-business-known-to-ai",
    eyebrow: "Entity Strategy",
    seoTitle: "Entity SEO: How to Make Your Business a Named Entity That AI Actually Knows",
    metaDescription: "AI engines cite entities, not URLs. Learn what a knowledge graph entity is, why entities get recommended while everyone else stays invisible, and how to establish entity status.",
    h1: "Entity SEO: How to Make Your Business a Named Entity That AI Actually Knows",
    excerpt: "AI doesn't recommend websites. It recommends entities \u2014 things it recognizes as real. The question is whether your business is one of them.",
    quickAnswer: "Entity SEO is the practice of making your business unambiguously identifiable to AI engines as a recognized thing in the world — with a consistent name, category, facts, and links that connect your profiles across authoritative sources. Without it, engines cannot cite you confidently even when you are the best answer.",
    publishedAt: "2026-05-28",
    readTime: "7 min read",
    image: "/images/website-blog-entity-seo-ai-knowledge-graph.png",
    content: `There's a reason certain businesses get named by ChatGPT and Perplexity again and again while their competitors — sometimes larger, sometimes better — never come up. It usually isn't about the quality of the work. It's about whether the engine understands the business as an entity.

Entity SEO is the practice of making your business a recognized, named thing in the web's shared understanding — not just a domain, but a distinct real-world entity the machines can identify, verify, and cite. In the AI era, this is the foundation everything else stands on.

## What a Knowledge Graph Entity Is

A knowledge graph is a map of things and how they relate. Google's Knowledge Graph, Wikidata, and the internal representations inside large language models all work this way: they don't store "a webpage about a plumbing company." They store "Acme Plumbing — a company, located in Denver, that provides residential plumbing, founded in 2011, related to these people and these topics."

That distinction is everything. A webpage is a document. An entity is a thing with attributes and relationships. When an AI engine reasons about who to recommend, it reasons about entities. If your business exists in these graphs as a well-defined entity, the engine has something solid to grab. If it exists only as a website, the engine has a document to parse and a decision to hesitate over.

## Why Entities Get Cited and Non-Entities Don't

AI engines are built to avoid confident errors. Naming a business that turns out to be wrong, defunct, or misidentified is exactly the kind of mistake they're tuned to prevent. So they lean toward what they're sure of.

An established entity is something they're sure of. It has a consistent identity corroborated across multiple sources — the web "agrees" on what it is. Citing it is low-risk. A non-entity, by contrast, is a business the engine can find but can't fully verify: is this the same company mentioned under a slightly different name three sites over? Is it still operating? The uncertainty is enough for the engine to route around it and name a competitor it's more confident about.

This is why two businesses of equal quality can have wildly different AI visibility. One has done the work of becoming an entity. The other is still a website.

## How to Establish Entity Status

Becoming an entity is deliberate work across several fronts. None of it is exotic; all of it compounds.

### Consistent NAP and Identity

Name, Address, Phone — NAP — must be identical everywhere your business appears: your site, your profiles, directories, citations. Inconsistency is the single most common reason engines fail to consolidate a business into one confident entity. If you're "Acme Plumbing LLC" in one place and "Acme Plumbing Co." in another, you may be read as two uncertain things instead of one solid one. Audit and align this first.

### Google Knowledge Panel

Earning a Knowledge Panel — the information box that appears when Google recognizes an entity — is a strong signal that Google has formally admitted your business into its Knowledge Graph. It's driven by consistent identity, verified profiles, structured data, and corroborating mentions. It's not something you buy; it's something you become eligible for by building a coherent, verifiable presence.

### Wikidata and Structured Mentions

Wikidata is an open, machine-readable knowledge base that feeds many AI systems' understanding of entities. A well-sourced Wikidata entry, where warranted, gives engines a clean, structured reference for your business. Beyond that, structured mentions across credible third-party sources — press, industry directories, partnerships — corroborate your entity and strengthen its standing in the graph.

### Structured Data as the Connective Tissue

Organization schema with a complete \`sameAs\` property explicitly links your website to all your other authoritative profiles. This is how you tell the engines, in code, that all these scattered references point to one entity — yours. It's the connective tissue that turns a pile of mentions into a single recognized thing.

## Why This Is the Foundation of GEO

Every other GEO signal assumes an entity exists to attach to. Citation velocity means citations of an entity. Review signals are reviews of an entity. Structured data describes an entity. E-E-A-T is authority accruing to an entity. Without entity status, these signals scatter across an ambiguous identity and lose most of their force.

Establish the entity first, and everything else compounds on top of it. That sequencing — entity foundation, then signal amplification — is exactly how our [GEO service](/services/geo) is structured, and it's why our [HeyLocal](/services/heylocal) work puts entity consistency at the center of local visibility.`,
    faq: [
    {
        "q": "What's the difference between a website and an entity?",
        "a": "A website is a document the engine reads. An entity is a real-world thing \u2014 your business \u2014 that the engine recognizes with attributes and relationships. AI recommends entities, so being only a website leaves you invisible in the answer layer."
    },
    {
        "q": "Do I need a Wikipedia or Wikidata page to be an entity?",
        "a": "They help, but they aren't strictly required. Consistent NAP, verified profiles, structured data, and corroborating mentions can establish entity status on their own. Wikidata strengthens it where your business genuinely warrants an entry."
    },
    {
        "q": "How do I get a Google Knowledge Panel?",
        "a": "You don't request one directly. You become eligible by building a consistent, verifiable identity \u2014 aligned NAP, verified profiles, Organization schema, and credible third-party mentions. The panel appears when Google is confident enough in your entity."
    },
    {
        "q": "Why does inconsistent business info hurt so much?",
        "a": "Because it fractures your identity. Engines may read variant names or addresses as separate, uncertain entities rather than one confident one \u2014 and uncertainty gets you left out of recommendations."
    },
    {
        "q": "How long does it take to establish entity status?",
        "a": "Foundational consistency can be fixed quickly, but recognition builds over months as engines re-crawl, corroborate, and consolidate your signals. It's a compounding investment, not an overnight switch."
    },
    {
        "q": "Is entity SEO relevant for small local businesses?",
        "a": "Yes, and often decisively. Local AI queries produce short, named recommendations, and local markets have fewer established entities. A small business that becomes a clear entity can dominate its local answer layer."
    }
],
    conclusion: ``,
    internalLinks: [
    {
        "label": "Explore our GEO service",
        "href": "/services/geo"
    },
    {
        "label": "See our HeyLocal service",
        "href": "/services/heylocal"
    }
],
    imagePrompt: "Editorial photography of a glowing knowledge graph visualization projected in a dark modern room, person silhouetted in background studying the projection, cool blue and warm amber light contrast, cinematic quality, realistic photography, no text, no logos",
    imageFilename: "website-blog-entity-seo-ai-knowledge-graph.png",
  },
  {
    slug: "structured-data-schema-ai-visibility",
    eyebrow: "Technical Authority",
    seoTitle: "Schema Markup for AI Visibility: The Business Owner's Complete Guide",
    metaDescription: "Structured data isn't just for Google anymore. Learn how Organization, LocalBusiness, FAQ, and HowTo schema help AI answer engines extract and cite your business \u2014 plus how to implement it.",
    h1: "Schema Markup for AI Visibility: The Business Owner's Complete Guide",
    excerpt: "Schema is how you speak to a machine in its own language. In the AI era, the businesses that speak clearly get quoted.",
    quickAnswer: "Structured data tells AI engines your key facts in machine-readable language — what you do, who runs you, where you are, and what your pages are about. Businesses with well-implemented schema get cited more reliably because engines can extract and verify their facts without interpretation.",
    publishedAt: "2026-05-21",
    readTime: "7 min read",
    image: "/images/website-blog-structured-data-schema-ai-visibility.png",
    content: `Most business owners think of schema markup — if they think of it at all — as a technical SEO nicety that produces star ratings in Google results. That framing is now badly out of date. Structured data has become one of the most direct levers you have for AI visibility, because it's the cleanest way to tell an AI engine exactly what your business is, in a form the machine can extract without guessing.

When an engine can extract your facts cleanly, it can cite you confidently. When it has to infer them from marketing prose, it often decides not to risk it. Schema is the difference.

## Why Structured Data Matters for AI Engines — Not Just Google

Schema markup is standardized, machine-readable code (usually JSON-LD) that labels the meaning of your content. It says, in effect: "This string is our business name. This is our address. This is a service we offer. This is a question and here is its answer."

Traditional search used this to build rich results. AI engines use it for something more consequential: grounding. When a generative engine assembles an answer, it prefers facts it can attribute with certainty. Structured data hands it those facts pre-labeled. Instead of parsing a paragraph and hoping it inferred your service area correctly, the engine reads a field that states it outright.

This matters across every platform, not just Google. Retrieval-based engines like Perplexity and the browsing layers of ChatGPT and Gemini all benefit from content that's explicitly labeled. Ambiguity slows machines down and makes them cautious. Schema removes the ambiguity — and caution is what keeps you out of answers.

## The Schema Types That Move the Needle

You don't need every schema type in existence. A focused set covers the vast majority of what AI engines want to know about a business.

### Organization Schema

This is the foundation. Organization schema declares your business as an entity: legal name, logo, URL, social profiles, contact points, and — critically — the \`sameAs\` property that links your entity to its other authoritative profiles across the web. That \`sameAs\` field is one of the most underused, highest-leverage lines of code a business can add, because it explicitly connects your website to your knowledge graph identity.

### LocalBusiness Schema

If you serve a physical area, LocalBusiness schema (a specialization of Organization) declares your address, geographic coordinates, hours, service area, and price range. For local AI recommendations — "the best [category] near me" — this is essential. It gives the engine unambiguous location facts to work from.

### FAQ Schema

FAQ schema marks up questions and their answers in a structure engines love, because it maps directly onto how people query AI. When you label a question-and-answer pair, you're handing the engine a ready-made response to a query it's likely to receive. This is one of the most efficient ways to become the source of an AI answer.

### HowTo Schema

For process-driven or instructional content, HowTo schema breaks a task into ordered, labeled steps. AI engines frequently answer "how do I" questions, and clearly structured steps are easy to extract and attribute. If your business teaches or guides, this schema turns your expertise into citable answers.

## Practical Implementation

Start with a plan, not a plugin. Map which pages deserve which schema: Organization site-wide, LocalBusiness on your contact and location pages, FAQ on pages that answer common questions, HowTo on genuine process content.

Use JSON-LD, the format Google and the engines prefer. It lives in a script tag and doesn't touch your visible layout, which makes it clean to maintain. Populate every field with accurate, consistent information — the same name, address, and phone that appear everywhere else you exist online. Inconsistency between your schema and your knowledge graph does more harm than no schema at all.

Validate everything before and after you ship, using Google's Rich Results Test and Schema.org's validator. Then keep it current. Schema that claims hours you no longer keep or services you no longer offer erodes the exact trust you built it to earn.

This kind of technical authority is baked into how we build [authority websites](/services/authority-websites) — structured from the ground up to be legible to AI, not retrofitted after launch.`,
    faq: [
    {
        "q": "Do I really need schema if my content already explains everything?",
        "a": "Yes. Your content explains things to humans; schema explains them to machines with zero ambiguity. AI engines cite what they can extract with confidence, and labeled facts are far easier to extract than prose."
    },
    {
        "q": "Which schema type should I add first?",
        "a": "Organization schema, site-wide, with a complete `sameAs` array linking your authoritative profiles. It establishes your entity identity, which everything else builds on. Add LocalBusiness next if you serve a location."
    },
    {
        "q": "Can incorrect schema hurt me?",
        "a": "Yes. Schema that contradicts your real information \u2014 wrong hours, mismatched name, stale services \u2014 undermines trust and can get flagged. Accuracy and consistency matter more than volume."
    },
    {
        "q": "Does FAQ schema still work after Google reduced its rich-result display?",
        "a": "The visible rich result changed, but the structured data remains valuable for AI extraction. Engines still use labeled Q&A pairs to source answers, regardless of how Google chooses to display them."
    },
    {
        "q": "How do AI engines find my schema?",
        "a": "They read it when they crawl or retrieve your page, just as they read your visible content. Well-formed JSON-LD in your page's code is available to any engine that fetches the URL."
    },
    {
        "q": "Is schema a one-time task?",
        "a": "No. It needs maintenance. As your business changes \u2014 new services, updated hours, new locations \u2014 your schema must change with it. Stale structured data quietly costs you trust."
    }
],
    conclusion: ``,
    internalLinks: [
    {
        "label": "See our authority websites service",
        "href": "/services/authority-websites"
    },
    {
        "label": "Get in touch",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of a developer's workspace with clean code visible on a high-resolution monitor, soft warm desk lamp, mechanical keyboard, coffee cup, blurred city view through window behind, realistic photography, premium quality, no text, no logos",
    imageFilename: "website-blog-structured-data-schema-ai-visibility.png",
  },
  {
    slug: "eeat-in-the-ai-era",
    eyebrow: "Authority Signals",
    seoTitle: "E-E-A-T in 2026: How Google's Trust Framework Has Evolved for the AI Era",
    metaDescription: "E-E-A-T has changed since 2023. Here's how AI engines interpret experience, expertise, authority, and trust differently \u2014 and why founder visibility and first-hand experience now carry the day.",
    h1: "E-E-A-T in 2026: How Google's Trust Framework Has Evolved for the AI Era",
    excerpt: "The four letters haven't changed. What the machines do with them has changed completely.",
    quickAnswer: "E-E-A-T — Experience, Expertise, Authoritativeness, Trustworthiness — now determines not just your search ranking but whether AI engines cite you at all. AI reads E-E-A-T signals across your site, your author profiles, your reviews, and your third-party mentions, then uses them to decide which voices deserve to be quoted.",
    publishedAt: "2026-05-14",
    readTime: "7 min read",
    image: "/images/website-blog-eeat-ai-era-trust-signals.png",
    content: `E-E-A-T — Experience, Expertise, Authoritativeness, Trust — began as guidance for human quality raters evaluating Google's search results. It was a rubric for judging whether a page deserved to rank. In 2026, that rubric has quietly become something bigger: a framework that AI engines use to decide whether a source is safe to synthesize into an answer and whether a business is credible enough to name.

The letters are the same. What sits behind them has evolved considerably.

## What Changed Since 2023

The most visible shift came when Google added the second E — Experience — recognizing that first-hand experience is distinct from expertise. You can be an expert on a topic in the abstract; experience means you have actually done the thing. That distinction turned out to be prophetic, because it maps precisely onto what AI engines now need.

As generative answers came to dominate, the web filled with fluent, competent, machine-assisted content. Fluency stopped being a differentiator. When everything reads well, the signal that survives is evidence of the real — genuine experience, verifiable expertise, and traceable trust. The rubric shifted from "is this well-written?" to "is this demonstrably grounded in reality?"

Google has also leaned harder on Trust as the load-bearing letter. Experience, expertise, and authority all feed into a single question: can this source be trusted? In an environment where AI can fabricate a confident-sounding answer, provenance became the premium.

## How AI Engines Read the Four Letters Differently

Traditional crawlers inferred E-E-A-T from proxies: links, page structure, author bylines. AI engines go further — they reason about credibility across the whole web of signals, not just the page in front of them.

### Experience

A crawler saw the word "experience" and moved on. An AI engine looks for evidence of it: original photography, specific case details, first-person accounts, data you clearly gathered yourself. Generic advice that could have come from anywhere reads as thin. A page that says "here is what happened when we did this, on this date, with these results" reads as real. AI engines increasingly privilege the second kind because it's harder to fabricate.

### Expertise

Expertise is now evaluated as an attribute of identified people and organizations, not anonymous pages. Who wrote this? What have they demonstrably done? Can that identity be corroborated elsewhere? An expert who exists consistently across the web — with a real footprint — carries far more weight than an unnamed "content team."

### Authoritativeness

Authority has moved from the page to the entity. AI engines ask whether your business and the people behind it are recognized as authorities in your field, corroborated by third-party sources that name you. This is where entity recognition and E-E-A-T fuse: an authority is an entity the web agrees on.

### Trust

Trust is the sum, and AI engines assemble it from everything — consistent identity, current and credible reviews, transparent business information, secure and healthy technical presence, and the absence of contradiction across sources. Contradiction is corrosive. A business whose claims don't line up across the web loses trust quietly and quickly.

## Founder Visibility Strategy

Here is the operator-level insight that follows from all of this: in the AI era, people are the most durable E-E-A-T asset a business has.

A visible, consistent founder or subject-matter leader gives an AI engine a real human identity to anchor expertise and experience to. When your founder speaks on podcasts, writes under their own name, is quoted in the press, and maintains a coherent professional presence, you're building an authority signal that a competitor can't easily replicate. Anonymous brands are harder for engines to trust; named humans with verifiable track records are easier.

This is deliberate work: define who your public experts are, get them producing genuine first-hand content, and make sure their identity is consistent everywhere it appears. You can see how we think about this in [who we are](/about).

### First-Hand Experience Signals

Operationally, feed the engines proof of the real. Use original data and imagery. Document specific outcomes with dates and detail. Attribute content to named people with real credentials. Publish the kind of specifics that only someone who actually did the work could know. These are the signals that separate grounded authority from generic content in an AI-saturated web.`,
    faq: [
    {
        "q": "Is E-E-A-T an official ranking factor?",
        "a": "Not a single measurable one. It's a framework Google uses to describe quality, and its component signals influence both traditional ranking and AI answer synthesis. Treat it as a lens, not a dial."
    },
    {
        "q": "Why did Google add the extra E for Experience?",
        "a": "To distinguish first-hand experience from theoretical expertise. In a web flooded with fluent content, evidence that the author actually did the thing became the scarce, valuable signal \u2014 and AI engines reward it."
    },
    {
        "q": "Does E-E-A-T matter for AI engines beyond Google?",
        "a": "Yes. While the framework originated with Google, the underlying qualities \u2014 real experience, verifiable expertise, corroborated authority, and trust \u2014 are exactly what all AI engines look for before citing a source."
    },
    {
        "q": "How do I show experience if my business is young?",
        "a": "Document what you actually do. Case specifics, original data, named practitioners, and honest first-person accounts build experience signals regardless of company age. Age helps, but demonstrated reality helps more."
    },
    {
        "q": "Should my content be attributed to individuals instead of the brand?",
        "a": "Where credibility matters, yes. Named authors with verifiable expertise give engines a real identity to trust. Founder and expert visibility is one of the strongest E-E-A-T investments available."
    },
    {
        "q": "Can AI-assisted content still rank and get cited?",
        "a": "Yes, if it's grounded. The problem isn't AI assistance \u2014 it's ungrounded, generic output. Content anchored in real experience, real data, and real identities performs well no matter how it was drafted."
    }
],
    conclusion: ``,
    internalLinks: [
    {
        "label": "Learn about our approach",
        "href": "/about"
    },
    {
        "label": "Explore our authority services",
        "href": "/services"
    }
],
    imagePrompt: "Editorial photography of a confident professional at a minimal white desk reviewing printed documents, soft natural daylight through floor-to-ceiling windows, clean workspace with subtle plant, authoritative and premium feel, shallow depth of field, no text, no logos",
    imageFilename: "website-blog-eeat-ai-era-trust-signals.png",
  },
  {
    slug: "how-ai-engines-decide-who-to-recommend",
    eyebrow: "AI Search Intelligence",
    seoTitle: "How ChatGPT, Perplexity, and Gemini Decide Which Businesses to Recommend",
    metaDescription: "AI engines recommend businesses based on entity authority, structured data, citation velocity, review signals, and content freshness. Here's how each platform differs and what you can do about it.",
    h1: "How ChatGPT, Perplexity, and Gemini Decide Which Businesses to Recommend",
    excerpt: "When an AI recommends a business, it isn't guessing. It's weighing signals. Understand the signals and you can influence the outcome.",
    quickAnswer: "AI engines recommend businesses by synthesizing entity signals: whether the business is a clearly defined entity, how consistently its facts appear across the web, how much authoritative third-party content references it, and how well its reputation signals (reviews, citations, mentions) align with the query. Strong signals in all four areas produce consistent recommendations.",
    publishedAt: "2026-05-07",
    readTime: "7 min read",
    image: "/images/website-blog-ai-engines-business-recommendations.png",
    content: `Ask ChatGPT to recommend a bookkeeping firm, and it will name two or three. It will not name yours unless something specific has happened to make it confident that yours belongs on the list. That confidence is not random. It is the output of a set of signals the engine can measure, and those signals are learnable.

This is the part most operators miss. AI recommendations feel like a black box, so people assume there's nothing to be done. There is a great deal to be done. You just have to understand what the machine is actually weighing.

## The Core Recommendation Signals

Across the major engines, the same handful of signals do the work. The weighting differs by platform, but the ingredients are consistent.

### Entity Authority

Before an engine can recommend you, it has to be certain you exist as a distinct thing. Entity authority is the degree to which an AI recognizes your business as a real, well-defined entity with a stable identity across the web. Businesses that live in the knowledge graph — with a Google Knowledge Panel, a Wikidata entry, consistent profiles — clear this bar easily. Businesses that are just a website with a logo often don't. If the engine isn't sure who you are, it won't risk naming you.

### Structured Data

Structured data (schema markup) is the machine-readable layer that states plainly what your business is, does, and serves. When an engine retrieves a page to answer a question, schema lets it extract facts cleanly instead of inferring them from prose. Clean extraction means confident citation. Missing schema means the engine has to guess — and cautious engines skip guesses.

### Citation Velocity

This is the modern heir to the backlink. Citation velocity measures how frequently and how recently credible third-party sources mention your business by name. Crucially, in the AI era, a mention counts even without a hyperlink. A recent surge of relevant, quality mentions signals to the engine that your business is active, relevant, and worth surfacing now.

### Review Signals

AI engines read reviews as live evidence of trust. It's not only the star rating — it's volume, recency, and sentiment across multiple platforms. A business with 200 reviews averaging 4.8, refreshed monthly, reads as a healthy operation. A business with 12 reviews from three years ago reads as dormant, regardless of how good it once was.

### Content Freshness

Engines favor sources that are current. Content updated regularly, dated clearly, and written to directly answer questions signals that your information can be trusted today. Stale content is a liability in a system that prizes recency.

## How the Platforms Differ

The signals are shared, but each engine emphasizes them differently.

**Perplexity** is retrieval-first and citation-obsessed. It leans hard on live web results and shows its sources explicitly. This makes citation velocity and clean, extractable content especially powerful for Perplexity visibility. If your pages answer the question directly and you're mentioned across credible sources, Perplexity finds you fast.

**ChatGPT** blends its training knowledge with live browsing. Its search layer, now used by hundreds of millions of people weekly, pulls fresh results, but its baseline answers still lean on what the model learned in training. This dual nature rewards businesses with both established entity recognition and a current, well-structured web presence.

**Google Gemini and AI Overviews** sit on top of Google's index and knowledge graph. Here, entity authority and structured data carry outsized weight, because Google already maintains a formal understanding of entities. If Google recognizes you as an entity and your schema is clean, you are well-positioned for Gemini and Overviews. The traditional Google trust signals — E-E-A-T, technical health — still feed this layer.

The throughline: optimize the shared signals and you improve across all three at once. Chase one platform's quirks and you build fragile visibility.

## What Operators Can Actually Do

Start by measuring reality. Ask each engine what it knows about your business and who it recommends in your category. Note where you're absent.

Then work the signals in order of leverage. Establish entity clarity first — consistent name, address, phone, and verified profiles everywhere. Implement structured data so engines can extract you cleanly. Build citation velocity through genuine third-party mentions: press, partnerships, directories, guest contributions. Keep reviews current across platforms. And maintain content that answers real questions and shows its freshness.

This is coordinated infrastructure work, not a one-time fix — which is exactly how we structure [our services](/services) at Hey Pearl.`,
    faq: [
    {
        "q": "Can I pay to be recommended by ChatGPT or Perplexity?",
        "a": "Not in the organic answer layer. These recommendations are earned through the signals above, not bought. Some platforms are testing ads, but the recommendations users trust most are the organic ones \u2014 and those respond to authority, not budget."
    },
    {
        "q": "Why does one engine recommend me and another doesn't?",
        "a": "Because they weight signals differently. If Perplexity names you but Gemini doesn't, you likely have strong live citations but weak entity recognition in Google's knowledge graph. The gap tells you where to work."
    },
    {
        "q": "How important are reviews really?",
        "a": "Very. Review recency and volume are among the clearest live-trust signals an engine can read. Consistent review activity often separates two otherwise similar businesses in AI recommendations."
    },
    {
        "q": "Do backlinks still matter?",
        "a": "Links still help, but the emphasis has shifted to mentions. AI engines can attribute authority to your business from an unlinked mention in a credible source. Volume and quality of mentions \u2014 linked or not \u2014 now drive citation velocity."
    },
    {
        "q": "How often do these engines update what they know?",
        "a": "The live retrieval layer updates constantly, so fresh signals can influence answers within days or weeks. The training layer updates on the model provider's schedule, so deeper recognition builds over months."
    },
    {
        "q": "Is this worth it if I only serve a small local market?",
        "a": "Often more so. Local queries are exactly where AI engines produce short, named recommendations \u2014 and local markets have fewer entities competing for entity authority. Clarity wins quickly at the local level."
    }
],
    conclusion: ``,
    internalLinks: [
    {
        "label": "See all our services",
        "href": "/services"
    },
    {
        "label": "Talk to us about your visibility",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of multiple semi-transparent screens displaying abstract AI response interfaces, hands resting near keyboard in foreground, warm ambient office lighting, bokeh background, premium editorial quality, realistic photography, no text, no logos",
    imageFilename: "website-blog-ai-engines-business-recommendations.png",
  },
  {
    slug: "what-is-geo-generative-engine-optimization",
    eyebrow: "GEO Foundations",
    seoTitle: "What Is GEO? A Business Owner's Guide to Generative Engine Optimization",
    metaDescription: "GEO is the discipline of getting your business surfaced and cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews. Here's what it is and how to start.",
    h1: "What Is GEO? A Business Owner's Guide to Generative Engine Optimization",
    excerpt: "Search stopped being a list of blue links. It became an answer. GEO is how you make sure the answer includes you.",
    quickAnswer: "GEO is the practice of building the structured authority signals — schema markup, entity consistency, citable content, and reputation depth — that cause AI engines like ChatGPT, Perplexity, and Google AI Overviews to cite and recommend your business. Unlike SEO, which targets click rankings, GEO targets the AI answers your customers now see first.",
    publishedAt: "2026-04-30",
    readTime: "8 min read",
    image: "/images/website-blog-geo-generative-engine-optimization.png",
    content: `The way people find businesses has quietly changed. A few years ago, a prospect typed a query into Google, scanned ten blue links, and clicked. Today, a growing share of those prospects never see the links at all. They ask ChatGPT, Perplexity, or Google's AI Overviews a question and receive a single synthesized answer — one that names a handful of companies and ignores everyone else.

Generative Engine Optimization, or GEO, is the discipline of making sure your business is one of the companies that gets named. If SEO was about ranking, GEO is about being cited.

## Why Traditional SEO Is No Longer Enough

SEO was built for a world of ranked results. You optimized a page, earned some links, and competed for position on a page of ten options. The user did the final work of choosing.

AI search collapses that model. When someone asks Perplexity for "the best commercial HVAC company in Austin," the engine doesn't hand back a page to browse. It returns an answer — often two or three named businesses with a short justification for each. As of early 2026, Google AI Overviews appear on well over half of informational searches, and roughly 60% of Google sessions now end without a click to any external site. The traffic that used to flow from position three or four has largely evaporated.

This is the uncomfortable part for operators: you can rank on page one of traditional Google and still be invisible to the AI layer sitting on top of it. Ranking and being cited are now two different games. GEO is the second game.

## How AI Search Engines Decide What to Surface

AI engines don't "rank" in the classic sense. They retrieve, reason, and synthesize. When a model builds an answer, it pulls from a mix of its training data, a live retrieval layer (real-time web results), and a set of trust signals that tell it which sources are safe to cite.

The practical implication is that these engines are looking for businesses they can confidently name without being wrong. They favor entities they recognize, sources that are consistent across the web, and content that directly and clearly answers the question being asked. Ambiguity is the enemy. A business that shows up under three different names, with inconsistent addresses and thin, marketing-heavy pages, is a business the model quietly leaves out — not out of malice, but out of caution.

### The Retrieval Layer vs. The Training Layer

It helps to separate two things. The training layer is what the model already "knows" from its last training cut. The retrieval layer is what it fetches live when it needs current information. GEO works on both: you want to be established enough that models recognize you from training, and clearly structured enough that live retrieval can extract and cite you accurately.

## The 5 Core GEO Signals

Across platforms, five signals do most of the heavy lifting.

**1. Entity authority.** Does the AI recognize your business as a distinct, real-world entity — not just a URL? Businesses with a defined identity across the web (consistent name, verified profiles, a knowledge graph presence) get cited far more often.

**2. Structured data.** Schema markup tells engines exactly what your business is, what it does, and where it operates. It removes guesswork, and AI engines reward the removal of guesswork.

**3. Citation velocity.** How often, and how recently, credible third-party sources mention your business by name. This is the modern successor to backlinks — mentions matter even without a link.

**4. Review signals.** Volume, recency, and sentiment of reviews across platforms. AI engines treat consistent, current review activity as evidence of a live, trustworthy operation.

**5. Content freshness and clarity.** Content that answers real questions plainly, is updated regularly, and is written to be extracted — not just skimmed.

## Practical First Steps

You don't need a full overhaul on day one. Start here.

First, audit your entity consistency. Search your business name across Google, your profiles, and directories. Fix every mismatch in name, address, and phone. This is unglamorous and it matters more than almost anything else.

Second, add or clean up your structured data. At minimum, implement Organization and, if you serve a location, LocalBusiness schema. Add FAQ schema to pages that answer common questions.

Third, test what the engines already say about you. Ask ChatGPT, Perplexity, and Gemini directly: "What do you know about [your business]?" and "Who are the best [your category] in [your market]?" The gap between what they say and what you'd want them to say is your GEO roadmap.

This is the work we do at [Hey Pearl through our GEO service](/services/geo) — building the authority infrastructure that makes a business legible to the machines now doing the recommending.`,
    faq: [
    {
        "q": "Is GEO just a rebrand of SEO?",
        "a": "No. They share DNA, but the objective is different. SEO optimizes for ranking in a list of links. GEO optimizes for being retrieved, trusted, and cited inside an AI-generated answer where there is no list to scroll."
    },
    {
        "q": "Do I need to abandon my SEO work?",
        "a": "Not at all. Strong SEO fundamentals \u2014 fast, crawlable, well-structured pages \u2014 remain the foundation. GEO builds on top of them. Think of it as adding a second layer, not replacing the first."
    },
    {
        "q": "How long does GEO take to show results?",
        "a": "Entity and structured-data improvements can influence AI answers within weeks, because retrieval is live. Deeper shifts \u2014 citation velocity and training-layer recognition \u2014 build over months. GEO is compounding, not instant."
    },
    {
        "q": "Which AI engine matters most for my business?",
        "a": "It depends on your audience, but you shouldn't optimize for just one. The underlying signals \u2014 entity clarity, structured data, citations, reviews \u2014 help you across ChatGPT, Perplexity, Gemini, and AI Overviews simultaneously."
    },
    {
        "q": "Can I do GEO myself?",
        "a": "The first steps, yes. Entity cleanup and basic schema are within reach for most operators. The harder work \u2014 sustained citation building, knowledge graph establishment, and cross-platform consistency at scale \u2014 is where most businesses bring in help."
    },
    {
        "q": "How do I know if GEO is working?",
        "a": "You measure it the way the engines see you: track how often you're named in AI answers for your key queries, monitor your citation footprint, and watch for referral traffic from AI platforms, which now appears distinctly in analytics."
    }
],
    conclusion: ``,
    internalLinks: [
    {
        "label": "Explore our GEO service",
        "href": "/services/geo"
    },
    {
        "label": "Schedule a strategy call",
        "href": "/contact"
    }
],
    imagePrompt: "Editorial photography of a business professional studying a glowing holographic network of interconnected nodes and data points floating above a sleek desk, natural window light from the left, muted warm tones, clean minimalist office environment, shallow depth of field, no text, no logos",
    imageFilename: "website-blog-geo-generative-engine-optimization.png",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
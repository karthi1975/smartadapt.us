# Tetradapt website

Marketing site for Tetradapt: patient-controlled hospital rooms and homes. Built with Next.js 14 (app router), TypeScript and Tailwind CSS, exported as a static website and served at https://smartadapt.us.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # builds the static site into dist/
npm start        # serves dist/ on http://localhost:8080, exactly as production does
npm run lint
```

## Publishing

Pushing to `main` deploys automatically to smartadapt.us on DigitalOcean App Platform. DigitalOcean runs `npm run build`, which exports the site as plain HTML, CSS and JS into `dist/`, then `npm start`, which serves `dist/` on port 8080. Keep those two scripts as they are.

## How it is organised

- `src/app/*/page.tsx`: one file per page. Pages compose components and read all facts from the content module.
- `src/content/`: the single source of truth for company facts, contacts, products and routes, stats (with scope and source), partners, publications, timeline, deployments, awards, CTAs, navigation and page metadata. Change a number here and it changes everywhere.
- `src/components/ui/`: primitives (Section, SectionHeading, Button, Card, StatGroup, StepList, SplitSection, LogoStrip, VideoEmbed, FaqList, LinkList, ContactChannels, Reveal, Icon).
- `src/components/sections/`: page blocks (PageHero, HomeHero, TwoTrackChooser, CTABanner).
- `src/components/forms/`: the contact form and its URL-driven variant.
- `src/components/layout/`: Header, Footer, SkipLink.
- `src/lib/`: the shared form schema, the Formspree sender and a class-name helper.

Design tokens live in `tailwind.config.js` (brand colours, fonts) and `src/components/ui/tokens.ts` (type scale). Fonts are Jost (display) and DM Sans (body) via `next/font`, bundled at build time.

Because the site is static, there is no server code: no API routes, and images are served as the files in `public/` (already compressed, about 6 MB in total).

## Content rules

- Facts, contacts, product names and routes come from `src/content`, never typed into a page.
- Every statistic carries its scope and source; `StatGroup` prints the source.
- A contact detail that has not been supplied is `null` and its row is hidden, never faked.
- Drafted copy carries a comment naming the client document it came from.

## Forms

See [FORMS.md](FORMS.md). The form sends straight from the browser to Formspree. Locally, `.env.local` logs submissions instead of sending them.

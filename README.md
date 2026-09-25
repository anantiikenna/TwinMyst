# TwinkMyst

**Turning Ideas Into Digital Reality.**

Digital creation studio website — websites, mobile apps, e-commerce, UI/UX & branding, AI creative media and digital products.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Sanity-ready architecture (patterns from Agent Template)
- Nodemailer contact forms with rate limiting + honeypot

## Develop

```bash
npm install
npm run dev
```

## Configure

Copy `.envs.example` to `.env.local` and fill SMTP values for live contact email.

## Quality gates

```bash
npx tsc --noEmit
npm run lint
npm run build
```

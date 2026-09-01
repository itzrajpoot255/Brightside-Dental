# Brightside Dental

This is my Project 3 submission for the CloudExify Full Stack Web Development internship (Month 2) — a landing page for a fictional dental clinic called **Brightside Dental**.

I went with the **Luxury Dental** build track: dark navy and gold, a full-width hero image, and serif headings for a more premium, editorial feel instead of the usual plain blue clinic template.

**Student Name:** Muhammad Rehan Khalid
**Registration Number:** CX-INT-2026-GEN-552
**Live link:** _(add your Vercel link here once deployed)_

## GitHub description

Paste this into the repo's "About" section on GitHub:

> A modern, fully responsive dental clinic landing page with a warm, premium feel — dark navy and gold accents, elegant serif headings, and a full-bleed hero. Built with HTML5, CSS3, vanilla JavaScript, and Bootstrap 5. Includes an animated stats counter, a draggable before/after slider, dark mode, and a booking form.

## Project structure

```
dental-clinic/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
└── README.md
```

Everything is plain HTML/CSS/JS — no build tools, no frameworks beyond Bootstrap 5 (loaded from a CDN), so it deploys to Vercel as a static site with zero config.

## What's on the page

- Sticky navbar with a dark contact/social bar above it, matching the clinic's brand
- Hero section with a full-width image and dark overlay
- 6 service cards (cleaning, whitening, braces, root canal, implants, cosmetic)
- Animated stats counter that counts up when you scroll to it (uses `IntersectionObserver`)
- About section with a doctor profile card
- A draggable before/after slider to compare treatment results — this was the fun one to build
- Testimonials carousel, auto-rotating
- Three pricing tiers with a "Most Popular" badge
- FAQ accordion
- Appointment booking modal with form validation (no backend, just front-end validation as the brief asked for)
- Contact section with an embedded Google Map, plus a footer

### Bonus stuff I added on top of the requirements
- Smooth scrolling + the nav link for the section you're currently viewing highlights automatically
- A second signature feature (the before/after slider) on top of the required stats counter
- Dark/light mode toggle, saved with `localStorage` so it remembers your choice on reload

## Running it locally

Just open `index.html` in a browser — that's it, nothing to install. If you want live-reload while editing, the VS Code "Live Server" extension works fine too.

## Deploying to Vercel

1. Push this folder to a new GitHub repo (name it something like `cloudexify-web-p3-yourname`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub (it's free).
3. Click **Add New Project**, import the repo.
4. Framework preset: **Other** — it's a static site, no build command needed.
5. Click **Deploy**. You'll get a live `.vercel.app` link within a minute.
6. Every future `git push` auto-redeploys, so the link always stays current.

## Before submitting

- [ ] Filled in name + registration number above
- [ ] Live Vercel link works (not just localhost)
- [ ] Checked it on mobile and desktop
- [ ] Added 2 screenshots (desktop + mobile) to the repo
- [ ] No errors in the browser console
- [ ] Messaged the PM: `[CX-INT-2026-GEN-552] Web Project 3 Done — GitHub: [link] | Live: [vercel link]`

## A note on the images

The images are placeholders from `placehold.co` so the project runs right out of the box without needing real photos — no sign-up, no API key. Swap the `src` links in `index.html` for your own images in the `assets/` folder if you want, just try to keep similar dimensions so nothing shifts around.

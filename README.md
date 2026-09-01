# 🦷 Brightside Dental

**A premium dental clinic landing page with a live appointment booking flow, an animated stats counter, and a draggable before/after slider — all from a single static site.**

Brightside Dental is a front-end marketing site built to look like a real dental clinic would actually pay for — a full-bleed hero, six services, live-counting stats, a before/after comparison slider you can drag, an appointment booking modal with real validation, and a dark/light theme that remembers your choice, all styled with a dark navy and gold "Luxury Dental" identity instead of the usual plain blue clinic template.

🔗 **Repository:** _(add your GitHub repo link here)_
🌐 **Live Demo:** _(add your Vercel link here once deployed)_

![Status](https://img.shields.io/badge/status-complete-brightgreen)
![Made with](https://img.shields.io/badge/made%20with-JavaScript-yellow)
![Framework](https://img.shields.io/badge/UI-Bootstrap%205-purple)
![Type](https://img.shields.io/badge/type-Frontend%20App-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔢 **Animated Stats Counter** | Patient count, years of experience, satisfaction rate and specialist count count up from zero the moment they scroll into view, using `IntersectionObserver` |
| 🖼️ **Before & After Slider** | Drag the handle (mouse or touch) to reveal treatment results side by side |
| 📅 **Appointment Booking Modal** | Name, phone, email, date, time slot and service type, with real client-side validation before it shows a confirmation |
| 🗓️ **Service Catalog** | 6 core services — cleaning, whitening, braces, root canal, implants, cosmetic dentistry — each with its own card |
| 💬 **Testimonials Carousel** | Auto-rotating patient reviews with star ratings |
| 💰 **Pricing Tiers** | Three plans (Basic / Standard / Premium) with a "Most Popular" badge on the recommended one |
| ❓ **FAQ Accordion** | Common questions, only one answer open at a time |
| 🧭 **Smooth Scroll + Active Nav** | Clicking a nav link scrolls smoothly, and the link for whatever section you're viewing highlights automatically |
| 🌗 **Dark / Light Mode** | Theme toggle with the choice remembered on return visits, via `localStorage` |
| 🗺️ **Contact + Map** | Clinic address, phone, email and hours, with an embedded Google Map |

---

## 🛠️ Tech Stack

- **Language:** Vanilla JavaScript (ES6)
- **UI Framework:** Bootstrap 5 (via CDN — no build step)
- **Icons:** Bootstrap Icons
- **Fonts:** Fraunces + Inter (Google Fonts)
- **Data storage:** Browser `localStorage` (theme preference only)
- **Interface:** Single-page static site, fully client-side

---

## 📂 Project Structure

```
dental-clinic/
├── index.html       # Page structure — navbar, hero, services, stats, about,
│                     #  before/after, testimonials, pricing, FAQ, modal, contact
├── css/
│   └── style.css     # Custom "Luxury Dental" theme (navy/gold tokens, cards, layout)
├── js/
│   └── script.js      # Stats counter, form validation, slider drag, nav highlight, theme toggle
├── assets/              # Add your own clinic photos here
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/cloudexify-web-p3-yourname.git
   cd cloudexify-web-p3-yourname
   ```

2. **Run it** — no install, no build step required. Either:
   - Open `index.html` directly in your browser, **or**
   - Serve it locally for the best experience:
     ```bash
     python3 -m http.server
     ```
     then visit `http://localhost:8000`

3. **Try it out** — scroll to trigger the stats counter, drag the before/after slider, book a test appointment (try submitting it empty first to see validation), flip through the testimonials, and toggle dark mode.

---

## 📸 Sample Output

Add your own desktop and mobile screenshots to a `screenshots/` folder and link them here, e.g. `screenshots/desktop.png` and `screenshots/mobile.png`.

---

## ⚠️ Known Limitations

- Appointment form is validated client-side only — there's no backend, so submissions aren't actually saved or emailed anywhere yet
- Images are placeholders from `placehold.co`, not real clinic photos
- Contact details, doctor name and address are placeholder/sample data
- Single clinic/location only — no multi-branch support

## 🗺️ Roadmap

- [ ] Connect a real backend to actually store and email appointment requests
- [ ] Replace placeholder images with real clinic photography
- [ ] Add a live chat widget (e.g. Tawk.to)
- [ ] Add a service filter on the services grid (filter by category)

---

## 👤 Author

**Muhammad Rehan Khalid**
Registration No. CX-INT-2026-GEN-552
CloudExify Full Stack Web Development Internship 2026 — Month 2, Project 3

---

## 📄 License

This project is licensed under the MIT License.

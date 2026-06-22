# ICCCMLA — Conference Website

Static website for the **IEEE International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA)**.

Each edition lives in its **own folder**, so future editions are easy to add and maintain without touching past ones.

## Structure

```
ICCCMLA/
├── 2026/        ← 8th edition · Germany · Oct 5–6, 2026  (current)
├── 2027/        ← add the next edition here (copy 2026 and update)
└── README.md
```

## The 2026 site

Plain **HTML / CSS / JS** — no build step, no dependencies. Open `2026/index.html`
in a browser, or serve the `2026/` folder with any static host.

- **Pages:** `index`, `about`, `call-for-papers`, `author-instructions`,
  `committee`, `registration`, `sponsors`, `contact`, `privacy`, `terms`, `refund`
- The **header, footer, and IEEE branding** are injected on every page by `2026/app.js`
  (single source of truth — edit nav/footer once).
- Styling in `2026/styles.css`; logos and brand assets in `2026/assets/`.

## Adding a new edition

1. Copy the latest edition folder: `cp -r 2026 2027`
2. In `2027/`, update: dates, venue, committee, fees, proceedings links, the
   IEEE Conference Record number, and the `canonical` / `og:` URLs.
3. Point the live domain at the new edition when ready.

## Deployment

Planned: **GitHub Pages → www.intdatacon.com** (to be configured).
For free GitHub Pages the repository must be **public**; a `CNAME` file with the
domain is added at the served root when the domain is connected.

## Contact

Organizers — `convenericccmla@gmail.com`

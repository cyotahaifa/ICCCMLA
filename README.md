# ICCCMLA — Conference Website

Static website for the **IEEE International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA)**.

## How it's organized

- **Repo root** = the **live, current edition**, served at clean URLs
  (`https://www.intdatacon.com/`, `/committee.html`, …).
- **`2026/`** = a frozen **archive copy** of the 2026 edition, also reachable at
  `https://www.intdatacon.com/2026/`.
- Each future edition keeps its own `YYYY/` archive folder; the **newest edition
  always lives at the root** so the domain shows it with clean URLs.

```
ICCCMLA/
├── index.html, *.html, app.js, styles.css, assets/   ← LIVE site (current edition)
├── 2026/                                              ← frozen 2026 archive (/2026/)
├── CNAME                                              ← www.intdatacon.com
└── README.md
```

## Editing the live site

Edit the files at the **repo root** — that's what visitors see. To keep the 2026
archive in sync after edits (optional during 2026, required before launching the
next edition so 2026 stays frozen):

```sh
cp *.html app.js styles.css robots.txt sitemap.xml 2026/
cp -r assets 2026/
```

## Launching the next edition (e.g. 2027)

1. Sync the current site into `2026/` (command above) to freeze the 2026 archive.
2. Update the **root** files for 2027 — dates, committee, fees, IEEE Conference
   Record number, and the `canonical` / `og:` URLs.
3. Commit & push. GitHub Pages redeploys automatically (~1 min).

## Stack

Plain **HTML / CSS / JS**, no build step. The header, footer, and IEEE branding are
injected on every page by `app.js` (single source of truth). Pages: `index`,
`about`, `call-for-papers`, `author-instructions`, `committee`, `registration`,
`sponsors`, `contact`, `privacy`, `terms`, `refund`.

## Deployment

**GitHub Pages → www.intdatacon.com** (custom domain via `CNAME`, HTTPS enforced).
`.nojekyll` makes Pages serve files as-is.

## Contact

Organizers — `convenericccmla@gmail.com`

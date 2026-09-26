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
├── programme/                                         ← session schedule (/programme/), see below
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

## The programme (`/programme/`)

`programme/` is the only part of the site with a **build step**, and the only part
whose source is deliberately **not in this repo**.

```
programme/
├── index.html                          hand-edited: layout, copy, presenter rules
└── assets/
    ├── programme-data-authors.js       GENERATED - never hand-edit
    ├── icccmla.css, fonts/             self-contained styling (no app.js here)
    └── ieee-logo.svg, ieee-germany.webp
```

### Where the real data lives

The master `programme-data.js` (full paper records **with author names and
affiliations**), the generator, the chair pages and the attendee/chair sheets all
live in `icccmla-2026-site/`, which `.gitignore` excludes. That folder has **never
been committed** and must not be — it holds personal data and the repo is public.
It exists only on the machine that maintains the programme, so keep a backup of it
outside this repo. Everything under `programme/` here is derived from it.

### Making a change

- **Page, wording, layout, CSS** → edit `programme/index.html` (or `assets/icccmla.css`),
  commit, push. Nothing else needed.
- **Sessions, papers, times, chairs, joining links** → edit the master
  `programme-data.js` in the private working copy, then regenerate:

  ```sh
  node build/make-author-data.js      # writes programme-data-authors.js
  ```

  Copy the result to `programme/assets/programme-data-authors.js`, commit, push.
  The generated file carries a `Built <date> from programme-data.js` header — if the
  header's date is older than your master edit, the site is stale.

Editing `programme-data-authors.js` directly appears to work and is then silently
overwritten by the next regenerate. Don't.

### What the generator strips

The author copy is public, so it carries **no author names and no affiliations** —
only `id`, `title`, `country`, `student`, `mode`, `track` per paper. Session
`chair`, `cochair` and `link` (joining link) exist in the schema but ship **empty**
until those are ready to be public. The page always renders the Chair and Join
rows: an empty value becomes a dashed fill-in rule (`.blank`), and an empty Join
adds "circulated before the conference". So filling these in is purely a data
change in the master — no page edit needed.

### Data shape

`programme-data-authors.js` assigns one global, `window.ICCCMLA`:

| Key | Contents |
|---|---|
| `meta` | Acronym, name, dates, mode, IEEE record, contact, links, timezone, `version` string shown on the page, `talk`/`qa` minutes |
| `zones` | Author time zones with offsets and paper counts, for the time-zone table |
| `tracks` | Per-track paper and session counts |
| `rooms` | Parallel room labels (currently 14) |
| `days` | One entry per conference day → `blocks` |

Each day holds `blocks` in clock order, typed `ceremony`, `break` or `sessions`; a
`sessions` block carries the parallel `sessions` for that slot, each with `num`,
`anchor`, `room`, `title`, `track`, `start`/`end`, `provisional`, and its `papers`.
Current edition: **56 sessions, 326 papers, 2 days**.

## Launching the next edition (e.g. 2027)

1. Sync the current site into `2026/` (command above) to freeze the 2026 archive.
2. Update the **root** files for 2027 — dates, committee, fees, IEEE Conference
   Record number, and the `canonical` / `og:` URLs.
3. Commit & push. GitHub Pages redeploys automatically (~1 min).

## Stack

Plain **HTML / CSS / JS**, no build step — except `programme/`, whose data file is
generated from a private working copy (see above). The header, footer, and IEEE
branding are injected on every page by `app.js` (single source of truth). Pages:
`index`, `about`, `call-for-papers`, `author-instructions`, `committee`,
`registration`, `sponsors`, `contact`, `privacy`, `terms`, `refund`.

## Deployment

**GitHub Pages → www.intdatacon.com** (custom domain via `CNAME`, HTTPS enforced).
`.nojekyll` makes Pages serve files as-is.

## Contact

Organizers — `convenericccmla@gmail.com`

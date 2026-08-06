# Esther Wanjiku Maina — Portfolio

## Folder structure

```
├── index.html
├── about.html
├── styles/
│   └── main.css
└── assets/
    ├── images/
    │   ├── portrait.jpg              ← About page photo
    │   └── projects/
    │       ├── coffee-geomapping.jpg
    │       ├── crop-monitoring.jpg
    │       ├── flood-risk.jpg
    │       └── space-innovation.jpg
    └── resume/
        └── Esther-Maina-Resume.pdf
```

## Adding your photos

Just drop a file at the matching path above using that **exact filename** — no HTML
or CSS edits needed. Each image frame checks for its file automatically:

- If the file exists, it fades in with a subtle satellite-imagery colour cast that
  clears on hover.
- If the file isn't there yet, the dashed placeholder keeps showing, so the site
  never breaks while you're still gathering photos.

Recommended sizes:
- `portrait.jpg` — roughly 800 × 1000px (portrait orientation)
- project photos — roughly 1600 × 1000px (16:10), landscape

## Adding your résumé

Drop your PDF at `assets/resume/Esther-Maina-Resume.pdf` (exact name) and the
"Download résumé" button on the homepage will work immediately.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server,
e.g. `npx serve .` from this directory.

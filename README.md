# JV HSA Medical Data Hub Demo

This is a safe split-file prototype generated from:

```text
D:/jv-diabetes-hub/index.html
```

The live deploy folder is untouched. This demo is for testing whether the site can move from one large HTML file into a cleaner folder structure and grow into the broader JV HSA Medical Data Hub.

For short, we are calling this folder the **demo** while it is still being tested and rebuilt. Its full folder name is:

```text
D:/jv-domain-demo/
```

## Demo Structure

```text
D:/jv-domain-demo/
  index.html
  assets/
    images/
    maps/
  articles/
  csv/
  css/
    styles.css
    pages/
      dashboard.css
      a1c.css
      epi2025.css
      vision-loss.css
      amputation.css
  js/
    app.js
    data/
      a1c-data.js
      epi2025-data.js
      sparcs2024-data.js
      vision-loss-data.js
      amputation-data.js
    charts/
      a1c-charts.js
      vision-loss-charts.js
      amputation-charts.js
```

## What Works Now

- `index.html` contains the page structure.
- `index.html` now includes a Diabetes section homepage and a Diabetes dropdown that groups Dashboard, SPARCS 2024, A1C, EPI 2025, Research Articles, Hispanics, and Rx Data.
- `css/styles.css` contains the extracted site CSS from the original HTML.
- `js/app.js` contains the extracted site JavaScript from the original HTML.
- `articles/` and `csv/` are copied into this demo so PDF and CSV links can work locally.

## Future Split

The page-specific CSS, data, and chart files are currently placeholders. They are loaded by `index.html` so the structure is ready, but the working logic still lives in `css/styles.css` and `js/app.js`.

Recommended next split:

```text
css/pages/a1c.css          -> A1C-only styles
js/data/a1c-data.js        -> A1C data objects
js/charts/a1c-charts.js    -> A1C chart functions
```

Then repeat for:

```text
SPARCS 2024
EPI 2025
Vision Loss
Amputation
```

## Important

This folder is a workflow demo. Do not push this folder to GitHub/Vercel unless you intentionally decide to replace the current live site structure.

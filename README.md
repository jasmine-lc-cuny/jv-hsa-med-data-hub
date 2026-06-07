# jv-med-hub

This repository contains the public website files for the JV HSA Medical Data Hub.

Live website:

```text
https://jv-hsa-med-data-hub.org
https://www.jv-hsa-med-data-hub.org
```

## Local Project Folder

```text
D:\jv-hsa-med-data-hub.org\jv-med-hub
```

## Project Structure

```text
jv-med-hub/
  index.html
  README.md
  articles/
  assets/
    maps/
  css/
    styles.css
    pages/
      dashboard.css
      a1c.css
      epi2025.css
      vision-loss.css
      amputation.css
  csv/
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

## What This Site Includes

- Public health dashboards and data storytelling.
- Diabetes, A1C, SPARCS 2024, EPI 2025, Research Articles, Hispanic/Latino articles, CDC Demo, and related resource sections.
- Local article PDFs stored in `articles/`.
- CSV files stored in `csv/`.
- Website styling stored in `css/`.
- Website scripts and chart data stored in `js/`.
- Map and image assets stored in `assets/`.

## Update Workflow

Use this folder when editing the live website:

```powershell
cd D:\jv-hsa-med-data-hub.org\jv-med-hub
git status
git add index.html articles assets css csv js README.md .gitignore
git status
git commit -m "Update jv-med-hub"
git push
```

After pushing to GitHub, Vercel should redeploy the live site automatically.

## Notes

The folder name for the active website is `jv-med-hub`.

Local backup files should stay outside this folder unless they are meant to be published.

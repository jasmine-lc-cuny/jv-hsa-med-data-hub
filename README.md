# JV Diabetes Hub

Static public health analytics website for diabetes data, research articles, A1C evidence, SPARCS hospital data, EPI 2025 charts, Rx data, tools, and reference sources.

## Site

Site title:

```text
JV Diabetes Public Health Analytics Hub - Turning Diabetes Data Into Action
```

## Deploy Folder

This folder is the clean GitHub/Vercel deploy folder:

```text
D:/jv-diabetes-hub
```

Keep this folder focused on files the live website needs:

```text
D:/jv-diabetes-hub/
  index.html
  articles/
  csv/
  .gitignore
  README.md
```

Vercel serves `index.html` as the website homepage.

## Workflow Folder

Drafts, backups, documentation, Deepnote work, Power BI files, Tableau files, and notes should stay outside the deploy folder:

```text
D:/jv-diabetes-hub-workflow/
  Backup-Index/
  Deepnote/
  Hub-Build-Documentation/
  Power-Bi/
  Tableau/
  Update-jv-diabetes-hub-INDEX.txt
```

This keeps GitHub/Vercel from receiving private drafts or backup files by accident.

## Main Website Files

- `index.html` - live website page
- `articles/` - local PDF article assets and article source-link text files
- `csv/` - local CSV datasets and CSV source-link text files
- `.gitignore` - prevents workflow/backups/local junk from being added to Git
- `README.md` - this project note

## Safe Git Commands

Use this when only the website HTML changed:

```powershell
cd D:/jv-diabetes-hub/
git add index.html
git status
git commit -m "Update site"
git push
```

Use this when article PDFs, article folders, CSV files, or CSV folders changed:

```powershell
cd D:/jv-diabetes-hub/
git add -A articles csv
git status
git commit -m "Update article and CSV assets"
git push
```

Use this when both `index.html` and assets changed:

```powershell
cd D:/jv-diabetes-hub/
git add index.html articles csv
git status
git commit -m "Update site assets"
git push
```

Avoid plain `git add -A` unless you intentionally want to include every changed or untracked file.

## Before Committing

Check exactly what Git is about to commit:

```powershell
cd D:/jv-diabetes-hub/
git status
git diff --cached --name-only
```

Files listed under `Untracked files` are not committed unless they are added.

## Deployment

GitHub is connected to Vercel. After `git push`, Vercel should automatically deploy the latest `main` branch.

Porkbun points the domain to Vercel. Porkbun usually does not need changes for normal website updates.

## Vercel Deployment

Deploy from PowerShell:

```powershell
cd D:/jv-diabetes-hub/
vercel
```

Deploy to production from PowerShell:

```powershell
cd D:/jv-diabetes-hub/
vercel --prod
```

No build command is required for this static HTML site.

## Domain

Domain:

```text
jv-hsa-med-data-hub.org
```

Registrar/DNS:

```text
Porkbun, DNS powered by Cloudflare
```

DNS records configured in Porkbun:

```text
A      @     76.76.21.21
CNAME  www   cname.vercel-dns.com
```

Email forwarding records were kept:

```text
MX   fwd1.porkbun.com
MX   fwd2.porkbun.com
TXT  v=spf1 include:_spf.porkbun.com ~all
```

The old Porkbun parking records pointing to `pixie.porkbun.com` were removed.

## Custom Domain Verification

After Vercel setup is complete, add and verify the custom domain in Vercel for the deployed project:

```text
jv-hsa-med-data-hub.org
www.jv-hsa-med-data-hub.org
```

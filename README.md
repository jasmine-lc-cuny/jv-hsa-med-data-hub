# JV Diabetes Public Health Analytics Hub

Static HTML site prepared for Vercel deployment.

## Project Root

The deployable project root is:

```text
D:\codex\jv-diabetes-hub
```

Keep `index.html` in this folder. Vercel serves it as the homepage.

## Files

- `index.html` - Vercel entry page for the live site
- `README.md` - this project note
- `.gitignore` - ignores local Vercel metadata

## Deploy With Vercel CLI

From this folder:

```powershell
cd D:\codex\jv-diabetes-hub
vercel
```

For production:

```powershell
vercel --prod
```

No build command is required for this static HTML site.

## Update With GitHub

After GitHub is connected to Vercel, update the live site by editing `index.html`, then running:

```powershell
cd D:\codex\jv-diabetes-hub
git add index.html
git commit -m "Update site"
git push
```

## Setup Archive

Archive, notes, screenshots, and setup documentation are stored outside the deploy repo at:

```text
D:\setup-jv-diabetes-hub
```

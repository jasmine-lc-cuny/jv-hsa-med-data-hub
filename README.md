# JV Diabetes Public Health Analytics Hub

Static HTML site prepared for Vercel deployment.

## Files

- `index.html` - Vercel entry page copied from `jv-diabetes-hub-5-20-26.html`
- `jv-diabetes-hub/` - organized project support folder with archive, notes, and setup documentation
- `jv-diabetes-hub/archive/jv-diabetes-hub-5-20-26.html` - original dated export
- `jv-diabetes-hub/setup/DEPLOYMENT-GUIDE.md` - full Porkbun, Vercel, GitHub, and PowerShell setup guide

## Deploy With Vercel CLI

From this folder:

```powershell
cd D:\codex
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
git add index.html
git commit -m "Update site"
git push
```

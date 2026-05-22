# JV Diabetes Hub Deployment Guide

This guide documents the full setup used for the JV Diabetes Public Health Analytics Hub:

```text
https://jv-hsa-med-data-hub.org
https://www.jv-hsa-med-data-hub.org
```

The local project folder is:

```text
D:\codex
```

## 1. Folder Layout

The live Vercel site is served from the root of `D:\codex`.

Keep these files at the root:

```text
D:\codex\index.html
D:\codex\README.md
D:\codex\.gitignore
```

Supporting files are organized here:

```text
D:\codex\jv-diabetes-hub
```

Current support folders:

```text
D:\codex\jv-diabetes-hub\archive
D:\codex\jv-diabetes-hub\notes
D:\codex\jv-diabetes-hub\setup
```

Important:

```text
index.html must stay at D:\codex\index.html unless Vercel project settings are changed.
```

## 2. Prepare The Static Site

The original exported HTML file was:

```text
jv-diabetes-hub-5-20-26.html
```

Vercel expects a static homepage to be named:

```text
index.html
```

So the original file was copied to:

```text
D:\codex\index.html
```

PowerShell command used:

```powershell
Copy-Item -LiteralPath 'D:\codex\jv-diabetes-hub-5-20-26.html' -Destination 'D:\codex\index.html' -Force
```

The original dated export is now stored here:

```text
D:\codex\jv-diabetes-hub\archive\jv-diabetes-hub-5-20-26.html
```

## 3. Porkbun DNS Setup

Domain:

```text
jv-hsa-med-data-hub.org
```

Registrar:

```text
Porkbun
```

DNS provider shown in Porkbun:

```text
DNS Powered by Cloudflare
```

### Records Removed

The domain originally had Porkbun parking records pointing to:

```text
pixie.porkbun.com
```

These web parking records were removed:

```text
ALIAS  @   pixie.porkbun.com
CNAME  *   pixie.porkbun.com
```

### Records Added

For the root domain:

```text
Type: A
Host: @
Value: 76.76.21.21
TTL: 600
```

For the `www` domain:

```text
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 600
```

### Records Kept

The email forwarding records were kept:

```text
MX   @   fwd1.porkbun.com   priority 10
MX   @   fwd2.porkbun.com   priority 20
TXT  @   v=spf1 include:_spf.porkbun.com ~all
```

Do not delete the MX or TXT records unless you intentionally want to change email forwarding.

## 4. Install And Log In To Vercel CLI

PowerShell blocked `npx` because scripts were disabled:

```text
npx.ps1 cannot be loaded because running scripts is disabled on this system
```

The workaround was to use `.cmd` commands:

```powershell
npm.cmd install -g vercel
vercel.cmd login
```

Vercel opened a browser authorization page. After clicking Allow, the CLI login succeeded.

## 5. Deploy To Vercel From PowerShell

From the project folder:

```powershell
cd D:\codex
vercel.cmd --prod
```

Vercel setup answers used:

```text
Which team? jasmine-lc-cuny's projects
Link to existing project? yes
No existing projects found, creating new project
Name? jv-hsa-med-data-hub
Customize settings? no
Change additional project settings? no
```

The project was linked as:

```text
jasmine-lc-cunys-projects/jv-hsa-med-data-hub
```

Vercel created:

```text
https://jv-hsa-med-data-hub.vercel.app
```

The production deployment was verified by checking that the page returned status `200` and contained:

```html
<title>JV Diabetes Public Health Analytics Hub</title>
```

## 6. Add Custom Domains To Vercel

From the linked project folder:

```powershell
cd D:\codex
vercel.cmd domains add jv-hsa-med-data-hub.org
vercel.cmd domains add www.jv-hsa-med-data-hub.org
```

Both were added successfully to:

```text
jv-hsa-med-data-hub
```

The live custom domains were then verified:

```text
https://jv-hsa-med-data-hub.org
https://www.jv-hsa-med-data-hub.org
```

Both returned status `200` with the correct page title.

## 7. Git Setup

Git was initialized in:

```text
D:\codex
```

Commands used:

```powershell
cd D:\codex
git init
git add index.html README.md
git commit -m "Initial deploy of diabetes hub"
git branch -M main
```

The first remote used a placeholder and failed:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/jv-hsa-med-data-hub.git
git push -u origin main
```

Error:

```text
Repository not found.
fatal: repository 'https://github.com/YOUR-USERNAME/jv-hsa-med-data-hub.git/' not found
```

The fix was to create the real GitHub repository:

```text
https://github.com/jasmine-lc-cuny/jv-hsa-med-data-hub
```

Then update the local remote:

```powershell
git remote set-url origin https://github.com/jasmine-lc-cuny/jv-hsa-med-data-hub.git
git push -u origin main
```

After authentication, Git showed:

```text
branch 'main' set up to track 'origin/main'
Everything up-to-date
```

## 8. Connect GitHub To Vercel

In Vercel, go to the project:

```text
jv-hsa-med-data-hub
```

On the project Overview page, click:

```text
Connect Git
```

Connect this GitHub repository:

```text
jasmine-lc-cuny/jv-hsa-med-data-hub
```

If Vercel asks for build settings for this static site:

```text
Framework Preset: Other
Build Command: leave blank
Output Directory: leave blank or .
Install Command: leave blank
Root Directory: ./
```

After Git is connected, pushing to the `main` branch should redeploy the production site automatically.

## 9. Normal Update Workflow

Edit:

```text
D:\codex\index.html
```

Then run:

```powershell
cd D:\codex
git status
git add index.html
git commit -m "Update site"
git push
```

Vercel should automatically deploy the new commit.

## 10. Manual Deploy Backup Option

If GitHub auto-deploy is not working, use the Vercel CLI manually:

```powershell
cd D:\codex
vercel.cmd --prod
```

## 11. Check The Live Site

Browser links:

```text
https://jv-hsa-med-data-hub.org
https://www.jv-hsa-med-data-hub.org
https://jv-hsa-med-data-hub.vercel.app
```

PowerShell check:

```powershell
(Invoke-WebRequest -UseBasicParsing -Uri 'https://jv-hsa-med-data-hub.org').StatusCode
```

Expected:

```text
200
```

## 12. What To Commit

Recommended files to commit:

```text
index.html
README.md
.gitignore
jv-diabetes-hub/setup/DEPLOYMENT-GUIDE.md
```

Optional files:

```text
jv-diabetes-hub/archive/jv-diabetes-hub-5-20-26.html
jv-diabetes-hub/notes/codex-conversation-notes-2026-05-22.md
```

Screenshots are useful locally, but they do not need to be committed unless you want them stored in GitHub.

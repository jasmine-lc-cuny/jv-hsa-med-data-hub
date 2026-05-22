# Codex Conversation Notes - May 22, 2026

## Project Folder

Current working folder for the site:

```text
D:\codex
```

Files prepared:

```text
D:\codex\jv-diabetes-hub-5-20-26.html
D:\codex\index.html
D:\codex\README.md
```

`index.html` was copied from `jv-diabetes-hub-5-20-26.html` so Vercel can serve it as the static site entry page.

## Site

Site title:

```text
JV Diabetes Public Health Analytics Hub
```

The HTML appears self-contained, with external dependencies for Google Fonts and Chart.js. No missing local image or asset folder references were found during the scan.

## Vercel Deployment

Deploy from PowerShell:

```powershell
cd D:\codex
vercel
```

Production deploy:

```powershell
vercel --prod
```

The Vercel CLI did not appear to be installed or available in the terminal when checked.

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

## Next Step

After Vercel setup is complete, add and verify the custom domain in Vercel for the deployed project:

```text
jv-hsa-med-data-hub.org
www.jv-hsa-med-data-hub.org
```

DNS propagation may take a few minutes or longer.

## Handshake / Hedgehog Notes

Project Hedgehog - Evals key points discussed:

- Pay rate shown in project terms: `$17/hour`
- Work location requirement: United States and U.S. territories
- Maximum weekly time: `40 hours/week` unless prior written approval is received
- Workflow: claim tasks in Handshake AI, complete work in Multimango, log time in Handshake AI
- Announcement said pay is now based on active tasking time in Multimango, not manually logged Handshake AI time
- Confidentiality matters: do not share customer names, platform screenshots, videos, or confidential project content

## H2H Evals Onboarding Notes

Rubric reminders:

- Instruction Following should be judged against every distinct prompt requirement
- Visual Quality focuses on sharpness, anatomy, lighting, color, proportions, and artifacts
- Less AI Generated focuses on AI tells such as malformed details, unnatural symmetry, repeating artifacts, or physically impossible features
- Overall Preference can use all criteria, but should still be grounded in the prompt
- Ties should be reserved for genuinely equal outputs

Specific calibration corrections discussed:

- For the pie chart pattern scenario, Image A was preferred because it better filled the area edge-to-edge as a seamless repeating pattern; Image B had fewer pies and more empty grid space
- For the Scrabble scenario, both images were bad because they spelled `PHOTOOGRAPHY` instead of `PHOTOGRAPHY`

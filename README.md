# Hamza Ahmad — AI/ML Engineer Portfolio

A 4-page static site (Home, Projects, About, Contact). No build step, no framework, no backend — pure HTML/CSS/JS, so it deploys anywhere for free.

## File structure
```
index.html          → Home (hero, live architecture diagram, featured project, skills)
projects.html        → Project case studies (CVD system, PashtoSenti)
about.html            → Education, certifications, leadership
contact.html          → Contact info + form (opens email client on submit)
css/                  → base.css (shared) + one file per page
js/
  main.js             → nav toggle, scroll reveal, active nav state
  diagram.js           → interactive architecture diagram tooltips
assets/
  Hamza_Ahmad_Resume.pdf → linked from the "Download Résumé" buttons
```

## Before you deploy

1. **Resume download link** — `index.html` and `about.html` link to `/assets/Hamza_Ahmad_Resume.pdf`. The file is already in `assets/`. If you update your resume later, just replace that file (keep the same name) and the links keep working.

2. **Contact form** — Currently set up as a `mailto:` link (zero setup, opens the visitor's email client with the message pre-filled). If you want messages to land in your inbox without the visitor needing an email client open, sign up free at [formspree.io](https://formspree.io), get a form endpoint, and I can wire it in — just ask.

3. **LinkedIn link** — Already pointed at your profile in the footer and About page.

## How to deploy for free

### Option A: GitHub Pages (recommended, most reputable for a dev portfolio)
1. Create a GitHub repo (e.g. `hamza-portfolio`)
2. Upload all these files to the repo root
3. Go to repo **Settings → Pages → Source**, select the `main` branch, root folder
4. Your site goes live at `https://<your-username>.github.io/hamza-portfolio/`
5. You can later attach a custom domain in the same Pages settings panel

### Option B: Netlify or Vercel (also free, slightly easier drag-and-drop)
1. Go to [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com), sign up free
2. Drag the whole project folder onto their dashboard ("Deploy manually" / drag-and-drop)
3. Live in under a minute, with a free `*.netlify.app` or `*.vercel.app` subdomain
4. Custom domains attach for free in their dashboard too

Both options auto-provision free HTTPS, so you don't need to do anything extra for SSL.

# Profectify — Group website

Static HTML site for [profectify.com](https://profectify.com/). No build step; every file is served as-is.

## Structure

```
index.html        Home
services.html     Consulting (HR · Business · Rent-a-CTO)
work.html         Portfolio — all 9 brands
about.html        Group story
contact.html      Contact form (mailto)
404.html          Branded 404
assets/css/       Stylesheet
assets/js/        Nav toggle + reveals
```

## Editing

- Brand copy lives inline in `work.html` and `index.html`.
- Consulting copy lives in `services.html` and a shorter teaser in `index.html`.
- Pillar colors are CSS variables in `assets/css/style.css` (`--edu`, `--kids`, `--ai`, `--saas`). Changing one updates every matching card and footer column.

## Deploying to GitHub Pages

1. Push to `main`.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `root`.
3. To use the custom domain, add `profectify.com` in the Pages settings — GitHub will create a `CNAME` file automatically. Add the DNS records (apex `A` records + `www` `CNAME`) at your registrar.

## Notes

- `.nojekyll` is included so GitHub Pages serves files untouched (no Jekyll processing).
- All outbound links to portfolio brands open in a new tab (`rel="noopener"`).
- The contact form uses `mailto:` — no third-party form handler is wired up.

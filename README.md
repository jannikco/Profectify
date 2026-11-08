# Profectify — venture studio website

English and Danish static website. Publication approved by the user on 8 November 2026.

## Preview

```sh
python3 scripts/build.py
python3 -m http.server 8462 --bind 127.0.0.1
```

Open http://127.0.0.1:8462/ (English) or http://127.0.0.1:8462/da/ (Danish).

## Edit and build

- `scripts/build.py`: shared page templates, navigation and English/Danish copy.
- `data/portfolio.json`: the shared product catalogue, descriptions, links and featured flags.
- `assets/css/style.css` and `assets/js/main.js`: responsive styling, menu and portfolio filters.
- Run `python3 scripts/build.py` after editing templates or catalogue data. Commit the generated HTML alongside its source. There is no runtime build, JavaScript framework or backend dependency.
- English pages retain their original `.html` routes. Danish pages live under `/da/`. Root-relative assets assume deployment at the existing custom domain root.
- `output/PORTFOLIO-REVIEW.md` documents candidates, exclusions, naming and redirects. `data/link-audit.json` records the public destination checks.

## Behaviour

The portfolio has category and text filtering with shareable URL parameters and a live result count. Language switching preserves the current page and portfolio filter state. With JavaScript unavailable, all portfolio cards and regular desktop links remain available. The mobile menu is progressively enhanced; the noscript style exposes navigation.

Contact links open the visitor's email application. They do not send mail or claim a successful submission. No analytics, cookies, external fonts, paid service or tracking code has been added.

## Assets

The HeyMadeIt editor image and HeyBrainey mark are copied from the group's product repositories. Other product visuals are original HTML/CSS illustrations; they do not claim to be screenshots. Inter fonts are self-hosted, with the SIL Open Font License in `assets/fonts/OFL.txt`.

## Validation and approval

Browser screenshots and validation output live under the ignored `output/playwright/` folder. Checks cover all 12 pages, English/Danish, mobile/tablet/desktop overflow, local links/assets, WCAG A/AA automated checks, portfolio search/filter/empty state, mobile-menu Escape and focus, reduced motion and email links. Automated accessibility checks supplement visual and keyboard review; they are not certification.

For future changes, obtain explicit user approval of the preview before publication. The initial redesign was approved for publication on 8 November 2026. The current live site is GitHub Pages from `main` at the repository root. Once approval is given, publish only the reviewed revision, keep `CNAME` and `.nojekyll`, and verify the live English/Danish routes and asset loading. The previous deployed commit is the rollback point. Keep ignored review notes and browser artifacts out of the upload.

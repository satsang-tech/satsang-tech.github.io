# Satsang Technology

Public website and app privacy policies: https://satsang-tech.github.io/

The studio content and shared design were migrated from https://satsangtechnology.in/
on October 11, 2026. All five source pages are included:

- Home: `index.html`
- Services: `services.html`
- Work: `portfolio.html`
- About: `about.html`
- Contact: `contact.html`

`apps.html` retains the existing app descriptions and support information, with
links from the homepage and every page's header and footer. Policy wording and
public URLs are unchanged. Each policy page shares the website navigation and
includes explicit return links at the bottom.

- Keepsake: https://satsang-tech.github.io/keepsake/privacy-policy.html
- Watchover: https://satsang-tech.github.io/watchover/privacy-policy.html
- WishApp: https://satsang-tech.github.io/wishapp/privacy-policy.html

GitHub Pages publishes the root of main automatically. Edit the HTML files and push to main to update the site. The .nojekyll file serves the static files directly.

This repository contains public website content only. Do not commit app credentials, private keys, personal data or application builds here.

## Contact form

The source site's contact API allows `https://satsangtechnology.in` but rejects
`https://satsang-tech.github.io` (confirmed using OPTIONS requests without sending
a message). On this static site, the form prepares a `mailto:` draft locally.
Visitors open their email app, review the draft, and send it themselves. Nothing
is submitted by the website. Direct email and telephone links remain available.
JavaScript-disabled visitors can use the direct email links.

## Shared assets

All nine pages share the same header, footer, typography, colors, content grid,
page introductions and spacing rules in `style.css`. Policy articles use a
narrower reading width within the shared grid. `main.js` handles the mobile menu
and email draft preparation. No build is required.

Fraunces, Inter and IBM Plex Mono are self-hosted in `assets/fonts/`, with their
OFL licenses. No page requests a third-party font or script. HTML references to
the stylesheet and script include a version query to prevent stale cached assets
from being combined with updated markup; update it when changing shared assets.

## Migration verification — October 11, 2026

- Re-fetched all five source pages, CSS and JavaScript and confirmed they match
  the downloaded originals.
- Compared the complete main text, page titles, descriptions, navigation, form
  field labels and footer content against the source. Differences are limited to
  the documented app links and email-draft adaptation, plus accessibility markup.
- Confirmed the three existing privacy documents were byte-for-byte unchanged
  during the initial migration, and the app descriptions and support details
  were retained. The subsequent layout update preserves their complete wording.
- Checked every local page/asset link, fragment, page heading and element ID.
- Checked all six studio/app-directory pages at 1440px and 390px with no horizontal
  overflow. Verified the mobile menu, Escape key, required form fields, special
  characters in drafts and invalidation of a draft after editing. No email was sent.

## Layout consistency review — October 11, 2026

- Replaced the separate privacy-page design with the shared website design and
  added Apps & privacy to every main menu.
- Standardized heading alignment and scale, horizontal margins, section gaps,
  card layout, mobile navigation and footer placement across all nine pages.
- Compared all main content against the preceding published version. Policy
  wording and studio/app information remain unchanged; the hosting note now
  correctly describes locally hosted fonts, and stray email separators were removed.
- Verified identical header/footer structure, local links, fragments, unique IDs,
  one primary heading per page and all bundled font assets.
- Checked all nine pages at 320, 390, 768, 1024 and 1440 pixels: 45 combinations
  without horizontal overflow or clipped text, with matching heading alignment
  and no blank gap above the footer. Visually reviewed desktop and mobile layouts.
- Rechecked the privacy-page mobile menu, Escape key, return to Home and contact
  draft preparation/invalidation. No browser errors and no email sent.

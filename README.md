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
links from the homepage and every studio footer. The existing policy documents
and their public URLs are unchanged.

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

`style.css` preserves the source palette, typography and responsive layout, with
small accessibility and overflow fixes. `main.js` handles the mobile menu and
email draft preparation. Studio pages use the source Google Fonts links; app
privacy documents remain standalone and use system fonts. No build is required.

## Migration verification — October 11, 2026

- Re-fetched all five source pages, CSS and JavaScript and confirmed they match
  the downloaded originals.
- Compared the complete main text, page titles, descriptions, navigation, form
  field labels and footer content against the source. Differences are limited to
  the documented app links and email-draft adaptation, plus accessibility markup.
- Confirmed the three existing privacy documents are byte-for-byte unchanged,
  and the existing app descriptions and support details are retained.
- Checked every local page/asset link, fragment, page heading and element ID.
- Checked all six studio/app-directory pages at 1440px and 390px with no horizontal
  overflow. Verified the mobile menu, Escape key, required form fields, special
  characters in drafts and invalidation of a draft after editing. No email was sent.

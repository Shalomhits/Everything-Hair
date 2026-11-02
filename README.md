# Everything Hair — WEDE5020 Website Project

A responsive multi-page hair product catalogue and enquiry website built with HTML5, CSS3 and vanilla JavaScript. This project follows the supplied Everything Hair proposal and is prepared for Part 3 assessment and GitHub Pages deployment.

## Pages
- `index.html` — home page, collection categories and calls to action.
- `about.html` — brand story and values.
- `products.html` — product catalogue with search, category filters, sorting and image lightbox.
- `enquiry.html` — accessible enquiry form with client-side validation and user-controlled email draft.
- `faq.html` — accessible FAQ accordions and inspiration gallery lightbox.
- `contact.html` — contact pathways and links to relevant pages.

## Run locally
Open the project root in VS Code and use Live Server on `index.html`. Do not open a nested folder that omits `css_assets`, `js_assets` or `_images`.

## Main features
- Consistent responsive visual design, based on the proposal's rose-gold, blush, warm-gold and charcoal palette.
- Shared responsive CSS and JavaScript.
- Mobile navigation with keyboard dismissal and current-page indication.
- Searchable, filterable and sortable product collection.
- Accessible image lightbox for products and gallery.
- FAQ accordion interactions.
- Client-side enquiry validation, inline errors, query-string product prefill, and email-draft preparation.
- Semantic landmarks, single H1 per page, descriptive image alternatives, keyboard focus styles, skip link and reduced-motion handling.
- Page-specific title tags, descriptions, keyword metadata and Open Graph descriptions.
- `robots.txt` and `sitemap.xml` templates.
- Project documentation: `CHANGELOG.md`, `REFERENCES.md`, `PART2_AUDIT_REPORT.md`, `PART3_PROCESS.md`, `TEST_REPORT.md` and `DEPLOYMENT_NOTES.md`.

## Important functional limits
This is a static catalogue and enquiry prototype. It does not process payment, confirm stock, create an order, store personal data or submit form data to a server. The enquiry form prepares a `mailto:` draft for the visitor to review and send. No recipient is hard-coded because a verified business email address was not provided. Add a real endpoint/recipient and server-side validation before production use.

## SEO and publication
The sitemap and robots file include a placeholder domain. Replace it with the final GitHub Pages or verified custom domain before publishing. Canonical URLs are not included until the live URL is confirmed. Off-page SEO and social profile integration require verified business URLs and cannot be fabricated.

## Audit status
Static-source and package checks have been prepared, but live browser testing and exact Part 2 feedback verification must be completed. See `TEST_REPORT.md` and `PART2_AUDIT_REPORT.md`. No grade guarantee is made.

## References
See `REFERENCES.md` for technical references and image provenance caveat.

## Changelog
See `CHANGELOG.md` for the detailed implementation record.

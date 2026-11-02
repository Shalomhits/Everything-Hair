# Part 3 implementation process

## Site structure
Six linked pages: `index.html`, `about.html`, `products.html`, `enquiry.html`, `faq.html`, and `contact.html`. A shared design system is maintained in `css_assets/site.css`; `js_assets/main.js` contains progressive enhancement and interactions.

## Interactive features
- Responsive navigation toggle updates `aria-expanded`, closes on link activation, Escape and desktop resize.
- Product catalogue search matches card names and descriptions; category controls filter by product group; sorting supports featured order and alphabetical directions; result count and empty state update live.
- Product and gallery images open in a native HTML dialog lightbox, with close button, backdrop click, Escape support from the native dialog, and focus restoration.
- FAQ items are accessible buttons that update `aria-expanded` and reveal their associated panels.
- Enquiry form uses native constraints plus custom client-side checks and inline messages. Product enquiry links prefill a relevant product from the URL query string.

## Form behaviour and limitations
There is no backend/API endpoint or verified business email address in the supplied project. Therefore, the enquiry form does not transmit, store or submit personal information to a server. After validation it creates a user-controlled email draft using `mailto:` without a hard-coded invented recipient. The user must select/confirm their mail app, review the draft and send it manually. This is a prototype behaviour, not a production order-processing system. A production deployment needs a verified recipient or secure form service/backend, server-side validation, spam protection, privacy notice and appropriate data handling.

## SEO and performance
- Unique titles, descriptions and keyword metadata per page.
- Semantic page hierarchy, descriptive image alt text and internal links.
- Open Graph title/description/site metadata.
- Lazy-loading for below-the-fold imagery; hero image is eager/high priority.
- `robots.txt` and `sitemap.xml` are templates only; replace placeholder domain before publication.
- No canonical URL is fabricated because the deployed origin is not known.
- Off-page SEO (backlinks, social profile linking, Search Console submission, local business listings) requires real account access and cannot be completed from static source files alone.

## Deployment
Use a static hosting platform such as GitHub Pages after the final repo URL is known. Update sitemap/robots URLs, confirm the project is served from the correct root, then run the test checklist in `TEST_REPORT.md`.

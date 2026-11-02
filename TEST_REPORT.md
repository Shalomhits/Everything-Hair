# Technical test report â€” Everything Hair

**Date:** 2 November 2026
**Status:** Static-source audit prepared; live browser acceptance testing remains to be performed on the student's machine after extraction/deployment.

## Checks run during packaging
- [x] Confirmed six HTML pages are present.
- [x] Checked that referenced local image paths exist in the project.
- [x] Checked unique page titles and descriptions exist.
- [x] Checked shared stylesheet and JavaScript references are present.
- [x] Checked project proposal is included.
- [x] Checked `sitemap.xml` is well-formed XML (its domain is intentionally a placeholder).
- [x] Checked project documentation includes change log, references and implementation limitations.
- [ ] Live test on desktop Chrome/Edge.
- [ ] Live test at mobile viewport and touch device.
- [ ] Keyboard-only and screen-reader spot check.
- [ ] Confirm live Google Fonts availability and fallback appearance.
- [ ] Confirm all source image rights/permissions.
- [ ] Confirm real business contact details and recipient.
- [ ] Replace sitemap/robots placeholder with deployed URL.
- [ ] Validate deployed sitemap and page paths after publishing.

## Manual functional acceptance checklist
1. Open `index.html` through VS Code Live Server; navigate through every header/footer link.
2. At a mobile width, open and close the menu; check `aria-expanded` and Escape handling.
3. On Products, search for â€œwigâ€, filter by category, sort Aâ€“Z and Zâ€“A, search for a nonsense term, then reset.
4. Open a product image and a gallery image; close with the close button and backdrop. Check keyboard focus returns to the trigger.
5. Open and close each FAQ accordion using keyboard and mouse.
6. Submit the enquiry form empty; check inline errors and focus. Fill valid values, accept the acknowledgement, submit and inspect the email draft. Confirm it does not claim an order was sent.
7. Resize at desktop/tablet/mobile widths; confirm no horizontal overflow.
8. Use browser devtools Console and Network panels to check for missing files, JavaScript errors and failed requests.

## Known limitations / not yet verified
- No actual backend, database, payment gateway or live order placement.
- No real business email, phone, WhatsApp or social URLs were provided, so none are invented.
- `mailto:` behaviour depends on a mail app being configured on the visitor's device.
- Sitemap and robots.txt must be updated with the real published URL.
- This report does not assert a guaranteed grade or a fully passed live-browser assessment.

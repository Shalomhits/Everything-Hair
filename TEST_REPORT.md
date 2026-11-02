Technical Test Report — Everything Hair

Date: 2 November 2026
Project: WEDE5020 — Everything Hair
Deployment: GitHub Pages
Live website: https://shalomhits.github.io/Everything-Hair/

1. Testing Status

The website has been deployed to GitHub Pages. Responsive screenshots of the homepage have been captured at desktop, tablet, and mobile viewport sizes.

The screenshots document visual checks at the following viewport dimensions:

* Desktop: 1440 × 900 pixels.
* Tablet: 768 × 1024 pixels.
* Mobile: 389 × 812 pixels.

These screenshots provide evidence of the homepage appearance at the specified viewport sizes. They do not, by themselves, establish that every page, interactive feature, accessibility requirement, or SEO requirement has passed testing.

2. Responsive Design Evidence

Screenshots are stored in the repository’s screenshots/ directory:

* screenshots/desktop-view.png
* screenshots/tablet-view.png
* screenshots/mobile-view.png

The screenshots should be reviewed for layout consistency, content visibility, navigation, image scaling, and horizontal overflow.

3. Source and Project Checks

The project documentation records the following checks as having been performed during packaging:

* Presence of six HTML pages.
* Existence of referenced local image paths.
* Presence of page titles and descriptions.
* Presence of shared stylesheet and JavaScript references.
* Inclusion of the project proposal.
* XML formatting of sitemap.xml.
* Presence of project documentation.

These are packaging/source checks, not proof that the deployed website has passed all browser-based acceptance tests.

4. Manual Functional Test Checklist

The following tests were performed on the deployed website. Results reflect the observed behaviour during manual testing.

Test	Procedure	Result
Product search	Searched for wig and checked the displayed products.	Pass
Product filtering	Selected a category and checked the displayed products.	Pass
Product sorting	Tested alphabetical sorting in both directions.	Pass
Product lightbox	Opened a product image and tested the close button and backdrop.	Pass
FAQ accordions	Opened and closed FAQ answers.	Pass
Enquiry form validation	Submitted the empty form and checked the validation messages.	Pass
Mobile navigation	Tested opening and closing the navigation menu.	Pass

The results above cover the specific interactions tested. They do not establish that every page, browser, accessibility requirement, or SEO feature has passed testing.

5. Accessibility and SEO Follow-up

The following items require further verification:

* Keyboard-only navigation across all pages.
* Appropriate focus handling for interactive components.
* Screen-reader spot checks.
* Browser console and network errors.
* Page-specific metadata on the deployed pages.
* Google Fonts availability and fallback appearance.
* Correct deployed URLs in robots.txt and sitemap.xml.
* Image loading and alternative text.
* Image ownership, licensing, and permission records.

6. Known Limitations

* The website is a static prototype without a backend, database, payment gateway, or live order processing.
* The enquiry form prepares a mailto: draft; it does not submit data to a server.
* Email-draft functionality depends on the visitor’s device and mail configuration.
* Verified business contact information and social media URLs were not provided.
* Image ownership and licensing have not yet been verified.
* The sitemap and robots file must be reviewed against the deployed website URL.

7. Conclusion

The website is deployed, and responsive screenshots of the homepage have been captured at three viewport sizes. Additional manual functional, accessibility, SEO, and cross-browser checks remain outstanding until they are performed and documented.

This report records the current evidence and outstanding checks. It does not claim that all tests have passed or guarantee an assessment result.

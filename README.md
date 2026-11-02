Everything Hair — WEDE5020 Website Project

A responsive, multi-page hair product catalogue and enquiry website built with HTML5, CSS3, and vanilla JavaScript. The project presents hair products and brand information through a consistent visual design and provides interactive catalogue, FAQ, gallery, and enquiry features.

Live Website: https://shalomhits.github.io/Everything-Hair/
Repository: https://github.com/Shalomhits/Everything-Hair

Pages

* index.html — Homepage, collection categories, and calls to action.
* about.html — Brand story and values.
* products.html — Product catalogue with search, category filters, sorting, and image lightbox.
* enquiry.html — Enquiry form with client-side validation and email-draft preparation.
* faq.html — FAQ accordions and inspiration gallery lightbox.
* contact.html — Contact information and navigation links.

Technologies

* HTML5 for page structure and semantic content.
* CSS3 for styling, layouts, and responsive design.
* Vanilla JavaScript for interactive features.
* Git and GitHub for version control and source hosting.
* GitHub Pages for deployment.

Main Features

* Consistent responsive design using a rose-gold, blush, warm-gold, and charcoal palette.
* Shared stylesheets and JavaScript functionality.
* Mobile navigation with keyboard dismissal and current-page indication.
* Searchable, filterable, and sortable product catalogue.
* Product and gallery image lightboxes.
* Interactive FAQ accordions.
* Enquiry form validation, inline errors, product prefill through query parameters, and email-draft preparation.
* Semantic landmarks, descriptive image alternatives, keyboard focus styles, skip link, and reduced-motion handling.
* Page-specific title tags, descriptions, and social-sharing metadata.
* robots.txt and sitemap.xml files.

Responsive Design Evidence

The following screenshots document the website at different viewport sizes using Microsoft Edge Developer Tools.

Desktop View

Test viewport: 1440 × 900 pixels.

Tablet View

Test viewport: 768 × 1024 pixels.

Mobile View

Test viewport: 389 × 812 pixels.

These screenshots show the homepage at the specified viewport sizes. They are visual evidence of the tested layouts, not proof that every page or interactive feature has passed testing.

Running the Project Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open index.html using Live Server, or use another local web server.
4. Keep the css_assets, js_assets, and _images directories in their expected locations.

Functional Limitations

This is a static catalogue and enquiry prototype. It does not process payments, confirm stock, create orders, store personal data, or submit form data to a server.

The enquiry form prepares a mailto: draft for the visitor to review and send. A verified recipient address and a server-side form endpoint have not been confirmed. Production use would require an appropriate submission endpoint, server-side validation, and privacy safeguards.

SEO and Publication

The project includes page-specific metadata and robots.txt and sitemap.xml files. Review the sitemap and robots file to ensure their URLs match the deployed website. Confirm that metadata and links are appropriate before production use.

Testing Status

Responsive screenshots have been captured for the homepage at the viewport sizes listed above.

Other checks—including navigation across all pages, form validation, product filtering and sorting, lightbox interactions, FAQ accordions, accessibility, SEO metadata, and image loading—must be recorded in the test report only after the relevant checks have been performed.

See TEST_REPORT.md for test results and CHANGELOG.md for the implementation history, if those files are present in the repository.

References and Image Credits

See REFERENCES.md for technical references and image-source information. Image credits and licence details should be included where they can be verified. Unknown image origins must not be represented as verified.

Changelog

See CHANGELOG.md for the project’s implementation history, if available.

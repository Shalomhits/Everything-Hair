(() => {
  "use strict";
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  // Footer year.
  $$("[data-year]").forEach(node => node.textContent = new Date().getFullYear());

  // Responsive navigation with keyboard dismissal.
  const navToggle = $(".nav-toggle");
  const nav = $("#primary-nav");
  if (navToggle && nav) {
    const closeNav = () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeNav();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeNav();
    });
  }

  // Product catalogue: search, category filters, sort and empty state.
  const grid = $("#product-grid");
  if (grid) {
    const cards = $$(".product-card", grid);
    const search = $("#product-search");
    const sort = $("#product-sort");
    const filters = $$(".filter-button");
    const count = $("#product-result-count");
    const empty = $("#product-empty");
    let activeFilter = "all";
    const update = () => {
      const term = (search?.value || "").trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
        const textMatch = `${card.dataset.name || ""} ${card.textContent}`.toLowerCase().includes(term);
        const show = categoryMatch && textMatch;
        card.hidden = !show;
        if (show) visible++;
      });
      const order = sort?.value || "featured";
      const sorted = [...cards].sort((a, b) => {
        if (order === "az") return a.dataset.name.localeCompare(b.dataset.name);
        if (order === "za") return b.dataset.name.localeCompare(a.dataset.name);
        return cards.indexOf(a) - cards.indexOf(b);
      });
      sorted.forEach(card => grid.appendChild(card));
      if (count) count.textContent = `Showing ${visible} of ${cards.length} product options`;
      if (empty) empty.hidden = visible !== 0;
    };
    filters.forEach(button => button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      filters.forEach(item => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      update();
    }));
    search?.addEventListener("input", update);
    sort?.addEventListener("change", update);
    $("#reset-products")?.addEventListener("click", () => {
      if (search) search.value = "";
      if (sort) sort.value = "featured";
      activeFilter = "all";
      filters.forEach(item => {
        const selected = item.dataset.filter === "all";
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      update();
      search?.focus();
    });
    update();
  }

  // Accessible FAQ accordion: each item can open/close independently.
  $$(".accordion-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const panel = button.getAttribute("aria-controls") ? $("#" + CSS.escape(button.getAttribute("aria-controls"))) : null;
      button.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  // Shared image lightbox, using native dialog where supported.
  const lightbox = $("#image-lightbox");
  const lightboxImage = lightbox ? $("img", lightbox) : null;
  const lightboxCaption = lightbox ? $(".lightbox-caption", lightbox) : null;
  const closeLightbox = lightbox ? $(".lightbox-close", lightbox) : null;
  let previousFocus = null;
  $$("[data-lightbox]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      if (!lightbox || !lightboxImage) return;
      previousFocus = document.activeElement;
      const image = $("img", link);
      lightboxImage.src = link.href;
      lightboxImage.alt = image?.alt || "Enlarged product or style image";
      if (lightboxCaption) lightboxCaption.textContent = image?.alt || "";
      if (typeof lightbox.showModal === "function") lightbox.showModal();
      else lightbox.setAttribute("open", "");
      closeLightbox?.focus();
    });
  });
  const closeDialog = () => {
    if (!lightbox) return;
    if (typeof lightbox.close === "function" && lightbox.open) lightbox.close();
    else lightbox.removeAttribute("open");
    if (lightboxImage) lightboxImage.removeAttribute("src");
    previousFocus?.focus();
  };
  closeLightbox?.addEventListener("click", closeDialog);
  lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) closeDialog();
  });
  lightbox?.addEventListener("close", () => previousFocus?.focus());

  // Enquiry form: client-side validation, then a user-controlled email draft.
  const enquiryForm = $("#enquiry-form");
  if (enquiryForm) {
    const status = $("#enquiry-status");
    const fields = [
      { id: "enq-name", error: "enq-name-error", message: "Please enter your name (at least 2 characters)." },
      { id: "enq-email", error: "enq-email-error", message: "Please enter a valid email address." },
      { id: "enq-product", error: "enq-product-error", message: "Please choose a product or select “Other / not sure yet”." },
      { id: "enq-message", error: "enq-message-error", message: "Please add a few details (at least 10 characters)." }
    ];
    const validate = field => {
      const input = $("#" + field.id);
      const error = $("#" + field.error);
      let valid = input.checkValidity();
      if (field.id === "enq-name") valid = input.value.trim().length >= 2;
      if (field.id === "enq-message") valid = input.value.trim().length >= 10;
      if (field.id === "enq-email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      input.setAttribute("aria-invalid", String(!valid));
      if (error) error.textContent = valid ? "" : field.message;
      return valid;
    };
    fields.forEach(field => {
      const input = $("#" + field.id);
      input.addEventListener("blur", () => validate(field));
      input.addEventListener("input", () => {
        if (input.getAttribute("aria-invalid") === "true") validate(field);
      });
    });
    const consent = $("#enq-consent");
    const consentError = $("#enq-consent-error");
    consent?.addEventListener("change", () => {
      if (consentError) consentError.textContent = consent.checked ? "" : "Please confirm you understand how this demo form works.";
    });
    // Prefill product from product catalogue query string.
    const product = new URLSearchParams(window.location.search).get("product");
    const productSelect = $("#enq-product");
    if (product && productSelect) {
      const option = Array.from(productSelect.options).find(item => item.text.toLowerCase() === product.toLowerCase());
      if (option) productSelect.value = option.value || option.text;
      else if (/hair|wig|braid|lace|curl/i.test(product)) productSelect.value = "Other / not sure yet";
    }
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();
      const valid = fields.map(validate).every(Boolean);
      const consentValid = Boolean(consent?.checked);
      if (consentError) consentError.textContent = consentValid ? "" : "Please confirm you understand how this demo form works.";
      if (!valid || !consentValid) {
        status.hidden = false;
        status.textContent = "Please review the highlighted fields. Your enquiry has not been sent.";
        const firstInvalid = enquiryForm.querySelector('[aria-invalid="true"]') || consent;
        firstInvalid?.focus();
        return;
      }
      const data = new FormData(enquiryForm);
      const subject = `Everything Hair product enquiry — ${data.get("product")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone / WhatsApp: ${data.get("phone") || "Not provided"}`,
        `Product: ${data.get("product")}`,
        `Preferred length / colour: ${data.get("preferences") || "Not specified"}`,
        `Quantity: ${data.get("quantity") || "Not specified"}`,
        "",
        "Message:",
        data.get("message")
      ].join("\n");
      status.hidden = false;
      status.textContent = "Your enquiry is ready as an email draft. Review the details in your email app and press Send to contact the business. This website does not transmit or store your information.";
      const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const link = document.createElement("a");
      link.href = mailto;
      link.className = "text-link";
      link.textContent = "Open email draft";
      link.style.marginTop = ".75rem";
      link.addEventListener("click", () => {
        status.append(document.createElement("br"));
      }, { once: true });
      status.append(document.createElement("br"), link);
    });
  }
})();
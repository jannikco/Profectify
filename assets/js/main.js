(function () {
  "use strict";

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const companyMenu = document.querySelector("[data-company-menu]");
  const companyToggle = document.querySelector("[data-company-toggle]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll(".nav__mobile a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (companyMenu && companyToggle) {
    const closeCompanyMenu = () => {
      companyMenu.classList.remove("is-open");
      companyToggle.setAttribute("aria-expanded", "false");
    };

    companyToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = companyMenu.classList.toggle("is-open");
      companyToggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (e) => {
      if (!companyMenu.contains(e.target)) closeCompanyMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCompanyMenu();
    });
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();
      const subject = encodeURIComponent(`Website enquiry from ${name || "visitor"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:hello@profectify.com?subject=${subject}&body=${body}`;
    });
  }
})();

// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  // Animate sections on scroll
  const targets = document.querySelectorAll(
    ".section-header, .service-card, .process-step, .about-left, .about-right, .cta-content",
  );
  targets.forEach((el) => el.classList.add("io-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings
          const siblings = Array.from(entry.target.parentNode.children).filter(
            (c) => c.classList.contains("io-reveal"),
          );
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 0.08}s`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
  );

  targets.forEach((el) => observer.observe(el));

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        header.style.background = "rgba(8,11,18,0.92)";
      } else {
        header.style.background = "rgba(8,11,18,0.72)";
      }
    },
    { passive: true },
  );

  // Mobile nav burger (simple toggle for demo)
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav");
  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });
  }
});

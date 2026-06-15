const year = document.querySelector("[data-year]");
const header = document.querySelector("[data-header]");
const wrapper = document.querySelector("[data-wrapper]");
const sidebar = document.querySelector("[data-sidebar]");
const toggle = document.querySelector("[data-toggle]");
const navLinks = document.querySelectorAll(".sidebar a");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setMenuOpen = (isOpen) => {
  wrapper?.classList.toggle("is-open", isOpen);
  sidebar?.classList.toggle("is-open", isOpen);
  toggle?.classList.toggle("is-open", isOpen);
  toggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
};

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

toggle?.addEventListener("click", () => {
  setMenuOpen(!sidebar?.classList.contains("is-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (window.sal) {
  window.sal({
    once: false,
    threshold: 0.25,
  });
}

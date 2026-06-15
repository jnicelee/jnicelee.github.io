const wrapper = document.querySelector(".wrapper");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function toggleClassName() {
  sidebar.classList.toggle("active");
  wrapper.classList.toggle("active");
  toggle.classList.toggle("active");
  toggle.setAttribute(
    "aria-label",
    sidebar.classList.contains("active") ? "Close navigation" : "Open navigation"
  );
}

toggle.addEventListener("click", toggleClassName);

document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", toggleClassName);
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

sal({
  once: false,
});

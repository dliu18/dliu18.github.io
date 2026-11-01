document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("navbarNav");
  const toggle = document.querySelector('[data-nav-toggle="navbarNav"]');
  if (!menu || !toggle) return;

  menu.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || !menu.contains(link)) return;

    menu.classList.remove("show");
    toggle.classList.add("collapsed");
    toggle.setAttribute("aria-expanded", "false");
  });
});

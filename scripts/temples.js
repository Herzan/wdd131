document.addEventListener("DOMContentLoaded", () => {
  // Footer Date and Last Modified
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  const lastModifiedDate = document.lastModified;
  document.getElementById("last-modified").textContent = lastModifiedDate;

  // Responsive Hamburger Menu
  const hamburgerButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");

  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburgerButton.classList.toggle("open");
    hamburgerButton.textContent = hamburgerButton.classList.contains("open") ? "X" : "☰";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("show");
      hamburgerButton.classList.remove("open");
      hamburgerButton.textContent = "☰";
    }
  });
});

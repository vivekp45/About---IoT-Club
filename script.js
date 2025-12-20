document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".member-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const dropdown = toggle.nextElementSibling;

      // toggle button state
      toggle.classList.toggle("active");

      // toggle dropdown
      dropdown.classList.toggle("open");
    });
  });
});

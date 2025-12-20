document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".member-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");

      const dropdown = toggle.nextElementSibling;

      if (!dropdown || !dropdown.classList.contains("member-dropdown")) {
        console.error("Dropdown not found for:", toggle);
        return;
      }

      dropdown.classList.toggle("open");
    });
  });
});

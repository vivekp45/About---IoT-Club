const buttons = document.querySelectorAll(".domain-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector(".arrow");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.classList.remove("open");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.classList.add("open");
    }
  });
});

const buttons = document.querySelectorAll(".domain-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      btn.querySelector("span").textContent = "▼";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.querySelector("span").textContent = "▲";
    }
  });
});

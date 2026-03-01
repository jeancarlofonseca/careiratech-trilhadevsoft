const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");
button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  menu.classList.toggle("active");
});

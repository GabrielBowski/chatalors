const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const icon = document.getElementById("burger-icon");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");

  // switch SVG
  if (nav.classList.contains("active")) {
    icon.src = "./assets/svg/burger-menu-croix.svg"; // ta croix
    icon.alt = "Fermer le menu";
  } else {
    icon.src = "./assets/svg/burger-menu.svg"; // burger
    icon.alt = "Ouvrir le menu";
  }
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  icon.src = "./assets/svg/burger-menu.svg";
  icon.alt = "Ouvrir le menu";
});

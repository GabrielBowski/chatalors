// JS FACULTATIF
// Utilisez ce fichier pour de petites interactions :
// - ouverture / fermeture de menu
// - accordéons
// - onglets simples, etc.

// Exemple : toggle d'un menu mobile (à adapter à votre HTML)
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Accordeon

const accordionList = document.querySelectorAll(".accordion-item");

accordionList.forEach((event) =>
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      accordionList.forEach((event2) => event2.classList.remove("active"));
      event.classList.add("active");
    }
  }),
);



// Carrousel :(

let move = document.getElementById('move');
let items = document.getElementsByClassName('item_deux');
let x = 0;

// renvoie le nombre d'éléments visibles selon la largeur de l'écran
function getVisibleCount() {
  return window.innerWidth < 768 ? 1 : 3;
}

// largeur totale d'un élément (incluant la marge gauche)
function getItemWidth() {
  let style = getComputedStyle(items[0]);
  let marginLeft = parseInt(style.marginLeft) || 0;
  return items[0].offsetWidth + marginLeft;
}

// calcul de la limite maximale du slider
function getMaxX() {
  return (items.length - getVisibleCount()) * getItemWidth() * -1;
}

// flèche droite
document.getElementById('r').addEventListener('click', function(){
  let step = getItemWidth(); // décalage = 1 élément
  x -= step;

  if (x < getMaxX()) x = 0; // boucle vers le début
  move.style.marginLeft = x + 'px';
});

// flèche gauche
document.getElementById('l').addEventListener('click', function(){
  let step = getItemWidth();
  x += step;

  if (x > 0) x = getMaxX(); // boucle vers la fin
  move.style.marginLeft = x + 'px';
});

// réagir au redimensionnement
window.addEventListener('resize', function(){
  // recalculer la limite max
  if (x < getMaxX()) x = getMaxX();
  move.style.marginLeft = x + 'px';
});














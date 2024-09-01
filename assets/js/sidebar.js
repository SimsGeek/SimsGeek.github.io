const menu = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll(".menuItem");
const burger = document.querySelector(".burger");
const showIcon= document.querySelector(".burger > .show");
const hideIcon = document.querySelector(".burger > .hide");

function collapseMenu() {
  menu.classList.remove("showMenu");
  hideIcon.style.display = "none";
  showIcon.style.display = "block";
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    hideIcon.style.display = "none";
    showIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    hideIcon.style.display = "block";
    showIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    collapseMenu();
  }
});

menuItems.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

collapseMenu()
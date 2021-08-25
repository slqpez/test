const burguerMenu = document.querySelector(".btn-burguer");
const itemNavbar = document.querySelectorAll(".item-navbar-header");
const menu = document.querySelector(".navbar-header");

burguerMenu.addEventListener("click", showMenu);

function showMenu(e) {
  e.preventDefault();
  menu.classList.toggle("active-menu");
  burguerMenu.classList.toggle("close");
}

itemNavbar.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    burguerMenu.classList.toggle("close");

    const active = document.querySelector(".active");

    active.classList.remove("active");
    item.classList.add("active");
  });
});

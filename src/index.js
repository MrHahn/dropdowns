import "./styles.css";

let dropdownParents = document.querySelectorAll(".has-child-menu");

dropdownParents.forEach((item) => {
  let submenu = item.querySelector(".submenu");
  const nav = document.querySelector("nav");
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!event.target.classList.contains("child-link")) {
      dropdownParents.forEach((dropdown) => {
        dropdown.querySelector(".submenu").classList.remove("show");
      });
    }
    submenu.classList.add("show");
  });
  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (nav && !nav.contains(clickedElement) && clickedElement !== nav) {
      submenu.classList.remove("show");
    }
  });
});

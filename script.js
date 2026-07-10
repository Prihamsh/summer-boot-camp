const menu = document.querySelector("#menu");
const navLinks = document.querySelector(".navLinks");

menu.onclick = () => {
  navLinks.classList.toggle("active");
};

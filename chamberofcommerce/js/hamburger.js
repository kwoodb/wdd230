const hambutton = document.querySelector(".hammenu");
const mainnav = document.querySelector(".primarynav");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 520) mainnav.classList.remove('responsive')};
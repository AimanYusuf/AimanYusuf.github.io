// Toogle class active
const navMenu = document.querySelector(".nav-menu");

document.querySelector(".hamburger-menu").onclick = () => {
  navMenu.classList.toggle("active");
};
// kilk di luar untuk menghilangkan navbar
const hamburger = document.querySelector(".hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const windowPost = window.scrollY > 0;
  navbar.classList.toggle("scrolActive", windowPost);
});

// hero gonta ganti
const imgaes = [
  "asset/img/hero.png",
  "asset/img/hero2.png",
  "asset/img/hero3.png",
  "asset/img/hero4.png",
];
const heroImages = document.querySelector(".img-hero");
let imgIndex = 0;
setInterval(() => {
  imgIndex = (imgIndex + 1) % imgaes.length;
  heroImages.src = imgaes[imgIndex];
}, 5000);
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

//Customize
function imgSlider(a) {
  document.querySelector(".t-shirt").src = a;
}

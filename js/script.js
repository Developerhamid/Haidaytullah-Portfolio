let burgur = document.querySelector(".burgur");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let navlist = document.querySelector(".nav-list");
let hire = document.querySelector(".hire");

burgur.addEventListener("click", () => {
  setTimeout(() => {
    navbar.classList.toggle("nav-height");
    logo.classList.toggle("nav-hidden");
    navlist.classList.toggle("nav-hidden");
    hire.classList.toggle("nav-hidden");
  }, 200);
});

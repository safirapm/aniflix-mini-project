// Navbar
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 30) {
    nav.classList.add("nav", "shadow");
  } else {
    nav.classList.remove("nav", "shadow");
  }
});

// Sign In Password
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function () {
  this.classList.toggle("bi-eye-slash-fill");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

// Name timeout (name change)
let elementName = document.getElementById("aniflix");

setTimeout(() => {
  document.getElementsByClassName("navbar-brand")[0].innerHTML = "a-flix";
}, 3000);

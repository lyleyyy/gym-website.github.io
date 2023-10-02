// footer
$(function () {
  $("#footer").load("./assets/footer.html");
});

// custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// burgerbar navigation for responsive design
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const productsLink = document.querySelector(".nav-products");
const productsMenu = document.querySelectorAll(".mobile-nav-link");
const angle = document.querySelector(".fa-angle-down");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

productsLink.addEventListener("click", () => {
  angle.classList.toggle("active");
  productsMenu.forEach((item) => {
    item.classList.toggle("active");
  });
});

// navLinks.addEventListener("click", () => {

// });

// slider
const myslide = document.querySelectorAll(".myslider");
const dot = document.querySelectorAll(".dot");
let counter = 1;

slidefun(counter);

function plusSlide(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }

  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

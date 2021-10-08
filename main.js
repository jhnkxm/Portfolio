"use strict";

//  Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
const about = document.querySelector("#about");
const contactMe = document.querySelector("#contact");
const contactBtn = document.querySelector(".home__contact");

navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTarget = document.querySelector(link);
  scrollTarget.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  contactMe.scrollIntoView({ behavior: "smooth" });
});

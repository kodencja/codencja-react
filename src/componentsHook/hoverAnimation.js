"use strict";

let nav_block; // navigation block
let nav_menu; // navigation menu
let nav_btn; // navigation burger
let nav_logo; // navigation logo
let $position; // scroll Y position
let headerImgs; // Images in header
let projects; // Projects in portfolio

const offMobEvents = 992;

const main = () => {
  getElements();
  runEvents();
  if (window.innerWidth < offMobEvents) {
    runMobileEvents();
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth < offMobEvents) {
      runMobileEvents();
    } else {
      stopMobileEvents();
    }
  });
};

const getElements = () => {
  nav_block = document.querySelector("nav");
  nav_menu = document.querySelector(".menu");
  nav_btn = document.querySelector(".burger");
  nav_logo = document.querySelector(".logo");
  $position = window.pageYOffset;
  headerImgs = document.querySelectorAll(".heroImg");
  projects = document.querySelectorAll(".project");
};

const runEvents = () => {
  animateProjects();
};

const runMobileEvents = () => {
  nav_btn.addEventListener("click", handleNavMenu);
  nav_menu.addEventListener("click", handleNavMenu);
  nav_logo.addEventListener("click", closeNavMenu);
  window.addEventListener("scroll", handleNavBlock);
};
const stopMobileEvents = () => {
  nav_btn.removeEventListener("click", handleNavMenu);
  nav_menu.removeEventListener("click", handleNavMenu);
  nav_logo.removeEventListener("click", closeNavMenu);
  window.removeEventListener("scroll", handleNavBlock);
};

// Handle navigation
const hideNavBLock = () => {
  nav_block.classList.add("nav--hide");
};
const showNavBLock = () => {
  nav_block.classList.remove("nav--hide");
};

const handleNavBlock = () => {
  if ($position - window.pageYOffset < 0) {
    switch (nav_menu.classList.contains("menu--open")) {
      case false:
        hideNavBLock();
        break;
    }
  } else {
    showNavBLock();
  }
  $position = window.pageYOffset;
};

const handleNavMenu = () => {
  nav_menu.classList.toggle("menu--open");
  nav_btn.classList.toggle("burger--open");
};
const closeNavMenu = () => {
  nav_menu.classList.remove("menu--open");
  nav_btn.classList.remove("burger--open");
};

// Portfolio animation

const animateProjects = () => {
  projects.forEach((project) => {
    const deg = 30;
    const stepX = deg / project.clientWidth;
    const stepY = deg / project.clientHeight;
    project.addEventListener("mousemove", (e) => {
      let rotateX = 0.5 * deg - e.layerY * stepY;
      let rotateY = -0.5 * deg + e.layerX * stepX;
      project.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    project.addEventListener("mouseleave", () => {
      project.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });
};

window.addEventListener("load", () => {
  main();
});

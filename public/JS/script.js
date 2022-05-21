"use strict";

const questions = document.querySelectorAll(".answer");
const toggleAnswer = document.querySelectorAll(".fa-plus");

//Burger Nav

const toggleNav = document.getElementsByClassName("toggle-button")[0];
const navBarList = document.getElementsByClassName("navBarList")[0];

toggleNav.addEventListener("click", function () {
  navBarList.classList.toggle("hidden");
});

//Carousel
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//FAQs

for (let i = 0; i < questions.length; i++)
  toggleAnswer[i].addEventListener("click", function () {
    questions[i].classList.toggle("hidden");
  });

//POPUP
const popupWindow = document.getElementsByClassName("popup")[0];
const closeWindow = document.getElementById("closeButton")[0];
// const popupDelay = Math.random() * 3000;

setTimeout(function () {
  popupWindow.classList.remove("hidden");
}, 15000);

function closePopup() {
  popupWindow.classList.add("hidden");
}

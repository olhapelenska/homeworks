"use strict";

var openModalButtons = document.querySelectorAll("[data-modal-target]");
var closeModalButtons = document.querySelectorAll("[data-close-button]");
var overlay = document.getElementById("overlay");
openModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener("click", function () {
  var modals = document.querySelectorAll(".modal.active");
  modals.forEach(function (modal) {
    closeModal(modal);
  });
});
closeModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

var name = document.getElementById("name");
var password = document.getElementById("password");
var form = document.getElementById("form");
var errorElement = document.getElementById("error");
form.addEventListener("submit", function (e) {
  var messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
var toggleButton = document.getElementsByClassName("header__toggle-button")[0];
var navbarLinks = document.getElementsByClassName("header__menu")[0];
toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});
$(".menu__link").on("click", function () {
  var section = $(this).attr("href");
  var top = $(section).offset().top - 100;
  $("html, body").animate({
    scrollTop: top
  }, 1000);
});
$(".scroll").on("click", function () {
  var section = $(this).attr("href");
  var top = $(section).offset().top - 100;
  $("html, body").animate({
    scrollTop: top
  }, 1000);
});
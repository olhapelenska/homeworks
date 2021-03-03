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
var email = document.getElementById("email");
var form = document.getElementById("form");
var errorElement = document.getElementById("error");
form.addEventListener("submit", function (e) {
  var messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (email.value === "email") {
    messages.push("email cannot be email");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});
form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = "Email should be at least ".concat(email.minLength, " characters; you entered ").concat(email.value.length, ".");
  }

  emailError.className = "error active";
}

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
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
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

const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
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
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}

const toggleButton = document.getElementsByClassName(
  "header__toggle-button"
)[0];
const navbarLinks = document.getElementsByClassName("header__menu")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

$(".menu__link").on("click", function () {
  let section = $(this).attr("href");
  let top = $(section).offset().top - 100;
  $("html, body").animate(
    {
      scrollTop: top,
    },
    1000
  );
});

$(".scroll").on("click", function () {
  let section = $(this).attr("href");
  let top = $(section).offset().top - 100;
  $("html, body").animate(
    {
      scrollTop: top,
    },
    1000
  );
});

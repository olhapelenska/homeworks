"use strict";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");

  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart__quantity-input");

  for (var _i = 0; _i < quantityInputs.length; _i++) {
    var input = quantityInputs[_i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");

  for (var _i2 = 0; _i2 < addToCartButtons.length; _i2++) {
    var _button = addToCartButtons[_i2];

    _button.addEventListener("click", addToCartClicked);
  }

  document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart__items")[0];

  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc, button.id);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc, id) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart__row");
  var cartItems = document.getElementsByClassName("cart__items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart__item-title");

  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  var cartItem = {
    title: title,
    price: price,
    image: imageSrc
  };
  localStorage[id] = JSON.stringify(cartItem);
  var cartRowContents = "\n        <div class=\"cart__item cart__column\">\n            <img class=\"cart__item-image\" src=\"".concat(imageSrc, "\" width=\"100\" height=\"100\">\n            <span class=\"cart__item-title\">").concat(title, "</span>\n        </div>\n        <span class=\"cart__price cart__column\">").concat(price, "</span>\n        <div class=\"cart__quantity cart__column\">\n            <input class=\"cart__quantity-input\" type=\"number\" value=\"1\">\n            <button class=\"btn btn-danger\" type=\"button\">REMOVE</button>\n        </div>");
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
  cartRow.getElementsByClassName("cart__quantity-input")[0].addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart__items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart__row");
  var total = 0;

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart__price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart__quantity-input")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart__total-price")[0].innerText = "$" + total;
}

document.addEventListener("DOMContentLoaded", getCart);

function getCart() {
  for (var key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    var cartItem = JSON.parse(localStorage[key]);
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart__row");
    var cartItems = document.getElementsByClassName("cart__items")[0];
    var cartRowContents = "\n        <div class=\"cart__item cart__column\">\n            <img class=\"cart__item-image\" src=\"".concat(cartItem.image, "\" width=\"100\" height=\"100\">\n            <span class=\"cart__item-title\">").concat(cartItem.title, "</span>\n        </div>\n        <span class=\"cart__price cart__column\">").concat(cartItem.price, "</span>\n        <div class=\"cart__quantity cart__column\">\n            <input class=\"cart__quantity-input\" type=\"number\" value=\"1\">\n            <button class=\"btn btn-danger\" type=\"button\">REMOVE</button>\n        </div>");
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("cart__quantity-input")[0].addEventListener("change", quantityChanged);
  }

  updateCartTotal();
}
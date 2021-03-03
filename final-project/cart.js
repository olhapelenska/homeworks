if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("cart__quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  let addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  let cartItems = document.getElementsByClassName("cart__items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc, button.id);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc, id) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart__row");
  let cartItems = document.getElementsByClassName("cart__items")[0];
  let cartItemNames = cartItems.getElementsByClassName("cart__item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  let cartItem = {
    title: title,
    price: price,
    image: imageSrc,
  };
  localStorage[id] = JSON.stringify(cartItem);
  let cartRowContents = `
        <div class="cart__item cart__column">
            <img class="cart__item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart__item-title">${title}</span>
        </div>
        <span class="cart__price cart__column">${price}</span>
        <div class="cart__quantity cart__column">
            <input class="cart__quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart__quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart__items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart__row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart__price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart__quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart__total-price")[0].innerText =
    "$" + total;
}

document.addEventListener("DOMContentLoaded", getCart);
function getCart() {
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    let cartItem = JSON.parse(localStorage[key]);
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart__row");
    let cartItems = document.getElementsByClassName("cart__items")[0];
    let cartRowContents = `
        <div class="cart__item cart__column">
            <img class="cart__item-image" src="${cartItem.image}" width="100" height="100">
            <span class="cart__item-title">${cartItem.title}</span>
        </div>
        <span class="cart__price cart__column">${cartItem.price}</span>
        <div class="cart__quantity cart__column">
            <input class="cart__quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart__quantity-input")[0]
      .addEventListener("change", quantityChanged);
  }
  updateCartTotal();
}

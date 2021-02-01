"use strict";

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true //vertical: true,
    //verticalSwiping: true,
    //appendDots: $(),

  });
});
$(".nav__link").on("click", function () {
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

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    styles: [{
      elementType: "geometry",
      stylers: [{
        color: "#f5f5f5"
      }]
    }, {
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#f5f5f5"
      }]
    }, {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#bdbdbd"
      }]
    }, {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "#eeeeee"
      }]
    }, {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{
        color: "#e5e5e5"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "road",
      elementType: "geometry",
      stylers: [{
        color: "#ffffff"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{
        color: "#dadada"
      }]
    }, {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{
        color: "#e5e5e5"
      }]
    }, {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{
        color: "#eeeeee"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#c9c9c9"
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }],
    center: {
      lat: 49.83,
      lng: 24.035
    }
  });
  var image = "./images/Pin.png";
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 49.83,
      lng: 24.035
    },
    map: map,
    icon: image
  });
}

var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");
var emailError = document.querySelector("#mail + span.error");
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

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not("." + value).hide("3000");
      $(".filter").filter("." + value).show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }

  $(this).addClass("active");
});

var navSlide = function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav__list");
  var navLinks = document.querySelectorAll(".nav__list li");
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.3, "s");
      }
    });
    burger.classList.toggle(".toggle");
  });
};

navSlide();
var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");
var modalShow = document.querySelectorAll(".modal-buy");
var modal = document.querySelector(".modal");
var modalBackground = document.querySelector(".modal-background");

navMain.classList.remove("main-navigation--nojs");
navMain.classList.remove("main-navigation--opened");
navMain.classList.add("main-navigation--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed")) {
      navMain.classList.remove("main-navigation--closed");
      navMain.classList.add("main-navigation--opened");
    } else {
        navMain.classList.add("main-navigation--closed");
        navMain.classList.remove("main-navigation--opened");
    }
});

if (modal) {
  for (var i = 0; i < modalShow.length; i++) {

    modalShow[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      modalBackground.classList.add("modal-background--show");
    });

    modalBackground.addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
      modalBackground.classList.remove("modal-background--show");
  });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains("modal--show")) {
          modal.classList.remove("modal--show");
          modalBackground.classList.remove("modal-background--show");
        }
      }
    });
    }
}

"use strict";

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-note="${e.key}"]`);
  const audio = document.querySelector(`audio[data-note="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

window.addEventListener("click", (e) => {
  const sounds = document.querySelectorAll("audio[data-note]");
  sounds.forEach((sound) => {
    if (e.target.getAttribute("data-note") == sound.getAttribute("data-note")) {
      sound.currentTime = 0;
      sound.play();
    }
  });
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeStyle));

function removeStyle() {
  this.classList.remove("playing");
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1600);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}

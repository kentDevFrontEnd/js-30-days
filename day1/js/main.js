const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("active");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("active");
}

function playOnClick() {
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  this.classList.add("active");
}

window.addEventListener("keydown", playSound);

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", playOnClick);
});

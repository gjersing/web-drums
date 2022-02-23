const buttons = document.querySelectorAll("button");
const crash = new Audio('sounds/crash.mp3');

document.querySelector(".w").addEventListener("click", function () {
  crash.play();
});

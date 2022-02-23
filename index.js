const buttons = document.querySelectorAll("button");
const crash = new Audio('sounds/crash.mp3');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    switch (this.innerHTML) {
      case 'w':
        crash.play();
        break;
      default:

    }
  });
}

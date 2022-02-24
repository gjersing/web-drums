const buttons = document.querySelectorAll("button");
const crash = new Audio('sounds/crash.mp3');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    switch (this.innerHTML) {
      case 'w':
        const crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'a':
        const snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 's':
        const kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      case 'd':
        const tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'j':
        const tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 'k':
        const tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'l':
        const tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      default:
    }
  });
}

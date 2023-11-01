const btns = document.querySelectorAll(".drum");

for (let btn of btns) {
  btn.addEventListener("click", handleClick);
}

function playAudio(character) {
  switch (character) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(`${character} was pressed and no sound attached to it.`);
  }
}

function buttonAnimation(character) {
  switch (character) {
    case "w":
    case "a":
    case "s":
    case "d":
    case "j":
    case "k":
    case "l":
      let activeButton = document.querySelector("." + character);
      activeButton.classList.add("pressed");
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
      break;

    default:
      console.log("Animation not available for " + character);
  }
}

function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  buttonAnimation(buttonInnerHTML);
  playAudio(buttonInnerHTML);
}

document.addEventListener("keypress", function (event) {
  buttonAnimation(event.key);
  playAudio(event.key);
});

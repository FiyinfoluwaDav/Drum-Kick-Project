var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    trackPresses(buttonInnerHTML);
  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
  trackPresses(event.key);


});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/crash.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/snare.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

//Adding the cobmo effect
var pressCount = 0;
let startTime = null;

//Creating the tracking function
function trackPresses() {
  var now = Date.now();

  if(startTime === null){
    startTime = now; //start timer
  }
  pressCount++;
  //If 4 seconds passed, reset counter
  if (now - startTime > 4000){
    pressCount = 1;
    startTime = now;
  }

  //If 10 presses within 4 sec --> trigger effect
  if(pressCount >=10){
    triggerFancyEffect();
    pressCount = 0;
    startTime = null;
  }
}

function triggerFancyEffect() {
  const effect = document.createElement("div");
  effect.innerText = "🔥 Combo! 🔥";
  effect.classList.add("combo");
  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 2000);
}

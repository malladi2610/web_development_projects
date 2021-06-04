//Button pressed
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function () {    //Anonymous function

  var innerhtml = this.innerHTML;
  Keypressed(innerhtml);

  buttonAnimation(innerhtml);

  });

}

//Key pressed
document.addEventListener("keydown", function(event){
Keypressed(event.key);
buttonAnimation(event.key);
})

//Function which detects the keys pressed
function Keypressed(key){

  switch (key){

    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    default:
    console.log(innerhtml);

  }

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed")
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100)
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();


// if(i == 0){
//
// }
// if(i == 1){
//   var.audio = new Audio('crash.mp3');
//   audio.play();
// }
// if(i == 3){
//   var.audio = new Audio('crash.mp3');
//   audio.play();
// }
// if(i == 1){
//   var.audio = new Audio('crash.mp3');
//   audio.play();
// }
// if(i == 1){
//   var.audio = new Audio('crash.mp3');
//   audio.play();
// }
// if(i == 1){
//   var.audio = new Audio('crash.mp3');
//   audio.play();
// }
// if(i == 1){
//   var.audio = new Audio('crash.mp3');
//   audio.play();
// }

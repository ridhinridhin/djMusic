

//Detection of button press
var numberOfDrumButton =document.querySelectorAll(".drum").length;

for (var i =0; i< numberOfDrumButton; i++ ){

//document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//function handleClick (){
//alert ("I got clicked!");
//}

            //OR

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    //this.style.color = "white";  // for changing color

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

});
}

//Detection of keyboard press

document.addEventListener("keydown", function(event){

  makeSound(event.key);

});


function makeSound(key){

      switch (key) {
        case "l":
          var tom1 = new Audio("sounds/tom-1.mp3");  //for Audio
          tom1.play();
          break;

        case "k":
          var tom2 = new Audio("sounds/tom-2.mp3");  //for Audio
          tom2.play();
          break;

          case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");  //for Audio
            tom3.play();
            break;

          case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");  //for Audio
            tom4.play();
            break;

          case "s":
            var snare = new Audio("sounds/snare.mp3");  //for Audio
            snare.play();
            break;

          case "a":
            var kick = new Audio("sounds/kick-bass.mp3");  //for Audio
            kick.play();
            break;

          case "w":
            var crash = new Audio("sounds/crash.mp3");  //for Audio
            crash.play();
            break;
        default:

      }
}

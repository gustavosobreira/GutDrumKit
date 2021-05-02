//Select each button ID
const clap = document.getElementById('clap');
const snare = document.getElementById('snare');
const kick = document.getElementById('kick');
const tink = document.getElementById('tink');
const hihat = document.getElementById('hihat');
const openhat = document.getElementById('openhat');
const ride = document.getElementById('ride');
const splash = document.getElementById('splash');
const crash = document.getElementById('crash');

//Select every key on the page to listen on each one
const keys = document.querySelectorAll('.key');

//Functions and Handlers

function playSound(e){ 
   // Select corresponding audio and key
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if(!audio){   
      return; 
    } 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
} 

function removeTransition(){  //Remove css '.playing'
   this.classList.remove('playing');
}

function defaultImg(){     //Handler to restore default images attached to buttons
   document.getElementById("myImage").src = 'img/zero.jpg';
}

//Keys Event Listeners
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //Listener that removes CSS '.playing'

//Window Event Listeners
window.addEventListener('keydown', playSound); // Play sound when key is pressed 
window.addEventListener('keydown', (e) =>{
   //Attach each key to the respective image
   switch (e.code) {
       case "KeyA":
        document.getElementById("myImage").src = 'img/one.jpg';
        setTimeout(defaultImg, 200);
        break;

       case "KeyS":
           document.getElementById("myImage").src = 'img/two.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyD":
           document.getElementById("myImage").src = 'img/three.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyF":
           document.getElementById("myImage").src = 'img/four.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyG":
           document.getElementById("myImage").src = 'img/five.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyH":
           document.getElementById("myImage").src = 'img/six.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyJ":
           document.getElementById("myImage").src = 'img/seven.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyK":
           document.getElementById("myImage").src = 'img/eight.jpg';
           setTimeout(defaultImg, 200);
        break;

        case "KeyL":
           document.getElementById("myImage").src = 'img/nine.jpg';
           setTimeout(defaultImg, 200);
        break;


       default:
           break;
   }
});

//Buttons Handlers 
function buttonHandler(drum, srcimg){

   const item = document.getElementById(drum);
      item.addEventListener('click', (e) =>{
      let audio = new Audio(`sounds/${drum}.wav`);
      audio.play();
      item.classList.add('playing');
      document.getElementById("myImage").src = `img/${srcimg}.png`;
   });
};

buttonHandler('clap', 'one');
buttonHandler('snare', 'two');
buttonHandler('kick', 'three');
buttonHandler('tink', 'four');
buttonHandler('hihat', 'five');
buttonHandler('openhat', 'six');
buttonHandler('ride', 'seven');
buttonHandler('splash', 'eight');
buttonHandler('crash', 'nine');

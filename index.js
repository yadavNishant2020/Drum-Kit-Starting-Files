var NoOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<NoOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}

function clicked(){
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    this.style.color='White';

}
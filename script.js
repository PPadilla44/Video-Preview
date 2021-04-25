var city = document.querySelector(".city")
var isPlaying = false;
function over() {
    city.play();
    isPlaying = true;
}
function out() {
    city.pause();
    isPlaying = false;
}

function fastVid() {
    if(isPlaying) {
    city.playbackRate = 5;
    }
}
function rw2() {
    city.currentTime -= 2.5;
    city.playbackRate = 1;
}
function fw2(){
    city.currentTime += 2.5;
}
var city = document.querySelector(".city")

function over() {
    city.play();
}
function out() {
    city.pause();
}

function fastVid() {
    city.playbackRate = 5;
}
function rw2() {
    city.currentTime -= 2.5;
}
function fw2(){
    city.currentTime += 2.5;
}
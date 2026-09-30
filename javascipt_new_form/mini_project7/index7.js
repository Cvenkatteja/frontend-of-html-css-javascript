const digits = document.getElementById("digits");
let timer = null;
let starttime = 0;
let elaspedtime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        starttime= Date.now() - elaspedtime;
        timer = setInterval(update, 10);
        isrunning = true;
    }

}
function end(){
    if(isrunning){
        clearInterval(timer);
        isrunning = false;

    }

}
function reset(){
    clearInterval(timer);
    starttime = 0;
    elaspedtime = 0;
    isrunning = false;
    digits.textContent = "00:00:00:00";

}
function update(){
    let currentTime = Date.now();
    elaspedtime = currentTime - starttime;

    let hours = Math.floor(elaspedtime / (1000 *60 * 60));
    let minutes = Math.floor(elaspedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspedtime / 1000 % 60 );
    let milliseconds =Math.floor(elaspedtime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);

    digits.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


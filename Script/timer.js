var h1 = document.getElementsByTagName('h3')[0],
    seconds = 0, minutes = 0, 
    t;

   // var content = document.getElementsByTagName("h3")[0].textContent + "";

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    if(h1.textContent == '12:00')
    {
        $("h3").css({color:'red' });
    }
    timer();
}
function timer() {

    clearTimeout(t);
    t = setTimeout(add, 1000);
}

function getFinalTime()
{
    return h1.textContent;
}

/* Start button */
//start.onclick = timer;

/* Stop button */
function stopTimer() {

    clearTimeout(t);
}

/* Clear button */
function clearTimer() {
    h1.textContent = "00:00";
    clearTimeout(t);

    seconds = 0; minutes = 0; 
}
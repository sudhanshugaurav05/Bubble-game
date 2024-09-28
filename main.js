var timer = 60;
var score = 0;
var hitRn = 0;
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 96; i++) {
        var rn = Math.floor(Math.random() * 10 + 1);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".cbot").innerHTML = clutter;
}


function runTimer() {
    var timex = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerValue").textContent = timer;
        }
        else {
            clearInterval(timex);
            document.querySelector(".cbot").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10 + 1);
    document.querySelector(".hitValue").textContent = hitRn;
}

function increaseScore() {
    score += 10;
    document.querySelector(".scoreValue").textContent = score;
}

document.querySelector(".cbot").addEventListener("click", function (a) {
    const clicked = Number(a.target.textContent);
    if (clicked === hitRn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

runTimer();
makeBubble();
getNewHit();

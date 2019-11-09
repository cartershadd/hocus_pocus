

let canvas;
let ctx;

function update(progress) {
    // Move characters
}

function draw() {
    ctx.font = '40pt Calibri';
    ctx.fillStyle = 'blue';
    ctx.fillText('Hello World!', 100, 100);
}

// Main game loop run forever
function loop(timestamp) {
    var progress = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
    window.requestAnimationFrame(loop)
}


window.onload = function() {
    console.log("Engage");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    // window.addEventListener('keydown', onKeyDown, true);
    // window.addEventListener('keyup', onKeyUp, true);

    var lastRender = 0;
    window.requestAnimationFrame(loop);
};



let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

console.log("Engage");


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
var lastRender = 0;
window.requestAnimationFrame(loop);
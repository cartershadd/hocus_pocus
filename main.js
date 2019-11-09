let canvas;
let ctx;
let witch;
let lastRender;

function update(progress) {
    // Move characters
    witch.update(progress);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    witch.draw(ctx)
}


function keyUp(event) {

}

function keyDown(event) {

}

// Main game loop run forever
function loop(timestamp) {
    var progress = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
    window.requestAnimationFrame(loop)
}


window.onload = function () {
    console.log("Engage");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('keydown', keyDown, true);
    window.addEventListener('keyup', keyUp, true);


    witch = new Witch(3, 100, 100);

    lastRender = 0;
    window.requestAnimationFrame(loop);
};

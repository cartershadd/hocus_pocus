let canvas;
let ctx;
let witch;
let enemyList;
let lastRender;
let lastEnemyTime;
let larryImg;
let festerImg;
let bleuImg;

// adds enemies every 500 ms
// moves characters
// does collision detection
// takes in the timestamp and the progress (length of time since last called)
// returns if player is alive or dead
function update(timestamp, progress) {
    //add enemy every 500 ms
    if (timestamp > lastEnemyTime + 500) {
        lastEnemyTime = timestamp;

        if (Math.random() > 0.5) {
            let fester = new Fester(1, window.innerWidth, window.innerHeight * Math.random(), -2 * Math.random(), festerImg);
            enemyList.push(fester);
        } else if (Math.random() > 0.25) {
            let larry = new Larry(1, window.innerWidth, window.innerHeight * Math.random(), -2 * Math.random(), larryImg);
            enemyList.push(larry);
        } else {
            let bleu = new Bleu(1, window.innerWidth, window.innerHeight * Math.random(), -2 * Math.random(), bleuImg);
            enemyList.push(bleu);
        }
    }

    // Move characters
    witch.update(progress);

    for (var i = 0; i < enemyList.length; i++) {
        enemyList[i].update(progress);
    }

    return witch.collision(enemyList);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    witch.draw(ctx);

    for (var i = 0; i < enemyList.length; i++) {
        enemyList[i].draw(ctx);
    }
}


function keyUp(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        witch.upDown = 0;
        witch.leftRight = 0;
    }
}

function keyDown(event) {
    if (event.key === "ArrowUp") {
        witch.upDown = -1;
    } else if (event.key === "ArrowDown") {
        witch.upDown = 1;
    } else if (event.key === "ArrowLeft") {
        witch.leftRight = -1;
    } else if (event.key === "ArrowRight") {
        witch.leftRight = 1;
    }
}

// Main game loop run forever
function loop(timestamp) {
    var progress = timestamp - lastRender;

    let alive = update(timestamp, progress);

    draw();

    lastRender = timestamp;
    if (alive) {
        window.requestAnimationFrame(loop)
    }
}


window.onload = function () {
    console.log("Engage");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('keydown', keyDown, true);
    window.addEventListener('keyup', keyUp, true);

    let img = new Image();
    img.src = "witch.svg";

    witch = new Witch(10, 100, 100, img);

    larryImg = new Image();
    larryImg.src = "larry.svg";

    festerImg = new Image();
    festerImg.src = "fester.svg";

    bleuImg = new Image();
    bleuImg.src = "bleu.svg";

    enemyList = [];

    lastEnemyTime = 0;

    lastRender = 0;
    window.requestAnimationFrame(loop);
};

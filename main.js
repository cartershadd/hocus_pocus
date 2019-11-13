let canvas;
let ctx;
let witch;
let enemyList;
let lastRender;
let lastEnemyTime;

// adds enemies every 500 ms
// moves characters
// does collision detection
// takes in the timestamp and the progress (length of time since last called)
// returns if player is alive or dead
function update(timestamp, progress) {
    //add enemy every 500 ms
    if (timestamp > lastEnemyTime + 500) {
        lastEnemyTime = timestamp;
        let enemy = new Enemy(1, window.innerWidth - 100, window.innerHeight * Math.random(), window.innerHeight * Math.random());
        enemyList.push(enemy);
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
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        witch.speed = 0;
    }
}

function keyDown(event) {
    if (event.key === "ArrowUp") {
        witch.speed = -1;
    } else if (event.key === "ArrowDown") {
        witch.speed = 1;
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


    witch = new Witch(3, 100, 100);

    enemyList = [];

    lastEnemyTime = 0;

    lastRender = 0;
    window.requestAnimationFrame(loop);
};

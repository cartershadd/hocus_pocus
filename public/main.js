let canvas;
let ctx;
let witch;
let enemyList;
let friendList;
let lastFriendTime;
let lastRender;
let lastEnemyTime;
let larryImg;
let festerImg;
let bleuImg;
let broomImg;
let cauldronImg;
let moonImg;
let teaImg;
let backgroundImg;

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
            let fester = new Fester(
                1,
                window.innerWidth * Math.random(),
                window.innerHeight,
                -0.05 * Math.random(),
                -0.3 * Math.random(),
                festerImg);
            enemyList.push(fester);
        } else if (Math.random() > 0.45) {
            let larry = new Larry(
                1,
                window.innerWidth,
                window.innerHeight * Math.random(),
                -0.15 * Math.random(),
                -0.1 * Math.random(),
                larryImg);
            enemyList.push(larry);
        } else {
            let bleu = new Bleu(
                1,
                window.innerWidth * Math.random(),
                0,
                1.25 * Math.random(),
                -0.75 * Math.random(),
                bleuImg);
            enemyList.push(bleu);
        }
    }


    // add good guy every 500 ms
    if (timestamp > lastFriendTime + 500) {
        lastFriendTime = timestamp;

        if (Math.random() > 0.35) {
            let broom = new Broom(
                1,
                window.innerWidth,
                window.innerHeight * Math.random(),
                -0.75 * Math.random(),
                -1 * Math.random(),
                broomImg);
            friendList.push(broom);
        } else if (Math.random() > 0.95) {
            let moon = new Moon(
                1,
                window.innerWidth,
                window.innerHeight * Math.random(),
                -0.65 * Math.random(),
                -0.5 * Math.random(),
                moonImg);
            friendList.push(moon);
        } else if (Math.random() > 0.15) {
            let tea = new Tea(
                1,
                window.innerWidth,
                window.innerHeight * Math.random(),
                -0.5 * Math.random(),
                -0.35 * Math.random(),
                teaImg);
            friendList.push(tea);
        } else {
            let cauldron = new Cauldron(
                1,
                window.innerWidth,
                window.innerHeight * Math.random(),
                -0.45 * Math.random(),
                -0.25 * Math.random(),
                cauldronImg);
            friendList.push(cauldron);
        }
    }

    // Move characters
    witch.update(progress);

    for (var i = 0; i < enemyList.length; i++) {
        enemyList[i].update(progress);
    }

    witch.collision(enemyList);


    for (var k = 0; k < friendList.length; k++) {
        friendList[k].update(progress);
    }

    witch.winCollision(friendList);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(backgroundImg, 0, 0, window.innerWidth, window.innerHeight);

    witch.draw(ctx);

    for (var i = 0; i < enemyList.length; i++) {
        enemyList[i].draw(ctx);
    }

    for (var k = 0; k < friendList.length; k++) {
        friendList[k].draw(ctx);
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

    update(timestamp, progress);

    draw();

    lastRender = timestamp;

    if (witch.haveWon()) {
        alert("You have won the game :D");
    } else if (witch.haveLost()) {
        alert("You have lost the game :C");
    } else {
        window.requestAnimationFrame(loop);
    }
}


window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('keydown', keyDown, true);
    window.addEventListener('keyup', keyUp, true);

    backgroundImg = new Image();
    backgroundImg.src = "FreeSkyBackground-12.jpg";

    let img = new Image();
    img.src = "witch.svg";

    witch = new Witch(10, 100, 100, img, 0);

    cauldronImg = new Image();
    cauldronImg.src = "cauldron.svg";

    teaImg = new Image();
    teaImg.src = "tea.svg";

    broomImg = new Image();
    broomImg.src = "broom.svg";

    moonImg = new Image();
    moonImg.src = "moon.png";

    larryImg = new Image();
    larryImg.src = "larry.svg";

    festerImg = new Image();
    festerImg.src = "fester.svg";

    bleuImg = new Image();
    bleuImg.src = "bleu.svg";

    enemyList = [];
    friendList = [];

    lastEnemyTime = 0;
    lastFriendTime = 0;

    lastRender = 0;
    window.requestAnimationFrame(loop);
};

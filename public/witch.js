class Witch {
    constructor(lives, x, y, img, items) {
        this.lives = lives;
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 150;
        this.leftRight = 0;
        this.upDown = 0;
        this.img = img;
        this.items = items;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        ctx.font = "2rem Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText('Lives remaining: ' + `${this.lives}`, 10, 50);

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        ctx.font = "2rem Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText('Items collected: ' + `${this.items}`, 10, 100);
    }


    update(progress) {
        this.y += this.upDown * progress;
        this.x += this.leftRight * progress;

        if (this.y < 0) {
            this.y = window.innerHeight;
        }
        if (this.y > window.innerHeight) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = window.innerWidth;
        }
        if (this.x > window.innerWidth) {
            this.x = 0;
        }
    }

    // checks collision on a single enemy or good item
    // returns if enemy/ good item collided or not
    checkCollision(object) {
        let a = Math.max(this.y, object.y);
        let b = Math.min(this.y + this.h, object.y + object.h);
        let c = Math.max(this.x, object.x);
        let d = Math.min(this.x + this.w, object.x + object.w);
        let yOverlap = b > a;
        let xOverlap = c < d;
        return yOverlap && xOverlap;
    }

    // takes enemy list and processes all collisions
    // returns whether player is alive or dead
    collision(enemyList) {
        for (let i = 0; i < enemyList.length; i++) {
            if (this.checkCollision(enemyList[i])) {
                this.lives -= 1;
                enemyList.splice(i, 1);
                i--;
                console.log("You lost a life, and have " + this.lives + " remaining.");
            }
        }
        return true
    }

    haveLost() {
        return this.lives <= 0;
    }

    // takes friend list and processes all collisions
    // returns a win if player collects all items
    winCollision(friendList) {
        for (let k = 0; k < friendList.length; k++) {
            if (this.checkCollision(friendList[k])) {
                this.items += 1;
                friendList.splice(k, 1);
                k--;
                console.log("You got a magical item!");
            }
        }
        return true
    }

    haveWon() {
        return this.items >= 25;
    }
}

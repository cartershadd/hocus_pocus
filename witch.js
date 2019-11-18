class Witch {
    constructor(lives, x, y, img) {
        this.lives = lives;
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 150;
        this.leftRight = 0;
        this.upDown = 0;
        this.img = img;
    }

    draw(ctx) {
        // this.img.src = "witch.svg";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText(`${this.lives}`, 10, 50)
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

    // checks collision on a single enemy
    // returns if enemy collided or not
    checkCollision(larry) {
        let a = Math.max(this.y, larry.y);
        let b = Math.min(this.y + this.h, larry.y + larry.h);
        let c = Math.max(this.x, larry.x);
        let d = Math.min(this.x + this.w, larry.x + larry.w);
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
                if (this.lives === 0) {
                    alert("You have lost the game :C");
                    return false
                }
            }
        }
        return true
    }
}

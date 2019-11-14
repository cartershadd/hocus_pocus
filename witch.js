class Witch {
    constructor(lives, x, y, img) {
        this.lives = lives;
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 200;
        this.speed = 0;
        this.img = img;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.img.src = "witch.svg";
    }

    update(progress) {
        this.y += this.speed * progress;
        if (this.y < 0) {
            this.y = window.innerHeight;
        }
        if (this.y > window.innerHeight) {
            this.y = 0;
        }
    }

    // checks collision on a single enemy
    // returns if enemy collided or not
    checkCollision(enemy) {
        let a = Math.max(this.y, enemy.y);
        let b = Math.min(this.y + this.h, enemy.y + enemy.h);
        let c = Math.max(this.x, enemy.x);
        let d = Math.min(this.x + this.w, enemy.x + enemy.w);
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
                console.log("You lost a life, and have " + this.lives + " remaining.")
                if (this.lives === 0) {
                    alert("You have lost the game :C");
                    return false
                }
            }
        }
        return true
    }
}

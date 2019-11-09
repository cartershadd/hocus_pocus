class Witch {
    constructor(lives, x, y) {
        this.lives = lives;
        this.x = x;
        this.y = y;
        this.speed = 1;
    }


    draw(ctx) {
        ctx.fillRect(this.x, this.y, 100, 100);
    }

    update(progress) {
        this.y += this.speed * progress;

    }

}

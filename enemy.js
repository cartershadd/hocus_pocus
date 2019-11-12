class Enemy {
    constructor(health, x, y) {
        this.health = health;
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 100;
        this.speed = -1;
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update(progress) {
        this.x += this.speed * progress;
    }
}
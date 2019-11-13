class Enemy {
    constructor(health, x, y, speed) {
        this.health = health;
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 80;
        this.speed = speed;
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update(progress) {
        this.x += this.speed * progress;
    }
}
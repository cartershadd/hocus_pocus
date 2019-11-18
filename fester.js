class Fester {
    constructor(health, x, y, speed, img) {
        this.health = health;
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 80;
        this.speed = speed;
        this.img = img;
    }

    draw(ctx) {
        // this.img.src = "fester.svg";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    update(progress) {
        this.x += this.speed * progress;
    }
}
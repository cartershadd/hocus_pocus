class Larry {
    constructor(health, x, y, speed, img) {
        this.health = health;
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 100;
        this.speed = speed;
        this.img = img;
    }

    draw(ctx) {
        // this.img.src = "larry.svg";
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    update(progress) {
        this.x += this.speed * progress;
    }
}
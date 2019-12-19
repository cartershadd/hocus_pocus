class Tea {
    constructor(health, x, y, speedY, speedX, img) {
        this.health = health;
        this.x = x;
        this.y = y;
        this.w = window.innerHeight/10;
        this.h = window.innerHeight/10;
        this.speedY = speedY;
        this.speedX = speedX;
        this.img = img;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    update(progress) {
        this.x += this.speedX * progress;
        this.y += this.speedY * progress;

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
}
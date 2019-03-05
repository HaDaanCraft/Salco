class Bird {
    constructor() {
        this.y = height/2;
        this.x = 70;
        this.width = 315;
        this.height = 236;

        this.gravity = 1.6;
        this.lift = -25;
        this.velocity = 0;
    }

    show(img) {
        // image(img, this.x, this.y, this.width, this.height);
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    up() {
        this.velocity += this.lift;
    }

    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }
}
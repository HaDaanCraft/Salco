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
        image(img, this.x, this.y, this.width, this.height);
    }

    up() {
        this.velocity += this.lift;
    }

    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height-145) {
            this.y = height-145;
            this.velocity = 0;
        }

        if (this.y < -75) {
            this.y = -75;
            this.velocity = 0;
        }

    }
}
class Pipe {
    constructor() {
        this.bottom = random(height / 2);
        this.up = random(height / 2);

        this.x = width;
        this.w = 20;

        this.speed = 5;

        this.highlight = false;
    }

    show() {
        fill(255);
        if (this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.bottom);
        rect(this.x, height - this.up, this.w, this.up);
    }

    update() {
        this.x -= this.speed;
    }

    offscreen() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

    hit(bird) {
        if (bird.y < this.bottom || bird.y > height - this.up) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
}
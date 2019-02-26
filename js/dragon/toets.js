function Toets() {
    this.width = 135;
    this.height = 141;
    this.x = width;
    this.y = height-this.height;
    this.speed = 10;

    this.hits = function(dragon) {
        if (dragon.y > 540-this.height) {
            if (dragon.x > this.x && dragon.x < this.x + this.width) {
                return true;
            }
        }
        return false;
    };

    this.show = function(img) {
        image(img, this.x, this.y, this.width, this.height);
    };

    this.update = function() {
        this.x -= this.speed;
    };

    this.offscreen = function() {
        if (this.x < -this.width) {
            return true;
        } else {
            return false;
        }
    };
}
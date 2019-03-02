function Toets() {
    this.width = 135;
    this.height = 141;
    this.x = width-200;
    this.y = height-this.height;
    this.speed = 10;

    this.hits = function(dragon) {
        if (dragon.y+204.5 > this.y) {
            if (dragon.x+200 > this.x && dragon.x+52 < this.x+134) {
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
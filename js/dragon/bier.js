function Bier() {
    this.width = 220;
    this.height = 125;
    this.x = width+400;

    var yvars = [height-220, height-141];

    this.y = yvars[Math.round(Math.random())];
    this.speed = 10;

    this.hits = function (dragon) {
        // if (dragon.y > this.y && dragon.y < this.y+this.height) {
            // if (dragon.x > this.x && dragon.x < this.x + this.width) {
                // return true;
            // }
        // }
        console.log(dragon.y);
        console.log(this.y)
        // return false;
    };

    this.show = function (img) {
        image(img, this.x, this.y, this.width, this.height);
    };

    this.update = function () {
        this.x -= this.speed;
    };

    this.offscreen = function () {
        if (this.x < -this.width) {
            return true;
        } else {
            return false;
        }
    };




}
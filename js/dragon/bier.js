function Bier() {
    this.width = 220;
    this.height = 125;
    this.x = width+400;

    var yvars = [height-270, height-141];

    this.y = yvars[Math.round(Math.random())];
    this.speed = 10;

    this.hits = function (dragon) {
        if (dragon.y+197.5 > this.y+0.5 && dragon.y+43.5 < this.y+112.5) {
            if (dragon.x+220 > this.x+62 && dragon.x+51 < this.x+145) {
                return true;
            }
        }
        return false;
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
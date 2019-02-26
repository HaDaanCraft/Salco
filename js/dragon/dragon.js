function Dragon() {

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.width = 300;
  this.height = 225;
  this.imagesrc = "/salco/assets/pictures/games/RonyGame.png";
  this.x = 10;
  this.y = 540;

  this.show = function(img) {
    image(img, this.x, this.y, this.width, this.height);
  };

  this.up = function() {
    if (this.y == 540) {
      this.velocity += this.lift;
    }
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity += 0.9;
    this.y += this.velocity;
    // console.log(this.y);

    if (this.y > 540) {
      this.y = 540;
      this.velocity = 0;
    }

  };

}

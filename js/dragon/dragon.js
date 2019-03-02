function Dragon() {

  this.gravity = 0.25;
  this.lift = -27;
  this.velocity = 0;

  this.width = 300;
  this.height = 225;
  this.imagesrc = "/salco/assets/pictures/games/RonyGame.png";
  this.x = 10;
  this.y = 540;

  this.faced = 0;

  this.show = function(img, imgDown) {
    if (this.faced == 0) {
      image(img, this.x, this.y, this.width, this.height);
    } else if (this.faced == 1){
      image(imgDown, this.x, this.y, this.width, this.height);
    }
    console.log(this.faced);
  };

  this.up = function() {
    if (this.y == 540) {
      this.velocity += this.lift;
    }
  };

  this.down = function() {
    this.faced = 1;
  }

  this.normal = function () {
    this.faced = 0;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity += 0.9;
    this.y += this.velocity;

    if (this.y > 540) {
      this.y = 540;
      this.velocity = 0;
    }

  };

}

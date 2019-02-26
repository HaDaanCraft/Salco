var dragon;

function setup() {
  var cnv = createCanvas(1700, 750);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2 + 80 ;
  cnv.position(x, y);
  dragon = new Dragon();
  img = loadImage("/salco/assets/pictures/games/RonyGame.png");
}

function draw() {
  background('gray');
  dragon.show(img);
  dragon.update();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    dragon.up();
    // console.log("UP");
  }
}

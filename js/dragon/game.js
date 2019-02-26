var dragon;
var toetsen = [];
var score;

function preload() {
  font = loadFont('../assets/fonts/Coiny-Regular.ttf');
  soundFormats('mp3');
  backgroundMusic = loadSound('../assets/sounds/games/PaardVanTroje.mp3');
  GameOver = loadSound('../assets/sounds/games/GameOver.mp3');
}

function setup() {
  var cnv = createCanvas(1700, 750);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2 + 80 ;
  cnv.position(x, y);
  dragon = new Dragon();
  toetsen.push(new Toets());
  score = new Score();
  dragonImg = loadImage("/salco/assets/pictures/games/RonyGame.png");
  toetsImg = loadImage("/salco/assets/pictures/games/cactus.jpg");
  textFont(font);
  backgroundMusic.setVolume(0.05);
  backgroundMusic.play();
}

function draw() {
  background('gray');

  for (var i = toetsen.length-1; i >= 0; i--) {
    toetsen[i].show(toetsImg);
    toetsen[i].update();

    if (toetsen[i].hits(dragon)) {
      backgroundMusic.stop();
      gameOver(width * 0.5);
      score.show(10);
      GameOver.setVolume(1);
      GameOver.play();
      $('.replaybutton').css({'display': 'block'});
      throw new Error('This is not an error. This is just to abort javascript');
    }

    if (toetsen[i].offscreen()) {
      toetsen.splice(i, 1);
    }
  }

  dragon.show(dragonImg);
  dragon.update();

  score.show(10);
  score.update();

  if (frameCount % 90 == 0) {
    toetsen.push(new Toets());
  }
}

function gameOver(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  textSize(100);
  textAlign(CENTER);
  fill(0);
  text('Game Over!', x, height/2);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    dragon.up();
    // console.log("UP");
  }
}

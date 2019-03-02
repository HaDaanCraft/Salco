var dragon;
var toetsen = [];
var bieren = [];
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
  dragonImgDown = loadImage("/salco/assets/pictures/games/bird.png");
  toetsImg = loadImage("/salco/assets/pictures/games/cactus.jpg");
  bierImg = loadImage("/salco/assets/pictures/games/bird.png");
  bgImage = loadImage("/salco/assets/pictures/games/background.jpg");
  textFont(font);
  backgroundMusic.setVolume(0.05);
  // backgroundMusic.play();
}

function draw() {
  background(bgImage);

  for (var i = toetsen.length-1; i >= 0; i--) {
    toetsen[i].show(toetsImg);
    // toetsen[i].update();

    if (toetsen[i].hits(dragon)) {
      gameOverFunction();
    }

    if (toetsen[i].offscreen()) {
      toetsen.splice(i, 1);
    }
  }

  for (var i = bieren.length - 1; i >= 0; i--) {
    bieren[i].show(bierImg);
    // bieren[i].update();

    if (bieren[i].hits(dragon)) {
      // gameOverFunction();
    }

    if (bieren[i].offscreen()) {
      bieren.splice(i, 1);
    }
  }

  dragon.show(dragonImg, dragonImgDown);
  dragon.update();

  score.show(10);
  // score.update();

  if (frameCount % 90 == 0) {
    // testorbeer();
  }
}

function testorbeer() {
  var choose = Math.round(Math.random());

  if (choose === 0) {
    toetsen.push(new Toets());
  }  else if (choose === 1) {
    bieren.push(new Bier());
  }

}

function gameOverFunction() {
  backgroundMusic.stop();
  gameOver(width * 0.5);
  score.show(10);
  GameOver.setVolume(0.1);
  GameOver.play();
  hypeGif = createImg("/salco/assets/pictures/games/hype.gif");
  hypeGif.position(width / 2 - 125, height - 150);
  $('.replaybutton').css({
    'display': 'block'
  });
  throw new Error('This is not an error. This is just to abort javascript');
}

function gameOver(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  textSize(100);
  textAlign(CENTER);
  fill(135, 116, 191);
  text('Game Over!', x, height/2);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    dragon.up();
  }
  if (keyCode == DOWN_ARROW) {
    dragon.down();
  }
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    dragon.normal();
  }
}
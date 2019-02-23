function startGame() {
  myGameArea.start();
  myGamePiece = new component(300, 225, "/salco/assets/pictures/games/RonyGame.png", 10, 540);
}

var myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
  this.canvas.width = 1700;
  this.canvas.height = 750;
  this.context = this.canvas.getContext("2d");
  // document.body.insertBefore(this.canvas, document.body.childNodes[3]);
  document.getElementById("RonyDiv").appendChild(this.canvas);
  }
}

function component(width, height, imagesrc, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  var image = new Image();
  image.src = imagesrc;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
}

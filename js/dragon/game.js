var dragon;
function startGame() {
  dragon = new Dragon();
  myGameArea.start();
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

function draw() {
  dragon.show();
  dragon.update();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    dragon.up();
    // console.log("UP");
  }
}

var snake;
var rez = 20;
var food;
var w;
var h;

function setup() {
    var cnv = createCanvas(400, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 + 80;
    cnv.position(x, y);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(5);
    snake = new Snake();
    foodLocation();
}

function foodLocation() {
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x, y);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    }
}

function draw() {
    scale(rez);

    background(220);

    if (snake.eat(food)) {
       foodLocation(); 
    }
    snake.update();
    snake.show();

    if (snake.endGame()) {
        print("END");
        background(255, 0, 0);
        noLoop();
    }

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1)
}
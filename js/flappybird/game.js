var bird;
var pipes = [];
var score;

function setup() {
    var cnv = createCanvas(800, 700);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 + 80;
    cnv.position(x, y);
    bird = new Bird();
    pipes.push(new Pipe());
    score = new Score();
    birdImage = loadImage("/salco/assets/pictures/games/FlappyBird/ronyhead.png");
}

function draw() {
    background(0)

    bird.show(birdImage);
    bird.update();

    score.show(10);
    score.update();

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }

        if (pipes[i].hit(bird)) {
            setTimeout(function() {
                noLoop();
            }, 5);
            setTimeout(function() {
                location.reload();
                loop();
            }, 1000);
        }
    }

    if (frameCount % 80 == 0) {
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}

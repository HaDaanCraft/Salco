var block;
var rez = 10;

function setup() {
    var cnv = createCanvas(400, 730);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 + 80;
    cnv.position(x, y);
    block = new Block();
}


function draw() {
    scale(rez);
    
    background(0);
    
    block.show();
    block.update();
}
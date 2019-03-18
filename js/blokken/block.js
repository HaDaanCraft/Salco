class Block {

    constructor() {
        this.pos = createVector(width/2, 50);
        this.h = 1;
        this.w = 1;
    }

    show() {
        fill(255);
        noStroke();
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
    
    update() {
        this.pos.y += 1;
    }
}
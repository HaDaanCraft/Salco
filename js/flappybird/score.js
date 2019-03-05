class Score {
    constructor() {
        this.score = 0;
        this.highScore = 0;
    }

    show(x) {
        textSize(40);
        textAlign(LEFT);
        fill(255);
        text("Score: " + Math.round(this.score), x, 50);
        text("High Score: " + Math.round(this.highScore), x, 100);
    }

    update() {
        this.score += 0.25;

        if (typeof (Storage) !== "undefined") {
            if(localStorage.getItem("highscoreflappy")) {
                this.highScore = localStorage.getItem("highscoreflappy");
                if (this.highScore < this.score) {
                    this.highScore = this.score;
                    localStorage.setItem("highscoreflappy", this.highScore)
                }
            } else {
                localStorage.setItem("highscoreflappy", this.score);
            }
        } else {
            alert("Your browser does not support localstorage!");
        }
    }
}
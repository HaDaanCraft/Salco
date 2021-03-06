function Score() {
    this.score = 0;
    this.highScore = 0;

    this.show = function (x) {
        textSize(40);
        textAlign(LEFT);
        fill(255);
        text("Score: " + Math.round(this.score), x, 50);
        text("High Score: " + Math.round(this.highScore), x, 100);
    }
    this.update = function () {
        this.score += 0.25;

        if (typeof (Storage) !== "undefined") {
            if (localStorage.getItem("highscoredragon")) {
                this.highScore = localStorage.getItem("highscoredragon");
                if (this.highScore < this.score) {
                    this.highScore = this.score;
                    localStorage.setItem("highscoredragon", this.highScore);
                }
            } else {
                localStorage.setItem("highscoredragon", this.score);
            }
        } else {
            alert("Your browser does not support localstorage!");
        }
    }

}
const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let score = 0;

let snake;
let fruit;
let gameInterval;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();

}());

function startGame() {
  if (!gameInterval) {
    gameInterval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fruit.draw();
      snake.update();
      snake.draw();

      if (snake.eat(fruit)) {
        score++;
        document.getElementById("score").textContent = score;
        fruit.pickLocation();
      }

      snake.checkCollision();
    }, 250);
  }
}

function stopGame() {
  clearInterval(gameInterval);
  gameInterval = null;
}

function gameOver() {
  alert("게임 오버! 점수: " + score);
  snake.reset();
  stopGame();
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale;
  this.ySpeed = 0;
  this.tail = [];

  this.draw = function () {
    ctx.fillStyle = "#4CAF50";

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.tail.length - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.y < 0 || this.x >= canvas.width || this.y >= canvas.height) {
      gameOver();
    }
  };

  this.changeDirection = function (direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale;
        break;
      case "Left":
        this.xSpeed = -scale;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = scale;
        this.ySpeed = 0;
        break;
    }
  };

  this.eat = function (fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.tail.push({ x: this.x - this.xSpeed, y: this.y - this.ySpeed });
      return true;
    }
    return false;
  };

  this.checkCollision = function () {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        gameOver();
      }
    }
  };

  this.reset = function () {
    this.x = 0;
    this.y = 0;
    this.tail = [];
    this.xSpeed = scale;
    this.ySpeed = 0;
    score = 0;
    document.getElementById("score").textContent = score;
  };
}

function Fruit() {
  this.x = 0;
  this.y = 0;

  this.pickLocation = function () {
    this.x = Math.floor(Math.random() * columns) * scale;
    this.y = Math.floor(Math.random() * rows) * scale;
  };

  this.draw = function () {
    ctx.fillStyle = "#FF4136";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}

window.addEventListener("keydown", (event) => {
  const direction = event.key.replace("Arrow", "");
  snake.changeDirection(direction);
});

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("stop-btn").addEventListener("click", stopGame);
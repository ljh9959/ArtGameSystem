/*
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(30);
  ellipse(mouseX, mouseY, 100, 100);
}
*/

// Coding Train
// https://www.youtube.com/watch?v=AaGK-fj-BAM

let snake;
let rez = 20;
let redApple, greenApple;
let w;
let h;
let inFogStart;
let inFogEnd;
let fogSize = 0;
let life = 100;
let full = 0;
let bgRed = 150;

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  redAppleLocation();
  greenAppleLocation();
}

function redAppleLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  redApple = createVector(x, y);
}

function greenAppleLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  greenApple = createVector(x, y)
}

function fog() {
  inFogStart = createVector(fogSize, fogSize);
  inFogEnd = createVector(w - fogSize, w - fogSize);

  fill(200);
  rect(inFogStart.x, inFogStart.y, w - fogSize * 2, w - fogSize * 2);
  // rect(0, 0, w, fogSize);
  // rect(0, 0, fogSize, h);
  // rect(0, h - fogSize, w, fogSize);
  // rect(w - fogSize, 0, fogSize, h);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(bgRed, 150, 150);
  if (snake.eat(redApple)) {
    redAppleLocation()
    full++;
    fogSize = fogSize + 3;
  }
  if (snake.eat(greenApple)) {
    greenAppleLocation()
    fogSize = 0;

    if (life >= 100) {
      life = 100;
    } else {
      life = life + 10;
    }
  }

  fog();
  snake.update();
  snake.show();

  if (snake.where(inFogStart, inFogEnd)) {
    bgRed = 150;
  } else {
    bgRed = random (150, 255);
    life--;
  }

  if (floor(life / 10) <= 0) {
    print("END GAME");
    background(255, 0, 0);
    fill(0);
    textSize(4);
    textAlign(CENTER, CENTER);
    text('YOU LOSE', w/2, h/2);
    noLoop();
  }
  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    fill(0);
    textSize(4);
    textAlign(CENTER, CENTER);
    text('YOU LOSE', w/2, h/2);
    noLoop();
  }
  if (full == 10)
  {
    print("You Win");
    background(0, 190, 200);
    fill(255);
    textSize(4);
    textAlign(CENTER, CENTER);
    text('YOU WIN', w/2, h/2);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(redApple.x, redApple.y, 1, 1);
  fill(0, 255, 0);
  rect(greenApple.x, greenApple.y, 1, 1);

  fill(0);
  textSize(1);
  textAlign(LEFT, TOP);
  text('Life : ' + floor(life / 10), 0, 0);
  textAlign(RIGHT, TOP);
  text(full + ' / 10', w, 0);
}

let canvas;
let canvasWidth = 400;
let canvasHeight = 400;

let frog;
let car1;
let goal;
let sound_hit;

function preload() {
  sound_hit = loadSound('hit.wav');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();

  resetGame();
}

function draw() {
  background(220);


  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
  }



  if (frog.bounce(car1)) {
    sound_hit.play();
  }

  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);


  if (frog.overlap(goal)) {
    nextLevel();
  }

  drawSprites();
  checkGameOver();

}


function resetGame() {
  frog = createSprite(width/2, height-30, 20, 40);
  goal = createSprite(width/2, 0, width, 4);
  car1 = createSprite(0, height/2, 60, 30);

  car1.setVelocity(random(3, 10), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
}


function checkGameOver() {
  if (frog.position.x <= 0 || width <= frog.position.x) {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);

  }
}


function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}


function playHitSound() {
  sound_hit.play();
}

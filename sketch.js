let canvas;
let canvasWidth = 400;
let canvasHeight = 400;

let frog;
let car1,car2,car3,car4
let carV1, carV2, carV3, carV4
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
    car1.setVelocity(random(0.5, 1), 0);
  }
  if (car3.position.x >= width) {
    car3.position.x = 0;
    car3.setVelocity(random(0.5, 1), 0);
  }

  if (car2.position.x <= 0) {
    car2.position.x = width;
    car2.setVelocity(random(-1, -0.5), 0);
  }
  if (car4.position.x <= 0) {
    car4.position.x = width;
    car4.setVelocity(random(-1, -0.5), 0);
  }

//차간 거리 조정(충돌 방지)
  if (car1.position.x - car3.position.x <= 100 && car1.position.x - car3.position.x >= 10)
  {
    carV3 -= 0.1
    car3.setVelocity(carV1, 0);
  }if (car3.position.x - car1.position.x <= 100 && car3.position.x - car1.position.x >= 10)
  {
    carV1 -= 0.1
    car1.setVelocity(carV3, 0);
  }

  if (car2.position.x - car4.position.x <= 100 && car2.position.x - car4.position.x >= 10)
  {
    carV4 -= 0.1
    car4.setVelocity(carV4, 0);
  }if (car4.position.x - car2.position.x <= 100 && car4.position.x - car2.position.x >= 10)
  {
    carV2 -= 0.1
    car2.setVelocity(carV2, 0);
  }


  if (frog.bounce(car1)) {
    sound_hit.play();
  }
  if (frog.bounce(car2)) {
    sound_hit.play();
  }
  if (frog.bounce(car3)) {
    sound_hit.play();
  }
  if (frog.bounce(car4)) {
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
  car1 = createSprite(0, height/2-25, 60, 30);
  car3 = createSprite(0- width/2, height/2-25, 60, 30);
  car2 = createSprite(width, height/2+25, 60, 30);
  car4 = createSprite(width+width/2, height/2+25, 60, 30);

  carV1 = random(0.5, 1), 0
  carV3 = random(0.5, 1), 0
  carV2 = random(-1, -0.5), 0
  carV4 = random(-1, -0.5), 0

  car1.setVelocity(carV1, 0);
  car3.setVelocity(carV3, 0);
  car2.setVelocity(carV2, 0);
  car4.setVelocity(carV4, 0);
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

<<<<<<< Updated upstream
let canvas;
let canvasWidth = 800;
let canvasHeight = 400;
let zoomzoom = 1;

var ghost;
var bg;
var frame;
var obj;

var bgm;
var music01;
var meow;

var SCENE_W = 6400;
var SCENE_H = 3200;

function preload() {

  ghost = createSprite(400, 200, 50, 100);

  var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  myAnimation.offY = 18;

  ghost.addAnimation('moving', 'assets/ghost_walk0001.png', 'assets/ghost_walk0004.png');
  ghost.addAnimation('sleep', 'assets/box0001.png', 'assets/box0003.png');

  bg = new Group();

  //create some background for visual reference
  for (var i = 0; i < 80; i++) {
    //create a sprite and add the 3 animations
    var rock = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
    //cycles through rocks 0 1 2
    rock.addAnimation('normal', 'assets/rocks' + i % 3 + '.png');
    bg.add(rock);
  }

  cats = new Group();

  for (var i = 0; i < 6; i++) {
    var cat = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
    cat.addAnimation('normal', 'assets/sleepingCat.png');
    cats.add(cat);
  }

  obj = new Group();

  var headphone = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
  headphone.addAnimation('normal', 'assets/headphone.png');
  obj.add(headphone);

  newbed = new Group();

  var bed = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
  bed.addAnimation('normal', 'assets/bed.png');
  newbed.add(bed);


  bgm = loadSound("assets/soundtrack.mp3");
  music01 = loadSound("assets/911.mp3");
  meow = loadSound("assets/CatMeow.wav");
  frame = loadImage('assets/frame.png');

}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth / 2 - canvasWidth / 2, 20);
  bgm.play();
  bgm.loop();
  bgmOnOff = 1;
  zoomzoom = 0.4;
=======
//Sprite creation
//Click to create a new sprite with random speed

function setup() {
  createCanvas(800, 400);
>>>>>>> Stashed changes
}

function draw() {
  background(255, 255, 255);

<<<<<<< Updated upstream

  //mouse trailer, the speed is inversely proportional to the mouse distance
  ghost.velocity.x = (camera.mouseX - ghost.position.x) / 20;
  ghost.velocity.y = (camera.mouseY - ghost.position.y) / 20;


  //a camera is created automatically at the beginning

  if (keyDown('1')) {
    zoomzoom = 1;
  } else if (keyDown('2')) {
    zoomzoom = 0.8;
  } else if (keyDown('3')) {
    zoomzoom = 0.6;
  } else if (keyDown('4')) {
    zoomzoom = 0.4;
  } else if (keyDown('5')) {
    zoomzoom = 0.2;
  }

  camera.zoom = zoomzoom;

  //set the camera position to the ghost position
  camera.position.x = ghost.position.x;
  camera.position.y = ghost.position.y;

  //limit the ghost movements
  if (ghost.position.x < 0)
    ghost.position.x = 0;
  if (ghost.position.y < 0)
    ghost.position.y = 0;
  if (ghost.position.x > SCENE_W)
    ghost.position.x = SCENE_W;
  if (ghost.position.y > SCENE_H)
    ghost.position.y = SCENE_H;

  //draw the scene
  //rocks first
  drawSprites(bg);
  drawSprites(cats);
  drawSprites(obj);
  drawSprites(newbed);

  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  ellipse(ghost.position.x, ghost.position.y + 90, 80, 30);
  //character on the top
  drawSprite(ghost);

  ghost.collide(cats);

  if (ghost.collide(cats)) {
    meow.play();
  }

  if (ghost.overlap(obj)) {
    if (bgmOnOff == 1) {
      bgm.stop();
      music01.play();
      bgmOnOff = 0;
    }
  } else {
    if (bgmOnOff == 0) {
      bgm.play();
      music01.stop();
      bgmOnOff = 1;
    }
  }

  if (ghost.overlap(newbed)) {
    ghost.changeAnimation('sleep');
  } else {
    ghost.changeAnimation('floating');
  }
  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  camera.off();
  image(frame, 0, 0);
=======
  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
>>>>>>> Stashed changes
}

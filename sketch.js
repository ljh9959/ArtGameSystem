let canvas;
let canvasWidth = 800;
let canvasHeight = 400;
let zoomzoom = 1;

var ghost;
var bg;
var frame;
var obj;

var bgm;

var SCENE_W = 6400;
var SCENE_H = 3200;

function preload() {

  ghost = createSprite(400, 200, 50, 100);

  var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  myAnimation.offY = 18;

  ghost.addAnimation('moving', 'assets/ghost_walk0001.png', 'assets/ghost_walk0004.png');

  bg = new Group();

  //create some background for visual reference
  for (var i = 0; i < 80; i++) {
    //create a sprite and add the 3 animations
    var rock = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
    //cycles through rocks 0 1 2
    rock.addAnimation('normal', 'assets/rocks' + i % 3 + '.png');
    bg.add(rock);
  }

  obj = new Group();

  var headphone = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
  headphone.addAnimation('normal', 'assets/headphone.png');
  obj.add(headphone);

  bgm = loadSound("assets/soundtrack.mp3");
  frame = loadImage('assets/frame.png');

}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth / 2 - canvasWidth / 2, 20);
  bgm.play();
  bgm.loop();
  zoomzoom = 0.4;
}

function draw() {
  background(255, 255, 255);


  //mouse trailer, the speed is inversely proportional to the mouse distance
  ghost.velocity.x = (camera.mouseX - ghost.position.x) / 20;
  ghost.velocity.y = (camera.mouseY - ghost.position.y) / 20;

  if (ghost.overlap(obj)) {
    bgm.stop();
  }

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
  drawSprites(obj);

  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  ellipse(ghost.position.x, ghost.position.y + 90, 80, 30);
  //character on the top
  drawSprite(ghost);

  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  camera.off();
  image(frame, 0, 0);
}

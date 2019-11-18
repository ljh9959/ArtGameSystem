let canvas;
let canvasWidth = 800;
let canvasHeight = 400;

var sprite_sheet_image;

function preload() {
  sprite_sheet_image = loadImage('amp.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(30);
  ellipse(mouseX, mouseY, 100, 100);

 image(sprite_sheet_image, 250, 40, 500, 154);
}

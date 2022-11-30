var cnv;
let bgImg;
let jingle;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload(){
  bgImg = loadImage("assets/caroling.png");
  soundFormats('wav');
  jingle = loadSound("assets/jingle.wav");
}
function setup() {
  cnv = createCanvas(1100, 800);
  centerCanvas();
}

function draw() {
  background(125);
  image(bgImg,0,0);
}

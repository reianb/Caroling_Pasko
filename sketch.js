var cnv;
let bgImg;
let jingle = [];
let capture;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload(){
  bgImg = loadImage("assets/caroling.png");
  soundFormats('wav');
  for (let i = 0; i < 2; i++){
  jingle[i] = loadSound("assets/jingle.wav");
  }
}
function setup() {
  cnv = createCanvas(1100, 800);
  centerCanvas();
}

function draw() {
  background(75, 139, 59);
  image(bgImg,0,0);
}

function mouseMoved() {
  if(jingle[0].isPlaying()==false){
    jingle[0].play();
  } else if (jingle[1].isPlaying()==false){
    jingle[1].play();
  }
}

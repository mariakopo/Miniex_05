var tekst = [];
function preload() {
  tekst = loadStrings('Text/HotlineBling.txt');
}

function setup() {
  createCanvas(600, 800);
}


function draw() {
  background(255, 0, 0);
//Text
  textSize(35);
  textStyle(ITALIC);
  fill(252, 180, 213);
  stroke(0);
  strokeWeight(3);
  //text(tekst[0], width/2, 150);
  text(tekst[0], mouseX, mouseY, 300, 400);
}

function mousePressed(){
 shuffle(tekst, true);
}



var font;

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(600,300);
  background(51);
  //textFont(font);
  //textSize(192);
  //fill(255);
  //noStroke();
  //  text('train', 100, 200);
  
  var points = font.textToPoints('train', 100, 200, 192);
  
  for (var i = 0; i < points.length; i++) {
   var pt =points[i];
   strokeWeight(8);
   stroke(255);
   point(pt.x, pt.y)
   
  }
}

function draw() {
}
// Daniel Shiffman
// http://codingtra.in
// Steering Behaviors Live Stream
// Video: https://www.youtube.com/watch?v=L1nHni9HMBw#t=1h44m00s

var font;
var vehicles = [];

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
  
  var points = font.textToPoints('train', 100, 200, 192, {sampleFactor: 0.25});
  
  for (var i = 0; i < points.length; i++) {
   var pt =points[i];
   var vehicle = new Vehicle(pt.x, pt.y);
   vehicles.push(vehicle);
   //strokeWeight(8);
   //stroke(255);
   //point(pt.x, pt.y)
   
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
}

}

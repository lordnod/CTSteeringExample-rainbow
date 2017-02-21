// Daniel Shiffman
// http://codingtra.in
// Steering Behaviors Live Stream
// Video: https://www.youtube.com/watch?v=L1nHni9HMBw#t=1h44m00s

function Vehicle(x,y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxspeed = 10;
  this.maxforce = 1;
}


Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);
  
  arrive.mult(1);
  flee.mult(5);
  
  this.applyForce(arrive);
  this.applyForce(flee)
  
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}


Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
var vRed = [209, 0, 0];
var vOrange = [255, 102, 34];
var vYellow = [255, 218, 33];
var vGreen = [51, 221, 0];
var vBlue = [17, 51, 204];
var vIndigo = [34, 0, 102];
var vViolet = [51, 0, 68];

var RoyGBiv = [vRed, vOrange, vYellow, vGreen, vBlue, vIndigo, vViolet];

var vColor = random(RoyGBiv)

  strokeWeight(8)
   stroke(vColor[0], vColor[1], vColor[2]);
   point(this.pos.x, this.pos.y);   
}

Vehicle.prototype.arrive = function(target) {
 var desired = p5.Vector.sub(target, this.pos);
 var d = desired.mag();
 var speed = this.maxspeed;
 if (d < 100) {
   var speed = map(d, 0, 100, 0, this.maxspeed);
 } 
 desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}


Vehicle.prototype.flee = function(target) {
 var desired = p5.Vector.sub(target, this.pos);
 var d = desired.mag();
 if (d < 50) {
 desired.setMag(this.maxspeed);
 desired.mult(-1); 
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
    return steer;
 } else 
  return createVector(0,0);
}

function preload(){
  // Load the image
  img = loadImage('Canada1.png');
  // image from https://en.wikipedia.org/wiki/Canada
  
}
  
function setup() {
  createCanvas(1000,800);
  pw = new PlaneWheel(100,500,.5,0)
}

function draw() {
background("white");
  
  image(img, 550, 160);
  // person
  stroke(153, 117, 0);
  strokeWeight(10);
  fill("yellow");
  circle(100,100,120);
  stroke(0, 0, 127);
  fill("blue");
  rect(50,160,100,150,40,40,5,5);
  stroke(153, 117, 0);
  fill("yellow");
  circle(40,220,50);
  circle(160,220,50);

  // airplane
  strokeWeight(5);
  stroke("gray");
  fill("white");
  rightTriangle(450,100-20,-50,-50);
  rightTriangle(650,135,50,-50);
  stroke(0, 57, 107);
  fill(47, 135, 212);
  rightTriangle(670,135,-90,-120);
  stroke("gray");
  fill("white")
  rect(380, 65, 300, 70, 35,15,5,35);
  stroke(77, 172, 201);
  fill(119, 221, 252);
  for(x = 430; x < 600; x = x += 25){
      rect(x+10,80,15,30,7)
  }

  // suitcase
  stroke(43, 56, 64);
  strokeWeight(10);
  noFill();
  rect(267.5,150,35,100,15);
  fill(100, 117, 130);
  rect(250,170,70,100,15)

  pw.draw();
  pw.planeWheelUp(-5);

  // airplane wheels
 // stroke(50);
 //  fill(100);
 //  rect(450,200,20,150);
 //  stroke(150);
 //  fill(225);
 //  circle(460,350,60);
  
}

function mousePressed(){

}

function keyReleased(){

}


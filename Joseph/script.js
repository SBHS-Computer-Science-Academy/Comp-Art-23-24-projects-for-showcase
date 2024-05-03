
function setup() {
  createCanvas(1200, 1200);
  background(86, 143, 240);
}

function draw() {
  noStroke()
  gradienthorizontal(color(137, 87, 247), color(255, 118, 33), 100)
  cloud(0, 0)
  cloud(200, 150)
  cloud(700, 0)
  cloud(600, 200,)
  cloud(800, 300)
  cloud(100, 300)
  cloud(300, 400)
  ocean()
  sun()
}
function ocean() {
  fill('navy')
  beginShape()
  vertex(0, 1100)
  //vertex(50, 1050)
  curveVertex(0, 1100)
  curveVertex(150, 1050)
  curveVertex(200, 1100)
  curveVertex(250, 1050)
  curveVertex(300, 1100)
  curveVertex(400, 1100)
  curveVertex(500, 1050)
  curveVertex(600, 1100)
  curveVertex(700, 1050)
  curveVertex(800, 1100)
  curveVertex(900, 1100)
  curveVertex(1000, 1050)
  curveVertex(1100, 1100)
  curveVertex(1150, 1050)
  curveVertex(1200, 1100)
  vertex(1200,1050)
  vertex(1200, 1200)
  vertex(0, 1200)
  vertex(0,1100)
  endShape()
//https://p5js.org/reference/#/p5/ellipse
}
//function ellipse
function cloud(x, y) {
  push()
  translate(x, y)
  fill(242, 126, 196)
  ellipse(50, 200, 50, 50);
  ellipse(75, 200, 50, 70, 125);
  ellipse(100, 200, 50, 80);
  ellipse(125, 200, 50, 100);
  ellipse(150, 200, 50, 100);
  ellipse(175, 200, 50, 100);
  ellipse(200, 200, 50, 100);
  ellipse(225, 200, 50, 80);
  ellipse(250, 200, 50, 70);
  ellipse(275, 200, 50, 50);
  pop()
}
function sun() {
  fill(248, 252, 114)
ellipse(600, 985, 200,)

  
}

function gradienthorizontal(clr1, clr2, steps = 10) {
  for (var i = 0; i < steps; i = i + 1) {
    fill(lerpColor(clr1, clr2, i / steps));
    rect(0, i * height / steps, width, height / steps)
  }
}


// function mousePressed() {


// }

// function radiancalculator() {
//   noFill();
//   stroke(255);
//   arc(225, 250, 100, 100, 0, mouseX / 70);
//   text(round(mouseX / 70, 1), 225, 250);
//   print(degrees(mouseX / 70), 225, 250);

// }

// function pointlocater(xlocation, ylocation) {
//   stroke(255, 0, 0);
//   fill(255, 0, 0);
//   print('x = ', mouseX, 'y = ', mouseY);
//   text('x = ' + mouseX + ' y = ' + mouseY, xlocation, ylocation);
// }   
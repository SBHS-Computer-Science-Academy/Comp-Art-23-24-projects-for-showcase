function setup() {
  let myCanvas = createCanvas(800, 800);
  myCanvas.parent("myCanvas");
  
  createConsole("dots");
  noLoop();
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  textSize(20);
}

function draw() {
  background("skyblue");
  
  fill("limeGreen");
  rect(0, 600, 1000, 200); // ground
  fill("black");
  line(65,604,63,796)
  line(167,607,171,797)
  line(269,608,271,793)
  line(371,608,375,793)
  line(473,608,476,796)
  line(574,605,576,794)
  fill('yellow')
  rect(23+17,500,17,100)
  rect(17,483,65,17)
  rect(65+17,500-61,19,61)
  rect(0,500-61,19,61)
strokeWeight(5)
line(335, 535,318, 616)
  line(318, 617,343, 667)
  line(315, 615,285, 662)
  line(325, 562,277, 568)
  line(331, 563,387, 549)
  fill('black')
  circle(336, 513,30)
  fill('brown')
  ellipse(388, 543,50,20)
  fill('black')
  square(254,558,19)
  triangle(298, 566,356, 561,321, 613)
}
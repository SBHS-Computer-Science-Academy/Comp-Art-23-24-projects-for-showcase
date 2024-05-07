function setup() {
  let myCanvas = createCanvas(800, 800);
  myCanvas.parent("myCanvas");

  createConsole("dots");

  noLoop();

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  noStroke();  // to turn stroke back on, use stroke('black')
}

function draw() {
  background("white");

  drawTopLeftEmoji();
  drawBottomLeftEmoji();
  drawBottomRightEmoji();
  scale(2);
  translate(-400, 0);
  drawTopRightEmoji();
}

function drawTopLeftEmoji() {
  fill("yellow");
  square(0, 0, 400); // upper left background

  // top left emoji: joy
  fill("Chocolate");
  circle(200, 200, 300); // head
  fill("black");
  circle(136, 162, 60); //left eye
  circle(264, 162, 60); //right eye
  arc(200, 266, 120, 50, 0, 180)

  fill("Chocolate");
  circle(136, 182, 60); // left eye smiley
  circle(264, 182, 60); // right eye smiley	

  // fill('black');
  // stroke('black');
  // strokeWeight(14);
  // triangle(196, 196, 172, 227, 220, 228) // nose
  // quad(105, 141,84, 139,122, 87, 136, 104) // left eyebrow
  // line(84, 155, 132, 90); //left eyebrow
  // noStroke(); // turn off stroke lines
}

function drawTopRightEmoji() {
  fill('green');
  square(400, 0, 400); // upper right background
  //fill(0)

  //arc(550, 170,70,110,0,180)

  fill(181, 0, 0)
  ellipse(460, 140, 80)
  ellipse(480, 90, 90)
  ellipse(520, 70, 50)
  ellipse(730, 140, 80)
  ellipse(710, 90, 90)
  ellipse(670, 70, 50)

  fill(255)
  ellipse(600, 200, 300)

  fill(143, 143, 143)
  ellipse(640, 140, 70, 110)

  ellipse(550, 140, 70, 110)

  fill(255)
  ellipse(640, 150, 80, 110)
  ellipse(550, 150, 80, 110)

  fill(0, 139, 232)
  ellipse(550, 170, 70, 110)
  ellipse(640, 170, 70, 110)

  fill(255)
  ellipse(550, 170, 55, 100)
  ellipse(640, 170, 55, 100)

  fill(0)
  ellipse(550, 170, 30, 70)
  ellipse(640, 170, 30, 70)

  fill(255)
  ellipse(550, 170, 10, 70)
  ellipse(640, 170, 10, 70)

  fill(0)
  ellipse(550, 170, 10, 65)
  ellipse(640, 170, 10, 65)

  fill(176, 0, 6)
  circle(598, 240, 50)

  stroke(255)
  bezier(604, 221, 610, 224, 616, 230, 616, 244)
  bezier(599, 221, 597, 221, 596, 221, 594, 221)

  //mouth
  noFill()
  strokeWeight(4)
  stroke(0)
  bezier(460, 190, 540, 300, 645, 300, 730, 190)

  bezier(460, 190, 565, 390, 635, 390, 730, 190)

  line(483, 218, 488, 239)
  line(490, 241, 498, 234)
  line(500, 235, 505, 263)
  line(516, 248, 506, 266)
  line(517, 248, 521, 288)
  line(521, 288, 537, 260)
  line(539, 260, 540, 308)
  line(541, 311, 561, 269)
  line(563, 270, 560, 326)
  line(561, 327, 582, 274)
  line(585, 274, 584, 337)
  line(586, 338, 610, 273)
  line(612, 273, 618, 334)
  line(621, 334, 635, 268)
  line(636, 267, 652, 313)
  line(653, 313, 653, 259)
  line(653, 260, 673, 287)
  line(675, 287, 672, 248)
  line(674, 250, 692, 259)
  line(692, 259, 692, 233)
  line(692, 234, 706, 235)
  line(707, 235, 706, 218)

  fill(0)

  arc(550, 170, 70, 110, 180, 0)

  arc(640, 170, 70, 110, 180, 0)
  noStroke()
}

function drawBottomLeftEmoji() {
  fill('red');
  square(0, 400, 400); // lower left background


  fill(0)
  ellipse(200, 600, 300)
  fill(255)
  ellipse(251, 542, 100)
  ellipse(141, 540, 50)
  fill("red")
  ellipse(150, 548, 20)
  ellipse(255, 525, 60)

  
}

function drawBottomRightEmoji() {
  fill('blue');
  square(400, 400, 400); // lower right background












































}

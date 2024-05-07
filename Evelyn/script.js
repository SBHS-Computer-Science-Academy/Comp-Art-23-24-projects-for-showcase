//function preload() {
//  helloKitty = loadImage("hellokitty.png");
//}

function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");

  createConsole();

  textAlign(CENTER, CENTER); 

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
}
function draw() {
  background("white");

  image(helloKitty,0,0);

  drawMouseLines()
  noFill()
  stroke("white")
  drawLeftHand()
  drawRightHand()
  drawHead()
  drawLeftBow()
  drawRightBow()
  drawMiddleBow()
  draw1Whisker()
  draw2Whisker()
  draw3Whisker()
  draw4Whisker()
  draw5Whisker()
  draw6Whisker()
  drawLine()

    fill("black");
    circle(387, 325, 30);
    circle(593, 323, 30);
    
    fill("yellow")
    circle(498, 400, 30);



  }
  function drawHead() {
   //fill("black");
    beginShape();
    curveVertex(501, 481);
    curveVertex(501, 481);
    curveVertex(540, 482);
    curveVertex(573, 477);
    curveVertex(607, 474);
    curveVertex(642, 461);
    curveVertex(677, 447);
    curveVertex(703, 423);
    curveVertex(734, 384);
    curveVertex(750, 335);
    curveVertex(753, 292);
    curveVertex(743, 223);
    curveVertex(718, 184);
    curveVertex(714, 174);
    curveVertex(728, 137);
    curveVertex(725, 84);
    curveVertex(711, 54);
    curveVertex(701, 45);
    curveVertex(678, 47);
    curveVertex(650, 52);
    curveVertex(620, 64);
    curveVertex(595, 76);
    curveVertex(546, 78);
    curveVertex(475, 79);
    curveVertex(424, 84);
    curveVertex(397, 93);
    curveVertex(370, 78);
    curveVertex(344, 66);
    curveVertex(309, 57);
    curveVertex(288, 57);
    curveVertex(278, 70);
    curveVertex(266, 90);
    curveVertex(258, 125);
    curveVertex(262, 159);
    curveVertex(275, 181);
    curveVertex(261, 214);
    curveVertex(249, 238);
    curveVertex(245, 277);
    curveVertex(245, 325);
    curveVertex(259, 365);
    curveVertex(276, 394);
    curveVertex(304, 429);
    curveVertex(333, 444);
    curveVertex(362, 455);
    curveVertex(387, 461);
    curveVertex(433, 471);
    curveVertex(479, 476);
    curveVertex(505, 481);
    curveVertex(505, 481);
    endShape();
  }
  function drawLeftHand() {
   fill("white");
    beginShape();
    curveVertex(308, 438); // control point
    curveVertex(308, 438);
    curveVertex(293, 448);
    curveVertex(285, 462);
    curveVertex(282, 477);
    curveVertex(283, 491);
    curveVertex(291, 510);
    curveVertex(305, 522);
    curveVertex(322, 527);
    curveVertex(336, 528);
    curveVertex(351, 522);
    curveVertex(359, 516);
    curveVertex(375, 520);
    curveVertex(388, 520);
    curveVertex(404, 516);
    curveVertex(413, 508);
    curveVertex(421, 493);
    curveVertex(424, 470);
    curveVertex(421, 452);
    curveVertex(411, 438);
    curveVertex(390, 426);
    curveVertex(370, 420);
    curveVertex(351, 419);
    curveVertex(338, 422);
    curveVertex(325, 426);
    curveVertex(311, 434);
    curveVertex(296, 445); // control point
    endShape();
  }
  function drawRightHand() {
    fill("white");
    beginShape();
    curveVertex(643, 422); // control point
    curveVertex(643, 422);
    curveVertex(620, 427);
    curveVertex(598, 440);
    curveVertex(587, 459);
    curveVertex(585, 473);
    curveVertex(586, 491);
    curveVertex(602, 512);
    curveVertex(614, 519);
    curveVertex(627, 521);
    curveVertex(648, 517);
    curveVertex(650, 517);
    curveVertex(662, 523);
    curveVertex(684, 529);
    curveVertex(704, 524);
    curveVertex(719, 508);
    curveVertex(724, 473);
    curveVertex(718, 453);
    curveVertex(703, 438);
    curveVertex(675, 426);
    curveVertex(659, 421);
    curveVertex(640, 421); // control point
    endShape();
  }
  function drawRightBow() {
   fill("red");
    beginShape();
    curveVertex(673, 129); // control point
    curveVertex(673, 129);
    curveVertex(696, 124);
    curveVertex(719, 124);
    curveVertex(744, 133);
    curveVertex(754, 155);
    curveVertex(753, 178);
    curveVertex(744, 205);
    curveVertex(727, 223);
    curveVertex(706, 241);
    curveVertex(676, 245);
    curveVertex(651, 230);
    curveVertex(639, 212);
    curveVertex(638, 203);
    curveVertex(656, 193);
    curveVertex(667, 178);
    curveVertex(673, 163);
    curveVertex(674, 142);
    curveVertex(672, 131);
    curveVertex(675, 130);
    curveVertex(675, 130); // control point
    endShape();
  }
  function drawLeftBow() {
    fill("red");
    beginShape();
    curveVertex(621, 99); // control point
    curveVertex(621, 99);
    curveVertex(611, 70);
    curveVertex(589, 47);
    curveVertex(562, 35);
    curveVertex(544, 38);
    curveVertex(527, 49);
    curveVertex(506, 75);
    curveVertex(499, 94);
    curveVertex(490, 131);
    curveVertex(494, 157);
    curveVertex(508, 174);
    curveVertex(524, 182);
    curveVertex(551, 181);
    curveVertex(576, 171);
    curveVertex(581, 147);
    curveVertex(591, 125);
    curveVertex(619, 107);
    curveVertex(622, 100);
    curveVertex(622, 100); // control point
    endShape();
  }
  function drawMiddleBow() {
    // fill("black");
    beginShape();
    curveVertex(578, 172); // control point
    curveVertex(578, 172);
    curveVertex(594, 190);
    curveVertex(618, 203);
    curveVertex(636, 205);
    curveVertex(644, 199);
    curveVertex(658, 192);
    curveVertex(674, 158);
    curveVertex(674, 132);
    curveVertex(643, 113);
    curveVertex(621, 110);
    curveVertex(606, 115);
    curveVertex(592, 123);
    curveVertex(583, 141);
    curveVertex(579, 168);
    curveVertex(580, 173);
    curveVertex(580, 173); // control point
    endShape();
  }
  function draw1Whisker() {
     fill("black");
    beginShape();
    curveVertex(286, 313); // control point
    curveVertex(286, 313);
    curveVertex(253, 308);
    curveVertex(230, 308);
    curveVertex(197, 312);
    curveVertex(186, 315);
    curveVertex(186, 315); // control point
    endShape();
  }
  function draw2Whisker() {
   fill("black");
    beginShape();
    curveVertex(287, 359); // control point
    curveVertex(287, 359);
    curveVertex(261, 363);
    curveVertex(238, 369);
    curveVertex(218, 376);
    curveVertex(218, 376); // control point
    endShape();
  }
  function draw3Whisker() {
    fill("black");
    beginShape();
    curveVertex(317, 399); // control point
    curveVertex(317, 399);
    curveVertex(296, 410);
    curveVertex(275, 419);
    curveVertex(254, 431);
    curveVertex(236, 445);
    curveVertex(236, 445); // control point
    endShape();
  }
  function draw4Whisker() {
    fill("black");
    beginShape();
    curveVertex(711, 300); // control point
    curveVertex(711, 300);
    curveVertex(733, 295);
    curveVertex(763, 289);
    curveVertex(791, 290);
    curveVertex(811, 292);
    curveVertex(811, 292); // control point
    endShape();
  }
  function draw5Whisker() {
     fill("black");
    beginShape();
    curveVertex(723, 345); // control point
    curveVertex(723, 345);
    curveVertex(746, 347);
    curveVertex(768, 350);
    curveVertex(792, 354);
    curveVertex(792, 354); // control point
    endShape();
  }
  function draw6Whisker() {
  fill("black");
    beginShape();
    curveVertex(700, 393); // control point
    curveVertex(700, 393);
    curveVertex(721, 400);
    curveVertex(746, 410);
    curveVertex(773, 423);
    curveVertex(773, 423); // control point
    endShape();
  }







function mouseIsInRect(x, y, w, h, showLines = true){
  if (showLines) {
    stroke("black");
    strokeWeight(1);
    noFill();
    rect(x, y, w, h);
  }
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

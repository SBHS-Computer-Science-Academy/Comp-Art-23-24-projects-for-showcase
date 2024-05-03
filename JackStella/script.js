let cloud1X = 0; // global variables are outside of any function
let cloud2X = 100;
let buckets = []
let gameState = "START"

class Bucket {
  constructor(startX, startY) {
    this.x = startX
    this.y = startY
    this.x = random(width); // Set initial x position randomly
    this.y = startY; // Set initial y position above the canvas
    this.speed = 10; // Set falling speed
    this.maxSpeed = 15;
    this.width = 30
    this.height = 13
    this.stackHeight = 0
    this.stackSpacing = 10
    this.hitboxX = this.x - this.width / 2;
    this.hitboxY = startY

  }
  moveWithMouse() {
    this.x = mouseX
    if (this.x > width) this.x = width
    this.hitboxX = this.x;

  }
  fall() {
    this.y += this.speed
    if (this.y > 800) gameState = "GAMEOVER"

    this.hitboxX = this.x;
    this.hitboxY = this.y;

    this.checkForCollision()


  }
  checkForCollision() {
    let hit = collideRectRect(this.hitboxX, this.hitboxY, this.width, this.height, playerbucket.hitboxX, playerbucket.hitboxY, playerbucket.width, playerbucket.height);
    if (hit) {
      playerbucket.stackHeight += 1
      playerbucket.hitboxY -= playerbucket.stackSpacing;
      this.x = random(width)
      this.y -= 800
    }
  }
  show() {
    push()
    translate(this.x, this.y)
    translate(-453, -588)
    this.drawStack()
    drawBucket()
    pop()
    // rect(this.x - this.width / 2, this.y - this.stackHeight * this.stackSpacing, this.width, this.height)
  }
  drawStack() {
    fill(101, 207, 85)
    stroke('black');
    for (let i = this.stackHeight; i > 0; i -= 1) {
      ellipse(453, 588 - i * this.stackSpacing, 102, 13)
    }
  }
}
function preload() {
 // myFont = loadFont('Lemon-Regular.ttf');
}
function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");
  buckets = []
  for (let i = 0; i < 4; i++) {
    bucket = new Bucket(random(1000), -200 * i)
    buckets.push(bucket)
  }
  playerbucket = new Bucket(500, 588)

  createConsole("lines");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  frameRate(30); // fixes a bug in p5.js that increases the framerate the first time you click the mouse
}

function draw() {
  background("lightblue");
  circleGradient(width / 8, 112, 160, "orangeRed", "yellow"); // sun

  drawCloud(cloud1X, 343);
  cloud1X += 5; // increment
  if (cloud1X > 1200) cloud1X = -600
  drawCloud(cloud2X, 143);
  cloud2X += 3; // increment
  if (cloud2X > 1200) cloud2X = -600
  fill('red')
  textSize(30)
  text("Score:  " + playerbucket.stackHeight, 900, 50)

  drawSand();
  drawOcean();
  drawPalmTree();
  drawShovel();
  drawcrab();

  if (gameState == "PLAY") {
    for (let bucket of buckets) {
      bucket.fall()
      bucket.show()
    }
  } else if (gameState == "GAMEOVER") {
    textSize(50)
    fill("red")
    text("GAMEOVER", 250,330,500)
  }
  
  else {
    text("Use your mouse to move the bucket on the sand and catch the falling buckets. Click the mouse to start", 250, 330, 500)
  }
  playerbucket.moveWithMouse()
  playerbucket.show()

  drawMouseLines("black");
}

function drawSand() {
  fill(227, 216, 163)
  noStroke()
  rect(0, 686, 1000, 800)
}
function drawPalmTree() {
  fill("SaddleBrown");
  beginShape();
  curveVertex(85, 687); // control point
  curveVertex(85, 687);
  curveVertex(88, 663);
  curveVertex(96, 637);
  curveVertex(104, 614);
  curveVertex(114, 580);
  curveVertex(126, 543);
  curveVertex(142, 508);
  curveVertex(153, 481);
  curveVertex(169, 446);
  curveVertex(182, 426);
  curveVertex(190, 418);
  curveVertex(222, 420);
  curveVertex(212, 434);
  curveVertex(206, 448);
  curveVertex(194, 470);
  curveVertex(179, 501);
  curveVertex(166, 531);
  curveVertex(153, 568);
  curveVertex(145, 595);
  curveVertex(129, 632);
  curveVertex(115, 658);
  curveVertex(105, 689);
  curveVertex(83, 687);
  curveVertex(83, 687); // control point
  endShape();
  fill('green')
  beginShape();
  curveVertex(221, 422); // control point
  curveVertex(221, 422);
  curveVertex(232, 429);
  curveVertex(239, 433);
  curveVertex(241, 437);
  curveVertex(249, 449);
  curveVertex(256, 465);
  curveVertex(261, 483);
  curveVertex(271, 466);
  curveVertex(272, 451);
  curveVertex(271, 435);
  curveVertex(263, 421);
  curveVertex(253, 418);
  curveVertex(237, 414);
  curveVertex(223, 413);
  curveVertex(212, 415);
  curveVertex(210, 417);
  curveVertex(221, 422);
  curveVertex(221, 422); // control point
  endShape();
  beginShape();
  vertex(211, 418);
  vertex(224, 411);
  vertex(234, 405);
  vertex(246, 404);
  vertex(257, 403);
  vertex(266, 404);
  vertex(271, 405);
  vertex(280, 407);
  vertex(289, 410);
  vertex(296, 415);
  vertex(299, 416);
  vertex(304, 421);
  vertex(308, 426);
  vertex(308, 427);
  vertex(310, 409);
  vertex(305, 402);
  vertex(298, 399);
  vertex(278, 390);
  vertex(262, 386);
  vertex(251, 386);
  vertex(242, 387);
  vertex(239, 388);
  vertex(232, 391);
  vertex(227, 394);
  vertex(224, 397);
  vertex(221, 404);
  vertex(216, 410);
  vertex(210, 419);
  endShape();
  beginShape();
  curveVertex(215, 417); // control point
  curveVertex(215, 417);
  curveVertex(190, 417);
  curveVertex(174, 419);
  curveVertex(159, 426);
  curveVertex(154, 432);
  curveVertex(140, 437);
  curveVertex(127, 444);
  curveVertex(120, 449);
  curveVertex(118, 442);
  curveVertex(123, 433);
  curveVertex(133, 425);
  curveVertex(141, 418);
  curveVertex(148, 412);
  curveVertex(157, 406);
  curveVertex(166, 399);
  curveVertex(179, 394);
  curveVertex(197, 392);
  curveVertex(210, 403);
  curveVertex(216, 412);
  curveVertex(216, 418);
  curveVertex(216, 418); // control point
  endShape();
  beginShape();
  curveVertex(216, 412); // control point
  curveVertex(216, 412);
  curveVertex(219, 398);
  curveVertex(218, 385);
  curveVertex(216, 378);
  curveVertex(214, 373);
  curveVertex(207, 364);
  curveVertex(200, 356);
  curveVertex(190, 348);
  curveVertex(180, 345);
  curveVertex(170, 344);
  curveVertex(157, 341);
  curveVertex(149, 341);
  curveVertex(132, 344);
  curveVertex(124, 347);
  curveVertex(139, 350);
  curveVertex(152, 353);
  curveVertex(165, 362);
  curveVertex(184, 375);
  curveVertex(191, 381);
  curveVertex(199, 390);
  curveVertex(211, 401);
  curveVertex(216, 412);
  curveVertex(216, 412); // control point
  endShape();
  fill(69, 51, 12);
  beginShape();
  vertex(200, 402);
  vertex(196, 402);
  vertex(194, 403);
  vertex(191, 406);
  vertex(190, 411);
  vertex(190, 416);
  vertex(194, 419);
  vertex(198, 420);
  vertex(205, 420);
  vertex(207, 417);
  vertex(209, 413);
  vertex(208, 409);
  vertex(208, 406);
  vertex(206, 403);
  vertex(204, 402);
  vertex(198, 403);
  endShape();
  beginShape();
  vertex(220, 408);
  vertex(216, 409);
  vertex(212, 411);
  vertex(209, 413);
  vertex(208, 419);
  vertex(209, 421);
  vertex(212, 425);
  vertex(213, 426);
  vertex(217, 426);
  vertex(223, 425);
  vertex(227, 422);
  vertex(227, 420);
  vertex(228, 416);
  vertex(228, 413);
  vertex(227, 412);
  vertex(224, 408);
  vertex(219, 407);
  endShape();
  beginShape();
  vertex(210, 394);
  vertex(207, 396);
  vertex(205, 398);
  vertex(204, 401);
  vertex(205, 404);
  vertex(205, 406);
  vertex(206, 408);
  vertex(209, 411);
  vertex(213, 411);
  vertex(216, 411);
  vertex(220, 410);
  vertex(223, 407);
  vertex(224, 402);
  vertex(224, 399);
  vertex(223, 398);
  vertex(220, 395);
  vertex(216, 393);
  vertex(211, 392);
  vertex(209, 394);
  endShape();
}
function drawShovel() {
  fill("yellow");
  beginShape();
  vertex(866, 686);
  vertex(880, 633);
  vertex(877, 631);
  vertex(873, 627);
  vertex(873, 624);
  vertex(873, 620);
  vertex(874, 611);
  vertex(875, 603);
  vertex(877, 599);
  vertex(879, 595);
  vertex(912, 605);
  vertex(912, 608);
  vertex(911, 611);
  vertex(911, 615);
  vertex(910, 621);
  vertex(907, 624);
  vertex(905, 628);
  vertex(902, 631);
  vertex(899, 634);
  vertex(896, 636);
  vertex(892, 637);
  vertex(890, 637);
  vertex(875, 688);
  vertex(866, 687);
  endShape();
}
function drawOcean() {
  fill(10, 53, 171);
  beginShape();
  vertex(1, 602);
  vertex(14, 606);
  vertex(27, 606);
  vertex(40, 602);
  vertex(55, 589);
  vertex(65, 579);
  vertex(77, 568);
  vertex(84, 562);
  vertex(104, 553);
  vertex(116, 551);
  vertex(129, 552);
  vertex(138, 553);
  vertex(142, 555);
  vertex(127, 560);
  vertex(125, 563);
  vertex(121, 570);
  vertex(120, 579);
  vertex(123, 586);
  vertex(129, 591);
  vertex(147, 596);
  vertex(163, 599);
  vertex(188, 599);
  vertex(195, 598);
  vertex(208, 596);
  vertex(220, 589);
  vertex(230, 586);
  vertex(243, 580);
  vertex(252, 572);
  vertex(262, 564);
  vertex(271, 558);
  vertex(283, 550);
  vertex(295, 546);
  vertex(302, 547);
  vertex(310, 548);
  vertex(321, 553);
  vertex(330, 560);
  vertex(335, 564);
  vertex(316, 563);
  vertex(309, 561);
  vertex(302, 567);
  vertex(300, 575);
  vertex(300, 582);
  vertex(303, 589);
  vertex(312, 593);
  vertex(325, 596);
  vertex(338, 598);
  vertex(354, 599);
  vertex(378, 598);
  vertex(395, 598);
  vertex(416, 598);
  vertex(429, 595);
  vertex(452, 582);
  vertex(461, 579);
  vertex(478, 569);
  vertex(498, 557);
  vertex(519, 556);
  vertex(532, 561);
  vertex(535, 565);
  vertex(521, 566);
  vertex(517, 568);
  vertex(514, 576);
  vertex(516, 586);
  vertex(532, 597);
  vertex(555, 599);
  vertex(600, 597);
  vertex(630, 596);
  vertex(649, 594);
  vertex(679, 586);
  vertex(699, 575);
  vertex(712, 564);
  vertex(728, 555);
  vertex(741, 554);
  vertex(765, 554);
  vertex(779, 556);
  vertex(785, 563);
  vertex(771, 562);
  vertex(765, 565);
  vertex(762, 574);
  vertex(761, 581);
  vertex(762, 586);
  vertex(769, 590);
  vertex(799, 598);
  vertex(818, 598);
  vertex(833, 598);
  vertex(839, 598);
  vertex(870, 597);
  vertex(887, 589);
  vertex(888, 586);
  vertex(901, 576);
  vertex(906, 570);
  vertex(924, 556);
  vertex(940, 553);
  vertex(952, 554);
  vertex(964, 558);
  vertex(949, 563);
  vertex(947, 568);
  vertex(945, 577);
  vertex(948, 583);
  vertex(955, 586);
  vertex(965, 589);
  vertex(982, 590);
  vertex(991, 590);
  vertex(996, 590);
  vertex(1000, 589);
  vertex(1001, 687);
  vertex(-1, 687);
  vertex(-1, 601);
  endShape();
}
function drawcrab() {
  fill('red')
  beginShape();
  curveVertex(756, 663); // control point
  curveVertex(756, 663);
  curveVertex(758, 660);
  curveVertex(764, 657);
  curveVertex(766, 655);
  curveVertex(760, 653);
  curveVertex(750, 656);
  curveVertex(747, 662);
  curveVertex(751, 668);
  curveVertex(756, 663);
  curveVertex(765, 669);
  curveVertex(769, 666);
  curveVertex(775, 662);
  curveVertex(780, 660);
  curveVertex(787, 661);
  curveVertex(792, 666);
  curveVertex(792, 667);
  curveVertex(795, 668);
  curveVertex(802, 667);
  curveVertex(808, 663);
  curveVertex(810, 662);
  curveVertex(812, 661);
  curveVertex(809, 659);
  curveVertex(806, 658);
  curveVertex(801, 657);
  curveVertex(799, 657);
  curveVertex(797, 656);
  curveVertex(797, 656);
  curveVertex(798, 655);
  curveVertex(807, 651);
  curveVertex(814, 651);
  curveVertex(822, 653);
  curveVertex(823, 657);
  curveVertex(823, 659);
  curveVertex(824, 662);
  curveVertex(825, 665);
  curveVertex(822, 667);
  curveVertex(821, 668);
  curveVertex(816, 669);
  curveVertex(811, 667);
  curveVertex(809, 667);
  curveVertex(806, 669);
  curveVertex(804, 670);
  curveVertex(802, 672);
  curveVertex(799, 672);
  curveVertex(797, 673);
  curveVertex(795, 674);
  curveVertex(794, 675);
  curveVertex(804, 682);
  curveVertex(806, 687);
  curveVertex(803, 687);
  curveVertex(798, 683);
  curveVertex(792, 679);
  curveVertex(787, 680);
  curveVertex(787, 684);
  curveVertex(785, 685);
  curveVertex(784, 681);
  curveVertex(780, 681);
  curveVertex(779, 687);
  curveVertex(775, 686);
  curveVertex(776, 681);
  curveVertex(765, 679);
  curveVertex(753, 684);
  curveVertex(752, 687);
  curveVertex(750, 687);
  curveVertex(750, 683);
  curveVertex(761, 676);
  curveVertex(761, 671);
  curveVertex(752, 667);
  curveVertex(752, 667); // control point
  endShape();
  fill("black")
  circle(785, 668, 3)
  circle(774, 667, 3)
}
function drawCloud(x, y) {
  translate(x, y); // move cloud according to parameters
  translate(-319, -200); // center of the cloud is at (180, 80)
  fill("white");
  beginShape();
  vertex(711, 226);
  vertex(939, 226);
  vertex(939, 220);
  vertex(939, 211);
  vertex(934, 204);
  vertex(924, 202);
  vertex(917, 198);
  vertex(913, 187);
  vertex(912, 177);
  vertex(904, 173);
  vertex(895, 173);
  vertex(886, 174);
  vertex(874, 168);
  vertex(870, 162);
  vertex(863, 153);
  vertex(853, 151);
  vertex(844, 152);
  vertex(840, 158);
  vertex(835, 165);
  vertex(824, 164);
  vertex(807, 160);
  vertex(795, 161);
  vertex(790, 165);
  vertex(782, 173);
  vertex(774, 177);
  vertex(758, 177);
  vertex(741, 177);
  vertex(736, 181);
  vertex(734, 189);
  vertex(731, 196);
  vertex(718, 203);
  vertex(711, 204);
  vertex(700, 213);
  vertex(693, 222);
  vertex(690, 225);
  vertex(713, 226);
  endShape();
  beginShape();
  vertex(213, 312);
  vertex(446, 312);
  vertex(446, 305);
  vertex(441, 299);
  vertex(431, 295);
  vertex(419, 292);
  vertex(410, 278);
  vertex(404, 270);
  vertex(394, 269);
  vertex(385, 270);
  vertex(367, 266);
  vertex(350, 259);
  vertex(338, 259);
  vertex(332, 263);
  vertex(307, 261);
  vertex(295, 260);
  vertex(285, 263);
  vertex(275, 267);
  vertex(268, 269);
  vertex(254, 268);
  vertex(248, 269);
  vertex(242, 276);
  vertex(238, 286);
  vertex(229, 295);
  vertex(217, 298);
  vertex(205, 300);
  vertex(200, 304);
  vertex(196, 311);
  vertex(220, 312);
  endShape();
  resetMatrix(); // undo the translates
}

function drawBucket() {
  push()
  fill(101, 207, 85)
  stroke('black')
  quad(407, 589, 424, 688, 485, 688, 500, 589, 407, 590)
  stroke('black')
  ellipse(453, 588, 102, 13)
  fill('yellow')
  beginShape();
  vertex(407, 592);
  vertex(413, 592);
  vertex(415, 598);
  vertex(417, 602);
  vertex(423, 609);
  vertex(433, 614);
  vertex(440, 618);
  vertex(449, 620);
  vertex(457, 622);
  vertex(467, 624);
  vertex(473, 625);
  vertex(478, 626);
  vertex(484, 626);
  vertex(493, 624);
  vertex(500, 611);
  vertex(502, 608);
  vertex(503, 602);
  vertex(503, 600);
  vertex(504, 594);
  vertex(503, 590);
  vertex(497, 591);
  vertex(498, 597);
  vertex(498, 599);
  vertex(498, 603);
  vertex(495, 612);
  vertex(491, 618);
  vertex(485, 619);
  vertex(479, 619);
  vertex(475, 619);
  vertex(469, 618);
  vertex(461, 617);
  vertex(454, 614);
  vertex(445, 611);
  vertex(436, 609);
  vertex(432, 605);
  vertex(427, 599);
  vertex(424, 597);
  vertex(422, 593);
  vertex(412, 592);
  endShape();
  pop()
}
function mousePressed() {
  if (gameState == "GAMEOVER") {
   setup()
  }
  gameState="PLAY"
}

class PerspectiveBackground {
  //created by Jaden Molwane used as a class example, it is not yours to use in your project.
  constructor() {
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);
  }

  draw() {
    this.drawBackground();
    this.sun();
    this.mountain2();
    this.mountain1();
    this.ground();
    this.road();
    this.leftLine();
    this.rightLine();
    this.middleLine();
    this.cactus1();
    this.cactus2();
    this.cactus3();
    this.cactus4();
    this.rock1();
    this.rock2();
  }

  drawBackground() {
    gradientHorizontal(
      0,
      0,
      2*width,
      height,
      color(140, 0, 31),
      color(227, 80, 0),
      1000
    );
  }

  road() {
    push();
    strokeWeight(5);
    stroke(0);
    fill("black");
    beginShape();
    vertex(23, 800);
    vertex(501, 320);
    vertex(977, 799);
    endShape();
    pop();
  }
  mountain1() {
    push();
    fill(49, 49, 49);
    beginShape();
    vertex(2, 321);
    vertex(0, 164);
    vertex(52, 195);
    vertex(65, 177);
    vertex(114, 193);
    vertex(117, 176);
    vertex(160, 231);
    vertex(189, 181);
    vertex(230, 183);
    vertex(258, 212);
    vertex(285, 186);
    vertex(303, 215);
    vertex(342, 238);
    vertex(373, 199);
    vertex(387, 261);
    vertex(438, 273);
    vertex(458, 303);
    vertex(503, 322);
    vertex(-3, 323);
    endShape();
    pop();
  }
  ground() {
    push()
  rectGradient(1, 323, 500, 800, color(0, 0, 0), color(89, 51, 0), "vertical");
  rectGradient(500, 323, 500, 800, color(89, 51, 0), color(0), "vertical");
  pop()
  }
  sun() {
    push();
    fill(255, 157, 0);
    circle(499, 222, 100);
    pop();
  }
  mountain2() {
    push();
    fill("black");
    beginShape();
    vertex(996, 188);
    vertex(908, 197);
    vertex(876, 189);
    vertex(873, 208);
    vertex(822, 201);
    vertex(806, 185);
    vertex(792, 187);
    vertex(762, 206);
    vertex(734, 196);
    vertex(712, 191);
    vertex(707, 201);
    vertex(680, 213);
    vertex(645, 189);
    vertex(644, 202);
    vertex(643, 225);
    vertex(618, 231);
    vertex(618, 223);
    vertex(605, 232);
    vertex(598, 239);
    vertex(586, 229);
    vertex(579, 218);
    vertex(565, 223);
    vertex(554, 236);
    vertex(530, 226);
    vertex(512, 222);
    vertex(494, 224);
    vertex(491, 229);
    vertex(468, 226);
    vertex(462, 214);
    vertex(446, 217);
    vertex(399, 221);
    vertex(395, 210);
    vertex(367, 213);
    vertex(365, 219);
    vertex(344, 214);
    vertex(298, 209);
    vertex(287, 218);
    vertex(260, 220);
    vertex(242, 208);
    vertex(201, 204);
    vertex(193, 211);
    vertex(164, 241);
    vertex(115, 198);
    vertex(86, 202);
    vertex(0, 193);
    vertex(2, 320);
    vertex(1000, 340);
    vertex(1000, 190);
    endShape();

    beginShape();
    vertex(178, 205);
    vertex(159, 198);
    vertex(136, 204);
    vertex(85, 220);
    vertex(166, 257);
    vertex(218, 229);
    vertex(177, 205);
    endShape();
    pop();
  }
  leftLine() {
    push();
    fill(210);
    beginShape();
    vertex(21, 800);
    vertex(495, 321);
    vertex(497, 323);
    vertex(24, 800);
    endShape();
    pop();
  }
  rightLine() {
    push();
    fill(210);
    beginShape();
    vertex(980, 800);
    vertex(504, 323);
    vertex(506, 321);
    vertex(983, 800);
    endShape();
    pop();
  }
  middleLine() {
    fill(230);
    beginShape();
    vertex(498, 799);
    vertex(501, 319);
    vertex(443, 799);
    vertex(562, 799);
    vertex(500, 319);
    endShape();
  }

  cactus1() {
    push();
    fill(10, 26, 0);
    beginShape();
    curveVertex(99, 670); // control point
    curveVertex(99, 670);
    curveVertex(95, 532);
    curveVertex(35, 513);
    curveVertex(37, 427);
    curveVertex(61, 432);
    curveVertex(63, 479);
    curveVertex(94, 485);
    curveVertex(96, 374);
    curveVertex(121, 360);
    curveVertex(128, 504);
    curveVertex(164, 521);
    curveVertex(167, 468);
    curveVertex(180, 465);
    curveVertex(185, 560);
    curveVertex(133, 563);
    curveVertex(133, 668);
    curveVertex(133, 668); // control point
    endShape();
    pop();
  }
  cactus2() {
    push();
    fill(10, 26, 0);
    beginShape();
    curveVertex(685, 488); // control point
    curveVertex(685, 488);
    curveVertex(680, 422);
    curveVertex(635, 414);
    curveVertex(634, 367);
    curveVertex(650, 366);
    curveVertex(650, 394);
    curveVertex(671, 394);
    curveVertex(676, 317);
    curveVertex(697, 317);
    curveVertex(701, 368);
    curveVertex(726, 371);
    curveVertex(729, 333);
    curveVertex(745, 332);
    curveVertex(745, 389);
    curveVertex(703, 389);
    curveVertex(711, 488);
    curveVertex(711, 488); // control point
    endShape();
    pop();
  }
  cactus3() {
    fill(6, 22, 0);
    beginShape();
    curveVertex(407, 381); // control point
    curveVertex(407, 381);
    curveVertex(408, 369);
    curveVertex(385, 368);
    curveVertex(389, 350);
    curveVertex(397, 349);
    curveVertex(399, 359);
    curveVertex(413, 358);
    curveVertex(422, 321);
    curveVertex(440, 324);
    curveVertex(431, 345);
    curveVertex(446, 347);
    curveVertex(451, 325);
    curveVertex(461, 324);
    curveVertex(450, 359);
    curveVertex(429, 361);
    curveVertex(416, 401);
    curveVertex(402, 399);
    curveVertex(409, 382);
    curveVertex(409, 382); // control point
    endShape();
  }
  cactus4() {
    fill(10, 26, 0);
    beginShape();
    curveVertex(579, 339); // control point
    curveVertex(579, 339);
    curveVertex(579, 333);
    curveVertex(569, 332);
    curveVertex(570, 325);
    curveVertex(572, 325);
    curveVertex(573, 328);
    curveVertex(581, 329);
    curveVertex(585, 312);
    curveVertex(594, 312);
    curveVertex(592, 323);
    curveVertex(598, 323);
    curveVertex(600, 317);
    curveVertex(608, 318);
    curveVertex(604, 334);
    curveVertex(588, 331);
    curveVertex(588, 343);
    curveVertex(588, 343); // control point
    endShape();
  }
  rock1() {
    fill(31, 31, 31);
    beginShape();
    vertex(260, 360);
    vertex(191, 359);
    vertex(204, 345);
    vertex(204, 329);
    vertex(225, 335);
    vertex(236, 327);
    vertex(240, 347);
    vertex(266, 337);
    vertex(257, 365);
    endShape();
  }
  rock2() {
    fill(21, 21, 21);
    beginShape();
    vertex(804, 371);
    vertex(852, 372);
    vertex(847, 349);
    vertex(829, 347);
    vertex(828, 357);
    vertex(799, 344);
    vertex(780, 353);
    vertex(788, 361);
    vertex(769, 371);
    endShape();
  }
}

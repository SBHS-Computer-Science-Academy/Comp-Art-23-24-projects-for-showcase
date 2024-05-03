function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");
  createConsole("lines");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
  clear();
  drawBackground();
  rectGradient(0, 440, 1000, 360, 'Peru', 'navajoWhite');

  seaweed();
  fill('white');
  fish1();
  fish2();
  babyFish();
  extra1();
  shark();
  extra2();
  mini();
  seaNoodle();
  seaweed2();
  fill('white')
  //text("Create a silhouette using at least 3 irregular shapes.  You may use gradients if you like.", width / 2, 700);
  drawMouseLines("black");

  noStroke();
  fill('Grey')
  ellipse(70, 750, 350, 380)
  ellipse(970, 750, 250, 350)
  fill('dimGrey')
  ellipse(180, 750, 320, 270)
  ellipse(830, 750, 280, 230)
  ellipse(950, 750, 300, 200)

  fill(255, 228, 94)
  ellipse(781, 187, 55, 55)
  fill('black')
  ellipse(769, 190, 25, 25)

  fill('white');
}

function drawBackground() {

  rectGradient(0, 0, width, height, color('lightSeaGreen'), color('Purple')); // for details, see "gradient.js" file

}


function seaweed() {
  fill("oliveDrab");
  beginShape();
  curveVertex(66, 460); // control point
  curveVertex(66, 460);
  curveVertex(34, 421);
  curveVertex(40, 333);
  curveVertex(19, 219);
  curveVertex(35, 129);
  curveVertex(28, 94);
  curveVertex(47, 105);
  curveVertex(51, 136);
  curveVertex(36, 195);
  curveVertex(33, 229);
  curveVertex(51, 306);
  curveVertex(54, 361);
  curveVertex(47, 421);
  curveVertex(65, 461);
  curveVertex(65, 461); // control point
  endShape();

  // fill("black");
  beginShape();
  curveVertex(67, 460); // control point
  curveVertex(67, 460);
  curveVertex(63, 415);
  curveVertex(22, 344);
  curveVertex(55, 261);
  curveVertex(24, 178);
  curveVertex(71, 97);
  curveVertex(85, 81);
  curveVertex(80, 105);
  curveVertex(40, 170);
  curveVertex(50, 212);
  curveVertex(75, 264);
  curveVertex(37, 343);
  curveVertex(84, 422);
  curveVertex(65, 460);
  curveVertex(65, 460); // control point
  endShape();


  fill(132, 163, 70);


  beginShape();
  curveVertex(63, 450); // control point
  curveVertex(63, 450);
  curveVertex(44, 421);
  curveVertex(58, 373);
  curveVertex(48, 325);
  curveVertex(64, 292);
  curveVertex(45, 241);
  curveVertex(55, 176);
  curveVertex(37, 130);
  curveVertex(62, 89);
  curveVertex(62, 102);
  curveVertex(48, 128);
  curveVertex(59, 156);
  curveVertex(66, 176);
  curveVertex(58, 229);
  curveVertex(79, 291);
  curveVertex(64, 336);
  curveVertex(74, 364);
  curveVertex(58, 416);
  curveVertex(63, 450);
  endShape();

  fill("yellowGreen");

  beginShape();
  curveVertex(65, 459); // control point
  curveVertex(65, 459);
  curveVertex(98, 402);
  curveVertex(71, 374);
  curveVertex(93, 318);
  curveVertex(72, 284);
  curveVertex(97, 230);
  curveVertex(67, 164);
  curveVertex(108, 144);
  curveVertex(113, 105);
  curveVertex(106, 107);
  curveVertex(100, 134);
  curveVertex(62, 142);
  curveVertex(46, 164);
  curveVertex(78, 230);
  curveVertex(53, 265);
  curveVertex(53, 301);
  curveVertex(76, 323);
  curveVertex(49, 359);
  curveVertex(59, 391);
  curveVertex(78, 408);
  curveVertex(66, 457);
  curveVertex(66, 457); // control point
  endShape();


  // fill("black");
  beginShape();
  curveVertex(69, 452); // control point
  curveVertex(69, 452);
  curveVertex(16, 419);
  curveVertex(33, 367);
  curveVertex(11, 310);
  curveVertex(40, 240);
  curveVertex(7, 177);
  curveVertex(17, 120);
  curveVertex(7, 93);
  curveVertex(40, 78);
  curveVertex(35, 89);
  curveVertex(20, 97);
  curveVertex(35, 115);
  curveVertex(23, 166);
  curveVertex(28, 186);
  curveVertex(52, 213);
  curveVertex(58, 247);
  curveVertex(31, 306);
  curveVertex(35, 329);
  curveVertex(53, 362);
  curveVertex(35, 413);
  curveVertex(69, 452);
  curveVertex(69, 452); // control point
  endShape();
}

function seaweed2() {

  fill('oliveDrab')

  beginShape();
  curveVertex(913, 607); // control point
  curveVertex(913, 607);
  curveVertex(891, 541);
  curveVertex(948, 497);
  curveVertex(889, 438);
  curveVertex(841, 352);
  curveVertex(912, 282);
  curveVertex(877, 200);
  curveVertex(903, 146);
  curveVertex(907, 157);
  curveVertex(892, 192);
  curveVertex(923, 257);
  curveVertex(932, 284);
  curveVertex(857, 365);
  curveVertex(917, 436);
  curveVertex(966, 494);
  curveVertex(918, 543);
  curveVertex(927, 612);
  curveVertex(927, 612); // control point
  endShape();

  beginShape();
  curveVertex(895, 607); // control point
  curveVertex(895, 607);
  curveVertex(870, 536);
  curveVertex(843, 458);
  curveVertex(867, 369);
  curveVertex(832, 291);
  curveVertex(876, 229);
  curveVertex(857, 168);
  curveVertex(851, 174);
  curveVertex(862, 225);
  curveVertex(804, 277);
  curveVertex(838, 361);
  curveVertex(815, 449);
  curveVertex(852, 574);
  curveVertex(889, 652);
  curveVertex(897, 610);
  curveVertex(897, 610); // control point
  endShape();

  // fill("black");
  beginShape();
  curveVertex(875, 618); // control point
  curveVertex(875, 618);
  curveVertex(891, 511);
  curveVertex(897, 446);
  curveVertex(890, 343);
  curveVertex(896, 267);
  curveVertex(870, 190);
  curveVertex(881, 280);
  curveVertex(868, 375);
  curveVertex(881, 459);
  curveVertex(860, 557);
  curveVertex(872, 621);
  curveVertex(872, 621); // control point
  endShape();

  fill(132, 163, 70)

  // fill("black");
  beginShape();
  curveVertex(899, 644); // control point
  curveVertex(899, 644);
  curveVertex(917, 536);
  curveVertex(858, 463);
  curveVertex(903, 377);
  curveVertex(836, 289);
  curveVertex(889, 224);
  curveVertex(882, 158);
  curveVertex(889, 140);
  curveVertex(904, 186);
  curveVertex(904, 231);
  curveVertex(857, 287);
  curveVertex(913, 352);
  curveVertex(922, 392);
  curveVertex(881, 460);
  curveVertex(937, 527);
  curveVertex(915, 597);
  curveVertex(915, 597); // control point
  endShape();

  beginShape();
  curveVertex(848, 612); // control point
  curveVertex(848, 612);
  curveVertex(828, 537);
  curveVertex(858, 426);
  curveVertex(832, 323);
  curveVertex(823, 282);
  curveVertex(861, 368);
  curveVertex(874, 453);
  curveVertex(846, 524);
  curveVertex(847, 615);
  curveVertex(847, 615); // control point
  endShape();

  beginShape();
  curveVertex(917, 532); // control point
  curveVertex(917, 532);
  curveVertex(866, 598);
  curveVertex(877, 611);
  curveVertex(930, 544);
  curveVertex(917, 532);
  curveVertex(917, 532); // control point
  endShape();

  fill("YellowGreen");
  beginShape();
  curveVertex(882, 695); // control point
  curveVertex(882, 695);
  curveVertex(805, 565);
  curveVertex(826, 430);
  curveVertex(806, 314);
  curveVertex(838, 209);
  curveVertex(833, 169);
  curveVertex(849, 177);
  curveVertex(857, 226);
  curveVertex(826, 305);
  curveVertex(846, 399);
  curveVertex(844, 460);
  curveVertex(827, 556);
  curveVertex(879, 642);
  curveVertex(882, 695);
  endShape();

  // fill("black");
  beginShape();
  curveVertex(873, 646); // control point
  curveVertex(873, 646);
  curveVertex(845, 538);
  curveVertex(871, 460);
  curveVertex(861, 333);
  curveVertex(877, 261);
  curveVertex(867, 178);
  curveVertex(871, 147);
  curveVertex(879, 165);
  curveVertex(887, 230);
  curveVertex(891, 269);
  curveVertex(881, 335);
  curveVertex(891, 454);
  curveVertex(867, 538);
  curveVertex(896, 634);
  curveVertex(873, 646);
  curveVertex(873, 646); // control point
  endShape();


  beginShape();
  curveVertex(898, 638); // control point
  curveVertex(898, 638);
  curveVertex(940, 541);
  curveVertex(918, 437);
  curveVertex(936, 323);
  curveVertex(917, 207);
  curveVertex(928, 152);
  curveVertex(909, 161);
  curveVertex(899, 203);
  curveVertex(904, 253);
  curveVertex(916, 318);
  curveVertex(898, 420);
  curveVertex(912, 502);
  curveVertex(898, 638);
  curveVertex(898, 638); // control point
  endShape();

}

function fish1() {
  vertexGradient([329, 346, 374, 398, 414, 413, 432, 409, 400, 387, 357, 342, 328, 328], [139, 118, 113, 120, 103, 132, 149, 148, 145, 163, 161, 156, 147, 139], 366, 137, color('yellow'), color('orange'), center = "point")
  // fill("black");
  // beginShape();
  // vertex(329, 139);
  // vertex(346, 118);
  // vertex(374, 113);
  // vertex(398, 120);
  // vertex(414, 103);
  // vertex(413, 132);
  // vertex(432, 149);
  // vertex(409, 148);
  // vertex(400, 145);
  // vertex(387, 163);
  // vertex(357, 161);
  // vertex(342, 156);
  // vertex(328, 147);
  // vertex(328, 139);
  // endShape();
}

function fish2() {
  //   x = array of x vertices in square brackets e.g. [1, 2, 3]
  //   y = array of y vertices in square brackets e.g. [100, 200, 300]
  //   centerX = x value of the center of the shape
  //   centerY = y value of the center of the shape
  //   startColor = outside color of shape
  //   endColor = inside color of shape
  //   center = "point", "horizontal", or "vertical"
  vertexGradient([154, 127, 105, 95, 74, 82, 77, 91, 95, 115, 139, 154, 157, 154], [196, 188, 199, 204, 192, 211, 228, 221, 217, 228, 222, 209, 201, 196], 123, 210, color(245, 90, 190), color(136, 60, 110), center = "point")

  // fill("black");
  // beginShape();
  // vertex(154, 196);
  // vertex(127, 188);
  // vertex(105, 199);
  // vertex(95, 204);
  // vertex(74, 192);
  // vertex(82, 211);
  // vertex(77, 228);
  // vertex(91, 221);
  // vertex(95, 217);
  // vertex(115, 228);
  // vertex(139, 222);
  // vertex(154, 209);
  // vertex(157, 201);
  // vertex(154, 196);
  // endShape();
}

function babyFish() {
  // fill("black");
  beginShape();
  vertex(434, 118);
  vertex(448, 106);
  vertex(464, 110);
  vertex(468, 106);
  vertex(473, 99);
  vertex(469, 114);
  vertex(482, 115);
  vertex(475, 121);
  vertex(465, 122);
  vertex(449, 126);
  vertex(438, 124);
  vertex(433, 119);
  endShape();
}

function extra1() {
  fill(114, 38, 11);
  beginShape();
  vertex(711, 222);
  vertex(630, 227);
  vertex(577, 257);
  vertex(496, 251);
  vertex(441, 295);
  vertex(449, 306);
  vertex(469, 301);
  vertex(462, 291);
  vertex(502, 265);
  vertex(571, 270);
  vertex(597, 264);
  vertex(636, 243);
  vertex(712, 232);
  vertex(710, 222);
  endShape();
}


function shark() {
  vertexGradient([599, 572, 528, 464, 403, 408, 413, 407, 371, 319, 282, 273, 285, 250, 253, 308, 328, 358, 392, 436, 411, 418, 479, 502, 569, 607, 599], [332, 305, 286, 285, 251, 264, 284, 289, 290, 280, 230, 245, 297, 340, 345, 334, 323, 326, 342, 356, 377, 379, 375, 361, 359, 340, 331], 378, 316, color(168, 199, 211), color(120, 174, 185), center = "point")
  // fill(147, 174, 185);
  // beginShape();
  // vertex(599, 332);
  // vertex(572, 305);
  // vertex(528, 286);
  // vertex(464, 285);
  // vertex(403, 251);
  // vertex(408, 264);
  // vertex(413, 284);
  // vertex(407, 289);
  // vertex(371, 290);
  // vertex(319, 280);
  // vertex(282, 230);
  // vertex(273, 245);
  // vertex(285, 297);
  // vertex(250, 340);
  // vertex(253, 345);
  // vertex(308, 334);
  // vertex(328, 323);
  // vertex(358, 326);
  // vertex(392, 342);
  // vertex(436, 356);
  // vertex(411, 377);
  // vertex(418, 379);
  // vertex(479, 375);
  // vertex(502, 361);
  // vertex(569, 359);
  // vertex(607, 340);
  // vertex(599, 331);
  // endShape();
}

function extra2() {
  fill(172, 57, 16);
  beginShape();
  vertex(715, 237);
  vertex(695, 283);
  vertex(662, 293);
  vertex(618, 359);
  vertex(570, 378);
  vertex(530, 371);
  vertex(558, 348);
  vertex(550, 330);
  vertex(536, 329);
  vertex(538, 338);
  vertex(542, 348);
  vertex(512, 368);
  vertex(518, 381);
  vertex(569, 391);
  vertex(589, 390);
  vertex(628, 372);
  vertex(643, 355);
  vertex(670, 306);
  vertex(708, 296);
  vertex(722, 266);
  vertex(728, 237);
  vertex(715, 238);
  endShape();
}

function mini() {
  fill("white");
  beginShape();
  vertex(309, 367);
  vertex(330, 365);
  vertex(339, 373);
  vertex(330, 376);
  vertex(311, 372);
  vertex(302, 376);
  vertex(303, 370);
  vertex(298, 365);
  vertex(309, 368);
  endShape();
}

function seaNoodle() {

  fill(229, 76, 21);

  beginShape();
  vertex(753, 164);
  vertex(792, 118);
  vertex(807, 97);
  vertex(839, 86);
  vertex(858, 78);
  vertex(892, 84);
  vertex(895, 96);
  vertex(894, 112);
  vertex(877, 141);
  vertex(843, 200);
  vertex(776, 241);
  vertex(764, 284);
  vertex(791, 370);
  vertex(750, 421);
  vertex(817, 502);
  vertex(794, 502);
  vertex(734, 424);
  vertex(746, 384);
  vertex(771, 365);
  vertex(750, 302);
  vertex(750, 252);
  vertex(742, 337);
  vertex(752, 360);
  vertex(727, 394);
  vertex(739, 495);
  vertex(689, 517);
  vertex(673, 505);
  vertex(722, 485);
  vertex(711, 419);
  vertex(714, 376);
  vertex(736, 356);
  vertex(724, 327);
  vertex(734, 249);
  vertex(712, 322);
  vertex(687, 340);
  vertex(696, 374);
  vertex(703, 431);
  vertex(681, 459);
  vertex(708, 479);
  vertex(691, 485);
  vertex(668, 462);
  vertex(669, 448);
  vertex(690, 425);
  vertex(684, 373);
  vertex(670, 340);
  vertex(674, 324);
  vertex(702, 309);
  vertex(716, 241);
  vertex(666, 279);
  vertex(631, 315);
  vertex(652, 368);
  vertex(610, 432);
  vertex(643, 474);
  vertex(653, 461);
  vertex(661, 485);
  vertex(636, 493);
  vertex(604, 455);
  vertex(589, 424);
  vertex(632, 364);
  vertex(614, 314);
  vertex(616, 300);
  vertex(654, 270);
  vertex(705, 225);
  vertex(663, 232);
  vertex(628, 264);
  vertex(602, 296);
  vertex(579, 254);
  vertex(537, 255);
  vertex(501, 233);
  vertex(495, 205);
  vertex(507, 203);
  vertex(510, 226);
  vertex(546, 242);
  vertex(587, 238);
  vertex(603, 272);
  vertex(622, 243);
  vertex(660, 219);
  vertex(707, 210);
  vertex(628, 206);
  vertex(613, 233);
  vertex(568, 216);
  vertex(529, 228);
  vertex(523, 180);
  vertex(488, 194);
  vertex(482, 180);
  vertex(526, 168);
  vertex(540, 172);
  vertex(540, 211);
  vertex(578, 202);
  vertex(603, 215);
  vertex(626, 190);
  vertex(715, 198);
  vertex(735, 188);
  vertex(754, 162);
  endShape();
}

let x= 160, y = 58; 

function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");

  createConsole();

  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
}
function draw() {
  background(145, 139, 131);
  fill('Black')
  text("Start",107, 64)
  text("Finish", 816, 722)
  
  //outer walls of the maze
  drawwall1()
  drawwall2()
  drawwall3()
  drawwall4()

  
  //the inner walls of the maze
  drawinnerwall1()
  drawinnerwall2()
  drawinnerwall3()
  drawinnerwall4()
  drawinnerwall5()
  drawinnerwall6()
  drawinnerwall7()
  drawinnerwall8()
  drawinnerwall9()
  drawinnerwall10()
  drawinnerwall11()
  drawinnerwall12()
  drawinnerwall13()
  drawinnerwall14()
  drawinnerwall15()
  drawinnerwall16()
  drawinnerwall17()
  drawinnerwall18()
  drawinnerwall19()
  drawinnerwall20()
  drawinnerwall21()
  drawinnerwall22()
  drawinnerwall23()
  drawinnerwall24()
  drawinnerwall25()
  drawinnerwall26()
  drawinnerwall27()
  drawinnerwall28()
  drawinnerwall29()
  drawinnerwall30()
  drawinnerwall31()
  drawinnerwall32()
  drawinnerwall33()
  drawinnerwall34()
  drawinnerwall35()
  drawinnerwall36()
  drawinnerwall37()
  drawinnerwall38()
  
  //the dead ends in the maze
  drawdeadend1()
  drawdeadend2()
  drawdeadend3()
  drawdeadend4()
  drawdeadend5()
  drawdeadend6()
  drawdeadend7()
  drawdeadend8()
  drawdeadend9()
  drawdeadend10()
  
  fill('blue')
  ellipse(x, y, 15, 15)

  pixel=get(x-15, y)
  // arrow keys used to move around the maze
  if (keyIsDown(LEFT_ARROW) && x > 25 && pixel[0] != 0){
    x -= 2
  } 
   pixel=get(x+15, y)
  if (keyIsDown(RIGHT_ARROW) && x < 975 && pixel [0] != 0){ 
    x += 2
    
  }
  pixel=get(x, y-15)
  if (keyIsDown(UP_ARROW) && y > 25 && pixel [0] != 0){
    y -= 2
  }
  pixel=get(x, y+15)
  if (keyIsDown(DOWN_ARROW) && y < 778 && pixel [0] != 0) {
    y += 2

  }


  if (x > 800 && y > 700) {
    textSize(50);
    text("You Win!", 500, 400);
  }
  if (x < 471 && y > 612) {
    text("the winners room is not here", 472, 622)
  }
  if (x < 405 && y < 56) {
    text("Turn back, your going the wrong way", 408, 56)
  }

drawMouseLines("black")
}
function drawwall1() {
 fill("black");
  beginShape();
  vertex(14, 12);
  vertex(981, 15);
  vertex(982, 39);
  vertex(12, 35);
  vertex(14, 12);
  endShape();
}
function drawwall2() {
  fill("black");
  beginShape();
  vertex(12, 36);
  vertex(8, 779);
  vertex(28, 779);
  vertex(33, 29);
  vertex(13, 33);
  endShape();
}
function drawwall3() {
  fill("black");
  beginShape();
  vertex(24, 767);
  vertex(977, 757);
  vertex(976, 787);
  vertex(10, 790);
  vertex(8, 777);
  vertex(14, 769);
  vertex(28, 767);
  endShape();
}
function drawwall4() {
  fill("black");
  beginShape();
  vertex(981, 16);
  vertex(984, 16);
  vertex(980, 786);
  vertex(972, 787);
  vertex(951, 779);
  vertex(955, 33);
  vertex(982, 16);
  endShape();
}
function drawinnerwall1() {
  fill("black");
  beginShape();
  vertex(32, 87);
  vertex(176, 87);
  vertex(176, 112);
  vertex(32, 114);
  vertex(33, 89);
  vertex(34, 88);
  endShape();
}
function drawinnerwall2() {
  fill("black");
  beginShape();
  vertex(236, 88);
  vertex(298, 88);
  vertex(300, 112);
  vertex(234, 112);
  vertex(233, 88);
  vertex(239, 88);
  endShape();
}
function drawinnerwall3() {
  fill("black");
  beginShape();
  vertex(348, 88);
  vertex(602, 90);
  vertex(604, 119);
  vertex(349, 112);
  vertex(348, 88);
  endShape();
}
function drawinnerwall4() {
  fill("black");
  beginShape();
  vertex(646, 112);
  vertex(645, 88);
  vertex(875, 92);
  vertex(876, 111);
  vertex(646, 113);
  endShape();
}
function drawinnerwall5() {
  // fill("black");
  beginShape();
  vertex(29, 168);
  vertex(194, 167);
  vertex(193, 192);
  vertex(32, 192);
  vertex(31, 168);
  endShape();
}
function drawinnerwall6() {
  // fill("black");
  beginShape();
  vertex(242, 160);
  vertex(272, 161);
  vertex(273, 184);
  vertex(244, 183);
  vertex(241, 160);
  endShape();
}
function drawinnerwall7() {
  // fill("black");
  beginShape();
  vertex(310, 159);
  vertex(422, 159);
  vertex(422, 181);
  vertex(307, 182);
  vertex(310, 159);
  endShape();
}
function drawinnerwall8() {
  // fill("black");
  beginShape();
  vertex(488, 158);
  vertex(517, 158);
  vertex(516, 177);
  vertex(486, 175);
  vertex(487, 158);
  endShape();
}
function drawinnerwall9() {
  // fill("black");
  beginShape();
  vertex(568, 157);
  vertex(724, 159);
  vertex(723, 181);
  vertex(561, 180);
  vertex(559, 156);
  vertex(574, 157);
  endShape();
}
function drawdeadend1() {
  // fill("black");
  beginShape();
  vertex(349, 111);
  vertex(347, 157);
  vertex(349, 159);
  vertex(370, 159);
  vertex(369, 111);
  vertex(350, 111);
  endShape();
}
function drawdeadend2() {
  // fill("black");
  beginShape();
  vertex(694, 105);
  vertex(693, 157);
  vertex(725, 160);
  vertex(714, 109);
  vertex(695, 114);
  endShape();
}
function drawdeadend3() {
  // fill("black");
  beginShape();
  vertex(233, 88);
  vertex(233, 33);
  vertex(258, 35);
  vertex(256, 89);
  vertex(234, 89);
  endShape();
}
function drawinnerwall10() {
  // fill("black");
  beginShape();
  vertex(763, 159);
  vertex(872, 160);
  vertex(874, 181);
  vertex(762, 179);
  vertex(762, 158);
  vertex(772, 159);
  endShape();
}
function drawinnerwall11() {
  // fill("black");
  beginShape();
  vertex(904, 163);
  vertex(935, 163);
  vertex(933, 184);
  vertex(910, 181);
  vertex(904, 163);
  endShape();
}
function drawinnerwall12() {
  // fill("black");
  beginShape();
  vertex(30, 239);
  vertex(100, 238);
  vertex(101, 267);
  vertex(30, 264);
  vertex(33, 240);
  vertex(32, 239);
  vertex(31, 264);
  endShape();
}
function drawinnerwall13() {
  // fill("black");
  beginShape();
  vertex(138, 234);
  vertex(276, 234);
  vertex(276, 258);
  vertex(138, 257);
  vertex(138, 234);
  endShape();
}
function drawinnerwall14() {
  // fill("black");
  beginShape();
  vertex(174, 186);
  vertex(172, 238);
  vertex(192, 237);
  vertex(193, 188);
  vertex(174, 191);
  endShape();
}
function drawinnerwall15() {
  // fill("black");
  beginShape();
  vertex(305, 235);
  vertex(331, 236);
  vertex(332, 257);
  vertex(299, 257);
  vertex(305, 235);
  endShape();
}
function drawinnerwall16() {
  // fill("black");
  beginShape();
  vertex(364, 236);
  vertex(431, 237);
  vertex(434, 256);
  vertex(365, 255);
  vertex(365, 236);
  endShape();
}
function drawinnerwall17() {
  // fill("black");
  beginShape();
  vertex(466, 235);
  vertex(716, 237);
  vertex(716, 259);
  vertex(468, 256);
  vertex(466, 236);
  endShape();
}
function drawinnerwall18() {
  // fill("black");
  beginShape();
  vertex(750, 236);
  vertex(870, 238);
  vertex(871, 256);
  vertex(747, 255);
  vertex(747, 236);
  vertex(765, 236);
  endShape();
}
function drawdeadend4() {
  // fill("black");
  beginShape();
  vertex(867, 92);
  vertex(860, 32);
  vertex(879, 34);
  vertex(882, 110);
  vertex(874, 111);
  vertex(867, 94);
  endShape();
}
function drawdeadend5() {
  // fill("black");
  beginShape();
  vertex(863, 245);
  vertex(859, 171);
  vertex(874, 181);
  vertex(877, 255);
  vertex(869, 256);
  vertex(862, 256);
  vertex(863, 238);
  endShape();
}
function drawinnerwall19() {
  // fill("black");
  beginShape();
  vertex(29, 310);
  vertex(304, 306);
  vertex(305, 329);
  vertex(29, 328);
  vertex(32, 310);
  endShape();
}
function drawinnerwall20() {
  // fill("black");
  beginShape();
  vertex(329, 303);
  vertex(503, 302);
  vertex(503, 325);
  vertex(329, 324);
  vertex(329, 303);
  endShape();
}
function drawdeadend6() {
  // fill("black");
  beginShape();
  vertex(365, 303);
  vertex(365, 236);
  vertex(379, 238);
  vertex(385, 306);
  vertex(366, 303);
  vertex(385, 307);
  endShape();
}
function drawdeadend7() {
  // fill("black");
  beginShape();
  vertex(307, 236);
  vertex(308, 181);
  vertex(321, 179);
  vertex(322, 236);
  vertex(309, 233);
  vertex(308, 236);
  vertex(319, 235);
  endShape();
}
function drawdeadend8() {
  // fill("black");
  beginShape();
  vertex(300, 257);
  vertex(331, 303);
  vertex(346, 304);
  vertex(317, 254);
  vertex(299, 257);
  endShape();
}
function drawdeadend9() {
  // fill("black");
  beginShape();
  vertex(487, 173);
  vertex(488, 237);
  vertex(511, 236);
  vertex(502, 174);
  vertex(485, 175);
  endShape();
}
function drawinnerwall21() {
  // fill("black");
  beginShape();
  vertex(304, 307);
  vertex(304, 372);
  vertex(545, 369);
  vertex(545, 254);
  vertex(567, 256);
  vertex(565, 390);
  vertex(297, 387);
  vertex(287, 386);
  vertex(284, 321);
  vertex(304, 325);
  endShape();
}
function drawdeadend10() {
  // fill("black");
  beginShape();
  vertex(483, 319);
  vertex(484, 370);
  vertex(503, 372);
  vertex(499, 320);
  vertex(484, 324);
  endShape();
}
function drawinnerwall22() {
  // fill("black");
  beginShape();
  vertex(221, 399);
  vertex(219, 354);
  vertex(232, 355);
  vertex(236, 419);
  vertex(239, 429);
  vertex(607, 429);
  vertex(606, 296);
  vertex(864, 295);
  vertex(863, 253);
  vertex(876, 255);
  vertex(877, 311);
  vertex(622, 310);
  vertex(621, 440);
  vertex(215, 442);
  vertex(216, 350);
  vertex(230, 352);
  vertex(234, 355);
  vertex(236, 421);
  endShape();
}
function drawinnerwall23() {
  // fill("black");
  beginShape();
  vertex(872, 235);
  vertex(917, 234);
  vertex(917, 301);
  vertex(953, 303);
  vertex(953, 288);
  vertex(926, 289);
  vertex(929, 224);
  vertex(871, 225);
  vertex(874, 234);
  vertex(874, 306);
  vertex(874, 356);
  vertex(857, 355);
  vertex(858, 309);
  vertex(874, 310);
  endShape();
}
function drawinnerwall24() {
  // fill("black");
  beginShape();
  vertex(954, 386);
  vertex(815, 382);
  vertex(816, 335);
  vertex(655, 336);
  vertex(655, 352);
  vertex(798, 356);
  vertex(798, 406);
  vertex(957, 405);
  vertex(954, 385);
  endShape();
}
function drawinnerwall25() {
  // fill("black");
  beginShape();
  vertex(801, 396);
  vertex(652, 392);
  vertex(652, 408);
  vertex(790, 412);
  vertex(791, 445);
  vertex(816, 445);
  vertex(817, 399);
  vertex(798, 397);
  endShape();
}
function drawinnerwall26() {
  // fill("black");
  beginShape();
  vertex(902, 122);
  vertex(903, 60);
  vertex(932, 61);
  vertex(934, 117);
  vertex(901, 121);
  endShape();
}
function drawinnerwall27() {
  // fill("black");
  beginShape();
  vertex(600, 100);
  vertex(604, 59);
  vertex(586, 62);
  vertex(585, 91);
  vertex(601, 91);
  endShape();
}
function drawinnerwall28() {
  // fill("black");
  beginShape();
  vertex(151, 323);
  vertex(150, 404);
  vertex(131, 404);
  vertex(130, 326);
  vertex(152, 328);
  endShape();
}
function drawinnerwall29() {
  // fill("black");
  beginShape();
  vertex(216, 437);
  vertex(90, 436);
  vertex(88, 359);
  vertex(66, 357);
  vertex(66, 448);
  vertex(214, 451);
  vertex(215, 485);
  vertex(72, 485);
  vertex(70, 506);
  vertex(214, 507);
  vertex(214, 526);
  vertex(237, 527);
  vertex(236, 439);
  vertex(217, 436);
  endShape();
}
function drawinnerwall30() {
  // fill("black");
  beginShape();
  vertex(30, 537);
  vertex(184, 542);
  vertex(182, 593);
  vertex(272, 593);
  vertex(273, 479);
  vertex(663, 466);
  vertex(669, 488);
  vertex(651, 490);
  vertex(643, 478);
  vertex(293, 492);
  vertex(291, 601);
  vertex(169, 610);
  vertex(169, 553);
  vertex(25, 557);
  vertex(28, 539);
  endShape();
}
function drawinnerwall31() {
  // fill("black");
  beginShape();
  vertex(707, 481);
  vertex(706, 435);
  vertex(725, 436);
  vertex(725, 481);
  vertex(856, 484);
  vertex(854, 434);
  vertex(921, 436);
  vertex(920, 598);
  vertex(902, 599);
  vertex(904, 451);
  vertex(874, 453);
  vertex(873, 510);
  vertex(707, 506);
  vertex(706, 477);
  vertex(707, 435);
  vertex(725, 436);
  endShape();
}
function drawinnerwall32() {
  // fill("black");
  beginShape();
  vertex(651, 488);
  vertex(655, 559);
  vertex(907, 556);
  vertex(903, 545);
  vertex(666, 543);
  vertex(669, 489);
  vertex(650, 489);
  endShape();
}
function drawinnerwall33() {
  // fill("black");
  beginShape();
  vertex(956, 637);
  vertex(861, 637);
  vertex(863, 581);
  vertex(621, 590);
  vertex(620, 505);
  vertex(601, 504);
  vertex(599, 602);
  vertex(844, 596);
  vertex(842, 644);
  vertex(570, 637);
  vertex(569, 652);
  vertex(877, 664);
  vertex(953, 660);
  vertex(952, 637);
  endShape();
}
function drawinnerwall34() {
  // fill("black");
  beginShape();
  vertex(572, 640);
  vertex(567, 518);
  vertex(334, 528);
  vertex(336, 637);
  vertex(133, 639);
  vertex(124, 588);
  vertex(58, 587);
  vertex(57, 734);
  vertex(106, 738);
  vertex(109, 717);
  vertex(72, 714);
  vertex(76, 602);
  vertex(112, 607);
  vertex(116, 663);
  vertex(364, 658);
  vertex(355, 545);
  vertex(551, 537);
  vertex(550, 654);
  vertex(571, 653);
  vertex(573, 640);
  endShape();
}
function drawinnerwall35() {
  // fill("black");
  beginShape();
  vertex(142, 762);
  vertex(143, 698);
  vertex(329, 696);
  vertex(325, 733);
  vertex(307, 734);
  vertex(306, 710);
  vertex(161, 712);
  vertex(159, 765);
  vertex(138, 766);
  vertex(144, 698);
  endShape();
}
function drawinnerwall36() {
  // fill("black");
  beginShape();
  vertex(367, 764);
  vertex(368, 693);
  vertex(401, 694);
  vertex(399, 580);
  vertex(505, 580);
  vertex(501, 681);
  vertex(448, 679);
  vertex(450, 619);
  vertex(431, 619);
  vertex(430, 692);
  vertex(521, 698);
  vertex(518, 566);
  vertex(388, 564);
  vertex(387, 676);
  vertex(348, 682);
  vertex(354, 768);
  vertex(368, 764);
  endShape();
}
function drawinnerwall37() {
  // fill("black");
  beginShape();
  vertex(551, 653);
  vertex(552, 724);
  vertex(399, 721);
  vertex(400, 736);
  vertex(655, 736);
  vertex(651, 674);
  vertex(637, 673);
  vertex(638, 719);
  vertex(570, 721);
  vertex(573, 653);
  vertex(549, 656);
  endShape();
}
function drawinnerwall38() {
  beginShape();
  vertex(687, 761);
  vertex(686, 685);
  vertex(796, 688);
  vertex(795, 703);
  vertex(703, 701);
  vertex(705, 761);
  vertex(686, 761);
  endShape();
}
//disable scrolling from arrow keys
// https://stackoverflow.com/questions/67222844/how-to-disable-up-and-down-arrow-keys
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
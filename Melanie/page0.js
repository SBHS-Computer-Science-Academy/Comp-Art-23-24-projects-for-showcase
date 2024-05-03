function drawPage0() {
  fill("gold");
  textFont(sigmar);
  textSize(100);
  text("The Gift", 21, height / 50, width);
}

function road(){
  fill(71, 70, 69)
  beginShape()
  vertex(997, 180);
  vertex(-1, 549);
  vertex(0, 799);
  vertex(997, 796);
  vertex(998, 180);
  endShape()
}
function sidewalk3(){
  fill(156, 152, 152)
  beginShape()
  vertex(308, 421);
  vertex(229, 400);
  vertex(1000, 128);
  vertex(999, 164);
  vertex(307, 422);
  endShape()
}
function entrancetogarage(){
  fill(143, 140, 140)
  beginShape()
  vertex(307, 419);
  vertex(299, 437);
  vertex(169, 483);
  vertex(150, 473);
  vertex(-5, 394);
  vertex(99, 355);
  vertex(305, 420);
  endShape()
}
function othersidewalk(){
  fill(112,109,108)
  beginShape()
  vertex(307, 420);
  vertex(999, 164);
  vertex(998, 181);
  vertex(-2, 559);
  vertex(1, 535);
  vertex(155, 476);
  vertex(173, 486);
  vertex(297, 438);
  vertex(305, 422);
  endShape()
}

function baseofbus(){
  fill('ivory')
  beginShape()
  vertex(530, 319);
  vertex(700, 339);
  vertex(996, 226);
  vertex(999, 324);
  vertex(712, 501);
  vertex(681, 505);
  vertex(558, 466);
  vertex(543, 455);
  vertex(531, 318);
  endShape()
}
function door(){
  fill('black')
  beginShape()
  vertex(989, 239);
  vertex(991, 327);
  vertex(961, 346);
  vertex(955, 251);
  vertex(989, 239);
  endShape()
}

function seconddoor(){
  fill('black')
  beginShape()
  vertex(783, 318);
  vertex(792, 447);
  vertex(838, 418);
  vertex(828, 299);
  vertex(783, 318);
  endShape()
}
function windows(){
  fill('black')
  beginShape()
  vertex(831, 297);
  vertex(836, 338);
  vertex(879, 319);
  vertex(877, 279);
  vertex(831, 297);
  vertex(885, 276);
  vertex(887, 316);
  vertex(921, 300);
  vertex(916, 257);
  vertex(882, 272);
  vertex(921, 262);
  vertex(926, 297);
  vertex(945, 288);
  vertex(940, 252);
  vertex(919, 260);
  endShape()
}
function windows2(){
  fill('black')
  beginShape()
  vertex(776, 316);
  vertex(779, 358);
  vertex(753, 370);
  vertex(746, 326);
  vertex(774, 317);
  endShape()
}

function roof() {
   fill(250, 242, 92);
  beginShape();
  vertex(920, 200);
  vertex(528, 279);
  vertex(529, 334);
  vertex(687, 380);
  vertex(705, 378);
  vertex(703, 322);
  vertex(1000, 217);
  vertex(923, 200);
  endShape();
}
function sidesofroof(){
  fill(245, 205, 32)
  beginShape()
  vertex(702, 322);
  vertex(998, 218);
  vertex(999, 233);
  vertex(704, 346);
  vertex(703, 323);
  endShape()
}

function wheel(){
  fill('black')
  ellipse(740,469,55,55)
}

function wheel2(){
  fill('black')
  ellipse(938,351,45,45)
}

function centerofwheel(){
  fill('dimgrey')
  ellipse(741,471,20,20)
}

function centerofwheel2(){
  fill('darkgrey')
  beginShape()
  vertex(736, 463);
  vertex(744, 470);
  vertex(744, 475);
  vertex(739, 482);
  vertex(747, 481);
  vertex(752, 471);
  vertex(747, 464);
  vertex(736, 463);
  endShape();
}

function centerofwheel3(){
  fill('dimgrey')
  ellipse(937,350,15,15)
}

function centerofwheel4(){
  fill('darkgrey')
  beginShape()
  vertex(938, 344);
  vertex(945, 345);
  vertex(950, 350);
  vertex(947, 357);
  vertex(939, 360);
  vertex(941, 354);
  vertex(938, 345);
  endShape()
}

function buslights(){
  fill('darkred')
  ellipse(678,432,15,15)
  ellipse(550,404,13,13)
}

function buslights2(){
  fill('tomato')
  ellipse(677,446,15,15)
  ellipse(550,419,13,13)
}

function platenumber(){
  fill('silver')
  beginShape()
  vertex(555, 442);
  vertex(556, 457);
  vertex(593, 469);
  vertex(591, 454);
  vertex(552, 444);
  endShape()
}
function sidewalk(){
  fill(153, 149, 148)
  beginShape()
  vertex(1000, 346);
  vertex(711, 538);
  vertex(998, 628);
  vertex(997, 348);
  endShape()
}
function sidesofsidewalk(){
  fill(112, 109, 108)
  beginShape()
  vertex(713, 541);
  vertex(713, 563);
  vertex(998, 654);
  vertex(996, 627);
  vertex(712, 540);
  endShape()
}

function sidewalk2(){
  fill(153,149,148)
  beginShape()
  vertex(594, 799);
  vertex(394, 693);
  vertex(4, 752);
  vertex(2, 798);
  vertex(588, 797);
  endShape()
}

function head(){
  fill(237, 190, 133)
  ellipse(215, 660,45,45 )
}
function hair(){
  fill("black")
  beginShape()
  vertex(188, 668);
  vertex(189, 644);
  vertex(205, 635);
  vertex(219, 635);
  vertex(236, 643);
  vertex(238, 655);
  vertex(228, 658);
  vertex(224, 664);
  vertex(221, 668);
  vertex(222, 675);
  vertex(215, 669);
  vertex(212, 673);
  vertex(213, 678);
  vertex(212, 685);
  vertex(203, 686);
  vertex(201, 692);
  vertex(196, 695);
  vertex(194, 699);
  vertex(190, 702);
  vertex(190, 702);
  vertex(187, 711);
  vertex(178, 713);
  vertex(181, 706);
  vertex(182, 699);
  vertex(187, 692);
  vertex(187, 687);
  vertex(194, 683);
  vertex(187, 669);
  endShape()
}

function eye(){
  fill('black')
  ellipse(234,664,7,5)
}
function setup() {
  let myCanvas = createCanvas(800, 800);
  myCanvas.parent("myCanvas");

  createConsole("lines");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
  clear();
  background("skyblue");
  
  drawhead()
  drawneck()
  drawshade()
  drawbody()
  drawRightfrontleg()
  drawLetffrontleg()
  drawStomach()
  drawWings() 
  drawBackStomach()
  drawBackStomach2()
  drawBack() 
  drawTail()
  drawShade2()
  drawEyes()

  
  
  drawMouseLines("black");
}

// function drawExampleShapes() {
// 	noStroke(); // turn off outlines

// 	// RGBA = red, green, blue, alpha (transparency)
// 	// Each value goes 0 to 255
  
// 	fill(255, 0, 0, 80); //transparent red 
// 	circle(400, 300, 400); // top circle
// 	fill(0, 255, 0, 80); // transparent green
// 	circle(267, 533, 400); // bottom left circle
// 	fill(0, 0, 255, 80); // transparent blue
// 	circle(533, 533, 400); // bottom right circle
// }

function drawhead() {
  fill(181, 35, 13);
beginShape();
  vertex(122, 251);
  vertex(41, 265);
  vertex(40, 313);
  vertex(131, 303);
  vertex(122, 249);
  endShape();
}

function drawshade() {
  fill(5, 0, 0, 80);
  beginShape();
  vertex(122, 253);
  vertex(140, 300);
  vertex(131, 302);
  endShape();
}

function drawneck() {
  fill(191, 30, 6);
  beginShape();
  noStroke()
  vertex(122, 249);
  vertex(169, 220);
  vertex(207, 221);
  vertex(171, 226);
  vertex(144, 244);
  vertex(143, 258);
  vertex(171, 275);
  vertex(213, 397);
  vertex(142, 432);
  vertex(117, 445);
  vertex(131, 304);
  endShape();
}

function drawbody() {
  fill(145, 22, 3);
  beginShape();
  vertex(118, 445);
  vertex(202, 492);
  vertex(213, 396);
  endShape();
}

function drawRightfrontleg() {
  fill(168, 28, 7);
  beginShape();
  vertex(214, 428);
  vertex(127, 527);
  vertex(126, 561);
  vertex(193, 526);
  vertex(215, 428);
  endShape();
}

function drawLetffrontleg() {
  fill(168, 28, 7);
  beginShape();
  vertex(137, 457);
  vertex(85, 518);
  vertex(83, 546);
  vertex(172, 476);
  vertex(138, 455);
  endShape();
}

// function drawChest() {
//   fill(176, 26, 4);
//   beginShape();
//   vertex(211, 413);
//   vertex(269, 362);
//   vertex(314, 489);
//   vertex(205, 471);
//   endShape();
// }

function drawStomach() {
  // fill("black");
  beginShape();
  vertex(211, 424);
  vertex(250, 404);
  vertex(257, 511);
  vertex(201, 491);
  endShape();
}

function drawWings() {
  fill(153, 14, 14);
  beginShape();
  vertex(257, 511);
  vertex(418, 422);
  vertex(362, 352);
  vertex(247, 382);
  vertex(251, 413);
  vertex(256, 510);
  endShape();


  fill(242, 53, 53);
  beginShape();
  vertex(247, 382);
  vertex(409, 257);
  vertex(368, 306);
  vertex(362, 352);
  vertex(248, 383);
  endShape();



  fill(153, 14, 14);
  beginShape();
  vertex(262, 370);
  vertex(251, 355);
  vertex(345, 296);
  vertex(347, 301);
  vertex(348, 304);
  vertex(263, 370);
  endShape();



  fill(242, 53, 53);
  beginShape();
  vertex(250, 355);
  vertex(353, 212);
  vertex(337, 258);
  vertex(342, 294);
  vertex(345, 297);
  endShape();

}



function drawBackStomach() {
  fill(135, 23, 23);
  beginShape();
  vertex(269, 506);
  vertex(310, 507);
  vertex(293, 492);
  vertex(268, 506);
  endShape();
}

function drawBackStomach2() {
  fill(173, 28, 28);
  beginShape();
  vertex(292, 492);
  vertex(330, 471);
  vertex(328, 519);
  vertex(293, 492);
  endShape();
}

function drawBack() {
  fill(145, 20, 20);
  beginShape();
  vertex(330, 471);
  vertex(328, 523);
  vertex(341, 522);
  vertex(336, 467);
  vertex(331, 470);
  endShape();


  fill(87, 6, 6);
  beginShape();
  vertex(337, 467);
  vertex(342, 534);
  vertex(348, 461);
  vertex(338, 466);
  endShape();



  fill(184, 28, 28);
  beginShape();
  vertex(348, 463);
  vertex(339, 566);
  vertex(369, 508);
  vertex(347, 459);
  endShape();

}



function drawTail() {
  // fill("black");
  beginShape();
  vertex(349, 460);
  vertex(423, 461);
  vertex(401, 473);
  vertex(402, 483);
  vertex(361, 490);
  vertex(348, 460);
  endShape();

    fill(143, 16, 16);
  beginShape();
  vertex(429, 477);
  vertex(430, 491);
  vertex(450, 487);
  vertex(446, 475);
  vertex(428, 476);
  endShape();



  fill(143, 16, 16);
  beginShape();
  vertex(448, 483);
  vertex(502, 463);
  vertex(445, 470);
  vertex(448, 483);
  endShape();




  fill(74, 7, 7);
  beginShape();
  vertex(421, 461);
  vertex(400, 474);
  vertex(426, 472);
  vertex(422, 461);
  endShape();



  fill(158, 24, 24);
  beginShape();
  vertex(401, 473);
  vertex(436, 472);
  vertex(429, 477);
  vertex(430, 487);
  vertex(402, 488);
  vertex(401, 474);
  endShape();


}

function drawShade2() {
  fill(5, 0, 0, 90);
  beginShape();
  vertex(265, 506);
  vertex(334, 467);
  vertex(304, 505);
  vertex(265, 507);
  endShape();

  fill(5, 0, 0, 90);
  beginShape();
  vertex(137, 455);
  vertex(173, 476);
  vertex(160, 485);
  vertex(138, 456);
  endShape();

}

function drawEyes() {
  fill("black");
  beginShape();
  vertex(85, 267);
  vertex(106, 272);
  vertex(87, 281);
  vertex(81, 275);
  vertex(84, 268);
  endShape();

}
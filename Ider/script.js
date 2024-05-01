let n=150

function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");
  
  createConsole("lines");
  drawMouseLines("black");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
  drawMouseLines("black")
  // background("white");
  rectGradient(0, 0, 1000, 800, color(174, 221, 252), color(240, 180, 77))
  fill("black");
  // text("Create art in the cubist style using the techniques you've learned this term.", 500, 400);
  hair()

  drawFace()
  e()
  b()
  shadowAndDepth()
  eyebrow1()
  eyebrow2()
}

function drawFace(){
  noStroke()
  fill(237, 224, 185)
  beginShape();
  vertex(279, 355);
  vertex(277, 547);
  vertex(360, 624);
  vertex(357, 341);
  vertex(278, 356);
  endShape()
  
  beginShape();
  vertex(359, 622);
  vertex(440, 646);
  vertex(447, 618);
  vertex(390, 335);
  vertex(355, 342);
  vertex(360, 624);
  endShape();

  beginShape();
  vertex(448, 618);
  vertex(467, 639);
  vertex(503, 604);
  vertex(486, 336);
  vertex(386, 335);
  vertex(448, 616);
  endShape();
  beginShape();
  vertex(425, 562);
  vertex(439, 619);
  vertex(457, 617);
  vertex(445, 565);
  vertex(430, 568);
  endShape();
  beginShape();
  curveVertex(439, 643); // control point
  curveVertex(439, 643);
  curveVertex(448, 621);
  curveVertex(465, 636);
  curveVertex(474, 599);
  curveVertex(442, 594);
  curveVertex(420, 608);
  curveVertex(441, 639);
  curveVertex(441, 639); // control point
  endShape();
  beginShape();
  vertex(435, 463);
  vertex(451, 496);
  vertex(430, 497);
  vertex(421, 452);
  endShape();
  fill('black')
  beginShape();
  vertex(366, 414);
  vertex(371, 443);
  vertex(412, 436);
  vertex(407, 404);
  vertex(365, 412);
  endShape();
  beginShape();
  vertex(408, 411);
  vertex(429, 412);
  vertex(437, 430);
  vertex(473, 428);
  vertex(470, 397);
  vertex(435, 400);
  vertex(441, 412);
  endShape();
  beginShape();
  vertex(430, 413);
  vertex(427, 401);
  vertex(440, 400);
  vertex(447, 413);
  vertex(433, 418);
  endShape();
  beginShape();
  vertex(408, 418);
  vertex(437, 414);
  vertex(435, 409);
  vertex(402, 412);
  vertex(403, 417);
  endShape();
  beginShape();
  vertex(338, 343);
  vertex(373, 337);
  vertex(387, 289);
  vertex(370, 286);
  vertex(340, 307);
  vertex(337, 332);
  endShape();
  fill(237, 224, 185)
  beginShape();
    vertex(281, 456);
    vertex(267, 466);
    vertex(260, 453);
    vertex(262, 426);
    vertex(286, 413);
    vertex(292, 441);
    endShape();
  
}

function shadowAndDepth(){
  noStroke()
  fill(0, 30)
  beginShape();
  vertex(279, 355);
  vertex(277, 547);
  vertex(360, 624);
  vertex(357, 341);
  vertex(278, 356);
  endShape()
  fill(0, 60)
  beginShape();
  vertex(279, 355);
  vertex(277, 547);
  vertex(360, 624);
  vertex(319, 348);
  vertex(278, 356);
  endShape();
  fill(0, 80)
  beginShape()
  vertex(279, 544);
  vertex(349, 555);
  vertex(360, 624);
  vertex(277, 547);
  endShape()
  fill(0, 30)
  beginShape();
  vertex(361, 605);
  vertex(440, 641);
  vertex(438, 645);
  vertex(361, 622);
  endShape();
  beginShape();
  vertex(448, 623);
  vertex(464, 635);
  vertex(455, 623);
  vertex(449, 622);
  endShape();
  fill(255, 140)
  beginShape();
  vertex(435, 463);
  vertex(451, 496);
  vertex(430, 497);
  vertex(421, 452);
  endShape();
  fill(0, 20)
  beginShape()
  vertex(421, 455);
  vertex(411, 490);
  vertex(418, 496);
  vertex(430, 496);
  vertex(422, 456);
  endShape();
  fill(255, 165)
  beginShape();
  vertex(435, 485);
  vertex(433, 487);
  vertex(435, 490);
  vertex(438, 490);
  vertex(439, 490);
  vertex(440, 489);
  vertex(440, 487);
  endShape();
  fill(0, 30)
 
}

function hair(){
  fill('black')
  beginShape();
  vertex(334, 420);
  vertex(369, 284);
  vertex(244, 316);
  vertex(233, 387);
  vertex(301, 460);
  vertex(326, 432);
  endShape();
  beginShape();
  vertex(355, 342);
  vertex(388, 335);
  vertex(486, 336);
  vertex(507, 287);
  vertex(369, 285);
  endShape();
}
function squares(){



  
}
function circ(){


}
function lowerchin(){
  fill(237, 224, 185)

  beginShape();
  vertex(277, 545);
  vertex(357, 588);
  vertex(358, 618);
  vertex(277, 547);
  endShape();
}

// function loop(){
//   for(let v=0; v<n; v+=1){
    
//   }
// }
function e(){
  fill(237, 224, 185)

  beginShape();
  vertex(279, 355);
  vertex(277, 547);
  vertex(360, 624);
  vertex(319, 348);
  vertex(278, 356);
  endShape();
}
function b(){
  fill(237, 224, 185)

  beginShape()
  vertex(279, 544);
  vertex(349, 555);
  vertex(360, 624);
  vertex(277, 547);
  endShape()
}


function eyebrow1(){
  for(let i=0; i<30; i+=1){
    stroke('black')
    line(371+i*1.5, 384, 371+i*1.5, 400)
  }
}

function eyebrow2(){
  for(let i=0; i<30; i+=1){
    stroke('black')
    line(433+i*1.5, 384, 433+i*1.5, 400)
  }
}
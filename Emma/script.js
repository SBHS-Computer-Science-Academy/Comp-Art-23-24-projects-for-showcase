let mudX = 1000  ;
let pigY = 532
let pigSpeed = 0
let jumpSpeed = -20
let gravity = 1
let groundY = pigY
let myFont;
let isPlaying = false 
let isJumping = false 
let score = 0

function preload(){
  myFont = loadFont('Simple free.otf')
}

function setup() {
  let myCanvas = createCanvas(900 , 900);
  textFont(myFont);
  textSize(90)
  

  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click

  
}

function draw() {
  background(3, 177, 252)
  fill(204, 186, 122)
  beginShape();
  vertex(-2, 581);
  vertex(904, 577);
  vertex(904, 898);
  vertex(-5, 898);
  vertex(-4, 583);
  endShape();

drawSun()
  drawCloud()

  
  grass();
  animateMud(); 
  


  movePig()
  drawPig()
  //drawMud()

  collideWithMud()
  drawPiggame()
  drawContinuedMud()
  
noStroke()
  if (isPlaying == false) text("Press Space Bar",500,400)
  

}

function animateMud() {

  if (isPlaying) mudX -= 18 * (score/100 + 1 );
  if (mudX < -150) {
    mudX = width + 150
    score += 1 
  }
    drawMud(mudX, 573);
}

function drawMud(x, y) {
  translate(x, y);
  fill(110, 84, 12)
  ellipse(0, 0, 150, 90)

  resetMatrix();
}

function drawPig() {
stroke("black")

  push() 
  translate(0, pigY - groundY)
  fill(250, 152, 221)
  beginShape();//right arm 
  vertex(183, 464);
  vertex(202, 454);
  vertex(204, 466);
  vertex(219, 466);
  vertex(205, 490);
  endShape();

  beginShape();//left arm 
  vertex(93, 476);
  vertex(68, 469);
  vertex(67, 477);
  vertex(54, 478);
  vertex(74, 498);
  endShape();

  beginShape();//left leg 
  vertex(105, 586);
  vertex(110, 614);
  vertex(123, 611);
  vertex(134, 621);
  vertex(143, 593);
  endShape();

  beginShape();//right leg 
  vertex(163, 590);
  vertex(173, 610);
  vertex(179, 602);
  vertex(192, 606);
  vertex(188, 576);
  endShape();

  fill(250, 152, 221)
  ellipse(88, 373, 40, 40)//left ear 
  ellipse(153, 374, 50, 50)//right ear
  fill(240, 98, 187)

  ellipse(88, 375, 25, 25)//left inner ear 
  ellipse(155, 369, 25, 25)//right inner ear 

  fill(250, 152, 221)
  ellipse(140, 525, 150, 150)//body 
  ellipse(125, 408, 100, 100)//head 
  fill(8, 0, 5)
  ellipse(98, 391, 15, 15)//left eye 
  ellipse(143, 389, 15, 15)//right eye 
  fill(240, 98, 187)
  ellipse(122, 413, 35, 20)//nose
  fill(240, 29, 161)
  ellipse(114, 413, 10, 10)//left nostril 
  ellipse(129, 412, 10, 10)//right nostril 

  fill(240, 98, 187)
  ellipse(107, 506, 10, 10)//left n
  ellipse(159, 506, 10, 10)
  ellipse(107, 547, 10, 10)
  ellipse(157, 548, 10, 10)
  pop()


}

function drawCloud() {
noStroke()
  fill('white');

  ellipse(580, 150, 200, 100)
  ellipse(740, 150, 200, 100)
  ellipse(660, 90, 200, 100)
  
ellipse(200,150,200,100)
ellipse(300,150,200,100)
ellipse(250,90,150,80)
  
stroke("black")
}

function keyPressed() {
  
  
    if (isPlaying == false){
      isPlaying = true  
      score = 0 


      mudX = 1000
      
    

  }
  else if (key == " ") jump()
}

function jump() {
  if (isJumping == false){
  isJumping = true 
  
  pigSpeed = jumpSpeed}
}

function movePig() {
  pigY += pigSpeed
  pigSpeed += gravity


  if (pigY > groundY){
    isJumping = false 
    pigSpeed = 0 
    pigY = groundY 
  }
} 

function collideWithMud() {
  
  let hit = collideCircleCircle(140, pigY + 30,100, mudX - 37, 573, 80) || collideCircleCircle(140, pigY + 30,100, mudX + 37, 573, 80)
  if (hit){
    isPlaying = false 
    noStroke()
    textSize(80 );
    fill(247, 70, 54)
    text("Game Over ",500,750)
    stroke("black")
  }
  
}

function grass(){//Copy and pasted from Bunny Game (student Project)

  for (x = 0; x < 900; x += 400){
      push();
      translate(x - 400, 0);
      //grass
      fill(79, 176, 79);
      beginShape();
      curveVertex(374, 560);
      curveVertex(374, 567);
      curveVertex(374, 567);
      curveVertex(376, 560);
      curveVertex(375, 567);
      curveVertex(378, 557);
      curveVertex(380, 569);
      curveVertex(382, 558);
      curveVertex(382, 569);
      curveVertex(385, 558);
      curveVertex(385, 566);
      curveVertex(387, 559);
      curveVertex(387, 566);
      curveVertex(387, 559);
      curveVertex(387, 570);
      curveVertex(388, 559);
      curveVertex(389, 571);
      curveVertex(390, 563);
      curveVertex(391, 574);
      curveVertex(392, 562);
      curveVertex(393, 574);
      curveVertex(396, 562);
      curveVertex(396, 568);
      curveVertex(398, 556);
      curveVertex(399, 560);
      curveVertex(400, 559);
      curveVertex(400, 565);
      curveVertex(400, 570);
      curveVertex(404, 559);
      curveVertex(404, 567);
      curveVertex(409, 560);
      curveVertex(409, 567);
      curveVertex(413, 562);
      curveVertex(409, 573);
      curveVertex(409, 572);
      curveVertex(409, 566);
      curveVertex(414, 577);
      curveVertex(418, 565);
      curveVertex(417, 572);
      curveVertex(423, 563);
      curveVertex(423, 572);
      curveVertex(425, 564);
      curveVertex(425, 568);
      curveVertex(428, 562);
      curveVertex(428, 567);
      curveVertex(430, 562);
      curveVertex(430, 567);
      curveVertex(432, 562);
      curveVertex(432, 566);
      curveVertex(434, 559);
      curveVertex(434, 566);
      curveVertex(435, 561);
      curveVertex(436, 564);
      curveVertex(439, 561);
      curveVertex(440, 563);
      curveVertex(441, 558);
      curveVertex(444, 562);
      curveVertex(445, 560);
      curveVertex(446, 565);
      curveVertex(455, 559);
      curveVertex(451, 565);
      curveVertex(456, 554);
      curveVertex(456, 567);
      curveVertex(462, 558);
      curveVertex(462, 566);
      curveVertex(468, 558);
      curveVertex(469, 563);
      curveVertex(474, 557);
      curveVertex(474, 561);
      curveVertex(477, 555);
      curveVertex(477, 564);
      curveVertex(480, 556);
      curveVertex(480, 562);
      curveVertex(484, 555);
      curveVertex(482, 563);
      curveVertex(486, 553);
      curveVertex(487, 548);
      curveVertex(487, 557);
      curveVertex(491, 553);
      curveVertex(492, 559);
      curveVertex(495, 553);
      curveVertex(495, 561);
      curveVertex(499, 553);
      curveVertex(499, 558);
      curveVertex(502, 552);
      curveVertex(504, 560);
      curveVertex(507, 554);
      curveVertex(506, 557);
      curveVertex(508, 550);
      curveVertex(509, 556);
      curveVertex(509, 549);
      curveVertex(510, 556);
      curveVertex(511, 551);
      curveVertex(512, 557);
      curveVertex(512, 549);
      curveVertex(514, 558);
      curveVertex(515, 560);
      curveVertex(515, 563);
      curveVertex(515, 556);
      curveVertex(518, 562);
      curveVertex(520, 557);
      curveVertex(522, 564);
      curveVertex(522, 559);
      curveVertex(525, 561);
      curveVertex(525, 559);
      curveVertex(525, 567);
      curveVertex(525, 559);
      curveVertex(526, 554);
      curveVertex(533, 562);
      curveVertex(534, 554);
      curveVertex(536, 559);
      curveVertex(537, 559);
      curveVertex(537, 556);
      curveVertex(538, 565);
      curveVertex(538, 552);
      curveVertex(541, 564);
      curveVertex(544, 553);
      curveVertex(546, 562);
      curveVertex(548, 554);
      curveVertex(548, 559);
      curveVertex(548, 553);
      curveVertex(550, 559);
      curveVertex(553, 552);
      curveVertex(557, 558);
      curveVertex(557, 548);
      curveVertex(560, 557);
      curveVertex(561, 551);
      curveVertex(562, 558);
      curveVertex(562, 553);
      curveVertex(563, 559);
      curveVertex(564, 552);
      curveVertex(571, 561);
      curveVertex(569, 548);
      curveVertex(573, 555);
      curveVertex(575, 552);
      curveVertex(580, 558);
      curveVertex(583, 562);
      curveVertex(591, 554);
      curveVertex(593, 559);
      curveVertex(595, 551);
      curveVertex(597, 557);
      curveVertex(598, 550);
      curveVertex(599, 555);
      curveVertex(600, 549);
      curveVertex(600, 558);
      curveVertex(601, 552);
      curveVertex(603, 564);
      curveVertex(605, 553);
      curveVertex(607, 561);
      curveVertex(609, 551);
      curveVertex(612, 556);
      curveVertex(612, 552);
      curveVertex(613, 559);
      curveVertex(614, 553);
      curveVertex(614, 550);
      curveVertex(616, 559);
      curveVertex(617, 548);
      curveVertex(621, 559);
      curveVertex(624, 550);
      curveVertex(625, 555);
      curveVertex(628, 549);
      curveVertex(629, 559);
      curveVertex(630, 550);
      curveVertex(632, 560);
      curveVertex(633, 553);
      curveVertex(633, 562);
      curveVertex(635, 554);
      curveVertex(635, 565);
      curveVertex(640, 553);
      curveVertex(640, 561);
      curveVertex(643, 556);
      curveVertex(643, 561);
      curveVertex(644, 557);
      curveVertex(645, 569);
      curveVertex(648, 549);
      curveVertex(648, 565);
      curveVertex(651, 554);
      curveVertex(651, 566);
      curveVertex(653, 556);
      curveVertex(653, 563);
      curveVertex(656, 557);
      curveVertex(655, 568);
      curveVertex(660, 558);
      curveVertex(659, 570);
      curveVertex(662, 563);
      curveVertex(665, 570);
      curveVertex(664, 561);
      curveVertex(666, 565);
      curveVertex(667, 560);
      curveVertex(670, 572);
      curveVertex(676, 557);
      curveVertex(677, 550);
      curveVertex(677, 561);
      curveVertex(678, 557);
      curveVertex(678, 568);
      curveVertex(686, 556);
      curveVertex(685, 561);
      curveVertex(691, 561);
      curveVertex(695, 557);
      curveVertex(693, 569);
      curveVertex(696, 563);
      curveVertex(690, 574);
      curveVertex(695, 562);
      curveVertex(692, 576);
      curveVertex(696, 563);
      curveVertex(696, 558);
      curveVertex(696, 567);
      curveVertex(698, 555);
      curveVertex(700, 564);
      curveVertex(703, 555);
      curveVertex(704, 555);
      curveVertex(705, 564);
      curveVertex(707, 558);
      curveVertex(708, 554);
      curveVertex(710, 554);
      curveVertex(710, 566);
      curveVertex(712, 561);
      curveVertex(713, 556);
      curveVertex(714, 553);
      curveVertex(714, 559);
      curveVertex(716, 556);
      curveVertex(714, 563);
      curveVertex(721, 553);
      curveVertex(721, 556);
      curveVertex(721, 553);
      curveVertex(721, 551);
      curveVertex(721, 553);
      curveVertex(722, 549);
      curveVertex(723, 556);
      curveVertex(722, 565);
      curveVertex(724, 557);
      curveVertex(728, 548);
      curveVertex(727, 555);
      curveVertex(726, 561);
      curveVertex(726, 550);
      curveVertex(731, 558);
      curveVertex(733, 550);
      curveVertex(730, 558);
      curveVertex(730, 552);
      curveVertex(732, 562);
      curveVertex(732, 559);
      curveVertex(735, 559);
      curveVertex(736, 557);
      curveVertex(736, 560);
      curveVertex(737, 556);
      curveVertex(737, 559);
      curveVertex(737, 564);
      curveVertex(738, 566);
      curveVertex(740, 558);
      curveVertex(741, 566);
      curveVertex(741, 553);
      curveVertex(741, 565);
      curveVertex(745, 552);
      curveVertex(745, 562);
      curveVertex(746, 554);
      curveVertex(747, 565);
      curveVertex(748, 559);
      curveVertex(749, 568);
      curveVertex(750, 555);
      curveVertex(751, 562);
      curveVertex(755, 551);
      curveVertex(755, 556);
      curveVertex(757, 552);
      curveVertex(762, 550);
      curveVertex(762, 549);
      curveVertex(762, 553);
      curveVertex(763, 550);
      curveVertex(764, 544);
      curveVertex(768, 553);
      curveVertex(768, 548);
      curveVertex(769, 543);
      curveVertex(772, 548);
      curveVertex(771, 550);
      curveVertex(773, 547);
      curveVertex(774, 547);
      curveVertex(775, 544);
      curveVertex(779, 547);
      curveVertex(781, 540);
      curveVertex(781, 546);
      curveVertex(784, 539);
      curveVertex(784, 544);
      curveVertex(784, 541);
      curveVertex(785, 546);
      curveVertex(788, 539);
      curveVertex(787, 542);
      curveVertex(791, 537);
      curveVertex(790, 541);
      curveVertex(791, 537);
      curveVertex(791, 539);
      curveVertex(792, 538);
      curveVertex(794, 535);
      curveVertex(797, 560);
      curveVertex(797, 560);
      curveVertex(798, 560);
      curveVertex(799, 560);
      curveVertex(799, 560);

      curveVertex(800, 560);
      curveVertex(800, 601);
      curveVertex(590, 600);
      curveVertex(371, 599);
      curveVertex(374, 579);
      curveVertex(374, 579);
      endShape();
      pop();

    
  }
}

function drawPiggame(){
  noStroke()
 // textFont(myFont)
  textSize(95);
  fill(247, 70, 54)
  
  text("Pig Jump Game",300,100)
  text("score: " + score, 500,820) 
  
}

function drawContinuedMud(){
  stroke("black")
  fill(110, 84, 12)
  ellipse(250, 750, 150,50)
  ellipse(740,750,150,50)

}

function drawSun(){
  noStroke()
  fill("yellow")
  ellipse(50,60,90,90)
}



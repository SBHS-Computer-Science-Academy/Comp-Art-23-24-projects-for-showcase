

function drawPage0 () {
  background("skyblue");

  Cloud()

  Castle()

  Cloud2()

  Windows()


  fill(214, 143, 36);
  textSize(100)
  text("He Has Everything!", 500, 200);

  drawMouseLines("black")
}

function Cloud(){
  noStroke()
  fill('white')

  circle(82,334,150)
  circle(135,365,130)
  circle(191,337,130)
  circle(181,388,120)
  circle(143,310,100)
}

function Castle(){
 stroke(1)
  fill('white')
  beginShape();
  vertex(443, 503);
  vertex(442, 460);
  vertex(503, 460);
  vertex(504, 500);
  vertex(443, 504);
  endShape();
   fill('white')
  beginShape();
  vertex(448, 460);
  vertex(447, 421);
  vertex(492, 422);
  vertex(495, 460);
  vertex(447, 460);
  endShape();
  fill('gold')
  beginShape();
  vertex(436, 421);
  vertex(508, 422);
  vertex(493, 403);
  vertex(448, 402);
  vertex(435, 421);
  endShape();
   fill('white')
  beginShape();
  vertex(458, 401);
  vertex(458, 358);
  vertex(477, 358);
  vertex(478, 402);
  vertex(457, 401);
  endShape();
fill('gold')
  beginShape();
  vertex(448, 358);
  vertex(489, 358);
  vertex(470, 326);
  vertex(448, 358);
  endShape();
}

function Windows(){
  fill('#11d0f2')
  circle(471, 475,24)
  circle(468, 435,20)
}

function Cloud2(){
  noStroke()
  fill('white')
  circle(481,566,150)
  circle(563,579,120)
  circle(452,590,150)
circle(417, 567,90)
  circle(416, 586,100)
  circle(515,598,120)
}
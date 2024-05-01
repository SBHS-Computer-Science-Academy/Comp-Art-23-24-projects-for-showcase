
function drawPage2(){
  background('darkred')


  drawWall()


  drawCarpet()
  drawStairs()
  drawThrone()
  drawKid2()

  fill("gold")
  rect(670, 182, 100, 20)
  if (mouseIsInRect(670, 182, 100, 20) && mouseIsPressed) {
    hasClickedBox = true;
  }
  if (hasClickedBox) {
    beginShape();
    vertex(430, 169);
    vertex(464, 169);
    vertex(465, 151);
    vertex(458, 158);
    vertex(446, 141);
    vertex(438, 154);
    vertex(431, 149);
    vertex(430, 168);
    endShape();
   }
    fill('black')
    textSize(14)
  text("The boy was immediatly interested by his power, and people became worry of him \nthey kept there distance from him.\n Who knows what he could do.",290,50)

  text("The boy had the crown of the heavans, yet felt empty, \n the world at his hands but no one to be there for him.\n He thought,'Is this the cost of true power?'",787, 139)
  
}

function mouseIsInRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function drawWall() {
  fill('white')
  //rect(0,-300,1000,600)
  rectGradient(0, -300, 1000, 600, "lightgrey", "white",)
}

function drawCarpet(){
  fill('gold')
  beginShape();
  vertex(387, 273);
  vertex(514, 273);
  vertex(620, 797);
  vertex(222, 798);
  vertex(388, 272);
  endShape();
}

function drawStairs() {
  fill("grey");
  beginShape();
  vertex(326, 297);
  vertex(338, 270);
  vertex(597, 271);
  vertex(616, 299);
  vertex(322, 299);
  vertex(328, 293);
  endShape();

  beginShape();
  vertex(349, 269);
  vertex(363, 243);
  vertex(570, 243);
  vertex(584, 269);
  vertex(350, 271);
  endShape();
}

function drawThrone() {
  fill("gold");
  beginShape();
  vertex(397, 244);
  vertex(399, 171);
  vertex(412, 174);
  vertex(410, 213);
  vertex(477, 213);
  vertex(478, 179);
  vertex(491, 173);
  vertex(491, 244);
  vertex(395, 243);
  vertex(399, 171);
  vertex(413, 175);
  vertex(401, 115);
  vertex(452, 60);
  vertex(500, 109);
  vertex(479, 180);
  endShape();
}

function drawKid2() {
  fill("white");
 
  ellipse(444, 178,30);
  beginShape();
  vertex(443, 194);
  vertex(442, 207);
  vertex(428, 216);
  vertex(428, 232);
  vertex(428, 217);
  vertex(442, 207);
  vertex(455, 217);
  vertex(458, 228);
  vertex(455, 218);
  vertex(442, 207);
  vertex(442, 199);
  vertex(454, 200);
  vertex(464, 196);
  vertex(453, 201);
  vertex(442, 199);
  vertex(431, 200);
  vertex(420, 196);
  endShape();
}


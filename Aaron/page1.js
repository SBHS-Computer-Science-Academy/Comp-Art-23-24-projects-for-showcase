let hasClickedBox = false;

function drawPage1(){
background('white')

  fill('black')
  textSize(14)
text("In the heavans,he was born the Heavens shock with immense force,\n each god knew it was the kings birth. ",782,123)
  
  drawRoom()
  drawKid()

  rect(650, 300, 100, 20);

  if (mouseIsInRect(650, 300, 100, 20) && mouseIsPressed) {
    hasClickedBox = true;
  }
  if (hasClickedBox) {
   background(random(255),random(255),random(255),10)
   fill('black')
    textSize(30)
    text("boom...boom...boom",660,300)
  }
  
//text("page1", 500, 200)
}
function mouseIsInRect(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}



function drawRoom(){
 fill('gold')
  rect(0,400,1000,150)

  fill('skyblue')
  ellipse(259,244,90)
  ellipse(486,240,90)

  fill("brown");
  beginShape();
  vertex(819, 475);
  vertex(811, 424);
  vertex(950, 413);
  vertex(967, 461);
  vertex(817, 476);
  endShape();

  // fill("grey");
  // beginShape();
  // vertex(326, 451);
  // vertex(432, 451);
  // vertex(401, 401);
  // vertex(352, 401);
  // vertex(325, 452);
  // vertex(352, 401);
  // vertex(378, 401);
  // endShape();
}


function drawKid(){
  fill('white')
  ellipse(938,437,30)

  beginShape();
  vertex(922, 439);
  vertex(865, 445);
  vertex(853, 463);
  vertex(865, 446);
  vertex(849, 448);
  endShape();

  beginShape();
  vertex(906, 441);
  vertex(887, 429);
  vertex(904, 441);
  vertex(901, 455);
  endShape();
}
function preload(){
  //image from http://www.clker.com/clipart-10381.html
  Tree = loadImage("Tree.png");
  BlackOpsOne = loadFont("BlackOpsOne.ttf");
}

function drawlevel1(){
   background(255);
  BackGround1();
  Tree.resize(0,300);
  image(Tree,75,450);
  image(Tree,500,400);

  EGG1.drawEgg();
  BSK1.drawBasket();
  
  EGG1.moveEgg(0,3,0.07);
  BSK1.moveBasket();
  
  textFont(BlackOpsOne);
  textSize(50);
  fill(255, 31, 49);
  strokeWeight(5);
  stroke(0);
  text(Score,180,50);
  fill(0);
  noStroke();
  text('score',10,48);
}


function BackGround1(x,y,size = 1){
  translate(x,y);
  scale(size);
  noStroke();
  fill(149, 228, 252);
  rect(0,0,1000,800);
  fill(255);
  beginShape();
  ellipse(200,200,100,100);
  ellipse(230,230,100,100);
  ellipse(160,210,100,100);
  ellipse(110,240,100,100);
  ellipse(160,250,100,100);
  endShape();
  beginShape();
  ellipse(600,130,100,100);
  ellipse(570,150,100,100);
  ellipse(520,160,100,100);
  ellipse(630,170,100,100);
  ellipse(570,200,100,100);
  endShape();
  beginShape();
  ellipse(400,400,100,100);
  ellipse(430,430,100,100);
  ellipse(360,410,100,100);
  ellipse(390,440,100,100);
  ellipse(360,450,100,100);
  endShape();
  beginShape();
  ellipse(160,590,100,100);
  ellipse(130,610,100,100);
  ellipse(200,610,100,100);
  ellipse(110,640,100,100);
  ellipse(180,650,100,100);
  endShape();
  beginShape();
  ellipse(660,560,100,100);
  ellipse(670,570,100,100);
  ellipse(620,580,100,100);
  ellipse(690,590,100,100);
  ellipse(670,600,100,100);
  endShape();
  beginShape();
  fill('green');
  rect(0,630,1000,200);
  beginShape();
  fill(255);
  ellipse(250,0,100,100);
  ellipse(230,20,100,100);
  ellipse(210,0,100,100);
  ellipse(190,20,100,100);
  ellipse(290,5,100,100);
  endShape();
}
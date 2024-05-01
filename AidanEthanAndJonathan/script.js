let circleX = 150;
let circleY = 335;

function preload (){
//    song = loadSound('music.mp3');
  
}
function setup() {
  
  let myCanvas = createCanvas(800, 1000);
  myCanvas.parent("myCanvas");
  createConsole("lines");

//song.play();
  x = 40
  y = 20
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  frameRate(60); // fixes a bug in p5.js that increases the framerate the first time you click the mouse
}


function draw() {
  background("black");
  drawMouseLines("white");
  drawWalls()

  stillObstacles()
  if (keyIsDown(87)) { //W key Forwards
    y = y - 1.5
  }

  if (keyIsDown(65)) { //A key Left
    x = x - 1.5
  }

  if (keyIsDown(83)) { //S key Backwards
    y = y + 1.5
  }

  if (keyIsDown(68)) { //D key Right
    x = x + 1.5
  }

   
  circleX = 75 + 75*sin(millis() / 1000 * 360 / 3)
  circleY =  335 + 65*cos(millis() / 1000 * 360 / 3)
  fill("white")
  square(circleX, 275, 30)
  square(circleX, 345, 30)
  square(circleX, 415, 30)
  square(circleX, 485, 30)
  square(circleX, 555, 30)
  square(500,circleY+420,30)
  square(430,circleY+420,30)
  square(360,circleY+420,30)
  square(290,circleY+420,30)
  square(220,circleY+420,30)
  square(150,circleY+420,30)
  checkForWin()
  checkForLoss()
  fill("red")
  ellipse(x, y, 20, 20)
}

function drawWalls() {
  fill("white")
  noStroke()  
  rect(100, 0, 50, 100);
  rect(150, 0, 600, 50)
  rect(700, 50, 50, 400)
  rect(700, 450, 100, 50)
  rect(410, 50, 80, 575)
  rect(525, 230, 100, 450)
  rect(750, 500, 50, 350)
  rect(0, 175, 300, 50)
  rect(0, 730, 50, 800)
  rect(0, 680, 675, 50)
  rect(50, 880, 400, 125)
  rect(150, 800, 600, 50)
  rect(320, 590, 40, 95)
  rect(150, 275, 300, 280)
  rect(250, 90, 50, 95)
  rect(180,590,40 , 95)
  rect(250,550,40,95)
  
  fill(0,10,191)
  rect(575, 850, 300, 300)
}

function stillObstacles() {
  fill("white")
  circle(450, 620, 70)
  circle(625, 230, 60)
   circle(700, 280, 60)
  circle(625, 330, 60)
  circle(700, 380, 60)
  circle(625, 430, 60)
  triangle(525, 230, 575, 90, 625, 235)
  triangle(750, 800, 680, 800, 750, 750)
   triangle(490, 50, 490, 226, 560, 50)
} 

function movingObstacles() {
  rect()
}

function checkForLoss(){
  pixel=get(x,y+10)
  if(pixel[0]==255 && pixel[1]==255 && pixel[2]==255){
    lose()
  }
   pixel=get(x,y-10)
  if(pixel[0]==255 && pixel[1]==255 && pixel[2]==255){
    lose()
  }
  pixel=get(x+10,y)
  if(pixel[0]==255 && pixel[1]==255 && pixel[2]==255){
    lose()
  }
  pixel=get(x-10,y)
  if(pixel[0]==255 && pixel[1]==255 && pixel[2]==255){
    lose()
  }
}

function lose() {
  background("black")
  fill("red")
  textSize(50)
  text("YOU LOSE HAHAHA", 400, 400)
  noLoop()
}
function checkForWin(){
  pixel=get(x,y)
  if(pixel[0]==0 && pixel[1]==10 && pixel[2]==191){
    winner()
  }
  }
  function winner() {
    background("skyblue")
    fill("black")
    textSize(50)
    text("YOU WIN!", 400, 400)
    noLoop()
  }

function mousePressed(){
setup()
  loop()

  

  
}

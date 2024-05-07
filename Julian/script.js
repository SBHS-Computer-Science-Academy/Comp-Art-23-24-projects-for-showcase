// Step 1: draw a shape that you want to animate

let birdy = 390
let gravity= 1
let velocity = 0    
let jumpSpeed = -15
let gameIsOver = false
let score = 0

function preload() {
 gradient = loadImage('gradient.png');



 rubik = loadFont('RubikBurned-Regular.ttf');
}



class Spike {
  // this tells us how to make a new object
  constructor(x1, y1, x2, y2, x3, y3,clr = "grey") {
    // the keyword "this" refers to each object
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.clr = clr;
    this.speed = 5;
  }

  // we need to show the blocks
  show() {
    push();
   
    // fill(this.clr);
    // triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    vertexGradient([this.x1,this.x2,this.x3],[this.y1,this.y2,this.y3], this.x2, this.y2 , "red", "yellow")
    pop();
  }

  // let's move the blocks
  move() {

    this.x1 -= this.speed;
    this.x2 -= this.speed;
    this.x3 -= this.speed;

    if(this.x1 < -100) {
      this.x1 += width + 100;
      this.x2 += width + 100;
      this.x3 += width + 100;
      score+=0.5
    }
     this.checkForGameOver();
  }

  
  checkForCollisions() {
    let poly = []
      poly[0] = createVector(this.x1, this.y1);
      poly[1] = createVector(this.x2, this.y2);
      poly[2] = createVector(this.x3, this.y3);
    
    let hit = collideRectPoly(50,birdy-17,69,40, poly);

    return hit;
  }

  checkForGameOver() {
    let hit = this.checkForCollisions();
    if (hit) {
     
      noFill()
      rect(50,birdy-17,69,40)
      noLoop();
      gameIsOver = true
    }
  }
}




function setup() {
  let myCanvas = createCanvas(800,780);
  myCanvas.parent("myCanvas");

  // createConsole();
  birdy = 390
  velocity = 0;

  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click

  frameCount = 0; // reset frameCount
  score = 0;

  gameIsOver = false
  // Step 3: make one or more new objects

  fill("white");
  textSize(100)
  textFont(rubik)
  // redBlock = new Block(100, 100);

  // let numBlocks = 10;
  spikeArray = [];
  spikeArray.push(new Spike(23,0,70,290,134,0));
   spikeArray.push(new Spike(18,800,71,500,145,800))
  spikeArray.push(new Spike(328,0,368,111,414,0))
  spikeArray.push(new Spike(323,800,369,301,445,800))
  spikeArray.push(new Spike(608,800,640,693,676,800))
  spikeArray.push(new Spike(586,0,640,480,700,0))
  
}

function draw() {
  clear();
  
  image(gradient,0,0,800,780);
 
  

  // step 4: show and move the blocks

  // redBlock.moveKeys();
  // redBlock.show();

  movebird()
  DrawBird()
  
  for (spike of spikeArray) {
    spike.move();
    spike.show();
  }

  

  if(gameIsOver){
    fill("yellow ")
   textSize(50)
    text("burnt", width/2, 200)
  }

  for(let i = fire.length -1; i>= 0; i--){
    fire[i].move();
    fire[i].show();
    fire[i].shrink();

    if(fire[i].radius <= 0 ){
      //remove the dead ones
      fire.splice(i, 1);
    }

  }

  // make more fire!!!
  
  for(let x = 10; x<= width; x+=30){
    let y = 770;
    let radius = random(20,40);
    let b = new Bug(x, y, radius);
    fire.push(b);
  }
  fill("yellow")
  text (ceil(score), 600, 100)
  // loop through all the fire backwards
  // looping backwards lets us see older particles on top
  
}


function checkForScore() {
  if (frameCount % 60 == 0) {
    score += 1
    spawnNewBlock();
  }
}

function keyReleased() {
  if (keyCode == 32) {
    velocity = jumpSpeed;
  }

  if (gameIsOver) {
    setup();
    loop();
  }
}

function movebird() {
  velocity += gravity
  birdy += velocity
  if (birdy > height) {
    birdy = height
    velocity = 0 
  }
}

function DrawBird(){
push()
  translate(100,birdy)
  let birdAngle = map(velocity, -15, 15, -30, 30);
  rotate(birdAngle)
  translate(-400,-400)
 fill("black")
  circle(367,399,25)
 fill("black")
  ellipse(400,400,40,35,)
  fill("black");
  beginShape();
  vertex(393, 385);
  vertex(363, 387);
  vertex(344, 386);
  vertex(358, 392);
  vertex(347, 392);
  vertex(356, 404);
  vertex(360, 410);
  vertex(389, 414);
  vertex(389, 387);
  endShape();
  fill("yellow");
  beginShape();
  vertex(413, 401);
  vertex(408, 410);
  vertex(419, 412);
  vertex(414, 400);
  endShape();
  fill("yellow");
  beginShape();
  vertex(364, 412);
  vertex(358, 415);
  vertex(353, 417);
  vertex(358, 417);
  vertex(354, 419);
  vertex(360, 418);
  vertex(360, 422);
  vertex(361, 416);
  vertex(369, 412);
  vertex(366, 411);
  endShape();
  fill("yellow");
  beginShape();
  vertex(373, 412);
  vertex(364, 418);
  vertex(369, 417);
  vertex(365, 420);
  vertex(371, 418);
  vertex(372, 422);
  vertex(372, 416);
  vertex(376, 413);
  vertex(372, 413);
  endShape();
  pop()
}

// function drawShape() {
//   // fill("black");
//   beginShape();
//   vertex(23, 0);
//   vertex(70, 290);
//   vertex(134, 0);
//   vertex(23, 0);
//   endShape();
// make an empty array
let fire = [];
let numfire = 40;


// credit to (https://editor.p5js.org/aferriss/sketches/SyTRx_bof)



class Bug{
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempR;

    // pick a random color
    this.color = color(255);
    let r = random(3);
    if(r < 1){
      this.color = color(255,100,20,50); // orange
    } else if(r >= 1 && r < 2 ){
      this.color = color(255, 200, 10, 50); // yellow
    } else if(r >= 2 ){
      this.color = color(255, 80, 5, 50); // reddish
    }

  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  move() {
    this.x += random(-5, 5);
    this.y -= random(1, 3);
  }

  shrink(){    
   // shrink size over time
   this.radius-=0.4;
  }



}

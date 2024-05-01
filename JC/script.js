let birdY = 400;
let birdVelocity = 0;
let gravity = 0.5;
let score = 0
class Boxes {
  constructor(x) {
    this.new(x)
  }
  checkForCollisions() {
  // this uses the p5.collide2D library, enabled in Sketch under Libraries
      let hit = collideRectCircle(this.x, 0, this.width, this.topHeight, 100, birdY, 100, 100) || collideRectCircle(this.x, this.bottomY, this.width, this.bottomHeight, 100, birdY, 100, 100);

      if (hit) {
        text("Oh no!!!", width/2, height/2);
        noLoop();
        score = 0; //reset score
        this.speed = 0;
      }
    }
  new(x) {
    this.x = x;
    this.topHeight = random(200,400);
    this.gapHeight = random(200, 400);
    this.bottomHeight = height - this.topHeight - this.gapHeight;
    this.bottomY = this.topHeight + this.gapHeight;

    this.width = 100;

  }
  show() {
    fill("green");
    rect(this.x, 0, this.width, this.topHeight);
    rect(this.x, this.bottomY, this.width, this.bottomHeight);


  }
  move(){
    this.x -= 10    
    if(this.x < -this.width){
      this.new(width); 
      score++;
    }
    this.checkForCollisions();
  }

}

let boxes = []
function setup() {
  let myCanvas = createCanvas(1000, 800);

  birdY = 400;
  birdVelocity = 0;
  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
  boxes = []
  boxes.push(new Boxes(500));
   boxes.push(new Boxes(1000));
}
function draw() {
  background("lightblue");
  fill("yellow")
  text("score: " +score,500,100)
  textSize(50)

  fill("black");
  bird();
  for (let box of boxes){
    box.move()
    box.show();
  }

}

function bird(){
  fill("yellow");
  ellipse(100, birdY, 100, 100);
  fill("white")
  ellipse(110, birdY+-20, 30, 30);
  fill("black")
  ellipse(120, birdY+-20, 10, 10);
  fill("orangered")
  triangle(100, birdY+- -10, 180, birdY+-10, 120, birdY+- 10)

  birdY = birdY + birdVelocity;
  birdVelocity = birdVelocity + gravity;
  if (birdY > height){
    birdY = height;
  }   
}  



function keyPressed(){
  if(key == " "){
    birdVelocity = -10;
 }
}


function mousePressed() {
  setup();
  loop();

}
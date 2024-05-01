
let gridSize = 50;

function preload() {
  laser = loadImage("laser.png");
}

function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");

  hasLost = false;
  hasWon = false;
  //createConsole();

  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click

  frameCount = 0; // reset frameCount
  score = 0;

  // Step 3: make one or more new objects

  player = new Circle(gridSize/2, gridSize/2);

  let numCircles = 10;
  circleArray = [];
  for (let i = 0; i < numCircles; i++) {
    spawnNewCircle();
  }
  let numStars = 200;
  stars = []
  for (let i = 0; i < numStars; i++) {
   stars.push(new Circle(random(width), random(height), "white", 5))
  }
  makeMaze()
  
}

function draw() {
  clear();
  background("black");
  for (star of stars) {
    star.fall();
    star.showStar();
  }
  drawExitSign();
  checkForWin();
  

  
  if (!hasLost && !hasWon) player.moveKeys();
  player.show();



  for (circle of circleArray) {
    circle.move();
    circle.show();
    circle.checkForGameOver();
  }


  for (maze of mazeArray) {
    maze.show();
    maze.checkForGameOver();
  }

  if (hasLost) {
    fill("Gold");
    text("Better luck next time!\nPress space bar to restart", width / 2, height / 2);
  }

  if (hasWon) {
    fill("Gold");
    text("Took you long enough!\nPress space bar to restart", width / 2, height / 2);
  }

}

function drawExitSign() {
  fill("gold")
  noStroke();
  rect(width - 2 * gridSize, 0, gridSize * 2, gridSize)
  fill('black')
  textSize(40);
  text("Exit", 950, 25)
}

function checkForWin() {
  hasWon = collidePointRect(player.x, player.y, width - 2 * gridSize, 0, gridSize * 2, gridSize)
}

function spawnNewCircle() {
  let newCircle = new Circle(random(gridSize,width-gridSize), random(gridSize,height-gridSize), "red");


  circleArray.push(newCircle);

}


function makeMaze() {
  let gridSize = 50;
  mazeArray = []
  for(let x = gridSize; x < width; x += 4 * gridSize) {
    mazeArray.push(new Maze(x, 0, gridSize, "red"))
    mazeArray.push(new Maze(x + gridSize * 2, gridSize, gridSize, "red"))
  }
  
}

function keyPressed() {
  if ((hasLost || hasWon) && keyCode == 32) {
    setup()
  }
}

// disable keyboard scroll.  Source: https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


class Circle {
  // this tells us how to make a new object
  constructor(x, y, clr = "gold", diameter = 30) {
    // the keyword "this" refers to each object
    this.x = x;
    this.y = y;
    this.width = diameter;
    this.clr = clr;
    this.phase = random(360);
    this.period = random(6, 10);
    this.speed = 5;
  }

  // we need to show the circles
  show() {

    circleGradient(this.x, this.y, this.width, "black", this.clr);

  }
  showStar() {
    fill(this.clr);
    ellipse(this.x,this.y, this.width)
  }

  restart() {
    this.x = gridSize/2;
    this.y = gridSize/2;
  }

  // let's move the circles
  move() {
    this.x = width/2 + width/2 * cos(millis()/1000 * 10 / this.period + this.phase)

}

  fall(){
    this.y += this.speed;

    if(this.y > height){
      this.y = 0;
      this.x=random(width);
    }
  }

  moveKeys() {
    if (keyIsDown(LEFT_ARROW) && this.x > this.width/2) this.x -= this.speed;
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width/2) this.x += this.speed;
    if (keyIsDown(UP_ARROW) && this.y > this.width/2) this.y -= this.speed;
    if (keyIsDown(DOWN_ARROW) && this.y < height - this.width/2) this.y += this.speed;
  }

  checkForCollisions() {
    let hit = collideCircleCircle(player.x, player.y, player.width, this.x, this.y, this.width);

    return hit;
  }

  checkForGameOver() {
    let hit = this.checkForCollisions();
    if (hit) {
      hasLost = true
    }
  }
}

class Maze {
  // this tells us how to make a new object
  constructor(x, y, gridSize, clr = "black") {
    // the keyword "this" refers to each object
    this.x = x;
    this.y = y;
    this.width = gridSize;
    this.height = height - gridSize;
    this.clr = clr;

  }

  // we need to show the maze
  show() {

    // rectGradient(this.x, this.y, this.width/2, this.height, color(255, 0, 0, 50), "red", "vertical");

    // rectGradient(this.x + this.width/2, this.y, this.width/2, this.height, "red", color(255,0,0, 50), "vertical");

    image(laser, this.x,this.y, this.width, this.height)

  }


  checkForCollisions() {
    let hit = collideRectCircle(this.x, this.y, this.width, this.height,player.x, player.y, player.width);

    return hit;
  }

  checkForGameOver() {
    let hit = this.checkForCollisions();
    if (hit) {
      hasLost = true;
    }
  }
}

